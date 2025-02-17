import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Given('User opens Courage Special Cases - Courage Order in Special Chars', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate Billing Address text', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateBillingAddressText();
    expect(text).toEqual('Billing Address');
    logger.info('The "Billing Address" text successfully validated');
})

When('Enter values in Billing Address form for CA', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    // await this.CSC_CourageOrderSpecialCharsPage.fillBillAddForCA(); 
    await this.CSC_CourageOrderSpecialCharsPage.fillBillingAddressForCA();
    logger.info('Values successfully entered in Billing Address form for CA')
})

Then('Validate Gift Recipient Mailing Address text', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateGiftRecipientMailingAddressText();
    expect(text).toEqual('Gift Recipient Mailing Address');
    logger.info('The "Gift Recipient Mailing Address" text successfully validated');
})

Then('Validate Order Number 1 text', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateOrderNumber1Text();
    expect(text).toEqual('Order Number 1');
    logger.info('The "Order Number 1" text successfully validated');
})

When('Enter values in Gift Recipient Mailing Address form for CA', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    // await this.CSC_CourageOrderSpecialCharsPage.fillGiftRecipientMailAddForCA();
    await this.CSC_CourageOrderSpecialCharsPage.fillGiftRecipientMailingAddressForCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form for CA');
})

Then('Validate Invalid email address text', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateInvalidEmailAddressText();
    expect(text).toEqual('Invalid email address');
    logger.info('The "Invalid email address" text successfully validated');
})

Then('Validate Gifts text in summary section', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateGiftsText();
    expect(text).toEqual('Gifts');
    logger.info('The "Gifts" text in summary section successfully validated');
})

Then('Validate Gift Order 1 text in summary section', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info('The "Gift Order 1" text in summary section successfully validated');
})

Then('Validate Mailing and Billing Address text', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateMailingAndBillingAddressText();
    expect(text).toEqual('Mailing and Billing Address');
    logger.info('The text "Mailing and Billing Address" successfully validated');
})



When('Enter values in Mailing and Billing Address form for US with Special Chars in Email', async function () {
    await this.CSC_CourageOrderSpecialCharsPage.fillMailingAndBillingAddressForUSSpecialCharsEmail();
    logger.info('Values successfully entered in Mailing and Billing Assress form for US with Special Chars in Email');
})

When('Enter values in Mailing and Billing Address form for US with Special Chars in Phone', async function () {
    await this.CSC_CourageOrderSpecialCharsPage.fillMailingAndBillingAddressForUSSpecialCharPhone();
    logger.info('Values successfully entered in Mailing and Billing Address form for US with Special Chars in Phone');
})

Then('Validate Email alert text', async function () {
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateEmailAlertText();
    expect(text).toEqual('Email : email ');
    logger.info('The "Email" alert text successfully validated');
})

Then('Validate PhoneNumber alert text', async function () {
    let text = await this.CSC_CourageOrderSpecialCharsPage.validatePhoneNumberAlertText();
    expect(text).toEqual('PhoneNumber : Numeric characters only ');
    logger.info('The "PhoneNumber" alert text successfully validated');
})

When('Enter valid Email address in Email text field', async function () {
    await this.CSC_CourageOrderSpecialCharsPage.fillValidEmail();
    logger.info('Valid Email address entered in Email text field');
})

When('Enter valid Phone Number in Phone Number text field', async function () {
    await this.CSC_CourageOrderSpecialCharsPage.fillValidPhoneNumber();
    logger.info('Valid Phone Number entered in Phone Number text field');
})

Then('Validate Numeric characters only text', async function () {
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateNumericCharactersOnlyText();
    expect(text).toEqual('Numeric characters only');
    logger.info('The text "Numeric characters only" successfully validated');
})
