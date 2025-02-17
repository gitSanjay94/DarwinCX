import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CourageCAOrder_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens Courage CA Order Prepopulated API', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CourageCAOrder_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to Courage CA Order Prepopulated API fields : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the first name in Courage CA Order Prepopulated API fields', async function () {
   this.CourageCAOrderPrepopulatedAPIPage = await this.pomManager.getCourageCAOrderPrepopulatedAPIPage();
    const firstName = await this.CourageCAOrderPrepopulatedAPIPage.validateUserFirstNameValue();
    expect(firstName).toEqual('Order');
    logger.info('The first name value "Order" has been successfully validated in Courage CA Order Prepopulated API fields');
})

Then('Verify the last name in Courage CA Order Prepopulated API fields', async function () {
    const lastName = await this.CourageCAOrderPrepopulatedAPIPage.validateUserLastNameValue();
    expect(lastName).toEqual('ca');
    logger.info('The last name value "ca" has been successfully validated in Courage CA Order Prepopulated API fields');
})

Then('Verify the address1 in Courage CA Order Prepopulated API fields', async function () {
    const address1 = await this.CourageCAOrderPrepopulatedAPIPage.validateUserAddress1Value();
    expect(address1).toEqual('line 1');
    logger.info('The address1 value "line 1" has been successfully validated in Courage CA Order Prepopulated API fields');
})

Then('Verify the city in Courage CA Order Prepopulated API fields', async function () {
    const city = await this.CourageCAOrderPrepopulatedAPIPage.validateUserCityValue();
    expect(city).toEqual('windsor');
    logger.info('The city value "windsor" has been successfully validated in Courage CA Order Prepopulated API fields');
})

Then('Verify the postal code in Courage CA Order Prepopulated API fields', async function () {
    const postalCode = await this.CourageCAOrderPrepopulatedAPIPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual('N9A 9Z9');
    logger.info('The postal code value "N9A 9Z9" has been successfully validated in Courage CA Order Prepopulated API fields');
})

Then('Verify the country in Courage CA Order Prepopulated API fields', async function () {
    const country = await this.CourageCAOrderPrepopulatedAPIPage.validateUserCountryValue();
    expect(country).toEqual('Canada');
    logger.info('The country value "Canada" has been successfully validated in Courage CA Order Prepopulated API fields');
})

Then('Verify the province in Courage CA Order Prepopulated API fields', async function () {
    const province = await this.CourageCAOrderPrepopulatedAPIPage.validateUserProvinceValue();
    expect(province).toEqual('Ontario');
    logger.info('The province value "Ontario" has been successfully validated in Courage CA Order Prepopulated API fields');
})

Then('Verify the email in Courage CA Order Prepopulated API fields', async function () {
    const email = await this.CourageCAOrderPrepopulatedAPIPage.validateUserEmailValue();
    expect(email).toEqual('webtest6@palmcoastd.com');
    logger.info('The email value "webtest6@palmcoastd.com" has been successfully validated in Courage CA Order Prepopulated API fields');
})