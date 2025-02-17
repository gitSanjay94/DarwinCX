import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';


export class giveFreeExtensionPage {
  page: Page;
  readonly createCustomExtensionButton: Locator;
  readonly extendButton: Locator;
  readonly submitButton: Locator;
  readonly extensionAmount: Locator;
  readonly quantityTXT: Locator;
  readonly mediaTypeDropdown: Locator;
  readonly reasonForExtensionDropdown: Locator;
  readonly transactionConfirmationTXT: Locator;
  readonly successTXT: Locator;
  readonly OKButton: Locator;
  readonly activeSubscriptionsTXT: Locator;
  readonly finalizeExtensionTXT: Locator;
  readonly productExtenstionInput: Locator;
  readonly productExtenstionDropDown: Locator;
  readonly previousSubscriptionsTXT: Locator;
  readonly previousSubscriptionExtendButton: Locator;
  readonly activeSubscriptionExtendButton: Locator;
  readonly productEditBox: Locator




  constructor(page: Page) {
    this.page = page;
    this.createCustomExtensionButton = page.getByRole('button', { name: 'Create Custom Extension' })
    this.extendButton = page.getByRole('button', { name: 'Extend' })
    this.submitButton = page.getByRole('button', { name: 'Submit' })
    this.productExtenstionDropDown = page.getByRole('dialog').locator('svg')
    this.productExtenstionInput = page.locator('div.css-19mo15f-control input')
    this.extensionAmount = page.locator("//input[@name='extension_amount']")
    this.quantityTXT = page.locator("//input[@name='item_quantity']")
    this.mediaTypeDropdown = page.locator("//select[@name='delivery_type']")
    this.reasonForExtensionDropdown = page.locator("//select[@name='reason']")
    this.transactionConfirmationTXT = page.getByText('Transaction Confirmation')
    this.successTXT = page.getByText('Success', { exact: true })
    this.OKButton = page.getByRole('button', { name: 'OK' })
    this.activeSubscriptionsTXT = page.getByText('Active Subscriptions', { exact: true })
    this.previousSubscriptionsTXT = page.getByText('Previous Subscriptions ', { exact: true })
    this.finalizeExtensionTXT = page.getByText('Finalize Extension')
    this.previousSubscriptionExtendButton = page.locator("//strong[text()='Previous Subscriptions ']/parent::label/parent::div/descendant::button[1]")
    this.activeSubscriptionExtendButton = page.locator("(//button[text()='Extend'])[1]")
    this.productEditBox = page.locator("(//input[contains(@id,'react-select-')])[3]")

  }
  async clickCreateCustomExtensionButton() {
    try {
      await this.createCustomExtensionButton.waitFor({ state: 'attached', timeout: 30000 })
      await expect(this.createCustomExtensionButton).toBeVisible({ timeout: 60000 });
      await this.createCustomExtensionButton.click();
    } catch (error) {
      logger.info(`Element ${this.createCustomExtensionButton} not found or not visible: `, error);
      console.error(`Element ${this.createCustomExtensionButton} not found or not visible: `, error);
    }
  }

  async clickExtendButton() {
    try {
      await (this.extendButton).scrollIntoViewIfNeeded();
      await expect(this.extendButton).toBeVisible({ timeout: 60000 });
      await this.extendButton.click();
    } catch (error) {
      logger.info(`Element ${this.extendButton} not found or not visible: `, error);
      console.error(`Element ${this.extendButton} not found or not visible: `, error);
    }
  }


  async clickSubmitButton() {
    try {
      await this.submitButton.click();
    } catch (error) {
      logger.info(`Element ${this.submitButton} not found or not visible: `, error);
      console.error(`Element ${this.submitButton} not found or not visible: `, error);
    }
  }

  async giveFreeExtensionWithoutSelection() {
      await this.clickCreateCustomExtensionButton();
      await this.clickExtendButton();
      await this.clickSubmitButton();
  }

  async transactionConfirmationPopup() {
    try {
      await expect(this.transactionConfirmationTXT).toBeVisible({ timeout: 60000 });
      await expect(this.successTXT).toBeVisible({ timeout: 60000 });
      await this.OKButton.click();
    } catch (error) {
      logger.info(`Element ${this.OKButton} not found or not visible: `, error);
      console.error(`Element ${this.OKButton} not found or not visible: `, error);
    }
  }

  async createCustomExtension() {
    try {
      await this.clickCreateCustomExtensionButton();
      //await this.productExtenstionDropDown.click({timeout:10000})
      await this.page.waitForTimeout(10000)
      await expect(this.productEditBox).toBeVisible({ timeout: 30000 })
      await expect(this.productEditBox).toBeEditable({ timeout: 60000 });
      await this.productEditBox.fill('Zoomer Magazine')
      await this.page.keyboard.press('Tab')
      await this.extensionAmount.dblclick();
      await this.extensionAmount.fill('4');
      await this.quantityTXT.dblclick();
      await this.quantityTXT.fill('2');
      await this.mediaTypeDropdown.selectOption('Print, Digital and Archive')
      await this.reasonForExtensionDropdown.selectOption('Incorrect address/RTS')
      await this.clickExtendButton();
      await this.clickSubmitButton();
      await this.page.waitForTimeout(10000);
      await this.transactionConfirmationPopup();
    } catch (error) {
      logger.info(`Element not found or not visible: `, error);
      console.error(`Element not found or not visible: `, error);
    }
  }

  async finalizeExtension() {
    try {
      await expect(this.finalizeExtensionTXT).toBeVisible({ timeout: 60000 })
      await this.clickExtendButton();
    } catch (error) {
      logger.info(`Element ${this.finalizeExtensionTXT} not found or not visible: `, error);
      console.error(`Element ${this.finalizeExtensionTXT} not found or not visible: `, error);
    }
  }

  async extendActiveSubscription() {
    try {
      await expect(this.activeSubscriptionsTXT).toBeVisible({ timeout: 60000 });
      await expect(this.activeSubscriptionExtendButton).toBeVisible({ timeout: 60000 });
      await this.activeSubscriptionExtendButton.click();
      await this.page.waitForTimeout(10000)
      await this.finalizeExtension();
      await this.clickSubmitButton();
      await this.transactionConfirmationPopup();
    } catch (error) {
      logger.info(`Element not found or not visible: `, error);
      console.error(`Element not found or not visible: `, error);
    }
  }

  async extendPreviousSubscription() {
    try {
      await expect(this.previousSubscriptionsTXT).toBeVisible({ timeout: 60000 });
      await expect(this.previousSubscriptionExtendButton).toBeVisible({ timeout: 60000 });
      await this.previousSubscriptionExtendButton.scrollIntoViewIfNeeded()
      await this.previousSubscriptionExtendButton.click();
      await this.page.waitForTimeout(10000)
      await this.finalizeExtension();
      await this.clickSubmitButton();
      await this.transactionConfirmationPopup();
    } catch (error) {
      logger.info(`Element not found or not visible: `, error);
      console.error(`Element not found or not visible: `, error);
    }
  }

}
