import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_Courage02HCTYPCOrders_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens Courage Special Cases - FSMSE Courage 02HCTYPC Orders', async function () {
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

Then('Validate Offer Has All Delivery Types text at FSMSE_Courage02HCTYPCOrders Page', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    const text = await this.FSMSE_Courage02HCTYPCOrdersPage.validateOfferHasAllDeliveryTypesTxt();
    expect(text).toEqual('Offer has all delivery types');
    logger.info('The text "Offer has all delivery types" has been successfully validated');
})

When('Select offers from the drop downs at FSMSE_Courage02HCTYPCOrders Page', async function () {
    await this.FSMSE_Courage02HCTYPCOrdersPage.selectOffers();
    logger.info('Offer successfully selected from the drop downs');
})

When('Enter values in Mailing and Billing Address form at FSMSE_Courage02HCTYPCOrders Page', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    await this.FSMSE_Courage02HCTYPCOrdersPage.fillMailingAndBillingAddress();
    logger.info('Values successfully entered in Mailing and Billing Address form');
})

When('Enter values in Gift Recipient Mailing Address form at FSMSE_Courage02HCTYPCOrders Page', async function () {
    await this.FSMSE_Courage02HCTYPCOrdersPage.fillGiftRecipientMailingAddressCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form');
})

Then('Validate Per Gift text in Summary section at FSMSE_Courage02HCTYPCOrders Page', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    await this.FSMSE_Courage02HCTYPCOrdersPage.validatePerGiftTxt();
    logger.info('The text "Per Gift" in Summary section has been successfully validated');
})

Given('Check This Is A Gift checkbox at FSMSE_Courage02HCTYPCOrders Page', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    await this.FSMSE_Courage02HCTYPCOrdersPage.checkThisIsAGiftCB();
    logger.info('The checkbox "This Is A Gift" successfully checked');
})

When('Check I have a different mailing address checkbox at FSMSE_Courage02HCTYPCOrders Page', async function () {

    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();

    await this.FSMSE_Courage02HCTYPCOrdersPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})

When('Enter values in Mailing Address form at FSMSE_Courage02HCTYPCOrders Page', async function () {
    await this.FSMSE_Courage02HCTYPCOrdersPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate Mailing Address text at FSMSE_Courage02HCTYPCOrders Page', async function () {
    const text = await this.FSMSE_Courage02HCTYPCOrdersPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})

Then('Validate Tax Value', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    const tax = await this.FSMSE_Courage02HCTYPCOrdersPage.validateTaxValue();
    expect(tax).toBe('$70.00');
    
})

Then('Validate Amount Before Order', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    this.beforeOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(2020.00);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Gift Order Amount Before Order at FSMSE_Courage02HCTYPCOrders Page', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    this.beforeOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(2080);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Different Mailing Address Order Amount Before Order at FSMSE_Courage02HCTYPCOrders Page', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    this.beforeOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(1950);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})
Then('Validate Amount After Order', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    this.AfterOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(2020.00);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Gift Order Amount After Order at FSMSE_Courage02HCTYPCOrders Page', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    this.AfterOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(2080);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Different Mailing Address Order Amount After Order at FSMSE_Courage02HCTYPCOrders Page', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    this.AfterOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_Courage02HCTYPCOrdersPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(1950);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Total Amount before & after Order', async function () {
    this.FSMSE_Courage02HCTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HCTYPCOrdersPage();
    expect(this.beforeOrderAmount).toEqual(this.AfterOrderAmount)
    logger.info(`Summary Amount (${this.beforeOrderAmount}) and Total Amount (${this.AfterOrderAmount}) are equal.`);

        
})
