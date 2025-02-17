import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class holidayCampaignDOPage {
    page: Page;
    readonly freezeHolidayCampaign: Locator;
    readonly noButton: Locator;
    readonly addButton: Locator;
    readonly requiredText: Locator;



    constructor(page: Page) {
        this.page = page;
        this.freezeHolidayCampaign = page.locator("(//i[@class='fa fa-snowflake pointer'])[1]");
        this.noButton = page.getByRole('button', { name: 'NO' })
        this.addButton = page.locator("//button[text()='Add']")
        this.requiredText = page.locator("(//div[text()='Required'])[1]")

    }

    async validatePageNumberText(): Promise<boolean> {
        try {
            await expect(this.page.getByRole('spinbutton')).toHaveValue('1');
            return true;
        } catch (error) {
            console.error('Validation failed:', error);
            return false;
        }
    }

    async validateRequiredText() {
        await expect(this.requiredText).toBeVisible({ timeout: 4000 })
        let text = await this.requiredText.textContent();
        return text;
    }

    async clickFreezeHolidayCampaign() {
        try {
            await this.page.waitForTimeout(3000)
            await expect(this.freezeHolidayCampaign).toBeVisible({ timeout: 60000 })
            await this.freezeHolidayCampaign.click()
            await this.page.waitForTimeout(3000)
            await expect(this.noButton).toBeVisible({ timeout: 4000 })
            await this.noButton.click()
        } catch (error) {
            logger.info(`Element ${this.freezeHolidayCampaign} not found or not visible: `, error);
            console.error(`Element ${this.freezeHolidayCampaign} not found or not visible: `, error);
        }
    }

    async clickAddButton() {
        await expect(this.addButton).toBeVisible({ timeout: 4000 })
        await this.addButton.click();
    }




}