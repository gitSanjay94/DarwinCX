import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_NewparamsinurlUSnoStatePage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens CSC_NewparamsinurlUSnoState Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_NewparamsinurlUSnoStatePage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the First Name Value at CSC_NewparamsinurlUSnoState Page', async function () {
    this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const firstName = await this.CSC_NewparamsinurlUSnoStatePage.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the CSC_NewparamsinurlUSnoState Page');
});

Then('Verify the Last Name Value at CSC_NewparamsinurlUSnoState Page', async function () {
     this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const lastName = await this.CSC_NewparamsinurlUSnoStatePage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The Last Name value "kok" has been successfully verified in the CSC_NewparamsinurlUSnoState Page.');
});

Then('Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoState Page', async function () {
    this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const companyName = await this.CSC_NewparamsinurlUSnoStatePage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoState Page.');
});
Then('Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoState Page', async function () {
    this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const jobTitle = await this.CSC_NewparamsinurlUSnoStatePage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoState Page.');
});

Then('Verify the Address1 Value at CSC_NewparamsinurlUSnoState Page', async function () {
    this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const State = await this.CSC_NewparamsinurlUSnoStatePage.validateUserAddress1Value();
    expect(State).toEqual("11 Commerce Blvd");
    logger.info('The Address1 value "11 Commerce Blvd" has been successfully verified in the CSC_NewparamsinurlUSnoState Page.');
});

Then('Verify the Address2 Value at CSC_NewparamsinurlUSnoState Page', async function () {
    this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const Address2 = await this.CSC_NewparamsinurlUSnoStatePage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value"45" has been successfully verified in the CSC_NewparamsinurlUSnoState Page.');
});

Then('Verify the City Value at CSC_NewparamsinurlUSnoState Page', async function () {
    this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const State = await this.CSC_NewparamsinurlUSnoStatePage.validateUserCityValue();
    expect(State).toEqual("Palm Coast");
    logger.info('The City value "Palm Coast" has been successfully verified in the CSC_NewparamsinurlUSnoState Page.');
});

Then('Verify the Postal Code Value at CSC_NewparamsinurlUSnoState Page', async function () {
    this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const postalCode = await this.CSC_NewparamsinurlUSnoStatePage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("32164");
    logger.info('The postal code value "32164" has been successfully verified in the CSC_NewparamsinurlUSnoState Page.');
});

Then('Verify the Email Address Value at CSC_NewparamsinurlUSnoState Page', async function () {
    this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const email = await this.CSC_NewparamsinurlUSnoStatePage.validateUserEmailValue();
    expect(email).toEqual("webtest6@darwin.cx");
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in the CSC_NewparamsinurlUSnoState Page.');
});


Then('Verify the Country Value at CSC_NewparamsinurlUSnoState Page', async function () {
    this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const country = await this.CSC_NewparamsinurlUSnoStatePage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoState Page.');
});

Then('Verify the User Province at CSC_NewparamsinurlUSnoState Page', async function () {
    this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    const province = await this.CSC_NewparamsinurlUSnoStatePage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  CSC_NewparamsinurlUSnoState Page.');
});

Then('Click on Pay Order link Button at CSC_NewparamsinurlUSnoState Page', async function () {
   this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    await this.CSC_NewparamsinurlUSnoStatePage.clickPlaceOrderButton();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the require alert message for State field at CSC_NewparamsinurlUSnoState Page', async function () {
   this.CSC_NewparamsinurlUSnoStatePage = await this.pomManager.getCSC_NewparamsinurlUSnoStatePage();
    let text = await this.CSC_NewparamsinurlUSnoStatePage.validateMissingStateAlert();
    expect(text).toEqual('Select a Province/State');
    logger.info('Validated "Select a Province/State" text');
});
