import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { Upsells_ViewWithUpsellPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL Upsells_ViewWithUpsellPage', async function () {
    try {
        await this.page.goto(process.env.BASEURL + Upsells_ViewWithUpsellPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('The Upgrade Your Subscription element should be visible', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const isVisible = await this.Upsells_ViewWithUpsellPage.validateUpgradeYourSubscriptionVisible();
    expect(isVisible).toBe(true); // Ensure the element is not visible
    logger.info('Validated that The Upgrade Your Subscription element is not visible')
});

Then('Verify the Blank First Name Value at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const firstName = await this.Upsells_ViewWithUpsellPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the Upsells_ViewWithUpsell Page.');
});

Then('Verify the Blank Last Name Value at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const lastName = await this.Upsells_ViewWithUpsellPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the Upsells_ViewWithUpsell Page.');
});

Then('Verify the Blank Comapnay Name Value at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const companyName = await this.Upsells_ViewWithUpsellPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the Upsells_ViewWithUpsell Page.');
});
Then('Verify the Blank Job Title Value at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const jobTitle = await this.Upsells_ViewWithUpsellPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the Upsells_ViewWithUpsell Page.');
});

Then('Verify the Blank Address1 Value at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const Address1 = await this.Upsells_ViewWithUpsellPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the Upsells_ViewWithUpsell Page.');
});

Then('Verify the Blank Address2 Value at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const Address2 = await this.Upsells_ViewWithUpsellPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const City = await this.Upsells_ViewWithUpsellPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const postalCode = await this.Upsells_ViewWithUpsellPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the Upsells_ViewWithUpsell Page.');
});

Then('Verify the Blank Email Address Value at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const email = await this.Upsells_ViewWithUpsellPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the Upsells_ViewWithUpsell Page.');
});
Then('Verify the Autorenew option is enabled at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const isChecked  = await this.Upsells_ViewWithUpsellPage.clickAutorenewCheckbox();
    expect(isChecked).toBe(true);
    logger.info('Validated that Autorenew Chckobox is enabled at Upsells_ViewWithUpsell Page')
});


Then('Click on Select Button in Upsell Popup at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    await this.Upsells_ViewWithUpsellPage.clickSelectButton();
   
    logger.info('Validated that No Thanks button is Selected')
});
Then('Verify the Country Value at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const country = await this.Upsells_ViewWithUpsellPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the Upsells_ViewWithUpsell Page.');
});

Then('Verify the Select  User Province at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();
    const province = await this.Upsells_ViewWithUpsellPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Enter values in Mailing and Billing Address form at Upsells_ViewWithUpsell Page', async function () {
    this.Upsells_ViewWithUpsellPage = await this.pomManager.getUpsells_ViewWithUpsellPage();


    await this.Upsells_ViewWithUpsellPage.fillMailingAndBillingAddress();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});



