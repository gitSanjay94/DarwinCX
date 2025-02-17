

import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { MySite_Motortrend_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL MySite_Motortrend', async function () {
  try {
    await this.page.goto(MySite_Motortrend_LANDING_URL_ENDPOINT, { timeout: 60000 })
    await this.page.waitForLoadState();
    logger.info(`Successfully navigated to the MySite_Motortrend: ${await this.page.url()}`);
  } catch (error: any) {
    if (error instanceof errors.TimeoutError) {
      console.error('Navigation timeout error:', error.message);
    } else {
      console.error('Page navigation error:', error.message);
    }
  }
});

Then('Validate "Welcome to your Motortrend account." text', async function () {
  this.MySite_MotortrendPage = await this.pomManager.getMySite_MotortrendPage();
  let text = await this.MySite_MotortrendPage.validateWelcomeToYourMotortrendAccountText();
  expect(text).toEqual('Welcome to your Motortrend account.');
  logger.info(`Validation result: Expected "Welcome to your Motortrend account.", received "${text}"`);
})

Then('Validate "My Motortrend Subscription" text', async function () {
  this.MySite_MotortrendPage = await this.pomManager.getMySite_MotortrendPage();
  let text = await this.MySite_MotortrendPage.validateMyMotortrendSubscriptionText();
  expect(text).toEqual('My Motortrend Subscription');
  logger.info(`Validation result: Expected "My Motortrend Subscription", received "${text}"`);
})

Then('Validate "Motortrend" text', async function () {
  this.MySite_MotortrendPage = await this.pomManager.getMySite_MotortrendPage();
  let text = await this.MySite_MotortrendPage.validateMotortrendText();
  expect(text).toEqual('Motortrend');
  logger.info(`Validation result: Expected "Motortrend", received "${text}"`);
})