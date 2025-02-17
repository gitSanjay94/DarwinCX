import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';


export class lettershopBundlesPage {
    page: Page;
    readonly Name: Locator;
    readonly brandDropdown: Locator;
    readonly packageType: Locator;
    readonly updateButton: Locator;
    readonly postageClassDropdown: Locator;
    readonly descriptionInput: Locator;
    readonly editButton: Locator;
    readonly lettershopBundleSuccessfullyUpdatedText: Locator;
    readonly lettershopBundleSuccessfullyCreatedText: Locator;



    constructor(page: Page) {
        this.page = page;
        this.Name = page.getByPlaceholder('Name')
        this.brandDropdown = page.locator('select[name="ProductID"]')
        this.postageClassDropdown = page.locator('select[name="PostageClass"]')
        this.packageType = page.getByPlaceholder('Package Type')
        this.descriptionInput = page.getByPlaceholder('Description')
        this.editButton = page.locator("(//i[@class='fa fa-edit fa-lg pointer'])[1]")
        this.updateButton = page.getByRole('button', { name: 'Update' }).first()
        this.lettershopBundleSuccessfullyUpdatedText = page.locator("//h6[text()='lettershop bundle successfully updated']")
        this.lettershopBundleSuccessfullyCreatedText = page.locator("//h6[text()='lettershop bundle successfully created']")

    }




    async addNewLettershopBundle() {
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await expect(this.Name).toBeVisible({ timeout: 6000 });
        await this.Name.click();
        await this.Name.fill('test Lettershop Bundle ' + faker.number.int({ min: 1, max: 100 }).toString());
        await this.page.waitForTimeout(6000)
        await expect(this.brandDropdown).toBeVisible({ timeout: 6000 });
        await this.brandDropdown.selectOption('90 - Courage CX Magazine');
        await expect(this.descriptionInput).toBeVisible({ timeout: 6000 });
        await this.descriptionInput.click();
        await this.descriptionInput.fill(faker.lorem.words());
        await expect(this.postageClassDropdown).toBeVisible({ timeout: 6000 });
        await this.postageClassDropdown.selectOption('Second Class')
        await expect(this.packageType).toBeVisible({ timeout: 6000 });
        await this.packageType.click();
        await this.packageType.fill('test Customer Package' + faker.number.int({ min: 1, max: 100 }).toString());
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }

    async editLettershopBundle() {
        await expect(this.editButton).toBeVisible({ timeout: 6000 });
        await this.editButton.click();
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await expect(this.Name).toBeVisible({ timeout: 6000 });
        await this.Name.clear();
        await this.Name.fill('editTest Lettershop Bundle ' + faker.number.int({ min: 1, max: 100 }).toString());
        await this.page.waitForTimeout(6000);
        await expect(this.packageType).toBeVisible({ timeout: 6000 });
        await this.packageType.clear();
        await this.packageType.fill('edit Customer Package' + faker.number.int({ min: 1, max: 100 }).toString());
        await expect(this.updateButton).toBeVisible({ timeout: 6000 });
        await this.updateButton.click();
    }

    async validateLettershopBundleSuccessfullyUpdatedText() {
        await expect(this.lettershopBundleSuccessfullyUpdatedText).toBeVisible({ timeout: 6000 });
        let text = await this.lettershopBundleSuccessfullyUpdatedText.textContent();
        return text;
    }

    async validateLettershopBundleSuccessfullyCreatedText() {
        await expect(this.lettershopBundleSuccessfullyCreatedText).toBeVisible({ timeout: 6000 });
        let text = await this.lettershopBundleSuccessfullyCreatedText.textContent();
        return text;
    }




}