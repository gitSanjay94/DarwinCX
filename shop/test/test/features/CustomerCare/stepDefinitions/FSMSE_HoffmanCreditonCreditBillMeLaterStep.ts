import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_HoffmanCreditonCreditBillMeLater_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL FSMSE_HoffmanCreditonCreditBillMeLater', async function () {
    try {
        await this.page.goto(FSMSE_HoffmanCreditonCreditBillMeLater_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMSE_HoffmanCreditonCreditBillMeLater: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Select the Canada Country Available Subscription Option at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
   this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Validate The Perfect Gift for the Deer Hunter text at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    let text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateThePerfectGiftForTheDeerHunterText();
    expect(text).toEqual('The Perfect Gift for the Deer Hunter');
    logger.info(`Text validation passed: 'The Perfect Gift for the Deer Hunter', received '${text}'`);

})

Then('Validate US Offer text at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    let text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateUSOfferText();
    expect(text).toEqual(' United States Offers ');
    logger.info(`Text validation passed: Expected 'US Offer', received '${text}'`);
})

Then('Validate Summary text at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    let text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateSummaryText();
    expect(text).toEqual('Summary');
    logger.info(`Text validation passed: 'Summary', received '${text}'`);
})

Then('Validate Free Gift To Donor text under order summary section at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    let text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateFreeGiftToDonorText();
    expect(text).toEqual('Free Gift To Donor');
    logger.info(`Text validation passed: 'Free Gift To Donor' under order summary section, received '${text}'`);
})

Then('Validate Gift Order 1 text under order summary section at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    let text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateGiftOrder1Text();
    expect(text).toEqual('Gift Order 1');
    logger.info(`Text validation passed: 'Gift Order 1' under order summary section, received '${text}'`);
})

When('Enter values in Mailing and Billing Address form for FSMSE_HoffmanCreditonCreditBillMeLater', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.fillMailingBillingAddress();
    logger.info('Entered values in Mailing and Billing Address form for FSMSE_HoffmanCreditonCreditBillMeLater');
})

When('Enter Candian values in Mailing and Billing Address form for FSMSE_HoffmanCreditonCreditBillMeLater', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.fillMailingAndBillingAddressCA();
    logger.info('Entered Candian values in Mailing and Billing Address form for FSMSE_HoffmanCreditonCreditBillMeLater');
})

When('Enter values in Mailing Address form for FSMSE_HoffmanCreditonCreditBillMeLater', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.fillMailingAddress();
    logger.info('Entered values in Mailing form for FSMSE_HoffmanCreditonCreditBillMeLater');
})

When('Enter values in Gift Recipient Mailing Address form for Order 1 at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})



Then('Verify the Blank First Name Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const firstName = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});

Then('Verify the Blank Last Name Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const lastName = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});

Then('Verify the Blank Comapnay Name Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const companyName = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});
Then('Verify the Blank Job Title Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const jobTitle = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});

Then('Verify the Blank Address1 Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const Address1 = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});

Then('Verify the Blank Address2 Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const Address2 = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});

Then('Verify the Blank City Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const City = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});

Then('Verify the Blank Postal Code Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const postalCode = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});

Then('Verify the Blank Email Address Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const email = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});


Then('Verify the Country Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const country = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});

Then('Verify the Select  User Province at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const province = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  FSMSE_HoffmanCreditonCreditBillMeLater Page.');
});


Then('Validate First Name Missing text under first name text field section at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateFirstNameMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info('The "First Name is Missing" text has been successfully validated under first name text field section')
})

Then('Validate Last Name Missing text under first name text field section at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateLastNameMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info('The "Last Name is Missing" text has been successfully validated under last name text field section')
})

Then('Validate Address1 Missing text under first name text field section at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAddress1MissingText();
    expect(text).toEqual('required');
    logger.info('The "required" text has been successfully validated under Address1 text field section')
})

Then('Validate City Missing text under first name text field section at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateCityMissingText();
    expect(text).toEqual('City is missing');
    logger.info('The "City is missing" text has been successfully validated under City text field section')
})

Then('Validate Province Missing text under first name text field section at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateProvinceMissingText();
    expect(text).toEqual('Select a Province/State');
    logger.info('The "Select a Province/State" text has been successfully validated under Province/State drop down field section')
})

Then('Validate Postal code Missing text under first name text field section at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validatePostalCodeMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info('The "Postal code is missing" text has been successfully validated under Zip/Postal text field section')
})

Then('Validate Email Missing text under first name text field section at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateEmailAddressMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info('The "Email address is missing" text has been successfully validated under Email text field section')
})

Then('Select No Subscription Preferences at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.chooseSubscriptionPreferencesNo();
    logger.info('Subscription Preferences No has been successfully Selected')
})




Then('The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const isVisible = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateDigitalArchiveAccessText();
    expect(isVisible).toBe(true);
});

Then('Select 1 Year Digital Archive Access checkbox at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.selectDigitalArchiveAccessCB();
   
});

Then('Validate Tax Value at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const tax = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateTaxValue();
    expect(tax).toBe('$0.35');
    
})

Then('Validate Tax Value at FSMSE_HoffmanCreditonCreditBillMeLater Page for Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const tax = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateTaxValue();
    expect(tax).toBe('$0.39');
    
})

Then('Validate Tax Value at FSMSE_HoffmanCreditonCreditBillMeLater Page for Digital Only Offer & Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const tax = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateTaxValue();
    expect(tax).toBe('$0.39');
    
})

Then('Validate Amount Before Order at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount Before Order at FSMSE_HoffmanCreditonCreditBillMeLater Page for Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount Before Order at FSMSE_HoffmanCreditonCreditBillMeLater Page for Digital Only Offer & Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    this.beforeOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(34.34);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})
Then('Validate Amount After Order at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_HoffmanCreditonCreditBillMeLater Page with Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(10.00);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_HoffmanCreditonCreditBillMeLater Pagefor Digital Only Offer & Different Mailing Address', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    this.afterOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountAfterOrder();
    const afterOrderAmount = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateAmountAfterOrder();
    expect(afterOrderAmount).toBe(34.34);
    logger.info(`Successfully fetched the Total amount: ${this.afterOrderAmount}`);
})
Then('Select the Canada & Internation Offers Option at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
   this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');
})

When('Check I have a different mailing address checkbox at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {

    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})

When('Enter values in Mailing Address form at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate Mailing Address text at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    const text = await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})


When('Enter values in Gift Recipient Mailing Address form for Order 1 at FSMSE_HoffmanCreditonCreditBillMeLater Page ', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.fillGiftRecipientMailingAddress();
    logger.info('Entered values in Gift Recipient Mailing Address form for Order 1');
})

Then('Select Bill Me Later Payment Option at FSMSE_HoffmanCreditonCreditBillMeLater Page', async function () {
    this.FSMSE_HoffmanCreditonCreditBillMeLaterPage = await this.pomManager.getFSMSE_HoffmanCreditonCreditBillMeLaterPage();
    await this.FSMSE_HoffmanCreditonCreditBillMeLaterPage.selectBillMelaterRB();
    logger.info('Bill Me Later Payment Option has been Selected Successfully');
})