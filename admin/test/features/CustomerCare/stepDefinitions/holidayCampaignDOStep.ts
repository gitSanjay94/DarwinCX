import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

When('Click Holiday Campaign DO', async function () {
    await this.landPage.clickHolidayCampaignDO();
    logger.info('Clicked Holiday Campaign DO');
})

When('Select NO in Freeze Holiday Campaign popup', async function () {
    this.holidayCampaignDOPage = await this.pomManager.getHolidayCampaignDOPage()
    await this.holidayCampaignDOPage.clickFreezeHolidayCampaign();
    logger.info('Selected NO in Freeze Holiday Campaign popup');
})


Then('Validate Page Number Text', async function () {
    this.holidayCampaignDOPage = await this.pomManager.getHolidayCampaignDOPage()
    const isValid = await this.holidayCampaignDOPage.validatePageNumberText();
    expect(isValid).toBe(true);
    logger.info('Validated Page Number Text');
});

Then('Validate Required Text in Add Holiday Campaign popup', async function () {
    const text = await this.holidayCampaignDOPage.validateRequiredText();
    expect(text).toEqual('Required');
    logger.info('Validate Required Text in Add Holiday Campaign popup');
});

When('Click Add button in Add Holiday Campaign popup', async function () {
    this.holidayCampaignDOPage = await this.pomManager.getHolidayCampaignDOPage()
    await this.holidayCampaignDOPage.clickAddButton();
    logger.info('Clicked Add button in Add Holiday Campaign popup');
})











