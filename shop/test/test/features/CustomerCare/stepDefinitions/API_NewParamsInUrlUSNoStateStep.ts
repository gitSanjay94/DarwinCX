import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { NewParamsUSNoState_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New params in url - US no State', async function () {
    try {
        await this.page.goto(process.env.BASEURL + NewParamsUSNoState_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the New params in url - US no State: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the first name in New params in url - US no State fields', async function () {
    this.NewParamsInUrlUSNoStatePage = await this.pomManager.getNewParamsInUrlUSNoStatePage();
    const firstName = await this.NewParamsInUrlUSNoStatePage.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the last name in New params in url - US no State fields', async function () {
    let lastName = await this.NewParamsInUrlUSNoStatePage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The last name value "kok" has been successfully verified in New params in url - US no State fields section');
})

Then('Verify the Address1 in New params in url - US no State fields', async function () {
    let address1 = await this.NewParamsInUrlUSNoStatePage.validateUserAddress1Value();
    expect(address1).toEqual('11 Commerce Blvd');
    logger.info('The address1 value "11 Commerce Blvd" has been successfully verified in New params in url - US no State fields section');
})

Then('Verify the address2 in New params in url - US no State fields', async function () {
    let address2 = await this.NewParamsInUrlUSNoStatePage.validateUserAddress2Value();
    expect(address2).toEqual('45');
    logger.info('The address2 value "45" has been successfully verified in New params in url - US no State fields section');
})

Then('Verify the city in New params in url - US no State fields', async function () {
    let city = await this.NewParamsInUrlUSNoStatePage.validateUserCityValue();
    expect(city).toEqual('Palm Coast');
    logger.info('The city value "Palm Coast" has been successfully verified in New params in url - US no State fields section');
})

Then('Verify the postal code in New params in url - US no State fields', async function () {
    let postalCode = await this.NewParamsInUrlUSNoStatePage.validateUserPostalCodeValue();
    expect(postalCode).toEqual('32164');
    logger.info('The postal code value "32164" has been successfully verified in New params in url - US no State fields section');
})

Then('Verify the email in New params in url - US no State fields', async function () {
    let email = await this.NewParamsInUrlUSNoStatePage.validateUserEmailValue();
    expect(email).toEqual('webtest6@darwin.cx');
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in New params in url - US no State fields section');
})

Then('Verify the country in New params in url - US no State fields', async function () {
    let country = await this.NewParamsInUrlUSNoStatePage.validateUserCountryValue();
    expect(country).toEqual('United States');
    logger.info('The country value "United States" has been successfully verified in New params in url - US no State fields section');
})

Then('Verify the province drop down has no state', async function () {
    this.NewParamsInUrlUSNoStatePage = await this.pomManager.getNewParamsInUrlUSNoStatePage();
    let province = await this.NewParamsInUrlUSNoStatePage.validateUserProvinceValue();
    expect(province).toEqual('Choose Province/State*');
    logger.info('The province value "Choose Province/State*" has been successfully verified in New params in url - US no State fields section');
})