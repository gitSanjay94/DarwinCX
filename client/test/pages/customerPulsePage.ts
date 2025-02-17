import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';


export class customerPulsePage {
  page: Page;
  readonly phoneNumberButton: Locator;
  readonly validatedEmailButton: Locator;
  readonly addressButton: Locator;
  readonly paymentButton: Locator;
  readonly phoneNumberInput: Locator;
  readonly updateInfoButton: Locator;
  readonly emailInput: Locator;
  readonly noEmailInformationText: Locator;
  readonly noPhoneNumberInformationText: Locator;
  readonly validAddressInformationText: Locator;
  readonly noPaymentInformationText: Locator;
  readonly validPhoneNumberInformationText: Locator;
  readonly validEmailInformationText: Locator;
  readonly validPaymentInformationText: Locator;
  readonly custInfoUpdate: Locator;

  constructor(page: Page) {
    this.page = page;
    this.phoneNumberButton = page.locator("//button[@id='PhoneNumber']")
    this.validatedEmailButton = page.locator("//button[@id='ValidatedEmail']")
    this.addressButton = page.locator("//button[@id='Address']")
    this.paymentButton = page.locator("//button[@id='Payment']")
    this.phoneNumberInput = page.locator("//input[@placeholder='Phone']")
    this.emailInput = page.locator("//input[@placeholder='Email']")
    this.updateInfoButton = page.getByText('Update Info')
    this.noEmailInformationText = page.getByText('This customer has not provided an email address')
    this.noPhoneNumberInformationText = page.getByText('This customer has no valid phone number')
    this.validAddressInformationText = page.getByText('This customer has valid address information')
    this.noPaymentInformationText = page.getByText('This customer has no payment information on file')
    this.validPhoneNumberInformationText = page.getByText('This customer has a valid phone number')
    this.validEmailInformationText = page.getByText('This customer has provided their email address')
    this.validPaymentInformationText = page.getByText('This customer has payment information on file')
    this.custInfoUpdate = page.locator('div').filter({ hasText: /^Customer InfoUpdate$/ }).getByRole('button');

  }

  async getNoPhoneNumberInformation() {
    await expect(this.phoneNumberButton).toBeVisible({ timeout: 10000 });
    await this.phoneNumberButton.hover();
    await expect(this.noPhoneNumberInformationText).toBeVisible({ timeout: 10000 });
    let text = await this.noPhoneNumberInformationText.innerText();
    return text;
  }


  async fillPhoneNumber(phoneNumber: string) {
    try {
      await expect(this.phoneNumberButton).toBeVisible({ timeout: 10000 });
      await this.phoneNumberButton.click();
      await expect(this.phoneNumberInput).toBeVisible({ timeout: 10000 });
      await this.phoneNumberInput.fill(phoneNumber);
      await expect(this.updateInfoButton).toBeVisible({ timeout: 10000 });
      await this.updateInfoButton.click();
    }
    catch (error) {
      logger.info(`Error occurred while filling phone number: ${error}`)
      throw error
    }
  }

  async getValidPhoneNumberInformation() {
    await expect(this.phoneNumberButton).toBeVisible({ timeout: 30000 });
    await this.phoneNumberButton.hover();
    await expect(this.validPhoneNumberInformationText).toBeVisible({ timeout: 10000 });
    let text = await this.validPhoneNumberInformationText.innerText();
    return text;
  }

  async getValidEmailInformation() {
    await expect(this.validatedEmailButton).toBeVisible({ timeout: 30000 });
    await this.validatedEmailButton.hover();
    await expect(this.validEmailInformationText).toBeVisible({ timeout: 10000 });
    let text = await this.validEmailInformationText.innerText();
    return text;
  }

  async getNoEmailInformation() {
    await expect(this.validatedEmailButton).toBeVisible({ timeout: 10000 });
    await this.validatedEmailButton.hover();
    await expect(this.noEmailInformationText).toBeVisible({ timeout: 10000 });
    let text = await this.noEmailInformationText.innerText();
    return text;
  }

  async fillEmail(email: string) {
    try {
      await expect(this.validatedEmailButton).toBeVisible({ timeout: 10000 });
      await this.validatedEmailButton.click();
      await expect(this.emailInput).toBeVisible({ timeout: 10000 });
      await this.emailInput.fill(email);
      await expect(this.updateInfoButton).toBeVisible({ timeout: 10000 });
      await this.updateInfoButton.click();
    }
    catch (error) {
      logger.info(`Error occurred while filling email: ${error}`)
      throw error
    }
  }

  async getAddressInformation() {
    try {
      await expect(this.addressButton).toBeVisible({ timeout: 30000 });
      await this.addressButton.hover();
      await expect(this.validAddressInformationText).toBeVisible({ timeout: 10000 });
      let text = await this.validAddressInformationText.innerText();
      return text;
    }
    catch (error) {
      logger.info(`Error occurred while capturing address information: ${error}`)
      throw error
    }
  }

  async getNoPaymentInformation() {
    try {
      await expect(this.paymentButton).toBeVisible({ timeout: 10000 });
      await this.paymentButton.hover();
      await expect(this.noPaymentInformationText).toBeVisible({ timeout: 10000 });
      let text = await this.noPaymentInformationText.innerText();
      return text;
    }
    catch (error) {
      logger.info(`Error occurred while capturing no payment information: ${error}`)
      throw error
    }
  }

  async getValidPaymentInformation() {
    try {
      await expect(this.paymentButton).toBeVisible({ timeout: 10000 });
      await this.paymentButton.hover();
      await expect(this.validPaymentInformationText).toBeVisible({ timeout: 10000 });
      let text = await this.validPaymentInformationText.innerText();
      return text;
    }
    catch (error) {
      logger.info(`Error occurred while capturing valid payment information: ${error}`)
      throw error
    }
  }

  async removePhoneNumberAndEmailInfo() {
    await expect(this.custInfoUpdate).toBeVisible({ timeout: 10000 });
    await this.custInfoUpdate.click();
    await this.page.waitForTimeout(5000)
    await expect(this.phoneNumberInput).toBeVisible({ timeout: 10000 });
    await this.phoneNumberInput.clear();
    await expect(this.emailInput).toBeVisible({ timeout: 10000 });
    await this.emailInput.clear();
    await expect(this.updateInfoButton).toBeVisible({ timeout: 10000 });
    await this.updateInfoButton.click()
  }

}