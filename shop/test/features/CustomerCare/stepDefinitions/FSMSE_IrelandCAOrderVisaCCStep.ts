import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
const assert = require('assert');
import { FSMSE_IrelandCAOrderVisaCC_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL FSMSE_IrelandCAOrderVisaCC', async function () {
    try {
        await this.page.goto(FSMSE_IrelandCAOrderVisaCC_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMSE_IrelandCAOrderVisaCC page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the Blank First Name Value at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const firstName = await this.FSMSE_IrelandCAOrderVisaCCPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the FSMSE_IrelandCAOrderVisaCC Page.');
});

Then('Verify the Blank Last Name Value at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const lastName = await this.FSMSE_IrelandCAOrderVisaCCPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the FSMSE_IrelandCAOrderVisaCC Page.');
});

Then('Verify the Blank Comapnay Name Value at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const companyName = await this.FSMSE_IrelandCAOrderVisaCCPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the FSMSE_IrelandCAOrderVisaCC Page.');
});
Then('Verify the Blank Job Title Value at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const jobTitle = await this.FSMSE_IrelandCAOrderVisaCCPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the FSMSE_IrelandCAOrderVisaCC Page.');
});

Then('Verify the Blank Address1 Value at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const Address1 = await this.FSMSE_IrelandCAOrderVisaCCPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the FSMSE_IrelandCAOrderVisaCC Page.');
});

Then('Verify the Blank Address2 Value at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const Address2 = await this.FSMSE_IrelandCAOrderVisaCCPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the FSMSE_IrelandCAOrderVisaCC Page.');
});

Then('Verify the Blank City Value at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const City = await this.FSMSE_IrelandCAOrderVisaCCPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the FSMSE_IrelandCAOrderVisaCC Page.');
});

Then('Verify the Blank Postal Code Value at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const postalCode = await this.FSMSE_IrelandCAOrderVisaCCPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the FSMSE_IrelandCAOrderVisaCC Page.');
});

Then('Verify the Blank Email Address Value at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const email = await this.FSMSE_IrelandCAOrderVisaCCPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the FSMSE_IrelandCAOrderVisaCC Page.');
});


Then('Verify the Country Value at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const country = await this.FSMSE_IrelandCAOrderVisaCCPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the FSMSE_IrelandCAOrderVisaCC Page.');
});

Then('Verify the Select  User Province at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const province = await this.FSMSE_IrelandCAOrderVisaCCPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  FSMSE_IrelandCAOrderVisaCC Page.');
});

Then('Select the Canada & Internation Offers Option at FSMSE_IrelandCAOrderVisaCC Page', async function () {
   this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    await this.FSMSE_IrelandCAOrderVisaCCPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');
})

Then('Select the Canada Country Available Subscription Option at FSMSE_IrelandCAOrderVisaCC Page', async function () {
   this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    await this.FSMSE_IrelandCAOrderVisaCCPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Select the International Available Subscription Option at FSMSE_IrelandCAOrderVisaCC Page', async function () {
   this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    await this.FSMSE_IrelandCAOrderVisaCCPage.selectInternationlSpecificSubscription();
    logger.info('International specific subscription selected');
})
Then('Enter values in Mailing and Billing Address form at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    await this.FSMSE_IrelandCAOrderVisaCCPage.fillMailingAndBillingAddressCA();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

Then('Enter values in Mailing and Billing Address form for Ireland Country at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    await this.FSMSE_IrelandCAOrderVisaCCPage.fillMailingAndBillingAddressIE();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

When('Check I have a different mailing address checkbox at FSMSE_IrelandCAOrderVisaCC page', async function () {

    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();

    await this.FSMSE_IrelandCAOrderVisaCCPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})


When('Enter values in Mailing Address form at FSMSE_IrelandCAOrderVisaCC page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();

    await this.FSMSE_IrelandCAOrderVisaCCPage.fillMailingAddressCA();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate number of char in Billing Address 2 text field to be 32 at FSMSE_IrelandCAOrderVisaCC', async function () {
       this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
       let text = await this.FSMSE_IrelandCAOrderVisaCCPage.validateNumberOfCharInBillingAddress2();
       try {
              assert.strictEqual(text.length, 32, `Validation failed: The Billing Address 2 field contains ${text.length} characters instead of 32.`);
              logger.info('Validation passed: The Billing Address 2 field contains exactly 32 characters.');
              console.log('Validation passed: The Billing Address 2 field contains exactly 32 characters.');
       } catch (error) {
              logger.info((error as Error).message);
              logger.error((error as Error).message);
              throw error;
       }

})

Then('Validate number of char in Different Billing Address text field to be 32 at FSMSE_IrelandCAOrderVisaCC', async function () {
       this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
       let text = await this.FSMSE_IrelandCAOrderVisaCCPage.validateNumberOfCharInDifBillingAddress2();
       try {
              assert.strictEqual(text.length, 32, `Validation failed: The Different Billing Address field contains ${text.length} characters instead of 32.`);
              logger.info('Validation passed: The Different Billing Address field contains exactly 32 characters.');
              console.log('Validation passed: The Different Billing Address field contains exactly 32 characters.');
       } catch (error) {
              logger.info((error as Error).message);
              logger.error((error as Error).message);
              throw error;
       }

})

Then('Validate number of char in Gift Recipient Address text field to be 32 at FSMSE_IrelandCAOrderVisaCC', async function () {
       this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
       let text = await this.FSMSE_IrelandCAOrderVisaCCPage.validateNumberOfCharInGiftRecipientAddress();
       try {
              assert.strictEqual(text.length, 32, `Validation failed: The Gift Recipient Address field contains ${text.length} characters instead of 32.`);
              logger.info('Validation passed: The Gift Recipient Address field contains exactly 32 characters.');
              console.log('Validation passed: The Gift Recipient Address field contains exactly 32 characters.');
       } catch (error) {
              logger.info((error as Error).message);
              logger.error((error as Error).message);
              throw error;
       }

})

Then('Validate Mailing Address text at FSMSE_IrelandCAOrderVisaCCPage', async function () {
    const text = await this.FSMSE_IrelandCAOrderVisaCCPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})


Given('Check This Is A Gift checkbox at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    await this.FSMSE_IrelandCAOrderVisaCCPage.checkThisIsAGiftCB();
    logger.info('The checkbox "This Is A Gift" successfully checked');
})

When('Enter values in Gift Recipient Mailing Address form at at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    await this.FSMSE_IrelandCAOrderVisaCCPage.fillGiftRecipientMailingAddressCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form');
})

Then('Select Bill Me Later Payment Option at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    await this.CCB_CourageCAOrderBillMePage.selectBillMelaterRB();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
})


Then('Validate Amount Before Order at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    this.beforeOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(85);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Ireland Country Specific Amount Before Order at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    this.beforeOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(27);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Gift Order Amount Before Order at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    this.beforeOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(85);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount for Different Mailing Address Before Order at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    this.beforeOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(85);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    this.AfterOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(85);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Ireland Country Specific Amount After Order at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    this.AfterOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(27);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Gift Order Amount After Order at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    this.AfterOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(85);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Amount for Different Mailing Address After Order at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    this.AfterOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_IrelandCAOrderVisaCCPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(85);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Verify the Autorenew option is enabled at FSMSE_IrelandCAOrderVisaCC Page', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    const isChecked  = await this.FSMSE_IrelandCAOrderVisaCCPage.clickAutorenewCheckbox();
    expect(isChecked).toBe(true);
    logger.info('Validated that Autorenew Chckobox is enabled at FSMSE_IrelandCAOrderVisaCC Page')
});

Then('Validate Ireland text', async function () {
    this.FSMSE_IrelandCAOrderVisaCCPage = await this.pomManager.getFSMSE_IrelandCAOrderVisaCCPage();
    let text = await this.FSMSE_IrelandCAOrderVisaCCPage.validatIrelandText();
    expect(text).toEqual('CONNECT WITH ALL THE WONDER AND BEAUTY THAT IRELAND HAS TO OFFER');
    logger.info(`Validation result: Expected "CONNECT WITH ALL THE WONDER AND BEAUTY THAT IRELAND HAS TO OFFER", received "${text}"`);
})