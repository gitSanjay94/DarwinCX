import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class holidayUniversesDOPage {
    page: Page;

    readonly successfullyAddedHolidayCampaignUniverseText: Locator;
    readonly christmasColdText: Locator;
    readonly saveButton: Locator;
    readonly monthText: Locator;
    readonly emailText: Locator;
    readonly closeButton: Locator;
    readonly closeHolidayCampaign: Locator;



    constructor(page: Page) {
        this.page = page;
        this.successfullyAddedHolidayCampaignUniverseText = page.locator("//h6[text()='Successfully added Holiday Campaign Universe.']");
        this.christmasColdText = page.getByText('Christmas Cold')
        this.saveButton = page.getByRole('button', { name: 'Save' })
        this.monthText = page.getByText('Month', { exact: true })
        this.emailText = page.getByText('Email')
        this.closeHolidayCampaign = page.getByRole('row', { name: ' 158 Donor Renewal 2024' }).getByRole('img')
        this.closeButton = page.getByRole('button', { name: 'Close' })



    }

    async validateSuccessfullyAddedHolidayCampaignUniverseText() {
        try {
            await expect(this.successfullyAddedHolidayCampaignUniverseText).toBeVisible({ timeout: 6000 })
            let text = await this.successfullyAddedHolidayCampaignUniverseText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.successfullyAddedHolidayCampaignUniverseText} not found or not visible: `, error);
            console.error(`Element ${this.successfullyAddedHolidayCampaignUniverseText} not found or not visible: `, error);
        }
    }

    async addNewHolidayUniverse() {
        await this.page.locator('svg').nth(1).click();
        await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
        await this.page.locator('div').filter({ hasText: /^Campaign YearCampaign MonthFile TypeRequired$/ }).scrollIntoViewIfNeeded();
        await expect(this.page.locator('div').filter({ hasText: /^Campaign YearCampaign MonthFile TypeRequired$/ })).toBeVisible({ timeout: 30000 })
        await this.page.locator('div').filter({ hasText: /^Campaign YearCampaign MonthFile TypeRequired$/ }).getByRole('textbox').nth(2).click();
        await expect(this.christmasColdText).toBeVisible({ timeout: 30000 })
        await this.christmasColdText.click();
        await this.page.locator('div').filter({ hasText: /^Campaign IDRequiredSend To$/ }).getByRole('textbox').first().scrollIntoViewIfNeeded();
        await expect(this.page.locator('div').filter({ hasText: /^Campaign IDRequiredSend To$/ }).getByRole('textbox').first()).toBeVisible({ timeout: 30000 })
        await this.page.locator('div').filter({ hasText: /^Campaign IDRequiredSend To$/ }).getByRole('textbox').first().click();
        await this.page.getByText('- Christmas Cold - 0/2024').click();
        await this.page.locator('div:nth-child(4) > div > div:nth-child(2) > input').click();
        await this.page.locator('div:nth-child(4) > div > div:nth-child(2) > input').fill('test Holiday Universe ' + faker.number.int({ min: 1, max: 100 }).toString());
        await expect(this.saveButton).toBeVisible({ timeout: 6000 })
        await this.saveButton.click();
        await this.page.getByRole('textbox').nth(3).click();
        await expect(this.monthText).toBeVisible({ timeout: 6000 })
        await this.monthText.click();
        await expect(this.saveButton).toBeVisible({ timeout: 6000 })
        await this.saveButton.click();
        await this.page.locator('div').filter({ hasText: /^Never Contact AgainDeceasedDelivery MethodRequiredAutorenewal Status$/ }).getByRole('textbox').nth(2).click();
        await expect(this.emailText).toBeVisible({ timeout: 6000 })
        await this.emailText.click();
        await expect(this.saveButton).toBeVisible({ timeout: 6000 })
        await this.saveButton.click();
        await this.saveButton.click();
    }

    async clickCloseHolidayCampaign() {
        try {
            await this.page.waitForTimeout(3000)
            await expect(this.closeHolidayCampaign).toBeVisible({ timeout: 60000 })
            await this.closeHolidayCampaign.click()
            await this.page.waitForTimeout(3000)
            await expect(this.closeButton).toBeVisible({ timeout: 6000 })
            await this.closeButton.click()
        } catch (error) {
            logger.info(`Element ${this.closeHolidayCampaign} not found or not visible: `, error);
            console.error(`Element ${this.closeHolidayCampaign} not found or not visible: `, error);
        }
    }




}