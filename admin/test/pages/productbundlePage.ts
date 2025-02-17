import { expect, FrameLocator, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';

interface productBundleData {
    bundle_id: string | null;
    bundle_name: string | null;
}
export class productbundlePage {

    rowproductitemSelector: string = "div.table-responsive >table >tbody >tr";
    productItemNotExist: string = "//div[contains(text(),'No Data')]";
    page: Page;
    readonly filterByBundleIds: Locator;
    readonly filterByBundleNames: Locator;
    readonly filterByDeliveryRestriction: Locator;
    readonly filterByAutorenewBundleAttached: Locator;
    readonly productBundleRowList: Locator;
    readonly productBundlerows: Locator;
    readonly uploadIcon: Locator;
    readonly message1: Locator;
    readonly message2: Locator;
    readonly mapButton: Locator;
    readonly submitButton: Locator;
    readonly addNewRecordsButton: Locator;
    readonly updateExistingRecordsButton: Locator;
    readonly dataUploadButton: Locator;
    readonly productBundleName: Locator;
    readonly productBundleDescription: Locator;
    readonly addbutton: Locator;
    readonly validationmsg: Locator;
    readonly successfullyaddedProductBundlemsg: Locator;
    readonly EditProudctBundle: Locator;
    readonly UpdateProductBundle: Locator;
    readonly UpdateSuccessfullyMsg: Locator;
    readonly cloneButton: Locator;
    readonly saveCloneButton: Locator;
    readonly productBundleSuccessfullyClonedText: Locator;

    itemId: any;

    constructor(page: Page) {
        this.page = page;
        this.filterByBundleIds = page.locator("//input[@value='Filter By Bundle ID']");
        this.filterByBundleNames = page.locator("//input[@value='Filter By Name']");
        this.filterByDeliveryRestriction = page.locator("//input[@value='Filter By Delivery Restriction']");
        this.filterByAutorenewBundleAttached = page.locator("//input[@value='Filter By Autorenew Bundle Attached']");
        this.productBundleRowList = page.locator("div.table-responsive >table >tbody >tr");
        this.productBundlerows = page.locator("//div[@class='rt-tr -odd']")
        this.uploadIcon = page.locator("//i[@class='icon fas fa-cloud-upload-alt']")
        this.message1 = page.locator("//h4[text()='Your batch file has been processed.']")
        this.message2 = page.locator("//h4[text()='Total records uploaded: ']")
        this.mapButton = page.getByRole('button', { name: 'Map' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.addNewRecordsButton = page.getByRole('button', { name: 'Add New Records' })
        this.updateExistingRecordsButton = page.getByRole('button', { name: 'Update Existing Records' })
        this.dataUploadButton = page.getByRole('button', { name: 'Data Upload' })
        this.productBundleName = page.locator("//input[@placeholder='Product Bundle Name']")
        this.productBundleDescription = page.locator("//textarea[@placeholder='Product Bundle Description']")
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.addbutton = page.locator("//button[text()='Add']");
        this.validationmsg = page.locator("//small[@class='form-text text-danger']").nth(0)
        this.successfullyaddedProductBundlemsg = page.locator("//h6[text()='bundle successfully created']")
        this.EditProudctBundle = page.getByRole('gridcell', { name: ' ' }).locator('i').first()
        this.UpdateProductBundle = page.getByRole('button', { name: 'Update' }).nth(1)
        this.UpdateSuccessfullyMsg = page.getByRole('heading', { name: 'bundle successfully updated' })
        this.cloneButton = page.getByRole('gridcell', { name: ' ' }).locator('i').nth(1)
        this.saveCloneButton = page.getByRole('button', { name: 'Save & Clone' }).first()
        this.productBundleSuccessfullyClonedText = page.getByRole('heading', { name: 'bundle successfully created' });
    }

    async enterFilterByBundleIDs() {
        try {
            await expect(this.filterByBundleIds).toBeVisible({ timeout: 60000 });
            await this.filterByBundleIds.fill('PB-1576');
        } catch (error) {
            logger.info(`Element ${this.filterByBundleIds} not found or not visible: `, error);
            console.error(`Element ${this.filterByBundleIds} not found or not visible: `, error);
        }
    }

    async enterfilterByBundleNames() {
        try {
            await expect(this.filterByBundleNames).toBeVisible({ timeout: 60000 });
            await this.filterByBundleNames.fill('Premium Package');
        } catch (error) {
            logger.info(`Element ${this.filterByBundleNames} not found or not visible: `, error);
            console.error(`Element ${this.filterByBundleNames} not found or not visible: `, error);
        }
    }

    async enterfilterByDeliveryRestrictions() {
        try {
            await expect(this.filterByDeliveryRestriction).toBeVisible({ timeout: 60000 });
            await this.filterByDeliveryRestriction.fill('US');
        } catch (error) {
            logger.info(`Element ${this.filterByDeliveryRestriction} not found or not visible: `, error);
            console.error(`Element ${this.filterByDeliveryRestriction} not found or not visible: `, error);
        }
    }
    async enterfilterByAutorenewbundleattached() {
        try {
            await expect(this.filterByAutorenewBundleAttached).toBeVisible({ timeout: 60000 });
            await this.filterByAutorenewBundleAttached.fill('Yes');
        } catch (error) {
            logger.info(`Element ${this.filterByAutorenewBundleAttached} not found or not visible: `, error);
            console.error(`Element ${this.filterByAutorenewBundleAttached} not found or not visible: `, error);
        }
    }

    async getProductBundlesRowCount(): Promise<productBundleData[]> {
        let numberOfRows = await this.
        productBundlerows.count();
        if (numberOfRows > 0) {
            let arr = await this.getproductBundleData(numberOfRows);
            return arr;
        } else {
            // Handle case when there are no rows
            return [];
        }
    }

    async getproductBundleData(numberOfRows: number): Promise<productBundleData[]> {
        const arr = [];
        logger.info("NumberOfRows " + numberOfRows);
        for (let i = 1; i <= numberOfRows; i++) {
            const obj: productBundleData = {
                bundle_id: null,
                bundle_name: null,
            };
            expect(await this.page.locator(`(//div[@class='rt-td'])[1]`)).toBeVisible({ timeout: 20000 });
            obj.bundle_id = await this.page.locator(`(//div[@class='rt-td'])[1]`).textContent();
            expect(await this.page.locator(`(//div[@class='rt-td'])[2]`)).toBeVisible({ timeout: 20000 });
            obj.bundle_name = await this.page.locator(`(//div[@class='rt-td'])[2]`).textContent();
            arr.push(obj)
        }
        return arr
    }

    async clickaddProductBundleButton() {
        try {
            await expect(this.addbutton).toBeVisible({ timeout: 60000 });
            await this.addbutton.click();
        } catch (error) {
            logger.info(`Element ${this.addbutton} not found or not visible: `, error);
            console.error(`Element ${this.addbutton} not found or not visible: `, error);
        }
    }

    async clickaddProductBundleButtonWithoutfillingData() {
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }

    async validatealertmsg() {
        await expect(this.validationmsg).toBeVisible({ timeout: 6000 });
        let text = await this.validationmsg.textContent();
        return text;
    }

    async addNewProductBundle() {
        await expect(this.productBundleName).toBeVisible({ timeout: 6000 });
        await this.productBundleName.click();
        await this.productBundleName.fill(faker.commerce.productName());
        await expect(this.productBundleDescription).toBeVisible({ timeout: 6000 });
        await this.productBundleDescription.click();
        await this.productBundleDescription.fill(faker.commerce.productName());
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }

    async validatesuccessfullyaddedProductBundlemsg() {
        await expect(this.successfullyaddedProductBundlemsg).toBeVisible({ timeout: 6000 });
        let text = await this.successfullyaddedProductBundlemsg.textContent();
        return text;
    }
    async clickDataUploadlinkButton() {
        try {
            await expect(this.dataUploadButton).toBeVisible({ timeout: 60000 });
            await this.dataUploadButton.click();
            await expect(this.addNewRecordsButton).toBeVisible({ timeout: 6000 });
            await this.addNewRecordsButton.click();
            await expect(this.updateExistingRecordsButton).toBeVisible({ timeout: 6000 });
            await this.updateExistingRecordsButton.click();
            await expect(this.uploadIcon).toBeVisible({ timeout: 6000 });
            await this.uploadIcon.click();
        } catch (error) {
            logger.info(`Element ${this.dataUploadButton} not found or not visible: `, error);
            console.error(`Element ${this.dataUploadButton} not found or not visible: `, error);
        }
    }

    async chooseFileTobeUpload() {
        await this.page.waitForTimeout(5000);
        await this.page.setInputFiles('input[type="file"]', 'Upload/Excel files/Updateexistingbundle.csv');
        await this.page.waitForTimeout(5000);
        await expect(this.mapButton).toBeVisible({ timeout: 6000 });
        await this.mapButton.click();
        await expect(this.submitButton).toBeVisible({ timeout: 6000 });
        await this.submitButton.click();
    }

    async validateFileUploaded() {
        await expect(this.message1).toBeVisible({ timeout: 30000 });
        let text = await this.message2.textContent();
        return text;
    }

    async clickEditProductBundleLink() {
        try {
            await expect(this.EditProudctBundle).toBeVisible({ timeout: 6000 });
            await this.EditProudctBundle.click();
        } catch (error) {
            logger.info(`Element ${this.EditProudctBundle} not found or not visible: `, error);
            console.error(`Element ${this.EditProudctBundle} not found or not visible: `, error);
        }
    }

    async clickSubmitProductBundleLink() {
        try {
            await expect(this.UpdateProductBundle).toBeVisible({ timeout: 6000 });
            await this.UpdateProductBundle.click();
        } catch (error) {
            logger.info(`Element ${this.UpdateProductBundle} not found or not visible: `, error);
            console.error(`Element ${this.UpdateProductBundle} not found or not visible: `, error);
        }
    }

    async validateUpdateSuccessfullyMsg() {
        await expect(this.UpdateSuccessfullyMsg).toBeVisible({ timeout: 6000 });
        let text = await this.UpdateSuccessfullyMsg.textContent();
        return text;
    }
    async clickonCloneButton() {
        await expect(this.cloneButton).toBeVisible({ timeout: 6000 });
        await this.cloneButton.click();
        await this.page.waitForTimeout(6000);
        await this.page.locator('svg').nth(1).click();
        await this.page.waitForTimeout(3000);
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await this.page.waitForTimeout(6000);
        await expect(this.saveCloneButton).toBeVisible({ timeout: 60000 });
        await this.saveCloneButton.waitFor({ state: 'attached', timeout: 20000 });
        await expect(this.saveCloneButton).toBeEnabled({ timeout: 50000 });
        await this.saveCloneButton.click();
    }

    async validateProductBundleSuccessfullyClonedText() {
        try {
            await expect(this.productBundleSuccessfullyClonedText).toBeVisible({ timeout: 6000 });
            let text = await this.productBundleSuccessfullyClonedText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.productBundleSuccessfullyClonedText} not found or not visible: `, error);
            console.error(`Element ${this.productBundleSuccessfullyClonedText} not found or not visible: `, error);
        }
    }
}