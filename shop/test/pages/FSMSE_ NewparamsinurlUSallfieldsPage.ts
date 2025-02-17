import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class FSMSE_NewparamsinurlUSallfieldsPage {
  page: Page;
  readonly userFirstNameValue: Locator;
  readonly userLastNameValue: Locator;
  readonly userAddress1Value: Locator;
  readonly userAddress2Value: Locator;
  readonly userCityValue: Locator;
  readonly userPostalCodeValue: Locator;
  readonly userEmailValue: Locator;
  readonly userCountry: Locator;
  readonly userProvince: Locator;
  readonly userCompany: Locator;
  readonly userPhoneNumber: Locator;
  readonly userJobTitle: Locator;
  readonly radioButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userFirstNameValue = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value="jonathan"]')
    this.userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value="kok"]')
    this.userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value="11 Commerce Blvd"]')
    this.userAddress2Value = page.locator('//input[@id="userAddress2" and @name="userAddress2" and @value="45"]')
    this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value="Palm Coast"]')
    this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value="32164"]')
    this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value="webtest6@darwin.cx"]')
    this.userCountry = page.locator('select#userCountry');
    this.userProvince = page.locator('select#userProvince')
    this.userCompany = page.locator("//*[@id='userCompanyName']")
    this.userJobTitle = page.locator("//*[@id='userJobTitle']")
    this.userPhoneNumber = page.locator("//*[@id='userPhoneNumber']")
    this.radioButtons = page.locator('input[type="radio"]')
  }


  async validateUserFirstNameValue() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    let text = await this.userFirstNameValue.getAttribute('value');
    return text;
  }

  async validateUserLastNameValue() {
    await expect(this.userLastNameValue).toBeVisible({ timeout: 60000 });
    await this.userLastNameValue.scrollIntoViewIfNeeded();
    let text = await this.userLastNameValue.getAttribute('value');
    return text;
  }

  async validateUserAddress1Value() {
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
    await this.userEmailValue.scrollIntoViewIfNeeded();
    await expect(this.userEmailValue).toBeVisible({ timeout: 60000 });
    let text = await this.userEmailValue.getAttribute('value');
    return text;
  }

  async validateUserProvinceValue() {
    await this.userProvince.waitFor({ state: 'visible' });
    await this.userProvince.scrollIntoViewIfNeeded();
    const selectedOption = await this.userProvince.locator('option:checked').first();
    let province = null;
    if (selectedOption) {
      province = await selectedOption.innerText();
    } else {
      throw new Error('No province selected or element not found.');
    }
    console.log('Retrieved province:', province);
    return province.trim();
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

  async validateUserCompanyValue() {
    await expect(this.userCompany).toBeVisible({timeout: 60000});
    await this.userCompany.scrollIntoViewIfNeeded();
    let text = await this.userCompany.getAttribute('value');
    return text;
  }

  async validateUserJobTitleValue() {
    await expect(this.userJobTitle).toBeVisible({timeout: 60000});
    await this.userJobTitle.scrollIntoViewIfNeeded();
    let text = await this.userJobTitle.getAttribute('value');
    return text;
  }

  async validateUserPhoneNumberValue() {
    await expect(this.userPhoneNumber).toBeVisible({timeout: 60000});
    await this.userPhoneNumber.scrollIntoViewIfNeeded();
    let text = await this.userPhoneNumber.getAttribute('value');
    return text;
  }

  async validateRadioButtons() {
    await this.radioButtons.scrollIntoViewIfNeeded();
        return this.radioButtons;
    }

    // Method to count radio buttons
    async getRadioButtonCount(): Promise<number> {
        return await this.radioButtons.count();
    }

    // Method to print values of all radio buttons
    async getRadioButtonValues(): Promise<string[]> {
        const count = await this.getRadioButtonCount();
        const values: string[] = [];

        for (let i = 0; i < count; i++) {
            const value = await this.radioButtons.nth(i).getAttribute('value');
            if (value) {
                values.push(value);
            }
        }

        return values;
    }

    async verifyRadioButtonValues(expectedValues: string[]): Promise<void> {
        const actualValues = await this.getRadioButtonValues(); // Fetch the actual values
        
        // Check if the number of values matches
        if (expectedValues.length !== actualValues.length) {
            throw new Error(`Expected ${expectedValues.length} values but found ${actualValues.length}`);
        }
        
        // Check if each value matches
        for (let i = 0; i < expectedValues.length-3; i++) {
            if (expectedValues[i] !== actualValues[i]) {
                throw new Error(`Expected value "${expectedValues[i]}" but found "${actualValues[i]}" at index ${i}`);
            }
        }

  }}


