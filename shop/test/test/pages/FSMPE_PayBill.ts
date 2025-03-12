import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';
import { expect, FrameLocator, Locator, type Page } from '@playwright/test';



export class FSMPE_PayBill {
    page: Page;
    readonly enterYourAccountNumberToPayOutstandingInvoiceText: Locator;
    readonly submitButton: Locator;
    readonly hereLink: Locator;
    readonly lastNameValue: Locator;
    readonly purchaserValue: Locator;
    readonly postalCodeValue: Locator;
    readonly thereAreNoOutstandingInvoicesText: Locator;
    readonly purchaser: Locator;
    readonly lastName: Locator;
    readonly payBillButton: Locator;
    readonly thankYouForPayingYourOutstandingBillText: Locator;
    readonly postalCode: Locator;



    constructor(page: Page) {
        this.page = page;
        this.enterYourAccountNumberToPayOutstandingInvoiceText = page.getByText('Enter your account number to pay outstanding invoice')
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.hereLink = page.getByText('here')
        this.lastNameValue = page.locator("//input[@name='lastName' and @value='']")
        this.purchaserValue = page.locator("//input[@name='purchaser' and @value='']")
        this.postalCodeValue = page.locator("//input[@name='postalCode' and @value='']")
        this.thereAreNoOutstandingInvoicesText = page.getByText('There are no outstanding invoices on this account')
        this.purchaser = page.locator('//input[@name="purchaser"]')
        this.lastName = page.locator('//input[@name="lastName"]')
        this.postalCode = page.locator('//input[@name="postalCode"]')
        this.payBillButton = page.getByRole('button', { name: 'Pay Bill' })
        this.thankYouForPayingYourOutstandingBillText = page.getByText('Thank you for paying your outstanding bill!')
    }

    async validateEnterYourAccountNumberToPayOutstandingInvoiceText() {
        await expect(this.enterYourAccountNumberToPayOutstandingInvoiceText).toBeVisible({ timeout: 60000 });
        await this.enterYourAccountNumberToPayOutstandingInvoiceText.scrollIntoViewIfNeeded();
        let text = await this.enterYourAccountNumberToPayOutstandingInvoiceText.textContent();
        return text;
    }

    async clickSubmitButton() {
        await expect(this.submitButton).toBeVisible({ timeout: 60000 });
        await this.submitButton.scrollIntoViewIfNeeded();
        await this.submitButton.click();
    }

    async clickHereLink() {
        await expect(this.hereLink).toBeVisible({ timeout: 60000 });
        await this.hereLink.scrollIntoViewIfNeeded();
        await this.hereLink.click();
    }

    async getLastNameValue() {
        await expect(this.lastNameValue).toBeVisible({ timeout: 60000 });
        await this.lastNameValue.scrollIntoViewIfNeeded();
        let text = await this.lastNameValue.getAttribute('value');
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

    async validateThereAreNoOutstandingInvoicesText() {
        await expect(this.thereAreNoOutstandingInvoicesText).toBeVisible({ timeout: 60000 });
        await this.thereAreNoOutstandingInvoicesText.scrollIntoViewIfNeeded();
        let text = await this.thereAreNoOutstandingInvoicesText.textContent();
        return text;
    }

    async fillPurchaser(purchaser: string) {
        await expect(this.purchaser).toBeVisible({ timeout: 60000 });
        await this.purchaser.scrollIntoViewIfNeeded();
        await this.purchaser.fill(purchaser);
    }

    async fillLastName(lastName: string) {
        await expect(this.lastName).toBeVisible({ timeout: 60000 });
        await this.lastName.scrollIntoViewIfNeeded();
        await this.lastName.fill(lastName);
    }

    async fillPostalCode(postalCode: string) {
        await expect(this.postalCode).toBeVisible({ timeout: 60000 });
        await this.postalCode.scrollIntoViewIfNeeded();
        await this.postalCode.fill(postalCode);
    }

    async clickPayBillButton() {
        await expect(this.payBillButton).toBeVisible({ timeout: 60000 });
        await this.payBillButton.scrollIntoViewIfNeeded();
        await this.payBillButton.click();
    }

    async validateThankYouForPayingYourOutstandingBillText() {
        await expect(this.thankYouForPayingYourOutstandingBillText).toBeVisible({ timeout: 60000 });
        await this.thankYouForPayingYourOutstandingBillText.scrollIntoViewIfNeeded();
        let text = await this.thankYouForPayingYourOutstandingBillText.textContent();
        return text;
    }
}