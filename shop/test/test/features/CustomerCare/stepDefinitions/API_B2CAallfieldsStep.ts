import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { B2CAallfields_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens B2 New params url', async function () {
    try {
        // await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.goto(process.env.BASEURL + B2CAallfields_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Opened customer care app and navigated to the Login URL: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Timeout occurred:', error.message);
        } else {
            console.error('Page navigation failed:', error.message);
        }
    }
});

When('Verify the B2 New params First Name', async function () {
    this.B2CAallfieldsPage = await this.pomManager.getB2CAallfieldsPage();
    const firstName = await this.B2CAallfieldsPage.validateuserFirstNameTFText();
    expect(firstName).toEqual("jonathan");
    logger.info('Successfully verified the First Name as "Jonathan"');
});

Then('Verify the B2 New params Last Name', async function () {
    this.B2CAallfieldsPage = await this.pomManager.getB2CAallfieldsPage();
    const lastName = await this.B2CAallfieldsPage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('Successfully verified the Last Name at "Kok"');
});

Then('Verify the B2 New Page Blank Company Name', async function () {
    this.B2CAallfieldsPage = await this.pomManager.getB2CAallfieldsPage();
    const companyNameBlank = await this.B2CAallfieldsPage.validateBlankCompanyName();
    expect(companyNameBlank).toEqual("");
    logger.info('Successfully verified the Blank Company Name at B2 New Page');
});
Then('Verify the B2 New Page Address1 Value', async function () {
    this.B2CAallfieldsPage = await this.pomManager.getB2CAallfieldsPage();
    const Address1 = await this.B2CAallfieldsPage.validateUserAddress1Value();
    expect(Address1).toEqual("282 Dunview Ave");
    logger.info('Successfully verified the Address1 value as "282 Dunview Ave"');
});

Then('Verify the B2 New Page Address2 Value', async function () {
    this.B2CAallfieldsPage = await this.pomManager.getB2CAallfieldsPage();
    const Address2 = await this.B2CAallfieldsPage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('Successfully verified the Address2 value as "45"');
});

Then('Verify the B2 New Page City Value', async function () {
    this.B2CAallfieldsPage = await this.pomManager.getB2CAallfieldsPage();
    const City = await this.B2CAallfieldsPage.validateUserCityValue();
    expect(City).toEqual("Toronto");
    logger.info('Successfully verified the City as "Toronto"');
});

Then('Verify the B2 New Page Postal Code Value', async function () {
    this.B2CAallfieldsPage = await this.pomManager.getB2CAallfieldsPage();
    const PostalCode = await this.B2CAallfieldsPage.validateUserPostalCodeValue();
    expect(PostalCode).toEqual("M2N4J5");
    logger.info('Successfully verified the Postal Code as "M2N4J5"');
});

Then('Verify the B2 New Page Email Address Value', async function () {
    this.B2CAallfieldsPage = await this.pomManager.getB2CAallfieldsPage();
    const UserEmail = await this.B2CAallfieldsPage.validateUserEmailValue();
    expect(UserEmail).toEqual("jonathan@darwin.cx");
    logger.info('Successfully verified the Email Address as "jonathan@darwin.cx"');
});

Then('Verify the B2 New Page Country Value', async function () {
    this.B2CAallfieldsPage = await this.pomManager.getB2CAallfieldsPage();
    const country = await this.B2CAallfieldsPage.validateUserCountryValue();
    expect(country).toEqual("Canada");
    logger.info('Successfully verified the country name as "Canada"');
});

Then('Verify the B2 New Page User Province', async function () {
    this.B2CAallfieldsPage = await this.pomManager.getB2CAallfieldsPage();
    const city = await this.B2CAallfieldsPage.validateUserProvinceValue();
    expect(city).toEqual("Ontario");
    logger.info('Successfully verified the user province as "Ontario"');
});


