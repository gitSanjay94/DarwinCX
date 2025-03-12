import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

Given('User opens URL CCB_CourageCAOrderBillMePage', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
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

Then('Verify the Blank First Name Value at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const firstName = await this.CCB_CourageCAOrderBillMePage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Last Name Value at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const lastName = await this.CCB_CourageCAOrderBillMePage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Comapnay Name Value at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const companyName = await this.CCB_CourageCAOrderBillMePage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});
Then('Verify the Blank Job Title Value at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const jobTitle = await this.CCB_CourageCAOrderBillMePage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Address1 Value at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const Address1 = await this.CCB_CourageCAOrderBillMePage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Address2 Value at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const Address2 = await this.CCB_CourageCAOrderBillMePage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const City = await this.CCB_CourageCAOrderBillMePage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const postalCode = await this.CCB_CourageCAOrderBillMePage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Email Address Value at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const email = await this.CCB_CourageCAOrderBillMePage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});
Then('Verify the Autorenew option is enabled or disabled', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const isChecked  = await this.CCB_CourageCAOrderBillMePage.validateAutorenewCheckbox();
    expect(isChecked).toBe(false);
    logger.info('Validated that Autorenew Chckobox is disabled at CSC_NewparamsinurlUSnoinfodisplayed Page')
});
Then('Verify the Country Value at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const country = await this.CCB_CourageCAOrderBillMePage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Select  User Province at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    const province = await this.CCB_CourageCAOrderBillMePage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Enter values in Mailing and Billing Address form at CCB_CourageCAOrderBillMePage Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    await this.CCB_CourageCAOrderBillMePage.fillMailingAndBillingAddress();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});
Then('Select Bill Me Later Payment Option', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    await this.CCB_CourageCAOrderBillMePage.selectBillMelaterRB();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

Then('Verify that Email Send to Recipient', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    await this.CCB_CourageCAOrderBillMePage.verifyEmailSentToSender();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});





