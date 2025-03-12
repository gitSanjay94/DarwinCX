import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_NewparamsinurlUSnoinfodisplayedPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL CSC_NewparamsinurlUSnoinfodisplayed', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_NewparamsinurlUSnoinfodisplayedPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the Blank First Name Value at CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
    this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const firstName = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Last Name Value at CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
    this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const lastName = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
    this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const companyName = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});
Then('Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
    this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const jobTitle = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Address1 Value at CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
    this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const Address1 = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Address2 Value at CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
 this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const Address2 = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
    this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const City = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
    this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const postalCode = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Email Address Value at URL CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
   this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const email = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});


Then('Verify the Country Value at CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
    this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const country = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Select  User Province at URL CSC_NewparamsinurlUSnoinfodisplayed Page', async function () {
   this.CSC_NewparamsinurlUSnoinfodisplayedPage = await this.pomManager.getCSC_NewparamsinurlUSnoinfodisplayedPage();
    const province = await this.CSC_NewparamsinurlUSnoinfodisplayedPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});



