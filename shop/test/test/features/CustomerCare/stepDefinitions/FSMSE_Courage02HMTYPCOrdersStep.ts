import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_Courage02HMTYPCOrders_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens Courage Special Cases - FSMSE Courage 02HMTYPC Orders', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC_Courage02HMTYPCOrders_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Courage Special Cases - User opens Courage Special Cases - Courage 02HMTYPC Orders: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

When('Check 1 Year Print checkbox at FSMSE_Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    await this.FSMSE_Courage02HMTYPCOrdersPage.checkOneYearPrintCB();
    logger.info('The checkbox "1 Year Print" successfully checked');
})

When('Check 1 Year Digital checkbox at FSMSE_Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    await this.FSMSE_Courage02HMTYPCOrdersPage.checkOneYearDigitalCB();
    logger.info('The checkbox "1 Year Digital" successfully checked');
})

When('Check 1 Year Print and Digital checkbox at FSMSE_Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    await this.FSMSE_Courage02HMTYPCOrdersPage.checkOneYearPrintAndDigitalCB();
    logger.info('The checkbox "1 Year Print and Digital" successfully checked');
})

When('Check Courage Calendar checkbox at FSMSE_Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    await this.FSMSE_Courage02HMTYPCOrdersPage.checkCourageCalendar();
    logger.info('The checkbox "Courage Calendar" successfully checked');
})

Then('Validate Tax Value at Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    const tax = await this.FSMSE_Courage02HMTYPCOrdersPage.validateTaxValue();
    expect(tax).toBe('$0.70');
    
})

Then('Validate Amount Before Order at Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    this.beforeOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(40.7);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Gift Order Amount Before Order at Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    this.beforeOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(40.7);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Gift Order Price Before Order at Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    this.beforeOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(41.3);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount for Different Mailing Address Before Order at Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    this.beforeOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(40);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount After Order at Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    this.AfterOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(40.7);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Gift Order Amount After Order at Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    this.AfterOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(40.7);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Gift Order Price After Order at Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    this.AfterOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(41.3);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Amount for Different Mailing Address After Order at Courage02HMTYPCOrders Page', async function () {
    this.FSMSE_Courage02HMTYPCOrdersPage = await this.pomManager.getFSMSE_Courage02HMTYPCOrdersPage();
    this.AfterOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_Courage02HMTYPCOrdersPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(40);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})
