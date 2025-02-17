import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { Upsells_PopupwithUpsellPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL Upsells_PopupwithUpsellPage', async function () {
    try {
        await this.page.goto(process.env.BASEURL + Upsells_PopupwithUpsellPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('The Upgrade Your Subscription element should not be visible at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const isNotVisible = await this.Upsells_PopupwithUpsellPage.validateUpgradeYourSubscriptionNotVisible();
    expect(isNotVisible).toBe(true); // Ensure the element is not visible
    logger.info('Validated that The Upgrade Your Subscription element is not visible')
});

Then('Verify the Blank First Name Value at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const firstName = await this.Upsells_PopupwithUpsellPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the Upsells_PopupwithUpsell Page.');
});

Then('Verify the Blank Last Name Value at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const lastName = await this.Upsells_PopupwithUpsellPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the Upsells_PopupwithUpsell Page.');
});

Then('Verify the Blank Comapnay Name Value at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const companyName = await this.Upsells_PopupwithUpsellPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the Upsells_PopupwithUpsell Page.');
});
Then('Verify the Blank Job Title Value at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const jobTitle = await this.Upsells_PopupwithUpsellPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the Upsells_PopupwithUpsell Page.');
});

Then('Verify the Blank Address1 Value at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const Address1 = await this.Upsells_PopupwithUpsellPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the Upsells_PopupwithUpsell Page.');
});

Then('Verify the Blank Address2 Value at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const Address2 = await this.Upsells_PopupwithUpsellPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const City = await this.Upsells_PopupwithUpsellPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSYesinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const postalCode = await this.Upsells_PopupwithUpsellPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the Upsells_PopupwithUpsell Page.');
});

Then('Verify the Blank Email Address Value at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const email = await this.Upsells_PopupwithUpsellPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the Upsells_PopupwithUpsell Page.');
});
Then('Verify the Autorenew option is enabled at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const isChecked  = await this.Upsells_PopupwithUpsellPage.clickAutorenewCheckbox();
    expect(isChecked).toBe(true);
    logger.info('Validated that Autorenew Chckobox is enabled at Upsells_PopupwithUpsell Page')
});

Then('Click on No Thanks Button in Upsell Popup at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    await this.Upsells_PopupwithUpsellPage.clickThankYouButton();
   
    logger.info('Validated that No Thanks button is Selected')
});

Then('Click on Select Button in Upsell Popup at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    await this.Upsells_PopupwithUpsellPage.clickSelectButton();
   
    logger.info('Validated that No Thanks button is Selected')
});

Then('Click on Select Button First in Bundle Upsell Popup at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    await this.Upsells_PopupwithUpsellPage.clickSelectButtonBundleFirst();
   
    logger.info('Validated that BundleFirst Button is Selected')
});

Then('Click on Select Button second option in Bundle Upsell Popup at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    await this.Upsells_PopupwithUpsellPage.clickSelectButtonBundleSecond();
   
    logger.info('Validated that BundleFirst Button is Selected')
});
Then('Verify the Country Value at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const country = await this.Upsells_PopupwithUpsellPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the Upsells_PopupwithUpsell Page.');
});

Then('Verify the Select  User Province at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const province = await this.Upsells_PopupwithUpsellPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Enter values in Mailing and Billing Address form at Upsells_PopupwithUpsell Page', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();


    await this.Upsells_PopupwithUpsellPage.fillMailingAndBillingAddress();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

Then('Verify that the upsell popup is displayed correctly with upsell', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const popupDisplay = await this.Upsells_PopupwithUpsellPage.validateUpsellPopup();
    expect(popupDisplay).toEqual("Your Special Offers");
    logger.info('The Upsells popup has been successfully verified in the Upsells_PopupwithUpsell Page.');
});

Then('Verify that the upsell popup is not displayed', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
    const isNotVisible = await this.Upsells_PopupwithUpsellPage.validateUpgradeYourSubscriptionNotVisible();
    expect(isNotVisible).toBe(true); // Ensure the element is not visible
    logger.info('The Upsells popup has been successfully verified to not display the expected content on the Upsells_PopupwithUpsell Page.');
});

Then('Validate the USD Total Amount in Summary for Bundle option', async function () {
    this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
  
  // Ensure that this.Courage_CAOrderPage is correctly initialized
  const summaryBundleUSDTxt = await this.Upsells_PopupwithUpsellPage.validateBundleCartSummaryUSDTxtValue();

  // Debugging: Log the actual value received
  console.log(`Received USD Txt Value: ${summaryBundleUSDTxt}`);

  // Perform the assertion
  expect(summaryBundleUSDTxt).toEqual('TotalUSD$10.00');
  logger.info('The text "TotalUSD$10.00" has been successfully validated');
   });


Then('Validate the Total Amount for Bundle Second option in Successful Transaction Page', async function () {
   this.Upsells_PopupwithUpsellPage = await this.pomManager.getUpsells_PopupwithUpsellPage();
  
  // Ensure that this.Courage_CAOrderPage is correctly initialized
  const transactionSuccessfultUSDTxtDfMA = await this.Upsells_ViewNoUpsellPage.validatetotalPriceatDfMASuccessfulTransactionPage();

    // Perform the assertion
  expect(transactionSuccessfultUSDTxtDfMA).toEqual('$10.83');
  logger.info('The text "$10.83" has been successfully validated');
   });