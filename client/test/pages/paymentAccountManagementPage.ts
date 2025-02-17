import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';

export class paymentAccountManagementPage {
    page: Page;
    readonly noPaymentAccountsTXT: Locator;
    readonly creditCardAccountsTXT: Locator;
    readonly removeTXT: Locator;
    readonly confirmButton: Locator;
    readonly closeButton: Locator;
    readonly message: Locator;


    constructor(page: Page) {
        this.page = page;
        this.noPaymentAccountsTXT = page.locator("//div[contains(text(),'No payment accounts')]")
        this.creditCardAccountsTXT = page.locator("//div[text()='Credit Card Accounts']")
        this.removeTXT = page.locator("//span[normalize-space()='Remove']")
        this.confirmButton = page.locator("//button[normalize-space()='Confirm']")
        this.closeButton = page.locator("//button[normalize-space()='Close']")
        this.message = page.locator("//div[normalize-space()='all payment tokens have been removed']")


    }
    async validateNoPaymentsAccountsTXT() {
        try {
            await expect(this.noPaymentAccountsTXT).toBeVisible({ timeout: 60000 })
            let text = await this.noPaymentAccountsTXT.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.noPaymentAccountsTXT} not found or not visible: `, error);
            console.error(`Element ${this.noPaymentAccountsTXT} not found or not visible: `, error);
        }
    }

    async clickOnRemove() {
        try {
            await expect(this.removeTXT).toBeVisible({ timeout: 60000 })
            await this.removeTXT.click();
            await this.confirmButton.click();
        } catch (error) {
            logger.info(`Element ${this.removeTXT} not found or not visible: `, error);
            console.error(`Element ${this.removeTXT} not found or not visible: `, error);
        }
    }

    async clickOnCloseButton() {
        try {
            await expect(this.closeButton).toBeVisible({ timeout: 60000 })
            await this.closeButton.click();
        } catch (error) {
            logger.info(`Element ${this.closeButton} not found or not visible: `, error);
            console.error(`Element ${this.closeButton} not found or not visible: `, error);
        }
    }

    async validateMessageInTransactionConfirmationPopup() {
        try {
            await expect(this.message).toBeVisible({ timeout: 60000 })
            let text = await this.message.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.message} not found or not visible: `, error);
            console.error(`Element ${this.message} not found or not visible: `, error);
        }
    }


}