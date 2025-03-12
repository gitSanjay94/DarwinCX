import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT } from '../../../../src/constants';


Then('Validate The Perfect Gift for the Deer Hunter text at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    let text = await this.Hoffman_USPrintWithNoUpsellPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    let text = await this.Hoffman_USPrintWithNoUpsellPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})



Then('Validate Free Gift To Donor text under order summary section at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    let text = await this.Hoffman_USPrintWithNoUpsellPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    let text = await this.Hoffman_USPrintWithNoUpsellPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})


When('Enter values in Mailing Address form for Hoffman_USPrintWithNoUpsellPage', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for Hoffman_USPrintWithNoUpsellPage');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})

Then('Verify the Blank First Name Value at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const firstName = await this.Hoffman_USPrintWithNoUpsellPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the Hoffman_USPrintWithNoUpsell Page.');
});

Then('Verify the Blank Last Name Value at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const lastName = await this.Hoffman_USPrintWithNoUpsellPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the Hoffman_USPrintWithNoUpsell Page.');
});

Then('Verify the Blank Comapnay Name Value at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const companyName = await this.Hoffman_USPrintWithNoUpsellPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the Hoffman_USPrintWithNoUpsell Page.');
});
Then('Verify the Blank Job Title Value at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const jobTitle = await this.Hoffman_USPrintWithNoUpsellPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the Hoffman_USPrintWithNoUpsell Page.');
});

Then('Verify the Blank Address1 Value at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const Address1 = await this.Hoffman_USPrintWithNoUpsellPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the Hoffman_USPrintWithNoUpsell Page.');
});

Then('Verify the Blank Address2 Value at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const Address2 = await this.Hoffman_USPrintWithNoUpsellPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the Hoffman_USPrintWithNoUpsell Page.');
});

Then('Verify the Blank City Value at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const City = await this.Hoffman_USPrintWithNoUpsellPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the Hoffman_USPrintWithNoUpsell Page.');
});

Then('Verify the Blank Postal Code Value at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const postalCode = await this.Hoffman_USPrintWithNoUpsellPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the Hoffman_USPrintWithNoUpsell Page.');
});

Then('Verify the Blank Email Address Value at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const email = await this.Hoffman_USPrintWithNoUpsellPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the Hoffman_USPrintWithNoUpsell Page.');
});


Then('Verify the Country Value at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const country = await this.Hoffman_USPrintWithNoUpsellPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the Hoffman_USPrintWithNoUpsell Page.');
});

Then('Verify the Select  User Province at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const province = await this.Hoffman_USPrintWithNoUpsellPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  Hoffman_USPrintWithNoUpsell Page.');
});


Then('Validate First Name Missing text under first name text field section at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const text = await this.Hoffman_USPrintWithNoUpsellPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const text = await this.Hoffman_USPrintWithNoUpsellPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const text = await this.Hoffman_USPrintWithNoUpsellPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const text = await this.Hoffman_USPrintWithNoUpsellPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const text = await this.Hoffman_USPrintWithNoUpsellPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const text = await this.Hoffman_USPrintWithNoUpsellPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const text = await this.Hoffman_USPrintWithNoUpsellPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})



Then('The 1 Year Print Archive Access checkbox should not be visible', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    const isVisible = await this.Hoffman_USPrintWithNoUpsellPage.validatePrintArchiveAccessText();
    expect(isVisible).toBe(false);
});


Then('Select the Canada Country Available Subscription Option at Hoffman_USPrintWithNoUpsell Page', async function () {
   this.getgetHoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Select the US Country Available Subscription Option at Hoffman_USPrintWithNoUpsell Page', async function () {
   this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.selectUSOfferPrintOnly();
    logger.info('US Country specific subscription selected');
})

Then('Select the Canada Country Available Subscription 6 issues print only at Hoffman_USPrintWithNoUpsell Page', async function () {
   this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.selectCANOfferPrintOnly();
    logger.info('Canda specific subscription selected');
})


Then('Select the Canada & Internation Offers Option at Hoffman_USPrintWithNoUpsell Page', async function () {
   this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');

})


Then('Validate Order Summary text at Hoffman_INTPrintWithUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithUpsellPage();
    let text = await this.Hoffman_INTPrintWithUpsellPage.validateOrderSummaryText();
    expect(text).toEqual('Order Summary');
    logger.info(`Text validation passed: 'Order Summary', received '${text}'`);
})

Then('Validate Mailing and Billing Address text at ', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateMailingAndBillingAddressText();
    expect(text).toEqual('Mailing and Billing Address');
    logger.info('The text "Mailing and Billing Address" successfully validated');
})

When('Enter Candian values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.fillMailingAndBillingAddressCA();
    logger.info('Entered Candian values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell');
})

When('Enter Internation country values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.fillMailingAndBillingAddressINT();
    logger.info('Entered International values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell');
})

Then('Validate Amount Before Order at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    this.beforeOrderAmount = await this.Hoffman_USPrintWithNoUpsellPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.Hoffman_USPrintWithNoUpsellPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(39.95);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount After Order at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    this.afterOrderAmount = await this.Hoffman_USPrintWithNoUpsellPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.Hoffman_USPrintWithNoUpsellPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(39.95);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

When('Check I have a different mailing address checkbox at Hoffman_USPrintWithNoUpsell Page', async function () {

    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})


Then('Select the Country Value from Billing County Drop Down at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.selectCountyBillingDropDown();
   
})

When('Enter values in Mailing Address form at Hoffman_USPrintWithNoUpsell Page', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})


When('Enter US country values in Mailing and Billing Address form for Hoffman_USPrintWithNoUpsell', async function () {
    this.Hoffman_USPrintWithNoUpsellPage = await this.pomManager.getHoffman_USPrintWithNoUpsellPage();
    await this.Hoffman_USPrintWithNoUpsellPage.fillMailingAndBillingAddress();
    logger.info('Entered International values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell');
})
