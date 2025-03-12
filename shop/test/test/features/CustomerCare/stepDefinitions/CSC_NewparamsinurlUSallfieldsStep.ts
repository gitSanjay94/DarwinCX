import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_NewparamsinurlUSallfields_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New params in url - US all fields Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_NewparamsinurlUSallfields_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the First Name Value at URL CSC_NewparamsinurlUSallfields Page', async function () {
    this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const firstName = await this.CSC_NewparamsinurlUSallfieldsPage.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the CSC_NewparamsinurlUSallfields Page.');
});

Then('Verify the Last Name Value at URL CSC_NewparamsinurlUSallfields Page', async function () {
   this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const lastName = await this.CSC_NewparamsinurlUSallfieldsPage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The Last Name value "kok" has been successfully verified in the CSC_NewparamsinurlUSallfields Page.');
});

Then('Verify the Blank Comapnay Name Value at URL CSC_NewparamsinurlUSallfields Page', async function () {
 this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const companyName = await this.CSC_NewparamsinurlUSallfieldsPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSallfields Page.');
});
Then('Verify the Blank Job Title Value at URL CSC_NewparamsinurlUSallfields Page', async function () {
 this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const jobTitle = await this.CSC_NewparamsinurlUSallfieldsPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSallfields Page.');
});

Then('Verify the Address1 Value at URL CSC_NewparamsinurlUSallfields Page', async function () {
 this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const Address1 = await this.CSC_NewparamsinurlUSallfieldsPage.validateUserAddress1Value();
    expect(Address1).toEqual("11 Commerce Blvd");
    logger.info('The Address1 value "11 Commerce Blvd" has been successfully verified in the CSC_NewparamsinurlUSallfields Page.');
});

Then('Verify the Address2 Value at URL CSC_NewparamsinurlUSallfields Page', async function () {
 this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const Address2 = await this.CSC_NewparamsinurlUSallfieldsPage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value"45" has been successfully verified in the CSC_NewparamsinurlUSallfields Page.');
});

Then('Verify the City Value at URL CSC_NewparamsinurlUSallfields Page', async function () {
  this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const City = await this.CSC_NewparamsinurlUSallfieldsPage.validateUserCityValue();
    expect(City).toEqual("Palm Coast");
    logger.info('The City value "Palm Coast" has been successfully verified in the CSC_NewparamsinurlUSallfields Page.');
});

Then('Verify the Postal Code Value at URL CSC_NewparamsinurlUSallfields Page', async function () {
   this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const postalCode = await this.CSC_NewparamsinurlUSallfieldsPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("32164");
    logger.info('The postal code value "32164" has been successfully verified in the CSC_NewparamsinurlUSallfields Page.');
});

Then('Verify the Email Address Value at URL CSC_NewparamsinurlUSallfields Page', async function () {
   this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const email = await this.CSC_NewparamsinurlUSallfieldsPage.validateUserEmailValue();
    expect(email).toEqual("webtest6@darwin.cx");
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in the CSC_NewparamsinurlUSallfields Page.');
});


Then('Verify the Country Value at URL CSC_NewparamsinurlUSallfields Page', async function () {
    this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const country = await this.CSC_NewparamsinurlUSallfieldsPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "United States" has been successfully verified in the CSC_NewparamsinurlUSallfields Page.');
});

Then('Verify the User Province at URL CSC_NewparamsinurlUSallfields Page', async function () {
    this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    const province = await this.CSC_NewparamsinurlUSallfieldsPage.validateUserProvinceValue();
    expect(province).toEqual("Florida");
    logger.info('The province value "Florida" has been successfully verified in the  CSC_NewparamsinurlUSallfields Page.');
});

Then('Unselect the Country Value from Country Drop down at URL A2PopulatedOrderwithPayment Page', async function () {
   this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    await this.CSC_NewparamsinurlUSallfieldsPage.unSelecttheCountryValue();
    logger.info('Unselected the country value from country drop down');
});

Then('Fill the Payment Details', async function () {
  this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    await this.CSC_NewparamsinurlUSallfieldsPage.fillCorrectPaymentDetails();
    logger.info('Filled the credit card details');
});



Then('Click on Pay Order link Button at URL CSC_NewparamsinurlUSallfields Page', async function () {
   this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    await this.CSC_NewparamsinurlUSallfieldsPage.clickPlaceOrderButton();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the alert message for product unavailable in Canada country at URL CSC_NewparamsinurlUSallfields Page', async function () {
  this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    let text = await this.CSC_NewparamsinurlUSallfieldsPage.validateProductUnavailableText();
    expect(text).toEqual('Product is unavailable in selected country');
    logger.info('Validated "Product is unavailable in selected country" text');
});

Then('Select the Canada Country Available Subscription Option at CSC_NewparamsinurlUSallfields Page', async function () {
  this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    await this.CSC_NewparamsinurlUSallfieldsPage.selectCountrySpecificSubscription();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the Successful Transaction Message for CSC_NewparamsinurlUSallfields Page', async function () {
   this.CSC_NewparamsinurlUSallfieldsPage = await this.pomManager.getCSC_NewparamsinurlUSallfieldsPage();
    let text = await this.CSC_NewparamsinurlUSallfieldsPage.validateTransactionSuccessfulMsg();
    expect(text).toEqual('TRANSACTION SUCCESSFUL');
    logger.info('Validated "TRANSACTION SUCCESSFUL" Message');
});

