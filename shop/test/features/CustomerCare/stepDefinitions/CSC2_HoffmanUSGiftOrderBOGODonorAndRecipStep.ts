import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC2_HoffmanUSGiftOrderBOGO_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL CSC2_HoffmanUSGiftOrderBOGO', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC2_HoffmanUSGiftOrderBOGO_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the CSC2_HoffmanUSGiftOrderBOGO: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate The Perfect Gift for the Deer Hunter text', async function () {
    this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage = await this.pomManager.getCSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage();
    let text = await this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text', async function () {
    this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage = await this.pomManager.getCSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage();
    let text = await this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage.validateUSOfferText();
    expect(text).toEqual(' US Offer ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})

Then('Validate Summary text', async function () {
    this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage = await this.pomManager.getCSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage();
    let text = await this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage.validateSummaryText();
    expect(text).toEqual('Summary');
    logger.info(`Text validation passed: 'Summary', received '${text}'`);
})

Then('Validate Free Gift To Donor text under order summary section', async function () {
    this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage = await this.pomManager.getCSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage();
    let text = await this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section', async function () {
    this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage = await this.pomManager.getCSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage();
    let text = await this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})


When('Enter values in Mailing and Billing Address form for CSC2_HoffmanUSGiftOrderBOGODonorandRecip', async function () {
    this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage = await this.pomManager.getCSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage();
    await this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage.fillMailingBillingAddress();
    logger.info('Entered values in Mailing and Billing Address form for CSC2_HoffmanUSGiftOrderBOGODonorandRecip');
})

When('Enter values in Mailing Address form for CSC2_HoffmanUSGiftOrderBOGODonorandRecip', async function () {
    this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage = await this.pomManager.getCSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage();
    await this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for CSC2_HoffmanUSGiftOrderBOGODonorandRecip');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1', async function () {
    this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage = await this.pomManager.getCSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage();
    await this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})

When('Enter values in Gift Recipient Mailing Address form for Order 2', async function () {
    this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage = await this.pomManager.getCSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage();
    await this.CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage.fillGiftRecipientMailingAddress2();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 2');
})





