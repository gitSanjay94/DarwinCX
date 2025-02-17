import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CourageINTOrder_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens Courage INT Order Prepopulated API', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CourageINTOrder_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to Courage INT Order Prepopulated API Fields : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the first name in Courage INT Order Prepopulated API fields', async function () {
    this.CourageINTOrderPrepopulatedAPIPage = await this.pomManager.getCourageINTOrderPrepopulatedAPIPage();
    const firstName = await this.CourageINTOrderPrepopulatedAPIPage.validateUserFirstNameValue();
    expect(firstName).toEqual('Courage');
    logger.info('The first name value "Courage" has been successfully verified in Courage INT Order Prepopulated API fields');
})

Then('Verify the last name in Courage INT Order Prepopulated API fields', async function () {
    const lastName = await this.CourageINTOrderPrepopulatedAPIPage.validateUserLastNameValue();
    expect(lastName).toEqual('Int Order');
    logger.info('The last name value "Int Order" has been successfully verified in Courage INT Order Prepopulated API fields');
})

Then('Verify the address1 in Courage INT Order Prepopulated API fields', async function () {
    const address1 = await this.CourageINTOrderPrepopulatedAPIPage.validateUserAddress1Value();
    expect(address1).toEqual('1 year offer');
    logger.info('The address1 value "1 year offer" has been successfully verified in Courage INT Order Prepopulated API fields');
})

Then('Verify the city in Courage INT Order Prepopulated API fields', async function () {
    const city = await this.CourageINTOrderPrepopulatedAPIPage.validateUserCityValue();
    expect(city).toEqual('Samara');
    logger.info('The city value "Samara" has been successfully verified in Courage INT Order Prepopulated API fields');
})

Then('Verify the postal code in Courage INT Order Prepopulated API fields', async function () {
    const postalCode = await this.CourageINTOrderPrepopulatedAPIPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual('123456');
    logger.info('The postal code value "123456" has been successfully verified in Courage INT Order Prepopulated API fields');
})

Then('Verify the country in Courage INT Order Prepopulated API fields', async function () {
    const country = await this.CourageINTOrderPrepopulatedAPIPage.validateUserCountryValue();
    expect(country).toEqual('Albania');
    logger.info('The country value "Albania" has been successfully verified in Courage INT Order Prepopulated API fields');
})

Then('Verify the province in Courage INT Order Prepopulated API fields', async function () {
    const province = await this.CourageINTOrderPrepopulatedAPIPage.validateUserProvinceValue();
    expect(province).toEqual('Albania');
    logger.info('The province value "Albania" has been successfully verified in Courage INT Order Prepopulated API fields');
})

Then('Verify the email in Courage INT Order Prepopulated API fields', async function () {
    const email = await this.CourageINTOrderPrepopulatedAPIPage.validateUserEmailValue();
    expect(email).toEqual('webtest6@palmcoastd.com');
    logger.info('The email value "webtest6@palmcoastd.com" has been successfully verified in Courage INT Order Prepopulated API fields');
})