import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { Upsells_ViewWithUpsellPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL Upsells_ViewNoUpsellPage', async function () {
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

Then('Select Bundle Option', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    await this.Upsells_ViewNoUpsellPage.selectBundleOption();
    logger.info('The Bundle option selected at the Upsells_ViewNoUpsell Page.');
});


Then('Verify the Blank First Name Value at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const firstName = await this.Upsells_ViewNoUpsellPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the Upsells_ViewNoUpsell Page.');
});

Then('Verify the Blank Last Name Value at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const lastName = await this.Upsells_ViewNoUpsellPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the Upsells_ViewNoUpsell Page.');
});

Then('Verify the Blank Comapnay Name Value at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const companyName = await this.Upsells_ViewNoUpsellPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the Upsells_ViewNoUpsell Page.');
});
Then('Verify the Blank Job Title Value at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const jobTitle = await this.Upsells_ViewNoUpsellPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the Upsells_ViewNoUpsell Page.');
});

Then('Verify the Blank Address1 Value at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const Address1 = await this.Upsells_ViewNoUpsellPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the Upsells_ViewNoUpsell Page.');
});

Then('Verify the Blank Address2 Value at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const Address2 = await this.Upsells_ViewNoUpsellPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const City = await this.Upsells_ViewNoUpsellPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const postalCode = await this.Upsells_ViewNoUpsellPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the Upsells_ViewNoUpsell Page.');
});

Then('Verify the Blank Email Address Value at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const email = await this.Upsells_ViewNoUpsellPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the Upsells_ViewNoUpsell Page.');
});
Then('Verify the Autorenew option is enabled at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const isChecked  = await this.Upsells_ViewNoUpsellPage.clickAutorenewCheckbox();
    expect(isChecked).toBe(true);
    logger.info('Validated that Autorenew Chckobox is enabled at Upsells_ViewNoUpsell Page')
});


Then('Click on Select Button in Upsell Popup at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    await this.Upsells_ViewNoUpsellPage.clickSelectButton();
   
    logger.info('Validated that No Thanks button is Selected')
});
Then('Verify the Country Value at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const country = await this.Upsells_ViewNoUpsellPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the Upsells_ViewNoUpsell Page.');
});

Then('Verify the Select  User Province at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    const province = await this.Upsells_ViewNoUpsellPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Enter values in Mailing and Billing Address form at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    await this.Upsells_ViewNoUpsellPage.fillMailingAndBillingAddress();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});


Then('Enter values in Different Mailing and Billing Address form at Upsells_ViewNoUpsell Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
    await this.Upsells_ViewNoUpsellPage.fillMailingAddress();
    logger.info('Different Mailing and Billing Address form has been successfully filled in.');
});
Then('Validate the USD Total Amount in Summary', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
  
  // Ensure that this.Courage_CAOrderPage is correctly initialized
  const summaryUSDTxt = await this.Upsells_ViewNoUpsellPage.validateCartSummaryUSDTxtValue();

  // Debugging: Log the actual value received
  console.log(`Received USD Txt Value: ${summaryUSDTxt}`);

  // Perform the assertion
  expect(summaryUSDTxt).toEqual('TotalUSD$10.00Upgrades Available');
  logger.info('The text "USD$10.00" has been successfully validated');
   });


Then('Validate the Total Amount in Successful Transaction Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
  
  // Ensure that this.Courage_CAOrderPage is correctly initialized
  const transactionSuccessfultUSDTxt = await this.Upsells_ViewNoUpsellPage.validatetotalPriceatSuccessfulTransactionPage();

    // Perform the assertion
  expect(transactionSuccessfultUSDTxt).toEqual('$10.70');
  logger.info('The text "$10.60" has been successfully validated');
   });

Then('Validate the Total Amount for Different Mailing Address in Successful Transaction Page', async function () {
    this.Upsells_ViewNoUpsellPage = await this.pomManager.getUpsells_ViewNoUpsellPage();
  
  // Ensure that this.Courage_CAOrderPage is correctly initialized
  const transactionSuccessfultUSDTxtDfMA = await this.Upsells_ViewNoUpsellPage.validatetotalPriceatDfMASuccessfulTransactionPage();

    // Perform the assertion
  expect(transactionSuccessfultUSDTxtDfMA).toEqual('$10.83');
  logger.info('The text "$10.83" has been successfully validated');
   });
