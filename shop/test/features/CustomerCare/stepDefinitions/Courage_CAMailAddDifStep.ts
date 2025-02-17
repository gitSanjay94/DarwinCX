import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { equal } from 'assert';
const assert = require('assert');
Given('User opens URL Courage CAMailAddDif', async function () {
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

Then('Verify the Blank First Name Value at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const firstName = await this.Courage_CAMailAddDifPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Last Name Value at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const lastName = await this.Courage_CAMailAddDifPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Comapnay Name Value at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const companyName = await this.Courage_CAMailAddDifPage.validateBlankCompanyNameValue();
    expect(companyName).toEqual("");
    logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});
Then('Verify the Blank Job Title Value at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const jobTitle = await this.Courage_CAMailAddDifPage.validateBlankJobTitleValue();
    expect(jobTitle).toEqual("");
    logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Address1 Value at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const Address1 = await this.Courage_CAMailAddDifPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 Blank value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Address2 Value at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const Address2 = await this.Courage_CAMailAddDifPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
});

Then('Verify the Blank City Value at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const City = await this.Courage_CAMailAddDifPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Postal Code Value at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const postalCode = await this.Courage_CAMailAddDifPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Blank postal code value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Blank Email Address Value at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const email = await this.Courage_CAMailAddDifPage.validateUserEmailValue();
    expect(email).toEqual("");
    logger.info('The email value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});


Then('Verify the Country Value at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const country = await this.Courage_CAMailAddDifPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
});

Then('Verify the Select  User Province at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    const province = await this.Courage_CAMailAddDifPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
});

Then('Select the Canada Country Available Subscription Option at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    await this.Courage_CAMailAddDifPage.selectCountrySpecificSubscription();
    logger.info('Canda specific subscription selected');
})
Then('Enter values in Mailing and Billing Address form at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    await this.Courage_CAMailAddDifPage.fillMailingAndBillingAddressCA();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

When('Check I have a different mailing address checkbox at Courage_CAMailAddDif page', async function () {

    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();

    await this.Courage_CAMailAddDifPage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})


When('Enter values in Mailing Address form at Courage_CAMailAddDif page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();

    await this.Courage_CAMailAddDifPage.fillMailingAddressCA();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate number of char in Billing Address 2 text field to be 32 at Courage_CAMailAddDif', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    let text = await this.Courage_CAMailAddDifPage.validateNumberOfCharInBillingAddress2();
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

Then('Validate number of char in Different Billing Address text field to be 32 at Courage_CAMailAddDif', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    let text = await this.Courage_CAMailAddDifPage.validateNumberOfCharInDifBillingAddress2();
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

Then('Validate number of char in Gift Recipient Address text field to be 32 at Courage_CAMailAddDif', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    let text = await this.Courage_CAMailAddDifPage.validateNumberOfCharInGiftRecipientAddress();
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

Then('Validate Mailing Address text at Courage_CAMailAddDifPage', async function () {
    const text = await this.Courage_CAMailAddDifPage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})


Given('Check This Is A Gift checkbox at Courage_CAMailAddDif Page', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    await this.Courage_CAMailAddDifPage.checkThisIsAGiftCB();
    logger.info('The checkbox "This Is A Gift" successfully checked');
})

When('Enter values in Gift Recipient Mailing Address form at at Courage_CAMailAddDif Page', async function () {
    await this.Courage_CAMailAddDifPage.fillGiftRecipientMailingAddressCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form');
})

Then('Validate "Auto Renew my subscription" text', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    let text = await this.Courage_CAMailAddDifPage.validateAutoRenewMySubscriptionText();
    expect(text).toEqual('Auto Renew my subscription');

})
Then('Verify the visibility and text of the Auto Renew My Subscription element', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    let result = await this.Courage_CAMailAddDifPage.validateAutoRenewMySubscriptionText();
    if (result.isVisible) {
        expect(result.text).toBe("Auto Renew my subscription");
        console.log('Test passed: Auto Renew My Subscription text is visible and correct.');
    } else {
        console.log('Test passed: Auto Renew My Subscription text is not visible.');
    }
});

When('Purchaser Auto Renew Option Check Box', async function () {
    this.Courage_CAMailAddDifPage = await this.pomManager.getCourage_CAMailAddDifPage();
    await this.Courage_CAMailAddDifPage.purchaserAutoRenewOptionCheckBox();
    logger.info('The checkbox Purchaser Auto Renew Option Check Box successfully checked');
})
