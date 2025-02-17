import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_NewparamsinurlUSnoCityPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens CSC_NewparamsinurlUSnoCity Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_NewparamsinurlUSnoCityPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the New Params US All Fields page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the First Name Value at CSC_NewparamsinurlUSnoCity Page', async function () {
    this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const firstName = await this.CSC_NewparamsinurlUSnoCityPage.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the CSC_NewparamsinurlUSnoCity Page');
});

Then('Verify the Last Name Value at CSC_NewparamsinurlUSnoCity Page', async function () {
     this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const lastName = await this.CSC_NewparamsinurlUSnoCityPage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The Last Name value "kok" has been successfully verified in the CSC_NewparamsinurlUSnoCity Page.');
});

Then('Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoCity Page', async function () {
    this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const companyName = await this.CSC_NewparamsinurlUSnoCityPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoCity Page.');
});
Then('Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoCity Page', async function () {
    this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const jobTitle = await this.CSC_NewparamsinurlUSnoCityPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoCity Page.');
});

Then('Verify the Address1 Value at CSC_NewparamsinurlUSnoCity Page', async function () {
    this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const City = await this.CSC_NewparamsinurlUSnoCityPage.validateUserAddress1Value();
    expect(City).toEqual("11 Commerce Blvd");
    logger.info('The Address1 value "11 Commerce Blvd" has been successfully verified in the CSC_NewparamsinurlUSnoCity Page.');
});

Then('Verify the Address2 Value at CSC_NewparamsinurlUSnoCity Page', async function () {
    this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const Address2 = await this.CSC_NewparamsinurlUSnoCityPage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value"45" has been successfully verified in the CSC_NewparamsinurlUSnoCity Page.');
});

Then('Verify the Blank City Value at CSC_NewparamsinurlUSnoCity Page', async function () {
    this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const City = await this.CSC_NewparamsinurlUSnoCityPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The Blank City value "" has been successfully verified in the CSC_NewparamsinurlUSnoCity Page.');
});

Then('Verify the Postal Code Value at CSC_NewparamsinurlUSnoCity Page', async function () {
    this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const postalCode = await this.CSC_NewparamsinurlUSnoCityPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("32164");
    logger.info('The postal code value "32164" has been successfully verified in the CSC_NewparamsinurlUSnoCity Page.');
});

Then('Verify the Email Address Value at CSC_NewparamsinurlUSnoCity Page', async function () {
    this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const email = await this.CSC_NewparamsinurlUSnoCityPage.validateUserEmailValue();
    expect(email).toEqual("webtest6@darwin.cx");
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in the CSC_NewparamsinurlUSnoCity Page.');
});


Then('Verify the Country Value at CSC_NewparamsinurlUSnoCity Page', async function () {
    this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const country = await this.CSC_NewparamsinurlUSnoCityPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoCity Page.');
});

Then('Verify the User Province at CSC_NewparamsinurlUSnoCity Page', async function () {
    this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    const province = await this.CSC_NewparamsinurlUSnoCityPage.validateUserProvinceValue();
    expect(province).toEqual("Florida");
    logger.info('The province value "Florida" has been successfully verified in the  CSC_NewparamsinurlUSnoCity Page.');
});

Then('Click on Pay Order link Button at CSC_NewparamsinurlUSnoCity Page', async function () {
   this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    await this.CSC_NewparamsinurlUSnoCityPage.clickPlaceOrderButton();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the require alert message for City field at CSC_NewparamsinurlUSnoCity Page', async function () {
   this.CSC_NewparamsinurlUSnoCityPage = await this.pomManager.getCSC_NewparamsinurlUSnoCityPage();
    let text = await this.CSC_NewparamsinurlUSnoCityPage.validateMissingCityAlert();
    expect(text).toEqual('City is missing');
    logger.info('Validated "City is missing" text');
});
