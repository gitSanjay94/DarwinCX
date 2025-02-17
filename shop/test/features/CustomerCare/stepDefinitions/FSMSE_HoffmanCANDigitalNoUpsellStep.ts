import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT } from '../../../../src/constants';


Then('Validate The Perfect Gift for the Deer Hunter text at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    let text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    let text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})

Then('Validate Summary text at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    let text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateSummaryText();
    expect(text).toEqual('Summary');
    logger.info(`Text validation passed: 'Summary', received '${text}'`);
})

Then('Validate Free Gift To Donor text under order summary section at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    let text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    let text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})


When('Enter values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalNoUpsell', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    await this.FSMSE_HoffmanCANDigitalNoUpsellPage.fillMailingBillingAddress();
    logger.info('Entered values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalNoUpsell');
})

When('Enter values in Mailing Address form for FSMSE_HoffmanCANDigitalNoUpsell', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    await this.FSMSE_HoffmanCANDigitalNoUpsellPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for FSMSE_HoffmanCANDigitalNoUpsell');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    await this.FSMSE_HoffmanCANDigitalNoUpsellPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})

Then('Verify the Blank First Name Value at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const firstName = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the FSMSE_HoffmanCANDigitalNoUpsell Page.');
});

Then('Verify the Blank Last Name Value at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const lastName = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the FSMSE_HoffmanCANDigitalNoUpsell Page.');
});

Then('Verify the Blank Comapnay Name Value at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const companyName = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the FSMSE_HoffmanCANDigitalNoUpsell Page.');
});
Then('Verify the Blank Job Title Value at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const jobTitle = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the FSMSE_HoffmanCANDigitalNoUpsell Page.');
});

Then('Verify the Blank Address1 Value at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const Address1 = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the FSMSE_HoffmanCANDigitalNoUpsell Page.');
});

Then('Verify the Blank Address2 Value at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const Address2 = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the FSMSE_HoffmanCANDigitalNoUpsell Page.');
});

Then('Verify the Blank City Value at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const City = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the FSMSE_HoffmanCANDigitalNoUpsell Page.');
});

Then('Verify the Blank Postal Code Value at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const postalCode = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the FSMSE_HoffmanCANDigitalNoUpsell Page.');
});

Then('Verify the Blank Email Address Value at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const email = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the FSMSE_HoffmanCANDigitalNoUpsell Page.');
});


Then('Verify the Country Value at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const country = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the FSMSE_HoffmanCANDigitalNoUpsell Page.');
});

Then('Verify the Select  User Province at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const province = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  FSMSE_HoffmanCANDigitalNoUpsell Page.');
});


Then('Validate First Name Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at FSMSE_HoffmanCANDigitalNoUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    await this.FSMSE_HoffmanCANDigitalNoUpsellPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})



Then('The 1 Year Digital Archive Access checkbox should not be visible', async function () {
    this.FSMSE_HoffmanCANDigitalNoUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalNoUpsellPage();
    const isVisible = await this.FSMSE_HoffmanCANDigitalNoUpsellPage.validateDigitalArchiveAccessText();
    expect(isVisible).toBe(false);
});

Then('Select 6 Issues Print Only USoffer', async function () {
    this.Hoffman_CANDigitalNoUpsellPage = await this.pomManager.getHoffman_CANDigitalNoUpsellPage();
    this.Hoffman_CANDigitalNoUpsellPage.selectUSOfferPrintOnly();
    logger.info('6 Issues Print Only USoffer has been successfully Selected')
});