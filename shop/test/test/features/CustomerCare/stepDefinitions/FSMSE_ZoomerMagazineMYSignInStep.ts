import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CSC2_ZoomerMagazineMYSignIn_URL } from '../../../../src/constants';

Given('User opens URL FSMSE_ZoomerMagazineMYSignInPage', async function () {
    try {
        await this.page.goto(CSC2_ZoomerMagazineMYSignIn_URL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the FSMSE_ZoomerMagazineMYSignInPage: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

Then('Validate Welcome text at FSMSE_ZoomerMagazineMYSignIn Page', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    let text = await this.FSMSE_ZoomerMagazineMYSignInPage.validateWelcomeText();
    expect(text).toEqual('Welcome!');
    logger.info(`Validation result: Expected "Welcome!", received "${text}"`);
})

Then('Validate Sign in with your email and password text at FSMSE_ZoomerMagazineMYSignIn Page', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    let text = await this.FSMSE_ZoomerMagazineMYSignInPage.validateSignInWithYourEmailAndPasswordText();
    expect(text).toEqual('Sign in with your email and password');
    logger.info(`Validation result: Expected "Sign in with your email and password", received "${text}"`);
})

When('Sign In with email {string} and password {string} at FSMSE_ZoomerMagazineMYSignIn Page', async function (email, password) {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    await this.FSMSE_ZoomerMagazineMYSignInPage.fillEmailAndPassword(email, password);
    logger.info(`Successfully Sign In with username: ${email} and password: ${password}`);
});

When('Click on Sign In button at FSMSE_ZoomerMagazineMYSignIn Page', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    await this.FSMSE_ZoomerMagazineMYSignInPage.clickSignInButton();
    logger.info('Clicked on the Sign In button on the Zoomer Magazine MY Sign In page');
})

Then('Verify warn message "Thats not the right password at FSMSE_ZoomerMagazineMYSignIn Page." should display to the user', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    await this.FSMSE_ZoomerMagazineMYSignInPage.invalidPasswordWarningMessage();
    logger.info('Verified that the warning message "Thats not the right password." is displayed to the user.');
})

Then('Verify warn message "This email is not associated with an account" should display to the user at FSMSE_ZoomerMagazineMYSignIn Page', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    await this.FSMSE_ZoomerMagazineMYSignInPage.invalidEmailWarningMessage();
    logger.info('Verified that the warning message "This email is not associated with an account" is displayed to the user.');
})

Then('Validate "Link My Subscription Text" in Link My Subscription pop-up at FSMSE_ZoomerMagazineMYSignIn Page', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    let text = await this.FSMSE_ZoomerMagazineMYSignInPage.validateLinkMySubscriptionText();
    expect(text).toEqual('Link My Subscription');
    logger.info(`Validation result: Expected "Link My Subscription", received "${text}"`);
})

When('Click Cancel button in Link My Subscription pop-up at FSMSE_ZoomerMagazineMYSignIn Page', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    await this.FSMSE_ZoomerMagazineMYSignInPage.clickCancelButton();
    logger.info('Clicked the Cancel button in the Link My Subscription pop-up.');
})

Then('Validate My Account Details text at FSMSE_ZoomerMagazineMYSignIn Page', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    let text = await this.FSMSE_ZoomerMagazineMYSignInPage.validateMyAccountDetailsText();
    expect(text).toEqual('My Account Details');
    logger.info(`Validation result: Expected "My Account Details", received "${text}"`);
})

Then('Validate Account Number in My Account Details section at FSMSE_ZoomerMagazineMYSignIn Page', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    let text = await this.FSMSE_ZoomerMagazineMYSignInPage.getAccountNumber();
    expect(text).toContain('1799745');
    logger.info(`Validated account number: Expected '161642701', received '${text}'`);
})

Then('Validate Full Name in My Account Details section at FSMSE_ZoomerMagazineMYSignIn Page', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    let text = await this.FSMSE_ZoomerMagazineMYSignInPage.getFullNameText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('Jonathan test Kok 21');
    logger.info(`Validated Full Name: Expected 'don.derose@darwin.cx', received '${text}'`);
})

Then('Validate Email in My Account Details section at FSMSE_ZoomerMagazineMYSignIn Page', async function () {
    this.FSMSE_ZoomerMagazineMYSignInPage = await this.pomManager.getFSMSE_ZoomerMagazineMYSignInPage();
    let text = await this.FSMSE_ZoomerMagazineMYSignInPage.getEmailText();
    let trimmedText = text.trim();
    expect(trimmedText).toEqual('don.derose@darwin.cx');
    logger.info(`Validated Email: Expected 'don.derose@darwin.cx', received '${text}'`);
})






