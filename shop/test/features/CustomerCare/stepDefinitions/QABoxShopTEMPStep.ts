import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { QABoxShopTEMP_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL QA Box Shop TEMP', async function () {
  try {
    await this.page.goto(QABoxShopTEMP_LANDING_URL_ENDPOINT, { timeout: 60000 })
    await this.page.waitForLoadState();
    logger.info(`Successfully navigated to the QA Box Shop TEMP page: ${await this.page.url()}`);
  } catch (error: any) {
    if (error instanceof errors.TimeoutError) {
      console.error('Navigation timeout error:', error.message);
    } else {
      console.error('Page navigation error:', error.message);
    }
  }
});

Then('Validate "Shipping Information" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateShippingInformationText();
  let trimmedText = text.trim();
  expect(trimmedText).toEqual('Shipping Information');
  logger.info(`Validation result: Expected "Shipping Information", received "${text}"`);
})

Then('Validate "Recipient Information" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientInformationText();
  expect(text).toEqual('Recipient Information');
  logger.info(`Validation result: Expected "Recipient Information", received "${text}"`);
})

When('Fill Recipient Information form', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.fillRecipientInformationForm();
  logger.info('Recipient Information form filled successfully');
})

Then('Validate "Shipping Address" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateShippingAddressText();
  expect(text).toEqual('Shipping Address');
  logger.info(`Validation result: Expected "Shipping Address", received "${text}"`);
})

When('Fill Shipping Address form', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.fillShippingAddressForm();
  logger.info('Shipping Address form filled successfully');
})

When('Click "Continue" button', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.clickContinueButton();
  logger.info('Successfully clicked the "Continue" button.');
})

When('Fetch Total amount in Order Summary section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  this.totalAmount = await this.QABoxShopTEMPPage.totalAmount();
  logger.info(`Successfully fetched the Total amount: ${this.totalAmount}`);
})

When('Click "Place Order" button', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.clickPlaceOrderButton();
  logger.info('Successfully clicked the "Place Order" button')
})

Then('Validate "Thanks for your purchase!" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateThanksForYourPurchaseText();
  expect(text).toEqual('Thanks for your purchase!');
  logger.info(`Validation result: Expected "Thanks for your purchase!", received "${text}"`);
})

When('Fetch Total amount in Summary section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  this.summaryAmount = await this.QABoxShopTEMPPage.summaryAmount();
  logger.info(`Successfully fetched the Summary amount: ${this.summaryAmount}`);
})

Then('Validate Summary amount and Total amount', async function () {
  expect(this.summaryAmount).toEqual(this.totalAmount)
  console.log(`Summary Amount (${this.summaryAmount}) and Total Amount (${this.totalAmount}) are equal.`);
});

Then('Validate "Shipping and Payment Information" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateShippingAndPaymentInformationText();
  expect(text).toEqual('Shipping and Payment Information');
  logger.info(`Validation result: Expected "Shipping and Payment Information", received "${text}"`);
})

Then('Validate "Recipient and Purchaser" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientAndPurchaserText();
  expect(text).toEqual('Recipient and Purchaser');
  logger.info(`Validation result: Expected "Recipient and Purchaser", received "${text}"`);
})

Then('Validate "Summary" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateSummaryText();
  expect(text).toEqual('Summary');
  logger.info(`Validation result: Expected "Summary", received "${text}"`);
})

Then('Validate "First Name is required" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateFirstNameIsRequiredText();
  expect(text).toEqual('First Name is required');
  logger.info(`Validation result: Expected "First Name is required", received "${text}"`);
})

Then('Validate "Last Name is required" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateLastNameIsRequiredText();
  expect(text).toEqual('Last Name is required');
  logger.info(`Validation result: Expected "Last Name is required", received "${text}"`);
})

Then('Validate "Email is required" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateEmailIsRequiredText();
  expect(text).toEqual('Email is required');
  logger.info(`Validation result: Expected "Email is required", received "${text}"`);
})

Then('Validate "Address is required" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateAddressIsRequiredText();
  expect(text).toEqual('Address is required');
  logger.info(`Validation result: Expected "Address is required", received "${text}"`);
})

Then('Validate "City is required" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateCityIsRequiredText();
  expect(text).toEqual('City is required');
  logger.info(`Validation result: Expected "City is required", received "${text}"`);
})

Then('Validate "Province or State is required" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateProvinceStateIsRequiredText();
  expect(text).toEqual('Province/State is required');
  logger.info(`Validation result: Expected "Province/State is required", received "${text}"`);
})

Then('Validate "Postal code is required" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validatePostalCodeIsRequiredText();
  expect(text).toEqual('Postal code is required');
  logger.info(`Validation result: Expected "Postal code is required", received "${text}"`);
})

Then('Validate "Missing Required Fields" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateMissingRequiredFieldsText();
  logger.info(`Validation result: Expected "Missing Required Fields. Please See Above.", received "${text}"`);
})

When('Check "This is a Gift" checkbox', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.checkThisIsGiftCB();
  logger.info('Successfully checked "This is a Gift" checkbox.');
})

When('Fill Shipping Address form for Gift Order', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.fillShippingAddressFormForGiftOrder();
  logger.info('Shipping Address form for Gift Order filled successfully');
})

When('Fill Recipient Information form for Gift Order', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.fillRecipientInformationFormForGiftOrder();
  logger.info('Recipient Information form for Gift Order filled successfully');
})

Then('Validate "Payment" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validatePaymentText();
  expect(text).toEqual('Payment');
  logger.info(`Validation result: Expected "Payment", received "${text}"`);
})

Then('Validate "Billing Information" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateBillingInformationText();
  expect(text).toEqual('Billing Information');
  logger.info(`Validation result: Expected "Billing Information", received "${text}"`);
})

Then('Validate "Billing Address" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateBillingAddressText();
  expect(text).toEqual('Billing Address');
  logger.info(`Validation result: Expected "Billing Address", received "${text}"`);
})

When('Fill Billing Information Form', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.fillBillingInformationForm();
  logger.info('Billing Information form filled successfully');
})

When('Fill Billing Address Form', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.fillBillingAddressForm();
  logger.info('Billing Address form filled successfully');
})

When('Click "Continue" 2 button', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.clickContinue2Button();
  logger.info('Successfully clicked the "Continue" 2 button.');
})

Then('Validate "Have a coupon or discount code?" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateHaveACouponOrDiscountCodeText();
  expect(text).toEqual('Have a coupon or discount code?');
  logger.info(`Validation result: Expected "Have a coupon or discount code?", received "${text}"`);
})

When('Click Coupon icon', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.clickCouponIcon();
  logger.info('Successfully clicked the Coupon icon');
})

When('fill Coupon Code {string}', async function (couponCode) {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.fillCouponCode(couponCode);
  logger.info(`Filled in the coupon code: ${couponCode}`);
})

When('Click "Apply" button', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  await this.QABoxShopTEMPPage.clickApplyButton();
  logger.info('Successfully clicked the "Apply" button');
})

Then('Validate "freeship" coupon is applied', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateFreeshipIsApplied();
  expect(text).toEqual('freeship');
  logger.info(`Coupon validation check returned: ${text}`);
})

Then('Validate "free shipping" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateFreeShippingText();
  expect(text).toEqual('free shipping');
  logger.info(`Validation result: Expected "free shipping", received "${text}"`);
})
When('Fetch Order Summary discount amount', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  this.orderSummaryDiscountAmount = await this.QABoxShopTEMPPage.orderSummaryDiscountAmount();
  console.log(`Successfully fetched the Order Summary discount amount: ${this.orderSummaryDiscountAmount}`);
})

When('Fetch Summary coupon discount amount', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  this.summaryCouponDiscountAmount = await this.QABoxShopTEMPPage.summaryCouponDiscountAmount();
  console.log(`Successfully fetched the Summary coupon discount amount: ${this.summaryCouponDiscountAmount}`);
})

Then('Validate Order Summary discount amount and Summary coupon discount amount', async function () {
  expect(this.orderSummaryDiscountAmount).toEqual(this.summaryCouponDiscountAmount)
  console.log(`Order Summary discount amount (${this.orderSummaryDiscountAmount}) and Summary coupon discount amount (${this.summaryCouponDiscountAmount}) are equal.`);
});

Then('Validate "This coupon cannot be used with other coupons." text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateThisCouponCannotBeUsedText();
  expect(text).toEqual('This coupon cannot be used with other coupons.');
  logger.info(`Validation result: Expected "This coupon cannot be used with other coupons.", received "${text}"`);
})

Then('Validate "STAY15" coupon is applied', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateSTAY15IsApplied();
  expect(text).toEqual('STAY15');
  logger.info(`Coupon validation check returned: ${text}`);
})

Then('Validate Total amount in Order Summary section to be {string}', async function (amount) {
  expect(this.totalAmount.toString()).toEqual(amount)
  logger.info(`Successfully validated the Total amount: ${this.totalAmount}`);
})

When('Validate Total amount in Summary section to be {string}', async function (amount) {
  expect(this.summaryAmount.toString()).toEqual(amount)
  logger.info(`Successfully validated the Total amount in Summary section: ${this.summaryAmount}`);
})

Then('Validate "State is required" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateStateIsRequiredText();
  expect(text).toEqual('State is required');
  logger.info(`Validation result: Expected "State is required", received "${text}"`);
})

Then('Validate "Country is required" text', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateCountryIsRequiredText();
  expect(text).toEqual('Country is required');
  logger.info(`Validation result: Expected "Country  is required", received "${text}"`);
})

Then('Verify the Recipient First Name text field has no value under Recipient Information section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientFirstNameValueValue();
  expect(text).toEqual("");
  logger.info('Verified that the Recipient First Name text field is empty as expected.');
});

Then('Verify the Recipient Last Name text field has no value under Recipient Information section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientLastNameValue();
  expect(text).toEqual("");
  logger.info('Verified that the Recipient Last Name text field is empty as expected.');
});

Then('Verify the Recipient Phone Number text field has no value under Recipient Information section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientPhoneNumberValue();
  expect(text).toEqual("");
  logger.info('Verified that the Recipient Phone Number text field is empty as expected.');
});

Then('Verify the Recipient Email text field has no value under Recipient Information section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientEmailValue();
  expect(text).toEqual("");
  logger.info('Verified that the Recipient Email text field is empty as expected.');
});

Then('Verify the Recipient Address 1 text field has no value under Recipient Information section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientAddressValue();
  expect(text).toEqual("");
  logger.info('Verified that the Recipient Address 1 text field is empty as expected.');
});

Then('Verify the Recipient Address 2 text field has no value under Recipient Information section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientAddress2Value();
  expect(text).toEqual("");
  logger.info('Verified that the Recipient Address 2 text field is empty as expected.');
});

Then('Verify the Recipient City text field has no value under Recipient Information section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientCityValue();
  expect(text).toEqual("");
  logger.info('Verified that the Recipient City text field is empty as expected.');
});

Then('Verify the Recipient Postal Code text field has no value under Recipient Information section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientPostalCodeValue();
  expect(text).toEqual("");
  logger.info('Verified that the Recipient Postal Code text field is empty as expected.');
});

Then('Verify the Recipient Province text field has no value under Recipient Information section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientProvinceValue();
  expect(text).toEqual("");
  logger.info('Verified that the Recipient Province text field is empty as expected.');
});

Then('Verify the Recipient Country text field has value "Choose Country*" under Recipient Information section', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateRecipientCountryValue();
  expect(text).toEqual("Choose Country*");
  logger.info('Verified that the Recipient Country text field has the value "Choose Country*" as expected.');
});


Then('Validate "First Name is required" text for gift', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateFirstNameIsRequiredTextForGift();
  expect(text).toEqual('First Name is required');
  logger.info(`Validation result: Expected "First Name is required", received "${text}"`);
})

Then('Validate "Last Name is required" text for gift', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateLastNameIsRequiredTextForGift();
  expect(text).toEqual('Last Name is required');
  logger.info(`Validation result: Expected "Last Name is required", received "${text}"`);
})

Then('Validate "Email address is missing" text for gift', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateEmailAddressIsMissingTextForGift();
  expect(text).toEqual('Email address is missing');
  logger.info(`Validation result: Expected "Email address is missing", received "${text}"`);
})

Then('Validate "Address is required" text for gift', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateAddressIsRequiredTextForGift();
  expect(text).toEqual('Address is required');
  logger.info(`Validation result: Expected "Address is required", received "${text}"`);
})

Then('Validate "City is required" text for gift', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateCityIsRequiredTextForGift();
  expect(text).toEqual('City is required');
  logger.info(`Validation result: Expected "City is required", received "${text}"`);
})

Then('Validate "State is required" text for gift', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validateStateIsRequiredTextForGift();
  expect(text).toEqual('State is required');
  logger.info(`Validation result: Expected "State is required", received "${text}"`);
})

Then('Validate "Postal code is required" text for gift', async function () {
  this.QABoxShopTEMPPage = await this.pomManager.getQABoxShopTEMPPage();
  let text = await this.QABoxShopTEMPPage.validatePostalCodeIsRequiredTextForGift();
  expect(text).toEqual('Postal code is required');
  logger.info(`Validation result: Expected "Postal code is required", received "${text}"`);
})
