
import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT, Hoffman_USPrintNegativeTest_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL Hoffman_USPrintNegativeTest_LANDING_URL_ENDPOINT', async function () {
    try {
        await this.page.goto(FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT + Hoffman_USPrintNegativeTest_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Hoffman_USPrintNegativeTest_LANDING_URL_ENDPOINT: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Canadian & International Offers" text', async function () {
    this.Hoffman_USPrintNegativeTestPage = await this.pomManager.getHoffman_USPrintNegativeTestPage();
    let text = await this.Hoffman_USPrintNegativeTestPage.validateCanadianAndInternationalOffersText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('▼ Canadian & International Offers');
    logger.info(`Validation result: Expected "Canadian & International Offers", received "${text}"`);
})

When('Click on "Canadian & International Offers"', async function () {
    this.Hoffman_USPrintNegativeTestPage = await this.pomManager.getHoffman_USPrintNegativeTestPage();
    await this.Hoffman_USPrintNegativeTestPage.clickCanadianAndInternationalOffers();
    logger.info('Clicked on "Canadian & International Offers"');
})

When('Check "Canada: 6 print and digital issues" radio button', async function () {
    this.Hoffman_USPrintNegativeTestPage = await this.pomManager.getHoffman_USPrintNegativeTestPage();
    await this.Hoffman_USPrintNegativeTestPage.canadaPrintAndDigitalIssuesRB();
    logger.info('Checked "Canada: 6 print and digital issues" radio button');
})

When('Check "International: 6 print and digital issues" radio button', async function () {
    this.Hoffman_USPrintNegativeTestPage = await this.pomManager.getHoffman_USPrintNegativeTestPage();
    await this.Hoffman_USPrintNegativeTestPage.internationalPrintAndDigitalIssuesRB();
    logger.info('Checked "International: 6 print and digital issues" radio button');
})

When('Fill Mailing and Billing Address form for Canada Hoffman_USPrintNegativeTest', async function () {
    this.Hoffman_USPrintNegativeTestPage = await this.pomManager.getHoffman_USPrintNegativeTestPage();
    await this.Hoffman_USPrintNegativeTestPage.fillMailingAndBillingAddressCA();
    logger.info('Filled Mailing and Billing Address form for Canada Hoffman_USPrintNegativeTest')
})

When('Fill Mailing and Billing Address form for International Hoffman_USPrintNegativeTest', async function () {
    this.Hoffman_USPrintNegativeTestPage = await this.pomManager.getHoffman_USPrintNegativeTestPage();
    await this.Hoffman_USPrintNegativeTestPage.fillMailingAndBillingAddressINT();
    logger.info('Filled Mailing and Billing Address form for Canada Hoffman_USPrintNegativeTest')
})

When('Fetch "Canada: 6 print and digital issues" amount in "Order Summary" section for Hoffman_USPrintNegativeTestPage', async function () {
    this.Hoffman_USPrintNegativeTestPage = await this.pomManager.getHoffman_USPrintNegativeTestPage();
    this.printAndDigitalIssuesAmount = await this.Hoffman_USPrintNegativeTestPage.printAndDigitalIssuesAmountCA();
    logger.info(`Successfully fetched the "Canada: 6 print and digital issues" amount in "Order Summary" section: ${this.printAndDigitalIssuesAmount}`);
})

When('Fetch "International: 6 print and digital issues" amount in "Order Summary" section for Hoffman_USPrintNegativeTestPage', async function () {
    this.Hoffman_USPrintNegativeTestPage = await this.pomManager.getHoffman_USPrintNegativeTestPage();
    this.printAndDigitalIssuesAmount = await this.Hoffman_USPrintNegativeTestPage.printAndDigitalIssuesAmountINT();
    logger.info(`Successfully fetched the "International: 6 print and digital issues" amount in "Order Summary" section: ${this.printAndDigitalIssuesAmount}`);
})

When('Calculate total amount in "Order Summary" section for Canada Hoffman_USPrintNegativeTestPage', async function () {
    this.totalCalculatedAmount = parseFloat(this.printAndDigitalIssuesAmount + this.digitalArchiveAccessAmount + this.taxAmount).toFixed(2);
    console.log(this.totalCalculatedAmount)
})

When('Calculate total amount in "Order Summary" section for International Hoffman_USPrintNegativeTestPage', async function () {
    this.totalCalculatedAmount = parseFloat(this.printAndDigitalIssuesAmount + this.digitalArchiveAccessAmount + this.taxAmount).toFixed(2);
    console.log(this.totalCalculatedAmount)
})

