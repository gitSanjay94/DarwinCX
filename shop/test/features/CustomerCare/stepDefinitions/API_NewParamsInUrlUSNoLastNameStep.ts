import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { NewParamsUSNoLastName_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New params in url - US no Last Name', async function () {
    try {
        await this.page.goto(process.env.BASEURL + NewParamsUSNoLastName_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the New params in url - US no Last Name: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the first name in New params in url - US no Last Name fields', async function () {
    this.NewParamsInUrlUSNoLastNamePage = await this.pomManager.getNewParamsInUrlUSNoLastNamePage();
    const firstName = await this.NewParamsInUrlUSNoLastNamePage.validateUserFirstNameValue();
    expect(firstName).toEqual('jonathan');
    logger.info('The first name value "jonathan" has been successfully verified in New params in url - US no Last Name fields section');
})

Then('Verify the last name text field has no value', async function () {
    this.NewParamsInUrlUSNoLastNamePage = await this.pomManager.getNewParamsInUrlUSNoLastNamePage();
    const lastName = await this.NewParamsInUrlUSNoLastNamePage.validateUserLastNameValue();
    expect(lastName).toEqual('');
    logger.info('The last name text field has been successfully verified to have no value in the New Params in url - US no Last Name fields section')
})

Then('Validate Last Name Missing text under last name text field section', async function () {
    this.NewParamsInUrlUSNoLastNamePage = await this.pomManager.getNewParamsInUrlUSNoLastNamePage();
    const text = await this.NewParamsInUrlUSNoLastNamePage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is missing" text has been successfully validated under last name text filed section');
})

Then('Verify the address1 in New params in url - US no Last Name fields', async function () {
    const address1 = await this.NewParamsInUrlUSNoLastNamePage.validateUserAddress1Value();
    expect(address1).toEqual('11 Commerce Blvd');
    logger.info('The address1 value "11 Commerce Blvd" has been successfully verified in New params in url - US no Last Name fields section');
})

Then('Verify the address2 in New params in url - US no Last Name fields', async function () {
    const address2 = await this.NewParamsInUrlUSNoLastNamePage.validateUserAddress2Value();
    expect(address2).toEqual('45');
    logger.info('The address2 value "45" has been successfully verified in New params in url - US no Last Name fields section');
})

Then('Verify the city in New params in url - US no Last Name fields', async function () {
    const city = await this.NewParamsInUrlUSNoLastNamePage.validateUserCityValue();
    expect(city).toEqual('Palm Coast');
    logger.info('The city value "Palm Coast" has been successfully verified in New params in url - US no Last Name fields section');
})

Then('Verify the postal code in New params in url - US no Last Name fields', async function () {
    const postalCode = await this.NewParamsInUrlUSNoLastNamePage.validateUserPostalCodeValue();
    expect(postalCode).toEqual('32164');
    logger.info('The postal code value "32164" has been successfully verified in New params in url - US no Last Name fields section');
})

Then('Verify the email in New params in url - US no Last Name fields', async function () {
    const email = await this.NewParamsInUrlUSNoLastNamePage.validateUserEmailValue();
    expect(email).toEqual('webtest6@darwin.cx');
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in New params in url - US no Last Name fields section');
})

Then('Verify the country in New params in url - US no Last Name fields', async function () {
    const country = await this.NewParamsInUrlUSNoLastNamePage.validateUserCountryValue();
    expect(country).toEqual('United States');
    logger.info('The country value "United States" has been successfully verified in New params in url - US no Last Name fields section');
})

Then('Verify the province in New params in url - US no Last Name fields', async function () {
    const province = await this.NewParamsInUrlUSNoLastNamePage.validateUserProvinceValue();
    expect(province).toEqual('Florida');
    logger.info('The province value "Florida" has been successfully verified in New params in url - US no Last Name fields section');
})