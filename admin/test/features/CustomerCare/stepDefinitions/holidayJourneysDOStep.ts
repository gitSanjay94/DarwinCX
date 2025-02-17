import { When, Then, Given } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

When('Click Holiday Journeys DO', async function () {
    await this.landPage.clickHolidayJourneysDO()
    logger.info('Clicked Holiday Journeys DO');
})



When('Click Cancel button in Detail Holiday Journeys popup', async function () {
    this.holidayJourneysDOPage = await this.pomManager.getHolidayJourneysDOPage()
    await this.holidayJourneysDOPage.clickCancelDetailHolidayJourneys();
    logger.info('Clicked Cancel button in Detail Holiday Journeys popup');
})

When('Edit Description of Holiday Journey', async function () {
    this.holidayJourneysDOPage = await this.pomManager.getHolidayJourneysDOPage()
    await this.holidayJourneysDOPage.updateDescription();
    logger.info('Edit Description of Holiday Journey');
})

Then('Validate Update Successful Text', async function () {
    let text = await this.holidayJourneysDOPage.validateUpdateSuccessfulText();
    expect(text).toEqual('Update successful.');
    logger.info('Validate Update Successful Text');
});





