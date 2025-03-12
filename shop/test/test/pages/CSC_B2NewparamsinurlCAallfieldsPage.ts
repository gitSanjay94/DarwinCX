import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class B2NewparamsinurlCAallfieldsPage {
  page: Page;
  readonly userFirstNameValue: Locator;
  readonly userLastNameValue: Locator;
  readonly companyValue: Locator;
  readonly jobTitileValue: Locator;
  readonly userAddress1Value: Locator;
  readonly userAddress2Value: Locator;
  readonly userCityValue: Locator;
  readonly userPostalCodeValue: Locator;
  readonly userEmailValue: Locator;
  readonly userCountry: Locator;
  readonly userProvince: Locator;
  readonly addGiftRecipientButton: Locator;
  readonly placeOrderButton: Locator;
  readonly removeButton: Locator;
  readonly creditCardRB: Locator;
  readonly payPalRB: Locator;
  readonly billMeLaterRB: Locator;
  readonly cardNumberTF: Locator;
  readonly monthTF: Locator;
  readonly CVVTF: Locator;
  readonly placeorder: Locator;
  readonly productUnavailableText: Locator;
  readonly cardNumber: Locator;
  readonly cardExpiry: Locator;
  readonly cardCvc: Locator;
  readonly cardNumberFrame: FrameLocator;
  readonly cardExpiryFrame: FrameLocator;
  readonly cardCvcFrame: FrameLocator;
  readonly productPB1136RB: Locator;
  readonly transactionSuccessfulMsg: Locator;
  readonly productPB1134RB: Locator;
  readonly productPB1135RB: Locator;
  readonly productPB1137RB: Locator;
  readonly productPB1138RB: Locator;
  readonly productPB1139RB: Locator;
  readonly productPB1343RB: Locator;
  readonly productPB1042RB: Locator;
  readonly productPB1529RB: Locator;
  readonly productPB1530RB: Locator;





  constructor(page: Page) {
    this.page = page;
    this.userFirstNameValue = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value="jonathan"]')
    this.userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value="kok"]')
    this.companyValue = page.locator('//input[@id="userCompanyName" and @name="userCompanyName" and @value=""]')
    this.jobTitileValue = page.locator('//input[@id="userJobTitle" and @name="userJobTitle" and @value=""]')
    this.userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value="282 Dunview Ave"]')
    this.userAddress2Value = page.locator('//input[@id="userAddress2" and @name="userAddress2" and @value="45"]')
    this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value="Toronto"]')
    this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value="M2N4J5"]')
    this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value="jonathan@darwin.cx"]')
    this.userCountry = page.locator('#userCountry')
    this.userProvince = page.locator('select#userProvince')
    this.addGiftRecipientButton = page.getByRole('button', { name: 'Add Gift Recipient' })
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
    this.removeButton = page.getByRole('button', { name: 'Remove' })
    this.creditCardRB = page.getByLabel('Credit Card')
    this.payPalRB = page.getByLabel('PayPal')
    this.billMeLaterRB = page.getByLabel('Bill Me Later')
    this.cardNumberTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('Card number')

    this.monthTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('MM / YY')
    this.CVVTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('CVC')
    this.placeorder = page.getByRole('button', { name: 'Place Order' })
    // this.countrymissingalert = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[1]/div[1]/div[2]/div[7]/div[2]/div/span')
    // this.productUnavailableText = page.getByText('Product is unavailable in');
    this.productUnavailableText = page.locator("//span[@class='small sc-gipzik kNcaGv' and text()='Product is unavailable in selected country']")
    this.cardNumber = page.locator("//input[@id='Field-numberInput']");
        this.cardExpiry = page.locator("//input[@id='Field-expiryInput']");
        this.cardCvc = page.locator("//input[@id='Field-cvcInput']");
        this.cardNumberFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
        this.cardExpiryFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
        this.cardCvcFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
    this.productPB1136RB = page.locator("//input[@id='productPB-1136']")
    this.transactionSuccessfulMsg = page.locator("//*[@id='thankYou']")
    this.productPB1134RB = page.locator("//input[@id='productPB-1134']")
    this.productPB1135RB = page.locator("//input[@id='productPB-1135']")
    this.productPB1137RB = page.locator("//input[@id='productPB-1137']")
    this.productPB1138RB = page.locator("//input[@id='productPB-1138']")
    this.productPB1139RB = page.locator("//input[@id='productPB-1139']")
    this.productPB1343RB = page.locator("//input[@id='productPB-1343']")
    this.productPB1042RB = page.locator("//input[@id='productPB-1042']")
    this.productPB1529RB = page.locator("//input[@id='productPB-1529']")
    this.productPB1530RB = page.locator("//input[@id='productPB-1530']")
  }


  async validateUserFirstNameValue() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    let text = await this.userFirstNameValue.getAttribute('value');
    return text;
  }

  async validateUserLastNameValue() {
    await expect(this.userLastNameValue).toBeVisible({ timeout: 60000 });
    let text = await this.userLastNameValue.getAttribute('value');
    return text;
  }

  async validateBlankCompanyNameValue() {
    await expect(this.companyValue).toBeVisible({ timeout: 60000 });
    let text = await this.companyValue.getAttribute('value');
    return text;
  }

  async validateBlankJobTitleValue() {
    await expect(this.jobTitileValue).toBeVisible({ timeout: 60000 });
    let text = await this.jobTitileValue.getAttribute('value');
    return text;
  }

  async validateUserAddress1Value() {
    await expect(this.userAddress1Value).toBeVisible({ timeout: 60000 });
    let text = await this.userAddress1Value.getAttribute('value');
    return text;
  }

  async validateUserAddress2Value() {
    await expect(this.userAddress2Value).toBeVisible({ timeout: 60000 });
    let text = await this.userAddress2Value.getAttribute('value');
    return text;
  }


  async validateUserCityValue() {
    await expect(this.userCityValue).toBeVisible({ timeout: 60000 });
    let text = await this.userCityValue.getAttribute('value');
    return text;
  }

  async validateUserPostalCodeValue() {
    await expect(this.userPostalCodeValue).toBeVisible({ timeout: 60000 });
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
  // page.locator('#userCountry').selectOption('');


  async unSelecttheCountryValue() {
    await this.userCountry.waitFor({ state: 'visible' });
    await this.userCountry.scrollIntoViewIfNeeded();
    await this.userCountry.selectOption('Choose Country*');

  }

  async clickPlaceOrderButton() {

    await this.placeorder.click();


  }

  async validateProductUnavailableText() {
    try {
      await expect(this.productUnavailableText).toBeVisible({ timeout: 6000 });
      let text = await this.productUnavailableText.textContent();
      return text;
    } catch (error) {
      logger.info(`Element ${this.productUnavailableText} not found or not visible: `, error);
      console.error(`Element ${this.productUnavailableText} not found or not visible: `, error);
    }
  }

  public async enterCorrectPaymentDetails(cardnumb: string, cardexp: string, cvc: string) {
    // Wait for the card number field to be attached to the DOM
    const cardNumberLocator = this.cardNumberFrame.locator(this.cardNumber);
    await cardNumberLocator.waitFor({ state: 'attached', timeout: 60000 });

    // Scroll into view if needed and interact with the card number field
    await cardNumberLocator.focus()
    await cardNumberLocator.scrollIntoViewIfNeeded();
    await cardNumberLocator.click();
    await cardNumberLocator.fill(cardnumb);

    // Wait for the card expiry field to be attached to the DOM
    const cardExpiryLocator = this.cardExpiryFrame.locator(this.cardExpiry);
    await cardExpiryLocator.waitFor({ state: 'attached', timeout: 60000 });

    // Scroll into view if needed and interact with the card expiry field
    await cardExpiryLocator.scrollIntoViewIfNeeded();
    await cardExpiryLocator.click();
    await cardExpiryLocator.fill(cardexp);

    // Wait for the card CVC field to be attached to the DOM
    const cardCvcLocator = this.cardCvcFrame.locator(this.cardCvc);
    await cardCvcLocator.waitFor({ state: 'attached', timeout: 60000 });

    // Scroll into view if needed and interact with the card CVC field
    await cardCvcLocator.scrollIntoViewIfNeeded();
    // await cardCvcLocator.clear();
    await cardCvcLocator.fill(cvc);
  }

  async selectCountrySpecificSubscription() {
    await this.page.waitForTimeout(2000)
    await this.productPB1136RB.click();
    await this.page.waitForTimeout(2000)

  }

  async validateTransactionSuccessfulMsg() {
    await this.transactionSuccessfulMsg.scrollIntoViewIfNeeded();
    await expect(this.transactionSuccessfulMsg).toBeVisible({ timeout: 60000 });
    const text = await this.transactionSuccessfulMsg.innerText();
    console.log('Transaction message text:', text); // Debugging statement
    return text.trim();
  }

  async selectProductPB1134RBUSSpecificSubscription() {
    await this.page.waitForTimeout(2000)
    await this.productPB1134RB.click();
    await this.page.waitForTimeout(2000)
  }

  async selectProductPB1135RBUSSpecificSubscription() {
    await this.page.waitForTimeout(2000)
    await this.productPB1135RB.click();
    await this.page.waitForTimeout(2000)
  }

  async selectProductPB1137RBCASpecificSubscription() {
    await this.page.waitForTimeout(2000)
    await this.productPB1137RB.click();
    await this.page.waitForTimeout(2000)
  }

  async selectProductPB1138RBINTSpecificSubscription() {
    await this.page.waitForTimeout(2000)
    await this.productPB1138RB.click();
    await this.page.waitForTimeout(2000)
  }

  async selectProductPB1139RBINTSpecificSubscription() {
    await this.page.waitForTimeout(2000)
    await this.productPB1139RB.click();
    await this.page.waitForTimeout(2000)
  }

  async selectProductPB1343RBUSSpecificSubscription() {
    await this.page.waitForTimeout(2000)
    await this.productPB1343RB.click();
    await this.page.waitForTimeout(2000)
  }

  async selectProductPB1042RBDonationSpecificSubscription() {
    await this.page.waitForTimeout(2000)
    await this.productPB1042RB.click();
    await this.page.waitForTimeout(2000)
  }

  async selectProductPB1529RB1YearDigitalSpecificSubscription() {
    await this.page.waitForTimeout(2000)
    await this.productPB1529RB.click();
    await this.page.waitForTimeout(2000)
  }

  async selectProductPB1530RB2YearDigitalSpecificSubscription() {
    await this.page.waitForTimeout(2000)
    await this.productPB1530RB.click();
    await this.page.waitForTimeout(2000)
  }
}

