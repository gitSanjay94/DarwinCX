
import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class CouragePayBillPaymentsPage {
  page: Page;
  readonly enterYourAccountNumberToPayOutstandingInvoiceText: Locator;
  readonly purchaser: Locator;
  readonly hereLink: Locator;
  readonly submitButton: Locator;
  readonly lastName: Locator;
  readonly payBillButton: Locator;
  readonly thankYouForPayingYourOutstandingBillText: Locator;
  readonly postalCode: Locator;
  readonly enterYourAccountNumberToRenewText: Locator;
  readonly weFoundYourAccountText: Locator;
  readonly availableRenewalsCB: Locator;
  readonly renewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterYourAccountNumberToPayOutstandingInvoiceText = page.getByText('Enter your account number to pay outstanding invoice')
    this.purchaser = page.locator('//input[@name="purchaser"]')
    this.hereLink = page.getByText('here')
    this.submitButton = page.getByRole('button', { name: 'Submit' })
    this.lastName = page.locator('//input[@name="lastName"]')
    this.payBillButton = page.getByRole('button', { name: 'Pay Bill' })
    this.thankYouForPayingYourOutstandingBillText = page.getByText('Thank you for paying your outstanding bill!')
    this.postalCode = page.locator('//input[@name="postalCode"]')
    this.enterYourAccountNumberToRenewText = page.getByText('Enter your account number to renew')
    this.weFoundYourAccountText = page.getByText('We found your account! Please scroll down and make your selection')
    this.availableRenewalsCB = page.locator("//input[@id='602133225' and @type='checkbox']").first()
    this.renewButton = page.getByRole('button', { name: 'Renew' })

  }

  async validateEnterYourAccountNumberToPayOutstandingInvoiceText() {
    await expect(this.enterYourAccountNumberToPayOutstandingInvoiceText).toBeVisible({ timeout: 60000 });
    await this.enterYourAccountNumberToPayOutstandingInvoiceText.scrollIntoViewIfNeeded();
    let text = await this.enterYourAccountNumberToPayOutstandingInvoiceText.textContent();
    return text;
  }

  async fillPurchaser(purchaser: string) {
    await expect(this.purchaser).toBeVisible({ timeout: 60000 });
    await this.purchaser.scrollIntoViewIfNeeded();
    await this.purchaser.fill(purchaser);
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

  async fillLastName(lastName: string) {
    await expect(this.lastName).toBeVisible({ timeout: 60000 });
    await this.lastName.scrollIntoViewIfNeeded();
    await this.lastName.fill(lastName);
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

  async fillPostalCode(postalCode: string) {
    await expect(this.postalCode).toBeVisible({ timeout: 60000 });
    await this.postalCode.scrollIntoViewIfNeeded();
    await this.postalCode.fill(postalCode);
  }

  async validateEnterYourAccountNumberToRenewText() {
    await expect(this.enterYourAccountNumberToRenewText).toBeVisible({ timeout: 60000 });
    await this.enterYourAccountNumberToRenewText.scrollIntoViewIfNeeded();
    let text = await this.enterYourAccountNumberToRenewText.textContent();
    return text;
  }

  async validateWeFoundYourAccountText() {
    await expect(this.weFoundYourAccountText).toBeVisible({ timeout: 60000 });
    await this.weFoundYourAccountText.scrollIntoViewIfNeeded();
    let text = await this.weFoundYourAccountText.textContent();
    return text;
  }

  async checkAvailableRenewalsCB() {
    await expect(this.availableRenewalsCB).toBeVisible({ timeout: 60000 });
    await this.availableRenewalsCB.scrollIntoViewIfNeeded();
    await this.availableRenewalsCB.check();
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
  
}
