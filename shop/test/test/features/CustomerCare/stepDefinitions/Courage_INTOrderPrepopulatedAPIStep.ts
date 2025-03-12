import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { Courage_INTOrderPrepopulatedAPI_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL Courage_INTOrderPrepopulatedAPI', async function () {
    try {
        await this.page.goto(process.env.BASEURL + Courage_INTOrderPrepopulatedAPI_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Courage_INTOrderPrepopulatedAPI page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Courage Magazine Subscription Options" text in Courage_INTOrderPrepopulatedAPI', async function () {
    this.Courage_INTOrderPrepopulatedAPIPage = await this.pomManager.getCourage_INTOrderPrepopulatedAPIPage();
    let text = await this.Courage_INTOrderPrepopulatedAPIPage.validateCourageMagazineSubscriptionOptionsText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Courage Magazine Subscription Options');
    logger.info(`Successfully validated "Courage Magazine Subscription Options" text, received '${text}'`);
})

When('Enter values in Mailing and Billing Address form for Courage_INTOrderPrepopulatedAPI', async function () {
    this.Courage_INTOrderPrepopulatedAPIPage = await this.pomManager.getCourage_INTOrderPrepopulatedAPIPage();
    await this.Courage_INTOrderPrepopulatedAPIPage.fillMailingAndBillingAddress();
    logger.info('Entered values in the Mailing and Billing Address form for Courage_INTOrderPrepopulatedAPI.');
})

Then('Validate Bill me order rejected due to existing bill', async function () {
    this.Courage_INTOrderPrepopulatedAPIPage = await this.pomManager.getCourage_INTOrderPrepopulatedAPIPage();
    let text = await this.Courage_INTOrderPrepopulatedAPIPage.validateBillMeOrderRejected();
    expect(text).toEqual('Bill me order rejected due to existing bill');
    logger.info('Bill me order rejected due to existing bill validated successfully.');
})

