import { Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Then('Validate Enter Your Account Number To Renew text in Courage US Renew Prepopulated API', async function () {
    this.CSC_CourageUSRenewPrepopulatedAPIPage = await this.pomManager.getCSC_CourageUSRenewPrepopulatedAPIPage();
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateEnterYourAccountNumberToRenewText();
    expect(text).toEqual('Enter your account number to renew');
    logger.info(`Validating 'Enter Your Account Number To Renew' text. Expected: 'Enter your account number to renew', Actual: '${text}'`);
})

Then('Validate Purchaser Name in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validatePurchaserName();
    expect(text).toEqual('1841846');
    logger.info(`Validating Purchaser Name. Expected: '1841846', Actual: '${text}'`);
})

Then('Validate Last Name in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateLastName();
    expect(text).toEqual('two');
    logger.info(`Validating Last Name. Expected: 'two', Actual: '${text}'`);
})

Then('Validate Purchaser Information text in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validatePurchaserInformationText();
    expect(text).toEqual('Purchaser Information');
    logger.info(`Validating Purchaser Information text. Expected: 'Purchaser Information', Actual: '${text}'`);
})

Then('Validate Purchaser Information First Name in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validatePurchaserInformationFirstName();
    expect(text).toEqual('test');
    logger.info(`Validating Purchaser Information First Name. Expected: 'test', Actual: '${text}'`);
})

Then('Validate Purchaser Information Last Name in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validatePurchaserInformationLastName();
    expect(text).toEqual('two');
    logger.info(`Validating Purchaser Information Last Name. Expected: 'two', Actual: '${text}'`);
})

Then('Validate Purchaser Information Address Line in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validatePurchaserInformationAddressLine();
    expect(text).toEqual('111 Flagler Plaza Dr');
    logger.info(`Validating Purchaser Information Address Line. Expected: '111 Flagler Plaza Dr', Actual: '${text}'`);
})

Then('Validate Purchaser Information City in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validatePurchaserInformationCity();
    expect(text).toEqual('Palm Coast');
    logger.info(`Validating Purchaser Information City. Expected: 'Palm Coast', Actual: '${text}'`);
})

Then('Validate Purchaser Information Province in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validatePurchaserInformationProvince();
    expect(text).toEqual('FL');
    logger.info(`Validating Purchaser Information Province. Expected: 'FL', Actual: '${text}'`);
})

Then('Validate Purchaser Information Postal Code in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validatePurchaserInformationPostalCode();
    expect(text).toEqual('32137-2137');
    logger.info(`Validating Purchaser Information Postal Code. Expected: '32137-2137', Actual: '${text}'`);
})

Then('Validate Available Renewals text in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsText();
    expect(text).toEqual('Available Renewals');
    logger.info(`Validating Available Renewals text. Expected: 'Available Renewals', Actual: '${text}'`);
})


Then('Validate Available Renewals First Name 1 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsFirstName1();
    expect(text).toEqual('test');
    logger.info(`Validating Available Renewals First Name 1. Expected: 'test', Actual: '${text}'`);
})

Then('Validate Available Renewals Last Name 1 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsLastName1();
    expect(text).toEqual('two');
    logger.info(`Validating Available Renewals Last Name 1. Expected: 'two', Actual: '${text}'`);
})

Then('Validate Available Renewals Address Line 1 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsAddressLine1();
    expect(text).toEqual('111 Flagler Plaza Dr');
    logger.info(`Validating Available Renewals Address Line 1. Expected: '111 Flagler Plaza Dr', Actual: '${text}'`);
})

Then('Validate Available Renewals City 1 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsCity1();
    expect(text).toEqual('Palm Coast');
    logger.info(`Validating Available Renewals City 1. Expected: 'Palm Coast', Actual: '${text}'`);
})

Then('Validate Available Renewals Province 1 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsProvince1();
    expect(text).toEqual('FL');
    logger.info(`Validating Available Renewals Province 1. Expected: 'FL', Actual: '${text}'`);
})

Then('Validate Available Renewals Postal Code 1 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsPostalCode1();
    expect(text).toEqual('32137-2137');
    logger.info(`Validating Available Renewals Postal Code 1. Expected: '32137-2137', Actual: '${text}'`);
})

Then('Validate Available Renewals Product 1 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsProduct1();
    expect(text).toEqual('Courage CX Magazine');
    logger.info(`Validating Available Renewals Product 1. Expected: 'Courage CX Magazine', Actual: '${text}'`);
})

Then('Validate Available Renewals Expiry Date 1 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsExpiryDate1();
    expect(text).toEqual('May 2030');
    logger.info(`Validating Available Renewals Expiry Date 1. Expected: 'Nov 2029', Actual: '${text}'`);
})

Then('Validate Available Renewals First Name 2 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsFirstName2();
    expect(text).toEqual('test');
    logger.info(`Validating Available Renewals First Name 2. Expected: 'test', Actual: '${text}'`);
})

Then('Validate Available Renewals Last Name 2 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsLastName2();
    expect(text).toEqual('two');
    logger.info(`Validating Available Renewals Last Name 2. Expected: 'two', Actual: '${text}'`);
})

Then('Validate Available Renewals Address Line 2 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsAddressLine2();
    expect(text).toEqual('111 Flagler Plaza Dr');
    logger.info(`Validating Available Renewals Address Line 2. Expected: '111 Flagler Plaza Dr', Actual: '${text}'`);
})

Then('Validate Available Renewals City 2 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsCity2();
    expect(text).toEqual('Palm Coast');
    logger.info(`Validating Available Renewals City 2. Expected: 'Palm Coast', Actual: '${text}'`);
})

Then('Validate Available Renewals Province 2 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsProvince2();
    expect(text).toEqual('FL');
    logger.info(`Validating Available Renewals Province 2. Expected: 'FL', Actual: '${text}'`);
})

Then('Validate Available Renewals Postal Code 2 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsPostalCode2();
    expect(text).toEqual('32137-2137');
    logger.info(`Validating Available Renewals Postal Code 2. Expected: '32137-2137', Actual: '${text}'`);
})

Then('Validate Available Renewals Product 2 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsProduct2();
    expect(text).toEqual('Courage CX Membership');
    logger.info(`Validating Available Renewals Product 2. Expected: 'Courage CX Magazine', Actual: '${text}'`);
})

Then('Validate Available Renewals Expiry Date 2 in Courage US Renew Prepopulated API', async function () {
    let text = await this.CSC_CourageUSRenewPrepopulatedAPIPage.validateAvailableRenewalsExpiryDate2();
    expect(text).toEqual('Aug 1994');
    logger.info(`Validating Available Renewals Expiry Date 2. Expected: 'Aug 1994', Actual: '${text}'`);
})

