import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { NewParamsUSNoFirstName_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New params in url - US no First Name', async function () {
    try {
        await this.page.goto(process.env.BASEURL + NewParamsUSNoFirstName_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the New params in url - US no First Name: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the first name text field has no value', async function () {
    this.NewParamsInUrlUSNoFirstNamePage = await this.pomManager.getNewParamsInUrlUSNoFirstNamePage();
    const firstName = await this.NewParamsInUrlUSNoFirstNamePage.validateUserFirstNameValue();
    expect(firstName).toEqual('');
    logger.info('The first name text field has been successfully verified to have no value in the New Params in url - US no First Name fields section')
})

Then('Validate First Name Missing text under first name text field section', async function () {
    this.NewParamsInUrlUSNoFirstNamePage = await this.pomManager.getNewParamsInUrlUSNoFirstNamePage();
    const text = await this.NewParamsInUrlUSNoFirstNamePage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Verify last name in New params in url - US no First Name fields', async function () {
    const lastName = await this.NewParamsInUrlUSNoFirstNamePage.validateUserLastNameValue();
    expect(lastName).toEqual('kok');
    logger.info('The last name value "kok" has been successfully verified in New params in url - US no first name fields section');
})

Then('Verify address1 in New params in url - US no First Name fields', async function () {
    const address1 = await this.NewParamsInUrlUSNoFirstNamePage.validateUserAddress1Value();
    expect(address1).toEqual('11 Commerce Blvd');
    logger.info('The address1 value "11 Commerce Blvd" has been successfully verified in New params in url - US no first name fields section');
})

Then('Verify address2 in New params in url - US no First Name fields', async function () {
    const address2 = await this.NewParamsInUrlUSNoFirstNamePage.validateUserAddress2Value();
    expect(address2).toEqual('45');
    logger.info('The address2 value "45" has been successfully verified in New params in url - US no first name fields section');
})

Then('Verify city in New params in url - US no First Name fields', async function () {
    const city = await this.NewParamsInUrlUSNoFirstNamePage.validateUserCityValue();
    expect(city).toEqual('Palm Coast');
    logger.info('The city value "Palm Coast" has been successfully verified in New params in url - US no first name fields section');
})

Then('Verify postal code in New params in url - US no First Name fields', async function () {
    const postalCode = await this.NewParamsInUrlUSNoFirstNamePage.validateUserPostalCodeValue();
    expect(postalCode).toEqual('32164');
    logger.info('The postal code value "32164" has been successfully verified in New params in url - US no first name fields section');
})

Then('Verify country in New params in url - US no First Name fields', async function () {
    const country = await this.NewParamsInUrlUSNoFirstNamePage.validateUserCountryValue();
    expect(country).toEqual('United States');
    logger.info('The country value "United States" has been successfully verified in New params in url - US no first name fields section');
})

Then('Verify privince in New params in url - US no First Name fields', async function () {
    const province = await this.NewParamsInUrlUSNoFirstNamePage.validateUserProvinceValue();
    expect(province).toEqual('Florida');
    logger.info('The province value "Florida" has been successfully verified in New params in url - US no first name fields section');
})

Then('Verify email in New params in url - US no First Name fields', async function () {
    const email = await this.NewParamsInUrlUSNoFirstNamePage.validateUserEmailValue();
    expect(email).toEqual('webtest6@darwin.cx');
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in New params in url - US no first name fields section');
})