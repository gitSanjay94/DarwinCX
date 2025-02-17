import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCreditonCreditBillMeLater_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL Hoffman_CreditonBadCreditCard', async function () {
    try {
        await this.page.goto(FSMSE_HoffmanCreditonCreditBillMeLater_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Hoffman_CreditonBadCreditCard: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Select the Canada Country Available Subscription Option at Hoffman_CreditonBadCreditCard Page', async function () {
   this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Validate The Perfect Gift for the Deer Hunter text at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    let text = await this.Hoffman_CreditonBadCreditCardPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    let text = await this.Hoffman_CreditonBadCreditCardPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})

Then('Validate Order Summary text at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    let text = await this.Hoffman_CreditonBadCreditCardPage.validateOrderSummaryText();
    expect(text).toEqual('Order Summary');
    logger.info(`Text validation passed: 'Order Summary', received '${text}'`);
})

Then('Validate Free Gift To Donor text under order summary section at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    let text = await this.Hoffman_CreditonBadCreditCardPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    let text = await this.Hoffman_CreditonBadCreditCardPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})



When('Enter values in Mailing and Billing Address form for Hoffman_CreditonBadCreditCard', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.fillMailingBillingAddress();
    logger.info('Entered values in Mailing and Billing Address form for Hoffman_CreditonBadCreditCard');
})

When('Enter Candian values in Mailing and Billing Address form for Hoffman_CreditonBadCreditCard', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.fillMailingAndBillingAddressCA();
    logger.info('Entered Candian values in Mailing and Billing Address form for Hoffman_CreditonBadCreditCard');
})

When('Enter values in Mailing Address form for Hoffman_CreditonBadCreditCard', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for Hoffman_CreditonBadCreditCard');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})



Then('Verify the Blank First Name Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const firstName = await this.Hoffman_CreditonBadCreditCardPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the Hoffman_CreditonBadCreditCard Page.');
});

Then('Verify the Blank Last Name Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const lastName = await this.Hoffman_CreditonBadCreditCardPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the Hoffman_CreditonBadCreditCard Page.');
});

Then('Verify the Blank Comapnay Name Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const companyName = await this.Hoffman_CreditonBadCreditCardPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the Hoffman_CreditonBadCreditCard Page.');
});
Then('Verify the Blank Job Title Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const jobTitle = await this.Hoffman_CreditonBadCreditCardPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the Hoffman_CreditonBadCreditCard Page.');
});

Then('Verify the Blank Address1 Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const Address1 = await this.Hoffman_CreditonBadCreditCardPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the Hoffman_CreditonBadCreditCard Page.');
});

Then('Verify the Blank Address2 Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const Address2 = await this.Hoffman_CreditonBadCreditCardPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the Hoffman_CreditonBadCreditCard Page.');
});

Then('Verify the Blank City Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const City = await this.Hoffman_CreditonBadCreditCardPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the Hoffman_CreditonBadCreditCard Page.');
});

Then('Verify the Blank Postal Code Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const postalCode = await this.Hoffman_CreditonBadCreditCardPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the Hoffman_CreditonBadCreditCard Page.');
});

Then('Verify the Blank Email Address Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const email = await this.Hoffman_CreditonBadCreditCardPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the Hoffman_CreditonBadCreditCard Page.');
});


Then('Verify the Country Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const country = await this.Hoffman_CreditonBadCreditCardPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the Hoffman_CreditonBadCreditCard Page.');
});

Then('Verify the Select  User Province at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const province = await this.Hoffman_CreditonBadCreditCardPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  Hoffman_CreditonBadCreditCard Page.');
});


Then('Validate First Name Missing text under first name text field section at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const text = await this.Hoffman_CreditonBadCreditCardPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const text = await this.Hoffman_CreditonBadCreditCardPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const text = await this.Hoffman_CreditonBadCreditCardPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const text = await this.Hoffman_CreditonBadCreditCardPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const text = await this.Hoffman_CreditonBadCreditCardPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const text = await this.Hoffman_CreditonBadCreditCardPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const text = await this.Hoffman_CreditonBadCreditCardPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})




Then('The 1 Year Digital Archive Access checkbox should be visible at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const isVisible = await this.Hoffman_CreditonBadCreditCardPage.validateDigitalArchiveAccessText();
    expect(isVisible).toBe(true);
});

Then('Select 1 Year Digital Archive Access checkbox at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.selectDigitalArchiveAccessCB();
   
});


Then('Validate Tax Value at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const tax = await this.Hoffman_CreditonBadCreditCardPage.validateTaxValue();
    expect(tax).toBe('$0.35');
    
})

Then('Validate Tax Value at Hoffman_CreditonBadCreditCard Page for Different Mailing Address', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const tax = await this.Hoffman_CreditonBadCreditCardPage.validateTaxValue();
    expect(tax).toBe('$0.39');
    
})

Then('Validate Tax Value at Hoffman_CreditonBadCreditCard Page for Digital Only Offer & Different Mailing Address', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const tax = await this.Hoffman_CreditonBadCreditCardPage.validateTaxValue();
    expect(tax).toBe('$0.39');
    
})

Then('Validate Amount Before Order at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    this.beforeOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount Before Order at Hoffman_CreditonBadCreditCard Page for Different Mailing Address', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    this.beforeOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount Before Order at Hoffman_CreditonBadCreditCard Page for Digital Only Offer & Different Mailing Address', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    this.beforeOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(34.34);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})
Then('Validate Amount After Order at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    this.afterOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Validate Amount After Order at Hoffman_CreditonBadCreditCard Page with Different Mailing Address', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    this.afterOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Validate Amount After Order at Hoffman_CreditonBadCreditCard Pagefor Digital Only Offer & Different Mailing Address', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    this.afterOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.Hoffman_CreditonBadCreditCardPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(34.34);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})
Then('Select the Canada & Internation Offers Option at Hoffman_CreditonBadCreditCard Page', async function () {
   this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');
})

When('Check I have a different mailing address checkbox at Hoffman_CreditonBadCreditCard Page', async function () {

    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})

When('Enter values in Mailing Address form at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate Mailing Address text at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    const text = await this.Hoffman_CreditonBadCreditCardPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})



When('Enter values in Gift Recipient Mailing Address form for Order 1 at Hoffman_CreditonBadCreditCard Page ', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})

Then('Select Bill Me Later Payment Option at Hoffman_CreditonBadCreditCard Page', async function () {
    this.Hoffman_CreditonBadCreditCardPage = await this.pomManager.getHoffman_CreditonBadCreditCardPage();
    await this.Hoffman_CreditonBadCreditCardPage.selectBillMelaterRB();
    logger.info('Bill Me Later Payment Option has been Selected Successfully');
})