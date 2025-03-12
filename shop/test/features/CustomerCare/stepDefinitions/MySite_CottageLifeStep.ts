


import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { MySite_CottageLife_LANDING_URL_ENDPOINT, CottageLife_PurchasePageUrl } from '../../../../src/constants';

Given('User opens URL MySite_CottageLife', async function () {
  try {
    await this.page.goto(MySite_CottageLife_LANDING_URL_ENDPOINT, { timeout: 60000 })
    await this.page.waitForLoadState();
    logger.info(`Successfully navigated to the MySite_CottageLife: ${await this.page.url()}`);
  } catch (error: any) {
    if (error instanceof errors.TimeoutError) {
      console.error('Navigation timeout error:', error.message);
    } else {
      console.error('Page navigation error:', error.message);
    }
  }
});

// Then('Validate "Account Number Or Email Address" text', async function () {
//   this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
//   let text = await this.MySite_CottageLifePage.validateAccountNumberOrEmailAddressText();
//   expect(text).toEqual('Account Number Or Email Address');
//   logger.info(`Validation result: Expected "Account Number Or Email Address", received "${text}"`);
// })

Then('Validate "Last Name Or Postal Code" text', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  let text = await this.MySite_CottageLifePage.validateLastNameOrPostalCodeText();
  expect(text).toEqual('Last Name Or Postal Code');
  logger.info(`Validation result: Expected "Last Name Or Postal Code", received "${text}"`);
})

Then('Validate "My Cottage Life Subscription" text', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  let text = await this.MySite_CottageLifePage.validateMyCottageLifeSubscriptionText();
  expect(text).toEqual('My Cottage Life Subscription');
  logger.info(`Validation result: Expected "My Cottage Life Subscription", received "${text}"`);
})

Then('Validate "Cottage Life" text', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  let text = await this.MySite_CottageLifePage.validateCottageLifeText();
  expect(text).toEqual('Cottage Life');
  logger.info(`Validation result: Expected "Cottage Life", received "${text}"`);
})

When('Fill Account Number Or Email Address with {string}', async function (username) {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  await this.MySite_CottageLifePage.fillUsernameTF(username);
  logger.info(`Successfully Sign In with username: ${username}`);
});

When('Fill Last Name Or Postal Code with {string}', async function (password) {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  await this.MySite_CottageLifePage.fillPasswordTF(password);
  logger.info(`Successfully Sign In with username: ${password}`);
});

When('Click on "Sign In" button', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  await this.MySite_CottageLifePage.clickSignIn();
  logger.info('Clicked on "Sign In" button');
});

Then('Validate Expiry Issue to be {string}', async function (Expiry) {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  let text = await this.MySite_CottageLifePage.getExpiryIssue();
  expect(text).toContain(Expiry);
  logger.info(`Expected Expiry issue: ${Expiry}, Actual: ${text}`);
})

Then('Validate Membership Or Account Number to be {string}', async function (accountNumber) {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  let text = await this.MySite_CottageLifePage.getMembershipOrAccountNumber();
  expect(text).toContain(accountNumber);
  logger.info(`Expected Membership Or Account Number: ${accountNumber}, Actual: ${text}`);
})

Then('Validate "Customer Not Found" text', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  let text = await this.MySite_CottageLifePage.validateCustomerNotFoundText();
  expect(text).toEqual('Customer Not Found');
  logger.info(`Validation result: Expected "Customer Not Found", received "${text}"`);
})

Then('Validate "Please provide a valid Account Number" text', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  let text = await this.MySite_CottageLifePage.validatePleaseProvideAValidAccountNumberText();
  expect(text).toEqual('Please provide a valid Account Number');
  logger.info(`Validation result: Expected "Please provide a valid Account Number", received "${text}"`);
})

Then('Validate "Gift Centre" text', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  let text = await this.MySite_CottageLifePage.validateGiftCentreText();
  expect(text).toEqual('Gift Centre');
  logger.info(`Validation result: Expected "Gift Centre", received "${text}"`);
})

When('Click on "Gift Centre" item', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  await this.MySite_CottageLifePage.clickGiftCentreItem();
  logger.info('Clicked on "Gift Centre" item')
})

When('Click on "Home" item', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  await this.MySite_CottageLifePage.clickHomeItem();
  logger.info('Clicked on "Home" item')
})

When('Click on "Log Out" item', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  await this.MySite_CottageLifePage.clickLogOutItem();
  logger.info('Clicked on "Log Out" item')
})

When('Fetch the status and labels of checkboxes', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  const checkboxStatuses = await this.MySite_CottageLifePage.checkCheckboxStatusWithLabels();
  checkboxStatuses.forEach((status: string) => {
    console.log(status);  // Print each checkbox's status and label
  });
});

Then('Validate the Save button is disabled', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  // Check if the Save button is disabled
  const isDisabled = await this.MySite_CottageLifePage.isSaveButtonDisabled();
  // Assert that the button is disabled
  expect(isDisabled).toBe(true);
  logger.info('Save button is correctly disabled');
});

Then('Click on "Purchase Now" button in the pop up and validate Current Url with CottageLife_PurchasePageUrl', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  const currentUrl = await this.MySite_CottageLifePage.getCurrentPageUrl();
  expect(currentUrl).toEqual(CottageLife_PurchasePageUrl);
  logger.info(`Validated that the current URL (${currentUrl}) matches the expected URL.`);
})

When('Click on "Purchase Now" button', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  await this.MySite_CottageLifePage.clickPurchaseNowButton();
  logger.info('Clicked on "Purchase Now" button')
})

When('Click on "Cancel" button in the pop up', async function () {
  this.MySite_CottageLifePage = await this.pomManager.getMySite_CottageLifePage();
  await this.MySite_CottageLifePage.clickCancelButtonInPopup();
  logger.info('Clicked on "Cancel" button in the pop up')
})
