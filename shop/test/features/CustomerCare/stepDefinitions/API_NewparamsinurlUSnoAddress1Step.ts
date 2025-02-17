import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import {NewParamsUSNoAddress1_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens New params in url - US no  Address 1', async function () {
    try {
        // await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.goto(process.env.BASEURL + NewParamsUSNoAddress1_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

When('Verify the New params First Name', async function () {
    this.NewparamsinurlUSnoAddress1Page = await this.pomManager.getNewparamsinurlUSnoAddress1Page();
    const firstName = await this.NewparamsinurlUSnoAddress1Page.validateuserFirstNameTFText();
    expect(firstName).toEqual("jonathan");
    logger.info('Successfully verified the First Name');
});

Then ('Verify the New params Last Name', async function () {
    this.NewparamsinurlUSnoAddress1Page = await this.pomManager.getNewparamsinurlUSnoAddress1Page();
    const lastName = await this.NewparamsinurlUSnoAddress1Page.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('Successfully verified the Last Name');
});

Then ('Verify the New Page Blank Company Name', async function () {
    this.NewparamsinurlUSnoAddress1Page = await this.pomManager.getNewparamsinurlUSnoAddress1Page();
    const companyNameBlank = await this.NewparamsinurlUSnoAddress1Page.validateBlankCompanyName();
    expect(companyNameBlank).toEqual("");
    logger.info('Successfully verified the Blank Company Name');
});
Then ('Verify the New Page Address1 Value', async function () {
    this.NewparamsinurlUSnoAddress1Page = await this.pomManager.getNewparamsinurlUSnoAddress1Page();
    const Address1 = await this.NewparamsinurlUSnoAddress1Page.validateUserAddress1Value();
    expect(Address1).toEqual("282 Dunview Ave");
    logger.info('Successfully verified the Address1');
});

Then ('Verify the New Page Address2 Value', async function () {
    this.NewparamsinurlUSnoAddress1Page = await this.pomManager.getNewparamsinurlUSnoAddress1Page();
    const Address2 = await this.NewparamsinurlUSnoAddress1Page.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('Successfully verified the Address2');
});

Then ('Verify the New Page City Value', async function () {
    this.NewparamsinurlUSnoAddress1Page = await this.pomManager.getNewparamsinurlUSnoAddress1Page();
    const City = await this.NewparamsinurlUSnoAddress1Page.validateUserCityValue();
    expect(City).toEqual("Palm Coast");
    logger.info('Successfully verified the City');
});

Then ('Verify the New Page Postal Code Value', async function () {
   this.NewparamsinurlUSnoAddress1Page = await this.pomManager.getNewparamsinurlUSnoAddress1Page();
    const PostalCode = await this.NewparamsinurlUSnoAddress1Page.validateUserPostalCodeValue();
    expect(PostalCode).toEqual("32164");
    logger.info('Successfully verified the Postal Code');
});

Then ('Verify the New Page Email Address Value', async function () {
   this.NewparamsinurlUSnoAddress1Page = await this.pomManager.getNewparamsinurlUSnoAddress1Page();
    const UserEmail = await this.NewparamsinurlUSnoAddress1Page.validateUserEmailValue();
    expect(UserEmail).toEqual("webtest6@darwin.cx");
    logger.info('Successfully verified the Email Address');
});

Then('Verify the New Page Country Value', async function () {
  this.NewparamsinurlUSnoAddress1Page = await this.pomManager.getNewparamsinurlUSnoAddress1Page();
    const country = await this.NewparamsinurlUSnoAddress1Page.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('Successfully verified the country');
});

Then('Verify the New Page User Province', async function () {
   this.NewparamsinurlUSnoAddress1Page = await this.pomManager.getNewparamsinurlUSnoAddress1Page();
    const userProvince = await this.NewparamsinurlUSnoAddress1Page.validateUserProvinceValue();
    expect(userProvince).toEqual("Florida");
    logger.info('Successfully verified the city');
});


