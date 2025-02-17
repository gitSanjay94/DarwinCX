import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class billJourneysPage {
    page: Page;
    readonly billJourneySuccessfullyCreatedText: Locator;
    readonly billJourneySuccessfullyUpdatedText: Locator;
    readonly billJourneyName: Locator;
    readonly creditSuspendAfter: Locator;
    readonly brandDropdown: Locator;
    readonly purchaseTypeDropdown: Locator;
    readonly suspendCriteriaDropdown: Locator;
    readonly cancelCriteriaDropdown: Locator;
    readonly creditCancelAfter: Locator;
    readonly editButton: Locator;
    readonly updateButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.billJourneySuccessfullyCreatedText = page.locator("//h6[text()='bill journey successfully created']");
        this.billJourneySuccessfullyUpdatedText = page.locator("//h6[text()='bill journey successfully updated']");
        this.billJourneyName = page.getByPlaceholder('Bill Journey Name')
        this.creditSuspendAfter = page.getByPlaceholder('Credit Suspend After')
        this.brandDropdown = page.locator('select[name="Brand"]')
        this.purchaseTypeDropdown = page.locator('select[name="PurchaseType"]')
        this.suspendCriteriaDropdown = page.locator('select[name="credit_suspend_after_type"]')
        this.cancelCriteriaDropdown = page.locator('select[name="CancelUnit"]')
        this.creditCancelAfter = page.getByPlaceholder('Credit Cancel After')
        this.editButton = page.locator("(//i[@class='fa fa-edit fa-lg pointer'])[1]")
        this.updateButton = page.getByRole('button', { name: 'Update' })
    }

    async validateBillJourneySuccessfullyCreatedText() {
        try {
            await expect(this.billJourneySuccessfullyCreatedText).toBeVisible({ timeout: 6000 });
            let text = await this.billJourneySuccessfullyCreatedText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.billJourneySuccessfullyCreatedText} not found or not visible: `, error);
            console.error(`Element ${this.billJourneySuccessfullyCreatedText} not found or not visible: `, error);
        }
    }
    async validateBillJourneySuccessfullyUpdatedText() {
        try {
            await expect(this.billJourneySuccessfullyUpdatedText).toBeVisible({ timeout: 6000 });
            let text = await this.billJourneySuccessfullyUpdatedText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.billJourneySuccessfullyUpdatedText} not found or not visible: `, error);
            console.error(`Element ${this.billJourneySuccessfullyUpdatedText} not found or not visible: `, error);
        }
    }

    async addNewBillJourney() {
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await expect(this.billJourneyName).toBeVisible({ timeout: 6000 })
        await this.billJourneyName.click();
        await this.billJourneyName.fill('test Bill Journey ' + faker.number.int({ min: 1, max: 100 }).toString());
        await expect(this.brandDropdown).toBeVisible({ timeout: 6000 });
        await this.brandDropdown.selectOption('90');
        await expect(this.purchaseTypeDropdown).toBeVisible({ timeout: 6000 });
        await this.purchaseTypeDropdown.selectOption('Single Installment');
        await expect(this.suspendCriteriaDropdown).toBeVisible({ timeout: 6000 });
        await this.suspendCriteriaDropdown.selectOption('Months');
        await expect(this.creditSuspendAfter).toBeVisible({ timeout: 6000 });
        await this.creditSuspendAfter.click();
        await this.creditSuspendAfter.fill(faker.number.int({ min: 1, max: 10 }).toString());
        await expect(this.cancelCriteriaDropdown).toBeVisible({ timeout: 6000 });
        await this.cancelCriteriaDropdown.selectOption('Months');
        await expect(this.creditCancelAfter).toBeVisible({ timeout: 6000 });
        await this.creditCancelAfter.click();
        await this.creditCancelAfter.fill(faker.number.int({ min: 1, max: 10 }).toString());
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }

    async editBillJourney() {
        await expect(this.editButton).toBeVisible({ timeout: 6000 });
        await this.editButton.click();
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await expect(this.billJourneyName).toBeVisible({ timeout: 6000 });
        await this.billJourneyName.clear()
        await this.billJourneyName.fill('editTest Bill Journey ' + faker.number.int({ min: 1, max: 100 }).toString());
        await this.updateButton.nth(1).click();
    }

    async chooseFileToUpload() {
        await this.page.waitForTimeout(5000)
        await this.page.setInputFiles('input[type="file"]', 'Upload/Excel files/add_bill_journey_batch_template.csv');
        await this.page.waitForTimeout(5000)
        await this.page.getByRole('button', { name: 'Map' }).click();
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

}