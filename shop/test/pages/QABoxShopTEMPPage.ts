import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class QABoxShopTEMPPage {

  page: Page;
  readonly shippingInformationText: Locator;
  readonly recipientInformationText: Locator;
  readonly userFirstName: Locator;
  readonly userLastName: Locator;
  readonly userPhoneNumber: Locator;
  readonly userEmail: Locator;
  readonly shippingAddressText: Locator;
  readonly userAddress: Locator;
  readonly userAddress2: Locator;
  readonly continueButton: Locator;
  readonly placeOrderButton: Locator;
  readonly thanksForYourPurchaseText: Locator;
  readonly shippingAndPaymentInformationText: Locator;
  readonly recipientAndPurchaserText: Locator;
  readonly summaryText: Locator;
  readonly firstNameIsRequiredText: Locator;
  readonly lastNameIsRequiredText: Locator;
  readonly emailIsRequiredText: Locator;
  readonly addressIsRequiredText: Locator;
  readonly cityIsRequiredText: Locator;
  readonly provinceStateIsRequiredText: Locator;
  readonly postalCodeIsRequiredText: Locator;
  readonly missingRequiredFieldsText: Locator;
  readonly thisIsGiftCB: Locator;
  readonly optionalLabelMessage: Locator;
  readonly recipientFirstName1: Locator;
  readonly recipientLastName1: Locator;
  readonly recipientPhoneNumber1: Locator;
  readonly recipientEmail1: Locator;
  readonly recipientAddress1: Locator;
  readonly recipientAddress21: Locator;
  readonly recipientCountry1: Locator;
  readonly recipientProvince1: Locator;
  readonly recipientCity1: Locator;
  readonly recipientPostalCode1: Locator;
  readonly paymentText: Locator;
  readonly billingInformationText: Locator;
  readonly billingAddressText: Locator;
  readonly userCity: Locator;
  readonly userPostalCode: Locator;
  readonly userCountry: Locator;
  readonly userProvince: Locator;
  readonly continue2Button: Locator;
  readonly haveACouponOrDiscountCodeText: Locator;
  readonly couponIcon: Locator;
  readonly enterCouponCode: Locator;
  readonly applyButton: Locator;
  readonly freeshipText: Locator;
  readonly STAY15Text: Locator;
  readonly freeShippingText: Locator;
  readonly thisCouponCannotBeUsedText: Locator;
  readonly stateIsRequiredText: Locator;
  readonly countryIsRequiredText: Locator;
  readonly recipientFirstNameValue: Locator;
  readonly recipientLastNameValue: Locator;
  readonly recipientPhoneNumberValue: Locator;
  readonly recipientEmailValue: Locator;
  readonly recipientAddressValue: Locator;
  readonly recipientAddress2Value: Locator;
  readonly recipientCityValue: Locator;
  readonly recipientPostalCodeValue: Locator;
  readonly recipientCountryValue: Locator;
  readonly recipientProvinceValue: Locator;
  readonly firstNameIsRequiredTextForGift: Locator;
  readonly lastNameIsRequiredTextForGift: Locator;
  readonly emailAddressIsMissingTextForGift: Locator;
  readonly addressIsRequiredTextForGift: Locator;
  readonly cityIsRequiredTextForGift: Locator;
  readonly stateIsRequiredTextForGift: Locator;
  readonly postalCodeIsRequiredTextForGift: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shippingInformationText = page.getByText('Shipping Information')
    this.recipientInformationText = page.getByText('Recipient Information')
    this.userFirstName = page.locator('#userFirstName')
    this.userLastName = page.locator('#userLastName')
    this.userPhoneNumber = page.locator('#userPhoneNumber')
    this.userEmail = page.locator('#userEmail')
    this.shippingAddressText = page.getByText('Shipping Address').first()
    this.userAddress = page.locator('#userAddress')
    this.userAddress2 = page.locator('#userAddress2')
    this.continueButton = page.getByText('Continue').nth(1)
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
    this.thanksForYourPurchaseText = page.getByText('Thanks for your purchase!')
    this.shippingAndPaymentInformationText = page.getByText('Shipping and Payment Information')
    this.recipientAndPurchaserText = page.getByText('Recipient and Purchaser')
    this.summaryText = page.getByText('Summary')
    this.firstNameIsRequiredText = page.getByText('First Name is required')
    this.lastNameIsRequiredText = page.getByText('Last Name is required')
    this.emailIsRequiredText = page.getByText('Email is required')
    this.addressIsRequiredText = page.getByText('Address is required')
    this.cityIsRequiredText = page.getByText('City is required')
    this.provinceStateIsRequiredText = page.getByText('Province/State is required')
    this.postalCodeIsRequiredText = page.getByText('Postal code is required')
    this.missingRequiredFieldsText = page.getByText('Missing Required Fields. Please See Above.')
    this.thisIsGiftCB = page.locator('form > div:nth-child(2) > div > div > div').first()
    this.optionalLabelMessage = page.getByPlaceholder('Optional Label Message...')
    this.recipientFirstName1 = page.locator('#recipientFirstName1')
    this.recipientLastName1 = page.locator('#recipientLastName1')
    this.recipientPhoneNumber1 = page.locator('#recipientPhoneNumber1')
    this.recipientEmail1 = page.locator('#recipientEmail1')
    this.recipientAddress1 = page.locator('#recipientAddress1')
    this.recipientAddress21 = page.locator('#recipientAddress21')
    this.recipientCity1 = page.locator('#recipientCity1')
    this.recipientPostalCode1 = page.locator('#recipientPostalCode1')
    this.recipientCountry1 = page.locator('#recipientCountry1')
    this.recipientProvince1 = page.locator('#recipientProvince1')
    this.paymentText = page.locator("//div[text()='Payment']")
    this.billingInformationText = page.getByText('Billing Information')
    this.billingAddressText = page.getByText('Billing Address')
    this.userCity = page.locator('#userCity')
    this.userPostalCode = page.locator('#userPostalCode')
    this.userCountry = page.locator('#userCountry')
    this.userProvince = page.locator('#userProvince')
    this.continue2Button = page.getByText('Continue').nth(2)
    this.haveACouponOrDiscountCodeText = page.getByText('Have a coupon or discount code?')
    this.couponIcon = page.locator("//div[text()='Have a coupon or discount code?']/following-sibling::div")
    this.enterCouponCode = page.getByPlaceholder('Enter Coupon Code')
    this.applyButton = page.getByText('Apply')
    this.freeshipText = page.getByText('freeship').nth(1)
    this.STAY15Text = page.getByText('STAY15').nth(2)
    this.freeShippingText = page.getByText('free shipping')
    this.thisCouponCannotBeUsedText = page.getByText('This coupon cannot be used with other coupons.')
    this.stateIsRequiredText = page.getByText('State is required')
    this.countryIsRequiredText = page.getByText('Country is required')
    this.recipientFirstNameValue = page.locator('//input[@id="recipientFirstName1" and @value=""]')
    this.recipientLastNameValue = page.locator('//input[@id="recipientLastName1" and @value=""]')
    this.recipientPhoneNumberValue = page.locator('//input[@id="recipientPhoneNumber1" and @value=""]')
    this.recipientEmailValue = page.locator('//input[@id="recipientEmail1" and @value=""]')
    this.recipientAddressValue = page.locator('//input[@id="recipientAddress1" and @value=""]')
    this.recipientAddress2Value = page.locator('//input[@id="recipientAddress21" and @value=""]')
    this.recipientCityValue = page.locator('//input[@id="recipientCity1" and @value=""]')
    this.recipientPostalCodeValue = page.locator('//input[@id="recipientPostalCode1" and @value=""]')
    this.recipientCountryValue = page.locator('select#recipientCountry1');
    this.recipientProvinceValue = page.locator('//input[@id="recipientProvince1" and @value=""]')

    this.firstNameIsRequiredTextForGift = page.getByText('First Name is required').first()
    this.lastNameIsRequiredTextForGift = page.getByText('Last Name is required').first()
    this.emailAddressIsMissingTextForGift = page.getByText('Email address is missing')
    this.addressIsRequiredTextForGift = page.getByText('Address is required').first()
    this.cityIsRequiredTextForGift = page.getByText('City is required').first()
    this.stateIsRequiredTextForGift = page.getByText('State is required', { exact: true })
    this.postalCodeIsRequiredTextForGift = page.getByText('Postal code is required').first()
  }

  async validateShippingInformationText() {
    await expect(this.shippingInformationText).toBeVisible({ timeout: 60000 });
    await this.shippingInformationText.scrollIntoViewIfNeeded();
    let text = await this.shippingInformationText.textContent();
    return text;
  }

  async validateRecipientInformationText() {
    await expect(this.recipientInformationText).toBeVisible({ timeout: 60000 });
    await this.recipientInformationText.scrollIntoViewIfNeeded();
    let text = await this.recipientInformationText.textContent();
    return text;
  }

  async fillRecipientInformationForm() {
    await expect(this.userFirstName).toBeVisible({ timeout: 60000 });
    await this.userFirstName.scrollIntoViewIfNeeded();
    await this.userFirstName.fill(faker.person.firstName());
    await this.userLastName.fill(faker.person.lastName());
    await this.userPhoneNumber.fill('3456127890');
    await this.userEmail.fill(faker.internet.email());
  }

  async validateShippingAddressText() {
    await expect(this.shippingAddressText).toBeVisible({ timeout: 60000 });
    await this.shippingAddressText.scrollIntoViewIfNeeded();
    let text = await this.shippingAddressText.textContent();
    return text;
  }

  async fillShippingAddressForm() {
    await expect(this.userAddress).toBeVisible({ timeout: 60000 });
    await this.userAddress.scrollIntoViewIfNeeded();
    await this.userAddress.fill('11 Commerce Blvd');
    await this.page.waitForTimeout(8000);
    await this.page.getByText('11 Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(8000);
    await this.userAddress2.fill('45');
  }

  async clickContinueButton() {
    await expect(this.continueButton).toBeVisible({ timeout: 60000 });
    await this.continueButton.scrollIntoViewIfNeeded();
    await this.continueButton.click();
  }

  async clickPlaceOrderButton() {
    await expect(this.placeOrderButton).toBeVisible({ timeout: 60000 });
    await this.placeOrderButton.scrollIntoViewIfNeeded();
    await this.placeOrderButton.click();
  }

  async totalAmount() {
    try {
      let text = await this.page.locator("//div[text()='Total']/..").textContent();
      if (text === null) {
        console.warn('No text content found for the locator.');
        return null;
      }
      const numericValue = text.match(/[\d.]+/g);
      if (numericValue) {
        return parseFloat(numericValue.join(''));
      } else {
        console.warn('No numeric value found in the text:', text);
        return null;
      }
    } catch (error) {
      console.error('Error in totalAmount method:', error);
      throw error;
    }
  }

  async validateThanksForYourPurchaseText() {
    await expect(this.thanksForYourPurchaseText).toBeVisible({ timeout: 60000 });
    await this.thanksForYourPurchaseText.scrollIntoViewIfNeeded();
    let text = await this.thanksForYourPurchaseText.textContent();
    return text;
  }

  async summaryAmount() {
    try {
      let text = await this.page.locator("//div[text()='Total']/..").textContent();
      if (text === null) {
        console.warn('No text content found for the locator.');
        return null;
      }
      const numericValue = text.match(/[\d.]+/g);
      if (numericValue) {
        return parseFloat(numericValue.join(''));
      } else {
        console.warn('No numeric value found in the text:', text);
        return null;
      }
    } catch (error) {
      console.error('Error in totalAmount method:', error);
      throw error;
    }
  }

  async validateShippingAndPaymentInformationText() {
    await expect(this.shippingAndPaymentInformationText).toBeVisible({ timeout: 60000 });
    await this.shippingAndPaymentInformationText.scrollIntoViewIfNeeded();
    let text = await this.shippingAndPaymentInformationText.textContent();
    return text;
  }

  async validateRecipientAndPurchaserText() {
    await expect(this.recipientAndPurchaserText).toBeVisible({ timeout: 60000 });
    await this.recipientAndPurchaserText.scrollIntoViewIfNeeded();
    let text = await this.recipientAndPurchaserText.textContent();
    return text;
  }

  async validateSummaryText() {
    await expect(this.summaryText).toBeVisible({ timeout: 60000 });
    await this.summaryText.scrollIntoViewIfNeeded();
    let text = await this.summaryText.textContent();
    return text;
  }

  async validateFirstNameIsRequiredText() {
    await expect(this.firstNameIsRequiredText).toBeVisible({ timeout: 60000 });
    await this.firstNameIsRequiredText.scrollIntoViewIfNeeded();
    let text = await this.firstNameIsRequiredText.textContent();
    return text;
  }

  async validateLastNameIsRequiredText() {
    await expect(this.lastNameIsRequiredText).toBeVisible({ timeout: 60000 });
    await this.lastNameIsRequiredText.scrollIntoViewIfNeeded();
    let text = await this.lastNameIsRequiredText.textContent();
    return text;
  }

  async validateEmailIsRequiredText() {
    await expect(this.emailIsRequiredText).toBeVisible({ timeout: 60000 });
    await this.emailIsRequiredText.scrollIntoViewIfNeeded();
    let text = await this.emailIsRequiredText.textContent();
    return text;
  }

  async validateAddressIsRequiredText() {
    await expect(this.addressIsRequiredText).toBeVisible({ timeout: 60000 });
    await this.addressIsRequiredText.scrollIntoViewIfNeeded();
    let text = await this.addressIsRequiredText.textContent();
    return text;
  }

  async validateCityIsRequiredText() {
    await expect(this.cityIsRequiredText).toBeVisible({ timeout: 60000 });
    await this.cityIsRequiredText.scrollIntoViewIfNeeded();
    let text = await this.cityIsRequiredText.textContent();
    return text;
  }

  async validateProvinceStateIsRequiredText() {
    await expect(this.provinceStateIsRequiredText).toBeVisible({ timeout: 60000 });
    await this.provinceStateIsRequiredText.scrollIntoViewIfNeeded();
    let text = await this.provinceStateIsRequiredText.textContent();
    return text;
  }

  async validatePostalCodeIsRequiredText() {
    await expect(this.postalCodeIsRequiredText).toBeVisible({ timeout: 60000 });
    await this.postalCodeIsRequiredText.scrollIntoViewIfNeeded();
    let text = await this.postalCodeIsRequiredText.textContent();
    return text;
  }

  async validateMissingRequiredFieldsText() {
    await expect(this.missingRequiredFieldsText).toBeVisible({ timeout: 60000 });
    await this.missingRequiredFieldsText.scrollIntoViewIfNeeded();
    let text = await this.missingRequiredFieldsText.textContent();
    return text;
  }

  async checkThisIsGiftCB() {
    await expect(this.thisIsGiftCB).toBeVisible({ timeout: 60000 });
    await this.thisIsGiftCB.scrollIntoViewIfNeeded();
    await this.thisIsGiftCB.click();
  }

  async fillShippingAddressFormForGiftOrder() {
    await expect(this.recipientAddress1).toBeVisible({ timeout: 60000 });
    await this.recipientAddress1.scrollIntoViewIfNeeded();
    await this.recipientAddress1.fill('11 Commerce Blvd');
    await this.page.waitForTimeout(8000);
    await this.page.getByText('11 Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(8000);
    await this.recipientAddress21.fill('45');
    await this.optionalLabelMessage.fill(faker.lorem.text());
  }

  async fillRecipientInformationFormForGiftOrder() {
    await expect(this.recipientFirstName1).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName1.scrollIntoViewIfNeeded();
    await this.recipientFirstName1.fill(faker.person.firstName());
    await this.recipientLastName1.fill(faker.person.lastName());
    await this.recipientPhoneNumber1.fill('3456127890');
    await this.recipientEmail1.fill(faker.internet.email());
  }

  async validatePaymentText() {
    await expect(this.paymentText).toBeVisible({ timeout: 60000 });
    await this.paymentText.scrollIntoViewIfNeeded();
    let text = await this.paymentText.textContent();
    return text;
  }

  async validateBillingInformationText() {
    await expect(this.billingInformationText).toBeVisible({ timeout: 60000 });
    await this.billingInformationText.scrollIntoViewIfNeeded();
    let text = await this.billingInformationText.textContent();
    return text;
  }

  async validateBillingAddressText() {
    await expect(this.billingAddressText).toBeVisible({ timeout: 60000 });
    await this.billingAddressText.scrollIntoViewIfNeeded();
    let text = await this.billingAddressText.textContent();
    return text;
  }

  async fillBillingInformationForm() {
    await expect(this.userFirstName).toBeVisible({ timeout: 60000 });
    await this.userFirstName.scrollIntoViewIfNeeded();
    await this.userFirstName.fill(faker.person.firstName());
    await this.userLastName.fill(faker.person.lastName());
    await this.userPhoneNumber.fill('3456127890');
    await this.userEmail.fill(faker.internet.email());
  }

  async fillBillingAddressForm() {
    await expect(this.userAddress).toBeVisible({ timeout: 60000 });
    await this.userAddress.scrollIntoViewIfNeeded();
    await this.userAddress.fill('282 Dunview Ave');
    await this.userAddress2.fill('45');
    await this.userCountry.selectOption('CA');
    await this.userProvince.selectOption('ON');
    await this.userCity.fill('Toronto');
    await this.userPostalCode.fill('M2N4J5');
  }

  async clickContinue2Button() {
    await expect(this.continue2Button).toBeVisible({ timeout: 60000 });
    await this.continue2Button.scrollIntoViewIfNeeded();
    await this.continue2Button.click();
  }

  async validateHaveACouponOrDiscountCodeText() {
    await expect(this.haveACouponOrDiscountCodeText).toBeVisible({ timeout: 60000 });
    await this.haveACouponOrDiscountCodeText.scrollIntoViewIfNeeded();
    let text = await this.haveACouponOrDiscountCodeText.textContent();
    return text;
  }

  async clickCouponIcon() {
    await expect(this.couponIcon).toBeVisible({ timeout: 60000 });
    await this.couponIcon.scrollIntoViewIfNeeded();
    await this.couponIcon.click();
  }

  async fillCouponCode(couponCode: string) {
    await expect(this.enterCouponCode).toBeVisible({ timeout: 60000 });
    await this.enterCouponCode.scrollIntoViewIfNeeded();
    await this.enterCouponCode.fill(couponCode);
  }

  async clickApplyButton() {
    await expect(this.applyButton).toBeVisible({ timeout: 60000 });
    await this.applyButton.scrollIntoViewIfNeeded();
    await this.applyButton.click();
  }

  async validateFreeshipIsApplied() {
    await expect(this.freeshipText).toBeVisible({ timeout: 60000 });
    await this.freeshipText.scrollIntoViewIfNeeded();
    let text = await this.freeshipText.textContent();
    return text;
  }

  async validateSTAY15IsApplied() {
    await expect(this.STAY15Text).toBeVisible({ timeout: 60000 });
    await this.STAY15Text.scrollIntoViewIfNeeded();
    let text = await this.STAY15Text.textContent();
    return text;
  }

  async validateFreeShippingText() {
    await expect(this.freeShippingText).toBeVisible({ timeout: 60000 });
    await this.freeShippingText.scrollIntoViewIfNeeded();
    let text = await this.freeShippingText.textContent();
    return text;
  }

  async summaryCouponDiscountAmount() {
    try {
      await expect(this.page.locator("//div[text()='Coupon Discount']/..")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Coupon Discount']/..").textContent();
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

  async orderSummaryDiscountAmount() {
    try {
      await expect(this.page.locator("//div[text()='Discount']/ancestor::div[@class='row']")).toBeVisible({ timeout: 60000 });
      let text = await this.page.locator("//div[text()='Discount']/ancestor::div[@class='row']").textContent();
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

  async validateThisCouponCannotBeUsedText() {
    await expect(this.thisCouponCannotBeUsedText).toBeVisible({ timeout: 60000 });
    await this.thisCouponCannotBeUsedText.scrollIntoViewIfNeeded();
    let text = await this.thisCouponCannotBeUsedText.textContent();
    return text;
  }

  async validateStateIsRequiredText() {
    await expect(this.stateIsRequiredText).toBeVisible({ timeout: 60000 });
    await this.stateIsRequiredText.scrollIntoViewIfNeeded();
    let text = await this.stateIsRequiredText.textContent();
    return text;
  }

  async validateCountryIsRequiredText() {
    await expect(this.countryIsRequiredText).toBeVisible({ timeout: 60000 });
    await this.countryIsRequiredText.scrollIntoViewIfNeeded();
    let text = await this.countryIsRequiredText.textContent();
    return text;
  }

  async validateRecipientFirstNameValueValue() {
    await expect(this.recipientFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.recipientFirstNameValue.scrollIntoViewIfNeeded();
    let text = await this.recipientFirstNameValue.getAttribute('value');
    return text;
  }

  async validateRecipientLastNameValue() {
    await expect(this.recipientLastNameValue).toBeVisible({ timeout: 60000 });
    await this.recipientLastNameValue.scrollIntoViewIfNeeded();
    let text = await this.recipientLastNameValue.getAttribute('value');
    return text;
  }

  async validateRecipientPhoneNumberValue() {
    await expect(this.recipientPhoneNumberValue).toBeVisible({ timeout: 60000 });
    await this.recipientPhoneNumberValue.scrollIntoViewIfNeeded();
    let text = await this.recipientPhoneNumberValue.getAttribute('value');
    return text;
  }

  async validateRecipientEmailValue() {
    await expect(this.recipientEmailValue).toBeVisible({ timeout: 60000 });
    await this.recipientEmailValue.scrollIntoViewIfNeeded();
    let text = await this.recipientEmailValue.getAttribute('value');
    return text;
  }

  async validateRecipientAddressValue() {
    await expect(this.recipientAddressValue).toBeVisible({ timeout: 60000 });
    await this.recipientAddressValue.scrollIntoViewIfNeeded();
    let text = await this.recipientAddressValue.getAttribute('value');
    return text;
  }

  async validateRecipientAddress2Value() {
    await expect(this.recipientAddress2Value).toBeVisible({ timeout: 60000 });
    await this.recipientAddress2Value.scrollIntoViewIfNeeded();
    let text = await this.recipientAddress2Value.getAttribute('value');
    return text;
  }

  async validateRecipientCityValue() {
    await expect(this.recipientCityValue).toBeVisible({ timeout: 60000 });
    await this.recipientCityValue.scrollIntoViewIfNeeded();
    let text = await this.recipientCityValue.getAttribute('value');
    return text;
  }

  async validateRecipientPostalCodeValue() {
    await expect(this.recipientPostalCodeValue).toBeVisible({ timeout: 60000 });
    await this.recipientPostalCodeValue.scrollIntoViewIfNeeded();
    let text = await this.recipientPostalCodeValue.getAttribute('value');
    return text;
  }

  async validateRecipientCountryValue() {
    await this.recipientCountryValue.waitFor({ state: 'visible' });
    await this.recipientCountryValue.scrollIntoViewIfNeeded();
    const selectedOption = await this.recipientCountryValue.locator('option:checked').first();
    let country = null;
    if (selectedOption) {
      country = await selectedOption.innerText();
    } else {
      throw new Error('No country selected or element not found.');
    }
    console.log('Retrieved country:', country);
    return country.trim();
  }

  async validateRecipientProvinceValue() {
    await this.recipientProvinceValue.waitFor({ state: 'visible' });
    await this.recipientProvinceValue.scrollIntoViewIfNeeded();
    let text = await this.recipientProvinceValue.getAttribute('value');
    return text;
  }

  async validateFirstNameIsRequiredTextForGift() {
    await expect(this.firstNameIsRequiredTextForGift).toBeVisible({ timeout: 60000 });
    await this.firstNameIsRequiredTextForGift.scrollIntoViewIfNeeded();
    let text = await this.firstNameIsRequiredTextForGift.textContent();
    return text;
  }

  async validateLastNameIsRequiredTextForGift() {
    await expect(this.lastNameIsRequiredTextForGift).toBeVisible({ timeout: 60000 });
    await this.lastNameIsRequiredTextForGift.scrollIntoViewIfNeeded();
    let text = await this.lastNameIsRequiredTextForGift.textContent();
    return text;
  }

  async validateEmailAddressIsMissingTextForGift() {
    await expect(this.emailAddressIsMissingTextForGift).toBeVisible({ timeout: 60000 });
    await this.emailAddressIsMissingTextForGift.scrollIntoViewIfNeeded();
    let text = await this.emailAddressIsMissingTextForGift.textContent();
    return text;
  }

  async validateAddressIsRequiredTextForGift() {
    await expect(this.addressIsRequiredTextForGift).toBeVisible({ timeout: 60000 });
    await this.addressIsRequiredTextForGift.scrollIntoViewIfNeeded();
    let text = await this.addressIsRequiredTextForGift.textContent();
    return text;
  }

  async validateCityIsRequiredTextForGift() {
    await expect(this.cityIsRequiredTextForGift).toBeVisible({ timeout: 60000 });
    await this.cityIsRequiredTextForGift.scrollIntoViewIfNeeded();
    let text = await this.cityIsRequiredTextForGift.textContent();
    return text;
  }

  async validateStateIsRequiredTextForGift() {
    await expect(this.stateIsRequiredTextForGift).toBeVisible({ timeout: 60000 });
    await this.stateIsRequiredTextForGift.scrollIntoViewIfNeeded();
    let text = await this.stateIsRequiredTextForGift.textContent();
    return text;
  }
  async validatePostalCodeIsRequiredTextForGift() {
    await expect(this.postalCodeIsRequiredTextForGift).toBeVisible({ timeout: 60000 });
    await this.postalCodeIsRequiredTextForGift.scrollIntoViewIfNeeded();
    let text = await this.postalCodeIsRequiredTextForGift.textContent();
    return text;
  }
}