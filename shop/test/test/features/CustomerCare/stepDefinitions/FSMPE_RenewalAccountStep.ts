import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMPE_RenewalPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens FSMPE_RenewalAccount Page', async function () {
    try {
        await this.page.goto(FSMPE_RenewalPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMPE_RenewalAccount Page : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Enter your account number to renew" text', async function () {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    let text = await this.FSMPE_RenewalAccountPage.validateEnterYourAccountNumberToRenewText();
    expect(text).toEqual('Enter your account number to renew');
    logger.info(`Validation result: Expected "Enter your account number to renew", received "${text}"`);
})

Then('Validate Purchaser value is blank', async function () {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    let text = await this.FSMPE_RenewalAccountPage.getPurchaserValue();
    expect(text).toEqual('');
    logger.info('Purchaser value validation passed: the value is blank as expected.');
})

Then('Validate Postal Code value is blank', async function () {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    let text = await this.FSMPE_RenewalAccountPage.getPostalCodeValue();
    expect(text).toEqual('');
    logger.info('Postal Code value validation passed: the value is blank as expected.');
})

When('Click on "Here" link', async function () {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    await this.FSMPE_RenewalAccountPage.clickHereLink();
    logger.info('Successfully clicked on the "Here" link.');
})

When('Click on "Submit" button', async function () {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    await this.FSMPE_RenewalAccountPage.clickSubmitButton();
    logger.info('Successfully clicked on the "Submit" button.');
})

Then('Validate Last Name value is blank', async function () {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    let text = await this.FSMPE_RenewalAccountPage.getLastNameValue();
    expect(text).toEqual('');
    logger.info('Last Name value validation passed: the value is blank as expected.');
})

When('Fill Purchaser field with {string}', async function (purchaser) {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    await this.FSMPE_RenewalAccountPage.fillPurchaser(purchaser);
    logger.info(`Successfully filled the Purchaser field with value: ${purchaser}`);
})

When('Fill Last Name field with {string}', async function (lastName) {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    await this.FSMPE_RenewalAccountPage.fillLastName(lastName);
    logger.info(`Successfully filled Last Name field with value: ${lastName}`);
})

Then('Validate "This account is not up for renewal" text', async function () {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    let text = await this.FSMPE_RenewalAccountPage.validateThisAccountIsNotUpForRenewalText();
    expect(text).toContain('This account is not up for renewal');
    logger.info(`Validation result: Expected "This account is not up for renewal", received "${text}"`);
})


Then('Validate "Input out of range" Message to contain "last_name" and {string}', async function (lastName) {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    let text = await this.FSMPE_RenewalAccountPage.validateInputOutOfRangeMsg();
    expect(text).toContain('Input out of range');
    expect(text).toContain('last_name');
    expect(text).toContain(lastName);
    logger.info(`Validated input out of range message contains: 'Input out of range', 'last_name', and '${lastName}'`);
})


When('Fill Postal Code field with {string}', async function (postalCode) {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    await this.FSMPE_RenewalAccountPage.fillPostalCode(postalCode);
    logger.info(`Successfully filled Postal Code field with value: ${postalCode}`);

})

Then('Validate "Input out of range" Message to contain "postal_code" and {string}', async function (postalCode) {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    let text = await this.FSMPE_RenewalAccountPage.validateInputOutOfRangeMsg();
    expect(text).toContain('Input out of range');
    expect(text).toContain('postal_code');
    expect(text).toContain(postalCode);
    logger.info(`Validated input out of range message contains: 'Input out of range', 'postal_code', and '${postalCode}'`);

})

Then('Validate "We found your account! Please scroll down and make your selection" text', async function () {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    let text = await this.FSMPE_RenewalAccountPage.validateWeFoundYourAccountText();
    expect(text).toContain('We found your account! Please scroll down and make your selection');
    logger.info(`Validation result: Expected "We found your account! Please scroll down and make your selection", received "${text}"`);
})

When('Click on "Renew" button', async function () {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    await this.FSMPE_RenewalAccountPage.clickRenewButton();
    logger.info('Clicked on "Renew" button');
})

When('Check "Available Renewals" check box', async function () {
    this.FSMPE_RenewalAccountPage = await this.pomManager.getFSMPE_RenewalAccountPage();
    await this.FSMPE_RenewalAccountPage.checkAvailableRenewalsCB();
    logger.info('Checked "Available Renewals" check box');
})