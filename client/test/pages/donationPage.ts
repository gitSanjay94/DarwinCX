import { expect, type Locator, type Page } from '@playwright/test';
import { MARKETING_CODE } from '../../src/constants'
import { logger } from '../features/CustomerCare/support/hook';

export class donationPage {
    page: Page;
    readonly donationTXT: Locator;
    readonly inHonourOfRadioButton: Locator;
    readonly inMemoryOfRadioButton: Locator;
    readonly anonymousCB: Locator;
    readonly donatorCB: Locator;
    readonly submitButton: Locator;
    readonly selectDonationAmt: Locator;
    readonly enterMarketingCode: Locator;
    readonly searchButton: Locator;
    readonly selectAutoRenewalBundlesCB: Locator;
    readonly productOfferRadioButton: Locator;
    readonly futureAutorenewTXT: Locator;
    readonly donatingOnBehalfCB: Locator;
    readonly donationAmtUnderSummary: Locator;
    readonly enterDonationAmt: Locator;
    readonly totalAmt: Locator;
    readonly searchForCampagin: Locator;
    readonly selectACampaign: Locator;

    constructor(page: Page) {
        this.page = page;
        this.donationTXT = page.locator('h5').filter({ hasText: 'Donation' })
        this.searchForCampagin = page.getByRole('heading', { name: 'Search for Campaign' }).first()
        this.inHonourOfRadioButton = page.locator("input[value='In honour of']")
        this.inMemoryOfRadioButton = page.locator("input[value='In memory of']")
        this.anonymousCB = page.locator("//div[contains(text(),'Anonymous')]/input")
        this.donatorCB = page.locator("//div[contains(text(),'Donator')]/input")
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.selectDonationAmt = page.locator("//button[normalize-space()='$100']")
        this.enterMarketingCode = page.getByPlaceholder('Enter the marketing code')
        this.selectACampaign = page.locator("input[value='Select a Campaign']")
        this.searchButton = page.locator("//button[@class='btn btn-secondary'][normalize-space()='Search']")
        this.selectAutoRenewalBundlesCB = page.locator("//input[@name='autorenewFlag' and @type='checkbox']")
        this.productOfferRadioButton = page.locator("input[value='PB-2352']")
        this.futureAutorenewTXT = page.getByText("Future Autorenew")
        this.donatingOnBehalfCB = page.locator("//small[contains(text(),'Donating on behalf of a company')]/preceding-sibling::input")
        this.donationAmtUnderSummary = page.locator("//h4[text()='Summary']/parent::div/child::div/div[1]")
        this.enterDonationAmt = page.locator("//div[text()='Other Amount:']/following-sibling::div/input")
        this.totalAmt = page.locator("//div[text()='Total:']/following-sibling::div")
    }

    async totalAmountUnderSummary(): Promise<string | null> {
        let totalAmtTXT = await this.totalAmt.textContent();
        return totalAmtTXT;
    }

    extractNumericValue(input: string): string | null {
        const numericValueWithDecimals: string = input.replace(/[^\d.]/g, '');
        const numericValueWithoutDecimals: string = numericValueWithDecimals.split('.')[0];
        return numericValueWithoutDecimals || null;
    }

    async donationAmountUnderSummary(): Promise<string | null> {
        let donationAmtUnderSummaryTXT = await this.donationAmtUnderSummary.textContent();
        return donationAmtUnderSummaryTXT;
    }

    async selectDonationAmount(amountToSelect: string): Promise<string | null> {
        await this.page.locator(`//button[@class='mr-2 btn btn-secondary' and @value='${amountToSelect}']`).click()
        let selectDonationAmtTXT = await this.page.locator(`//button[@class='mr-2 btn btn-secondary' and @value='${amountToSelect}']`).textContent()
        return selectDonationAmtTXT;
    }

    async clickSubmitButton() {
        try {
            await expect(this.submitButton).toBeVisible({ timeout: 10000 });
            await this.submitButton.click();
        } catch (error) {
            logger.info(`Element ${this.submitButton} not found or not visible: `, error);
            console.error(`Element ${this.submitButton} not found or not visible: `, error);
        }
    }

    async searchMarketingCode(marketingCode: string = MARKETING_CODE) {
        try {
            await expect(this.enterMarketingCode).toBeVisible({ timeout: 10000 });
            await this.enterMarketingCode?.fill(marketingCode, { timeout: 20000 });
            await this.searchButton.click({ timeout: 20000 });
            await expect(this.page.locator(`//p[contains(normalize-space(), '${marketingCode}')]`)).toBeVisible({ timeout: 90000 });
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
            console.error(`Element not found or not visible: `, error);
        }
    }

    async selectCampaignDD(marketingCode: string = MARKETING_CODE) {
        try {
            await expect(this.selectACampaign).toBeVisible({ timeout: 10000 });
            await this.selectACampaign?.fill(marketingCode, { timeout: 20000 });
            await expect(this.page.locator(`//div[contains(text(), '${marketingCode}')]`)).toBeVisible({ timeout: 90000 });
            await this.page.locator(`//div[contains(text(), '${marketingCode}')]`).click();
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
            console.error(`Element not found or not visible: `, error);
        }
    }

    async selectRecognitionAsDonator() {
        try {
            await this.donatingOnBehalfCB.check();
            await this.inMemoryOfRadioButton.check();
            await this.donatorCB.check();
        } catch (error) {
            logger.info(`Element ${this.donatorCB} not found or not visible: `, error);
            console.error(`Element ${this.donatorCB} not found or not visible: `, error);
        }
    }

    async selectRecognitionAsAnonymous() {
        try {
            await this.donatingOnBehalfCB.check();
            // await this.inHonourOfRadioButton.check();
            await this.anonymousCB.check();
        } catch (error) {
            logger.info(`Element ${this.anonymousCB} not found or not visible: `, error);
            console.error(`Element ${this.anonymousCB} not found or not visible: `, error);
        }
    }

    async enterDonationAmount(donationAmt: string) {
        try {
            await this.enterDonationAmt.fill(donationAmt);
        } catch (error) {
            logger.info(`Element ${this.enterDonationAmt.fill(donationAmt)} not found or not visible: `, error);
            console.error(`Element ${this.enterDonationAmt.fill(donationAmt)} not found or not visible: `, error);
        }
    }

    async selectAutoRenewalBundles() {
        try {
            await this.selectAutoRenewalBundlesCB.waitFor({ state: 'attached', timeout: 20000 })
            await expect(this.selectAutoRenewalBundlesCB).toBeVisible({ timeout: 20000 });
            await this.selectAutoRenewalBundlesCB.check({ timeout: 20000 });
            await this.productOfferRadioButton.waitFor({ state: 'attached', timeout: 20000 })
            await this.productOfferRadioButton.check({ timeout: 20000 });
            await expect(this.futureAutorenewTXT).toBeVisible({ timeout: 10000 });
        } catch (error) {
            logger.info('`Element ${this.futureAutorenewTXT} not found or not visible: `,error')
            console.error(`Element ${this.futureAutorenewTXT} not found or not visible: `, error);
        }
    }

}