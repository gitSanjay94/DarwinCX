import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC2_CourageYestoAutoRenewPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL CSC2_CourageYestoAutoRenewPage', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC2_CourageYestoAutoRenewPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the Blank First Name Value at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const firstName = await this.CSC2_CourageYestoAutoRenewPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Last Name Value at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const lastName = await this.CSC2_CourageYestoAutoRenewPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Comapnay Name Value at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const companyName = await this.CSC2_CourageYestoAutoRenewPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});
Then('Verify the Blank Job Title Value at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const jobTitle = await this.CSC2_CourageYestoAutoRenewPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Address1 Value at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const Address1 = await this.CSC2_CourageYestoAutoRenewPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Address2 Value at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const Address2 = await this.CSC2_CourageYestoAutoRenewPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const City = await this.CSC2_CourageYestoAutoRenewPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const postalCode = await this.CSC2_CourageYestoAutoRenewPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Email Address Value at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const email = await this.CSC2_CourageYestoAutoRenewPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});
Then('Verify the Autorenew option is enabled', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const isChecked  = await this.CSC2_CourageYestoAutoRenewPage.clickAutorenewCheckbox();
    expect(isChecked).toBe(true);
    logger.info('Validated that Autorenew Chckobox is enabled at CSC_NewparamsinurlUSYesinfodisplayed Page')
});
Then('Verify the Country Value at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const country = await this.CSC2_CourageYestoAutoRenewPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the CSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Select  User Province at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();
    const province = await this.CSC2_CourageYestoAutoRenewPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Enter values in Mailing and Billing Address form at CSC2_CourageYestoAutoRenewPage Page', async function () {
    this.CSC2_CourageYestoAutoRenewPage = await this.pomManager.getCSC2_CourageYestoAutoRenewPage();


    await this.CSC2_CourageYestoAutoRenewPage.fillMailingAndBillingAddress();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});



