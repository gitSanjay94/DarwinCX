
import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class CSC2_CourageCA1GiftForT1217Page {
  page: Page;
  readonly emailAddressMissingText: Locator;
  readonly requiredText: Locator;
  readonly selectAProvinceText: Locator;
  readonly firstNameAlertText: Locator;
  readonly userAddress1Value: Locator;
  readonly userEmailValue: Locator;
  readonly productUnavailableAlertText: Locator;
  readonly addressAlertText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailAddressMissingText = page.locator("//span[text()='Email address is missing']")
    this.requiredText = page.locator("//span[text()='required']")
    this.selectAProvinceText = page.locator("//span[text()='Select a Province/State']")
    this.firstNameAlertText = page.locator("//div[text()='FirstName']")
    this.addressAlertText = page.locator("//div[text()='Address']")
    this.productUnavailableAlertText = page.locator("//div[text()='Product is unavailable in selected country']")
    this.userAddress1Value = page.locator('#userAddress');
    this.userEmailValue = page.locator('#userEmail');
  }

  async validateRequiredText() {
    await expect(this.requiredText).toBeVisible({ timeout: 60000 });
    await this.requiredText.scrollIntoViewIfNeeded();
    let text = await this.requiredText.textContent();
    return text;
  }

  async validateEmailAddressMissingText() {
    await expect(this.emailAddressMissingText).toBeVisible({ timeout: 60000 });
    await this.emailAddressMissingText.scrollIntoViewIfNeeded();
    let text = await this.emailAddressMissingText.textContent();
    return text;
  }

  async validateSelectAProvinceText() {
    await expect(this.selectAProvinceText).toBeVisible({ timeout: 60000 });
    await this.selectAProvinceText.scrollIntoViewIfNeeded();
    let text = await this.selectAProvinceText.textContent();
    return text;
  }



  async validateFirstNameAlertText() {
    await expect(this.firstNameAlertText).toBeVisible({ timeout: 60000 });
    await this.firstNameAlertText.scrollIntoViewIfNeeded();
    let text = await this.firstNameAlertText.textContent();
    return text;
  }

  async validateAddressAlertText() {
    await expect(this.addressAlertText).toBeVisible({ timeout: 60000 });
    await this.addressAlertText.scrollIntoViewIfNeeded();
    let text = await this.addressAlertText.textContent();
    return text;
  }

  async validateProductUnavailableAlertText() {
    await expect(this.productUnavailableAlertText).toBeVisible({ timeout: 60000 });
    await this.productUnavailableAlertText.scrollIntoViewIfNeeded();
    let text = await this.productUnavailableAlertText.textContent();
    return text;
  }

  async validateUserAddress1Value() {
    await expect(this.userAddress1Value).toBeVisible({ timeout: 60000 });
    await this.userAddress1Value.scrollIntoViewIfNeeded();
    let text = await this.userAddress1Value.getAttribute('value');
    return text;
  }

  async validateEmailAddressValue() {
    await expect(this.userEmailValue).toBeVisible({ timeout: 60000 });
    await this.userEmailValue.scrollIntoViewIfNeeded();
    let text = await this.userEmailValue.getAttribute('value');
    return text;
  }

  async validateProductIsUnavailableInSelectedCountryText() {
    await expect(this.page.locator("(//span[text()='Product is unavailable in selected country'])[1]")).toBeVisible({ timeout: 60000 });
    await expect(this.page.locator("(//span[text()='Product is unavailable in selected country'])[2]")).toBeVisible({ timeout: 60000 });
    await this.page.locator("(//span[text()='Product is unavailable in selected country'])[1]").scrollIntoViewIfNeeded();
    await this.page.locator("(//span[text()='Product is unavailable in selected country'])[2]").scrollIntoViewIfNeeded();
     }
}