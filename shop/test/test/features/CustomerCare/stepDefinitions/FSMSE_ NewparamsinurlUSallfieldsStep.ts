import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_NewparamsinurlUSallfieldsPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens FSMSE New Params US All Fields url', async function () {
    try {
        await this.page.goto(process.env.BASEURL + FSMSE_NewparamsinurlUSallfieldsPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMSE New Params US All Fields : ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the First Name in FSMSE New Params US All Fields', async function () {
    this.FSMSE_NewparamsinurlUSallfieldsPage = await this.pomManager.getFSMSE_NewparamsinurlUSallfieldsPage();
    const firstName = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the FSMSE New Params US All Fields section.');
});

Then('Verify the Last Name in FSMSE New Params US All Fields', async function () {
    const lastName = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The Last Name value "kok" has been successfully verified in the FSMSE New Params US All Fields section.');
});

Then('Verify the Address1 in FSMSE New Params US All Fields', async function () {
    const Address1 = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserAddress1Value();
    expect(Address1).toEqual("11 Commerce Blvd");
    logger.info('The Address1 value "11 Commerce Blvd" has been successfully verified in the FSMSE New Params US All Fields section.');
});

Then('Verify the Address2 in FSMSE New Params US All Fields', async function () {
    const Address2 = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value "45" has been successfully verified in the FSMSE New Params US All Fields section.');
});

Then('Verify the City in FSMSE New Params US All Fields', async function () {
    const City = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserCityValue();
    expect(City).toEqual("Palm Coast");
    logger.info('The City value "Palm Coast" has been successfully verified in the FSMSE New Params US All Fields section.');
});

Then('Verify the postal code in FSMSE New Params US All Fields', async function () {
    const postalCode = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("32164");
    logger.info('The postal code value "32164" has been successfully verified in the FSMSE New Params US All Fields section.');
});

Then('Verify the email in FSMSE New Params US All Fields', async function () {
    const email = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserEmailValue();
    expect(email).toEqual("webtest6@darwin.cx");
    logger.info('The email value "webtest6@darwin.cx" has been successfully verified in the FSMSE New Params US All Fields section.');
});

Then('Verify the FSMSE company text field has no value', async function () {
    this.FSMSE_NewparamsinurlUSallfieldsPage = await this.pomManager.getFSMSE_NewparamsinurlUSallfieldsPage();
    const company = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserCompanyValue();
    expect(company).toEqual("");
    logger.info('The company text field has been successfully verified to have no value in the FSMSE New Params US All Fields section.');
});

Then('Verify the FSMSE job title text field has no value', async function () {
    this.FSMSE_NewparamsinurlUSallfieldsPage = await this.pomManager.getFSMSE_NewparamsinurlUSallfieldsPage();
    const jobTitle = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The job title text field has been successfully verified to have no value in the FSMSE New Params US All Fields section.');
});

Then('Verify the FSMSE phone number text field has no value', async function () {
    this.FSMSE_NewparamsinurlUSallfieldsPage = await this.pomManager.getFSMSE_NewparamsinurlUSallfieldsPage();
    const phoneNumber = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserPhoneNumberValue();
    expect(phoneNumber).toEqual("");
    logger.info('The phone number text field has been successfully verified to have no value in the FSMSE New Params US All Fields section.');
});

Then('Verify the country in FSMSE New Params US All Fields', async function () {
    const country = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The country value "United States"" has been successfully verified in the FSMSE New Params US All Fields section.');
});

Then('Verify the province in FSMSE New Params US All Fields', async function () {
    const province = await this.FSMSE_NewparamsinurlUSallfieldsPage.validateUserProvinceValue();
    expect(province).toEqual("Florida");
    logger.info('The province value "Florida" has been successfully verified in the FSMSE New Params US All Fields section.');
});

Then('I should see the count of radio buttons', async function () {
    this.FSMSE_NewparamsinurlUSallfieldsPage = await this.pomManager.getFSMSE_NewparamsinurlUSallfieldsPage();
    const count = await this.FSMSE_NewparamsinurlUSallfieldsPage.getRadioButtonCount();
    console.log(`Number of radio buttons: ${count}`);
});

Then('I should see the values of all radio buttons', async function () {
    this.FSMSE_NewparamsinurlUSallfieldsPage = await this.pomManager.getFSMSE_NewparamsinurlUSallfieldsPage();
    const values = await this.FSMSE_NewparamsinurlUSallfieldsPage.getRadioButtonValues();
    console.log(`Radio button value: ${values}`)
    });

// Then ('/^Values of all radio buttons should be "([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)","([^"]*)"$/, function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12') {
//     // Convert expected values from string to array
//      this.FSMSE_NewparamsinurlUSallfieldsPage = await this.pomManager.getFSMSE_NewparamsinurlUSallfieldsPage();
//     const expectedValuesArray = expectedValues.split(',').map(value => value.trim());

//     // Verify that the actual values match the expected values
//     await this.FSMSE_NewparamsinurlUSallfieldsPage.verifyRadioButtonValues(expectedValuesArray);

 
// });




