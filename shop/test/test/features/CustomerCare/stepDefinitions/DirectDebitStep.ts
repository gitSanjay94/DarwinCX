import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { DirectDebitUrl } from '../../../../src/constants';

Given('User opens URL DirectDebit', async function () {
    try {
        await this.page.goto(DirectDebitUrl, { timeout: 60000 })
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

// Then('Verify the Blank First Name Value at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const firstName = await this.DirectDebitPage.validateUserFirstNameValue();
//     expect(firstName).toEqual("");
//     logger.info('The First Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
// });

// Then('Verify the Blank Last Name Value at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const lastName = await this.DirectDebitPage.validateUserLastNameValue();
//     expect(lastName).toEqual("");
//     logger.info('The Last Name Blank value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
// });

// Then('Verify the Blank Comapnay Name Value at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const companyName = await this.DirectDebitPage.validateBlankCompanyNameValue();
//     expect(companyName).toEqual("");
//     logger.info('The Blank Company name value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
// });
// Then('Verify the Blank Job Title Value at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const jobTitle = await this.DirectDebitPage.validateBlankJobTitleValue();
//     expect(jobTitle).toEqual("");
//     logger.info('The Blank Job Title value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
// });

// Then('Verify the Blank Address1 Value at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const Address1 = await this.DirectDebitPage.validateUserAddress1Value();
//     expect(Address1).toEqual("");
//     logger.info('The Address1 Blank value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
// });

// Then('Verify the Blank Address2 Value at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const Address2 = await this.DirectDebitPage.validateUserAddress2Value();
//     expect(Address2).toEqual("");
//     logger.info('The Address2 Blank value has been successfully verified in the B2NewparamsinurlCAallfields Page.');
// });

// Then('Verify the Blank City Value at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const City = await this.DirectDebitPage.validateUserCityValue();
//     expect(City).toEqual("");
//     logger.info('The City value "" has been successfully verified in the getCSC_NewparamsinurlUSnoinfodisplayed Page.');
// });

// Then('Verify the Blank Postal Code Value at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const postalCode = await this.DirectDebitPage.validateUserPostalCodeValue();
//     expect(postalCode).toEqual("");
//     logger.info('The Blank postal code value has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
// });

// Then('Verify the Blank Email Address Value at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const email = await this.DirectDebitPage.validateUserEmailValue();
//     expect(email).toEqual("");
//     logger.info('The email value "" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
// });


// Then('Verify the Country Value at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const country = await this.DirectDebitPage.validateUserCountryValue();
//     expect(country).toEqual("United States");
//     logger.info('The Country value "United States" has been successfully verified in the CSC_NewparamsinurlUSnoinfodisplayed Page.');
// });

// Then('Verify the Select  User Province at CCB_CourageCAOrderMasterCC Page', async function () {
//     this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
//     const province = await this.DirectDebitPage.validateUserProvinceValue();
//     expect(province).toEqual("Choose Province/State*");
//     logger.info('The province value "Choose Province/State" has been successfully verified in the  B2NewparamsinurlCAallfields Page.');
// });

Then('Enter values in Mailing and Billing Address form at DirectDebit Page', async function () {
    this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
    await this.DirectDebitPage.fillMailingAndBillingAddressCA();
    logger.info('Mailing and Billing Address form has been successfully filled in.');
});

Then('Click at Bacs Direct Debit', async function () {
    this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
    await this.DirectDebitPage.clickBacsDirectDebitTab();
    logger.info('Clicked at Driect Debit Tab');
});

Then('Fill the Email Address', async function () {
    this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
    await this.DirectDebitPage.fillDirectDebitEmailaddress();
    logger.info('Clicked at Driect Debit Tab');
});

When('Fill the Sort Code with {string}', async function (sortCode: string) {
  this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
  await this.DirectDebitPage.fillDirectDebitSortCode(sortCode);
  logger.info(`Filled Sort Code: ${sortCode}`);
});

Then('Fill the Account Number with {string}', async function (Accountnumber: string) {
    this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
    await this.DirectDebitPage.fillDirectDebitAccountNumber(Accountnumber);
    logger.info('Clicked at Driect Debit Tab');
});

Then('Fill the Full Name', async function () {
    this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
    await this.DirectDebitPage.fillDirectDebitFullNameInput();
    logger.info('Clicked at Driect Debit Tab');
});

Then('Select the term condition check box', async function () {
    this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
    await this.DirectDebitPage.selectDirectDebitCheckbox();
    logger.info('Clicked at Driect Debit Tab');
});
Then('Click on Place Order Button', async function () {
    this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
    await this.DirectDebitPage.clickDirectDebitPlaceOrderButton();
    logger.info('Clicked at Driect Debit Tab');
});

Then('Click on Confirm Button', async function () {
    this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
    await this.DirectDebitPage.clickDirectDebitConfirButton();
    logger.info('Clicked at Driect Debit Tab');
});
When('Enter invalid payment details {string} and {string}  and {string}', async function (cardnumb, cardexp, cvc) {
    this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
    await this.DirectDebitPage.enterCorrectPaymentDetails(cardnumb, cardexp, cvc)
    logger.info(`Entering valid payment details: Card Number - ${cardnumb}, Expiry Date - ${cardexp}, CVV - ${cvc}`);
})

Then('See the error message {string}', async function (expectedMessage: string) {
  // Get and validate the error message
  this.DirectDebitPage = await this.pomManager.getDirectDebitPage();
  const errorMessage = await this.DirectDebitPage.getErrorMessage();
  expect(errorMessage).toBe(expectedMessage);
});


