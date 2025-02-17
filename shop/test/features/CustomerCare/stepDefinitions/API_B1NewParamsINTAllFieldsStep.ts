import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { B1NewParamsINTAllFields_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens B1 New Params INT All Fields url', async function () {
    try {
        await this.page.goto(process.env.BASEURL + B1NewParamsINTAllFields_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to B1 New Params INT All Fields : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the First Name in B1 New Params INT All Fields', async function () {
    this.B1NewParamsINTAllFieldsPage = await this.pomManager.getB1NewParamsINTAllFieldsPage();
    const firstName = await this.B1NewParamsINTAllFieldsPage.validateUserFirstNameValue();
    expect(firstName).toEqual("international");
    logger.info('The First Name value "international" has been successfully verified in the B1 New Params INT All Fields section.');
});

Then('Verify the Last Name in B1 New Params INT All Fields', async function () {
    const lastName = await this.B1NewParamsINTAllFieldsPage.validateUserLastNameValue();
    expect(lastName).toEqual("paramstest");
    logger.info('The Last Name value "paramstest" has been successfully verified in the B1 New Params INT All Fields section.');
});

Then('Verify the Address1 in B1 New Params INT All Fields', async function () {
    const Address1 = await this.B1NewParamsINTAllFieldsPage.validateUserAddress1Value();
    expect(Address1).toEqual("484 Carrer del Rosselló");
    logger.info('The Address1 value "484 Carrer del Rosselló" has been successfully verified in the B1 New Params INT All Fields section.');
});

Then('Verify the Address2 in B1 New Params INT All Fields', async function () {
    const Address2 = await this.B1NewParamsINTAllFieldsPage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value "45" has been successfully verified in the B1 New Params INT All Fields section.');
});

Then('Verify the City in B1 New Params INT All Fields', async function () {
    const City = await this.B1NewParamsINTAllFieldsPage.validateUserCityValue();
    expect(City).toEqual("Barcelona");
    logger.info('The City value "Barcelona" has been successfully verified in the B1 New Params INT All Fields section.');
});

Then('Verify the postal code in B1 New Params INT All Fields', async function () {
    const postalCode = await this.B1NewParamsINTAllFieldsPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("08025");
    logger.info('The postal code value "08025" has been successfully verified in the B1 New Params INT All Fields section.');
});

Then('Verify the email in B1 New Params INT All Fields', async function () {
    const email = await this.B1NewParamsINTAllFieldsPage.validateUserEmailValue();
    expect(email).toEqual("jonathan@darwin.cx");
    logger.info('The email value "jonathan@darwin.cx" has been successfully verified in the B1 New Params INT All Fields section.');
});

Then('Verify the country in B1 New Params INT All Fields', async function () {
    const country = await this.B1NewParamsINTAllFieldsPage.validateUserCountryValue();
    expect(country).toEqual("Spain");
    logger.info('The country value "Spain" has been successfully verified in the B1 New Params INT All Fields section.');
});

Then('Verify the province in B1 New Params INT All Fields', async function () {
    const province = await this.B1NewParamsINTAllFieldsPage.validateUserProvinceValue();
    expect(province).toEqual("Gerona");
    logger.info('The province value "Gerona" has been successfully verified in the B1 New Params INT All Fields section.');
});

Then('Validate Product is not available in selected country text', async function(){
    this.B1NewParamsINTAllFieldsPage = await this.pomManager.getB1NewParamsINTAllFieldsPage();
    const text = await this.B1NewParamsINTAllFieldsPage.validateProductIsUnavailableInSelectedCountryText();
    expect(text).toEqual('Product is unavailable in selected country');
    logger.info('The "Product is unavailable in selected country" text has been successfully validated under country drop down section');
})




