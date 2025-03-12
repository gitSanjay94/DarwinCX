
import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Given('User opens CouragePayBillOrders Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the CouragePayBillOrders page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Courage Magazine Subscription Options" text in CouragePayBillOrders', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    let text = await this.CouragePayBillOrdersPage.validateCourageMagazineSubscriptionOptionsText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Courage Magazine Subscription Options');
    logger.info(`Validation result: Expected "Courage Magazine Subscription Options", received "${text}"`);
})

Then('Validate "Courage US International" text in CouragePayBillOrders', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    let text = await this.CouragePayBillOrdersPage.validateCourageUSInternationalText();
    expect(text).toContain('Courage (US & International)');
    logger.info(`Validation result: Expected "Courage (US & International)", received "${text}"`);
})

Then('Validate "Testing Cross Bundle" text in CouragePayBillOrders', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    let text = await this.CouragePayBillOrdersPage.validateTestingCrossBundleText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Testing Cross Bundle');
    logger.info(`Validation result: Expected "Testing Cross Bundle", received "${text}"`);
})

When('Select radio button under "Courage US International"', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    await this.CouragePayBillOrdersPage.selectRBUnderCourageUSInternational();
    logger.info('Radio button under "Courage US International" has been selected.');
})

When('Select "Test Offer Courage Print & Digital" check box', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    await this.CouragePayBillOrdersPage.selectTestOfferCouragePrintDigitalCB();
    logger.info('"Test Offer Courage Print & Digital" check box has been selected.');
})

When('Fetch Total amount in Summary section in CouragePayBillOrders', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    this.summaryTotalAmount = await this.CouragePayBillOrdersPage.summaryTotalAmount();
    logger.info(`Successfully fetched the Total amount: ${this.summaryTotalAmount}`);
})

When('Fetch Total price amount in TRANSACTION SUCCESSFUL section', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    this.totalPriceAmount = await this.CouragePayBillOrdersPage.totalPriceAmount();
    logger.info(`Successfully fetched the Total price amount: ${this.totalPriceAmount}`);
})

Then('Validate Summary Total Amount and Total Price Amount', async function () {
    expect(this.summaryTotalAmount).toEqual(this.totalPriceAmount)
    console.log(`Summary Total Amount (${this.summaryTotalAmount}) and Total Price Amount (${this.totalPriceAmount}) are equal.`);
});

Then('Validate "Order Number 1" text in CouragePayBillOrders', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    let text = await this.CouragePayBillOrdersPage.validateOrderNumber1Text();
    expect(text).toEqual('Order Number 1');
    logger.info(`Validation result: Expected "Order Number 1", received "${text}"`);
})

Then('Validate "Order Number 2" text in CouragePayBillOrders', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    let text = await this.CouragePayBillOrdersPage.validateOrderNumber2Text();
    expect(text).toEqual('Order Number 2');
    logger.info(`Validation result: Expected "Order Number 2", received "${text}"`);
})

Then('Validate "Order Number 3" text in CouragePayBillOrders', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    let text = await this.CouragePayBillOrdersPage.validateOrderNumber3Text();
    expect(text).toEqual('Order Number 3');
    logger.info(`Validation result: Expected "Order Number 3", received "${text}"`);
})
Then('Validate "Order Number 4" text in CouragePayBillOrders', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    let text = await this.CouragePayBillOrdersPage.validateOrderNumber4Text();
    expect(text).toEqual('Order Number 4');
    logger.info(`Validation result: Expected "Order Number 4", received "${text}"`);
})

Then('Validate "Order Number 5" text in CouragePayBillOrders', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    let text = await this.CouragePayBillOrdersPage.validateOrderNumber5Text();
    expect(text).toEqual('Order Number 5');
    logger.info(`Validation result: Expected "Order Number 5", received "${text}"`);
})

When('Click "Add Gift Recipient" button in CouragePayBillOrders', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    await this.CouragePayBillOrdersPage.clickAddGiftRecipientButton();
    logger.info('Clicked on "Add Gift Recipient" button');
})

When('Fill "Gift Recipient Order Number 2" form', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    await this.CouragePayBillOrdersPage.fillGiftRecipientOrderNumber2();
    logger.info('Filled "Gift Recipient Order Number 2" form');
})

When('Fill "Gift Recipient Order Number 3" form', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    await this.CouragePayBillOrdersPage.fillGiftRecipientOrderNumber3();
    logger.info('Filled "Gift Recipient Order Number 3" form');
})

When('Fill "Gift Recipient Order Number 4" form', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    await this.CouragePayBillOrdersPage.fillGiftRecipientOrderNumber4();
    logger.info('Filled "Gift Recipient Order Number 4" form');
})

When('Fill "Gift Recipient Order Number 5" form', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    await this.CouragePayBillOrdersPage.fillGiftRecipientOrderNumber5();
    logger.info('Filled "Gift Recipient Order Number 5" form');
})

Then('Validate "ProductPB1133" to be Unchecked', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    let isChecked = await this.CouragePayBillOrdersPage.validateProductPB1133ToBeUnchecked();
    expect(isChecked).toBe(false);
    logger.info('"ProductPB1133" is successfully validated to be unchecked.');
})

When('Fetch Total Price Amount for 3 Order in TRANSACTION SUCCESSFUL section', async function () {
    this.CouragePayBillOrdersPage = await this.pomManager.getCouragePayBillOrdersPage();
    this.totalPriceAmountFor3Order = await this.CouragePayBillOrdersPage.totalPriceAmountFor3Order();
    logger.info(`Successfully fetched the Total Price Amount for 3 Order: ${this.totalPriceAmountFor3Order}`);
})

Then('Validate Summary Total Amount and Total Price Amount for 3 Order', async function () {
    expect(this.summaryTotalAmount).toEqual(this.totalPriceAmountFor3Order)
    console.log(`Summary Total Amount (${this.summaryTotalAmount}) and Total Price Amount for 3 Order (${this.totalPriceAmountFor3Order}) are equal.`);
});

