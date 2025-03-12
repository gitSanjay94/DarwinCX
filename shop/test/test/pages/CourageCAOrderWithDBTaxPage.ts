import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class CourageCAOrderWithDBTaxPage {
  page: Page;
  readonly courageMagazineSubscriptionOptionsText: Locator;
  readonly batchQAUS8Option: Locator;
  readonly courageUSAndInternationalText: Locator;
  readonly augTestRB: Locator;
  readonly testingCrossBundleText: Locator;
  readonly testOfferCouragePrintDigitalCB: Locator;
  readonly userFirstName: Locator;
  readonly userLastName: Locator;
  readonly userCompanyName: Locator;
  readonly userJobTitle: Locator;
  readonly userAddress: Locator;
  readonly userAddress2: Locator;
  readonly userPhoneNumber: Locator;
  readonly userEmail: Locator;
  readonly summaryText: Locator;


  constructor(page: Page) {
    this.page = page;
    this.courageMagazineSubscriptionOptionsText = page.getByText('Courage Magazine Subscription Options')
    this.batchQAUS8Option = page.locator('#productPB-1133')
    this.courageUSAndInternationalText = page.getByText('Courage (US & International)')
    this.augTestRB = page.locator('#productPB-1638')
    this.testingCrossBundleText = page.getByText('Testing Cross Bundle')
    this.testOfferCouragePrintDigitalCB = page.locator('#offer2')
    this.userFirstName = page.locator('#userFirstName')
    this.userLastName = page.locator('#userLastName')
    this.userCompanyName = page.locator('#userCompanyName')
    this.userJobTitle = page.locator('#userJobTitle')
    this.userAddress = page.locator('#userAddress')
    this.userAddress2 = page.locator('#userAddress2')
    this.userPhoneNumber = page.locator('#userPhoneNumber')
    this.userEmail = page.locator('#userEmail')
    this.summaryText = page.getByText('Summary')
  }

  async validateCourageMagazineSubscriptionOptionsText() {
    await expect(this.courageMagazineSubscriptionOptionsText).toBeVisible({ timeout: 60000 });
    await this.courageMagazineSubscriptionOptionsText.scrollIntoViewIfNeeded();
    let text = await this.courageMagazineSubscriptionOptionsText.textContent();
    return text;
  }

  async validateBatchQAUS8Option() {
    await expect(this.batchQAUS8Option).toBeVisible({ timeout: 60000 });
    await this.batchQAUS8Option.scrollIntoViewIfNeeded();
    const isChecked = await this.batchQAUS8Option.isChecked();
    return isChecked;
  }

  async validateCourageUSAndInternationalText() {
    await expect(this.courageUSAndInternationalText).toBeVisible({ timeout: 60000 });
    await this.courageUSAndInternationalText.scrollIntoViewIfNeeded();
    let text = await this.courageUSAndInternationalText.textContent();
    return text;
  }

  async clickCourageUSAndInternationalText() {
    await expect(this.courageUSAndInternationalText).toBeVisible({ timeout: 60000 });
    await this.courageUSAndInternationalText.scrollIntoViewIfNeeded();
    await this.courageUSAndInternationalText.click();
  }

  async checkAugTestRB() {
    await expect(this.augTestRB).toBeVisible({ timeout: 60000 });
    await this.augTestRB.scrollIntoViewIfNeeded();
    await this.augTestRB.check();
  }

  async validateTestingCrossBundleText() {
    await expect(this.testingCrossBundleText).toBeVisible({ timeout: 60000 });
    await this.testingCrossBundleText.scrollIntoViewIfNeeded();
    let text = await this.testingCrossBundleText.textContent();
    return text;
  }

  async checkTestOfferCouragePrintDigitalCB() {
    await expect(this.testOfferCouragePrintDigitalCB).toBeVisible({ timeout: 60000 });
    await this.testOfferCouragePrintDigitalCB.scrollIntoViewIfNeeded();
    await this.testOfferCouragePrintDigitalCB.check();
  }

  async fillMailingAndBillingAddressForm() {
    await expect(this.userFirstName).toBeVisible({ timeout: 60000 });
    await this.userFirstName.scrollIntoViewIfNeeded();
    await this.userFirstName.fill(faker.person.firstName());
    await this.userLastName.fill(faker.person.lastName());
    await this.userCompanyName.fill(faker.company.name());
    await this.userJobTitle.fill(faker.person.jobTitle());
    await this.userAddress.fill('11 Commerce Blvd');
    await this.page.getByText('11 Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await this.userPhoneNumber.fill('3456127890');
    await this.userEmail.fill(faker.internet.email());
  }

   async fillMailAndBillAddressForm() {
    await expect(this.userFirstName).toBeVisible({ timeout: 60000 });
    await this.userFirstName.scrollIntoViewIfNeeded();
    await this.userFirstName.fill(faker.person.firstName());
    await this.userLastName.fill(faker.person.lastName());
    await this.userCompanyName.fill(faker.company.name());
    await this.userJobTitle.fill(faker.person.jobTitle());
    await this.userAddress.fill('11 Commerce Blvd');
    await this.page.getByText('11 Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await this.userPhoneNumber.fill('3456127890');
    await this.userEmail.fill(faker.internet.email());
  }

  async validateSummaryText() {
    await expect(this.summaryText).toBeVisible({ timeout: 60000 });
    await this.summaryText.scrollIntoViewIfNeeded();
    let text = await this.summaryText.textContent();
    return text;
  }

  async yearTestOfferAmt() {
    try {
      await expect(this.page.locator("//div[text()='1 year  Test Offer (8 Issues)']/parent::div")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='1 year  Test Offer (8 Issues)']/parent::div").textContent();
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
      console.error('Error in yearTestOfferAmt method:', error);
      throw error;
    }
  }

  async totalAmtInSummarySection() {
    try {
      await expect(this.page.locator("//div[text()='Total']/parent::div")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Total']/parent::div").textContent();
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
      console.error('Error in totalAmtInSummarySection method:', error);
      throw error;
    }
  }

  async augTestAmt() {
    try {
      await expect(this.page.locator("//div[text()='3 years  BridgeTower Test Product 91 10/$15 US Print and Digital (10 Issues)']/parent::div")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='3 years  BridgeTower Test Product 91 10/$15 US Print and Digital (10 Issues)']/parent::div").textContent();
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
      console.error('Error in augTestAmt method:', error);
      throw error;
    }
  }

  async totalPrice() {
    try {
      await expect(this.page.locator("//div[text()='Total Price']/parent::div")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Total Price']/parent::div").textContent();
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
}