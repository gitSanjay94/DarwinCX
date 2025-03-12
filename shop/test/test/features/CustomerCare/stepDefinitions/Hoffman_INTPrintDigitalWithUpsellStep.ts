import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT } from '../../../../src/constants';


Then('Validate The Perfect Gift for the Deer Hunter text at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    let text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    let text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})



Then('Validate Free Gift To Donor text under order summary section at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    let text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    let text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})


When('Enter values in Mailing and Billing Address form for Hoffman_INTPrintDigitalWithUpsellPage', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.fillMailingBillingAddress();
    logger.info('Entered values in Mailing and Billing Address form for Hoffman_INTPrintDigitalWithUpsellPage');
})

When('Enter values in Mailing Address form for Hoffman_INTPrintDigitalWithUpsellPage', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for Hoffman_INTPrintDigitalWithUpsellPage');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})

Then('Verify the Blank First Name Value at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const firstName = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the Hoffman_INTPrintDigitalWithUpsell Page.');
});

Then('Verify the Blank Last Name Value at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const lastName = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the Hoffman_INTPrintDigitalWithUpsell Page.');
});

Then('Verify the Blank Comapnay Name Value at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const companyName = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the Hoffman_INTPrintDigitalWithUpsell Page.');
});
Then('Verify the Blank Job Title Value at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const jobTitle = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the Hoffman_INTPrintDigitalWithUpsell Page.');
});

Then('Verify the Blank Address1 Value at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const Address1 = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the Hoffman_INTPrintDigitalWithUpsell Page.');
});

Then('Verify the Blank Address2 Value at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const Address2 = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the Hoffman_INTPrintDigitalWithUpsell Page.');
});

Then('Verify the Blank City Value at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const City = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the Hoffman_INTPrintDigitalWithUpsell Page.');
});

Then('Verify the Blank Postal Code Value at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const postalCode = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the Hoffman_INTPrintDigitalWithUpsell Page.');
});

Then('Verify the Blank Email Address Value at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const email = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the Hoffman_INTPrintDigitalWithUpsell Page.');
});


Then('Verify the Country Value at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const country = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the Hoffman_INTPrintDigitalWithUpsell Page.');
});

Then('Verify the Select  User Province at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const province = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  Hoffman_INTPrintDigitalWithUpsell Page.');
});


Then('Validate First Name Missing text under first name text field section at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const text = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})



Then('The 1 Year Print Archive Access checkbox should not be visible', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const isVisible = await this.Hoffman_INTPrintDigitalWithUpsellPage.validatePrintArchiveAccessText();
    expect(isVisible).toBe(false);
});


Then('Select the Canada Country Available Subscription Option at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
   this.getgetHoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Select the International Country Available Subscription Option at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
   this.getgetHoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.selectINTOfferPrintDigitalOnly();
    logger.info('Intenational Country specific subscription selected');
})

Then('Select the Canada Country Available Subscription 6 issues print only at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
   this.getgetHoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.selectCANOfferPrintOnly();
    logger.info('Canda specific subscription selected');
})


Then('Select the Canada & Internation Offers Option at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
   this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');

})


Then('Validate Order Summary text at Hoffman_INTPrintWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintWithUpsellPage();
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
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.fillMailingAndBillingAddressCA();
    logger.info('Entered Candian values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell');
})

When('Enter International country values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.fillMailingAndBillingAddressINT();
    logger.info('Entered International values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell');
})

Then('Validate Amount Before Order at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    this.beforeOrderAmount = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(74.95);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount Before Order at Hoffman_INTPrintDigitalWithUpsell Page for Different Mailing Address', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    this.beforeOrderAmount = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(75.30);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount After Order at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    this.afterOrderAmount = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(74.95);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Validate Amount After Order at Hoffman_INTPrintDigitalWithUpsell Page for Different Mailing Address', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    this.afterOrderAmount = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(75.30);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

When('Check I have a different mailing address checkbox at Hoffman_INTPrintDigitalWithUpsell Page', async function () {

    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})


Then('Select the Country Value from Billing County Drop Down at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.selectCountyBillingDropDown();
   
})

When('Enter values in Mailing Address form at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('The 1 Year Digital Archive Access checkbox should be visible at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    const isVisible = await this.Hoffman_INTPrintDigitalWithUpsellPage.validateDigitalArchiveAccessText();
    expect(isVisible).toBe(true);
});

Then('Select 1 Year Digital Archive Access checkbox at Hoffman_INTPrintDigitalWithUpsell Page', async function () {
    this.Hoffman_INTPrintDigitalWithUpsellPage = await this.pomManager.getHoffman_INTPrintDigitalWithUpsellPage();
    await this.Hoffman_INTPrintDigitalWithUpsellPage.selectDigitalArchiveAccessCB();
   
});

