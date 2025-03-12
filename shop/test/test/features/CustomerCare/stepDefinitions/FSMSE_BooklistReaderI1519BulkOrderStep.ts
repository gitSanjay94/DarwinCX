import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
const assert = require('assert');
import { FSMSE_BooklistReaderI1519BulkOrderPage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL FSMSE_BooklistReaderI1519BulkOrder', async function () {
    try {
        await this.page.goto(process.env.BASEURL + FSMSE_BooklistReaderI1519BulkOrderPage_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMSE_BooklistReaderI1519BulkOrder page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Select Offers Quantity at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    await this.FSMSE_BooklistReaderI1519BulkOrderPage.selectOffers();
});

Then('Verify the Blank First Name Value at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const firstName = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the FSMSE_BooklistReaderI1519BulkOrder Page.');
});

Then('Verify the Blank Last Name Value at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const lastName = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the FSMSE_BooklistReaderI1519BulkOrder Page.');
});

Then('Verify the Blank Comapnay Name Value at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const companyName = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the FSMSE_BooklistReaderI1519BulkOrder Page.');
});
Then('Verify the Blank Job Title Value at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const jobTitle = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the FSMSE_BooklistReaderI1519BulkOrder Page.');
});

Then('Verify the Blank Address1 Value at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const Address1 = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the FSMSE_BooklistReaderI1519BulkOrder Page.');
});

Then('Verify the Blank Address2 Value at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const Address2 = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the FSMSE_BooklistReaderI1519BulkOrder Page.');
});

Then('Verify the Blank City Value at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const City = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the FSMSE_BooklistReaderI1519BulkOrder Page.');
});

Then('Verify the Blank Postal Code Value at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const postalCode = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the FSMSE_BooklistReaderI1519BulkOrder Page.');
});

Then('Verify the Blank Email Address Value at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const email = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the FSMSE_BooklistReaderI1519BulkOrder Page.');
});


Then('Verify the Country Value at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const country = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateUserCountryValue();
    expect(country).toEqual("Choose Country*");
    logger.info('The Country value "Choose Country" has been successfully verified in the FSMSE_BooklistReaderI1519BulkOrder Page.');
});

Then('Verify the Select  User Province at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const province = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateUserProvinceValue();
    expect(province).toEqual("Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  FSMSE_BooklistReaderI1519BulkOrder Page.');
});

Then('Select the Canada & Internation Offers Option at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
   this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    await this.FSMSE_BooklistReaderI1519BulkOrderPage.selectCanadianInternationalOfferToggle();
    logger.info('Canada & Internation Offers selected');
})

Then('Select the Canada Country Available Subscription Option at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
   this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    await this.FSMSE_BooklistReaderI1519BulkOrderPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})

Then('Select the International Available Subscription Option at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
   this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    await this.FSMSE_BooklistReaderI1519BulkOrderPage.selectInternationlSpecificSubscription();
    logger.info('International specific subscription selected');
})
Then('Enter values in Mailing and Billing Address form at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    await this.FSMSE_BooklistReaderI1519BulkOrderPage.fillMailingAndBillingAddress();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

Then('Enter values in Mailing and Billing Address form for Ireland Country at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    await this.FSMSE_BooklistReaderI1519BulkOrderPage.fillMailingAndBillingAddressIE();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

When('Check I have a different mailing address checkbox at FSMSE_BooklistReaderI1519BulkOrder page', async function () {

    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();

    await this.FSMSE_BooklistReaderI1519BulkOrderPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})


When('Enter values in Mailing Address form at FSMSE_BooklistReaderI1519BulkOrder page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();

    await this.FSMSE_BooklistReaderI1519BulkOrderPage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate number of char in Billing Address 2 text field to be 32 at FSMSE_BooklistReaderI1519BulkOrder', async function () {
       this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
       let text = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateNumberOfCharInBillingAddress2();
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

Then('Validate number of char in Different Billing Address text field to be 32 at FSMSE_BooklistReaderI1519BulkOrder', async function () {
       this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
       let text = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateNumberOfCharInDifBillingAddress2();
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

Then('Validate number of char in Gift Recipient Address text field to be 32 at FSMSE_BooklistReaderI1519BulkOrder', async function () {
       this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
       let text = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateNumberOfCharInGiftRecipientAddress();
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

Then('Validate Mailing Address text at FSMSE_BooklistReaderI1519BulkOrderPage', async function () {
    const text = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})


Given('Check This Is A Gift checkbox at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    await this.FSMSE_BooklistReaderI1519BulkOrderPage.checkThisIsAGiftCB();
    logger.info('The checkbox "This Is A Gift" successfully checked');
})

When('Enter values in Gift Recipient Mailing Address form at at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    await this.FSMSE_BooklistReaderI1519BulkOrderPage.fillGiftRecipientMailingAddressCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form');
})

Then('Select Bill Me Later Payment Option at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    await this.CCB_CourageCAOrderBillMePage.selectBillMelaterRB();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
})


Then('Validate Amount Before Order at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    this.beforeOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(170);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Ireland Country Specific Amount Before Order at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    this.beforeOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(27);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Gift Order Amount Before Order at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    this.beforeOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(85);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount for Different Mailing Address Before Order at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    this.beforeOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(170);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Amount After Order at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    this.AfterOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(170);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Ireland Country Specific Amount After Order at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    this.AfterOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(27);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Gift Order Amount After Order at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    this.AfterOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(85);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Amount for Different Mailing Address After Order at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    this.AfterOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.FSMSE_BooklistReaderI1519BulkOrderPage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(170);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Verify the Autorenew option is enabled at FSMSE_BooklistReaderI1519BulkOrder Page', async function () {
    this.FSMSE_BooklistReaderI1519BulkOrderPage = await this.pomManager.getFSMSE_BooklistReaderI1519BulkOrderPage();
    const isChecked  = await this.FSMSE_BooklistReaderI1519BulkOrderPage.clickAutorenewCheckbox();
    expect(isChecked).toBe(true);
    logger.info('Validated that Autorenew Chckobox is enabled at FSMSE_BooklistReaderI1519BulkOrder Page')
});

