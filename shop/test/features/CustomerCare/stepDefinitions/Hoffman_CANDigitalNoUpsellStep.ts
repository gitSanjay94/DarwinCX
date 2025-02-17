import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT } from '../../../../src/constants';


Then('Validate The Perfect Gift for the Deer Hunter text at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    let text = await this.Hoffman_CANDigitalNoUpsellPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    let text = await this.Hoffman_CANDigitalNoUpsellPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})



Then('Validate Free Gift To Donor text under order summary section at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    let text = await this.Hoffman_CANDigitalNoUpsellPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    let text = await this.Hoffman_CANDigitalNoUpsellPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})



When('Enter values in Mailing and Billing Address form for Hoffman_CANDigitalNoUpsell', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    await this.Hoffman_CANDigitalNoUpsellPage.fillMailingBillingAddress();
    logger.info('Entered values in Mailing and Billing Address form for Hoffman_CANDigitalNoUpsell');
})

When('Enter values in Mailing Address form for Hoffman_CANDigitalNoUpsell', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    await this.Hoffman_CANDigitalNoUpsellPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for Hoffman_CANDigitalNoUpsell');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    await this.Hoffman_CANDigitalNoUpsellPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})

Then('Verify the Blank First Name Value at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const firstName = await this.Hoffman_CANDigitalNoUpsellPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the Hoffman_CANDigitalNoUpsell Page.');
});

Then('Verify the Blank Last Name Value at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const lastName = await this.Hoffman_CANDigitalNoUpsellPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the Hoffman_CANDigitalNoUpsell Page.');
});

Then('Verify the Blank Comapnay Name Value at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const companyName = await this.Hoffman_CANDigitalNoUpsellPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the Hoffman_CANDigitalNoUpsell Page.');
});
Then('Verify the Blank Job Title Value at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const jobTitle = await this.Hoffman_CANDigitalNoUpsellPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the Hoffman_CANDigitalNoUpsell Page.');
});

Then('Verify the Blank Address1 Value at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const Address1 = await this.Hoffman_CANDigitalNoUpsellPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the Hoffman_CANDigitalNoUpsell Page.');
});

Then('Verify the Blank Address2 Value at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const Address2 = await this.Hoffman_CANDigitalNoUpsellPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the Hoffman_CANDigitalNoUpsell Page.');
});

Then('Verify the Blank City Value at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const City = await this.Hoffman_CANDigitalNoUpsellPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the Hoffman_CANDigitalNoUpsell Page.');
});

Then('Verify the Blank Postal Code Value at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const postalCode = await this.Hoffman_CANDigitalNoUpsellPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the Hoffman_CANDigitalNoUpsell Page.');
});

Then('Verify the Blank Email Address Value at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const email = await this.Hoffman_CANDigitalNoUpsellPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the Hoffman_CANDigitalNoUpsell Page.');
});


Then('Verify the Country Value at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const country = await this.Hoffman_CANDigitalNoUpsellPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the Hoffman_CANDigitalNoUpsell Page.');
});

Then('Verify the Select  User Province at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const province = await this.Hoffman_CANDigitalNoUpsellPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  Hoffman_CANDigitalNoUpsell Page.');
});


Then('Validate First Name Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const text = await this.Hoffman_CANDigitalNoUpsellPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const text = await this.Hoffman_CANDigitalNoUpsellPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const text = await this.Hoffman_CANDigitalNoUpsellPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const text = await this.Hoffman_CANDigitalNoUpsellPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const text = await this.Hoffman_CANDigitalNoUpsellPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const text = await this.Hoffman_CANDigitalNoUpsellPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    const text = await this.Hoffman_CANDigitalNoUpsellPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    await this.Hoffman_CANDigitalNoUpsellPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})






Then('Select the Canada Country Available Subscription Option at Hoffman_CANDigitalNoUpsell Page', async function () {
   this.getHoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    await this.getHoffman_CANDigitalNoUpsellPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Select the Canada Country Available Subscription 6 issues print only at Hoffman_CANDigitalNoUpsell Page', async function () {
   this.getHoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    await this.getHoffman_CANDigitalNoUpsellPage.selectCANOfferPrintOnly();
    logger.info('Canda specific subscription selected');
})


Then('Select the Canada & Internation Offers Option at Hoffman_CANDigitalNoUpsell Page', async function () {
   this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    await this.Hoffman_CANDigitalNoUpsellPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');

})


Then('Validate Order Summary text at Hoffman_CANDigitalNoUpsell Page', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    let text = await this.Hoffman_CANDigitalNoUpsellPage.validateOrderSummaryText();
    expect(text).toEqual('Order Summary');
    logger.info(`Text validation passed: 'Order Summary', received '${text}'`);
})

Then('Validate Mailing and Billing Address text at ', async function () {
    this.CSC_CourageOrderSpecialCharsPage = await this.pomManager.getCSC_CourageOrderSpecialCharsPage();
    let text = await this.CSC_CourageOrderSpecialCharsPage.validateMailingAndBillingAddressText();
    expect(text).toEqual('Mailing and Billing Address');
    logger.info('The text "Mailing and Billing Address" successfully validated');
})

When('Enter Candian values in Mailing and Billing Address form for Hoffman_CANDigitalNoUpsell', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    await this.Hoffman_CANDigitalNoUpsellPage.fillMailingAndBillingAddressCA();
    logger.info('Entered Candian values in Mailing and Billing Address form for Hoffman_CANDigitalNoUpsell');
})


