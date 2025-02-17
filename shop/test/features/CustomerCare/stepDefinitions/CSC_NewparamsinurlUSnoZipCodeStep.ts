import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_NewparamsinurlUSnoZipCodePage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens CSC_NewparamsinurlUSnoZipCode Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_NewparamsinurlUSnoZipCodePage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the First Name Value at CSC_NewparamsinurlUSnoZipCode Page', async function () {
    this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const firstName = await this.CSC_NewparamsinurlUSnoZipCodePage.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the CSC_NewparamsinurlUSnoZipCode Page');
});

Then('Verify the Last Name Value at CSC_NewparamsinurlUSnoZipCode Page', async function () {
     this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const lastName = await this.CSC_NewparamsinurlUSnoZipCodePage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The Last Name value "kok" has been successfully verified in the CSC_NewparamsinurlUSnoZipCode Page.');
});

Then('Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoZipCode Page', async function () {
    this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const companyName = await this.CSC_NewparamsinurlUSnoZipCodePage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoZipCode Page.');
});
Then('Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoZipCode Page', async function () {
    this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const jobTitle = await this.CSC_NewparamsinurlUSnoZipCodePage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoZipCode Page.');
});

Then('Verify the Address1 Value at CSC_NewparamsinurlUSnoZipCode Page', async function () {
    this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const ZipCode = await this.CSC_NewparamsinurlUSnoZipCodePage.validateUserAddress1Value();
    expect(ZipCode).toEqual("11 Commerce Blvd");
    logger.info('The Address1 value "11 Commerce Blvd" has been successfully verified in the CSC_NewparamsinurlUSnoZipCode Page.');
});

Then('Verify the Address2 Value at CSC_NewparamsinurlUSnoZipCode Page', async function () {
    this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const Address2 = await this.CSC_NewparamsinurlUSnoZipCodePage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value"45" has been successfully verified in the CSC_NewparamsinurlUSnoZipCode Page.');
});

Then('Verify the City Value at CSC_NewparamsinurlUSnoZipCode Page', async function () {
    this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const ZipCode = await this.CSC_NewparamsinurlUSnoZipCodePage.validateUserCityValue();
    expect(ZipCode).toEqual("Palm Coast");
    logger.info('The City value "Palm Coast" has been successfully verified in the CSC_NewparamsinurlUSnoZipCode Page.');
});

Then('Verify the Blank Postal Code Value at CSC_NewparamsinurlUSnoZipCode Page', async function () {
    this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const postalCode = await this.CSC_NewparamsinurlUSnoZipCodePage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The postal code Blank value "" has been successfully verified in the CSC_NewparamsinurlUSnoZipCode Page.');
});

Then('Verify the Email Address Value at CSC_NewparamsinurlUSnoZipCode Page', async function () {
    this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const email = await this.CSC_NewparamsinurlUSnoZipCodePage.validateUserEmailValue();
    expect(email).toEqual("webtest6@darwin.cx");
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in the CSC_NewparamsinurlUSnoZipCode Page.');
});


Then('Verify the Country Value at CSC_NewparamsinurlUSnoZipCode Page', async function () {
    this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const country = await this.CSC_NewparamsinurlUSnoZipCodePage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoZipCode Page.');
});

Then('Verify the User Province at CSC_NewparamsinurlUSnoZipCode Page', async function () {
    this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    const province = await this.CSC_NewparamsinurlUSnoZipCodePage.validateUserProvinceValue();
    expect(province).toEqual("Florida");
    logger.info('The province value "Florida" has been successfully verified in the  CSC_NewparamsinurlUSnoZipCode Page.');
});

Then('Click on Pay Order link Button at CSC_NewparamsinurlUSnoZipCode Page', async function () {
   this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    await this.CSC_NewparamsinurlUSnoZipCodePage.clickPlaceOrderButton();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the require alert message for ZipCode field at CSC_NewparamsinurlUSnoZipCode Page', async function () {
   this.CSC_NewparamsinurlUSnoZipCodePage = await this.pomManager.getCSC_NewparamsinurlUSnoZipCodePage();
    let text = await this.CSC_NewparamsinurlUSnoZipCodePage.validateMissingZipCodeAlert();
    expect(text).toEqual('Postal code is missing');
    logger.info('Validated "Postal code is missing" text');
});
