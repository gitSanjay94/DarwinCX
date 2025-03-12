import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_NewparamsinurlUSnoLastNamePage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens CSC_NewparamsinurlUSnoLastName Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_NewparamsinurlUSnoLastNamePage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the First Name Value at CSC_NewparamsinurlUSnoLastName Page', async function () {
    this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const firstName = await this.CSC_NewparamsinurlUSnoLastNamePage.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page');
});

Then('Verify the Blank Last Name Value at CSC_NewparamsinurlUSnoLastName Page', async function () {
     this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const lastName = await this.CSC_NewparamsinurlUSnoLastNamePage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Blank Last Name value "" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page.');
});

Then('Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoLastName Page', async function () {
    this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const companyName = await this.CSC_NewparamsinurlUSnoLastNamePage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page.');
});
Then('Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoLastName Page', async function () {
    this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const jobTitle = await this.CSC_NewparamsinurlUSnoLastNamePage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page.');
});

Then('Verify the Address1 Value at CSC_NewparamsinurlUSnoLastName Page', async function () {
    this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const Address1 = await this.CSC_NewparamsinurlUSnoLastNamePage.validateUserAddress1Value();
    expect(Address1).toEqual("11 Commerce Blvd");
    logger.info('The Address1 value "11 Commerce Blvd" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page.');
});

Then('Verify the Address2 Value at CSC_NewparamsinurlUSnoLastName Page', async function () {
    this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const Address2 = await this.CSC_NewparamsinurlUSnoLastNamePage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value"45" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page.');
});

Then('Verify the City Value at CSC_NewparamsinurlUSnoLastName Page', async function () {
    this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const City = await this.CSC_NewparamsinurlUSnoLastNamePage.validateUserCityValue();
    expect(City).toEqual("Palm Coast");
    logger.info('The City value "Palm Coast" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page.');
});

Then('Verify the Postal Code Value at CSC_NewparamsinurlUSnoLastName Page', async function () {
    this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const postalCode = await this.CSC_NewparamsinurlUSnoLastNamePage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("32164");
    logger.info('The postal code value "32164" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page.');
});

Then('Verify the Email Address Value at CSC_NewparamsinurlUSnoLastName Page', async function () {
    this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const email = await this.CSC_NewparamsinurlUSnoLastNamePage.validateUserEmailValue();
    expect(email).toEqual("webtest6@darwin.cx");
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page.');
});


Then('Verify the Country Value at CSC_NewparamsinurlUSnoLastName Page', async function () {
    this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const country = await this.CSC_NewparamsinurlUSnoLastNamePage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page.');
});

Then('Verify the User Province at CSC_NewparamsinurlUSnoLastName Page', async function () {
    this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    const province = await this.CSC_NewparamsinurlUSnoLastNamePage.validateUserProvinceValue();
    expect(province).toEqual("Florida");
    logger.info('The province value "Florida" has been successfully verified in the  CSC_NewparamsinurlUSnoLastName Page.');
});

Then('Click on Pay Order link Button at CSC_NewparamsinurlUSnoLastName Page', async function () {
  this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    await this.CSC_NewparamsinurlUSnoLastNamePage.clickPlaceOrderButton();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the require alert message for Address1 field at CSC_NewparamsinurlUSnoLastName Page', async function () {
  this.CSC_NewparamsinurlUSnoLastNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoLastNamePage();
    let text = await this.CSC_NewparamsinurlUSnoLastNamePage.validateMissingLastNameAlert();
    expect(text).toEqual('Last Name is missing');
    logger.info('Validated "Last Name is missing" text');
});

