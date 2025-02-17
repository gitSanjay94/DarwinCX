import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMPE_PayBill_LANDING_URL_ENDPOINT, FSMPE_RenewalPage, FSMPE_PayBill,CPBP_PrepopulatedCCPayment_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens FSMPE_PayBill', async function () {
    try {
        await this.page.goto(FSMPE_PayBill_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMPE_PayBill Page : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Given('User opens FSMPE Renewal', async function () {
    try {
        await this.page.goto(FSMPE_RenewalPage, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Renewal Page : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Given('User opens FSMPE PayBill', async function () {
    try {
        await this.page.goto(FSMPE_PayBill, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the PayBill Page : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Given('User opens CPBP PrepopulatedCCPayment', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CPBP_PrepopulatedCCPayment_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the CPBP PrepopulatedCCPayment Page : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Enter your account number to pay outstanding invoice" text', async function () {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    let text = await this.FSMPE_PayBill.validateEnterYourAccountNumberToPayOutstandingInvoiceText();
    expect(text).toEqual('Enter your account number to pay outstanding invoice');
    logger.info(`Validation result: Expected "Enter your account number to pay outstanding invoice", received "${text}"`);
})

When('Click "Submit" button in Pay Bill', async function () {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    await this.FSMPE_PayBill.clickSubmitButton();
    logger.info('Submit button clicked successfully on the Pay Bill page');
})

When('Click "Here" link in Pay Bill', async function () {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    await this.FSMPE_PayBill.clickHereLink();
    logger.info('Clicked on "Here" link in Pay Bill')
})

Then('Validate Last Name value as blank in Pay Bill', async function () {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    let text = await this.FSMPE_PayBill.getLastNameValue();
    expect(text).toEqual('');
    logger.info('Last Name value validation passed: the value is blank as expected.');
})

Then('Validate Purchaser value as blank in Pay Bill', async function () {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    let text = await this.FSMPE_PayBill.getPurchaserValue();
    expect(text).toEqual('');
    logger.info('Purchaser value validation passed: the value is blank as expected.')
})

Then('Validate Postal Code value as blank in Pay Bill', async function () {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    let text = await this.FSMPE_PayBill.getPostalCodeValue();
    expect(text).toEqual('');
    logger.info('Postal Code value validation passed: the value is blank as expected.')
})

Then('Validate "There are no outstanding invoices" text', async function () {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    let text = await this.FSMPE_PayBill.validateThereAreNoOutstandingInvoicesText();
    expect(text).toContain('There are no outstanding invoices')
    logger.info(`Validation result: Expected "There are no outstanding invoices", received "${text}"`);
})

When('Fill Purchaser field with {string} in Pay Bill', async function (purchaser) {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    await this.FSMPE_PayBill.fillPurchaser(purchaser);
    logger.info(`Successfully filled the Purchaser field with value: ${purchaser}`);
})

When('Fill Last Name field with {string} in Pay Bill', async function (lastName) {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    await this.FSMPE_PayBill.fillLastName(lastName);
    logger.info(`Successfully filled the Last Name field with value: ${lastName}`);
})

When('Fill Postal Code field with {string} in Pay Bill', async function (postalCode) {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    await this.FSMPE_PayBill.fillPostalCode(postalCode);
    logger.info(`Successfully filled the Postal Code field with value: ${postalCode}`);
})

When('Click on "Pay Bill" button', async function () {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    await this.FSMPE_PayBill.clickPayBillButton();
    logger.info('Click on "Pay Bill" button')
})

Then('Validate "Thank you for paying your outstanding bill" text', async function () {
    this.FSMPE_PayBill = await this.pomManager.getFSMPE_PayBill();
    let text = await this.FSMPE_PayBill.validateThankYouForPayingYourOutstandingBillText();
    expect(text).toContain('Thank you for paying your outstanding bill!');
    logger.info(`Validation result: Expected "Thank you for paying your outstanding bill!", received "${text}"`);
})


