import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC_Courage02HMTYPCOrders_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens Courage Special Cases - Courage 02HMTYPC Orders', async function () {
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

When('Check 1 Year Print checkbox', async function () {
    this.CSC_Courage02HMTYPCOrdersPage = await this.pomManager.getCSC_Courage02HMTYPCOrdersPage();
    await this.CSC_Courage02HMTYPCOrdersPage.checkOneYearPrintCB();
    logger.info('The checkbox "1 Year Print" successfully checked');
})

When('Check 1 Year Digital checkbox', async function () {
    this.CSC_Courage02HMTYPCOrdersPage = await this.pomManager.getCSC_Courage02HMTYPCOrdersPage();
    await this.CSC_Courage02HMTYPCOrdersPage.checkOneYearDigitalCB();
    logger.info('The checkbox "1 Year Digital" successfully checked');
})

When('Check 1 Year Print and Digital checkbox', async function () {
    this.CSC_Courage02HMTYPCOrdersPage = await this.pomManager.getCSC_Courage02HMTYPCOrdersPage();
    await this.CSC_Courage02HMTYPCOrdersPage.checkOneYearPrintAndDigitalCB();
    logger.info('The checkbox "1 Year Print and Digital" successfully checked');
})

When('Check Courage Calendar checkbox', async function () {
    this.CSC_Courage02HMTYPCOrdersPage = await this.pomManager.getCSC_Courage02HMTYPCOrdersPage();
    await this.CSC_Courage02HMTYPCOrdersPage.checkCourageCalendar();
    logger.info('The checkbox "Courage Calendar" successfully checked');
})

