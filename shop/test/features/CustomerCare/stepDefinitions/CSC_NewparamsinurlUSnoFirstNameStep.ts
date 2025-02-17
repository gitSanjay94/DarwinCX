import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_NewparamsinurlUSnoFirstNamePage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens CSC_NewparamsinurlUSnoFirstName Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_NewparamsinurlUSnoFirstNamePage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the Blank First Name Value at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const firstName = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name value "jonathan" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Last Name Value at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const lastName = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The Last Name value "kok" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const companyName = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});
Then('Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const jobTitle = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Address1 Value at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const Address1 = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateUserAddress1Value();
    expect(Address1).toEqual("11 Commerce Blvd");
    logger.info('The Address1 value "11 Commerce Blvd" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Address2 Value at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const Address2 = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value"45" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the City Value at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const City = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateUserCityValue();
    expect(City).toEqual("Palm Coast");
    logger.info('The City value "Toronto" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Postal Code Value at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const postalCode = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("32164");
    logger.info('The postal code value "32164" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Email Address Value at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const email = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateUserEmailValue();
    expect(email).toEqual("webtest6@darwin.cx");
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});


Then('Verify the Country Value at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const country = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "Canada" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the User Province at CSC_NewparamsinurlUSnoFirstName Page', async function () {
    this.CSC_NewparamsinurlUSnoFirstNamePage = await this.pomManager.getCSC_NewparamsinurlUSnoFirstNamePage();
    const province = await this.CSC_NewparamsinurlUSnoFirstNamePage.validateUserProvinceValue();
    expect(province).toEqual("Florida");
    logger.info('The province value "Ontario" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

