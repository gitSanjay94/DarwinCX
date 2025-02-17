import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { NewParamsUSNoAddress2_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New params in url - US no Address 2', async function () {
    try {
        await this.page.goto(process.env.BASEURL + NewParamsUSNoAddress2_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the New params in url - US no  Address 2: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the First Name in New params in url - US no Address 2 Fields', async function () {
    this.NewParamsInUrlUSNoAddress2Page = await this.pomManager.getNewParamsInUrlUSNoAddress2Page();
    const firstName = await this.NewParamsInUrlUSNoAddress2Page.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The first name value "jonathan" has been successfully verified in the New Params US No Address 2 Fields section.');
});

Then('Verify the Last Name in New params in url - US no Address 2 Fields', async function () {
    const lastName = await this.NewParamsInUrlUSNoAddress2Page.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The last name value "kok" has been successfully verified in the New Params US No Address 2 Fields section.');
})

Then('Verify the Address 1 in New params in url - US no Address 2 Fields', async function () {
    const Address1 = await this.NewParamsInUrlUSNoAddress2Page.validateUserAddress1Value();
    expect(Address1).toEqual('11 Commerce Blvd');
    logger.info('The Address1 value "11 Commerce Blvd" has been successfully verified in the New Params US No Address 2 Fields section.');
})


Then('Verify the City in New params in url - US no Address 2 Fields', async function () {
    const City = await this.NewParamsInUrlUSNoAddress2Page.validateUserCityValue();
    expect(City).toEqual('Palm Coast');
    logger.info('The City value "Palm Coast" has been successfully verified in the New Params US No Address 2 Fields section.');
})

Then('Verify the postal code in New params in url - US no Address 2 Fields', async function () {
    const postalCode = await this.NewParamsInUrlUSNoAddress2Page.validateUserPostalCodeValue();
    expect(postalCode).toEqual('32164');
    logger.info('The postal code "32164" has been successfully verified in the New Params US No Address 2 Fields section.');
})

Then('Verify the email in New params in url - US no Address 2 Fields', async function () {
    const email = await this.NewParamsInUrlUSNoAddress2Page.validateUserEmailValue();
    expect(email).toEqual('webtest6@darwin.cx');
    logger.info('The email "webtest6@darwin.cx" has been successfully verified in the New Params US No Address 2 Fields section.');
})

Then('Verify the Country in New Params in url - US no Address 2 Fields', async function () {
    const country = await this.NewParamsInUrlUSNoAddress2Page.validateUserCountryValue();
    expect(country).toEqual('United States');
    logger.info('The country "United States" has been successfully verified in the New Params US No Address 2 Fields section.');
})

Then('Verify the province in New Params in url - US no Address 2 Fields', async function () {
    const province = await this.NewParamsInUrlUSNoAddress2Page.validateUserProvinceValue();
    expect(province).toEqual('Florida');
    logger.info('The province "Florida" has been successfully verified in the New Params US No Address 2 Fields section.');
})

