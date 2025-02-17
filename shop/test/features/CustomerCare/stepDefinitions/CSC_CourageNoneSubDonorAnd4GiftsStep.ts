import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_CourageNoneSubDonorAnd4Gifts_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens Courage Special Cases - Courage NoneSubDonor and 4 gifts', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_CourageNoneSubDonorAnd4Gifts_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Courage Special Cases - Courage NoneSubDonor and 4 gifts: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

When('Enter all the fields on the Mailing and Billing Address form', async function () {
    this.CSC_CourageNoneSubDonorAnd4GiftsPage = await this.pomManager.getCSC_CourageNoneSubDonorAnd4GiftsPage();
    await this.CSC_CourageNoneSubDonorAnd4GiftsPage.fillMailingAndBillingAddress();
    logger.info('Enter all the fields on the Mailing and Billing Address form');

})

When('Enter all the fields on the Gift Recipient Mailing Address form', async function () {
    await this.CSC_CourageNoneSubDonorAnd4GiftsPage.fillGiftRecipientMailingAddress();
    logger.info('Entering all the fields on the Gift Recipient Mailing Address form');
})

When('Enter all the fields on the Gift Recipient 2 Mailing Address form', async function () {
    await this.CSC_CourageNoneSubDonorAnd4GiftsPage.fillGiftRecipientMailingAddress2();
    logger.info('Entering all the fields on the Gift Recipient 2 Mailing Address form');
})

When('Check Credit card radio button', async function () {
    await this.CSC_CourageNoneSubDonorAnd4GiftsPage.checkCreditCardRB();
    logger.info('Credit card radio button checked');
})

When('Click Place Order button', async function () {
    await this.CSC_CourageNoneSubDonorAnd4GiftsPage.clickPlaceOrderButton();
    logger.info('Clicked Place Order button');
})

When('Check Auto renew this gift subscription checkbox', async function () {
    await this.CSC_CourageNoneSubDonorAnd4GiftsPage.checkautoRenewThisGiftSubscriptionCB();
    logger.info('The checkbox "Auto renew this gift subscription" successfully checked');
})
