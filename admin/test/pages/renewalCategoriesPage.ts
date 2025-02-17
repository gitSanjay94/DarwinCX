import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class renewalCategoriesPage {
    page: Page;
    readonly renewalCategoriesAddButton: Locator;
    readonly clickonBrandDropDown: Locator;
    readonly fillRenewalGroupNametxt: Locator;
    readonly createRenewalCategorybtn: Locator;
    readonly successfullyaddedRenewalCategorymmsg: Locator;
    readonly renewalCategoryname: Locator;
    readonly renewalCategoryBrand: Locator;
    readonly countryRenewalJourneyDropDown: Locator;
    readonly selectCountryRenewalJourney: Locator;
    readonly PurchaseType: Locator;
    readonly renewalCategoryCode: Locator;
    readonly dataUploadRenewalCategoryButton: Locator;
    readonly addnewrecords: Locator;
    readonly UpdateExistingRecordsLink: Locator;
    readonly mapButton: Locator;
    readonly submitButton: Locator;
    readonly uploadIcon: Locator;
    readonly message1: Locator;
    readonly cloneButton: Locator;
    readonly saveCloneButton: Locator;
    readonly renewalCategorySuccessfullyClonedText: Locator;



    constructor(page: Page) {
        this.page = page;
        this.renewalCategoriesAddButton = page.getByRole('button', { name: 'Add' })
        this.clickonBrandDropDown = page.locator("//select[contains(@class, 'form-control')]")
        this.fillRenewalGroupNametxt = page.getByPlaceholder('Renewal Group Name')
        this.createRenewalCategorybtn = page.getByRole('button', { name: 'Add' }).nth(1)
        this.successfullyaddedRenewalCategorymmsg = page.locator("//h6[text()='renewal category successfully created']")
        this.renewalCategoryCode = page.getByPlaceholder('Renewal Category Code')
        this.renewalCategoryname = page.getByPlaceholder('Renewal Category Name')
        this.renewalCategoryBrand = page.locator('select[name="Brand"]')
        this.countryRenewalJourneyDropDown = page.getByText('Select...').first()
        this.selectCountryRenewalJourney = page.locator('#react-select-5-option-0')
        this.PurchaseType = page.locator('select[name="PurchaseType"]')
        this.dataUploadRenewalCategoryButton = page.locator("//button[text()='Data Upload']");
        this.addnewrecords = page.locator("//button[@class='dropdown-toggle btn btn-primary']")
        this.UpdateExistingRecordsLink = page.locator("//*[contains(text(), 'Update Existing Records')]")
        this.mapButton = page.getByRole('button', { name: 'Map' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.uploadIcon = page.locator("//i[@class='icon fas fa-cloud-upload-alt']")
        this.message1 = page.locator("//h4[text()='Your batch file has been processed.']")
        this.cloneButton = page.getByRole('row', { name: '- Courage CX Magazine' }).locator('i').nth(1)
        this.saveCloneButton = page.getByRole('button', { name: 'Clone' }).first()
        this.renewalCategorySuccessfullyClonedText = page.locator("//h6[text()='renewal category successfully created']");

    }

    async clickRenewalCategoriesAddButton() {
        try {
            await expect(this.renewalCategoriesAddButton).toBeVisible({ timeout: 60000 });
            await this.renewalCategoriesAddButton.click();
        } catch (error) {
            logger.info(`Element ${this.renewalCategoriesAddButton} not found or not visible: `, error);
            console.error(`Element ${this.renewalCategoriesAddButton} not found or not visible: `, error);
        }
    }

    async fillrenewalCategoryname() {
        try {
            await expect(this.renewalCategoryname).toBeVisible({ timeout: 60000 });
            await this.renewalCategoryname.fill((faker.commerce.productName()));
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }

    async fillrenewalCategorycode() {
        try {
            await expect(this.renewalCategoryCode).toBeVisible({ timeout: 60000 });
            await this.renewalCategoryCode.fill('RT');
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }

    async clickBrandDropDown() {
        try {
            await expect(this.renewalCategoryBrand).toBeVisible({ timeout: 60000 });
            await this.renewalCategoryBrand.click();
        } catch (error) {
            logger.info(`Element ${this.renewalCategoryBrand} not found or not visible: `, error);
            console.error(`Element ${this.renewalCategoryBrand} not found or not visible: `, error);
        }
    }


    async selectcountryRenewalJourneyDropDown() {
        try {
            await this.page.locator('.css-g1d714-ValueContainer').first().click();
            await this.page.getByText('test Bill Journey 95 Clone (I4)', { exact: true }).click();
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }



    async selectfromBrandDropDown() {
        try {
            await this.page.locator('select[name="Brand"]').selectOption('90');
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }

    async selectPurchaseType() {
        try {
            await this.page.locator('select[name="PurchaseType"]').selectOption('Gift');
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }


    async createNewRenewalCategory() {
        try {
            await expect(this.createRenewalCategorybtn).toBeVisible({ timeout: 60000 });
            await this.createRenewalCategorybtn.click({ force: true });
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }

    async validatesuccessfullyaddedRenewalCategory() {
        await expect(this.successfullyaddedRenewalCategorymmsg).toBeVisible({ timeout: 60000 });
        let text = await this.successfullyaddedRenewalCategorymmsg.textContent();
        return text;
    }

    async editRenewalCategory() {
        try {
            await this.page.getByRole('row', { name: '90 - Courage CX' }).locator('i').first().click();
            await this.page.getByPlaceholder('Renewal Category Name').click();
            await this.page.getByPlaceholder('Renewal Category Name').clear();
            await this.page.getByPlaceholder('Renewal Category Name').fill((faker.commerce.productName()));
            await this.page.getByRole('button', { name: 'Update' }).first().click();
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
        }
    }


    async clickdataUploadGRenewalCategoryButton() {
        try {
            await expect(this.dataUploadRenewalCategoryButton).toBeVisible({ timeout: 60000 });
            await this.dataUploadRenewalCategoryButton.click();
        } catch (error) {
            logger.info(`Element ${this.dataUploadRenewalCategoryButton} not found or not visible: `, error);
            console.error(`Element ${this.dataUploadRenewalCategoryButton} not found or not visible: `, error);
        }
    }

    async chooseUpdateExistingRecordsLink() {
        try {
            await expect(this.addnewrecords).toBeVisible({ timeout: 60000 });
            await this.addnewrecords.click();
            await expect(this.UpdateExistingRecordsLink).toBeVisible({ timeout: 60000 });
            await this.UpdateExistingRecordsLink.click();
            await this.uploadIcon.click();
        } catch (error) {
            logger.info(`Element ${this.UpdateExistingRecordsLink} not found or not visible: `, error);
            console.error(`Element ${this.UpdateExistingRecordsLink} not found or not visible: `, error);
        }
    }

    async selectRCfilestoupload() {
        await this.page.waitForTimeout(5000);
        await this.page.setInputFiles('input[type="file"]', 'Upload/Excel files/update_renewal_category_batch_template.csv');
        await this.page.waitForTimeout(5000);
        await expect(this.mapButton).toBeVisible({ timeout: 60000 });
        await this.mapButton.click();
        await expect(this.submitButton).toBeVisible({ timeout: 60000 });
        await this.submitButton.click();
    }

    async validateSuccessfullyUpdatedRCrecords() {
        await expect(this.message1).toBeVisible({ timeout: 60000 });
        let text = await this.message1.textContent();
        return text;
    }

    async clickonCloneButton() {
        await expect(this.cloneButton).toBeVisible({ timeout: 60000 });
        await this.cloneButton.click();
        await this.page.waitForTimeout(6000);
        await this.page.locator('svg').nth(1).click();
        await this.page.waitForTimeout(3000);
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await this.page.waitForTimeout(6000);
        await expect(this.saveCloneButton).toBeVisible({ timeout: 60000 });
        await this.saveCloneButton.waitFor({ state: 'attached', timeout: 20000 })
        await expect(this.saveCloneButton).toBeEnabled({ timeout: 50000 });
        await this.saveCloneButton.click();
    }

    async validateRenewalCategorySuccessfullyClonedText() {
        try {
            await expect(this.renewalCategorySuccessfullyClonedText).toBeVisible({ timeout: 60000 });
            let text = await this.renewalCategorySuccessfullyClonedText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.renewalCategorySuccessfullyClonedText} not found or not visible: `, error);
            console.error(`Element ${this.renewalCategorySuccessfullyClonedText} not found or not visible: `, error);
        }
    }


}