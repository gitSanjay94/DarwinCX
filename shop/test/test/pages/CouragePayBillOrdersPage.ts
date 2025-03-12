import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';



export class CouragePayBillOrdersPage {
  page: Page;
  readonly courageMagazineSubscriptionOptionsText: Locator;
  readonly courageUSInternationalText: Locator;
  readonly productPB1638RB: Locator;
  readonly testingCrossBundleText: Locator;
  readonly testOfferCouragePrintDigitalCB: Locator;
  readonly orderNumber1Text: Locator;
  readonly orderNumber2Text: Locator;
  readonly orderNumber3Text: Locator;
  readonly addGiftRecipientButton: Locator;
  readonly recipientFirstName1: Locator;
  readonly recipientLastName1: Locator;
  readonly recipientCompanyName1: Locator;
  readonly recipientJobTitle1: Locator;
  readonly recipientAddress1: Locator;
  readonly recipientAddress21: Locator;
  readonly recipientCity1: Locator;
  readonly recipientPostalCode1: Locator;
  readonly recipientPhoneNumber1: Locator;
  readonly recipientEmail1: Locator;
  readonly recipientCountry1: Locator;
  readonly recipientProvince1: Locator;
  readonly recipientFirstName2: Locator;
  readonly recipientLastName2: Locator;
  readonly recipientCompanyName2: Locator;
  readonly recipientJobTitle2: Locator;
  readonly recipientAddress2: Locator;
  readonly recipientAddress22: Locator;
  readonly recipientCity2: Locator;
  readonly recipientPostalCode2: Locator;
  readonly recipientPhoneNumber2: Locator;
  readonly recipientEmail2: Locator;
  readonly recipientProvince2: Locator;
  readonly recipientCountry2: Locator;
  readonly productPB1133: Locator;
  readonly orderNumber4Text: Locator;
  readonly orderNumber5Text: Locator;
  readonly recipientFirstName3: Locator;
  readonly recipientLastName3: Locator;
  readonly recipientCompanyName3: Locator;
  readonly recipientJobTitle3: Locator;
  readonly recipientAddress3: Locator;
  readonly recipientAddress23: Locator;
  readonly recipientCity3: Locator;
  readonly recipientPostalCode3: Locator;
  readonly recipientPhoneNumber3: Locator;
  readonly recipientEmail3: Locator;
  readonly recipientProvince3: Locator;
  readonly recipientCountry3: Locator;
  readonly recipientFirstName4: Locator;
  readonly recipientLastName4: Locator;
  readonly recipientCompanyName4: Locator;
  readonly recipientJobTitle4: Locator;
  readonly recipientAddress4: Locator;
  readonly recipientAddress24: Locator;
  readonly recipientCity4: Locator;
  readonly recipientPostalCode4: Locator;
  readonly recipientPhoneNumber4: Locator;
  readonly recipientEmail4: Locator;
  readonly recipientCountry4: Locator;
  readonly recipientProvince4: Locator;

  constructor(page: Page) {
    this.page = page;
    this.courageMagazineSubscriptionOptionsText = page.getByText('Courage Magazine Subscription Options')
    this.courageUSInternationalText = page.getByText('Courage (US & International)')
    this.productPB1638RB = page.locator('#productPB-1638')
    this.testingCrossBundleText = page.getByText('Testing Cross Bundle')
    this.testOfferCouragePrintDigitalCB = page.locator('#offer2')
    this.orderNumber1Text = page.getByText('Order Number 1')
    this.orderNumber2Text = page.getByText('Order Number 2')
    this.orderNumber3Text = page.getByText('Order Number 3')
    this.orderNumber4Text = page.getByText('Order Number 4')
    this.orderNumber5Text = page.getByText('Order Number 5')
    this.productPB1133 = page.locator('#productPB-1133')

    this.addGiftRecipientButton = page.getByRole('button', { name: 'Add Gift Recipient' })
    this.recipientFirstName1 = page.locator('#recipientFirstName1')
    this.recipientLastName1 = page.locator('#recipientLastName1')
    this.recipientCompanyName1 = page.locator('#recipientCompanyName1')
    this.recipientJobTitle1 = page.locator('#recipientJobTitle1')
    this.recipientAddress1 = page.locator('#recipientAddress1')
    this.recipientAddress21 = page.locator('#recipientAddress21')
    this.recipientCity1 = page.locator('#recipientCity1')
    this.recipientPostalCode1 = page.locator('#recipientPostalCode1')
    this.recipientPhoneNumber1 = page.locator('#recipientPhoneNumber1')
    this.recipientEmail1 = page.locator('#recipientEmail1')
    this.recipientCountry1 = page.locator('#recipientCountry1')
    this.recipientProvince1 = page.locator('#recipientProvince1')

    this.recipientFirstName2 = page.locator('#recipientFirstName2')
    this.recipientLastName2 = page.locator('#recipientLastName2')
    this.recipientCompanyName2 = page.locator('#recipientCompanyName2')
    this.recipientJobTitle2 = page.locator('#recipientJobTitle2')
    this.recipientAddress2 = page.locator('#recipientAddress2')
    this.recipientAddress22 = page.locator('#recipientAddress22')
    this.recipientCity2 = page.locator('#recipientCity2')
    this.recipientPostalCode2 = page.locator('#recipientPostalCode2')
    this.recipientPhoneNumber2 = page.locator('#recipientPhoneNumber2')
    this.recipientEmail2 = page.locator('#recipientEmail2')
    this.recipientProvince2 = page.locator('#recipientProvince2')
    this.recipientCountry2 = page.locator('#recipientCountry2')

    this.recipientFirstName3 = page.locator('#recipientFirstName3')
    this.recipientLastName3 = page.locator('#recipientLastName3')
    this.recipientCompanyName3 = page.locator('#recipientCompanyName3')
    this.recipientJobTitle3 = page.locator('#recipientJobTitle3')
    this.recipientAddress3 = page.locator('#recipientAddress3')
    this.recipientAddress23 = page.locator('#recipientAddress23')
    this.recipientCity3 = page.locator('#recipientCity3')
    this.recipientPostalCode3 = page.locator('#recipientPostalCode3')
    this.recipientPhoneNumber3 = page.locator('#recipientPhoneNumber3')
    this.recipientEmail3 = page.locator('#recipientEmail3')
    this.recipientProvince3 = page.locator('#recipientProvince3')
    this.recipientCountry3 = page.locator('#recipientCountry3')

    this.recipientFirstName4 = page.locator('#recipientFirstName4')
    this.recipientLastName4 = page.locator('#recipientLastName4')
    this.recipientCompanyName4 = page.locator('#recipientCompanyName4')
    this.recipientJobTitle4 = page.locator('#recipientJobTitle4')
    this.recipientAddress4 = page.locator('#recipientAddress4')
    this.recipientAddress24 = page.locator('#recipientAddress24')
    this.recipientCity4 = page.locator('#recipientCity4')
    this.recipientPostalCode4 = page.locator('#recipientPostalCode4')
    this.recipientPhoneNumber4 = page.locator('#recipientPhoneNumber4')
    this.recipientEmail4 = page.locator('#recipientEmail4')
    this.recipientCountry4 = page.locator('#recipientCountry4')
    this.recipientProvince4 = page.locator('#recipientProvince4')
  }

  async validateCourageMagazineSubscriptionOptionsText() {
    await expect(this.courageMagazineSubscriptionOptionsText).toBeVisible({ timeout: 60000 });
    await this.courageMagazineSubscriptionOptionsText.scrollIntoViewIfNeeded();
    let text = await this.courageMagazineSubscriptionOptionsText.textContent();
    return text;
  }

  async validateCourageUSInternationalText() {
    await expect(this.courageUSInternationalText).toBeVisible({ timeout: 60000 });
    await this.courageUSInternationalText.scrollIntoViewIfNeeded();
    let text = await this.courageUSInternationalText.textContent();
    return text;
  }

  async selectRBUnderCourageUSInternational() {
    await expect(this.courageUSInternationalText).toBeVisible({ timeout: 60000 });
    await this.courageUSInternationalText.scrollIntoViewIfNeeded();
    await this.courageUSInternationalText.click();
    await expect(this.productPB1638RB).toBeVisible({ timeout: 60000 });
    await this.productPB1638RB.scrollIntoViewIfNeeded();
    await this.productPB1638RB.check();
  }

  async validateTestingCrossBundleText() {
    await expect(this.testingCrossBundleText).toBeVisible({ timeout: 60000 });
    await this.testingCrossBundleText.scrollIntoViewIfNeeded();
    let text = await this.testingCrossBundleText.textContent();
    return text;
  }

  async selectTestOfferCouragePrintDigitalCB() {
    await expect(this.testOfferCouragePrintDigitalCB).toBeVisible({ timeout: 60000 });
    await this.testOfferCouragePrintDigitalCB.scrollIntoViewIfNeeded();
    await this.testOfferCouragePrintDigitalCB.check();

  }

  async summaryTotalAmount() {
    try {
      await expect(this.page.locator("//div[text()='Total']/..")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Total']/..").textContent();
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
      console.error('Error in orderSummaryDiscountAmount method:', error);
      throw error;
    }
  }

  async totalPriceAmount() {
    try {
      await expect(this.page.locator("//div[text()='Total Price']/..")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Total Price']/..").textContent();
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
      console.error('Error in orderSummaryDiscountAmount method:', error);
      throw error;
    }
  }

  async validateOrderNumber1Text() {
    await expect(this.orderNumber1Text).toBeVisible({ timeout: 60000 });
    await this.orderNumber1Text.scrollIntoViewIfNeeded();
    let text = await this.orderNumber1Text.textContent();
    return text;
  }

  async validateOrderNumber2Text() {
    await expect(this.orderNumber2Text).toBeVisible({ timeout: 60000 });
    await this.orderNumber2Text.scrollIntoViewIfNeeded();
    let text = await this.orderNumber2Text.textContent();
    return text;
  }

  async validateOrderNumber3Text() {
    await expect(this.orderNumber3Text).toBeVisible({ timeout: 60000 });
    await this.orderNumber3Text.scrollIntoViewIfNeeded();
    let text = await this.orderNumber3Text.textContent();
    return text;
  }

  async validateOrderNumber4Text() {
    await expect(this.orderNumber4Text).toBeVisible({ timeout: 60000 });
    await this.orderNumber4Text.scrollIntoViewIfNeeded();
    let text = await this.orderNumber4Text.textContent();
    return text;
  }

  async validateOrderNumber5Text() {
    await expect(this.orderNumber5Text).toBeVisible({ timeout: 60000 });
    await this.orderNumber5Text.scrollIntoViewIfNeeded();
    let text = await this.orderNumber5Text.textContent();
    return text;
  }

  async clickAddGiftRecipientButton() {
    await expect(this.addGiftRecipientButton).toBeVisible({ timeout: 60000 });
    await this.addGiftRecipientButton.scrollIntoViewIfNeeded();
    await this.addGiftRecipientButton.click();
  }

  async fillGiftRecipientOrderNumber2() {
    await expect(this.recipientFirstName1).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName1.scrollIntoViewIfNeeded();
    await this.recipientFirstName1.fill(faker.person.firstName());
    await this.recipientLastName1.scrollIntoViewIfNeeded();
    await this.recipientLastName1.fill(faker.person.lastName());
    await this.recipientCompanyName1.scrollIntoViewIfNeeded();
    await this.recipientCompanyName1.fill(faker.company.name());
    await this.recipientJobTitle1.scrollIntoViewIfNeeded();
    await this.recipientJobTitle1.fill(faker.person.jobTitle());
    await this.recipientAddress1.scrollIntoViewIfNeeded();
    await this.recipientAddress1.fill('282 Dunview Ave');
    await this.recipientAddress21.scrollIntoViewIfNeeded();
    await this.recipientAddress21.fill('56');
    await this.recipientCity1.scrollIntoViewIfNeeded();
    await this.recipientCity1.fill('Ottawa');
    await this.recipientPostalCode1.scrollIntoViewIfNeeded();
    await this.recipientPostalCode1.fill('M2N4J5');
    await this.recipientPhoneNumber1.scrollIntoViewIfNeeded();
    await this.recipientPhoneNumber1.fill('3456127890');
    await this.recipientEmail1.scrollIntoViewIfNeeded();
    await this.recipientEmail1.fill(faker.internet.email());
    await this.recipientCountry1.scrollIntoViewIfNeeded();
    await this.recipientCountry1.selectOption('CA');
    await this.recipientProvince1.scrollIntoViewIfNeeded();
    await this.recipientProvince1.selectOption('ON')
  }

  async fillGiftRecipientOrderNumber3() {
    await expect(this.recipientFirstName2).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName2.scrollIntoViewIfNeeded();
    await this.recipientFirstName2.fill(faker.person.firstName());
    await this.recipientLastName2.scrollIntoViewIfNeeded();
    await this.recipientLastName2.fill(faker.person.lastName());
    await this.recipientCompanyName2.scrollIntoViewIfNeeded();
    await this.recipientCompanyName2.fill(faker.company.name());
    await this.recipientJobTitle2.scrollIntoViewIfNeeded();
    await this.recipientJobTitle2.fill(faker.person.jobTitle());
    await this.recipientAddress2.scrollIntoViewIfNeeded();
    await this.recipientAddress2.fill('11 Commerce Blvd')
    await this.page.getByText('11 Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await this.recipientAddress22.fill('69');
    await this.recipientPhoneNumber2.scrollIntoViewIfNeeded();
    await this.recipientPhoneNumber2.fill('3456127898');
    await this.recipientEmail2.scrollIntoViewIfNeeded();
    await this.recipientEmail2.fill(faker.internet.email());
  }

  async fillGiftRecipientOrderNumber4() {
    await expect(this.recipientFirstName3).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName3.scrollIntoViewIfNeeded();
    await this.recipientFirstName3.fill(faker.person.firstName());
    await this.recipientLastName3.scrollIntoViewIfNeeded();
    await this.recipientLastName3.fill(faker.person.lastName());
    await this.recipientCompanyName3.scrollIntoViewIfNeeded();
    await this.recipientCompanyName3.fill(faker.company.name());
    await this.recipientJobTitle3.scrollIntoViewIfNeeded();
    await this.recipientJobTitle3.fill(faker.person.jobTitle());
    await this.recipientAddress3.scrollIntoViewIfNeeded();
    await this.recipientAddress3.fill('11 Commerce Blvd')
    await this.page.getByText('11 Commerce Street, New York, NY, USA').click();
    await this.page.waitForTimeout(6000);
    await this.recipientAddress23.fill('89');
    await this.recipientPhoneNumber3.scrollIntoViewIfNeeded();
    await this.recipientPhoneNumber3.fill('3456126969');
    await this.recipientEmail3.scrollIntoViewIfNeeded();
    await this.recipientEmail3.fill(faker.internet.email());
  }

  async fillGiftRecipientOrderNumber5() {
    await expect(this.recipientFirstName4).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName4.scrollIntoViewIfNeeded();
    await this.recipientFirstName4.fill(faker.person.firstName());
    await this.recipientLastName4.scrollIntoViewIfNeeded();
    await this.recipientLastName4.fill(faker.person.lastName());
    await this.recipientCompanyName4.scrollIntoViewIfNeeded();
    await this.recipientCompanyName4.fill(faker.company.name());
    await this.recipientJobTitle4.scrollIntoViewIfNeeded();
    await this.recipientJobTitle4.fill(faker.person.jobTitle());
    await this.recipientAddress4.scrollIntoViewIfNeeded();
    await this.recipientAddress4.fill('11 Commerce Blvd')
    await this.page.getByText('11 Commerce Drive, Cranford, NJ, USA').click();
    await this.page.waitForTimeout(6000);
    await this.recipientAddress24.fill('99');
    await this.recipientPhoneNumber4.scrollIntoViewIfNeeded();
    await this.recipientPhoneNumber4.fill('3456129999');
    await this.recipientEmail4.scrollIntoViewIfNeeded();
    await this.recipientEmail4.fill(faker.internet.email());
  }

  async validateProductPB1133ToBeUnchecked() {
    await expect(this.productPB1133).toBeVisible({ timeout: 60000 });
    await this.productPB1133.scrollIntoViewIfNeeded();
    const isChecked = await this.productPB1133.isChecked();
    return isChecked;
  }

  async totalPriceAmountFor3Order() {
    try {
      await expect(this.page.locator("//div[text()='Number of Subscriptions']/../following-sibling::div")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Number of Subscriptions']/../following-sibling::div").textContent();
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
      console.error('Error in orderSummaryDiscountAmount method:', error);
      throw error;
    }
  }






}