import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class Hoffman_USPrint_DigitalWithNoUpsellPage {

  page: Page;
  readonly unitedStatesOffersText: Locator;
  readonly printAndDigitalIssuesRB: Locator;
  readonly userFirstName: Locator;
  readonly userLastName: Locator;
  readonly userAddress: Locator;
  readonly userAddress2: Locator;
  readonly userCity: Locator;
  readonly userPostalCode: Locator;
  readonly userPhoneNumber: Locator;
  readonly userEmail: Locator;
  readonly userCountry: Locator;
  readonly userProvince: Locator;
  readonly orderSummaryText: Locator;
  readonly oneYearDigitalArchiveAccessCB: Locator;

  constructor(page: Page) {
    this.page = page;
    this.unitedStatesOffersText = page.getByText('United States Offers')
    this.printAndDigitalIssuesRB = page.locator('#productPB-1001')
    this.userFirstName = page.locator('#userFirstName')
    this.userLastName = page.locator('#userLastName')
    this.userAddress = page.locator('#userAddress')
    this.userAddress2 = page.locator('#userAddress2')
    this.userCity = page.locator('#userCity')
    this.userPostalCode = page.locator('#userPostalCode')
    this.userPhoneNumber = page.locator('#userPhoneNumber')
    this.userEmail = page.locator('#userEmail')
    this.userCountry = page.locator('#userCountry')
    this.userProvince = page.locator('#userProvince')
    this.orderSummaryText = page.getByText('Summary')
    this.oneYearDigitalArchiveAccessCB = page.locator('#offer2')
  }

  async validateUnitedStatesOffersText() {
    await expect(this.unitedStatesOffersText).toBeVisible({ timeout: 60000 });
    await this.unitedStatesOffersText.scrollIntoViewIfNeeded();
    let text = await this.unitedStatesOffersText.textContent();
    return text;
  }

  async validatePrintAndDigitalIssuesRB() {
    await expect(this.printAndDigitalIssuesRB).toBeVisible({ timeout: 60000 });
    await this.printAndDigitalIssuesRB.scrollIntoViewIfNeeded();
    const isChecked = await this.printAndDigitalIssuesRB.isChecked();
    return isChecked;
  }

  async checkOneYearDigitalArchiveAccessCB() {
    await expect(this.oneYearDigitalArchiveAccessCB).toBeVisible({ timeout: 60000 });
    await this.oneYearDigitalArchiveAccessCB.scrollIntoViewIfNeeded();
    await this.oneYearDigitalArchiveAccessCB.check();
  }

  async fillMailingAndBillingAddress() {
    await expect(this.userFirstName).toBeVisible({ timeout: 60000 });
    await this.userFirstName.scrollIntoViewIfNeeded();
    await this.userFirstName.fill(faker.person.firstName());
    await expect(this.userLastName).toBeVisible({ timeout: 60000 });
    await this.userLastName.scrollIntoViewIfNeeded();
    await this.userLastName.fill(faker.person.lastName());
    await expect(this.userAddress).toBeVisible({ timeout: 60000 });
    await this.userAddress.scrollIntoViewIfNeeded();
    await this.userAddress.fill('11 Commerce Blvd');
    await this.page.getByText('11 Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await expect(this.userAddress2).toBeVisible({ timeout: 60000 });
    await this.userAddress2.scrollIntoViewIfNeeded();
    await this.userAddress2.fill('45');
    await expect(this.userPhoneNumber).toBeVisible({ timeout: 60000 });
    await this.userPhoneNumber.scrollIntoViewIfNeeded();
    await this.userPhoneNumber.fill('3456127890');
    await expect(this.userEmail).toBeVisible({ timeout: 60000 });
    await this.userEmail.scrollIntoViewIfNeeded();
    await this.userEmail.fill(faker.internet.email());
  }

  async validateOrderSummaryText() {
    await expect(this.orderSummaryText).toBeVisible({ timeout: 60000 });
    await this.orderSummaryText.scrollIntoViewIfNeeded();
    let text = await this.orderSummaryText.textContent();
    return text;
  }

  async orderSummaryTotalAmount() {
    try {
      await expect(this.page.locator("//div[text()='Total']/parent::div[@class='row']")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Total']/parent::div[@class='row']").textContent();
      if (text === null) {
        console.warn('No text content found for the locator.');
        return null;
      }
      const numericValueMatch = text.match(/\$([\d]+\.\d{2})/);
      if (numericValueMatch) {
        // Parse and return the numeric value
        return parseFloat(numericValueMatch[1]);
      } else {
        console.warn('No numeric value found in the text:', text);
        return null;
      }
    } catch (error) {
      console.error('Error in orderSummaryTotalAmount method:', error);
      throw error;
    }
  }

  async totalPrice() {
    try {
      await expect(this.page.locator("//div[text()='Total Price']/parent::div[@class='row']")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Total Price']/parent::div[@class='row']").textContent();
      if (text === null) {
        console.warn('No text content found for the locator.');
        return null;
      }
      const numericValueMatch = text.match(/\$([\d]+\.\d{2})/);
      if (numericValueMatch) {
        // Parse and return the numeric value
        return parseFloat(numericValueMatch[1]);
      } else {
        console.warn('No numeric value found in the text:', text);
        return null;
      }
    } catch (error) {
      console.error('Error in totalPrice method:', error);
      throw error;
    }
  }

  async digitalArchiveAccessAmount() {
    try {
      await expect(this.page.locator("//div[text()='Digital Archive Access']/parent::div")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Digital Archive Access']/parent::div").textContent();
      if (text === null) {
        console.warn('No text content found for the locator.');
        return null;
      }
      const numericValueMatch = text.match(/\$([\d]+\.\d{2})/);
      if (numericValueMatch) {
        // Parse and return the numeric value
        return parseFloat(numericValueMatch[1]);
      } else {
        console.warn('No numeric value found in the text:', text);
        return null;
      }
    } catch (error) {
      console.error('Error in digitalArchiveAccessAmount method:', error);
      throw error;
    }
  }

  async taxAmount() {
    try {
      await expect(this.page.locator("//div[contains(text(),'Taxes')]/ancestor::div[@class='row'][1]")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[contains(text(),'Taxes')]/ancestor::div[@class='row'][1]").textContent();
      if (text === null) {
        console.warn('No text content found for the locator.');
        return null;
      }
      const numericValueMatch = text.match(/\$([\d]+\.\d{2})/);
      if (numericValueMatch) {
        // Parse and return the numeric value
        return parseFloat(numericValueMatch[1]);
      } else {
        console.warn('No numeric value found in the text:', text);
        return null;
      }
    } catch (error) {
      console.error('Error in taxAmount method:', error);
      throw error;
    }
  }

  async printAndDigitalIssuesAmount() {
    try {
      await expect(this.page.locator("//div[text()='6 print and digital issues']/parent::div")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='6 print and digital issues']/parent::div").textContent();
      if (text === null) {
        console.warn('No text content found for the locator.');
        return null;
      }
      const numericValueMatch = text.match(/\$([\d]+\.\d{2})/);
      if (numericValueMatch) {
        // Parse and return the numeric value
        return parseFloat(numericValueMatch[1]);
      } else {
        console.warn('No numeric value found in the text:', text);
        return null;
      }
    } catch (error) {
      console.error('Error in printAndDigitalIssuesAmount method:', error);
      throw error;
    }
  }
}

