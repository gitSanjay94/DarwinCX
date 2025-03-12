import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Then('Validate Email Address Missing text under email text field section', async function () {
    this.CSC2_CourageCA1GiftForT1217Page = await this.pomManager.getCSC2_CourageCA1GiftForT1217Page();
    let text = await this.CSC2_CourageCA1GiftForT1217Page.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('Validation passed: The "Email address is missing" text matches the expected value.');
})

Then('Validate Required text under address1 text field section', async function () {
    this.CSC2_CourageCA1GiftForT1217Page = await this.pomManager.getCSC2_CourageCA1GiftForT1217Page();
    let text = await this.CSC2_CourageCA1GiftForT1217Page.validateRequiredText();
    expect(text).toEqual('required');
    logger.info('Validation passed: The "Required" text under address1 field matches the expected value.');
})


Then('Validate First Name alert text after placing order', async function () {
    this.CSC2_CourageCA1GiftForT1217Page = await this.pomManager.getCSC2_CourageCA1GiftForT1217Page();
    let text = await this.CSC2_CourageCA1GiftForT1217Page.validateFirstNameAlertText();
    expect(text).toEqual('FirstName : required ');
    logger.info('Validation passed: The First Name alert text matches the expected value.');
});

Then('Validate Address alert text after placing order', async function () {
    this.CSC2_CourageCA1GiftForT1217Page = await this.pomManager.getCSC2_CourageCA1GiftForT1217Page();
    let text = await this.CSC2_CourageCA1GiftForT1217Page.validateAddressAlertText();
    expect(text).toEqual('Address : required ');
    logger.info('Validation passed: The Address alert text matches the expected value.');
});

Then('Validate Product Unavailable alert text after placing order', async function () {
    this.CSC2_CourageCA1GiftForT1217Page = await this.pomManager.getCSC2_CourageCA1GiftForT1217Page();
    let text = await this.CSC2_CourageCA1GiftForT1217Page.validateProductUnavailableAlertText();
    expect(text).toEqual('Country : Product is unavailable in selected country ');
    logger.info('Validation passed: The Product Unavailable alert text matches the expected value.');
});

Then('Validate Select a Province text under choose province drop down', async function () {
    this.CSC2_CourageCA1GiftForT1217Page = await this.pomManager.getCSC2_CourageCA1GiftForT1217Page();
    let text = await this.CSC2_CourageCA1GiftForT1217Page.validateSelectAProvinceText();
    expect(text).toEqual('Select a Province/State');
    logger.info('Validation passed: The "Select a Province/State" text matches the expected value.');
})

Then('Verify the address 1 text field has no value', async function () {
    this.CSC2_CourageCA1GiftForT1217Page = await this.pomManager.getCSC2_CourageCA1GiftForT1217Page();
    let text = await this.CSC2_CourageCA1GiftForT1217Page.validateUserAddress1Value();
    expect(text).toEqual('');
    logger.info('The address 1 text field has been successfully verified to have no value.');
})

Then('Verify the email address text field has no value', async function () {
    this.CSC2_CourageCA1GiftForT1217Page = await this.pomManager.getCSC2_CourageCA1GiftForT1217Page();
    let text = await this.CSC2_CourageCA1GiftForT1217Page.validateEmailAddressValue();
    expect(text).toEqual('');
    logger.info('The email address text field has been successfully verified to have no value.');
})

Then('Verify the Country Value at CSC2_CourageCA1GiftforT1217 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const country = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "United States" has been successfully verified at the CSC2_CourageCA1GiftforT1217 Page.');
});

When('Enter values in Mailing and Billing Address form at CSC2_CourageCA1GiftsforT1217 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    await this.CSC2_CourageCA1Gift32charsforT1216Page.fillMailingAndBillingAddressCA();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

Then('Validate messages Product is not available in selected country text', async function () {
    this.CSC2_CourageCA1GiftForT1217Page = await this.pomManager.getCSC2_CourageCA1GiftForT1217Page();
    await this.CSC2_CourageCA1GiftForT1217Page.validateProductIsUnavailableInSelectedCountryText();
    logger.info('The "Product is unavailable in selected country" text has been successfully validated under country drop down section');
})









