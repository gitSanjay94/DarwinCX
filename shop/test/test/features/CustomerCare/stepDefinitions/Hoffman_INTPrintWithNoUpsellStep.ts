import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT } from '../../../../src/constants';


Then('Validate The Perfect Gift for the Deer Hunter text at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    let text = await this.Hoffman_INTPrintWithNoUpsellPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    let text = await this.Hoffman_INTPrintWithNoUpsellPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})



Then('Validate Free Gift To Donor text under order summary section at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    let text = await this.Hoffman_INTPrintWithNoUpsellPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    let text = await this.Hoffman_INTPrintWithNoUpsellPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})


When('Enter values in Mailing Address form for Hoffman_INTPrintWithNoUpsellPage', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for Hoffman_INTPrintWithNoUpsellPage');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})

Then('Verify the Blank First Name Value at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const firstName = await this.Hoffman_INTPrintWithNoUpsellPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the Hoffman_INTPrintWithNoUpsell Page.');
});

Then('Verify the Blank Last Name Value at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const lastName = await this.Hoffman_INTPrintWithNoUpsellPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the Hoffman_INTPrintWithNoUpsell Page.');
});

Then('Verify the Blank Comapnay Name Value at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const companyName = await this.Hoffman_INTPrintWithNoUpsellPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the Hoffman_INTPrintWithNoUpsell Page.');
});
Then('Verify the Blank Job Title Value at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const jobTitle = await this.Hoffman_INTPrintWithNoUpsellPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the Hoffman_INTPrintWithNoUpsell Page.');
});

Then('Verify the Blank Address1 Value at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const Address1 = await this.Hoffman_INTPrintWithNoUpsellPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the Hoffman_INTPrintWithNoUpsell Page.');
});

Then('Verify the Blank Address2 Value at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const Address2 = await this.Hoffman_INTPrintWithNoUpsellPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the Hoffman_INTPrintWithNoUpsell Page.');
});

Then('Verify the Blank City Value at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const City = await this.Hoffman_INTPrintWithNoUpsellPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the Hoffman_INTPrintWithNoUpsell Page.');
});

Then('Verify the Blank Postal Code Value at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const postalCode = await this.Hoffman_INTPrintWithNoUpsellPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the Hoffman_INTPrintWithNoUpsell Page.');
});

Then('Verify the Blank Email Address Value at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const email = await this.Hoffman_INTPrintWithNoUpsellPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the Hoffman_INTPrintWithNoUpsell Page.');
});


Then('Verify the Country Value at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const country = await this.Hoffman_INTPrintWithNoUpsellPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the Hoffman_INTPrintWithNoUpsell Page.');
});

Then('Verify the Select  User Province at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const province = await this.Hoffman_INTPrintWithNoUpsellPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  Hoffman_INTPrintWithNoUpsell Page.');
});


Then('Validate First Name Missing text under first name text field section at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const text = await this.Hoffman_INTPrintWithNoUpsellPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const text = await this.Hoffman_INTPrintWithNoUpsellPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const text = await this.Hoffman_INTPrintWithNoUpsellPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const text = await this.Hoffman_INTPrintWithNoUpsellPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const text = await this.Hoffman_INTPrintWithNoUpsellPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const text = await this.Hoffman_INTPrintWithNoUpsellPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const text = await this.Hoffman_INTPrintWithNoUpsellPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})



Then('The 1 Year Print Archive Access checkbox should not be visible', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    const isVisible = await this.Hoffman_INTPrintWithNoUpsellPage.validatePrintArchiveAccessText();
    expect(isVisible).toBe(false);
});


Then('Select the Canada Country Available Subscription Option at Hoffman_INTPrintWithNoUpsell Page', async function () {
   this.getgetHoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Select the International Country Available Subscription Option at Hoffman_INTPrintWithNoUpsell Page', async function () {
   this.getgetHoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.selectINTOfferPrintOnly();
    logger.info('Intenational Country specific subscription selected');
})

Then('Select the Canada Country Available Subscription 6 issues print only at Hoffman_INTPrintWithNoUpsell Page', async function () {
   this.getgetHoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.selectCANOfferPrintOnly();
    logger.info('Canda specific subscription selected');
})


Then('Select the Canada & Internation Offers Option at Hoffman_INTPrintWithNoUpsell Page', async function () {
   this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');

})


Then('Validate Order Summary text at Hoffman_INTPrintWithUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithUpsellPage();
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
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.fillMailingAndBillingAddressCA();
    logger.info('Entered Candian values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell');
})



Then('Validate Amount Before Order at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    this.beforeOrderAmount = await this.Hoffman_INTPrintWithNoUpsellPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.Hoffman_INTPrintWithNoUpsellPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(59.95);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount After Order at Hoffman_INTPrintWithNoUpsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    this.afterOrderAmount = await this.Hoffman_INTPrintWithNoUpsellPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.Hoffman_INTPrintWithNoUpsellPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(59.95);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

When('Check I have a different mailing address checkbox at Hoffman_INTPrintWithNoUPsell Page', async function () {

    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})


Then('Select the Country Value from Billing County Drop Down at Hoffman_INTPrintWithNoUPsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.selectCountyBillingDropDown();
   
})

When('Enter values in Mailing Address form at Hoffman_INTPrintWithNoUPsell Page', async function () {
    this.Hoffman_INTPrintWithNoUpsellPage = await this.pomManager.getHoffman_INTPrintWithNoUpsellPage();
    await this.Hoffman_INTPrintWithNoUpsellPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

