import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class renewalJourneysPage {
    page: Page;
    readonly renewalJourneySuccessfullyCreatedText: Locator;
    readonly renewalJourneySuccessfullyUpdatedText: Locator;
    readonly renewalJourneyName: Locator;
    readonly renewalJourneyId: Locator;
    readonly creditSuspendAfter: Locator;
    readonly brandDropdown: Locator;
    readonly purchaseTypeDropdown: Locator;
    readonly suspendCriteriaDropdown: Locator;
    readonly cancelCriteriaDropdown: Locator;
    readonly creditCancelAfter: Locator;
    readonly editButton: Locator;
    readonly updateButton: Locator;
    readonly cloneButton: Locator;
    readonly saveCloneButton: Locator;
    readonly renewalJourneySuccessfullyClonedText: Locator;
    readonly message1: Locator;


    constructor(page: Page) {
        this.page = page;
        this.renewalJourneySuccessfullyCreatedText = page.locator("//h6[text()='renewal journey successfully created']");
        this.renewalJourneySuccessfullyUpdatedText = page.locator("//h6[text()='renewal journey successfully updated']");
        this.renewalJourneySuccessfullyClonedText = page.locator("//h6[text()='renewal journey successfully created']");
        this.renewalJourneyName = page.getByPlaceholder('Renewal Journey Name')
        this.renewalJourneyId = page.getByPlaceholder('Renewal Journey Id')
        this.creditSuspendAfter = page.getByPlaceholder('Credit Suspend After')
        this.brandDropdown = page.locator('select[name="Brand"]')
        this.purchaseTypeDropdown = page.locator('select[name="PurchaseType"]')
        this.suspendCriteriaDropdown = page.locator('select[name="credit_suspend_after_type"]')
        this.cancelCriteriaDropdown = page.locator('select[name="CancelUnit"]')
        this.creditCancelAfter = page.getByPlaceholder('Credit Cancel After')
        this.editButton = page.locator("(//i[@class='fa fa-edit fa-lg pointer'])[1]")
        this.updateButton = page.getByRole('button', { name: 'Update' })
        // this.cloneButton = page.getByRole('gridcell', { name: ' ' }).locator('i').nth(1)
        this.cloneButton = page.getByRole('row', { name: '- Courage CX Magazine' }).locator('i').nth(1)
        this.saveCloneButton = page.getByRole('button', { name: 'Clone' }).first()
        this.message1 = page.locator("//h4[text()='Your batch file has been processed.']")
    }

    async validateRenewalJourneySuccessfullyCreatedText() {
        try {
            await expect(this.renewalJourneySuccessfullyCreatedText).toBeVisible({ timeout: 60000 });
            let text = await this.renewalJourneySuccessfullyCreatedText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.renewalJourneySuccessfullyCreatedText} not found or not visible: `, error);
            console.error(`Element ${this.renewalJourneySuccessfullyCreatedText} not found or not visible: `, error);
        }
    }

    async validaterenewalJourneySuccessfullyUpdatedText() {
        try {
            await expect(this.renewalJourneySuccessfullyUpdatedText).toBeVisible({ timeout: 60000 });
            let text = await this.renewalJourneySuccessfullyUpdatedText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.renewalJourneySuccessfullyUpdatedText} not found or not visible: `, error);
            console.error(`Element ${this.renewalJourneySuccessfullyUpdatedText} not found or not visible: `, error);
        }
    }

    async addNewrenewalJourney() {
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await expect(this.renewalJourneyName).toBeVisible({ timeout: 60000 });
        await this.renewalJourneyName.click();
        await this.renewalJourneyName.fill('test Bill Journey ' + faker.number.int({ min: 1, max: 100 }).toString());
        await expect(this.renewalJourneyId).toBeVisible({ timeout: 60000 });
        await this.renewalJourneyId.fill(faker.string.alphanumeric(2));
        await expect(this.brandDropdown).toBeVisible({ timeout: 60000 });
        await this.brandDropdown.selectOption('90');
        await this.page.getByRole('button', { name: 'Add' }).nth(1).click();
    }

    async editrenewalJourney() {
        await expect(this.editButton).toBeVisible({ timeout: 60000 });
        await this.editButton.click();
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await expect(this.renewalJourneyName).toBeVisible({ timeout: 60000 });
        await this.renewalJourneyName.clear();
        await this.renewalJourneyName.fill('editTest renewal Journey ' + faker.number.int({ min: 1, max: 100 }).toString());
        await this.updateButton.nth(1).click();
    }

    async chooseFileToUpload() {
        await this.page.waitForTimeout(5000);
        await this.page.setInputFiles('input[type="file"]', 'Upload/Excel files/update_renewal_journey_batch_template.csv');
        await this.page.waitForTimeout(5000)
        await this.page.getByRole('button', { name: 'Map' }).click();
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }

    async validateSuccessfullyUpdatedRJrecords() {
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
        await this.page.waitForTimeout(6000)
        await expect(this.saveCloneButton).toBeVisible({ timeout: 60000 });
        await this.saveCloneButton.waitFor({ state: 'attached', timeout: 20000 });
        await expect(this.saveCloneButton).toBeEnabled({ timeout: 50000 });
        await expect(this.renewalJourneyId).toBeVisible({ timeout: 60000 });
        await this.renewalJourneyId.clear();
        await this.renewalJourneyId.fill(faker.string.alphanumeric(2));
        await expect(this.saveCloneButton).toBeVisible({ timeout: 60000 });
        await this.saveCloneButton.click();
    }

    async validateRenewalJourneySuccessfullyClonedText() {
        try {
            await expect(this.renewalJourneySuccessfullyClonedText).toBeVisible({ timeout: 60000 });
            let text = await this.renewalJourneySuccessfullyClonedText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.renewalJourneySuccessfullyClonedText} not found or not visible: `, error);
            console.error(`Element ${this.renewalJourneySuccessfullyClonedText} not found or not visible: `, error);
        }
    }
}


