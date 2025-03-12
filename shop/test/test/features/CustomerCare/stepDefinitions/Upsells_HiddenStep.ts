import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { Upsells_HiddenPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL Upsells_HiddenPage', async function () {
    try {
        await this.page.goto(process.env.BASEURL + Upsells_HiddenPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('The Upgrade Your Subscription element should not be visible', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const isNotVisible = await this.Upsells_HiddenPage.validateUpgradeYourSubscriptionNotVisible();
    expect(isNotVisible).toBe(true); // Ensure the element is not visible
    logger.info('Validated that The Upgrade Your Subscription element is not visible')
});

Then('Verify the Blank First Name Value at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const firstName = await this.Upsells_HiddenPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the Upsells_Hidden Page.');
});

Then('Verify the Blank Last Name Value at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const lastName = await this.Upsells_HiddenPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the Upsells_Hidden Page.');
});

Then('Verify the Blank Comapnay Name Value at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const companyName = await this.Upsells_HiddenPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the Upsells_Hidden Page.');
});
Then('Verify the Blank Job Title Value at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const jobTitle = await this.Upsells_HiddenPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the Upsells_Hidden Page.');
});

Then('Verify the Blank Address1 Value at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const Address1 = await this.Upsells_HiddenPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the Upsells_Hidden Page.');
});

Then('Verify the Blank Address2 Value at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const Address2 = await this.Upsells_HiddenPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const City = await this.Upsells_HiddenPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const postalCode = await this.Upsells_HiddenPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the Upsells_Hidden Page.');
});

Then('Verify the Blank Email Address Value at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const email = await this.Upsells_HiddenPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the Upsells_Hidden Page.');
});
Then('Verify the Autorenew option is enabled at Upsells_Hidden page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const isChecked  = await this.Upsells_HiddenPage.clickAutorenewCheckbox();
    expect(isChecked).toBe(true);
    logger.info('Validated that Autorenew Chckobox is enabled at Upsells_Hidden Page')
});

Then('Click on No Thanks Button in Upsell Popup', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    await this.Upsells_HiddenPage.clickThankYouButton();
   
    logger.info('Validated that No Thanks button is Selected')
});

Then('Click on Select Button in Upsell Popup', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    await this.Upsells_HiddenPage.clickSelectButton();
   
    logger.info('Validated that No Thanks button is Selected')
});
Then('Verify the Country Value at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const country = await this.Upsells_HiddenPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the Upsells_Hidden Page.');
});

Then('Verify the Select  User Province at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();
    const province = await this.Upsells_HiddenPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Enter values in Mailing and Billing Address form at Upsells_Hidden Page', async function () {
    this.Upsells_HiddenPage = await this.pomManager.getUpsells_HiddenPage();


    await this.Upsells_HiddenPage.fillMailingAndBillingAddress();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});



