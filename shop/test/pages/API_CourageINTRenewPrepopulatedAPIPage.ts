import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';

export class CourageINTRenewPrepopulatedAPIPage {
  page: Page;
  readonly purchaserName: Locator;
  readonly lastName: Locator;
  readonly purchaserInformationFirstName: Locator;
  readonly purchaserInformationLastName: Locator;
  readonly purchaserInformationAddressLine: Locator;
  readonly purchaserInformationCity: Locator;
  readonly purchaserInformationProvince: Locator;
  readonly purchaserInformationPostalCode: Locator;
  readonly availableRenewalsFirstName: Locator;
  readonly availableRenewalsLastName: Locator;
  readonly availableRenewalsAddressLine: Locator;
  readonly availableRenewalsCity: Locator;
  readonly availableRenewalsProvince: Locator;
  readonly availableRenewalsPostalCode: Locator;
  readonly availableRenewalsProduct: Locator;
  readonly availableRenewalsExpiryDate: Locator;


  constructor(page: Page) {
    this.page = page;
    this.purchaserName = page.locator("//input[@name='purchaser' and @value='954793604']")
    this.lastName = page.locator("//input[@name='lastName' and @value='Int Order']")
    this.purchaserInformationFirstName = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::td[text()='Courage']")
    this.purchaserInformationLastName = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::td[text()='Int Order']")
    this.purchaserInformationAddressLine = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::td[text()='1 year offer']")
    this.purchaserInformationCity = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::td[text()='Samara']")
    this.purchaserInformationProvince = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::td[text()='Albania']")
    this.purchaserInformationPostalCode = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::td[text()='123456']")
    this.availableRenewalsFirstName = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::td[text()='Courage']")
    this.availableRenewalsLastName = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::td[text()='Int Order']")
    this.availableRenewalsAddressLine = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::td[text()='1 year offer']")
    this.availableRenewalsCity = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::td[text()='Samara']")
    this.availableRenewalsProvince = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::td[text()='Albania']")
    this.availableRenewalsPostalCode = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::td[text()='123456']")
    this.availableRenewalsProduct = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::td[text()='Courage CX Magazine']")
    this.availableRenewalsExpiryDate = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::td[text()='Jan']")


  }

  async validatePurchaserNameValue() {
    await expect(this.purchaserName).toBeVisible({ timeout: 60000 });
    await this.purchaserName.scrollIntoViewIfNeeded();
    let text = await this.purchaserName.getAttribute('value');
    return text;
  }

  async validateLastNameValue() {
    await expect(this.lastName).toBeVisible({ timeout: 60000 });
    await this.lastName.scrollIntoViewIfNeeded();
    let text = await this.lastName.getAttribute('value');
    return text;
  }

  async validatePurchaserInformationFirstName() {
    await expect(this.purchaserInformationFirstName).toBeVisible({ timeout: 60000 });
    await this.purchaserInformationFirstName.scrollIntoViewIfNeeded();
    let text = await this.purchaserInformationFirstName.textContent();
    return text;
  }

  async validatePurchaserInformationLastName() {
    await expect(this.purchaserInformationLastName).toBeVisible({ timeout: 60000 });
    await this.purchaserInformationLastName.scrollIntoViewIfNeeded();
    let text = await this.purchaserInformationLastName.textContent();
    return text;
  }

  async validatePurchaserInformationAddressLine() {
    await expect(this.purchaserInformationAddressLine).toBeVisible({ timeout: 60000 });
    await this.purchaserInformationAddressLine.scrollIntoViewIfNeeded();
    let text = await this.purchaserInformationAddressLine.textContent();
    return text;
  }

  async validatePurchaserInformationCity() {
    await expect(this.purchaserInformationCity).toBeVisible({ timeout: 60000 });
    await this.purchaserInformationCity.scrollIntoViewIfNeeded();
    let text = await this.purchaserInformationCity.textContent();
    return text;
  }

  async valiadtePurchaserInformationProvince() {
    await expect(this.purchaserInformationProvince).toBeVisible({ timeout: 60000 });
    await this.purchaserInformationProvince.scrollIntoViewIfNeeded();
    let text = await this.purchaserInformationProvince.textContent();
    return text;
  }

  async validatePurchaserInformationPostalCode() {
    await expect(this.purchaserInformationPostalCode).toBeVisible({ timeout: 60000 });
    await this.purchaserInformationPostalCode.scrollIntoViewIfNeeded();
    let text = await this.purchaserInformationPostalCode.textContent();
    return text;
  }






  async valiadteAvailableRenewalsFirstName() {
    await expect(this.availableRenewalsFirstName).toBeVisible({ timeout: 60000 });
    await this.availableRenewalsFirstName.scrollIntoViewIfNeeded();
    let text = await this.availableRenewalsFirstName.textContent();
    return text;
  }

  async validateAvailableRenewalsLastName() {
    await expect(this.availableRenewalsLastName).toBeVisible({ timeout: 60000 });
    await this.availableRenewalsLastName.scrollIntoViewIfNeeded();
    let text = await this.availableRenewalsLastName.textContent();
    return text;
  }

  async validateAvailableRenewalsAddressLine() {
    await expect(this.availableRenewalsAddressLine).toBeVisible({ timeout: 60000 });
    await this.availableRenewalsAddressLine.scrollIntoViewIfNeeded();
    let text = await this.availableRenewalsAddressLine.textContent();
    return text;
  }

  async validateAvailableRenewalsCity() {
    await expect(this.availableRenewalsCity).toBeVisible({ timeout: 60000 });
    await this.availableRenewalsCity.scrollIntoViewIfNeeded();
    let text = await this.availableRenewalsCity.textContent();
    return text;
  }

  async validateAvailableRenewalsProvince() {
    await expect(this.availableRenewalsProvince).toBeVisible({ timeout: 60000 });
    await this.availableRenewalsProvince.scrollIntoViewIfNeeded();
    let text = await this.availableRenewalsProvince.textContent();
    return text;
  }

  async validateAvailableRenewalsPostalCode() {
    await expect(this.availableRenewalsPostalCode).toBeVisible({ timeout: 60000 });
    await this.availableRenewalsPostalCode.scrollIntoViewIfNeeded();
    let text = await this.availableRenewalsPostalCode.textContent();
    return text;
  }

  async validateAvailableRenewalsProduct() {
    await expect(this.availableRenewalsProduct).toBeVisible({ timeout: 60000 });
    await this.availableRenewalsProduct.scrollIntoViewIfNeeded();
    let text = await this.availableRenewalsProduct.textContent();
    return text;
  }

  async validateAvailableRenewalsExpiryDate() {
    await expect(this.availableRenewalsExpiryDate).toBeVisible({ timeout: 60000 });
    await this.availableRenewalsExpiryDate.scrollIntoViewIfNeeded();
    let text = await this.availableRenewalsExpiryDate.textContent();
    return text;
  }
}