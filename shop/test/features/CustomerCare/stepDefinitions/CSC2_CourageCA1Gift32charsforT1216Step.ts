import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC2_CourageCA1Gift32charsforT1216Page_LANDING_URL_ENDPOINT } from '../../../../src/constants';
const assert = require('assert');
Given('User opens URL CSC2_CourageCA1Gift32charsforT1216', async function () {
    try {
        await this.page.goto(process.env.BASEURL + CSC2_CourageCA1Gift32charsforT1216Page_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the New Params US All Fields page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Verify the Blank First Name Value at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const firstName = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Last Name Value at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const lastName = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Comapnay Name Value at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const companyName = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});
Then('Verify the Blank Job Title Value at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const jobTitle = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Address1 Value at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const Address1 = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Address2 Value at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const Address2 = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const City = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const postalCode = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Email Address Value at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const email = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});


Then('Verify the Country Value at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const country = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Select  User Province at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    const province = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Select the Canada Country Available Subscription Option at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
   this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    await this.CSC2_CourageCA1Gift32charsforT1216Page.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})
Then('Enter values in Mailing and Billing Address form at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    await this.CSC2_CourageCA1Gift32charsforT1216Page.fillMailingAndBillingAddress();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

Then('Enter values in Mailing and Billing Address form at CSC2_CourageCA1Gift32charsforT1216', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    await this.CSC2_CourageCA1Gift32charsforT1216Page.fillMailingAndBillingAddressCA();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

Then('Enter Canadian values in Mailing and Billing Address form at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    await this.CSC2_CourageCA1Gift32charsforT1216Page.fillMailingAndBillingAddressCA();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

When('Check I have a different mailing address checkbox at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {

    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();

    await this.CSC2_CourageCA1Gift32charsforT1216Page.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})


When('Enter values in Mailing Address form at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();

    await this.CSC2_CourageCA1Gift32charsforT1216Page.fillMailingAddressCA();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate number of char in Billing Address 2 text field to be 32 at CSC2_CourageCA1Gift32charsforT1216', async function () {
       this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
       let text = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateNumberOfCharInBillingAddress2();
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

Then('Validate number of char in Different Billing Address text field to be 32 at CSC2_CourageCA1Gift32charsforT1216', async function () {
       this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
       let text = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateNumberOfCharInDifBillingAddress2();
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

Then('Validate number of char in Gift Recipient Address text field to be 32 at CSC2_CourageCA1Gift32charsforT1216', async function () {
       this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
       let text = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateNumberOfCharInGiftRecipientAddress();
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

Then('Validate Mailing Address text at CSC2_CourageCA1Gift32charsforT1216Page', async function () {
    const text = await this.CSC2_CourageCA1Gift32charsforT1216Page.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})


Given('Check This Is A Gift checkbox at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    this.CSC2_CourageCA1Gift32charsforT1216Page = await this.pomManager.getCSC2_CourageCA1Gift32charsforT1216Page();
    await this.CSC2_CourageCA1Gift32charsforT1216Page.checkThisIsAGiftCB();
    logger.info('The checkbox "This Is A Gift" successfully checked');
})

When('Enter values in Gift Recipient Mailing Address form at at CSC2_CourageCA1Gift32charsforT1216 Page', async function () {
    await this.CSC2_CourageCA1Gift32charsforT1216Page.fillGiftRecipientMailingAddressCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form');
})