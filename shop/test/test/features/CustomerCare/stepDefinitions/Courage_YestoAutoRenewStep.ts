import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CourageYestoAutoRenewPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL CourageYestoAutoRenewPage', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CourageYestoAutoRenewPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the Blank First Name Value at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const firstName = await this.CourageYestoAutoRenewPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Last Name Value at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const lastName = await this.CourageYestoAutoRenewPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Comapnay Name Value at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const companyName = await this.CourageYestoAutoRenewPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});
Then('Verify the Blank Job Title Value at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const jobTitle = await this.CourageYestoAutoRenewPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Address1 Value at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const Address1 = await this.CourageYestoAutoRenewPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Address2 Value at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const Address2 = await this.CourageYestoAutoRenewPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const City = await this.CourageYestoAutoRenewPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const postalCode = await this.CourageYestoAutoRenewPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Email Address Value at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const email = await this.CourageYestoAutoRenewPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});
Then('Verify the Autorenew option is enabled at CourageYestoAutorenew page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const isChecked  = await this.CourageYestoAutoRenewPage.clickAutorenewCheckbox();
    expect(isChecked).toBe(true);
    logger.info('Validated that Autorenew Chckobox is enabled at CSC_NewparamsinurlUSYesinfodisplayed Page')
});
Then('Verify the Country Value at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const country = await this.CourageYestoAutoRenewPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Select  User Province at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();
    const province = await this.CourageYestoAutoRenewPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Enter values in Mailing and Billing Address form at CourageYestoAutoRenew Page', async function () {
    this.CourageYestoAutoRenewPage = await this.pomManager.getCourageYestoAutoRenewPage();


    await this.CourageYestoAutoRenewPage.fillMailingAndBillingAddress();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});



