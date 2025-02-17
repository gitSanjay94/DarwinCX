import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_Courage02HCTYPCOrders_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens Courage Special Cases - Courage 02HCTYPC Orders', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_Courage02HCTYPCOrders_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Courage Special Cases - User opens Courage Special Cases - Courage 02HCTYPC Orders: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate Offer Has All Delivery Types text', async function () {
    this.CSC_Courage02HCTYPCOrdersPage = await this.pomManager.getCSC_Courage02HCTYPCOrdersPage();
    const text = await this.CSC_Courage02HCTYPCOrdersPage.validateOfferHasAllDeliveryTypesTxt();
    expect(text).toEqual('Offer has all delivery types');
    logger.info('The text "Offer has all delivery types" has been successfully validated');
})

When('Select offers from the drop downs', async function () {
    await this.CSC_Courage02HCTYPCOrdersPage.selectOffers();
    logger.info('Offer successfully selected from the drop downs');
})

When('Enter values in Mailing and Billing Address form', async function () {
    this.CSC_Courage02HCTYPCOrdersPage = await this.pomManager.getCSC_Courage02HCTYPCOrdersPage();
    await this.CSC_Courage02HCTYPCOrdersPage.fillMailingAndBillingAddress();
    logger.info('Values successfully entered in Mailing and Billing Address form');
})

When('Enter values in Gift Recipient Mailing Address form', async function () {
    await this.CSC_Courage02HCTYPCOrdersPage.fillGiftRecipientMailingAddressCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form');
})

When('Enter Canadian values in Gift Recipient Mailing Address form', async function () {
    await this.CSC_Courage02HCTYPCOrdersPage.fillGiftRecipientMailingAddressCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form');
})

When('Click on Place Order button', async function () {
    this.CSC_Courage02HCTYPCOrdersPage = await this.pomManager.getCSC_Courage02HCTYPCOrdersPage();
    await this.CSC_Courage02HCTYPCOrdersPage.clickPlaceOrderButton();
    logger.info('Clicked on Place Oder button')
})

Then('Validate TRANSACTION SUCCESSFUL text', async function () {
    this.CSC_Courage02HCTYPCOrdersPage = await this.pomManager.getCSC_Courage02HCTYPCOrdersPage();
    await this.CSC_Courage02HCTYPCOrdersPage.validateTransactionSuccessfulTxt();
    logger.info('The text "TRANSACTION SUCCESSFUL" has been successfully validated');
})

Then('Validate Per Gift text in Summary section', async function () {
    this.CSC_Courage02HCTYPCOrdersPage = await this.pomManager.getCSC_Courage02HCTYPCOrdersPage();
    await this.CSC_Courage02HCTYPCOrdersPage.validatePerGiftTxt();
    logger.info('The text "Per Gift" in Summary section has been successfully validated');
})

Given('Check This Is A Gift checkbox', async function () {
    this.CSC_Courage02HCTYPCOrdersPage = await this.pomManager.getCSC_Courage02HCTYPCOrdersPage();
    await this.CSC_Courage02HCTYPCOrdersPage.checkThisIsAGiftCB();
    logger.info('The checkbox "This Is A Gift" successfully checked');
})

When('Check I have a different mailing address checkbox', async function () {

    this.CSC_Courage02HCTYPCOrdersPage = await this.pomManager.getCSC_Courage02HCTYPCOrdersPage();

    await this.CSC_Courage02HCTYPCOrdersPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})

When('Enter values in Mailing Address form', async function () {
    await this.CSC_Courage02HCTYPCOrdersPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate Mailing Address text', async function () {
    this.CSC_Courage02HCTYPCOrdersPage = await this.pomManager.getCSC_Courage02HCTYPCOrdersPage();
    const text = await this.CSC_Courage02HCTYPCOrdersPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})

When('Enter valid payment details {string} and {string}  and {string}', async function (cardnumb, cardexp, cvc) {
    this.CSC_Courage02HCTYPCOrdersPage = await this.pomManager.getCSC_Courage02HCTYPCOrdersPage();
    await this.CSC_Courage02HCTYPCOrdersPage.enterCorrectPaymentDetails(cardnumb, cardexp, cvc)
    logger.info(`Entering valid payment details: Card Number - ${cardnumb}, Expiry Date - ${cardexp}, CVV - ${cvc}`);
})
