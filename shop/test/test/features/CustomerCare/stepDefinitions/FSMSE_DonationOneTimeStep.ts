import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { FSMSE_DonationOneTimePage_LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens URL FSMSE_DonationOneTimePage', async function () {
    try {
        await this.page.goto(process.env.BASEURL + FSMSE_DonationOneTimePage_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the Donation Error Msg page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate "Donation Amount" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateDonationAmountText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Donation Amount');
    logger.info(`Validation result: Expected "Donation Amount", received "${text}"`);
})

When('Select Donation Amount at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.selectDonationAmount();
    logger.info('Donation Amount selected successfully');
})

When('Select Recurring Monthly radio button at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.selectRecurringMonthlyRdBtn();
    logger.info('Recurring Monthly radio button selected successfully');
})

When('Select One Time radio button at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.selectOneTimeRdBtn();
    logger.info('One Time radio button selected successfully');
})

When('Click Next button at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.clickNextButton();
    logger.info('Successfully clicked the Next button');
})

Then('Validate "Donor Information" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateDonorInformationText();
    expect(text).toEqual('Donor Information');
    logger.info(`Validation result: Expected "Donor Information", received "${text}"`);
})

When('Fill Donor Information form at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.fillDonorInformationForm();
    logger.info('Successfully filled out the Donor Information form');
})

When('Fill Canadian Donor Information form at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.fillDonorInformationFormCA();
    logger.info('Successfully filled out the Donor Information form');
})

When('Select In Honour Of radio button at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.selectInHonourOfRdBtn();
    logger.info('In Honour Of radio button selected successfully');
})

When('Select In Memory Of radio button at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.selectInMemoryOfRdBtn();
    logger.info('In Memory Of radio button selected successfully');
})

When('Fill Donation Tribute Recipient at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.fillDonationTributeRecipient();
    logger.info('Successfully filled out the Donation Tribute Recipient');
})

Then('Validate "Payment Method" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validatePaymentMethodText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Payment Method');
    logger.info(`Validation result: Expected "Payment Method", received "${text}"`);
})

When('Select Anonymous checkbox at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.selectAnonymousCB();
    logger.info('Anonymous checkbox selected successfully');
})

When('Click Donate button at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.clickDonateButton();
    logger.info('Successfully clicked the Donate button');
})

Then('Validate Donor Name as "anonymous" at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateDonorName();
    expect(text).toContain('anonymous');
    logger.info('Donor name validated successfully as anonymous.');
})

Then('Validate "Name is missing" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateNameIsMissingText();
    expect(text).toEqual('Name is missing');
    logger.info(`Validation result: Expected "Name is missing", received "${text}"`);
})

Then('Validate "required" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateRequiredText();
    expect(text).toEqual('required');
    logger.info(`Validation result: Expected "required", received "${text}"`);
})

When('Select Donation Foundation checkbox at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.selectDonationFoundationCB();
    logger.info('Donation Foundation checkbox selected successfully');
})

When('Fill Organization Name at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.fillOrganizationName();
    logger.info('Successfully filled out the Organization Name.');
})

Then('Validate "Invalid amount" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateInvalidAmountText();
    expect(text).toEqual("Invalid amount (remove comma or letters)");
    logger.info(`Validation result: Expected "Invalid amount (remove comma or letters)", received "${text}"`);
})

Then('Validate "Amount cannot be blank" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateAmountCannotBeBlankText();
    expect(text).toEqual('Amount cannot be blank');
    logger.info(`Validation result: Expected "Amount cannot be blank", received "${text}"`);
})

When('Fill Other Amount with invalid values at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.fillOtherAmount();
    logger.info('Filled Other Amount with invalid values.');
})

Then('Validate "First Name is missing" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateFirstNameIsMissingText();
    expect(text).toEqual('First Name is missing');
    logger.info(`Validation result: Expected "First Name is missing", received "${text}"`);
})

Then('Validate "Last Name is missing" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateLastNameIsMissingText();
    expect(text).toEqual('Last Name is missing');
    logger.info(`Validation result: Expected "Last Name is missing", received "${text}"`);
})

Then('Validate "City is missing" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateCityIsMissingText();
    expect(text).toEqual('City is missing');
    logger.info(`Validation result: Expected "City is missing", received "${text}"`);
})

Then('Validate "Select a Province" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateSelectProvinceText();
    expect(text).toEqual('Select a Province/State');
    logger.info(`Validation result: Expected "Select a Province/State", received "${text}"`);
})

Then('Validate "Postal code is missing" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validatePostalCodeIsMissingText();
    expect(text).toEqual('Postal code is missing');
    logger.info(`Validation result: Expected "Postal code is missing", received "${text}"`);
})

Then('Validate "Country is missing" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateCountryIsMissingText();
    expect(text).toEqual('Country is missing');
    logger.info(`Validation result: Expected "Country is missing", received "${text}"`);
})

Then('Validate "Email address is missing" text at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateEmailAddressIsMissingText();
    expect(text).toEqual('Email address is missing');
    logger.info(`Validation result: Expected "Email address is missing", received "${text}"`);
})

Then('Validate "Your card number is incomplete" alert message at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateCardNumberIncompleteText();
    expect(text).toEqual('Your card number is incomplete.. Please go back and update your donator info');
    logger.info(`Validation result: Expected "Your card number is incomplete", received "${text}"`);
})

Then('Validate "Your card number is invalid" alert message at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateCardNumberInvalidText();
    expect(text).toEqual('Your card number is invalid.. Please go back and update your donator info');
    logger.info(`Validation result: Expected "Your card number is invalid", received "${text}"`);
})

Then('Validate "Your cards expiry year is in the past" alert message at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.validateCardExpirationText();
    expect(text).toContain('Your card\'s expiry year is in the past.. Please go back and update your donator info');
    logger.info(`Validation result: Expected "Your cards expiration year is in the past", received "${text}"`);
})

When('Click "Go Back" button at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.clickGoBackButton();
    logger.info('Successfully clicked Go Back button');
})

Then('Validate First Name has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.firstNameValue();
    if (text.trim() !== '') {
        logger.info("First Name has a value:", text);
    } else {
        logger.info("First Name is empty");
        throw new Error("First Name should not be empty");
    }
})

Then('Validate Last Name has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.lastNameValue();
    if (text.trim() !== '') {
        logger.info("Last Name has a value:", text);
    } else {
        logger.info("Last Name is empty");
        throw new Error("Last Name should not be empty");
    }
})

Then('Validate Company Name has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.companyNameValue();
    if (text.trim() !== '') {
        logger.info("Company Name has a value:", text);
    } else {
        logger.info("Company Name is empty");
        throw new Error("Company Name should not be empty");
    }
})

Then('Validate Job title has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.jobTitleValue();
    if (text.trim() !== '') {
        logger.info("Job title has a value:", text);
    } else {
        logger.info("Job title is empty");
        throw new Error("Job title should not be empty");
    }
})

Then('Validate address has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.addressValue();
    if (text.trim() !== '') {
        logger.info("address has a value:", text);
    } else {
        logger.info("address is empty");
        throw new Error("address should not be empty");
    }
})

Then('Validate city has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.cityValue();
    if (text.trim() !== '') {
        logger.info("city has a value:", text);
    } else {
        logger.info("city is empty");
        throw new Error("city should not be empty");
    }
})

Then('Validate postal code has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.postalCodeValue();
    if (text.trim() !== '') {
        logger.info("postal code has a value:", text);
    } else {
        logger.info("postal code is empty");
        throw new Error("postal code should not be empty");
    }
})

Then('Validate phone number has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.phoneNumberValue();
    if (text.trim() !== '') {
        logger.info("phone number has a value:", text);
    } else {
        logger.info("phone number is empty");
        throw new Error("phone number should not be empty");
    }
})

Then('Validate email has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.emailValue();
    if (text.trim() !== '') {
        logger.info("email has a value:", text);
    } else {
        logger.info("email is empty");
        throw new Error("email should not be empty");
    }
})

Then('Validate "In honour of" radio button is checked at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    const isInHonourOfChecked = await this.FSMSE_DonationOneTimePage.inHonourOfRBChecked();
    if (isInHonourOfChecked) {
        logger.info("The 'In Honour Of' radio button is checked.");
    } else {
        logger.info("The 'In Honour Of' radio button is not checked.");
        throw new Error("'In Honour Of' radio button should be checked but it is not.");
    }
})

Then('Validate "I am donating on behalf of a company" checkbox is checked at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    const isDonationFoundationChecked = await this.FSMSE_DonationOneTimePage.isDonationFoundationCBChecked();
    if (isDonationFoundationChecked) {
        logger.info("The 'I am donating on behalf of a company' checkbox is checked.");
    } else {
        logger.info("The 'I am donating on behalf of a company' checkbox is not checked.");
        throw new Error("'I am donating on behalf of a company' checkbox should be checked but it is not.");
    }
})

Then('Validate donation tribute recipient has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.donationTributeRecipientValue();
    if (text.trim() !== '') {
        logger.info("donation tribute recipient has a value:", text);
    } else {
        logger.info("donation tribute recipient is empty");
        throw new Error("donation tribute recipient should not be empty");
    }
})

Then('Validate organization name has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.organizationNameValue();
    if (text.trim() !== '') {
        logger.info("organization name has a value:", text);
    } else {
        logger.info("organization name is empty");
        throw new Error("organization name should not be empty");
    }
})

Then('Validate "Anonymous" checkbox is checked at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    const isAnonymousChecked = await this.FSMSE_DonationOneTimePage.validateAnonymousCBChecked();
    if (isAnonymousChecked) {
        logger.info("The 'Anonymous' checkbox is checked.");
    } else {
        logger.info("The 'Anonymous' checkbox is not checked.");
        throw new Error("'Anonymous' checkbox should be checked but it is not.");
    }
})

When('Fill donation recognition at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.fillDonationRecognition();
    logger.info('Donation recognition has been filled successfully.');
})

Then('Validate donation recognition has a value at FSMSE_DonationOneTime Page', async function () {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    let text = await this.FSMSE_DonationOneTimePage.donationRecognitionValue();
    if (text.trim() !== '') {
        logger.info("donation recognition has a value:", text);
    } else {
        logger.info("donation recognition is empty");
        throw new Error("donation recognition should not be empty");
    }
})

When('Enter donation amount as {string} in Other Amount text field at FSMSE_DonationOneTime Page', async function (amount) {
    this.FSMSE_DonationOneTimePage = await this.pomManager.getFSMSE_DonationOneTimePage();
    await this.FSMSE_DonationOneTimePage.fillUserDonationAmount(amount);
    logger.info(`Entering donation amount of ${amount} in the Other Amount text field.`);
})


























