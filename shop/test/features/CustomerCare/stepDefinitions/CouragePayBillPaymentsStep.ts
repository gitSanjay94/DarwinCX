import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMPE_RenewalPage, FSMPE_PayBill } from '../../../../src/constants';

Given('User opens CouragePayBillPaymentsPage PayBill', async function () {
    try {
        await this.page.goto(FSMPE_PayBill, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the CouragePayBillPaymentsPage PayBill Page : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Given('User opens CouragePayBillPaymentsPage Renewal', async function () {
    try {
        await this.page.goto(FSMPE_RenewalPage, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the CouragePayBillPaymentsPage Renewal Page : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Enter your account number to pay outstanding invoice" text in CouragePayBillPaymentsPage', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    let text = await this.CouragePayBillPaymentsPage.validateEnterYourAccountNumberToPayOutstandingInvoiceText();
    expect(text).toEqual('Enter your account number to pay outstanding invoice');
    logger.info(`Validation result: Expected "Enter your account number to pay outstanding invoice", received "${text}"`);
})

When('Fill Purchaser field with {string} in CouragePayBillPaymentsPage Pay Bill', async function (purchaser) {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    await this.CouragePayBillPaymentsPage.fillPurchaser(purchaser);
    logger.info(`Successfully filled the Purchaser field with value: ${purchaser}`);
})

When('Click "Here" link in CouragePayBillPaymentsPage Pay Bill', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    await this.CouragePayBillPaymentsPage.clickHereLink();
    logger.info('Clicked on "Here" link in Pay Bill')
})

When('Click "Submit" button in CouragePayBillPaymentsPage Pay Bill', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    await this.CouragePayBillPaymentsPage.clickSubmitButton();
    logger.info('Submit button clicked successfully on the Pay Bill page');
})

When('Fill Last Name field with {string} in CouragePayBillPaymentsPage Pay Bill', async function (lastName) {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    await this.CouragePayBillPaymentsPage.fillLastName(lastName);
    logger.info(`Successfully filled the Last Name field with value: ${lastName}`);
})

When('Click on "Pay Bill" button in CouragePayBillPaymentsPage', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    await this.CouragePayBillPaymentsPage.clickPayBillButton();
    logger.info('Click on "Pay Bill" button')
})

Then('Validate "Thank you for paying your outstanding bill" text in CouragePayBillPaymentsPage', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    let text = await this.CouragePayBillPaymentsPage.validateThankYouForPayingYourOutstandingBillText();
    expect(text).toContain('Thank you for paying your outstanding bill!');
    logger.info(`Validation result: Expected "Thank you for paying your outstanding bill!", received "${text}"`);
})

Then('Validate "Enter your account number to renew" text in CouragePayBillPaymentsPage', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    let text = await this.CouragePayBillPaymentsPage.validateEnterYourAccountNumberToRenewText();
    expect(text).toEqual('Enter your account number to renew');
    logger.info(`Validation result: Expected "Enter your account number to renew", received "${text}"`);
})

When('Fill Postal Code field with {string} in CouragePayBillPaymentsPage Pay Bill', async function (postalCode) {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    await this.CouragePayBillPaymentsPage.fillPostalCode(postalCode);
    logger.info(`Successfully filled the Postal Code field with value: ${postalCode}`);
})

When('Click on "Here" link in CouragePayBillPaymentsPage', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    await this.CouragePayBillPaymentsPage.clickHereLink();
    logger.info('Successfully clicked on the "Here" link.');
})

When('Click on "Submit" button in CouragePayBillPaymentsPage', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    await this.CouragePayBillPaymentsPage.clickSubmitButton();
    logger.info('Successfully clicked on the "Submit" button.');
})

Then('Validate "We found your account! Please scroll down and make your selection" text in CouragePayBillPaymentsPage', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    let text = await this.CouragePayBillPaymentsPage.validateWeFoundYourAccountText();
    expect(text).toContain('We found your account! Please scroll down and make your selection');
    logger.info(`Validation result: Expected "We found your account! Please scroll down and make your selection", received "${text}"`);
})

When('Check "Available Renewals" check box in CouragePayBillPaymentsPage', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    await this.CouragePayBillPaymentsPage.checkAvailableRenewalsCB();
    logger.info('Checked "Available Renewals" check box');
})

When('Click on "Renew" button in CouragePayBillPaymentsPage', async function () {
    this.CouragePayBillPaymentsPage = await this.pomManager.getCouragePayBillPaymentsPage();
    await this.CouragePayBillPaymentsPage.clickRenewButton();
    logger.info('Clicked on "Renew" button');
})