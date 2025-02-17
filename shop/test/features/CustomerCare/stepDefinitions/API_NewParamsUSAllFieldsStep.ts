import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { NewParamsUSAllFields_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New Params US All Fields url', async function () {
    try {
        await this.page.goto(process.env.BASEURL + NewParamsUSAllFields_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the New Params US All Fields : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the First Name in New Params US All Fields', async function () {
    this.NewParamsUSAllFieldsPage = await this.pomManager.getNewParamsUSAllFieldsPage();
    const firstName = await this.NewParamsUSAllFieldsPage.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the Last Name in New Params US All Fields', async function () {
    const lastName = await this.NewParamsUSAllFieldsPage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The Last Name value "kok" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the Address1 in New Params US All Fields', async function () {
    const Address1 = await this.NewParamsUSAllFieldsPage.validateUserAddress1Value();
    expect(Address1).toEqual("11 Commerce Blvd");
    logger.info('The Address1 value "11 Commerce Blvd" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the Address2 in New Params US All Fields', async function () {
    const Address2 = await this.NewParamsUSAllFieldsPage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value "45" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the City in New Params US All Fields', async function () {
    const City = await this.NewParamsUSAllFieldsPage.validateUserCityValue();
    expect(City).toEqual("Palm Coast");
    logger.info('The City value "Palm Coast" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the postal code in New Params US All Fields', async function () {
    const postalCode = await this.NewParamsUSAllFieldsPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("32164");
    logger.info('The postal code value "32164" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the email in New Params US All Fields', async function () {
    const email = await this.NewParamsUSAllFieldsPage.validateUserEmailValue();
    expect(email).toEqual("webtest6@darwin.cx");
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the company text field has no value', async function () {
    this.NewParamsUSAllFieldsPage = await this.pomManager.getNewParamsUSAllFieldsPage();
    const company = await this.NewParamsUSAllFieldsPage.validateUserCompanyValue();
    expect(company).toEqual("");
    logger.info('The company text field has been successfully verified to have no value in the New Params US All Fields section.');
});

Then('Verify the job title text field has no value', async function () {
    this.NewParamsUSAllFieldsPage = await this.pomManager.getNewParamsUSAllFieldsPage();
    const jobTitle = await this.NewParamsUSAllFieldsPage.validateUserJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The job title text field has been successfully verified to have no value in the New Params US All Fields section.');
});

Then('Verify the phone number text field has no value', async function () {
    this.NewParamsUSAllFieldsPage = await this.pomManager.getNewParamsUSAllFieldsPage();
    const phoneNumber = await this.NewParamsUSAllFieldsPage.validateUserPhoneNumberValue();
    expect(phoneNumber).toEqual("");
    logger.info('The phone number text field has been successfully verified to have no value in the New Params US All Fields section.');
});

Then('Verify the country in New Params US All Fields', async function () {
    const country = await this.NewParamsUSAllFieldsPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "United States"" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the province in New Params US All Fields', async function () {
    const province = await this.NewParamsUSAllFieldsPage.validateUserProvinceValue();
    expect(province).toEqual("Florida");
    logger.info('The province value "Florida" has been successfully verified in the New Params US All Fields section.');
});




