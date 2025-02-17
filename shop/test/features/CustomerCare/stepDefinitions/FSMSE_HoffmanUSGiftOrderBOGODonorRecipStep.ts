import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT } from '../../../../src/constants';


Then('Select the Canada Country Available Subscription Option at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
   this.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    await this.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Validate The Perfect Gift for the Deer Hunter text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    let text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    let text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})

Then('Validate Summary text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    let text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateSummaryText();
    expect(text).toEqual('Summary');
    logger.info(`Text validation passed: 'Summary', received '${text}'`);
})

Then('Validate Free Gift To Donor text under order summary section at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    let text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    let text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})

When('Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.fillMailingBillingAddress();
    logger.info('Entered values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip');
})

When('Enter Candian values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.fillMailingAndBillingAddressCA();
    logger.info('Entered Candian values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip');
})

When('Enter values in Mailing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})



Then('Verify the Blank First Name Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const firstName = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});

Then('Verify the Blank Last Name Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const lastName = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});

Then('Verify the Blank Comapnay Name Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const companyName = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});
Then('Verify the Blank Job Title Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const jobTitle = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});

Then('Verify the Blank Address1 Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const Address1 = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});

Then('Verify the Blank Address2 Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const Address2 = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});

Then('Verify the Blank City Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const City = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});

Then('Verify the Blank Postal Code Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const postalCode = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});

Then('Verify the Blank Email Address Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const email = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});


Then('Verify the Country Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const country = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});

Then('Verify the Select  User Province at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const province = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page.');
});


Then('Validate First Name Missing text under first name text field section at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})

Then('The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const isVisible = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateDigitalArchiveAccessText();
    expect(isVisible).toBe(true);
});

Then('Select 1 Year Digital Archive Access checkbox at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.selectDigitalArchiveAccessCB();
   
});

Then('Validate Tax Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const tax = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateTaxValue();
    expect(tax).toBe('$0.00');
    
})

Then('Validate Tax Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page for Different Mailing Address', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const tax = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateTaxValue();
    expect(tax).toBe('$0.00');
    
})

Then('Validate Amount Before Order at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(54.95);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount Before Order at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page for Different Mailing Address', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(54.95);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(54.95);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page with Different Mailing Address', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(54.95);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})
Then('Select the Canada & Internation Offers Option at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
   this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');
})

When('Check I have a different mailing address checkbox at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {

    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})

When('Enter values in Mailing Address form at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate Mailing Address text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page', async function () {
    this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage = await this.pomManager.getFSMSE_HoffmanUSGiftOrderBOGODonorRecipPage();
    const text = await this.FSMSE_HoffmanUSGiftOrderBOGODonorRecipPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})