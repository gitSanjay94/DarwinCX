
import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { MySite_BakeFromScratch_LANDING_URL_ENDPOINT, BakeFromScratch_PurchasePageUrl } from '../../../../src/constants';

Given('User opens URL MySite_BakeFromScratch', async function () {
  try {
    await this.page.goto(MySite_BakeFromScratch_LANDING_URL_ENDPOINT, { timeout: 60000 })
    await this.page.waitForLoadState();
    logger.info(`Successfully navigated to the MySite_BakeFromScratch: ${await this.page.url()}`);
  } catch (error: any) {
    if (error instanceof errors.TimeoutError) {
      console.error('Navigation timeout error:', error.message);
    } else {
      console.error('Page navigation error:', error.message);
    }
  }
});

Then('Validate "Welcome to your Bake from Scratch account." text', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.validateWelcomeToYourBakeFromScratchAccountText();
  expect(text).toEqual('Welcome to your Bake from Scratch account.');
  logger.info(`Validation result: Expected "Welcome to your Bake from Scratch account.", received "${text}"`);
})

Then('Validate "My Bake from Scratch Subscription" text', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.validateMyBakeFromScratchSubscriptionText();
  expect(text).toEqual('My Bake from Scratch Subscription');
  logger.info(`Validation result: Expected "My Bake from Scratch Subscription", received "${text}"`);
})

Then('Validate "Bake from Scratch" text', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.validateBakeFromScratchText();
  expect(text).toEqual('Bake from Scratch');
  logger.info(`Validation result: Expected "Bake from Scratch", received "${text}"`);
})

Then('Validate Status as {string}', async function (status) {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.getStatus();
  expect(text).toContain(status);
  logger.info(`Expected status: ${status}, Actual status: ${text}`);
})

Then('Validate Expiration Issue to be {string}', async function (expirationIssue) {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.getExpirationIssue();
  expect(text).toContain(expirationIssue);
  logger.info(`Expected expiration issue: ${expirationIssue}, Actual: ${text}`);
})

Then('Validate Account ID to be {string}', async function (accountID) {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.getAccountID();
  expect(text).toContain(accountID);
  logger.info(`Expected Account ID: ${accountID}, Actual Account ID: ${text}`);
})

Then('Validate Full Name as {string} in My Details section', async function (fullName) {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.getFullName();
  expect(text).toContain(fullName);
  logger.info(`Expected Full Name: ${fullName}, Actual Full Name: ${text}`);
})

Then('Validate Email as {string} in My Details section', async function (email) {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.getEmail();
  expect(text).toContain(email);
  logger.info(`Expected Email: ${email}, Actual Email: ${text}`);
})

When('Click on item "Victoria"', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  await this.MySite_BakeFromScratchPage.clickItemVictoria();
  logger.info('Clicked on the item "Victoria".');
})

Then('Validate "My Details" text', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.validateMyDetailsText();
  expect(text).toEqual('My Details');
  logger.info(`Validation result: Expected "My Details", received "${text}"`);
})

Then('Validate "My Victoria Subscription" text', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.validateMyVictoriaSubscriptionText();
  expect(text).toEqual('My Victoria Subscription');
  logger.info(`Validation result: Expected "My Victoria Subscription", received "${text}"`);
})

When('Click "Sign In" button', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  await this.MySite_BakeFromScratchPage.clickSignInButton();
  logger.info('Clicked on the Sign In button');
})

When('Click on "Sign Up"', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  await this.MySite_BakeFromScratchPage.clickSignUp();
  logger.info('Clicked on "Sign Up"');
})

Then('Validate "Need an account? Sign Up" text', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.validateNeedAnAccountText();
  expect(text).toEqual('Need an account? Sign Up');
  logger.info(`Validation result: Expected "Need an account? Sign Up", received "${text}"`);
})

Then('Validate "Sign up and create a new account" text', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.validateSignUpAndCreateANewAccountText();
  expect(text).toEqual('Sign up and create a new account');
  logger.info(`Validation result: Expected "Sign up and create a new account", received "${text}"`);
})

When('Fill Retype Email text field with {string}', async function (email) {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  await this.MySite_BakeFromScratchPage.fillRetypeEmailTF(email);
  logger.info(`Filled Retype Email text field with: ${email}`);
})

When('Click on "Sign Up" button', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  await this.MySite_BakeFromScratchPage.clickSignUpButton();
  logger.info('Clicked on "Sign Up" button');
})

Then('Validate "An account with the given email already exists." text', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.validateAnAccountWithTheGivenEmailAlreadyExistsText();
  expect(text).toEqual('An account with the given email already exists.');
  logger.info(`Validation result: Expected "An account with the given email already exists.", received "${text}"`);
})

When('Fill Email and Password to Sign Up', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  await this.MySite_BakeFromScratchPage.fillEmailAndPassword();
  logger.info('Email and Password have been filled for the Sign Up process.');
})

Then('Validate "Thank you for signing up to manage your subscriptions" text', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  let text = await this.MySite_BakeFromScratchPage.validateThankYouForSigningUpToManageYourSubscriptionText();
  expect(text).toEqual('Thank you for signing up to manage your subscription(s).');
  logger.info(`Validation result: Expected "Thank you for signing up to manage your subscription(s).", received "${text}"`);
})

Then('Click on "Purchase Now" button and validate Current Url with BakeFromScratch_PurchasePageUrl', async function () {
  this.MySite_BakeFromScratchPage = await this.pomManager.getMySite_BakeFromScratchPage();
  const currentUrl = await this.MySite_BakeFromScratchPage.getCurrentPageUrl();
  expect(currentUrl).toEqual(BakeFromScratch_PurchasePageUrl);
  logger.info(`Validated that the current URL (${currentUrl}) matches the expected URL.`);
})