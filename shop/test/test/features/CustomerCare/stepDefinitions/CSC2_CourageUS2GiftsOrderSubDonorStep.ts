import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Given('User opens URL CSC2_CourageUS2GiftsOrderSubDonor', async function () {
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


Then('Check the Donation Subscription Radio Button', async function () {
    this.CSC2_CourageUS2GiftsOrderSubDonorPage = await this.pomManager.getCSC2_CourageUS2GiftsOrderSubDonorPage();
    await this.CSC2_CourageUS2GiftsOrderSubDonorPage.clickdonationSubscriptionRB();
    
    // logger.info('The First Name value "jonathan" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page');
});

Then('Enter values in Gift Recipient Mailing Address form for 2nd Gift Recipient', async function () {
    this.CSC2_CourageUS2GiftsOrderNonSubDonorPage = await this.pomManager.getCSC2_CourageUS2GiftsOrderNonSubDonorPage();
    await this.CSC2_CourageUS2GiftsOrderNonSubDonorPage.fillAddGiftRecipient2MailingAddress();
    
    // logger.info('The First Name value "jonathan" has been successfully verified in the CSC_NewparamsinurlUSnoLastName Page');
});

 
 Then('Validate Total Price Value', async function () {
    this.CSC2_CourageUS2GiftsOrderSubDonorPage = await this.pomManager.getCSC2_CourageUS2GiftsOrderSubDonorPage();
    await this.CSC2_CourageUS2GiftsOrderSubDonorPage.validateTotalPriceValue();
    logger.info('The Total Price Value "$0.00" has been verified successfully');
});



