import { expect } from '@playwright/test'
import { logger } from '../support/hook'

import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

Given('User opens CourageCAOrderWithDBTax Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the CourageCAOrderWithDBTax page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Courage Magazine Subscription Options" text for CourageCAOrderWithDBTax', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    let text = await this.CourageCAOrderWithDBTaxPage.validateCourageMagazineSubscriptionOptionsText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Courage Magazine Subscription Options');
    logger.info(`Validation result: Expected "Courage Magazine Subscription Options", received "${text}"`);
})

Then('Validate "Batch QA US 8" to be checked', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    let isChecked = await this.CourageCAOrderWithDBTaxPage.validateBatchQAUS8Option();
    expect(isChecked).toBe(true);
    logger.info('"Batch QA US 8" is successfully validated to be checked.');
});

Then('Validate "Courage US and International" text', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    let text = await this.CourageCAOrderWithDBTaxPage.validateCourageUSAndInternationalText();
    expect(text).toContain('Courage (US & International)');
    logger.info(`Validation result: Expected "Courage US and Internationals", received "${text}"`);
})

When('Click "Courage US and International" text', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    await this.CourageCAOrderWithDBTaxPage.clickCourageUSAndInternationalText();
    logger.info('Clicked "Courage US and International" text');
})

When('Check "21 Aug Test" radio button', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    await this.CourageCAOrderWithDBTaxPage.checkAugTestRB();
    logger.info('Checked "21 Aug Test" radio button');
})

Then('Validate "Batch QA US 8" to be unchecked', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    let isChecked = await this.CourageCAOrderWithDBTaxPage.validateBatchQAUS8Option();
    expect(isChecked).toBe(false);
    logger.info('"Batch QA US 8" is successfully validated to be unchecked.');
});

Then('Validate "Testing Cross Bundle" text', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    let text = await this.CourageCAOrderWithDBTaxPage.validateTestingCrossBundleText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Testing Cross Bundle');
    logger.info(`Validation result: Expected "Testing Cross Bundle", received "${text}"`);
})

When('Check "Test Offer Courage Print and Digital" check box', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    await this.CourageCAOrderWithDBTaxPage.checkTestOfferCouragePrintDigitalCB();
    logger.info('Check "Test Offer Courage  Print and Digital" check box');
})

When('Fill Mailing and Billing Address form for CourageCAOrderWithDBTax', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    await this.CourageCAOrderWithDBTaxPage.fillMailAndBillAddressForm();
    logger.info('Filled Mailing and Billing Address form for CourageCAOrderWithDBTax');
})

Then('Validate "Summary" text for CourageCAOrderWithDBTax', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    let text = await this.CourageCAOrderWithDBTaxPage.validateSummaryText();
    expect(text).toEqual('Summary');
    logger.info(`Validation result: Expected "Summary", received "${text}"`);
})

When('Fetch "1 year Test Offer 8 Issues" amount in "Summary" section for CourageCAOrderWithDBTax', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    this.yearTestOfferAmt = await this.CourageCAOrderWithDBTaxPage.yearTestOfferAmt();
    logger.info(`Successfully fetched the "1 year Test Offer 8 Issues" amount in "Summary" section: ${this.yearTestOfferAmt}`);
})

When('Fetch "3 years BridgeTower Test Product US Print and Digital 10 Issues" amount in "Summary" section for CourageCAOrderWithDBTax', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    this.augTestAmt = await this.CourageCAOrderWithDBTaxPage.augTestAmt();
    logger.info(`Successfully fetched the "3 years BridgeTower Test Product US Print and Digital 10 Issues" amount in "Summary" section: ${this.augTestAmt}`);
})

When('Fetch "Total" amount in "Summary" section for CourageCAOrderWithDBTax', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    this.totalAmtInSummarySection = await this.CourageCAOrderWithDBTaxPage.totalAmtInSummarySection();
    logger.info(`Successfully fetched the "Total" amount in "Summary" section: ${this.totalAmtInSummarySection}`);
})

When('Calculate total amount in "Summary" section for CourageCAOrderWithDBTax', async function () {
    this.totalCalculatedAmount = (this.yearTestOfferAmt + this.augTestAmt);
    console.log(this.totalCalculatedAmount);
})

Then('Validate "Total" amount in "Summary" section and "Total" calculated amount in "Summary" section for CourageCAOrderWithDBTax', async function () {
    expect(this.totalAmtInSummarySection).toEqual(this.totalCalculatedAmount)
    console.log(`"Total" amount in "Summary" section (${this.totalAmtInSummarySection}) and "Total" calculated amount in "Summary" section (${this.totalCalculatedAmount}) are equal.`);
});

When('Fetch "Total price" for CourageCAOrderWithDBTax', async function () {
    this.CourageCAOrderWithDBTaxPage = await this.pomManager.getCourageCAOrderWithDBTaxPage();
    this.totalPrice = await this.CourageCAOrderWithDBTaxPage.totalPrice();
    logger.info(`Successfully fetched the "Total price": ${this.totalPrice}`);
})

Then('Validate "Total price" and "Total" amount in "Summary" section for CourageCAOrderWithDBTax', async function () {
    expect(this.totalPrice).toEqual(this.totalAmtInSummarySection)
    console.log(`"Total price" (${this.totalPrice}) and "Total" amount in "Summary" section (${this.totalAmtInSummarySection}) are equal.`);
});