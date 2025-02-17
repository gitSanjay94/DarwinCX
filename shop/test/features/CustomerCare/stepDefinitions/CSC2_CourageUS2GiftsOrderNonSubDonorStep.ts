import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Given('User opens URL CSC2_CourageUS2GiftsOrderNonSubDonor', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the New Params US All Fields page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Click on Add Gift Recipient Button', async function () {
    this.CSC2_CourageUS2GiftsOrderNonSubDonorPage = await this.pomManager.getCSC2_CourageUS2GiftsOrderNonSubDonorPage();
    await this.CSC2_CourageUS2GiftsOrderNonSubDonorPage.clickaddGiftRecipientButton();
    
    // logger.info('The First Name value "jonathan" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page');
});

Then('Validate TRANSACTION SUCCESSFUL for Gift Recipient2', async function () {
    this.CSC2_CourageUS2GiftsOrderNonSubDonorPage = await this.pomManager.getCSC2_CourageUS2GiftsOrderNonSubDonorPage();
    const recipientvalidation = await this.CSC2_CourageUS2GiftsOrderNonSubDonorPage.validateTranscationSuccessfulForRecipitent2();
       expect(recipientvalidation).toEqual("Recipient #2:");
    // logger.info('The First Name value "jonathan" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page');
});

Then('Select the Canada Country Available Subscription Option at CourageUS2GiftsOrderNonSubDonor Page', async function () {
   this.CSC2_CourageUS2GiftsOrderNonSubDonorPage = await this.pomManager.getCSC2_CourageUS2GiftsOrderNonSubDonorPage();
    await this.CSC2_CourageUS2GiftsOrderNonSubDonorPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})
 



