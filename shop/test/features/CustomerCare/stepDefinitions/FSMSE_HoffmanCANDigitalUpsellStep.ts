import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL FSMSE_HoffmanCANDigital', async function () {
    try {
        await this.page.goto(FSMSE_HoffmanCANDigital_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMSE_HoffmanCANDigital: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Select the Canada Country Available Subscription Option at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
   this.getFSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    await this.getFSMSE_HoffmanCANDigitalUpsellPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Select the Canada Country Available Subscription 6 issues print only at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
   this.getFSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    await this.getFSMSE_HoffmanCANDigitalUpsellPage.selectCANOfferPrintOnly();
    logger.info('Canda specific subscription selected');
})

Then('Validate The Perfect Gift for the Deer Hunter text at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    let text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    let text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})

Then('Validate Summary text at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    let text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateSummaryText();
    expect(text).toEqual('Summary');
    logger.info(`Text validation passed: 'Summary', received '${text}'`);
})

Then('Validate Free Gift To Donor text under order summary section at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    let text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    let text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})

When('Enter values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalUpsell', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    await this.FSMSE_HoffmanCANDigitalUpsellPage.fillMailingBillingAddress();
    logger.info('Entered values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalUpsell');
})

When('Enter Candian values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalUpsell', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    await this.FSMSE_HoffmanCANDigitalUpsellPage.fillMailingAndBillingAddressCA();
    logger.info('Entered Candian values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalUpsell');
})

When('Enter values in Mailing Address form for FSMSE_HoffmanCANDigitalUpsell', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    await this.FSMSE_HoffmanCANDigitalUpsellPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for FSMSE_HoffmanCANDigitalUpsell');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    await this.FSMSE_HoffmanCANDigitalUpsellPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})


Then('Verify the Blank First Name Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const firstName = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the FSMSE_HoffmanCANDigitalUpsell Page.');
});

Then('Verify the Blank Last Name Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const lastName = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the FSMSE_HoffmanCANDigitalUpsell Page.');
});

Then('Verify the Blank Comapnay Name Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const companyName = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the FSMSE_HoffmanCANDigitalUpsell Page.');
});
Then('Verify the Blank Job Title Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const jobTitle = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the FSMSE_HoffmanCANDigitalUpsell Page.');
});

Then('Verify the Blank Address1 Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const Address1 = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the FSMSE_HoffmanCANDigitalUpsell Page.');
});

Then('Verify the Blank Address2 Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const Address2 = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the FSMSE_HoffmanCANDigitalUpsell Page.');
});

Then('Verify the Blank City Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const City = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the FSMSE_HoffmanCANDigitalUpsell Page.');
});

Then('Verify the Blank Postal Code Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const postalCode = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the FSMSE_HoffmanCANDigitalUpsell Page.');
});

Then('Verify the Blank Email Address Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const email = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the FSMSE_HoffmanCANDigitalUpsell Page.');
});


Then('Verify the Country Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const country = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the FSMSE_HoffmanCANDigitalUpsell Page.');
});

Then('Verify the Select  User Province at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const province = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  FSMSE_HoffmanCANDigitalUpsell Page.');
});


Then('Validate First Name Missing text under first name text field section at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const text = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    await this.FSMSE_HoffmanCANDigitalUpsellPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})

Then('The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const isVisible = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateDigitalArchiveAccessText();
    expect(isVisible).toBe(true);
});

Then('Select 1 Year Digital Archive Access checkbox at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    await this.FSMSE_HoffmanCANDigitalUpsellPage.selectDigitalArchiveAccessCB();
   
});

Then('Validate Tax Value at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    const tax = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateTaxValue();
    expect(tax).toBe('$0.00');
    
})

Then('Validate Amount Before Order at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(54.95);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
    this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanCANDigitalUpsellPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(54.95);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Select the Canada & Internation Offers Option at FSMSE_HoffmanCANDigitalUpsell Page', async function () {
   this.FSMSE_HoffmanCANDigitalUpsellPage = await this.pomManager.getFSMSE_HoffmanCANDigitalUpsellPage();
    await this.FSMSE_HoffmanCANDigitalUpsellPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');
})