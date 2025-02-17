import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class holidayJourneysDOPage {
    page: Page;
    readonly cancelDetailHolidayJourneys: Locator;
    readonly cancelButton: Locator;
    readonly updateSuccessfulText: Locator;
    readonly editButton: Locator;
    readonly editDescription: Locator;
    readonly updateButton: Locator;



    constructor(page: Page) {
        this.page = page;
        this.cancelDetailHolidayJourneys = page.locator("(//i[@class='fa fa-eye pointer'])[1]")
        this.cancelButton = page.getByRole('button', { name: 'Cancel' })
        this.updateSuccessfulText = page.locator("//h6[text()='Update successful.']")
        this.editButton = page.locator("(//i[@class='fa fa-edit fa-lg pointer'])[1]")
        this.editDescription = page.locator("//div[text()='Description']/parent::div/following-sibling::div/input")
        this.updateButton = page.getByRole('button', { name: 'Update' })


    }

    async clickCancelDetailHolidayJourneys() {
        try {
            await this.page.waitForTimeout(3000)
            await expect(this.cancelDetailHolidayJourneys).toBeVisible({ timeout: 60000 })
            await this.cancelDetailHolidayJourneys.click()
            await this.page.waitForTimeout(3000)
            await this.page.locator('svg').nth(1).click();
            await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
            await expect(this.cancelButton).toBeVisible({ timeout: 6000 })
            await this.cancelButton.click()
        } catch (error) {
            logger.info(`Element ${this.cancelDetailHolidayJourneys} not found or not visible: `, error);
            console.error(`Element ${this.cancelDetailHolidayJourneys} not found or not visible: `, error);
        }
    }

    async validateUpdateSuccessfulText() {
        await expect(this.updateSuccessfulText).toBeVisible({ timeout: 60000 })
        let text = await this.updateSuccessfulText.textContent()
        return text;
    }

    async updateDescription() {
        await expect(this.editButton).toBeVisible({ timeout: 60000 });
        await this.editButton.click();
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await this.page.waitForTimeout(3000)
        await expect(this.editDescription).toBeVisible({ timeout: 6000 });
        await this.editDescription.click();
        await this.editDescription.clear();
        await this.page.waitForTimeout(3000)
        await this.editDescription.fill('edit Holiday Journeys ' + faker.number.int({ min: 1, max: 100 }).toString());
        await expect(this.updateButton).toBeVisible({ timeout: 6000 });
        await this.updateButton.click();
    }


}