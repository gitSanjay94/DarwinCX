import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { Courage_CAOrderPrepopulatedAPI_LANDING_URL_ENDPOINT } from '../../../../src/constants';

const assert = require('assert');
Given('User opens URL Courage_CAOrderPrepopulatedAPI', async function () {
    try {
        await this.page.goto(process.env.BASEURL + Courage_CAOrderPrepopulatedAPI_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Courage_CAOrderPrepopulatedAPI: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Courage Magazine Subscription Options" text in Courage_CAOrderPrepopulatedAPIPage', async function () {
    this.Courage_CAOrderPrepopulatedAPIPage = await this.pomManager.getCourage_CAOrderPrepopulatedAPIPage();
    let text = await this.Courage_CAOrderPrepopulatedAPIPage.validateCourageMagazineSubscriptionOptionsText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Courage Magazine Subscription Options');
    logger.info(`Successfully validated "Courage Magazine Subscription Options" text, received '${text}'`);
})

When('Enter values in Mailing and Billing Address form for Courage_CAOrderPrepopulatedAPIPage', async function () {
    this.Courage_CAOrderPrepopulatedAPIPage = await this.pomManager.getCourage_CAOrderPrepopulatedAPIPage();
    await this.Courage_CAOrderPrepopulatedAPIPage.fillMailingAndBillingAddress();
    logger.info('Entered values in the Mailing and Billing Address form for Courage_CAOrderPrepopulatedAPIPage.');
})

Then('Verify the First Name Value at URL Courage_CAOrderPrepopulatedAPIPage', async function () {
    this.Courage_CAOrderPrepopulatedAPIPage = await this.pomManager.getCourage_CAOrderPrepopulatedAPIPage();
    const firstName = await this.Courage_CAOrderPrepopulatedAPIPage.validateUserFirstNameValue();
    expect(firstName).toEqual("Order");
    logger.info('The First Name value "Order" has been successfully verified in the Courage_CAOrderPrepopulatedAPIPage.');
});

Then('Verify the Last Name Value at URL Courage_CAOrderPrepopulatedAPIPage', async function () {
    this.Courage_CAOrderPrepopulatedAPIPage = await this.pomManager.getCourage_CAOrderPrepopulatedAPIPage();
    const lastName = await this.Courage_CAOrderPrepopulatedAPIPage.validateUserLastNameValue();
    expect(lastName).toEqual("ca");
    logger.info('The Last Name value "ca" has been successfully verified in the Courage_CAOrderPrepopulatedAPIPage.');
})

Then('Verify the Address 1 Value at URL Courage_CAOrderPrepopulatedAPIPage', async function () {
    this.Courage_CAOrderPrepopulatedAPIPage = await this.pomManager.getCourage_CAOrderPrepopulatedAPIPage();
    const address1 = await this.Courage_CAOrderPrepopulatedAPIPage.validateAddress1Value();
    expect(address1).toEqual("line 1");
    logger.info('The Address 1 value "line 1" has been successfully verified in the Courage_CAOrderPrepopulatedAPIPage.');
})

Then('Verify the City Value at URL Courage_CAOrderPrepopulatedAPIPage', async function () {
    this.Courage_CAOrderPrepopulatedAPIPage = await this.pomManager.getCourage_CAOrderPrepopulatedAPIPage();
    const city = await this.Courage_CAOrderPrepopulatedAPIPage.validateCityValue();
    expect(city).toEqual("windsor");
    logger.info('The City value "windsor" has been successfully verified in the Courage_CAOrderPrepopulatedAPIPage.');
})

Then('Verify the Postal Code Value at URL Courage_CAOrderPrepopulatedAPIPage', async function () {
    this.Courage_CAOrderPrepopulatedAPIPage = await this.pomManager.getCourage_CAOrderPrepopulatedAPIPage();
    const postalCode = await this.Courage_CAOrderPrepopulatedAPIPage.validatePostalCodeValue();
    expect(postalCode).toEqual("N9A 9Z9");
    logger.info('The Postal Code value "N9A 9Z9" has been successfully verified in the Courage_CAOrderPrepopulatedAPIPage.');
})

Then('Verify the Email Value at URL Courage_CAOrderPrepopulatedAPIPage', async function () {
    this.Courage_CAOrderPrepopulatedAPIPage = await this.pomManager.getCourage_CAOrderPrepopulatedAPIPage();
    const Email = await this.Courage_CAOrderPrepopulatedAPIPage.validateEmailValue();
    expect(Email).toEqual("webtest6@palmcoastd.com");
    logger.info('The Email value "webtest6@palmcoastd.com" has been successfully verified in the Courage_CAOrderPrepopulatedAPIPage.');
})

Then('Verify the Country Value at URL Courage_CAOrderPrepopulatedAPIPage', async function () {
    this.Courage_CAOrderPrepopulatedAPIPage = await this.pomManager.getCourage_CAOrderPrepopulatedAPIPage();
    const country = await this.Courage_CAOrderPrepopulatedAPIPage.validateCountryValue();
    expect(country).toEqual("Canada");
    logger.info('The Country value "CA" has been successfully verified in the Courage_CAOrderPrepopulatedAPIPage.');
})

Then('Verify the Province Value at URL Courage_CAOrderPrepopulatedAPIPage', async function () {
    this.Courage_CAOrderPrepopulatedAPIPage = await this.pomManager.getCourage_CAOrderPrepopulatedAPIPage();
    const province = await this.Courage_CAOrderPrepopulatedAPIPage.validateProvinceValue();
    expect(province).toEqual("Ontario");
    logger.info('The province value "ON" has been successfully verified in the Courage_CAOrderPrepopulatedAPIPage.');
})







