import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class renewalGroupsPage {
    page: Page;
    readonly renewalGroupsAddButton: Locator;
    readonly clickonBrandDropDown: Locator;
    readonly fillRenewalGroupNametxt: Locator;
    readonly createNewRenewalGroupbtn: Locator;
    readonly successfullyaddedRenewalGroupmmsg: Locator;
    readonly dataUploadRenewalGroupsButton: Locator;
    readonly addnewrecords: Locator;
    readonly UpdateExistingRecordsLink: Locator;
    readonly mapButton: Locator;
    readonly submitButton: Locator;
    readonly uploadIcon: Locator;
    readonly message1: Locator;
    readonly cloneButton: Locator;
    readonly saveCloneButton: Locator;
    readonly renewalGroupSuccessfullyClonedText: Locator;


    constructor(page: Page) {
        this.page = page;
        this.renewalGroupsAddButton = page.getByRole('button', { name: 'Add' })
        this.clickonBrandDropDown = page.locator("//select[contains(@class, 'form-control')]")
        this.fillRenewalGroupNametxt = page.getByPlaceholder('Renewal Group Name')
        this.createNewRenewalGroupbtn = page.getByRole('button', { name: 'Add' }).first()
        this.successfullyaddedRenewalGroupmmsg = page.getByRole('heading', { name: 'renewal group successfully' })
        this.dataUploadRenewalGroupsButton = page.locator("//button[text()='Data Upload']");
        this.addnewrecords = page.locator("//button[@class='dropdown-toggle btn btn-primary']")
        this.UpdateExistingRecordsLink = page.locator("//*[contains(text(), 'Update Existing Records')]")
        this.mapButton = page.getByRole('button', { name: 'Map' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.uploadIcon = page.locator("//i[@class='icon fas fa-cloud-upload-alt']")
        this.message1 = page.locator("//h4[text()='Your batch file has been processed.']")
        this.cloneButton = page.getByRole('row', { name: '- Courage CX Magazine' }).locator('i').nth(1)
        this.saveCloneButton = page.getByRole('button', { name: 'Clone' }).first()
        this.renewalGroupSuccessfullyClonedText = page.locator("//h6[text()='renewal group successfully created']");
    }

    async clickRenewalGroupsAddButton() {
        try {
            await expect(this.renewalGroupsAddButton).toBeVisible({ timeout: 60000 });
            await this.renewalGroupsAddButton.click();
        } catch (error) {
            logger.info(`Element ${this.renewalGroupsAddButton} not found or not visible: `, error);
            console.error(`Element ${this.renewalGroupsAddButton} not found or not visible: `, error);
        }
    }

    async clickBrandDropDown() {
        try {
            await expect(this.clickonBrandDropDown).toBeVisible({ timeout: 60000 });
            await this.clickonBrandDropDown.click();
        } catch (error) {
            logger.info(`Element ${this.clickonBrandDropDown} not found or not visible: `, error);
            console.error(`Element ${this.clickonBrandDropDown} not found or not visible: `, error);
        }
    }


    async selectfromBrandDropDown() {
        try {
            await this.page.getByRole('combobox').selectOption('90');
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }

    async fillRenewalGroupName() {
        try {
            await expect(this.fillRenewalGroupNametxt).toBeVisible({ timeout: 60000 });
            await this.fillRenewalGroupNametxt.fill((faker.commerce.productName()));
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }

    async createNewRenewalGroup() {
        try {
            await expect(this.createNewRenewalGroupbtn).toBeVisible({ timeout: 60000 });
            await this.createNewRenewalGroupbtn.click();
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }

    async validatesuccessfullyaddedRenewalGroup() {
        await expect(this.successfullyaddedRenewalGroupmmsg).toBeVisible({ timeout: 60000 });
        let text = await this.successfullyaddedRenewalGroupmmsg.textContent();
        return text;
    }

    async editRenewalGroup() {
        try {
            await this.page.getByText('Renewal Groups').click();
            await this.page.getByRole('row', { name: '90 - Courage CX' }).locator('i').first().click();
            await this.page.getByPlaceholder('Renewal Group Name').click();
            await this.page.getByPlaceholder('Renewal Group Name').clear();
            await this.page.getByPlaceholder('Renewal Group Name').fill((faker.commerce.productName()));
            await this.page.getByRole('button', { name: 'Update' }).first().click();
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }


    async clickdataUploadGroupRenewalButton() {
        try {
            await expect(this.dataUploadRenewalGroupsButton).toBeVisible({ timeout: 60000 });
            await this.dataUploadRenewalGroupsButton.click();
        } catch (error) {
            logger.info(`Element ${this.dataUploadRenewalGroupsButton} not found or not visible: `, error);
            console.error(`Element ${this.dataUploadRenewalGroupsButton} not found or not visible: `, error);
        }
    }

    async chooseUpdateExistingRecordsLink() {
        try {
            await expect(this.addnewrecords).toBeVisible({ timeout: 60000 });
            await this.addnewrecords.click();
            await expect(this.UpdateExistingRecordsLink).toBeVisible({ timeout: 60000 });
            await this.UpdateExistingRecordsLink.click();
            await expect(this.uploadIcon).toBeVisible({ timeout: 60000 });
            await this.uploadIcon.click();
        } catch (error) {
            logger.info(`Element ${this.UpdateExistingRecordsLink} not found or not visible: `, error);
            console.error(`Element ${this.UpdateExistingRecordsLink} not found or not visible: `, error);
        }
    }

    async selectRGfilestoupload() {
        await this.page.waitForTimeout(50000);
        await this.page.setInputFiles('input[type="file"]', 'Upload/Excel files/update_renewal_group_batch_template.csv');
        await this.page.waitForTimeout(50000);
        await expect(this.mapButton).toBeVisible({ timeout: 60000 });
        await this.mapButton.click();
        await expect(this.submitButton).toBeVisible({ timeout: 60000 });
        await this.submitButton.click();
    }

    async validateSuccessfullyUpdatedRGrecords() {
        await expect(this.message1).toBeVisible({ timeout: 60000 });
        let text = await this.message1.textContent();
        return text;
    }

    async clickonCloneButton() {
        await expect(this.cloneButton).toBeVisible({ timeout: 60000 });
        await this.cloneButton.click();
        await this.page.waitForTimeout(6000);
        await this.page.locator('svg').nth(1).click();
        await this.page.waitForTimeout(3000)
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await this.page.waitForTimeout(6000)
        await expect(this.saveCloneButton).toBeVisible({ timeout: 60000 });
        await this.saveCloneButton.waitFor({ state: 'attached', timeout: 20000 });
        await expect(this.saveCloneButton).toBeEnabled({ timeout: 50000 });
        await this.saveCloneButton.click();
    }

    async validateRenewalGroupSuccessfullyClonedText() {
        try {
            await expect(this.renewalGroupSuccessfullyClonedText).toBeVisible({ timeout: 60000 });
            let text = await this.renewalGroupSuccessfullyClonedText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.renewalGroupSuccessfullyClonedText} not found or not visible: `, error);
            console.error(`Element ${this.renewalGroupSuccessfullyClonedText} not found or not visible: `, error);
        }
    }

}