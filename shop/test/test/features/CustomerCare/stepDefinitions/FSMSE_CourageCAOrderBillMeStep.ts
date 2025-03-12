import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
const assert = require('assert');
Given('User opens URL FSMSE_CourageCAOrderBillMe', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMSE_CourageCAOrderBillMe page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the Blank First Name Value at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const firstName = await this.FSMSE_CourageCAOrderBillMePage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the FSMSE_CourageCAOrderBillMe Page.');
});

Then('Verify the Blank Last Name Value at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const lastName = await this.FSMSE_CourageCAOrderBillMePage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the FSMSE_CourageCAOrderBillMe Page.');
});

Then('Verify the Blank Comapnay Name Value at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const companyName = await this.FSMSE_CourageCAOrderBillMePage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the FSMSE_CourageCAOrderBillMe Page.');
});
Then('Verify the Blank Job Title Value at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const jobTitle = await this.FSMSE_CourageCAOrderBillMePage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the FSMSE_CourageCAOrderBillMe Page.');
});

Then('Verify the Blank Address1 Value at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const Address1 = await this.FSMSE_CourageCAOrderBillMePage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the FSMSE_CourageCAOrderBillMe Page.');
});

Then('Verify the Blank Address2 Value at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const Address2 = await this.FSMSE_CourageCAOrderBillMePage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the FSMSE_CourageCAOrderBillMe Page.');
});

Then('Verify the Blank City Value at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const City = await this.FSMSE_CourageCAOrderBillMePage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the FSMSE_CourageCAOrderBillMe Page.');
});

Then('Verify the Blank Postal Code Value at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const postalCode = await this.FSMSE_CourageCAOrderBillMePage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the FSMSE_CourageCAOrderBillMe Page.');
});

Then('Verify the Blank Email Address Value at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const email = await this.FSMSE_CourageCAOrderBillMePage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the FSMSE_CourageCAOrderBillMe Page.');
});


Then('Verify the Country Value at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const country = await this.FSMSE_CourageCAOrderBillMePage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the FSMSE_CourageCAOrderBillMe Page.');
});

Then('Verify the Select  User Province at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const province = await this.FSMSE_CourageCAOrderBillMePage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  FSMSE_CourageCAOrderBillMe Page.');
});

Then('Select the Canada Country Available Subscription Option at FSMSE_CourageCAOrderBillMe Page', async function () {
   this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    await this.FSMSE_CourageCAOrderBillMePage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})
Then('Enter values in Mailing and Billing Address form at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    await this.FSMSE_CourageCAOrderBillMePage.fillMailingAndBillingAddressCA();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

When('Check I have a different mailing address checkbox at FSMSE_CourageCAOrderBillMe page', async function () {

    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();

    await this.FSMSE_CourageCAOrderBillMePage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})


When('Enter values in Mailing Address form at FSMSE_CourageCAOrderBillMe page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();

    await this.FSMSE_CourageCAOrderBillMePage.fillMailingAddressCA();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate number of char in Billing Address 2 text field to be 32 at FSMSE_CourageCAOrderBillMe', async function () {
       this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
       let text = await this.FSMSE_CourageCAOrderBillMePage.validateNumberOfCharInBillingAddress2();
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

Then('Validate number of char in Different Billing Address text field to be 32 at FSMSE_CourageCAOrderBillMe', async function () {
       this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
       let text = await this.FSMSE_CourageCAOrderBillMePage.validateNumberOfCharInDifBillingAddress2();
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

Then('Validate number of char in Gift Recipient Address text field to be 32 at FSMSE_CourageCAOrderBillMe', async function () {
       this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
       let text = await this.FSMSE_CourageCAOrderBillMePage.validateNumberOfCharInGiftRecipientAddress();
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

Then('Validate Mailing Address text at FSMSE_CourageCAOrderBillMePage', async function () {
    const text = await this.FSMSE_CourageCAOrderBillMePage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})


Given('Check This Is A Gift checkbox at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    await this.FSMSE_CourageCAOrderBillMePage.checkThisIsAGiftCB();
    logger.info('The checkbox "This Is A Gift" successfully checked');
})

When('Enter values in Gift Recipient Mailing Address form at at FSMSE_CourageCAOrderBillMe Page', async function () {
    await this.FSMSE_CourageCAOrderBillMePage.fillGiftRecipientMailingAddressCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form');
})

Then('Select Bill Me Later Payment Option at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    await this.CCB_CourageCAOrderBillMePage.selectBillMelaterRB();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
})


Then('Validate Amount Before Order at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    this.beforeOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(26);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Gift Order Amount Before Order at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    this.beforeOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(26);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount for Different Mailing Address Before Order at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    this.beforeOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(26);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    this.AfterOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(26);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Gift Order Amount After Order at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    this.AfterOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(26);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Amount for Different Mailing Address After Order at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    this.AfterOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_CourageCAOrderBillMePage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(26);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Verify the Autorenew option is enabled at FSMSE_CourageCAOrderBillMe Page', async function () {
    this.FSMSE_CourageCAOrderBillMePage = await this.pomManager.getFSMSE_CourageCAOrderBillMePage();
    const isChecked  = await this.FSMSE_CourageCAOrderBillMePage.clickAutorenewCheckbox();
    expect(isChecked).toBe(true);
    logger.info('Validated that Autorenew Chckobox is enabled at FSMSE_CourageCAOrderBillMe Page')
});