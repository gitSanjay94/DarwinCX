import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_NewparamsinurlUSnoAddress2Page_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_NewparamsinurlUSnoAddress2Page_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the First Name Value at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const firstName = await this.CSC_NewparamsinurlUSnoAddress2Page.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the CSC_NewparamsinurlUSnoAddress2 Page');
});

Then('Verify the Last Name Value at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
     this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const lastName = await this.CSC_NewparamsinurlUSnoAddress2Page.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The Last Name value "kok" has been successfully verified in the CSC_NewparamsinurlUSnoAddress2 Page.');
});

Then('Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const companyName = await this.CSC_NewparamsinurlUSnoAddress2Page.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoAddress2 Page.');
});
Then('Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const jobTitle = await this.CSC_NewparamsinurlUSnoAddress2Page.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoAddress2 Page.');
});

Then('Verify the Address1 Value at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const Address1 = await this.CSC_NewparamsinurlUSnoAddress2Page.validateUserAddress1Value();
    expect(Address1).toEqual("11 Commerce Blvd");
    logger.info('The  Address1 value "11 Commerce Blvd" has been successfully verified in the CSC_NewparamsinurlUSnoAddress2 Page.');
});

Then('Verify the Blank Address2 Value at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const Address2 = await this.CSC_NewparamsinurlUSnoAddress2Page.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Blank Address2 value "" has been successfully verified in the CSC_NewparamsinurlUSnoAddress2 Page.');
});

Then('Verify the City Value at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const City = await this.CSC_NewparamsinurlUSnoAddress2Page.validateUserCityValue();
    expect(City).toEqual("Palm Coast");
    logger.info('The City value "Palm Coast" has been successfully verified in the CSC_NewparamsinurlUSnoAddress2 Page.');
});

Then('Verify the Postal Code Value at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const postalCode = await this.CSC_NewparamsinurlUSnoAddress2Page.validateUserPostalCodeValue();
    expect(postalCode).toEqual("32164");
    logger.info('The postal code value "32164" has been successfully verified in the CSC_NewparamsinurlUSnoAddress2 Page.');
});

Then('Verify the Email Address Value at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const email = await this.CSC_NewparamsinurlUSnoAddress2Page.validateUserEmailValue();
    expect(email).toEqual("webtest6@darwin.cx");
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in the CSC_NewparamsinurlUSnoAddress2 Page.');
});


Then('Verify the Country Value at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const country = await this.CSC_NewparamsinurlUSnoAddress2Page.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoAddress2 Page.');
});

Then('Verify the User Province at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
    this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    const province = await this.CSC_NewparamsinurlUSnoAddress2Page.validateUserProvinceValue();
    expect(province).toEqual("Florida");
    logger.info('The province value "Florida" has been successfully verified in the  CSC_NewparamsinurlUSnoAddress2 Page.');
});

Then('Click on Pay Order link Button at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
   this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    await this.CSC_NewparamsinurlUSnoAddress2Page.clickPlaceOrderButton();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the require alert message for Address2 field at CSC_NewparamsinurlUSnoAddress2 Page', async function () {
   this.CSC_NewparamsinurlUSnoAddress2Page = await this.pomManager.getCSC_NewparamsinurlUSnoAddress2Page();
    let text = await this.CSC_NewparamsinurlUSnoAddress2Page.validateMissingAddress1Alert();
    expect(text).toEqual('required');
    logger.info('Validated "required" text');
});
