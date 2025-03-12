import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Given('User opens URL Courage_USOrder', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Courage_USOrder page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Courage Magazine Subscription Options" text', async function () {
    this.Courage_USOrderPage = await this.pomManager.getCourage_USOrderPage();
    let text = await this.Courage_USOrderPage.validateCourageMagazineSubscriptionOptionsText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Courage Magazine Subscription Options');
    logger.info(`Successfully validated "Courage Magazine Subscription Options" text, received '${text}'`);
})

Then('Validate US Subscription Option "Batch QA US 810" is checked', async function () {
    this.Courage_USOrderPage = await this.pomManager.getCourage_USOrderPage();
    await this.Courage_USOrderPage.validateUSSubscriptionOption();
    logger.info('Successfully validated that the US Subscription Option "Batch QA US 8/$10" is checked.');
})

When('Enter values in Mailing and Billing Address form for Courage_USOrder', async function () {
    this.Courage_USOrderPage = await this.pomManager.getCourage_USOrderPage();
    await this.Courage_USOrderPage.fillMailingAndBillingAddress();
    logger.info('Entered values in the Billing Address form for Courage_USOrder.');
})

