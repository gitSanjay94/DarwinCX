import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CourageINTRenew_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens Courage INT Renew Prepopulated API', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CourageINTRenew_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to Courage INT Renew Prepopulated API fields : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the purchaser name in Courage INT Renew Prepopulated API Page fields', async function () {
    this.CourageINTRenewPrepopulatedAPIPage = await this.pomManager.getCourageINTRenewPrepopulatedAPIPage();
    const firstName = await this.CourageINTRenewPrepopulatedAPIPage.validatePurchaserNameValue();
    expect(firstName).toEqual('954793604');
    logger.info('The purchaser name value "Courage" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the last name in Courage INT Renew Prepopulated API Page fields', async function () {
    const lastName = await this.CourageINTRenewPrepopulatedAPIPage.validateLastNameValue();
    expect(lastName).toEqual('Int Order');
    logger.info('The last name value "Int Order" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Purchaser Information First Name in Courage INT Renew Prepopulated API Page fields', async function () {
    const lastName = await this.CourageINTRenewPrepopulatedAPIPage.validatePurchaserInformationFirstName();
    expect(lastName).toEqual('Courage');
    logger.info('The Purchaser Information First Name value "Courage" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Purchaser Information Last Name in Courage INT Renew Prepopulated API Page fields', async function () {
    const purchaserInformationLastName = await this.CourageINTRenewPrepopulatedAPIPage.validatePurchaserInformationLastName();
    expect(purchaserInformationLastName).toEqual('Int Order');
    logger.info('The Purchaser Information Last Name value "Int Order" has been successfully verified in Courage INT Renew Prepopulated API Page fields')
})

Then('Verify the Purchaser Information Address Line in Courage INT Renew Prepopulated API Page fields', async function () {
    const purchaserInformationAddressLine = await this.CourageINTRenewPrepopulatedAPIPage.validatePurchaserInformationAddressLine();
    expect(purchaserInformationAddressLine).toEqual('1 year offer');
    logger.info('The Purchaser Information Address Line value "1 Year Offer" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Purchaser Information City in Courage INT Renew Prepopulated API Page fields', async function () {
    const purchaserInformationCity = await this.CourageINTRenewPrepopulatedAPIPage.validatePurchaserInformationCity();
    expect(purchaserInformationCity).toEqual('Samara');
    logger.info('The Purchaser Information City value "Samara" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Purchaser Information Province in Courage INT Renew Prepopulated API Page fields', async function () {
    const purchaserInformationProvince = await this.CourageINTRenewPrepopulatedAPIPage.valiadtePurchaserInformationProvince();
    expect(purchaserInformationProvince).toEqual('Albania');
    logger.info('The Purchaser Information Province value "Albania" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Purchaser Information Postal Code in Courage INT Renew Prepopulated API Page fields', async function () {
    const purchaserInformationPostalCode = await this.CourageINTRenewPrepopulatedAPIPage.validatePurchaserInformationPostalCode();
    expect(purchaserInformationPostalCode).toEqual('123456');
    logger.info('The Purchaser Information Postal Code value "123456" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Available Renewals First Name in Courage INT Renew Prepopulated API Page fields', async function () {
    const availableRenewalsFirstName = await this.CourageINTRenewPrepopulatedAPIPage.valiadteAvailableRenewalsFirstName();
    expect(availableRenewalsFirstName).toEqual('Courage');
    logger.info('The Available Renewals First Name value "Courage" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Available Renewals Last Name in Courage INT Renew Prepopulated API Page fields', async function () {
    const availableRenewalsLastName = await this.CourageINTRenewPrepopulatedAPIPage.validateAvailableRenewalsLastName();
    expect(availableRenewalsLastName).toEqual('Int Order');
    logger.info('The Available Renewals Last Name Value "Int Order" has been succssfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Available Renewals Address Line in Courage INT Renew Prepopulated API Page fields', async function () {
    const availableRenewalsAddressLine = await this.CourageINTRenewPrepopulatedAPIPage.validateAvailableRenewalsAddressLine();
    expect(availableRenewalsAddressLine).toEqual('1 year offer');
    logger.info('The Available Renewals Address Line value "1 year offer" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Available Renewals City in Courage INT Renew Prepopulated API Page fields', async function () {
    const availableRenewalsCity = await this.CourageINTRenewPrepopulatedAPIPage.validateAvailableRenewalsCity();
    expect(availableRenewalsCity).toEqual('Samara');
    logger.info('The Available Renewals City value "Samara" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Available Renewals Province in Courage INT Renew Prepopulated API Page fields', async function () {
    const availableRenewalsProvince = await this.CourageINTRenewPrepopulatedAPIPage.validateAvailableRenewalsProvince();
    expect(availableRenewalsProvince).toEqual('Albania');
    logger.info('The Available Renewals Province value "Albania" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Available Renewals Postal Code in Courage INT Renew Prepopulated API Page fields', async function () {
    const availableRenewalsPostalCode = await this.CourageINTRenewPrepopulatedAPIPage.validateAvailableRenewalsPostalCode();
    expect(availableRenewalsPostalCode).toEqual('123456');
    logger.info('The Available Renewals Postal Code value "123456" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Available Renewals Product in Courage INT Renew Prepopulated API Page fields', async function () {
    const availableRenewalsProduct = await this.CourageINTRenewPrepopulatedAPIPage.validateAvailableRenewalsProduct();
    expect(availableRenewalsProduct).toEqual('Courage CX Magazine');
    logger.info('The Available Renewals Product value "Courage CX Magazine" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})

Then('Verify the Available Renewals Expiry Date in Courage INT Renew Prepopulated API Page fields', async function () {
    const availableRenewalsExpiryDate = await this.CourageINTRenewPrepopulatedAPIPage.validateAvailableRenewalsExpiryDate();
    expect(availableRenewalsExpiryDate).toEqual('Jan 1970');
    logger.info('The Available Renewals Expiry Date value "Jan" has been successfully verified in Courage INT Renew Prepopulated API Page fields');
})