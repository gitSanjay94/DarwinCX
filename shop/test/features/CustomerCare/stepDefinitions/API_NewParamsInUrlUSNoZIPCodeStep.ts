import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { NewParamsUSNoZIPCode_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New params in url - US no ZIP Code', async function () {
    try {
        await this.page.goto(process.env.BASEURL + NewParamsUSNoZIPCode_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the New params in url - US no ZIP Code: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the first name in New params in url - US no ZIP Code fields', async function () {
    this.NewParamsInUrlUSNoZIPCodePage = await this.pomManager.getNewParamsInUrlUSNoZIPCodePage();
    const firstName = await this.NewParamsInUrlUSNoZIPCodePage.validateUserFirstNameValue();
    expect(firstName).toEqual('jonathan');
    logger.info('The first name value "jonathan" has been successfully verified in New params in url - US no ZIP Code fields section');
})

Then('Verify the last name in New params in url - US no ZIP Code fields', async function () {
    const lastName = await this.NewParamsInUrlUSNoZIPCodePage.validateUserLastNameValue();
    expect(lastName).toEqual('kok');
    logger.info('The last name value "kok" has been successfully verified in New params in url - US no ZIP Code fields section');
})

Then('Verify the address1 in New params in url - US no ZIP Code fields', async function () {
    const address1 = await this.NewParamsInUrlUSNoZIPCodePage.validateUserAddress1Value();
    expect(address1).toEqual('11 Commerce Blvd');
    logger.info('The address1 value "11 Commerce Blvd" has been successfully verified in New params in url - US no ZIP Code fields section');
})

Then('Verify the address2 in New params in url - US no ZIP Code fields', async function () {
    const address2 = await this.NewParamsInUrlUSNoZIPCodePage.validateUserAddress2Value();
    expect(address2).toEqual('45');
    logger.info('The address2 value "45" has been successfully verified in New params in url - US no ZIP Code fields section');
})

Then('Verify the city in New params in url - US no ZIP Code fields', async function () {
    const city = await this.NewParamsInUrlUSNoZIPCodePage.validateUserCityValue();
    expect(city).toEqual('Palm Coast');
    logger.info('The city value "Palm coast" has been successfully verified in New params in url - US no ZIP Code fields section');
})

Then('Verify the postal code text field has no value', async function () {
    this.NewParamsInUrlUSNoZIPCodePage = await this.pomManager.getNewParamsInUrlUSNoZIPCodePage();
    const postalCode = await this.NewParamsInUrlUSNoZIPCodePage.validateUserPostalCodeValue();
    expect(postalCode).toEqual('');
    logger.info('The postal code text field has been successfully verified to have no value in the New Params in url - US no ZIP Code fields section')
})

Then('Validate Postal Code Missing text under postal code text field section', async function () {
    this.NewParamsInUrlUSNoZIPCodePage = await this.pomManager.getNewParamsInUrlUSNoZIPCodePage();
    const text = await this.NewParamsInUrlUSNoZIPCodePage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal Code is missing" text has been successfully validated under postal code text filed section');
})

Then('Verify the country in New params in url - US no ZIP Code fields', async function () {
    const country = await this.NewParamsInUrlUSNoZIPCodePage.validateUserCountryValue();
    expect(country).toEqual('United States');
    logger.info('The country value "United States" has been successfully verified in New params in url - US no ZIP Code fields section');
})

Then('Verify the province in New params in url - US no ZIP Code fields', async function () {
    const province = await this.NewParamsInUrlUSNoZIPCodePage.validateUserProvinceValue();
    expect(province).toEqual('Florida');
    logger.info('The province value "Florida" has been successfully verified in New params in url - US no ZIP Code fields section');
})

Then('Verify the email in New params in url - US no ZIP Code fields', async function () {
    const email = await this.NewParamsInUrlUSNoZIPCodePage.validateUserEmailValue();
    expect(email).toEqual('webtest6@darwin.cx');
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in New params in url - US no ZIP Code fields section');
})