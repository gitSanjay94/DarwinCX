import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { NewParamsUSNoEmail_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New params in url - US no Email', async function () {
    try {
        // await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.goto(process.env.BASEURL + NewParamsUSNoEmail_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Opened New params in url - US no  Address 1 app: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Timeout occurred:', error.message);
        } else {
            console.error('Page navigation failed:', error.message);
        }
    }
});

When('Verify the New params in url - US no Email First Name', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    const firstName = await this.NewparamsinurlUSnoEmailPage.validateuserFirstNameTFText();
    expect(firstName).toEqual("jonathan");
    logger.info('Successfully verified the First Name');
});

Then('Verify the New params in url - US no Email Last Name', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    const lastName = await this.NewparamsinurlUSnoEmailPage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('Successfully verified the Last Name');
});

Then('Verify the in url - US no Email Blank Company Name', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    const companyNameBlank = await this.NewparamsinurlUSnoEmailPage.validateBlankCompanyName();
    expect(companyNameBlank).toEqual("");
    logger.info('Successfully verified the Blank Company Name');
});
Then('Verify the New params in url - US no Email Address1 Value', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    const Address1 = await this.NewparamsinurlUSnoEmailPage.validateUserAddress1Value();
    expect(Address1).toEqual("11 Commerce Blvd");
    logger.info('Successfully verified the Address1');
});

Then('Verify the New params in url - US no Email Address2 Value', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    const Address2 = await this.NewparamsinurlUSnoEmailPage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('Successfully verified the Address2');
});

Then('Verify the New params in url - US no Email City Value', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    const City = await this.NewparamsinurlUSnoEmailPage.validateUserCityValue();
    expect(City).toEqual("Palm Coast");
    logger.info('Successfully verified the City');
});

Then('Verify the New params in url - US no Email Postal Code Value', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    const PostalCode = await this.NewparamsinurlUSnoEmailPage.validateUserPostalCodeValue();
    expect(PostalCode).toEqual("32164");
    logger.info('Successfully verified the Postal Code');
});

Then('Verify the New params in url - US no Email Blank Email Address Value', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    const UserEmail = await this.NewparamsinurlUSnoEmailPage.validateEmailAddressValue();
    expect(UserEmail).toEqual("");
    logger.info('Successfully verified the Blank Email Address');
});

Then('Verify the New params in url - US no Email Country Value', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    const country = await this.NewparamsinurlUSnoEmailPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('Successfully verified the country');
});

Then('Verify the New params in url - US no Email User Province', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    const city = await this.NewparamsinurlUSnoEmailPage.validateUserProvinceValue();
    expect(city).toEqual("Florida");
    logger.info('Successfully verified the city');
});

Then('Click on Pay Order link Button at New params in url - US no Email page', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    await this.NewparamsinurlUSnoEmailPage.clickPlaceOrderButton();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the alert message for fill the Email Address', async function () {
    this.NewparamsinurlUSnoEmailPage = await this.pomManager.getNewparamsinurlUSnoEmailPage();
    let text = await this.NewparamsinurlUSnoEmailPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('Validated Email Address missing Text');
});



