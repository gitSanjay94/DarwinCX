import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { B2NewparamsinurlCAallfieldsPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens B2NewparamsinurlCAallfields Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL + B2NewparamsinurlCAallfieldsPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the First Name Value at URL B2NewparamsinurlCAallfields Page', async function () {
    this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const firstName = await this.B2NewparamsinurlCAallfieldsPage.validateUserFirstNameValue();
    expect(firstName).toEqual("jonathan");
    logger.info('The First Name value "jonathan" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Last Name Value at URL B2NewparamsinurlCAallfields Page', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const lastName = await this.B2NewparamsinurlCAallfieldsPage.validateUserLastNameValue();
    expect(lastName).toEqual("kok");
    logger.info('The Last Name value "kok" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank Comapnay Name Value at URL B2NewparamsinurlCAallfields Page', async function () {
 this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const companyName = await this.B2NewparamsinurlCAallfieldsPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});
Then('Verify the Blank Job Title Value at URL B2NewparamsinurlCAallfields Page', async function () {
  this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const jobTitle = await this.B2NewparamsinurlCAallfieldsPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Address1 Value at URL B2NewparamsinurlCAallfields Page', async function () {
 this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const Address1 = await this.B2NewparamsinurlCAallfieldsPage.validateUserAddress1Value();
    expect(Address1).toEqual("282 Dunview Ave");
    logger.info('The Address1 value "282 Dunview Ave" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Address2 Value at URL B2NewparamsinurlCAallfields Page', async function () {
 this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const Address2 = await this.B2NewparamsinurlCAallfieldsPage.validateUserAddress2Value();
    expect(Address2).toEqual("45");
    logger.info('The Address2 value"45" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the City Value at URL B2NewparamsinurlCAallfields Page', async function () {
    this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const City = await this.B2NewparamsinurlCAallfieldsPage.validateUserCityValue();
    expect(City).toEqual("Toronto");
    logger.info('The City value "Toronto" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Postal Code Value at URL B2NewparamsinurlCAallfields Page', async function () {
    this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const postalCode = await this.B2NewparamsinurlCAallfieldsPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("M2N4J5");
    logger.info('The postal code value "M2N4J5" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Email Address Value at URL B2NewparamsinurlCAallfields Page', async function () {
    this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const email = await this.B2NewparamsinurlCAallfieldsPage.validateUserEmailValue();
    expect(email).toEqual("jonathan@darwin.cx");
    logger.info('The email value "jonathan@darwin.cx" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});


Then('Verify the Country Value at URL B2NewparamsinurlCAallfields Page', async function () {
    this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const country = await this.B2NewparamsinurlCAallfieldsPage.validateUserCountryValue();
    expect(country).toEqual("Canada");
    logger.info('The country value "Canada" has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the User Province at URL B2NewparamsinurlCAallfields Page', async function () {
    this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    const province = await this.B2NewparamsinurlCAallfieldsPage.validateUserProvinceValue();
    expect(province).toEqual("Ontario");
    logger.info('The province value "Ontario" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Unselect the Country Value from Country Drop down at URL A2PopulatedOrderwithPayment Page', async function () {
    this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.unSelecttheCountryValue();
    logger.info('Unselected the country value from country drop down');
});

Then('Fill the Payment Details', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.fillCorrectPaymentDetails();
    logger.info('Filled the credit card details');
});







Then('Click on Pay Order link Button at URL B2NewparamsinurlCAallfields Page', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.clickPlaceOrderButton();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the alert message for product unavailable in Canada country at URL B2NewparamsinurlCAallfields Page', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    let text = await this.B2NewparamsinurlCAallfieldsPage.validateProductUnavailableText();
    expect(text).toEqual('Product is unavailable in selected country');
    logger.info('Validated "Product is unavailable in selected country" text');
});

Then('Select the Canada Country Available Subscription Option', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.selectCountrySpecificSubscription();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the Successful Transaction Message', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    let text = await this.B2NewparamsinurlCAallfieldsPage.validateTransactionSuccessfulMsg();
    expect(text).toEqual('TRANSACTION SUCCESSFUL');
    logger.info('Validated "TRANSACTION SUCCESSFUL" Message');
});

Then('Select Product PB1134 US Specific Subscription', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.selectProductPB1134RBUSSpecificSubscription();
    logger.info('Product PB1134 US Specific Subscription selected successfully.');
});

Then('Select Product PB1135 US Specific Subscription', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.selectProductPB1135RBUSSpecificSubscription();
    logger.info('Product PB1135 US Specific Subscription selected successfully.');
});

Then('Select Product PB1137 CA Specific Subscription', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.selectProductPB1137RBCASpecificSubscription();
    logger.info('Product PB1137 CA Specific Subscription selected successfully.');
});

Then('Select Product PB1138 INT Specific Subscription', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.selectProductPB1138RBINTSpecificSubscription();
    logger.info('Product PB1138 INT Specific Subscription selected successfully.');
});

Then('Select Product PB1139 INT Specific Subscription', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.selectProductPB1139RBINTSpecificSubscription();
    logger.info('Product PB1139 INT Specific Subscription selected successfully.');
});

Then('Select Product PB1343 US Specific Subscription', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.selectProductPB1343RBUSSpecificSubscription();
    logger.info('Product PB1343 US Specific Subscription selected successfully.');
});

Then('Select Product PB1042 Donation Specific Subscription', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.selectProductPB1042RBDonationSpecificSubscription();
    logger.info('Product PB1042 Donation Specific Subscription selected successfully.');
});

Then('Select Product PB1529 1 Year Digital Specific Subscription', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.selectProductPB1529RB1YearDigitalSpecificSubscription();
    logger.info('Product PB1529 1 Year Digital Specific Subscription selected successfully.');
});

Then('Select Product PB1530 2 Year Digital Specific Subscription', async function () {
   this.B2NewparamsinurlCAallfieldsPage = await this.pomManager.getB2NewparamsinurlCAallfieldsPage();
    await this.B2NewparamsinurlCAallfieldsPage.selectProductPB1530RB2YearDigitalSpecificSubscription();
    logger.info('Product PB1530 2 Year Digital Specific Subscription selected successfully.');
});

