import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Given('User opens URL FSMSE_CourageCCDeclined', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMSE_CourageCCDeclined page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});


When('Enter values in Billing Address form for FSMSE_CourageCCDeclined', async function () {
    this.FSMSE_CourageCCDeclinedPage = await this.pomManager.getFSMSE_CourageCCDeclinedPage();
    await this.FSMSE_CourageCCDeclinedPage.fillMailingAndBillingAddress();
    logger.info('Entered values in Billing Address form for FSMSE_CourageCCDeclined');
})

// When("Validate Your card's expiry year is in the past text at FSMSE_CourageCCDeclined Page", async function () {
//     this.FSMSE_CourageCCDeclinedPage = await this.pomManager.getFSMSE_CourageCCDeclinedPage();
//     let text = await this.FSMSE_CourageCCDeclinedPage.validateYourCardExpiryYearIsInThePastText();
//     let trimmedText = text.trim();
//     expect(trimmedText).toEqual("Your card's expiry year is in the past.");
//     logger.info(`Validation result: Expected "Your card's expiry year is in the past.", received "${text}"`);


// })

When("Validate Your card's expiry year is in the past text at FSMSE_CourageCCDeclined Page", async function () {
    this.FSMSE_CourageCCDeclinedPage = await this.pomManager.getFSMSE_CourageCCDeclinedPage();
    let text = await this.FSMSE_CourageCCDeclinedPage.validateYourCardExpiryYearIsInThePastText();
   let trimmedText = text.trim().replace(/[’]/g, "'");

    // Define both expected possible messages
    const expectedMessages = [
        "Your card's expiration year is in the past.",
        "Your card's expiry year is in the past."
    ];

    // Check if the trimmed text matches either expected message
    expect(expectedMessages).toContain(trimmedText);
});

