import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';

interface MarketingCampaignsData {
    mc_id: string | null;
    mc_name: string | null;
    marketing_code: string | null;
    marketing_brand: string | null;
    product_offer1: string | null;
    international_offer: string | null;
    purchase_type: string | null;
    alt_campaign: string | null;
}
export class marketingCampaignsPage {
    page: Page;
    readonly addButton: Locator;
    readonly filterByMCID: Locator;
    readonly filterByName: Locator;
    readonly dataUploadButton: Locator;
    readonly clone: Locator;
    readonly edit: Locator;
    readonly marketingCampaignsRows: Locator;
    readonly requiredText: Locator;
    readonly uploadIcon: Locator;

    readonly mapButton: Locator;
    readonly submitButton: Locator;
    readonly addNewRecordsButton: Locator;
    readonly updateExistingRecordsButton: Locator;
    readonly legacyRenewalMappingButton: Locator;
    readonly agencyMarketingDataUploadButton: Locator;
    readonly filterByBrand: Locator;
    readonly filterByPurchaseType: Locator;
    readonly filterByCampaignActiveOnline: Locator;
    readonly filterByProductOffer1: Locator;
    readonly filterByInternationalOffer: Locator;
    readonly filterByAltCampaign: Locator;
    readonly filterByMarketingCode: Locator;
    readonly campaignSuccessfullyCreatedText: Locator;



    constructor(page: Page) {
        this.page = page;
        this.addButton = page.getByRole('button', { name: 'Add' })
        this.filterByMCID = page.locator("//input[@value='Filter By MC ID']")
        this.filterByName = page.locator("//input[@value='Filter By Name']")
        this.filterByBrand = page.locator("//input[@value='Filter By Brand']")
        this.filterByMarketingCode = page.locator("//input[@value='Filter By Marketing Code']")
        this.filterByPurchaseType = page.locator("//input[@value='Filter By Purchase Type']")
        this.filterByCampaignActiveOnline = page.locator("//input[@value='Filter By Campaign Active Online']")
        this.filterByProductOffer1 = page.locator("//input[@value='Filter By Product Offer 1']")
        this.filterByInternationalOffer = page.locator("//input[@value='Filter By International Offer']")
        this.filterByAltCampaign = page.locator("//input[@value='Filter By Alt Campaign']")
        this.dataUploadButton = page.getByRole('button', { name: 'Data Upload' })
        this.clone = page.locator("(//i[@class='fa fa-clone fa-border pointer ml-2'])[1]")
        this.edit = page.locator("(//i[@class='fa fa-edit fa-lg pointer'])[1]")
        this.marketingCampaignsRows = page.locator("//div[@class='rt-tr -odd']")
        this.uploadIcon = page.locator("//i[@class='icon fas fa-cloud-upload-alt']")

        this.mapButton = page.getByRole('button', { name: 'Map' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.addNewRecordsButton = page.getByRole('button', { name: 'Add New Records' })
        this.updateExistingRecordsButton = page.getByRole('button', { name: 'Update Existing Records' })
        this.legacyRenewalMappingButton = page.getByRole('button', { name: 'Legacy Renewal Mapping' })
        this.agencyMarketingDataUploadButton = page.getByRole('button', { name: 'Agency Marketing Data Upload' })
        this.requiredText = page.locator("(//small[@class='form-text text-danger'])[1]")
        this.campaignSuccessfullyCreatedText = page.locator("//h6[text()='campaign successfully created']")



    }
    async clickAddButton() {
        try {
            await expect(this.addButton).toBeVisible({ timeout: 60000 })
            await this.addButton.waitFor({ state: 'attached', timeout: 20000 })
            await expect(this.addButton).toBeEnabled({ timeout: 50000 })
            await this.addButton.click()
        } catch (error) {
            logger.info(`Element ${this.addButton} not found or not visible: `, error);
            console.error(`Element ${this.addButton} not found or not visible: `, error);
        }
    }


    async enterFilterByMCID() {
        try {
            await expect(this.filterByMCID).toBeVisible({ timeout: 60000 })
            await this.filterByMCID.fill('MC-1316')
        } catch (error) {
            logger.info(`Element ${this.filterByMCID} not found or not visible: `, error);
            console.error(`Element ${this.filterByMCID} not found or not visible: `, error);
        }
    }

    async enterFilterByMarketingCode() {
        try {
            await expect(this.filterByMarketingCode).toBeVisible({ timeout: 60000 })
            await this.filterByMarketingCode.fill('G4B0000C')
        } catch (error) {
            logger.info(`Element ${this.filterByMarketingCode} not found or not visible: `, error);
            console.error(`Element ${this.filterByMarketingCode} not found or not visible: `, error);
        }
    }

    async enterFilterByBrand() {
        try {
            await expect(this.filterByBrand).toBeVisible({ timeout: 60000 })
            await this.filterByBrand.fill('Connect')
        } catch (error) {
            logger.info(`Element ${this.filterByBrand} not found or not visible: `, error);
            console.error(`Element ${this.filterByBrand} not found or not visible: `, error);
        }
    }

    async enterFilterByPurchaseType() {
        try {
            await expect(this.filterByPurchaseType).toBeVisible({ timeout: 60000 })
            await this.filterByPurchaseType.fill('Self Order and Gift')
        } catch (error) {
            logger.info(`Element ${this.filterByPurchaseType} not found or not visible: `, error);
            console.error(`Element ${this.filterByPurchaseType} not found or not visible: `, error);
        }
    }

    async enterFilterByCampaignActiveOnline() {
        try {
            await expect(this.filterByCampaignActiveOnline).toBeVisible({ timeout: 60000 })
            await this.filterByCampaignActiveOnline.fill('')
        } catch (error) {
            logger.info(`Element ${this.filterByCampaignActiveOnline} not found or not visible: `, error);
            console.error(`Element ${this.filterByCampaignActiveOnline} not found or not visible: `, error);
        }
    }

    async enterFilterByProductOffer1() {
        try {
            await expect(this.filterByProductOffer1).toBeVisible({ timeout: 60000 })
            await this.filterByProductOffer1.fill('remo test')
        } catch (error) {
            logger.info(`Element ${this.filterByProductOffer1} not found or not visible: `, error);
            console.error(`Element ${this.filterByProductOffer1} not found or not visible: `, error);
        }
    }

    async enterFilterByInternationalOffer() {
        try {
            await expect(this.filterByInternationalOffer).toBeVisible({ timeout: 60000 })
            await this.filterByInternationalOffer.fill('remo test')
        } catch (error) {
            logger.info(`Element ${this.filterByInternationalOffer} not found or not visible: `, error);
            console.error(`Element ${this.filterByInternationalOffer} not found or not visible: `, error);
        }
    }

    async enterFilterByAltCampaign() {
        try {
            await expect(this.filterByAltCampaign).toBeVisible({ timeout: 60000 })
            await this.filterByAltCampaign.fill('demo alt campaign code')
        } catch (error) {
            logger.info(`Element ${this.filterByAltCampaign} not found or not visible: `, error);
            console.error(`Element ${this.filterByAltCampaign} not found or not visible: `, error);
        }
    }

    async enterFilterByName() {
        try {
            await expect(this.filterByName).toBeVisible({ timeout: 60000 })
            await this.filterByName.fill('demo marketing campaign')
        } catch (error) {
            logger.info(`Element ${this.filterByName} not found or not visible: `, error);
            console.error(`Element ${this.filterByName} not found or not visible: `, error);
        }
    }

    async clickDataUploadButton() {
        try {
            await expect(this.dataUploadButton).toBeVisible({ timeout: 60000 })
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

    async getMarketingCampaignsRowCount(): Promise<MarketingCampaignsData[]> {
        let numberOfRows = await this.marketingCampaignsRows.count();
        if (numberOfRows > 0) {
            let arr = await this.getMarketingCampaignsData(numberOfRows);
            return arr;
        } else {
            // Handle case when there are no rows
            console.log("No rows found in MarketingCampaignsRows.");
            return [];
        }
    }

    async getMarketingCampaignsData(numberOfRows: number): Promise<MarketingCampaignsData[]> {
        const arr = [];
        logger.info("NumberOfRows " + numberOfRows);
        for (let i = 1; i <= numberOfRows; i++) {
            const obj: MarketingCampaignsData = {
                mc_id: null,
                mc_name: null,
                marketing_code: null,
                marketing_brand: null,
                product_offer1: null,
                international_offer: null,
                purchase_type: null,
                alt_campaign: null,
            };
            expect(this.page.locator(`(//div[@class='rt-td'])[1]`)).toBeVisible({ timeout: 20000 });
            obj.mc_id = await this.page.locator(`(//div[@class='rt-td'])[1]`).textContent();
            expect(this.page.locator(`(//div[@class='rt-td'])[2]`)).toBeVisible({ timeout: 20000 });
            obj.mc_name = await this.page.locator(`(//div[@class='rt-td'])[2]`).textContent();
            expect(this.page.locator(`(//div[@class='rt-td'])[3]`)).toBeVisible({ timeout: 20000 });
            obj.marketing_code = await this.page.locator(`(//div[@class='rt-td'])[3]`).textContent();
            expect(this.page.locator(`(//div[@class='rt-td'])[4]`)).toBeVisible({ timeout: 20000 });
            obj.marketing_brand = await this.page.locator(`(//div[@class='rt-td'])[4]`).textContent();
            expect(this.page.locator(`(//div[@class='rt-td'])[5]`)).toBeVisible({ timeout: 20000 });
            obj.purchase_type = await this.page.locator(`(//div[@class='rt-td'])[5]`).textContent();
            expect(this.page.locator(`(//div[@class='rt-td'])[7]`)).toBeVisible({ timeout: 20000 });
            obj.product_offer1 = await this.page.locator(`(//div[@class='rt-td'])[7]`).textContent();
            expect(this.page.locator(`(//div[@class='rt-td'])[8]`)).toBeVisible({ timeout: 20000 });
            obj.international_offer = await this.page.locator(`(//div[@class='rt-td'])[8]`).textContent();
            expect(this.page.locator(`(//div[@class='rt-td'])[9]`)).toBeVisible({ timeout: 20000 });
            obj.alt_campaign = await this.page.locator(`(//div[@class='rt-td'])[9]`).textContent();
            arr.push(obj)
        }
        return arr
    }

    async validateRequiredText() {
        await expect(this.requiredText).toBeVisible({ timeout: 6000 });
        let text = await this.requiredText.textContent();
        return text;
    }
    async validateCampaignSuccessfullyCreatedText() {
        await expect(this.campaignSuccessfullyCreatedText).toBeVisible({ timeout: 6000 });
        let text = await this.campaignSuccessfullyCreatedText.textContent();
        return text;
    }

    async addButtonInAddNewOffer() {
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }

    async chooseFileToUpload() {
        await this.page.waitForTimeout(5000)
        await this.page.setInputFiles('input[type="file"]', 'Upload/Excel files/update_marketing_campaign_batch_template.csv');
        await this.page.waitForTimeout(5000)
        await expect(this.mapButton).toBeVisible({ timeout: 6000 });
        await this.mapButton.click();
        await expect(this.submitButton).toBeVisible({ timeout: 6000 });
        await this.submitButton.click();
    }

    async addNewMarketingCampaign() {
        // Helper function to format day with suffix (e.g., 5 → "5th")
        const getDayWithSuffix = (day: number): string => {
            const j = day % 10, k = day % 100;
            if (j === 1 && k !== 11) return day + 'st';
            if (j === 2 && k !== 12) return day + 'nd';
            if (j === 3 && k !== 13) return day + 'rd';
            return day + 'th';
        };

        // Get current date components
        const currentDate = new Date();
        const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' }); // e.g., "Wednesday"
        const month = currentDate.toLocaleDateString('en-US', { month: 'long' }); // e.g., "February"
        const dayWithSuffix = getDayWithSuffix(currentDate.getDate()); // e.g., "5th"

        // Generate dynamic label for the date picker
        const datePickerLabel = `Choose ${weekday}, ${month} ${dayWithSuffix}`;

        // Execute actions
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await this.page.locator('select[name="campaign_type"]').selectOption('Donor renewal gifts');

        // Fill campaign name
        const campaignName = faker.commerce.productName();
        await this.page.getByPlaceholder('Marketing Campaign Name').click();
        await this.page.getByPlaceholder('Marketing Campaign Name').fill(campaignName);

        // Select dropdowns
        await this.page.locator('select[name="brand"]').selectOption('90');
        await this.page.locator('select[name="order_placed_by"]').selectOption('Other Disclosure');
        await this.page.locator('select[name="channel"]').selectOption('M');

        // Select CURRENT DATE
        await this.page.getByPlaceholder('Campaign Start Date').click();
        await this.page.getByLabel(datePickerLabel).click(); // Dynamic date selector

        // Fill remaining fields
        await this.page.locator('select[name="campaign_month"]').selectOption('B');

        const campaignPanel = faker.company.catchPhrase().substring(0, 1);
        await this.page.getByPlaceholder('Campaign Panel or Effort').click();
        await this.page.getByPlaceholder('Campaign Panel or Effort').fill(campaignPanel);

        const campaignDevice = faker.company.catchPhrase().substring(0, 3);
        await this.page.getByPlaceholder('Campaign List or Device').click();
        await this.page.getByPlaceholder('Campaign List or Device').fill(campaignDevice);

        // Submit
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }

    // async addNewMarketingCampaign() {
    //     await this.page.locator('svg').nth(1).click();
    //     await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
    //     await this.page.locator('select[name="campaign_type"]').selectOption('Donor renewal gifts');
    //     await this.page.getByPlaceholder('Marketing Campaign Name').click();
    //     await this.page.getByPlaceholder('Marketing Campaign Name').fill(faker.commerce.productName());
    //     await this.page.locator('select[name="brand"]').selectOption('90');
    //     await this.page.locator('select[name="order_placed_by"]').selectOption('Other Disclosure');
    //     await this.page.locator('select[name="channel"]').selectOption('M');
    //     await this.page.getByPlaceholder('Campaign Start Date').click();
    //     await this.page.getByLabel('Choose Wednesday, February 5th,').click();
    //     await this.page.locator('select[name="campaign_month"]').selectOption('B');
    //     await this.page.getByPlaceholder('Campaign Panel or Effort').click();
    //     await this.page.getByPlaceholder('Campaign Panel or Effort').fill(faker.company.catchPhrase().substring(0, 1));
    //     await this.page.getByPlaceholder('Campaign List or Device').click();
    //     await this.page.getByPlaceholder('Campaign List or Device').fill(faker.company.catchPhrase().substring(0, 3));
    //     await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    // }





}   