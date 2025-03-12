import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
const assert = require('assert');
Given('User opens URL Courage_CAErrMsg', async function () {
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




When('Check I have a different mailing address checkbox at Courage_CA1Gift page', async function () {

    this.Courage_CA1GiftPage = await this.pomManager.getCourage_CA1GiftPage();

    await this.Courage_CA1GiftPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})








Then('Verify the First Name is a mandatory field', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('Validated First Name is missing Text');
});

Then('Verify the Last Name is a mandatory field', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('Validated Last Name is missing Text');
});

Then('Verify the Address is a mandatory field', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateAddressMissingText();
    expect(text).toEqual('required');
    logger.info('Validated Address is missing Text');
});

Then('Verify the City is a mandatory field', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateCityMissingText();
    expect(text).toEqual('required');
    logger.info('Validated City is missing Text');
});

Then('Verify the Postal Code is a mandatory field', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('Validated Postal Code is missing Text');
});

Then('Verify the Province is a mandatory field', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('Validated Province/State is missing Text');
});

Then('Verify the Email is a mandatory field', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateEmailMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('Validated Email is missing Text');
});


Then('Verify the First Name Can Not Be Empty', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateFirstNameEmptyErrText();
    expect(text).toEqual('Field cannot be empty');
    logger.info('Validated First Name Field cannot be empty');
});

Then('Verify the Last Name Can Not Be Empty', async function () {
   this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateLastNameEmptyErrText();
    expect(text).toEqual('Field cannot be empty');
    logger.info('Validated Last Name Field cannot be empty');
});

Then('Verify the Address Can Not Be Empty', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateAddressEmptyErrText();
    expect(text).toEqual('Field cannot be empty');
    logger.info('Validated Address Field cannot be empty');
});

Then('Verify the City Can Not Be Empty', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateCityEmptyErrText();
    expect(text).toEqual('Field cannot be empty');
    logger.info('Validated City Field cannot be empty');
});

Then('Verify the Postal Code Can Not Be Empty', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validatePostalCodeEmptyErrText();
    expect(text).toEqual('Field cannot be empty');
    logger.info('Validated Postal Code Field cannot be empty');
});


Then('Verify the Email Can Not Be Empty', async function () {
    this.Courage_CAErrMsgPage = await this.pomManager.getCourage_CAErrMsgPage();
    let text = await this.Courage_CAErrMsgPage.validateEmailEmptyErrText();
    expect(text).toEqual('Invalid email address');
    logger.info('Validated Email Field cannot be empty');
});
