import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { NewParamsUSNoCountryOrder_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New Param URL US No Country order', async function () {
    try {
        await this.page.goto(process.env.BASEURL + NewParamsUSNoCountryOrder_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the First Name Value at New Param in URL US No Country order Page', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    const firstName = await this.NewParaminURLUSNoCountryorderPage.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the NewParaminURLUSNoCountryorder Page.');
});

Then('Verify the Last Name Value at New Param in URL US No Country order Page', async function () {
   this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    const lastName = await this.NewParaminURLUSNoCountryorderPage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The Last Name value "kok" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the Address1 Value at New Param in URL US No Country order Page', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    const Address1 = await this.NewParaminURLUSNoCountryorderPage.validateUserAddress1Value();
    expect(Address1).toEqual("11 Commerce Blvd");
    logger.info('The Address1 value "11 Commerce Blvd" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the Address2 Value at New Param in URL US No Country order Page', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    const Address2 = await this.NewParaminURLUSNoCountryorderPage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value "45" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the City Value at New Param in URL US No Country order Page', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    const City = await this.NewParaminURLUSNoCountryorderPage.validateUserCityValue();
    expect(City).toEqual("Palm Coast");
    logger.info('The City value "Palm Coast" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the Postal Code Value at  New Param in URL US No Country order Page', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    const postalCode = await this.NewParaminURLUSNoCountryorderPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("32164");
    logger.info('The postal code value "32164" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the Email Address Value at New Param in URL US No Country order Page', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    const email = await this.NewParaminURLUSNoCountryorderPage.validateUserEmailValue();
    expect(email).toEqual("webtest6@darwin.cx");
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the Blank Company Name Value at New Param in URL US No Country order Page', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    const company = await this.NewParaminURLUSNoCountryorderPage.validateUserCompanyValue();
    expect(company).toEqual("");
    logger.info('The company text field has been successfully verified to have no value in the New Params US All Fields section.');
});

Then('Verify the Country Value at New Param in URL US No Country order Page', async function () {
     this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    const country = await this.NewParaminURLUSNoCountryorderPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "United States"" has been successfully verified in the New Params US All Fields section.');
});

Then('Verify the User Province at New Param in URL US No Country order Page', async function () {
     this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    const province = await this.NewParaminURLUSNoCountryorderPage.validateUserProvinceValue();
    expect(province).toEqual("Florida");
    logger.info('The province value "Florida" has been successfully verified in the New Params US All Fields section.');
});

Then('Unselect the Country Value from Country Drop down', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    await this.NewParaminURLUSNoCountryorderPage.unSelecttheCountryValue();
    logger.info('Unselected the country value from country drop down');
});

Then('Fill the Credit Card Details', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    await this.NewParaminURLUSNoCountryorderPage.fillCorrectPaymentDetails();
    logger.info('Filled the credit card details');
});

Then('Click on Pay Order link Button', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    await this.NewParaminURLUSNoCountryorderPage.clickPlaceOrderButton();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the alert message for select the country', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    let text = await this.NewParaminURLUSNoCountryorderPage.validateMissingCountryText();
    expect(text).toEqual('Country is missing');
    logger.info('Validated Country is missing Text');
});


