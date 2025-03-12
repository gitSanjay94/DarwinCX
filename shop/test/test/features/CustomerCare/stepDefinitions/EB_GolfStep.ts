import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { EB_Golf_Url } from '../../../../src/constants';

Given('User opens EB_Golf_Url', async function () {
    try {
        await this.page.goto(EB_Golf_Url, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the EB_Golf page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Payment Method" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validatePaymentMethodText();
    expect(text.trim()).toEqual("Payment Method");
    logger.info(`Validation result: Expected "Payment Method", received "${text}"`);
});

Then('Validate "CREDIT CARD" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateCreditCardText();
    expect(text).toEqual("Credit Card");
    logger.info(`Validation result: Expected "Credit Card", received "${text}"`);
});

Then('Validate "CARD NUMBER" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateCardNumberText();
    expect(text).toEqual("Card Number");
    logger.info(`Validation result: Expected "Card Number", received "${text}"`);
});

Then('Validate "EXPIRY DATE" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateExpiryDateText();
    expect(text).toEqual("Expiry Date");
    logger.info(`Validation result: Expected "Expiry Date", received "${text}"`);
});

Then('Validate "CVV" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateCvvText();
    expect(text).toEqual("CVV");
    logger.info(`Validation result: Expected "CVV", received "${text}"`);
});

Then('Verify the blank Card Number input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.verifyCardNumberInput();
    expect(text).toEqual("");
    logger.info('The Card Number input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank Cvv input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.verifyCvvInput();
    expect(text).toEqual("");
    logger.info('The Cvv input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the "Credit Card" radio button is checked', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    await this.EB_GolfPage.verifyCreditCardOption();
    let isChecked = await this.EB_GolfPage.getCreditCardRadioButtonCheckedState();
    expect(isChecked).toBe(true);
    logger.info('The "Credit Card" radio button is successfully verified to be checked.');
});

Then('Verify the "Bill Me Later" radio button is unchecked', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    await this.EB_GolfPage.verifyBillMeLaterOption();
    let isChecked = await this.EB_GolfPage.getBillMeLaterButtonUnCheckedState();
    expect(isChecked).toBe(false);
    logger.info('The "Bill Me Later" radio button is successfully verified to be unchecked.');
});

Then('Verify the "Month" drop down value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.verifyMonthDropdown();
    expect(text).toEqual("Month");
    logger.info('The "Month" drop down value is verified on the EB_Golf page.');
});

Then('Verify the "Year" drop down value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.verifyYearDropdown();
    expect(text).toEqual("Year");
    logger.info('The "Year" drop down value is verified on the EB_Golf page.');
});

Then('Verify the blank User First Name input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const firstName = await this.EB_GolfPage.validateUserFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The First Name input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank Recipient First Name input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const firstName = await this.EB_GolfPage.validateRecipientFirstNameValue();
    expect(firstName).toEqual("");
    logger.info('The Recipient First Name input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank User Last Name input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const lastName = await this.EB_GolfPage.validateUserLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Last Name input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank Recipient Last Name input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const lastName = await this.EB_GolfPage.validateRecipientLastNameValue();
    expect(lastName).toEqual("");
    logger.info('The Recipient Last Name input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank User Address1 input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const Address1 = await this.EB_GolfPage.validateUserAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Address1 input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank Recipient Address1 input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const Address1 = await this.EB_GolfPage.validateRecipientAddress1Value();
    expect(Address1).toEqual("");
    logger.info('The Recipient Address1 input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank User Address2 input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const Address2 = await this.EB_GolfPage.validateUserAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Address2 input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank Recipient Address2 input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const Address2 = await this.EB_GolfPage.validateRecipientAddress2Value();
    expect(Address2).toEqual("");
    logger.info('The Recipient Address2 input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank User City input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const City = await this.EB_GolfPage.validateUserCityValue();
    expect(City).toEqual("");
    logger.info('The City input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank Recipient City input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const City = await this.EB_GolfPage.validateRecipientCityValue();
    expect(City).toEqual("");
    logger.info('The Recipient City input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank User Postal Code input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const postalCode = await this.EB_GolfPage.validateUserPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Postal Code input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank Recipient Postal Code input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const postalCode = await this.EB_GolfPage.validateRecipientPostalCodeValue();
    expect(postalCode).toEqual("");
    logger.info('The Recipient Postal Code input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank User Email input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const Email = await this.EB_GolfPage.validateUserEmailValue();
    expect(Email).toEqual("");
    logger.info('The Email input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank Recipient Email input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const Email = await this.EB_GolfPage.validateRecipientEmailValue();
    expect(Email).toEqual("");
    logger.info('The Recipient Email input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank User Phone Number input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const phoneNumber = await this.EB_GolfPage.validateUserPhoneNumberValue();
    expect(phoneNumber).toEqual("");
    logger.info('The Phone Number input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the blank Recipient Phone Number input value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const phoneNumber = await this.EB_GolfPage.validateRecipientPhoneNumberValue();
    expect(phoneNumber).toEqual("");
    logger.info('The Recipient Phone Number input field is verified to be blank on the EB_Golf page.');
});

Then('Verify the User Country value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const country = await this.EB_GolfPage.validateUserCountryValue();
    expect(country).toEqual("United States");
    logger.info('The Country value "United States" has been successfully verified on the EB_Golf page.');
});

Then('Verify the Recipient Country value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const country = await this.EB_GolfPage.validateRecipientCountryValue();
    expect(country).toEqual("Choose Country*");
    logger.info('The Recipient Country value "United States" has been successfully verified on the EB_Golf page.');
});

Then('Verify the User Province value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const province = await this.EB_GolfPage.validateUserProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The province value "Choose Province/State" has been successfully verified on EB_Golf page');
});

Then('Verify the Recipient Province value on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const province = await this.EB_GolfPage.validateRecipientProvinceValue();
    expect(province).toEqual("Choose Province/State*");
    logger.info('The Recipient province value "Choose Province/State" has been successfully verified on EB_Golf page');
});

Then('Validate "Send a 1-Year Gift of GOLF below" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateSendAOneYearGiftOfGOLFBelowText();
    expect(text).toEqual("Send a 1-Year Gift of GOLF below");
    logger.info(`Validation result: Expected "Send a 1-Year Gift of GOLF below", received "${text}"`);
});

Then('Validate "United States Offer" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateUnitedStatesOfferText();
    expect(text.trim()).toEqual("United States Offer");
    logger.info(`Validation result: Expected "United States Offer", received "${text}"`);
});

Then('Validate "Billing Address" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateBillingAddressText();
    expect(text).toEqual("Billing Address");
    logger.info(`Validation result: Expected "Billing Address", received "${text}"`);
});

Then('Validate "Gift Recipient Mailing Address" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateGiftRecipientMailingAddressText();
    expect(text).toEqual("Gift Recipient Mailing Address");
    logger.info(`Validation result: Expected "Gift Recipient Mailing Address", received "${text}"`);
});

Then('Validate "Order Number 1" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateOrderNumberText();
    expect(text).toEqual("Order Number 1");
    logger.info(`Validation result: Expected "Order Number 1", received "${text}"`);
});

When('Click "Place Order" button on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    await this.EB_GolfPage.clickPlaceOrderButton();
    logger.info(`Click "Place Order" button on EB_Golf page`);
});

When('Fill "Billing Address" form on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    await this.EB_GolfPage.fillBillingAddressForm();
    logger.info(`Filled "Billing Address" form on EB_Golf page`);
});
When('Fill "Gift Recipient Mailing Address" form on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    await this.EB_GolfPage.fillGiftRecipientMailingAddressForm();
    logger.info(`Filled "Gift Recipient Mailing Address" form on EB_Golf page`);
});

When('Enter valid payment details {string} and {string} and {string} and {string}', async function (cardnumb, month, year, cvv) {
  // Get the EB_GolfPage object and use it to enter the payment details
  this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
  await this.EB_GolfPage.enterCorrectPaymentDetails(cardnumb, month, year, cvv);

  // Log the payment details (be cautious of exposing sensitive information)
  logger.info(`Entering valid payment details: Card Number - ${cardnumb}, Expiry Date - ${month}/${year}, CVV - ${cvv}`);
});
Then('Validate "Your order has been accepted successfully" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateOrderSuccessfullyAcceptedMsg();
    expect(text).toContain("Thank you for your subscription. Your order has been accepted successfully.");
    logger.info(`Validation result: Expected "Your order has been accepted successfully", received "${text}"`);
});

Then('Validate "TRANSACTION SUCCESSFUL" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateTransactionSuccessfulText();
    expect(text).toEqual("TRANSACTION SUCCESSFUL");
    logger.info(`Validation result: Expected "TRANSACTION SUCCESSFUL", received "${text}"`);
});

Then('Validate "Please enter a valid credit card number." text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validatePleaseEnterValidCreditCardNumberAlertMsg();
    expect(text).toEqual("Please enter a valid credit card number.");
    logger.info(`Validation result: Expected "Please enter a valid credit card number.", received "${text}"`);
});
Then('Validate "Please enter expiry date." text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validatePleaseEnterExpiryDateAlertMsg();
    expect(text).toEqual("Please enter expiry date.");
    logger.info(`Validation result: Expected "Please enter expiry date.", received "${text}"`);
});

Then('Validate "could not make payment" text on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    const text = await this.EB_GolfPage.validateCouldNotMakePaymentAlertMsg();
    expect(text).toEqual("could not make payment");
    logger.info(`Validation result: Expected "could not make payment", received "${text}"`);
});

When('Check "Bill Me Later" option on EB_Golf page', async function () {
    this.EB_GolfPage = await this.pomManager.getEB_GolfPage();
    await this.EB_GolfPage.checkBillMeLaterOption();
    logger.info(`"Bill Me Later" option checked successfully on EB_Golf page`);
});
















