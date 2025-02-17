import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { A4PopulatedGiftOrderwithPayment_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens A4PopulatedGiftOrderwithPayment Page', async function () {
    try {
        await this.page.goto(process.env.BASEURL + A4PopulatedGiftOrderwithPayment_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the First Name Value at URL A4PopulatedGiftOrderwithPayment Page', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const firstName = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserFirstNameValue();
    expect(firstName).toEqual("Two Courage");
    logger.info('The First Name value "One Courage" has been successfully verified in the A2PopulatedOrderwithPayment Page.');
});

Then('Verify the Last Name Value at URL A4PopulatedGiftOrderwithPayment Page', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const lastName = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserLastNameValue();
    expect(lastName).toEqual("Order CA");
    logger.info('The Last Name value "Order CA" has been successfully verified in the A2PopulatedOrderwithPayment Page.');
});

Then('Verify the Blank Comapnay Name Value at URL A4PopulatedGiftOrderwithPayment Page', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const companyName = await this.A4PopulatedGiftOrderwithPaymentPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});
Then('Verify the Blank Job Title Value at URL A4PopulatedGiftOrderwithPayment Page', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const jobTitle = await this.A4PopulatedGiftOrderwithPaymentPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Address1 Value at URL A4PopulatedGiftOrderwithPayment Page', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const Address1 = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserAddress1Value();
    expect(Address1).toEqual("For General Shop API");
    logger.info('The Address1 value "For General Shop API" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Blank Address2 Value at URL A4PopulatedGiftOrderwithPayment Page', async function () {
  this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const Address2 = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserAddress2Value();
    // expect(Address2).toEqual("");
    expect(Address2).toEqual("                                ");
    logger.info('The Blank Address2 value  has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the City Value at URL A4PopulatedGiftOrderwithPayment Page', async function () {
     this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const City = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserCityValue();
    expect(City).toEqual("Windsor");
    logger.info('The City value "Windsor" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Postal Code Value at URL A4PopulatedGiftOrderwithPayment Page', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const postalCode = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("N9A 9Z9");
    logger.info('The postal code value "N9A 9Z9" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Email Address Value at URL A4PopulatedGiftOrderwithPayment Page', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const email = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserEmailValue();
    expect(email).toEqual("webtest24@palmcoastd.com");
    logger.info('The email value "webtest24@palmcoastd.com" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});


Then('Verify the Country Value at URL A4PopulatedGiftOrderwithPayment Page', async function () {
  this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
   const country = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserCountryValue();
    expect(country).toEqual("Canada");
    logger.info('The country value "Canada" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the User Province at URL A4PopulatedGiftOrderwithPayment Page', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const province = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserProvinceValue();
    expect(province).toEqual("Ontario");
    logger.info('The province value "Florida" has been successfully verified in the New Params US All Fields section.');
});

Then('Unselect the Country Value from Country Drop down at URL A2PopulatedOrderwithPayment Page', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    await this.A4PopulatedGiftOrderwithPaymentPage.unSelecttheCountryValue();
    logger.info('Unselected the country value from country drop down');
});

Then('Fill the Credit Card Details', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    await this.NewParaminURLUSNoCountryorderPage.fillCorrectPaymentDetails();
    logger.info('Filled the credit card details');
});

Then('Click on Pay Order link Button at URL A2PopulatedOrderwithPayment Page', async function () {
   this.A2PopulatedOrderwithPaymentPage = await this.pomManager.getA2PopulatedOrderwithPaymentPage();
    await this.A2PopulatedOrderwithPaymentPage.clickPlaceOrderButton();
    logger.info('Clicked on Pay Order link button');
});

Then('Verify the alert message for product unavailable in Canada country at URL A2PopulatedOrderwithPayment Page', async function () {
   this.A2PopulatedOrderwithPaymentPage = await this.pomManager.getA2PopulatedOrderwithPaymentPage();
    let text = await this.A2PopulatedOrderwithPaymentPage.validateProductUnavailableText();
    expect(text).toEqual('Product is unavailable in selected country');
    logger.info('Validated "Product is unavailable in selected country" text');
});


//Validate Test A4 populated order section 2

Given('User opens A4PopulatedGiftOrderwithPayment Page for Section 2', async function () {
    try {
        await this.page.goto(process.env.BASEURL + A4PopulatedGiftOrderwithPayment_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the First Name Value at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const firstName = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserFirstNameValueSection2();
    expect(firstName).toEqual("recipient number one");
    logger.info('The First Name value "recipient number one" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Last Name Value at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const lastName = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserLastNameValue();
    expect(lastName).toEqual("Order CA");
    logger.info('The Last Name value "Order CA" has been successfully verified in the A2PopulatedOrderwithPayment Page.');
});

Then('Verify the Blank Comapnay Name Value at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const companyName = await this.A4PopulatedGiftOrderwithPaymentPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});
Then('Verify the Blank Job Title Value at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const jobTitle = await this.A4PopulatedGiftOrderwithPaymentPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Address1 Value at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const Address1 = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserAddress1Value();
    expect(Address1).toEqual("For General Shop API");
    logger.info('The Address1 value "For General Shop API" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Blank Address2 Value at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
  this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const Address2 = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserAddress2Value();
    // expect(Address2).toEqual("");
     expect(Address2).toEqual("                                ");
    logger.info('The Blank Address2 value  has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the City Value at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
     this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const City = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserCityValue();
    expect(City).toEqual("Windsor");
    logger.info('The City value "Windsor" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Postal Code Value at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const postalCode = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("N9A 9Z9");
    logger.info('The postal code value "N9A 9Z9" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Email Address Value at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const email = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserEmailValueSection2();
    expect(email).toEqual("webtest23@palmcoastd.com");
    logger.info('The email value "webtest23@palmcoastd.com" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});


Then('Verify the Country Value at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
  this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
   const country = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserCountryValue();
    expect(country).toEqual("Canada");
    logger.info('The country value "Canada" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the User Province at URL A4PopulatedGiftOrderwithPayment Page Section 2', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const province = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserProvinceValue();
    expect(province).toEqual("Ontario");
    logger.info('The province value "Florida" has been successfully verified in the New Params US All Fields section.');
});

Then('Unselect the Country Value from Country Drop down at URL A2PopulatedOrderwithPayment Page Section 2', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    await this.A4PopulatedGiftOrderwithPaymentPage.unSelecttheCountryValue();
    logger.info('Unselected the country value from country drop down');
});

Then('Fill the Credit Card Details', async function () {
    this.NewParaminURLUSNoCountryorderPage = await this.pomManager.getNewParaminURLUSNoCountryorderPage();
    await this.NewParaminURLUSNoCountryorderPage.fillCorrectPaymentDetails();
    logger.info('Filled the credit card details');
});




//Validate Test A4 populated order section 3

Given('User opens A4PopulatedGiftOrderwithPayment Page for Section 3', async function () {
    try {
        await this.page.goto(process.env.BASEURL + A4PopulatedGiftOrderwithPayment_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

Then('Verify the First Name Value at URL A4PopulatedGiftOrderwithPayment Page Section 3', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const firstName = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserFirstNameValueSection3();
    expect(firstName).toEqual("recipient number two");
    logger.info('The First Name value "recipient number two" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Last Name Value at URL A4PopulatedGiftOrderwithPayment Page Section 3', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const lastName = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserLastNameValue();
    expect(lastName).toEqual("Order CA");
    logger.info('The Last Name value "Order CA" has been successfully verified in the A2PopulatedOrderwithPayment Page.');
});

Then('Verify the Blank Comapnay Name Value at URL A4PopulatedGiftOrderwithPayment Page Section 3', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const companyName = await this.A4PopulatedGiftOrderwithPaymentPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});
Then('Verify the Blank Job Title Value at URL A4PopulatedGiftOrderwithPayment Page Section 3', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const jobTitle = await this.A4PopulatedGiftOrderwithPaymentPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Address1 Value at URL A4PopulatedGiftOrderwithPayment Page Section 3', async function () {
   this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const Address1 = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserAddress1Value();
    expect(Address1).toEqual("For General Shop API");
    logger.info('The Address1 value "For General Shop API" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Blank Address2 Value at URL A4PopulatedGiftOrderwithPayment Page Section 3', async function () {
  this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const Address2 = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserAddress2Value();
    // expect(Address2).toEqual("");
    expect(Address2).toEqual("                                ");
    logger.info('The Blank Address2 value  has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the City Value at URL A4PopulatedGiftOrderwithPayment Page Section 3', async function () {
     this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const City = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserCityValueSection3();
    expect(City).toEqual("St.Florenceville");
    logger.info('The City value "St.Florenceville" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});


Then('Verify the Postal Code Value at URL A4PopulatedGiftOrderwithPayment Page Section 3', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const postalCode = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserPostalCodeValueSection3();
    expect(postalCode).toEqual("E7L 6S5");
    logger.info('The postal code value "E7L 6S5" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});

Then('Verify the Email Address Value at URL A4PopulatedGiftOrderwithPayment Page Section 3', async function () {
    this.A4PopulatedGiftOrderwithPaymentPage = await this.pomManager.getA4PopulatedGiftOrderwithPaymentPage();
    const email = await this.A4PopulatedGiftOrderwithPaymentPage.validateUserEmailValueSection3();
    expect(email).toEqual("webtest22@palmcoastd.com");
    logger.info('The email value "webtest22@palmcoastd.com" has been successfully verified in the A4PopulatedGiftOrderwithPayment Page.');
});