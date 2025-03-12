import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
const assert = require('assert');
Given('User opens URL Courage_CAOrderBillMeLater', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
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

Then('Verify the Blank First Name Value at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const firstName = await this.Courage_CAOrderBillMeLaterPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Last Name Value at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const lastName = await this.Courage_CAOrderBillMeLaterPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Comapnay Name Value at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const companyName = await this.Courage_CAOrderBillMeLaterPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});
Then('Verify the Blank Job Title Value at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const jobTitle = await this.Courage_CAOrderBillMeLaterPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Address1 Value at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const Address1 = await this.Courage_CAOrderBillMeLaterPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Address2 Value at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const Address2 = await this.Courage_CAOrderBillMeLaterPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const City = await this.Courage_CAOrderBillMeLaterPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const postalCode = await this.Courage_CAOrderBillMeLaterPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Email Address Value at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const email = await this.Courage_CAOrderBillMeLaterPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});


Then('Verify the Country Value at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const country = await this.Courage_CAOrderBillMeLaterPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Select  User Province at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    const province = await this.Courage_CAOrderBillMeLaterPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Select the Canada Country Available Subscription Option at Courage_CAOrderBillMeLater Page', async function () {
   this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    await this.Courage_CAOrderBillMeLaterPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})
Then('Enter values in Mailing and Billing Address form at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    await this.Courage_CAOrderBillMeLaterPage.fillMailingAndBillingAddressCA();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

When('Check I have a different mailing address checkbox at Courage_CAOrderBillMeLater page', async function () {

    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();

    await this.Courage_CAOrderBillMeLaterPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})


When('Enter values in Mailing Address form at Courage_CAOrderBillMeLater page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();

    await this.Courage_CAOrderBillMeLaterPage.fillMailingAddressCA();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate number of char in Billing Address 2 text field to be 32 at Courage_CAOrderBillMeLater', async function () {
       this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
       let text = await this.Courage_CAOrderBillMeLaterPage.validateNumberOfCharInBillingAddress2();
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

Then('Validate number of char in Different Billing Address text field to be 32 at Courage_CAOrderBillMeLater', async function () {
       this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
       let text = await this.Courage_CAOrderBillMeLaterPage.validateNumberOfCharInDifBillingAddress2();
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

Then('Validate number of char in Gift Recipient Address text field to be 32 at Courage_CAOrderBillMeLater', async function () {
       this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
       let text = await this.Courage_CAOrderBillMeLaterPage.validateNumberOfCharInGiftRecipientAddress();
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

Then('Validate Mailing Address text at Courage_CAOrderBillMeLaterPage', async function () {
    const text = await this.Courage_CAOrderBillMeLaterPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})


Given('Check This Is A Gift checkbox at Courage_CAOrderBillMeLater Page', async function () {
    this.Courage_CAOrderBillMeLaterPage = await this.pomManager.getCourage_CAOrderBillMeLaterPage();
    await this.Courage_CAOrderBillMeLaterPage.checkThisIsAGiftCB();
    logger.info('The checkbox "This Is A Gift" successfully checked');
})

When('Enter values in Gift Recipient Mailing Address form at at Courage_CAOrderBillMeLater Page', async function () {
    await this.Courage_CAOrderBillMeLaterPage.fillGiftRecipientMailingAddressCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form');
})

Then('Select Bill Me Later Payment Option at Courage_CAOrderBillMeLater Page', async function () {
    this.CCB_CourageCAOrderBillMePage = await this.pomManager.getCCB_CourageCAOrderBillMePage();
    await this.CCB_CourageCAOrderBillMePage.selectBillMelaterRB();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
})