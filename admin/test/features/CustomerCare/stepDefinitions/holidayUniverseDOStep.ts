import { When, Then, Given } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

When('Click Holiday Universes DO', async function () {
    await this.landPage.clickHolidayUniversesDO()
    logger.info('Clicked Holiday Universes DO');
})

When('Add New Holiday Universe', async function () {
    this.holidayUniversesDOPage = await this.pomManager.getHolidayUniversesDOPage()
    await this.holidayUniversesDOPage.addNewHolidayUniverse();
    logger.info('Add New Holiday Universe');
})

Then('Validate Successfully Added Holiday Campaign Universe Text', async function () {
    let text = await this.holidayUniversesDOPage.validateSuccessfullyAddedHolidayCampaignUniverseText();
    expect(text).toEqual('Successfully added Holiday Campaign Universe.');
    logger.info('Validate Successfully Added Holiday Campaign Universe Text');
});

When('Select Close in Change Panel Numbers Priority popup', async function () {
    this.holidayUniversesDOPage = await this.pomManager.getHolidayUniversesDOPage()
    await this.holidayUniversesDOPage.clickCloseHolidayCampaign();
    logger.info('Selected Close in Change Panel Numbers Priority popup');
})




