import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class NewparamsinurlUSnoAddress1Page {
  page: Page;
  readonly userFirstNameTF: Locator;
  readonly userLastNameValue: Locator;
  readonly companyNameBlank: Locator;
  readonly userAddress1Value: Locator;
  readonly userAddress2Value: Locator;
  readonly userCityValue: Locator;
  readonly userPostalCodeValue: Locator;
  readonly userEmailValue: Locator;
  readonly userCountry: Locator;
  readonly userProvince: Locator;
  readonly cardNumberTF: Locator;
  readonly monthTF: Locator;
  readonly CVVTF: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userFirstNameTF = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value="jonathan"]')
    this.userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value="kok"]')
    this.companyNameBlank = page.locator('//input[@id="userCompanyName" and @name="userCompanyName"]')
    this.userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value=""]')
    this.userAddress2Value = page.locator('//input[@id="userAddress2" and @name="userAddress2" and @value="45"]')
    this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value="Palm Coast"]')
    this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value="32164"]')
    this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value="webtest6@darwin.cx"]')
    this.userCountry = page.locator('select#userCountry');
    this.userProvince = page.locator('select#userProvince');
    this.cardNumberTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('Card number')
    this.monthTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('MM / YY')
    this.CVVTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('CVC')
  }


  async validateuserFirstNameTFText() {
    await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
    await this.userFirstNameTF.scrollIntoViewIfNeeded();
    let text = await this.userFirstNameTF.getAttribute('value');
    return text;
  }
async validateUserLastNameValue() {
    await expect(this.userLastNameValue).toBeVisible({ timeout: 60000 });
    await this.userLastNameValue.scrollIntoViewIfNeeded();
    let text = await this.userLastNameValue.getAttribute('value');
    return text;
  
  }

  async validateBlankCompanyName() {
    await expect(this.companyNameBlank).toBeVisible({ timeout: 60000 });
    await this.companyNameBlank.scrollIntoViewIfNeeded();
    let text = await this.companyNameBlank.getAttribute('value');
    return text;
  
  }
  async validateBlankAddress1Value() {
   await expect(this.userAddress1Value).toBeVisible({ timeout: 60000 });
    await this.userAddress1Value.scrollIntoViewIfNeeded();
    let text = await this.userAddress1Value.getAttribute('value');
    return text;
  }
  async validateUserAddress2Value() {
    await expect(this.userAddress2Value).toBeVisible({ timeout: 60000 });
    await this.userAddress2Value.scrollIntoViewIfNeeded();
    let text = await this.userAddress2Value.getAttribute('value');
    return text;
  }
    
    async validateUserCityValue() {
    await expect(this.userCityValue).toBeVisible({ timeout: 60000 });
    await this.userCityValue.scrollIntoViewIfNeeded();
    let text = await this.userCityValue.getAttribute('value');
    return text;
  }

  async validateUserPostalCodeValue() {
    await expect(this.userPostalCodeValue).toBeVisible({ timeout: 60000 });
    await this.userPostalCodeValue.scrollIntoViewIfNeeded();
    let text = await this.userPostalCodeValue.getAttribute('value');
    return text;
  }

  async validateUserEmailValue() {
    await expect(this.userEmailValue).toBeVisible({ timeout: 60000 });
    await this.userEmailValue.scrollIntoViewIfNeeded();
    let text = await this.userEmailValue.getAttribute('value');
    return text;
  }

  async validateUserCountryValue() {
    await this.userCountry.waitFor({ state: 'visible' });
    await this.userCountry.scrollIntoViewIfNeeded();
    const selectedOption = await this.userCountry.locator('option:checked').first();
    let country = null;

  if (selectedOption) {
    country = await selectedOption.innerText();
  } else {
     throw new Error('No country selected or element not found.');
  }
    console.log('Retrieved country:', country);
    return country.trim();
  }
  
async validateUserProvinceValue() {
    await this.userProvince.waitFor({ state: 'visible' });
    await this.userProvince.scrollIntoViewIfNeeded();
    const selectedOption = await this.userProvince.locator('option:checked').first();
    let Province = null;

  if (selectedOption) {
    Province = await selectedOption.innerText();
  } else {
     throw new Error('No country selected or element not found.');
  }
    console.log('Retrieved User Province:', Province);
    return Province.trim();
  }
  }

