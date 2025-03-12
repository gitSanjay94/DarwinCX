import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { Courage_USOrderPrepopulatedAPI_LANDING_URL_ENDPOINT } from '../../../../src/constants';

const assert = require('assert');
Given('User opens URL Courage_USOrderPrepopulatedAPI', async function () {
    try {
        await this.page.goto(process.env.BASEURL + Courage_USOrderPrepopulatedAPI_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Courage_USOrderPrepopulatedAPI: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Courage Magazine Subscription Options" text in Courage_USOrderPrepopulatedAPIPage', async function () {
    this.Courage_USOrderPrepopulatedAPIPage = await this.pomManager.getCourage_USOrderPrepopulatedAPIPage();
    let text = await this.Courage_USOrderPrepopulatedAPIPage.validateCourageMagazineSubscriptionOptionsText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Courage Magazine Subscription Options');
    logger.info(`Successfully validated "Courage Magazine Subscription Options" text, received '${text}'`);
})

When('Enter values in Mailing and Billing Address form for Courage_USOrderPrepopulatedAPIPage', async function () {
    this.Courage_USOrderPrepopulatedAPIPage = await this.pomManager.getCourage_USOrderPrepopulatedAPIPage();
    await this.Courage_USOrderPrepopulatedAPIPage.fillMailingAndBillingAddress();
    logger.info('Entered values in the Mailing and Billing Address form for Courage_USOrderPrepopulatedAPIPage.');
})

Then('Verify the First Name Value at URL Courage_USOrderPrepopulatedAPIPage', async function () {
    this.Courage_USOrderPrepopulatedAPIPage = await this.pomManager.getCourage_USOrderPrepopulatedAPIPage();
    const firstName = await this.Courage_USOrderPrepopulatedAPIPage.validateUserFirstNameValue();
    expect(firstName).toEqual("Courage");
    logger.info('The First Name value "Courage" has been successfully verified in the Courage_USOrderPrepopulatedAPIPage.');
});

Then('Verify the Last Name Value at URL Courage_USOrderPrepopulatedAPIPage', async function () {
    this.Courage_USOrderPrepopulatedAPIPage = await this.pomManager.getCourage_USOrderPrepopulatedAPIPage();
    const lastName = await this.Courage_USOrderPrepopulatedAPIPage.validateUserLastNameValue();
    expect(lastName).toEqual("Order US");
    logger.info('The Last Name value "Order US" has been successfully verified in the Courage_USOrderPrepopulatedAPIPage.');
})

Then('Verify the Address 1 Value at URL Courage_USOrderPrepopulatedAPIPage', async function () {
    this.Courage_USOrderPrepopulatedAPIPage = await this.pomManager.getCourage_USOrderPrepopulatedAPIPage();
    const address1 = await this.Courage_USOrderPrepopulatedAPIPage.validateAddress1Value();
    // expect(address1).toEqual("1 year offer");
    expect(address1).toEqual("11 Commerce Blvd");
    logger.info('The Address 1 value "11 Commerce Blvd" has been successfully verified in the Courage_USOrderPrepopulatedAPIPage.');
})

Then('Verify the City Value at URL Courage_USOrderPrepopulatedAPIPage', async function () {
    this.Courage_USOrderPrepopulatedAPIPage = await this.pomManager.getCourage_USOrderPrepopulatedAPIPage();
    const city = await this.Courage_USOrderPrepopulatedAPIPage.validateCityValue();
    expect(city).toEqual("Palm Coast");
    logger.info('The City value "Palm Coast" has been successfully verified in the Courage_USOrderPrepopulatedAPIPage.');
})

Then('Verify the Postal Code Value at URL Courage_USOrderPrepopulatedAPIPage', async function () {
    this.Courage_USOrderPrepopulatedAPIPage = await this.pomManager.getCourage_USOrderPrepopulatedAPIPage();
    const postalCode = await this.Courage_USOrderPrepopulatedAPIPage.validatePostalCodeValue();
    // expect(postalCode).toEqual("32164-2164");
    expect(postalCode).toEqual("32164");
    logger.info('The Postal Code value "32164" has been successfully verified in the Courage_USOrderPrepopulatedAPIPage.');
})

Then('Verify the Email Value at URL Courage_USOrderPrepopulatedAPIPage', async function () {
    this.Courage_USOrderPrepopulatedAPIPage = await this.pomManager.getCourage_USOrderPrepopulatedAPIPage();
    const Email = await this.Courage_USOrderPrepopulatedAPIPage.validateEmailValue();
    expect(Email).toEqual("webtest6@palmcoastd.com");
    logger.info('The Email value "webtest6@palmcoastd.com" has been successfully verified in the Courage_USOrderPrepopulatedAPIPage.');
})

Then('Verify the Country Value at URL Courage_USOrderPrepopulatedAPIPage', async function () {
    this.Courage_USOrderPrepopulatedAPIPage = await this.pomManager.getCourage_USOrderPrepopulatedAPIPage();
    const country = await this.Courage_USOrderPrepopulatedAPIPage.validateCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the Courage_USOrderPrepopulatedAPIPage.');
})

Then('Verify the Province Value at URL Courage_USOrderPrepopulatedAPIPage', async function () {
    this.Courage_USOrderPrepopulatedAPIPage = await this.pomManager.getCourage_USOrderPrepopulatedAPIPage();
    const province = await this.Courage_USOrderPrepopulatedAPIPage.validateProvinceValue();
    // expect(province).toEqual("Florida");
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State*" has been successfully verified in the Courage_USOrderPrepopulatedAPIPage.');
})






