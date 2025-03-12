
import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { MySite_v2PageUrl } from '../../../../src/constants';

Given('User opens URL MySite_v2', async function () {
  try {
    await this.page.goto(MySite_v2PageUrl, { timeout: 60000 })
    await this.page.waitForLoadState();
    logger.info(`Successfully navigated to the MySite_v2: ${await this.page.url()}`);
  } catch (error: any) {
    if (error instanceof errors.TimeoutError) {
      console.error('Navigation timeout error:', error.message);
    } else {
      console.error('Page navigation error:', error.message);
    }
  }
});

Then('Validate "Account Number Or Email Address" text', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  let text = await this.MySite_v2Page.validateSignInText();
  expect(text).toEqual('Account Number Or Email Address');
  logger.info(`Validation result: Expected "Account Number Or Email Address", received "${text}"`);
})





Then('Validate Subscription Status as {string}', async function (status) {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  let text = await this.MySite_v2Page.getStatus();
  expect(text).toContain(status);
  logger.info(`Expected status: ${status}, Actual status: ${text}`);
})

When('Click on Courage CX Magazine Tab', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickCXMagazineTab();
  logger.info('Clicked on "Courage CXMagazineTab"');
})

When('Fill Accounts Number Or Email Address with {string}', async function (username) {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.fillUsernameTF(username);
  logger.info(`Successfully Sign In with username: ${username}`);
});
When('Fill Last Name Or Postal Codes with {string}', async function (password) {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.fillPasswordTF(password);
  logger.info(`Successfully Sign In with username: ${password}`);
});

When('Clicks on "Sign In" button', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickSignIn();
  logger.info('Clicked on "Sign In" button');
});

When('Validate alert message', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  let text = await this.MySite_v2Page.validateAlertMsg();
  expect(text).toEqual('Customer Not Found');
  logger.info('Clicked on "Sign In" button');
});


Then('Clicks on "LogOut" button', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickLogOut();
  logger.info('Clicked on "Logout" button');
});

Then('Validate Account Details text', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  let text = await this.MySite_v2Page.validateMyAccountDetailsText();
  expect(text).toEqual('Account Status');
  logger.info(`Validation result: Expected "My Account Details", received "${text}"`);
})

Then('Validate AccountID to be {string}', async function (accountID) {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  let text = await this.MySite_v2Page.validateAccountID();
  expect(text).toEqual(accountID);  // Compare with the accountID from the feature file
  logger.info(`Validation result: Expected "AccountID", received "${text}"`);
});

When('Click on "Edit Info" button', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickEditInfoButton();
  logger.info('Clicked on the Sign In button');
})

When('Update Customer Info', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.updateCustomerInfo();
  logger.info('Update Customer Info');
})

When('Click on "Cancel" button', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.cancelUpdateInfo();
  logger.info('Cancel Customer Info');
})

When('Click on "Contact Customer Service" link', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickContactCustomerServiceButton();
  logger.info('Clicked on Contact Customer Service');
})

When('Fill the Customer Service Data', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.fillContactCustomerService();
  logger.info('Filled the Customer Service Data');
})

Then ('Click on Renew Now button', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickRenewNowButton();
  logger.info('Clicked on Renew Now Button');
})

Then ('Click on Pay Bill button', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickPayNowButton();
  logger.info('Clicked on Pay Bill Button');
})

Then ('Click on Bill Me Later Option', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickBillMeLater();
  logger.info('Clicked on Renew Now Button');
})

Then('Fill the Payment Details {string} and {string} and {string}', async function (cardnumb, cardexp, cvc) {
  // Get the MySite_v2Page object from the Page Object Model (POM)
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  
  // Call the method to fill payment details
  await this.MySite_v2Page.fillPaymentDetails(cardnumb, cardexp, cvc);
  
  // Log the action for debugging purposes
  logger.info('Payment details filled successfully');
});


Then ('Click on Place Order button for Pay Bill', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickPlaceOrderButton();
  logger.info('Clicked on Renew Now Button');
})


Then('Validate Account Status text', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  let text = await this.MySite_v2Page.validateAccountStatusText();
  expect(text).toEqual('Account Status');
  logger.info(`Validation result: Expected "Account Status", received "${text}"`);
})

Then('Validate Subscription Preferences text', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  let text = await this.MySite_v2Page.validateSubscriptionPreferencesText();
  expect(text).toEqual('Subscription Preferences');
  logger.info(`Validation result: Expected "Subscription Preferences", received "${text}"`);
})

When('Click on Submit button under Subscription Preferences section', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickSubmitButton();
  logger.info('Clicked on Submit button under Subscription Preferences section');
})

Then('Validate Subscription Record Updated text', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  let text = await this.MySite_v2Page.validateSubscriptionRecordUpdatedText();
  expect(text).toEqual('Subscription Record Updated!');
  logger.info(`Validation result: Expected "Subscription Record Updated!", received "${text}"`);
})

When('Fill Subscription Preferences section', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.fillSubscriptionPreferencesSection();
  logger.info('Filled Subscription Preferences section');
})

When('Count tiles on the page', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  this.tileCount = await this.MySite_v2Page.countTileElements();
  console.log(`Tile count is: ${this.tileCount}`);
})

Then('The tile count should be {int}', async function (expectedCount: number) {
  // Assert that the counted tiles equal the expected count.
  expect(this.tileCount).toBe(expectedCount);
});

Then('Click all the tiles simultaneously', async function () {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.clickAllTilesSimultaneously();
  logger.info('Clicked all the tiles simultaneously');
});


Then('Validate Auto Renew Info text', async function(){
this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
 let text = await this.MySite_v2Page.validateAutoRenewInfoText();
 expect(text).toEqual('Auto Renew Info');
   logger.info(`Validation result: Expected "Auto Renew Info", received "${text}"`);
})

When('Click Edit Billing Info button', async function(){
this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
await this.MySite_v2Page.clickEditBillingInfoButton();
logger.info('Clicked Edit Billing Info button');
})

Then('Validate Edit My Billing Info text', async function(){
 this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
let text = await this.MySite_v2Page.validateEditMyBillingInfoText();
expect(text).toEqual('Edit My Billing Info');
logger.info(`Validation result: Expected "Edit My Billing Info", received "${text}"`);
})

When('Click Update button under Edit My Billing Info pop up', async function(){
this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
await this.MySite_v2Page.clickUpdateButton();
logger.info('Clicked Update button under Edit My Billing Info pop up')
})

Then('Validate Your card number is incomplete text', async function(){
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  let text = await this.MySite_v2Page.validateYourCardNumberIsIncompleteText();
  expect(text).toEqual('Your card number is incomplete.');
  logger.info(`Validation result: Expected "Your card number is incomplete.", received "${text}"`);
})

When('Enter credit card details {string} and {string} and {string}', async function(card, date, cvv){
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
   await this.MySite_v2Page.enterCreditCardDetails(card, date, cvv);
  logger.info(`Entering credit card details: Credit Card Number - ${card}, Expiry Date - ${date}, CVV - ${cvv}`);

})

When('Update Address in Edit My Billing Info pop up', async function(){
  await this.MySite_v2Page.updateAddress();
  logger.info('Updated Address in Edit My Billing Info pop up');
})

Then('Fill the Credit Card Details {string} and {string} and {string}', async function (creditcard, expirydate, cvv) {
  this.MySite_v2Page = await this.pomManager.getMySite_v2Page();
  await this.MySite_v2Page.enterCreditCardDetails(creditcard, expirydate, cvv);
  logger.info('Credit Card details filled successfully');
});








