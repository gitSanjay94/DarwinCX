import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';


export class lettershopItemsPage {
    page: Page;
    readonly Name: Locator;
    readonly brandDropdown: Locator;
    readonly componentTypeDropdown: Locator;
    readonly componentCode: Locator;
    readonly editButton: Locator;
    readonly updateButton: Locator;
    readonly requiredText: Locator;
    readonly cloneFirstID: Locator;
    readonly cloneButton: Locator;
    readonly fillDescription: Locator;
    readonly lettershopItemSuccessfullyUpdatedText: Locator;
    readonly lettershopItemSuccessfullyCreatedText: Locator;



    constructor(page: Page) {
        this.page = page;
        this.Name = page.getByPlaceholder('Name')
        this.brandDropdown = page.locator('select[name="ProductID"]')
        this.componentTypeDropdown = page.locator('select[name="ComponentType"]')
        this.componentCode = page.getByPlaceholder('Component Code')
        this.editButton = page.locator("(//i[@class='fa fa-edit fa-lg pointer'])[1]")
        this.updateButton = page.getByRole('button', { name: 'Update' }).first()
        this.cloneButton = page.getByRole('button', { name: 'Clone' }).first()
        this.requiredText = page.locator("(//small[@class='form-text text-danger'])[1]")
        this.cloneFirstID = page.locator("(//i[@class='fa fa-clone fa-border pointer ml-2'])[1]")
        this.fillDescription = page.getByPlaceholder('Description')
        this.lettershopItemSuccessfullyUpdatedText = page.locator("//h6[text()='lettershop item successfully updated']")
        this.lettershopItemSuccessfullyCreatedText = page.locator("//h6[text()='lettershop item successfully created']")

    }




    async addNewLettershopItem() {
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await expect(this.Name).toBeVisible({ timeout: 6000 });
        await this.Name.click();
        await this.Name.fill('test Lettershop Item ' + faker.number.int({ min: 1, max: 100 }).toString());
        await this.page.waitForTimeout(6000);
        await expect(this.brandDropdown).toBeVisible({ timeout: 6000 });
        await this.brandDropdown.selectOption('90 - Courage CX Magazine');
        await expect(this.fillDescription).toBeVisible({ timeout: 6000 });
        await this.fillDescription.fill('lettershop item description ' + faker.number.int({ min: 1, max: 100 }).toString());
        await expect(this.componentTypeDropdown).toBeVisible({ timeout: 6000 });
        await this.componentTypeDropdown.selectOption('Sticker');
        await expect(this.componentCode).toBeVisible({ timeout: 6000 });
        await this.componentCode.click();
        await this.componentCode.fill('testCode' + faker.number.int({ min: 1, max: 100 }).toString());
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }

    async editLettershopItem() {
        await expect(this.editButton).toBeVisible({ timeout: 6000 });
        await this.editButton.click();
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await expect(this.Name).toBeVisible({ timeout: 6000 });
        await this.Name.clear();
        await this.Name.fill('editTest Lettershop Item ' + faker.number.int({ min: 1, max: 100 }).toString());
        await this.page.waitForTimeout(6000);
        await expect(this.updateButton).toBeVisible({ timeout: 6000 });
        await this.updateButton.click();
    }

    async validateRequiredText() {
        await expect(this.requiredText).toBeVisible({ timeout: 6000 });
        let text = await this.requiredText.textContent();
        return text;
    }


    async clickCloneFirstID() {
        await this.page.waitForTimeout(6000);
        await expect(this.cloneFirstID).toBeVisible({ timeout: 6000 });
        await this.cloneFirstID.click();
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await expect(this.cloneButton).toBeVisible({ timeout: 6000 });
        await this.cloneButton.click();
    }

    async validateLettershopItemSuccessfullyUpdatedText() {
        await expect(this.lettershopItemSuccessfullyUpdatedText).toBeVisible({ timeout: 6000 });
        let text = await this.lettershopItemSuccessfullyUpdatedText.textContent();
        return text;
    }
    
    async validateLettershopItemSuccessfullyCreatedText() {
        await expect(this.lettershopItemSuccessfullyCreatedText).toBeVisible({ timeout: 6000 });
        let text = await this.lettershopItemSuccessfullyCreatedText.textContent();
        return text;
    }


}