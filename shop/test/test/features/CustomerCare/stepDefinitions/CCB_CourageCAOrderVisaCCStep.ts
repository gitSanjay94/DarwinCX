import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Given('User opens URL CCB_CourageCAOrderVisaCC', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the CCB_CourageCAOrderVisaCC page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate Your Card Number Is Invalid text', async function () {
    this.CCB_CourageCAOrderVisaCCPage = await this.pomManager.getCCB_CourageCAOrderVisaCCPage();
    let text = await this.CCB_CourageCAOrderVisaCCPage.validateYourCardNumberIsInvalidText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Your card number is invalid.');
    logger.info(`Validation result: Expected 'Your card number is invalid.', received '${text}'`);
})

When('Enter values in Billing Address form for CCB_CourageCAOrderVisaCC', async function () {
    this.CCB_CourageCAOrderVisaCCPage = await this.pomManager.getCCB_CourageCAOrderVisaCCPage();
    await this.CCB_CourageCAOrderVisaCCPage.fillMailingAndBillingAddress();
    logger.info('Entered values in the Billing Address form for CCB_CourageCAOrderVisaCC.');
})

