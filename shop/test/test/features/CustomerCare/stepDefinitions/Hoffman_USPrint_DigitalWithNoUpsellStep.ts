import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Then('Validate "United States Offers" text', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    let text = await this.Hoffman_USPrint_DigitalWithNoUpsellPage.validateUnitedStatesOffersText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('United States Offers');
    logger.info(`Validation result: Expected "United States Offers", received "${text}"`);
})

Then('Validate "6 print and digital issues" to be checked', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    let isChecked = await this.Hoffman_USPrint_DigitalWithNoUpsellPage.validatePrintAndDigitalIssuesRB();
    expect(isChecked).toBe(true);
    logger.info('"6 print and digital issues" is successfully validated to be checked.');
});

When('Fill Mailing and Billing Address form for Hoffman_USPrint_DigitalWithNoUpsellPage', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    await this.Hoffman_USPrint_DigitalWithNoUpsellPage.fillMailingAndBillingAddress();
    logger.info('Filled Mailing and Billing Address form for Hoffman_USPrint_DigitalWithNoUpsellPage')
})

When('Fetch "Digital Archive Access" Amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    this.digitalArchiveAccessAmount = await this.Hoffman_USPrint_DigitalWithNoUpsellPage.digitalArchiveAccessAmount();
    logger.info(`Successfully fetched the "Digital Archive Access" Amount in "Order Summary" section: ${this.digitalArchiveAccessAmount}`);
})

When('Fetch "Tax" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    this.taxAmount = await this.Hoffman_USPrint_DigitalWithNoUpsellPage.taxAmount();
    logger.info(`Successfully fetched the "Tax" amount in "Order Summary" section: ${this.taxAmount}`);
})

When('Fetch "print and digital issues" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    this.printAndDigitalIssuesAmount = await this.Hoffman_USPrint_DigitalWithNoUpsellPage.printAndDigitalIssuesAmount();
    logger.info(`Successfully fetched the "print and digital issues" amount in "Order Summary" section: ${this.printAndDigitalIssuesAmount}`);
})

When('Calculate total amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage', async function () {
    this.totalCalculatedAmount = parseFloat(this.printAndDigitalIssuesAmount + this.digitalArchiveAccessAmount + this.taxAmount).toFixed(2);
    console.log(this.totalCalculatedAmount)
})

When('Fetch "Total" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    let text = await this.Hoffman_USPrint_DigitalWithNoUpsellPage.orderSummaryTotalAmount();
    this.orderSummaryTotalAmount = parseFloat(text).toFixed(2);
    logger.info(`Successfully fetched the "Total" amount in "Order Summary" section: ${this.orderSummaryTotalAmount}`);
})

Then('Validate "Total" amount in "Order Summary" section and "Total" calculated amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage', async function () {
    expect(this.orderSummaryTotalAmount).toEqual(this.totalCalculatedAmount)
    console.log(`"Total" amount in "Order Summary" section (${this.orderSummaryTotalAmount}) and "Total" calculated amount in "Order Summary" section (${this.totalCalculatedAmount}) are equal.`);
});

When('Fetch "Total price" for Hoffman_USPrint_DigitalWithNoUpsellPage', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    let text = await this.Hoffman_USPrint_DigitalWithNoUpsellPage.totalPrice();
    this.totalPrice = parseFloat(text).toFixed(2)
    logger.info(`Successfully fetched the "Total price": ${this.totalPrice}`);
})

Then('Validate "Order Summary" text', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    let text = await this.Hoffman_USPrint_DigitalWithNoUpsellPage.validateOrderSummaryText();
    expect(text).toEqual('Summary');
    logger.info(`Validation result: Expected "Order Summary", received "${text}"`);
})

Then('Validate "Total price" and "Total" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage', async function () {
    expect(this.totalPrice).toEqual(this.orderSummaryTotalAmount)
    console.log(`"Total price" (${this.totalPrice}) and "Total" amount in "Order Summary" section (${this.orderSummaryTotalAmount}) are equal.`);
});

When('Check "1 Year Digital Archive Access" check box', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    await this.Hoffman_USPrint_DigitalWithNoUpsellPage.checkOneYearDigitalArchiveAccessCB();
    logger.info('Checked "1 Year Digital Archive Access" check box');
})

Then('Validate "6 print and digital issues" to be unchecked', async function () {
    this.Hoffman_USPrint_DigitalWithNoUpsellPage = await this.pomManager.getHoffman_USPrint_DigitalWithNoUpsellPage();
    let isChecked = await this.Hoffman_USPrint_DigitalWithNoUpsellPage.validatePrintAndDigitalIssuesRB();
    expect(isChecked).toBe(false);
    logger.info('"6 print and digital issues" is successfully validated to be unchecked.');
});

