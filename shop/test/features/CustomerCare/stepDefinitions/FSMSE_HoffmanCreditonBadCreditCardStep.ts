import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCreditonCreditBillMeLater_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL FSMSE_HoffmanCreditonBadCreditCard', async function () {
    try {
        await this.page.goto(FSMSE_HoffmanCreditonCreditBillMeLater_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMSE_HoffmanCreditonBadCreditCard: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Select the Canada Country Available Subscription Option at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
   this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Validate The Perfect Gift for the Deer Hunter text at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    let text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    let text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})

Then('Validate Order Summary text at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    let text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateOrderSummaryText();
    expect(text).toEqual('Order Summary');
    logger.info(`Text validation passed: 'Order Summary', received '${text}'`);
})

Then('Validate Free Gift To Donor text under order summary section at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    let text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    let text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})



When('Enter values in Mailing and Billing Address form for FSMSE_HoffmanCreditonBadCreditCard', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.fillMailingBillingAddress();
    logger.info('Entered values in Mailing and Billing Address form for FSMSE_HoffmanCreditonBadCreditCard');
})

When('Enter Candian values in Mailing and Billing Address form for FSMSE_HoffmanCreditonBadCreditCard', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.fillMailingAndBillingAddressCA();
    logger.info('Entered Candian values in Mailing and Billing Address form for FSMSE_HoffmanCreditonBadCreditCard');
})

When('Enter values in Mailing Address form for FSMSE_HoffmanCreditonBadCreditCard', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for FSMSE_HoffmanCreditonBadCreditCard');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})



Then('Verify the Blank First Name Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const firstName = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the FSMSE_HoffmanCreditonBadCreditCard Page.');
});

Then('Verify the Blank Last Name Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const lastName = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the FSMSE_HoffmanCreditonBadCreditCard Page.');
});

Then('Verify the Blank Comapnay Name Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const companyName = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the FSMSE_HoffmanCreditonBadCreditCard Page.');
});
Then('Verify the Blank Job Title Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const jobTitle = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the FSMSE_HoffmanCreditonBadCreditCard Page.');
});

Then('Verify the Blank Address1 Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const Address1 = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the FSMSE_HoffmanCreditonBadCreditCard Page.');
});

Then('Verify the Blank Address2 Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const Address2 = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the FSMSE_HoffmanCreditonBadCreditCard Page.');
});

Then('Verify the Blank City Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const City = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the FSMSE_HoffmanCreditonBadCreditCard Page.');
});

Then('Verify the Blank Postal Code Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const postalCode = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the FSMSE_HoffmanCreditonBadCreditCard Page.');
});

Then('Verify the Blank Email Address Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const email = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the FSMSE_HoffmanCreditonBadCreditCard Page.');
});


Then('Verify the Country Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const country = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the FSMSE_HoffmanCreditonBadCreditCard Page.');
});

Then('Verify the Select  User Province at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const province = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  FSMSE_HoffmanCreditonBadCreditCard Page.');
});


Then('Validate First Name Missing text under first name text field section at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})


Then('Select 6 Issues Digital Only USoffer',async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    this.FSMSE_HoffmanCreditonBadCreditCardPage.selectUSOfferDigitalOnly();
    logger.info('6 Issues Digital Only USoffer has been successfully Selected')
   });

Then('The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const isVisible = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateDigitalArchiveAccessText();
    expect(isVisible).toBe(true);
});

Then('Select 1 Year Digital Archive Access checkbox at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.selectDigitalArchiveAccessCB();
   
});


Then('Validate Tax Value at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const tax = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateTaxValue();
    expect(tax).toBe('$0.35');
    
})

Then('Validate Tax Value at FSMSE_HoffmanCreditonBadCreditCard Page for Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const tax = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateTaxValue();
    expect(tax).toBe('$0.39');
    
})

Then('Validate Tax Value at FSMSE_HoffmanCreditonBadCreditCard Page for Digital Only Offer & Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const tax = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateTaxValue();
    expect(tax).toBe('$0.39');
    
})

Then('Validate Amount Before Order at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount Before Order at FSMSE_HoffmanCreditonBadCreditCard Page for Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount Before Order at FSMSE_HoffmanCreditonBadCreditCard Page for Digital Only Offer & Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(34.34);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})
Then('Validate Amount After Order at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_HoffmanCreditonBadCreditCard Page with Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_HoffmanCreditonBadCreditCard Pagefor Digital Only Offer & Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(34.34);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})
Then('Select the Canada & Internation Offers Option at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
   this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');
})

When('Check I have a different mailing address checkbox at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {

    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})

When('Enter values in Mailing Address form at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate Mailing Address text at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    const text = await this.FSMSE_HoffmanCreditonBadCreditCardPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})

Then('Click Add Gift Recipient Chceck Box', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.clickGiftRecipientCB();
    logger.info('Gift Recipient Check Box has been Selected Successfully');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at FSMSE_HoffmanCreditonBadCreditCard Page ', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})

Then('Select Bill Me Later Payment Option at FSMSE_HoffmanCreditonBadCreditCard Page', async function () {
    this.FSMSE_HoffmanCreditonBadCreditCardPage = await this.pomManager.getFSMSE_HoffmanCreditonBadCreditCardPage();
    await this.FSMSE_HoffmanCreditonBadCreditCardPage.selectBillMelaterRB();
    logger.info('Bill Me Later Payment Option has been Selected Successfully');
})