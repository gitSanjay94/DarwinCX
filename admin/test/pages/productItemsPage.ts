import { expect, FrameLocator, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';

interface productItemsData {
    item_id: string | null;
    item_name: string | null;
}
export class productItemsPage {

    rowproductitemSelector: string = "div.table-responsive >table >tbody >tr";
    productItemNotExist: string = "//div[contains(text(),'No Data')]";
    page: Page;
    readonly filterByItemIds: Locator;
    readonly filterByNames: Locator;
    readonly filterByBrands: Locator;
    readonly filterByQuantities: Locator;
    readonly filterByPrices: Locator;
    readonly filterByDeliveryType: Locator;
    readonly productItemRowList: Locator;
    readonly addProductItemButton: Locator;
    readonly dataUploadProductItemButton: Locator;
    readonly dataExportProductItemButton: Locator;
    readonly productItemsRows: Locator;
    readonly validationmsg: Locator;
    readonly successfullyaddedProductItemmsg: Locator;
    readonly addnewrecords: Locator;
    readonly UpdateExistingRecordsLink: Locator;
    readonly mapButton: Locator;
    readonly submitButton: Locator;
    readonly uploadIcon: Locator;
    readonly message1: Locator;
    readonly message2: Locator;
    readonly previousbutton: Locator;
    readonly nextbutton: Locator;
    readonly jumptopage: Locator;
    readonly cloneButton: Locator;
    readonly saveCloneButton: Locator;
    readonly productItemSuccessfullyClonedText: Locator;
    itemId: any;

    constructor(page: Page) {
        this.page = page;
        this.filterByItemIds = page.locator("//input[@value='Filter By Item ID']");
        this.filterByNames = page.locator("//input[@value='Filter By Name']");
        this.filterByBrands = page.locator("//input[@value='Filter By Brand']");
        this.filterByQuantities = page.locator("//input[@value='Filter By Quantity']");
        this.filterByPrices = page.locator("//input[@value='Filter By Price']");
        this.filterByDeliveryType = page.locator("//input[@value='Filter By Delivery Type']");
        this.addProductItemButton = page.locator("//button[text()='Add']");
        this.dataUploadProductItemButton = page.locator("//button[text()='Data Upload']");
        this.dataExportProductItemButton = page.locator("//button[text()='Data Export']");
        this.productItemRowList = page.locator("div.table-responsive >table >tbody >tr");
        this.productItemsRows = page.locator("//div[@class='rt-tr -odd']")
        this.validationmsg = page.locator("//small[@class='form-text text-danger']").nth(0)
        this.successfullyaddedProductItemmsg = page.locator("//h6[text()='item successfully created']")
        this.addnewrecords = page.locator("//button[@class='dropdown-toggle btn btn-primary']")
        this.UpdateExistingRecordsLink = page.locator("//*[contains(text(), 'Update Existing Records')]")
        this.mapButton = page.getByRole('button', { name: 'Map' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.uploadIcon = page.locator("//i[@class='icon fas fa-cloud-upload-alt']")
        this.message1 = page.locator("//h4[text()='Your batch file has been processed.']")
        this.message2 = page.locator("//h4[text()='Total records uploaded: ']")
        this.previousbutton = page.getByRole('button', { name: 'Previous' })
        this.nextbutton = page.getByRole('button', { name: 'Next' })
        this.jumptopage = page.getByLabel('jump to page')
        this.cloneButton = page.getByRole('gridcell', { name: ' ' }).locator('i').nth(1)
        this.saveCloneButton = page.getByRole('button', { name: 'Clone' }).first()
        this.productItemSuccessfullyClonedText = page.locator("//h6[text()='item successfully created']");
    }

    async enterFilterByItemIDs() {
        try {
            await expect(this.filterByItemIds).toBeVisible({ timeout: 60000 })
            await this.filterByItemIds.fill('PI-1476')

        } catch (error) {
            logger.info(`Element ${this.filterByItemIds} not found or not visible: `, error);
            console.error(`Element ${this.filterByItemIds} not found or not visible: `, error);
        }
    }

    async enterfilterByNames() {
        try {
            await expect(this.filterByNames).toBeVisible({ timeout: 60000 })
            await this.filterByNames.fill('JP 1 Year - T-Shirt Premium - Radio Selector without Premium with Sub Pref JP')

        } catch (error) {
            logger.info(`Element ${this.filterByNames} not found or not visible: `, error);
            console.error(`Element ${this.filterByNames} not found or not visible: `, error);
        }
    }

    async enterFilterByBrands() {
        try {
            await expect(this.filterByBrands).toBeVisible({ timeout: 60000 });
            await this.filterByBrands.fill('90 - Courage CX Magazine')
        } catch (error) {
            logger.info(`Element ${this.filterByBrands} not found or not visible: `, error);
            console.error(`Element ${this.filterByBrands} not found or not visible: `, error);
        }
    }

    async enterFilterByQuantities() {
        try {
            await expect(this.filterByQuantities).toBeVisible({ timeout: 60000 });
            await this.filterByQuantities.fill('12')
        } catch (error) {
            logger.info(`Element ${this.filterByQuantities} not found or not visible: `, error);
            console.error(`Element ${this.filterByQuantities} not found or not visible: `, error);
        }
    }

    async enterFilterByPrices() {
        try {
            await expect(this.filterByPrices).toBeVisible({ timeout: 60000 });
            await this.filterByPrices.fill('12')
        } catch (error) {
            logger.info(`Element ${this.filterByPrices} not found or not visible: `, error);
            console.error(`Element ${this.filterByPrices} not found or not visible: `, error);
        }
    }

    async enterFilterByDeliveryType() {
        try {
            await expect(this.filterByDeliveryType).toBeVisible({ timeout: 60000 });
            await this.filterByDeliveryType.fill('print')
        } catch (error) {
            logger.info(`Element ${this.filterByPrices} not found or not visible: `, error);
            console.error(`Element ${this.filterByPrices} not found or not visible: `, error);
        }
    }
    async clickaddProductItemButton() {
        try {
            await expect(this.addProductItemButton).toBeVisible({ timeout: 60000 });
            await this.addProductItemButton.click();
        } catch (error) {
            logger.info(`Element ${this.addProductItemButton} not found or not visible: `, error);
            console.error(`Element ${this.addProductItemButton} not found or not visible: `, error);
        }
    }
    async clickdataUploadProductItemButton() {
        try {
            await expect(this.dataUploadProductItemButton).toBeVisible({ timeout: 60000 });
            await this.dataUploadProductItemButton.click();
        } catch (error) {
            logger.info(`Element ${this.dataUploadProductItemButton} not found or not visible: `, error);
            console.error(`Element ${this.dataUploadProductItemButton} not found or not visible: `, error);
        }
    }

    async selectUpdateExistingRecordsLink() {
        try {
            await expect(this.addnewrecords).toBeVisible({ timeout: 60000 });
            await this.addnewrecords.click();
            await expect(this.UpdateExistingRecordsLink).toBeVisible({ timeout: 60000 });
            await this.UpdateExistingRecordsLink.click();
            await expect(this.uploadIcon).toBeVisible({ timeout: 6000 });
            await this.uploadIcon.click();
        } catch (error) {
            logger.info(`Element ${this.UpdateExistingRecordsLink} not found or not visible: `, error);
            console.error(`Element ${this.UpdateExistingRecordsLink} not found or not visible: `, error);
        }
    }

    async selectfilestoupload() {
        await this.page.waitForTimeout(5000);
        await this.page.setInputFiles('input[type="file"]', 'Upload/Excel files/Testuploaddata.csv');
        await this.page.waitForTimeout(5000);
        await expect(this.mapButton).toBeVisible({ timeout: 6000 });
        await this.mapButton.click();
        await expect(this.submitButton).toBeVisible({ timeout: 6000 });
        await this.submitButton.click();
    }

    async validatesuccessfullyupdatedexistingrecords() {
        await expect(this.message1).toBeVisible({ timeout: 6000 });
        let text = await this.message1.textContent();
        return text;
    }

    async getitemIdInSearchResults() {
        logger.info("Item ID IS ", await this.itemId);
        return await this.itemId;

    }
    async addButtonInAddNewitem() {
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }

    async validatealertmsg() {
        await expect(this.validationmsg).toBeVisible({ timeout: 6000 });
        let text = await this.validationmsg.textContent();
        return text;
    }

    async addNewProductItem() {
        await this.page.locator('select[name="brand"]').selectOption('90');
        await this.page.getByPlaceholder('Product Item Name').click();
        await this.page.getByPlaceholder('Product Item Name').fill(faker.commerce.productName());
        await this.page.getByPlaceholder('Quantity').click();
        await this.page.getByPlaceholder('Quantity').fill(faker.number.int({ min: 1, max: 100 }).toString());
        await this.page.locator('select[name="DeliveryType"]').selectOption('Digital and Archive');
        await this.page.getByPlaceholder('Gross Amount').click();
        await this.page.getByPlaceholder('Gross Amount').fill(faker.commerce.price());
        await this.page.getByPlaceholder('Client Remit').click();
        await this.page.getByPlaceholder('Client Remit').fill(faker.finance.amount(0, 10, 2));
        await this.page.locator('select[name="currency"]').selectOption('CAD');
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }
    async getProductItemsRowCount(): Promise<productItemsData[]> {
        let numberOfRows = await this.productItemsRows.count();
        if (numberOfRows > 0) {
            let arr = await this.getProductItemData(numberOfRows);
            return arr;
        } else {
            // Handle case when there are no rows
            return [];
        }
    }



    async getProductItemData(numberOfRows: number): Promise<productItemsData[]> {
        const arr = [];
        logger.info("NumberOfRows " + numberOfRows);
        for (let i = 1; i <= numberOfRows; i++) {
            const obj: productItemsData = {
                item_id: null,
                item_name: null,
            };
            expect(await this.page.locator(`(//div[@class='rt-td'])[1]`)).toBeVisible({ timeout: 20000 });
            obj.item_id = await this.page.locator(`(//div[@class='rt-td'])[1]`).textContent();
            expect(await this.page.locator(`(//div[@class='rt-td'])[2]`)).toBeVisible({ timeout: 20000 });
            obj.item_name = await this.page.locator(`(//div[@class='rt-td'])[2]`).textContent();
            arr.push(obj)
        }
        return arr
    }



    async validatesuccessfullyaddedProductItemmsg() {
        await expect(this.successfullyaddedProductItemmsg).toBeVisible({ timeout: 6000 });
        let text = await this.successfullyaddedProductItemmsg.textContent();
        return text;
    }

    async clicknextbutton() {
        try {
            await expect(this.nextbutton).toBeVisible({ timeout: 60000 });
            await this.nextbutton.scrollIntoViewIfNeeded();
            await this.nextbutton.click()
        }
        catch (error) {
            logger.info(`Element ${this.nextbutton} not found or not visible: `, error);
            console.error(`Element ${this.nextbutton} not found or not visible: `, error);
        }
    }

    async clickpreviousbutton() {
        try {
            await expect(this.previousbutton).toBeVisible({ timeout: 60000 });
            await this.previousbutton.scrollIntoViewIfNeeded();
            await this.previousbutton.click()
        } catch (error) {
            logger.info(`Element ${this.previousbutton} not found or not visible: `, error);
            console.error(`Element ${this.previousbutton} not found or not visible: `, error);
        }
    }

    async clickonCloneButton() {
        await expect(this.cloneButton).toBeVisible({ timeout: 6000 });
        await this.cloneButton.click();
        await this.page.waitForTimeout(6000)
        await this.page.locator('svg').nth(1).click();
        await this.page.waitForTimeout(3000)
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await this.page.waitForTimeout(6000)
        await expect(this.saveCloneButton).toBeVisible({ timeout: 60000 });
        await this.saveCloneButton.waitFor({ state: 'attached', timeout: 20000 });
        await expect(this.saveCloneButton).toBeEnabled({ timeout: 50000 });
        await this.saveCloneButton.click();
    }

    async validateProductItemSuccessfullyClonedText() {
        try {
            await expect(this.productItemSuccessfullyClonedText).toBeVisible({ timeout: 6000 });
            let text = await this.productItemSuccessfullyClonedText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.productItemSuccessfullyClonedText} not found or not visible: `, error);
            console.error(`Element ${this.productItemSuccessfullyClonedText} not found or not visible: `, error);
        }
    }
}