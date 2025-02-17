import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';
import { expect, FrameLocator, Locator, type Page } from '@playwright/test';



export class EB_GolfPage {
  page: Page;
  readonly paymentMethodText: Locator;
  readonly creditCardText: Locator;
  readonly cardNumberText: Locator;
  readonly expiryDateText: Locator;
  readonly cvvText: Locator;
  readonly creditCardOption: Locator;
  readonly billMeLaterOption: Locator;
  readonly cardNumberInput: Locator;
  readonly cvvInput: Locator;
  readonly monthDropdown: Locator;
  readonly yearDropdown: Locator;
  readonly creditCardRdBtn: Locator;
  readonly billMeLaterRdBtn: Locator;
  readonly sendAOneYearGiftOfGOLFBelowText: Locator;
  readonly unitedStatesOfferText: Locator;
  readonly billingAddressText: Locator;
  readonly giftRecipientMailingAddressText: Locator;
  readonly orderNumberText: Locator;
  readonly placeOrderBtn: Locator;

  readonly userFirstNameValue: Locator;
  readonly userLastNameValue: Locator;
  readonly userAddress1Value: Locator;
  readonly userAddress2Value: Locator;
  readonly userCityValue: Locator;
  readonly userPostalCodeValue: Locator;
  readonly userPhoneNumber: Locator;
  readonly userEmailValue: Locator;
  readonly userCountry: Locator;
  readonly userProvince: Locator;

  readonly recipientFirstName1Value: Locator;
  readonly recipientLastName1Value: Locator;
  readonly recipientAddress1Value: Locator;
  readonly recipientAddress2Value: Locator;
  readonly recipientPostalCode1Value: Locator;
  readonly recipientPhoneNumber1Value: Locator;
  readonly recipientEmail1Value: Locator;
  readonly optionalLabelMessageValue: Locator;
  readonly recipientCity1Value: Locator;
  readonly transactionSuccessfulText: Locator;
  readonly orderSuccessfullyAcceptedMsg: Locator;
  readonly recipientCountry: Locator;
  readonly recipientProvince: Locator;
  readonly pleaseEnterValidCreditCardNumberAlertMsg: Locator;
  readonly pleaseEnterExpiryDateAlertMsg: Locator;
  readonly couldNotMakePaymentAlertMsg: Locator;


  constructor(page: Page) {
    this.page = page;
    this.paymentMethodText = page.getByText('Payment Method')
    this.creditCardOption = page.locator('label').filter({ hasText: 'Credit Card' })
    this.creditCardRdBtn = page.locator('input[name="paymentMethod"][value="cc"]')
    this.billMeLaterRdBtn = page.locator('input[name="paymentMethod"][value="credit"]')
    this.billMeLaterOption = page.getByText('Bill Me Later', { exact: true })
    this.creditCardText = page.getByRole('heading', { name: 'Credit Card' })
    this.cardNumberText = page.getByText('Card Number')
    this.cardNumberInput = page.locator('#ccNum')
    this.expiryDateText = page.getByText('Expiry Date')
    this.monthDropdown = page.getByRole('group', { name: 'Expiry Date' }).getByRole('combobox').first()
    this.yearDropdown = page.getByRole('group', { name: 'Expiry Date' }).getByRole('combobox').nth(1)
    this.cvvText = page.getByText('CVV')
    this.cvvInput = page.getByRole('group', { name: 'CVV' }).getByRole('textbox')

    this.sendAOneYearGiftOfGOLFBelowText = page.getByText('Send a 1-Year Gift of GOLF below')
    this.unitedStatesOfferText = page.getByText('United States Offer')
    this.billingAddressText = page.getByText('Billing Address')
    this.giftRecipientMailingAddressText = page.getByText('Gift Recipient Mailing Address')
    this.orderNumberText = page.getByText('Order Number')
    this.placeOrderBtn = page.getByRole('button', { name: 'Place Order' })

    this.userFirstNameValue = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value=""]')
    this.userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value=""]')
    this.userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value=""]')
    this.userAddress2Value = page.locator('//input[@id="userAddress2" and @name="userAddress2" and @value=""]')
    this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value=""]')
    this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value=""]')
    this.userPhoneNumber = page.locator('//input[@id="userPhoneNumber"]')
    this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value=""]')
    this.userCountry = page.locator('#userCountry')
    this.userProvince = page.locator('select#userProvince')

    this.recipientFirstName1Value = page.locator('//input[@id="recipientFirstName1" and @name="recipientFirstName1" and @value=""]')
    this.recipientLastName1Value = page.locator('//input[@id="recipientLastName1" and @name="recipientLastName1" and @value=""]')
    this.recipientAddress1Value = page.locator('//input[@id="recipientAddress1" and @name="recipientAddress1" and @value=""]')
    this.recipientAddress2Value = page.locator('//input[@id="recipientAddress21" and @name="recipientAddress21" and @value=""]')
    this.recipientCity1Value = page.locator('//input[@id="recipientCity1" and @name="recipientCity1" and @value=""]')
    this.recipientPostalCode1Value = page.locator('//input[@id="recipientPostalCode1" and @name="recipientPostalCode1" and @value=""]')
    this.recipientPhoneNumber1Value = page.locator('//input[@id="recipientPhoneNumber1" and @name="recipientPhoneNumber1" and @value=""]')
    this.recipientEmail1Value = page.locator('//input[@id="recipientEmail1" and @name="recipientEmail1" and @value=""]')
    this.optionalLabelMessageValue = page.locator('//input[@id="recipientLabelMessage1" and @name="recipientLabelMessage1" and @value=""]');
    this.recipientCountry = page.locator('#recipientCountry1')
    this.recipientProvince = page.locator('select#recipientProvince1')
    this.transactionSuccessfulText = page.getByText('TRANSACTION SUCCESSFUL')
    this.orderSuccessfullyAcceptedMsg = page.getByText('Thank you for your subscription. Your order has been accepted successfully.')
    this.pleaseEnterValidCreditCardNumberAlertMsg = page.getByText('Please enter a valid credit card number.')
    this.pleaseEnterExpiryDateAlertMsg = page.getByText('Please enter expiry date.')
    this.couldNotMakePaymentAlertMsg = page.getByText('could not make payment')
  }

  async validatePaymentMethodText() {
    await expect(this.paymentMethodText).toBeVisible({ timeout: 60000 });
    await this.paymentMethodText.scrollIntoViewIfNeeded();
    let text = await this.paymentMethodText.textContent();
    return text;
  }

  async validateCreditCardText() {
    await expect(this.creditCardText).toBeVisible({ timeout: 60000 });
    await this.creditCardText.scrollIntoViewIfNeeded();
    let text = await this.creditCardText.textContent();
    return text;
  }

  async validateCardNumberText() {
    await expect(this.cardNumberText).toBeVisible({ timeout: 60000 });
    await this.cardNumberText.scrollIntoViewIfNeeded();
    let text = await this.cardNumberText.textContent();
    return text;
  }
  async validateExpiryDateText() {
    await expect(this.expiryDateText).toBeVisible({ timeout: 60000 });
    await this.expiryDateText.scrollIntoViewIfNeeded();
    let text = await this.expiryDateText.textContent();
    return text;
  }

  async validateCvvText() {
    await expect(this.cvvText).toBeVisible({ timeout: 60000 });
    await this.cvvText.scrollIntoViewIfNeeded();
    let text = await this.cvvText.textContent();
    return text;
  }

  async verifyCvvInput() {
    await expect(this.cvvInput).toBeVisible({ timeout: 60000 });
    await this.cvvInput.scrollIntoViewIfNeeded();
    let text = await this.cvvInput.inputValue();
    return text;
  }
async verifyMonthDropdown() {
  await expect(this.monthDropdown).toBeVisible({ timeout: 60000 });
  await this.monthDropdown.scrollIntoViewIfNeeded();
  let text = await this.monthDropdown.inputValue();  // Getting the selected month
  return text;
}
async verifyYearDropdown() {
  await expect(this.yearDropdown).toBeVisible({ timeout: 60000 });
  await this.yearDropdown.scrollIntoViewIfNeeded();
  let text = await this.yearDropdown.inputValue();  // Getting the selected year
  return text;
}
  async verifyCardNumberInput() {
    await expect(this.cardNumberInput).toBeVisible({ timeout: 60000 });
    await this.cardNumberInput.scrollIntoViewIfNeeded();
    let text = await this.cardNumberInput.inputValue();
    return text;
  }
  async verifyCreditCardOption() {
    await expect(this.creditCardOption).toBeVisible({ timeout: 60000 });
    await this.creditCardOption.scrollIntoViewIfNeeded();
  }
  async verifyBillMeLaterOption() {
    await expect(this.billMeLaterOption).toBeVisible({ timeout: 60000 });
    await this.billMeLaterOption.scrollIntoViewIfNeeded();
  }

  async getCreditCardRadioButtonCheckedState() {
    await expect(this.creditCardRdBtn).toBeVisible({ timeout: 60000 });
    await this.creditCardRdBtn.scrollIntoViewIfNeeded();
    const isChecked = await this.creditCardRdBtn.isChecked();
    return isChecked;
  }

  async getBillMeLaterButtonUnCheckedState() {
    await expect(this.billMeLaterRdBtn).toBeVisible({ timeout: 60000 });
    await this.billMeLaterRdBtn.scrollIntoViewIfNeeded();
    const isChecked = await this.billMeLaterRdBtn.isChecked();
    return isChecked;
  }


  async validateSendAOneYearGiftOfGOLFBelowText() {
    await expect(this.sendAOneYearGiftOfGOLFBelowText).toBeVisible({ timeout: 60000 });
    await this.sendAOneYearGiftOfGOLFBelowText.scrollIntoViewIfNeeded();
    let text = await this.sendAOneYearGiftOfGOLFBelowText.textContent();
    return text;
  }

  async validateUnitedStatesOfferText() {
    await expect(this.unitedStatesOfferText).toBeVisible({ timeout: 60000 });
    await this.unitedStatesOfferText.scrollIntoViewIfNeeded();
    let text = await this.unitedStatesOfferText.textContent();
    return text;
  }

  async validateBillingAddressText() {
    await expect(this.billingAddressText).toBeVisible({ timeout: 60000 });
    await this.billingAddressText.scrollIntoViewIfNeeded();
    let text = await this.billingAddressText.textContent();
    return text;
  }

  async validateGiftRecipientMailingAddressText() {
    await expect(this.giftRecipientMailingAddressText).toBeVisible({ timeout: 60000 });
    await this.giftRecipientMailingAddressText.scrollIntoViewIfNeeded();
    let text = await this.giftRecipientMailingAddressText.textContent();
    return text;
  }

  async validateOrderNumberText() {
    await expect(this.orderNumberText).toBeVisible({ timeout: 60000 });
    await this.orderNumberText.scrollIntoViewIfNeeded();
    let text = await this.orderNumberText.textContent();
    return text;
  }

  async clickPlaceOrderButton() {
    await this.page.waitForTimeout(8000);
    await expect(this.placeOrderBtn).toBeVisible({ timeout: 60000 });
    await this.placeOrderBtn.scrollIntoViewIfNeeded();
    await this.placeOrderBtn.click();
    await this.page.waitForTimeout(8000);
  }

  async validateUserFirstNameValue() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    let text = await this.userFirstNameValue.getAttribute('value');
    return text;
  }

  async validateRecipientFirstNameValue() {
    await expect(this.recipientFirstName1Value).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName1Value.scrollIntoViewIfNeeded();
    let text = await this.recipientFirstName1Value.getAttribute('value');
    return text;
  }

  async validateUserLastNameValue() {
    await expect(this.userLastNameValue).toBeVisible({ timeout: 60000 });
    let text = await this.userLastNameValue.getAttribute('value');
    return text;
  }

  async validateRecipientLastNameValue() {
    await expect(this.recipientLastName1Value).toBeVisible({ timeout: 60000 });
    let text = await this.recipientLastName1Value.getAttribute('value');
    return text;
  }

  async validateUserAddress1Value() {
    await expect(this.userAddress1Value).toBeVisible({ timeout: 60000 });
    let text = await this.userAddress1Value.getAttribute('value');
    return text;
  }

  async validateRecipientAddress1Value() {
    await expect(this.recipientAddress1Value).toBeVisible({ timeout: 60000 });
    let text = await this.recipientAddress1Value.getAttribute('value');
    return text;
  }

  async validateUserAddress2Value() {
    await expect(this.userAddress2Value).toBeVisible({ timeout: 60000 });
    let text = await this.userAddress2Value.getAttribute('value');
    return text;
  }

  async validateRecipientAddress2Value() {
    await expect(this.recipientAddress2Value).toBeVisible({ timeout: 60000 });
    let text = await this.recipientAddress2Value.getAttribute('value');
    return text;
  }


  async validateUserCityValue() {
    await expect(this.userCityValue).toBeVisible({ timeout: 60000 });
    let text = await this.userCityValue.getAttribute('value');
    return text;
  }

  async validateRecipientCityValue() {
    await expect(this.recipientCity1Value).toBeVisible({ timeout: 60000 });
    let text = await this.recipientCity1Value.getAttribute('value');
    return text;
  }

  async validateUserPostalCodeValue() {
    await expect(this.userPostalCodeValue).toBeVisible({ timeout: 60000 });
    let text = await this.userPostalCodeValue.getAttribute('value');
    return text;
  }

  async validateRecipientPostalCodeValue() {
    await expect(this.recipientPostalCode1Value).toBeVisible({ timeout: 60000 });
    let text = await this.recipientPostalCode1Value.getAttribute('value');
    return text;
  }

  async validateUserEmailValue() {
    await expect(this.userEmailValue).toBeVisible({ timeout: 60000 });
    await this.userEmailValue.scrollIntoViewIfNeeded();
    let text = await this.userEmailValue.getAttribute('value');
    return text;
  }
  async validateRecipientEmailValue() {
    await expect(this.recipientEmail1Value).toBeVisible({ timeout: 60000 });
    await this.recipientEmail1Value.scrollIntoViewIfNeeded();
    let text = await this.recipientEmail1Value.getAttribute('value');
    return text;
  }
  async validateUserPhoneNumberValue() {
    await this.userPhoneNumber.scrollIntoViewIfNeeded();
    await expect(this.userPhoneNumber).toBeVisible({ timeout: 60000 });
    let text = await this.userPhoneNumber.getAttribute('value');
    return text;
  }
  async validateRecipientPhoneNumberValue() {
    await this.recipientPhoneNumber1Value.scrollIntoViewIfNeeded();
    await expect(this.recipientPhoneNumber1Value).toBeVisible({ timeout: 60000 });
    let text = await this.recipientPhoneNumber1Value.getAttribute('value');
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

  async validateRecipientProvinceValue() {
    await this.recipientProvince.waitFor({ state: 'visible' });
    await this.recipientProvince.scrollIntoViewIfNeeded();
    const selectedOption = await this.recipientProvince.locator('option:checked').first();
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
  async validateRecipientCountryValue() {
    await this.recipientCountry.waitFor({ state: 'visible' });
    await this.recipientCountry.scrollIntoViewIfNeeded();
    const selectedOption = await this.recipientCountry.locator('option:checked').first();
    let country = null;
    if (selectedOption) {
      country = await selectedOption.innerText();
    } else {
      throw new Error('No country selected or element not found.');
    }
    console.log('Retrieved country:', country);
    return country.trim();
  }

  async fillBillingAddressForm() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
    await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
    await this.userAddress1Value.fill('11 Commerce Blvd');
    await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await this.userAddress2Value.fill('EB_Golf_Page Address');
    await this.userPhoneNumber.fill('1234567890');
    await this.userEmailValue.fill(faker.internet.exampleEmail());
  }

  async fillGiftRecipientMailingAddressForm() {
    await expect(this.recipientFirstName1Value).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName1Value.scrollIntoViewIfNeeded();
    await this.recipientFirstName1Value.fill('recipientFirstName' + faker.person.firstName());
    await this.recipientLastName1Value.fill('recipientLastName' + faker.person.lastName());
    await this.recipientAddress1Value.fill('11 Commerce Blvd');
    await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await this.recipientAddress2Value.fill('recipient EB_Golf_Page Address');
    await this.recipientPhoneNumber1Value.fill('1234567890');
    await this.recipientEmail1Value.fill(faker.internet.exampleEmail());
    await this.optionalLabelMessageValue.fill('test message');
  }


 async enterCorrectPaymentDetails(cardnumb: string, month: string, year: string, cvv: string) {
    await expect(this.cardNumberInput).toBeVisible({ timeout: 60000 });
    await this.cardNumberInput.scrollIntoViewIfNeeded();
    await this.cardNumberInput.click();
    await this.cardNumberInput.fill(cardnumb);

    await expect(this.monthDropdown).toBeVisible({ timeout: 60000 });
    await this.monthDropdown.scrollIntoViewIfNeeded();
    await this.monthDropdown.selectOption(month);

    await expect(this.yearDropdown).toBeVisible({ timeout: 60000 });
    await this.yearDropdown.scrollIntoViewIfNeeded();
    await this.yearDropdown.selectOption(year);

    await expect(this.cvvInput).toBeVisible({ timeout: 60000 });
    await this.cvvInput.scrollIntoViewIfNeeded();
    await this.cvvInput.click();
    await this.cvvInput.fill(cvv);

    await this.page.waitForTimeout(10000);

    // await this.page.waitForTimeout(8000);

  }




  async validateOrderSuccessfullyAcceptedMsg() {
    await expect(this.orderSuccessfullyAcceptedMsg).toBeVisible({ timeout: 60000 });
    await this.orderSuccessfullyAcceptedMsg.scrollIntoViewIfNeeded();
    let text = await this.orderSuccessfullyAcceptedMsg.textContent();
    return text;
  }

  async validateTransactionSuccessfulText() {
    await expect(this.transactionSuccessfulText).toBeVisible({ timeout: 60000 });
    await this.transactionSuccessfulText.scrollIntoViewIfNeeded();
    let text = await this.transactionSuccessfulText.textContent();
    return text;
  }

  async validatePleaseEnterValidCreditCardNumberAlertMsg() {
    await expect(this.pleaseEnterValidCreditCardNumberAlertMsg).toBeVisible({ timeout: 60000 });
    await this.pleaseEnterValidCreditCardNumberAlertMsg.scrollIntoViewIfNeeded();
    let text = await this.pleaseEnterValidCreditCardNumberAlertMsg.textContent();
    return text;
  }
  async validateCouldNotMakePaymentAlertMsg() {
    await expect(this.couldNotMakePaymentAlertMsg).toBeVisible({ timeout: 60000 });
    await this.couldNotMakePaymentAlertMsg.scrollIntoViewIfNeeded();
    let text = await this.couldNotMakePaymentAlertMsg.textContent();
    return text;
  }

  async validatePleaseEnterExpiryDateAlertMsg() {
    await expect(this.pleaseEnterExpiryDateAlertMsg).toBeVisible({ timeout: 60000 });
    await this.pleaseEnterExpiryDateAlertMsg.scrollIntoViewIfNeeded();
    let text = await this.pleaseEnterExpiryDateAlertMsg.textContent();
    return text;
  }

  async checkBillMeLaterOption() {
    await expect(this.billMeLaterOption).toBeVisible({ timeout: 60000 });
    await this.billMeLaterOption.scrollIntoViewIfNeeded();
    await this.billMeLaterOption.check();
  }


}