import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT } from '../../../../src/constants';


Then('Select the Canada Country Available Subscription Option at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
   this.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    await this.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Validate The Perfect Gift for the Deer Hunter text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    let text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    let text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})

Then('Validate Summary text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    let text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateSummaryText();
    expect(text).toEqual('Summary');
    logger.info(`Text validation passed: 'Summary', received '${text}'`);
})

Then('Validate Free Gift To Donor text under order summary section at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    let text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    let text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})


When('Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.fillMailingBillingAddress();
    logger.info('Entered values in Mailing and Billing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES');
})

When('Enter Candian values in Mailing and Billing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.fillMailingAndBillingAddressCA();
    logger.info('Entered Candian values in Mailing and Billing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES');
})

When('Enter values in Mailing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})




Then('Verify the Blank First Name Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const firstName = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});

Then('Verify the Blank Last Name Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const lastName = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});

Then('Verify the Blank Comapnay Name Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const companyName = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});
Then('Verify the Blank Job Title Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const jobTitle = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});

Then('Verify the Blank Address1 Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const Address1 = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});

Then('Verify the Blank Address2 Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const Address2 = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});

Then('Verify the Blank City Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const City = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});

Then('Verify the Blank Postal Code Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const postalCode = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});

Then('Verify the Blank Email Address Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const email = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});


Then('Verify the Country Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const country = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});

Then('Verify the Select  User Province at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const province = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page.');
});


Then('Validate First Name Missing text under first name text field section at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})


// Then('Select 6 Issues Digital Only USoffer',async function () {
//     this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
//     this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.selectUSOfferDigitalOnly();
//     logger.info('6 Issues Digital Only USoffer has been successfully Selected')
//    });

Then('The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const isVisible = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateDigitalArchiveAccessText();
    expect(isVisible).toBe(true);
});

Then('Select 1 Year Digital Archive Access checkbox at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.selectDigitalArchiveAccessCB();
   
});

Then('Validate Tax Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const tax = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateTaxValue();
    expect(tax).toBe('$0.35');
    
})

Then('Validate Tax Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page for Different Mailing Address', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const tax = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateTaxValue();
    expect(tax).toBe('$0.00');
    
})

Then('Validate Tax Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page for Digital Only Offer & Different Mailing Address', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const tax = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateTaxValue();
    expect(tax).toBe('$0.00');
    
})

Then('Validate Amount Before Order at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(55.30);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount Before Order at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page for Different Mailing Address', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(54.95);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount Before Order at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page for Digital Only Offer & Different Mailing Address', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(33.95);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})
Then('Validate Amount After Order at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(55.30);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page with Different Mailing Address', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(54.95);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Pagefor Digital Only Offer & Different Mailing Address', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(33.95);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})
Then('Select the Canada & Internation Offers Option at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
   this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');
})

When('Check I have a different mailing address checkbox at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {

    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})

When('Enter values in Mailing Address form at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate Mailing Address text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page', async function () {
    this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage = await this.pomManager.getFSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage();
    const text = await this.FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})