import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Given('User opens URL Courage_INTOrderINTBillMe', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Courage_INTOrderINTBillMe page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Courage Magazine Subscription Options" text in Courage_INTOrderINTBillMePage', async function () {
    this.Courage_INTOrderINTBillMePage = await this.pomManager.getCourage_INTOrderINTBillMePage();
    let text = await this.Courage_INTOrderINTBillMePage.validateCourageMagazineSubscriptionOptionsText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Courage Magazine Subscription Options');
    logger.info(`Successfully validated "Courage Magazine Subscription Options" text, received '${text}'`);
})

When('Enter values in Mailing and Billing Address form for Courage_INTOrderINTBillMePage', async function () {
    this.Courage_INTOrderINTBillMePage = await this.pomManager.getCourage_INTOrderINTBillMePage();
    await this.Courage_INTOrderINTBillMePage.fillMailingAndBillingAddress();
    logger.info('Entered values in the Mailing and Billing Address form for Courage_INTOrderINTBillMePage.');
})

Then('Select the international Country Available Subscription Option', async function () {
    this.Courage_INTOrderINTBillMePage = await this.pomManager.getCourage_INTOrderINTBillMePage();
    await this.Courage_INTOrderINTBillMePage.selectCountrySpecificSubscription();
    logger.info('International country-specific subscription option selected successfully.');
});


