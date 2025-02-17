import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


interface OffersData {
    offer_id: string | null;
    offer_name: string | null;
}
export class productOffersPage {
    page: Page;
    readonly addButton: Locator;
    readonly filterByOfferID: Locator;
    readonly filterByName: Locator;
    readonly dataUploadButton: Locator;
    readonly editButton: Locator;
    readonly offersRows: Locator;
    readonly requiredText: Locator;
    readonly uploadIcon: Locator;
    readonly message1: Locator;
    readonly message2: Locator;
    readonly mapButton: Locator;
    readonly submitButton: Locator;
    readonly addNewRecordsButton: Locator;
    readonly updateExistingRecordsButton: Locator;
    readonly offerSuccessfullyCreatedText: Locator;
    readonly offerSuccessfullyUpdatedText: Locator;
    readonly updateButton: Locator;
    readonly productOfferNameTF: Locator;
    readonly closeButton: Locator;



    constructor(page: Page) {
        this.page = page;
        this.addButton = page.getByRole('button', { name: 'Add' })
        this.filterByOfferID = page.locator("//input[@value='Filter By Offer ID']")
        this.filterByName = page.locator("//input[@value='Filter By Name']")
        this.dataUploadButton = page.locator("//button[text()='Data Upload']")
        this.updateButton = page.getByRole('button', { name: 'Update' }).first()
        this.editButton = page.getByRole('gridcell', { name: ' ' }).locator('i').first()
        this.offersRows = page.locator("//div[@class='rt-tr -odd']")
        this.requiredText = page.locator("//small[@class='form-text text-danger']")
        this.uploadIcon = page.locator("//i[@class='icon fas fa-cloud-upload-alt']")
        this.message1 = page.locator("//h4[text()='Your batch file has been processed.']")
        this.message2 = page.locator("//h4[text()='Total records uploaded: ']")
        this.mapButton = page.getByRole('button', { name: 'Map' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.addNewRecordsButton = page.getByRole('button', { name: 'Add New Records' })
        this.updateExistingRecordsButton = page.getByRole('button', { name: 'Update Existing Records' })
        this.offerSuccessfullyCreatedText = page.getByText('offer successfully created')
        this.offerSuccessfullyUpdatedText = page.getByText('offer successfully updated')
        this.productOfferNameTF = page.getByPlaceholder('Product Offer Name')
        this.closeButton = page.locator("//h6[text()='Unexpected error experienced']/preceding-sibling::button")





    }
    async clickAddButton() {
        try {
            await expect(this.addButton).toBeVisible({ timeout: 60000 });
            await this.addButton.waitFor({ state: 'attached', timeout: 20000 });
            await expect(this.addButton).toBeEnabled({ timeout: 50000 });
            await this.addButton.click();
        } catch (error) {
            logger.info(`Element ${this.addButton} not found or not visible: `, error);
            console.error(`Element ${this.addButton} not found or not visible: `, error);
        }
    }


    async enterFilterByOfferID() {
        try {
            await expect(this.filterByOfferID).toBeVisible({ timeout: 60000 });
            await this.filterByOfferID.fill('PO-1382');
        } catch (error) {
            logger.info(`Element ${this.filterByOfferID} not found or not visible: `, error);
            console.error(`Element ${this.filterByOfferID} not found or not visible: `, error);
        }
    }

    async enterFilterByName() {
        try {
            await expect(this.filterByName).toBeVisible({ timeout: 60000 });
            await this.filterByName.fill('Rovertest');
        } catch (error) {
            logger.info(`Element ${this.filterByName} not found or not visible: `, error);
            console.error(`Element ${this.filterByName} not found or not visible: `, error);
        }
    }

    async clickDataUploadButton() {
        try {
            await expect(this.dataUploadButton).toBeVisible({ timeout: 60000 });
            await this.dataUploadButton.click();
            await expect(this.addNewRecordsButton).toBeVisible({ timeout: 60000 });
            await this.addNewRecordsButton.click();
            await expect(this.updateExistingRecordsButton).toBeVisible({ timeout: 60000 });
            await this.updateExistingRecordsButton.click();
            await expect(this.uploadIcon).toBeVisible({ timeout: 60000 });
            await this.uploadIcon.click();
        } catch (error) {
            logger.info(`Element ${this.dataUploadButton} not found or not visible: `, error);
            console.error(`Element ${this.dataUploadButton} not found or not visible: `, error);
        }
    }

    async getOffersRowCount(): Promise<OffersData[]> {
        let numberOfRows = await this.offersRows.count();
        if (numberOfRows > 0) {
            let arr = await this.getOffersData(numberOfRows);
            return arr;
        } else {
            // Handle case when there are no rows
            console.log("No rows found in offersRows.");
            return [];
        }
    }

    async getOffersData(numberOfRows: number): Promise<OffersData[]> {
        const arr = [];
        logger.info("NumberOfRows " + numberOfRows);
        for (let i = 1; i <= numberOfRows; i++) {
            const obj: OffersData = {
                offer_id: null,
                offer_name: null,
            };
            expect(this.page.locator(`(//div[@class='rt-td'])[1]`)).toBeVisible({ timeout: 20000 });
            obj.offer_id = await this.page.locator(`(//div[@class='rt-td'])[1]`).textContent();
            expect(this.page.locator(`(//div[@class='rt-td'])[2]`)).toBeVisible({ timeout: 20000 });
            obj.offer_name = await this.page.locator(`(//div[@class='rt-td'])[2]`).textContent();
            arr.push(obj)
        }
        return arr
    }

    async validateRequiredText() {
        await expect(this.requiredText).toBeVisible({ timeout: 60000 });
        let text = await this.requiredText.textContent();
        return text;
    }

    async addButtonInAddNewOffer() {
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }

    async chooseFileToUpload() {
        await this.page.waitForTimeout(5000)
        await this.page.setInputFiles('input[type="file"]', 'Upload/Excel files/file.csv');
        await this.page.waitForTimeout(5000)
        await expect(this.mapButton).toBeVisible({ timeout: 60000 });
        await this.mapButton.click();
        await expect(this.submitButton).toBeVisible({ timeout: 60000 });
        await this.submitButton.click();
    }

    async validateFileUploaded() {
        await expect(this.message2).toBeVisible({ timeout: 60000 });
        let text = await this.message2.textContent();
        return text;
    }


    async validateOfferSuccessfullyCreatedText() {
        try {
            await expect(this.closeButton).toBeVisible({ timeout: 60000 });
            await this.closeButton.click();
            await expect(this.offerSuccessfullyCreatedText).toBeVisible({ timeout: 60000 });
            await this.offerSuccessfullyCreatedText.waitFor({ state: 'attached', timeout: 20000 })
            let text = await this.offerSuccessfullyCreatedText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.offerSuccessfullyCreatedText} not found or not visible: `, error);
            console.error(`Element ${this.offerSuccessfullyCreatedText} not found or not visible: `, error);
        }
    }

    async validateOfferSuccessfullyUpdatedText() {
        await expect(this.offerSuccessfullyUpdatedText).toBeVisible({ timeout: 60000 });
        let text = await this.offerSuccessfullyUpdatedText.textContent();
        return text;
    }

    async editProductOffer() {
        await expect(this.filterByOfferID).toBeVisible({ timeout: 60000 });
        await this.filterByOfferID.fill('PO-1363')
        await expect(this.editButton).toBeVisible({ timeout: 60000 });
        await this.editButton.click();
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await expect(this.productOfferNameTF).toBeVisible({ timeout: 60000 });
        await this.productOfferNameTF.click()
        await this.productOfferNameTF.clear()
        await this.productOfferNameTF.fill(faker.commerce.productName())
        await expect(this.updateButton).toBeVisible({ timeout: 60000 });
        await this.updateButton.click();
    }


}   