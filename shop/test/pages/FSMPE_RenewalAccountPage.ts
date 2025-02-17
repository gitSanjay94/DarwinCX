
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';
import { expect, FrameLocator, Locator, type Page } from '@playwright/test';



export class FSMPE_RenewalAccountPage {
    page: Page;
    readonly enterYourAccountNumberToRenewText: Locator;
    readonly purchaserValue: Locator;
    readonly postalCodeValue: Locator;
    readonly hereLink: Locator;
    readonly submitButton: Locator;
    readonly lastNameValue: Locator;
    readonly purchaser: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly thisAccountIsNotUpForRenewalText: Locator;
    readonly inputOutOfRangeMsg: Locator;
    readonly weFoundYourAccountText: Locator;
    readonly renewButton: Locator;
    readonly availableRenewalsCB: Locator;

    constructor(page: Page) {
        this.page = page;
        this.enterYourAccountNumberToRenewText = page.getByText('Enter your account number to renew')
        this.purchaserValue = page.locator("//input[@name='purchaser' and @value='']")
        this.postalCodeValue = page.locator("//input[@name='postalCode' and @value='']")
        this.hereLink = page.getByText(' here');
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.lastNameValue = page.locator("//input[@name='lastName' and @value='']")
        this.purchaser = page.getByPlaceholder('Do you have an account number?')
        this.lastName = page.getByPlaceholder('Please type your Last Name')
        this.postalCode = page.getByPlaceholder('Please type your Postal Code or Zip Code')
        this.thisAccountIsNotUpForRenewalText = page.getByText('This account is not up for renewal')
        this.inputOutOfRangeMsg = page.getByText('Input out of range')
        this.weFoundYourAccountText = page.getByText('We found your account! Please scroll down and make your selection')
        this.renewButton = page.getByRole('button', { name: 'Renew' })
        this.availableRenewalsCB = page.locator("//input[@id='602133225' and @type='checkbox']").first()
    }

    async validateEnterYourAccountNumberToRenewText() {
        await expect(this.enterYourAccountNumberToRenewText).toBeVisible({ timeout: 80000 });
        await this.enterYourAccountNumberToRenewText.scrollIntoViewIfNeeded();
        let text = await this.enterYourAccountNumberToRenewText.textContent();
        return text;
    }

    async getPurchaserValue() {
        await expect(this.purchaserValue).toBeVisible({ timeout: 60000 });
        await this.purchaserValue.scrollIntoViewIfNeeded();
        let text = await this.purchaserValue.getAttribute('value');
        return text;
    }

    async getPostalCodeValue() {
        await expect(this.postalCodeValue).toBeVisible({ timeout: 60000 });
        await this.postalCodeValue.scrollIntoViewIfNeeded();
        let text = await this.postalCodeValue.getAttribute('value');
        return text;
    }

    async clickHereLink() {
        await expect(this.hereLink).toBeVisible({ timeout: 60000 });
        await this.hereLink.scrollIntoViewIfNeeded();
        await this.hereLink.click();
    }

    async clickSubmitButton() {
        await expect(this.submitButton).toBeVisible({ timeout: 60000 });
        await this.submitButton.scrollIntoViewIfNeeded();
        await this.submitButton.click();
    }

    async getLastNameValue() {
        await expect(this.lastNameValue).toBeVisible({ timeout: 60000 });
        await this.lastNameValue.scrollIntoViewIfNeeded();
        let text = await this.lastNameValue.getAttribute('value');
        return text;
    }

    async fillPurchaser(purchaser: string) {
        await expect(this.purchaser).toBeVisible({ timeout: 60000 });
        await this.purchaser.scrollIntoViewIfNeeded();
        await this.purchaser.fill(purchaser);
    }

    async fillPostalCode(postalCode: string) {
        await expect(this.postalCode).toBeVisible({ timeout: 60000 });
        await this.postalCode.scrollIntoViewIfNeeded();
        await this.postalCode.fill(postalCode);
    }

    async fillLastName(lastName: string) {
        await expect(this.lastName).toBeVisible({ timeout: 60000 })
        await this.lastName.scrollIntoViewIfNeeded();
        await this.lastName.fill(lastName);
    }

    async validateThisAccountIsNotUpForRenewalText() {
        await expect(this.thisAccountIsNotUpForRenewalText).toBeVisible({ timeout: 60000 });
        await this.thisAccountIsNotUpForRenewalText.scrollIntoViewIfNeeded();
        let text = await this.thisAccountIsNotUpForRenewalText.textContent();
        return text;
    }

    async validateInputOutOfRangeMsg() {
        await expect(this.inputOutOfRangeMsg).toBeVisible({ timeout: 60000 });
        await this.inputOutOfRangeMsg.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(4000)
        let text = await this.inputOutOfRangeMsg.textContent();
        return text;
    }

    async validateWeFoundYourAccountText() {
        await expect(this.weFoundYourAccountText).toBeVisible({ timeout: 60000 });
        await this.weFoundYourAccountText.scrollIntoViewIfNeeded();
        let text = await this.weFoundYourAccountText.textContent();
        return text;
    }

    async clickRenewButton() {
        const isDisabled = await this.renewButton.getAttribute('disabled');
        if (!isDisabled) {
            // If the button is not disabled, click it
            await this.renewButton.click();
            console.log('Button clicked!');
        } else {
            console.log('Button is disabled');
        }
    }

    async checkAvailableRenewalsCB() {
        await expect(this.availableRenewalsCB).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsCB.scrollIntoViewIfNeeded();
        await this.availableRenewalsCB.check();
    }

}
