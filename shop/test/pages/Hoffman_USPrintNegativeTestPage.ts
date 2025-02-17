import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class Hoffman_USPrintNegativeTestPage {

  page: Page;
  readonly canadianAndInternationalOffersText: Locator;
  readonly canadaPrintAndDigitalIssues: Locator;
  readonly internationalPrintAndDigitalIssues: Locator;
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

  constructor(page: Page) {
    this.page = page;
    this.canadianAndInternationalOffersText = page.getByText('Canadian & International Offers')
    this.canadaPrintAndDigitalIssues = page.locator('#productPB-1004')
    this.internationalPrintAndDigitalIssues = page.locator('#productPB-1007')
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
  }

  async validateCanadianAndInternationalOffersText() {
    await expect(this.canadianAndInternationalOffersText).toBeVisible({ timeout: 60000 });
    await this.canadianAndInternationalOffersText.scrollIntoViewIfNeeded();
    let text = await this.canadianAndInternationalOffersText.textContent();
    return text;
  }

  async clickCanadianAndInternationalOffers() {
    await expect(this.canadianAndInternationalOffersText).toBeVisible({ timeout: 60000 });
    await this.canadianAndInternationalOffersText.scrollIntoViewIfNeeded();
    await this.canadianAndInternationalOffersText.click();
  }

  async canadaPrintAndDigitalIssuesRB() {
    await expect(this.canadaPrintAndDigitalIssues).toBeVisible({ timeout: 60000 });
    await this.canadaPrintAndDigitalIssues.scrollIntoViewIfNeeded();
    await this.canadaPrintAndDigitalIssues.check();
  }

  async internationalPrintAndDigitalIssuesRB() {
    await expect(this.internationalPrintAndDigitalIssues).toBeVisible({ timeout: 60000 });
    await this.internationalPrintAndDigitalIssues.scrollIntoViewIfNeeded();
    await this.internationalPrintAndDigitalIssues.check();
  }

  async fillMailingAndBillingAddressCA() {
    await expect(this.userFirstName).toBeVisible({ timeout: 60000 });
    await this.userFirstName.scrollIntoViewIfNeeded();
    await this.userFirstName.fill(faker.person.firstName());
    await this.userLastName.fill(faker.person.lastName());
    await this.userAddress.fill('11 Commerce Blvd');
    await this.userAddress2.fill('45');
    await this.userCountry.selectOption('CA')
    await this.userProvince.selectOption('ON')
    await this.userPostalCode.fill('M2N4J5')
    await this.userCity.fill(faker.location.city())
    await this.userPhoneNumber.fill('3456127890');
    await this.userEmail.fill(faker.internet.email());
  }

  async fillMailingAndBillingAddressINT() {
    await expect(this.userFirstName).toBeVisible({ timeout: 60000 });
    await this.userFirstName.scrollIntoViewIfNeeded();
    await this.userFirstName.fill(faker.person.firstName());
    await this.userLastName.fill(faker.person.lastName());
    await this.userAddress.fill('11 Commerce Blvd');
    await this.userAddress2.fill('45');
    await this.userCountry.selectOption('ES')
    await this.userProvince.selectOption('GI')
    await this.userPostalCode.fill('08025')
    await this.userCity.fill(faker.location.city())
    await this.userPhoneNumber.fill('3456120987');
    await this.userEmail.fill(faker.internet.email());
  }


  async printAndDigitalIssuesAmountCA() {
    try {
      await expect(this.page.locator("//div[text()='Canada: 6 Bake From Scratch print and digital Issues']/parent::div")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Canada: 6 Bake From Scratch print and digital Issues']/parent::div").textContent();
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
      console.error('Error in printAndDigitalIssuesAmountCA method:', error);
      throw error;
    }
  }

  async printAndDigitalIssuesAmountINT() {
    try {
      await expect(this.page.locator("//div[text()='International: 6 Bake From Scratch print and digital Issues']/parent::div")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='International: 6 Bake From Scratch print and digital Issues']/parent::div").textContent();
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
      console.error('Error in printAndDigitalIssuesAmountINT method:', error);
      throw error;
    }
  }
}