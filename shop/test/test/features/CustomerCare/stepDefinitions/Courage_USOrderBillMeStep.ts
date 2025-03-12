import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Given('User opens URL Courage_USOrderBillMe', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Courage_USOrderBillMe page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Courage Magazine Subscription Options" text in Courage_USOrderBillMePage', async function () {
    this.Courage_USOrderBillMePage = await this.pomManager.getCourage_USOrderBillMePage();
    let text = await this.Courage_USOrderBillMePage.validateCourageMagazineSubscriptionOptionsText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Courage Magazine Subscription Options');
    logger.info(`Successfully validated "Courage Magazine Subscription Options" text, received '${text}'`);
})

Then('Validate US Subscription Option "Batch QA US 810" is checked in Courage_USOrderBillMePage', async function () {
    this.Courage_USOrderBillMePage = await this.pomManager.getCourage_USOrderBillMePage();
    await this.Courage_USOrderBillMePage.validateUSSubscriptionOption();
    logger.info('Successfully validated that the US Subscription Option "Batch QA US 8/$10" is checked.');
})

When('Enter values in Mailing and Billing Address form for Courage_USOrderBillMe', async function () {
    this.Courage_USOrderBillMePage = await this.pomManager.getCourage_USOrderBillMePage();
    await this.Courage_USOrderBillMePage.fillMailingAndBillingAddress();
    logger.info('Entered values in the Billing Address form for Courage_USOrderBillMe.');
})

When('Click Bill Me Later Info', async function () {
    this.Courage_USOrderBillMePage = await this.pomManager.getCourage_USOrderBillMePage();
    await this.Courage_USOrderBillMePage.clickBillMeLaterInfo();
    logger.info('Successfully clicked on "Bill Me Later Info" on Courage_USOrderBillMePage.');
})

Then('Validate Bill Me Later Info text', async function () {
    this.Courage_USOrderBillMePage = await this.pomManager.getCourage_USOrderBillMePage();
    let text = await this.Courage_USOrderBillMePage.validateBillMeLaterInfoText();
    expect(text).toEqual('You will be sent future payment requests for this purchase if choosing Bill Me Later option.');
    logger.info(`Successfully validated the "Bill Me Later Info" text,received '${text}'`);
})

