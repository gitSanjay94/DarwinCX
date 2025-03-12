import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { NewParamsUSNoCity_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New params in url - US no City', async function () {
    try {
        await this.page.goto(process.env.BASEURL + NewParamsUSNoCity_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the New params in url - US no City: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the first name in New params in url - US no City fields', async function () {
    this.NewParamsInUrlUSNoCityPage = await this.pomManager.getNewParamsInUrlUSNoCityPage();
    const firstName = await this.NewParamsInUrlUSNoCityPage.validateUserFirstNameValue();
    expect(firstName).toEqual('jonathan');
    logger.info('The first name value "jonathan" has been successfully verified in the New params in url US no City fields section.');
})

Then('Verify the last name in New params in url - US no City fields', async function () {
    const lastName = await this.NewParamsInUrlUSNoCityPage.validateUserLastNameValue();
    expect(lastName).toEqual('kok');
    logger.info('The last name value "kok" has been successfully verified in the New params in url - US no City fields section');
})

Then('Verify the address1 in New params in url - US no City fields', async function () {
    const address1 = await this.NewParamsInUrlUSNoCityPage.validateUserAddress1Value();
    expect(address1).toEqual('11 Commerce Blvd');
    logger.info('The address1 value "11 Commerce Blvd" has been successfully verified in the New params in url - US no City fields section.');
})

Then('Verify the address2 in New params in url - US no City fields', async function () {
    const address2 = await this.NewParamsInUrlUSNoCityPage.validateUserAddress2Value();
    expect(address2).toEqual('45');
    logger.info('The address2 value "45" has been successfully verified in the New params in url - US no City fields section');
})

Then('Verify the city text field has no value', async function () {
    this.NewParamsInUrlUSNoCityPage = await this.pomManager.getNewParamsInUrlUSNoCityPage();
    const city = await this.NewParamsInUrlUSNoCityPage.validateUserCityValue();
    expect(city).toEqual('');
    logger.info('The city text field has been successfully verified to have no value in the New Params in url - US no City fields section');
})

Then('Validate City Missing text under city text field section', async function () {
        this.NewParamsInUrlUSNoCityPage = await this.pomManager.getNewParamsInUrlUSNoCityPage();
const text = await this.NewParamsInUrlUSNoCityPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is Missing" text has been successfully validated under city text field section');
})

Then('Verify country in New params in url - US no City fields', async function () {
    const country = await this.NewParamsInUrlUSNoCityPage.validateUserCountryValue();
    expect(country).toEqual('United States');
    logger.info('The country value "United States" has been successfully verified in New params in url - US no city fields section');
})

Then('Verify province in New params in url - US no City fields', async function () {
    const province = await this.NewParamsInUrlUSNoCityPage.validateUserProvinceValue();
    expect(province).toEqual('Florida');
    logger.info('The province value "Florida" has been successfully verified in New params in url - US no city fields section');
})

Then('Verify postal code in New params in url - US no City fields', async function () {
    const postalCode = await this.NewParamsInUrlUSNoCityPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual('32164');
    logger.info('The postal code value "32164" has been successfully verified in New params in url - US no city fields section');
})

Then('Verify email in New params in url - US no City fields', async function () {
    const email = await this.NewParamsInUrlUSNoCityPage.validateUserEmailValue();
    expect(email).toEqual('webtest6@darwin.cx');
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in New params in url - US no city fields section');
})