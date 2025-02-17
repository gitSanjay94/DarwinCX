import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'




When('Click Payment Account Management', async function () {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.clickPaymentAccountManagementButton();
    logger.info('Clicked Payment Account Management');
});

Then('Validate {string} message in Payment Account Management popup', async function (message) {
    this.pamPage = this.pomManager.getPaymentAccountManagementPage();
    let messageText = await this.pamPage.validateNoPaymentsAccountsTXT();
    expect(messageText).toContain(message);
    logger.info(`${message} message in Payment Account Management popup is successfully validated`);
});

When('Click OK on Transaction Confirmation popup', async function () {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.clickOkOnTransactionConfirmation();
    logger.info('Clicked OK on Transaction Confirmation popup');
});

Then('Validate {string} message in Transaction Confirmation popup', async function (message) {
    let messageText = await this.pamPage.validateMessageInTransactionConfirmationPopup();
    expect(messageText).toContain(message);
    logger.info(`${message} message in Transaction Confirmation popup is successfully validated`);
});

When('Click on Close button in Payment Account Management popup', async function () {
    await this.pamPage.clickOnCloseButton();
    logger.info('Clicked the Close button in Payment Account Management popup');
});

When('Click Remove in Credit Card Accounts section', async function () {
    this.pamPage = this.pomManager.getPaymentAccountManagementPage();
    await this.page.waitForTimeout(10000)
    await this.pamPage.clickOnRemove();
    logger.info('Clicked the Remove button in Credit Card Accounts section');
});

When('Click Cancel button in Purchase Subscription', async function () {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    await this.psPage.clickCancelButton();
    logger.info('Clicked the Cancel button in Purchase Subscription');
});

Then('Check Saved Card Input to be visible', async function () {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    let savedCardInput = await this.psPage.savedCardInputToBeVisible();
    await expect(savedCardInput).toBeVisible({ timeout: 10000 });
    logger.info('Verified that the saved card input is visible');
});

Then('Check Saved Card Input to be hidden', async function () {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    let savedCardInput = await this.psPage.savedCardInputToBeHidden();
    await expect(savedCardInput).toBeHidden({ timeout: 10000 });
    logger.info('Verified that the saved card input is hidden');
});

