import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class DirectDebitPage {

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
  readonly userPhoneNumber: Locator;
  readonly recipientFirstName1lTF: Locator;
  readonly recipientLastName1TF: Locator;
  readonly recipientJobTitle1TF: Locator;
  readonly recipientCompanyName1TF: Locator;
  readonly recipientAddress1TF: Locator;
  readonly recipientAddress21TF: Locator;
  readonly recipientCity1TF: Locator;
  readonly recipientProvince1DD: Locator;
  readonly recipientPostalCode1TF: Locator;
  readonly recipientCountry1DD: Locator;
  readonly recipientPhoneNumber1TF: Locator;
  readonly recipientEmail1TF: Locator;
  readonly optionalLabelMessageTF: Locator;
  readonly bacsDirectDebitTab: Locator;
  readonly alertMessage: Locator;





  constructor(page: Page) {
    this.page = page;
    this.userFirstNameValue = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value=""]')
    this.userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value=""]')
    this.companyValue = page.locator('//input[@id="userCompanyName" and @name="userCompanyName" and @value=""]')
    this.jobTitileValue = page.locator('//input[@id="userJobTitle" and @name="userJobTitle" and @value=""]')
    this.userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value=""]')
    this.userAddress2Value = page.locator('//input[@id="userAddress2" and @name="userAddress2" and @value=""]')
    this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value=""]')
    this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value=""]')
    this.userPhoneNumber = page.locator('//input[@id="userPhoneNumber"]')
    this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value=""]')
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
    this.placeorder = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[3]/div/div/div[2]/div/div/div/div/div/button')
    // this.countrymissingalert = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[1]/div[1]/div[2]/div[7]/div[2]/div/span')
    // this.productUnavailableText = page.getByText('Product is unavailable in');
    this.productUnavailableText = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[1]/div[1]/div[2]/div[7]/div[2]/div/span')
    this.cardNumber = page.locator("//input[@id='Field-numberInput']");
    this.cardExpiry = page.locator("//input[@id='Field-expiryInput']");
    this.cardCvc = page.locator("//input[@id='Field-cvcInput']");
    this.cardNumberFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
    this.cardExpiryFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
    this.cardCvcFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
    this.productPB1136RB = page.locator("//input[@id='productPB-1136']")
    this.transactionSuccessfulMsg = page.locator("//*[@id='thankYou']")

    this.recipientFirstName1lTF = page.locator('#recipientFirstName1')
    this.recipientLastName1TF = page.locator('#recipientLastName1')
    this.recipientJobTitle1TF = page.locator('#recipientJobTitle1')
    this.recipientCompanyName1TF = page.locator('#recipientCompanyName1')
    this.recipientAddress1TF = page.locator('#recipientAddress1')
    this.recipientAddress21TF = page.locator('#recipientAddress21')
    this.recipientCity1TF = page.locator('#recipientCity1')
    this.recipientProvince1DD = page.locator('#recipientProvince1')
    this.recipientPostalCode1TF = page.locator('#recipientPostalCode1')
    this.recipientCountry1DD = page.locator('#recipientCountry1')
    this.recipientPhoneNumber1TF = page.locator('#recipientPhoneNumber1')
    this.recipientEmail1TF = page.locator('#recipientEmail1')
    this.optionalLabelMessageTF = page.locator('#recipientLabelMessage1');
    this.bacsDirectDebitTab = page.locator("//button[@id='bacs_debit-tab']//div[@class='p-TabIconContainer']//*[name()='svg']");
 this.alertMessage = page.locator('div.alert.alert-danger.fade.show')

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
async getErrorMessage(){
    // Wait for the error message to appear and extract the text
    await this.alertMessage.waitFor({ state: 'visible' });
    return await this.alertMessage.textContent();
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


  async clickBacsDirectDebitTab() {
    try {
      // Step 1: Wait for 'Payment Method' text and click on it
      const iframeSelector = 'iframe[title="Secure payment input frame"]';
      const stripeIFrame = this.page.frameLocator(iframeSelector);
      await this.page.waitForSelector(iframeSelector, { timeout: 15000 });
      const bacsDebitButton = stripeIFrame.locator('[role="tab"][value="bacs_debit"]');

      await expect(bacsDebitButton).toBeVisible({ timeout: 5000 });
      await bacsDebitButton.click();
      console.log('Bacs Direct Debit button is visible.');


    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to interact with the Bacs Direct Debit form');
    }
  }




  async fillDirectDebitEmailaddress() {
    const iframeSelector = 'iframe[title="Secure payment input frame"]';
    const stripeIFrame = this.page.frameLocator(iframeSelector);

    const emailInput = stripeIFrame.locator('input[name="email"]');
     await emailInput.scrollIntoViewIfNeeded();
    await emailInput.focus();
  
    await emailInput.fill(faker.internet.exampleEmail());



  }


async fillDirectDebitSortCode(sortCode: string) {
  const iframeSelector = 'iframe[title="Secure payment input frame"]';
  const stripeIFrame = this.page.frameLocator(iframeSelector);

  const sortCodeInput = stripeIFrame.locator('input[name="sortCode"]');

   await sortCodeInput.scrollIntoViewIfNeeded();
    await sortCodeInput.focus();
  await sortCodeInput.click();
  await sortCodeInput.fill(sortCode);  // Corrected line
}


async fillDirectDebitAccountNumber(Accountnumber: string) {
    const iframeSelector = 'iframe[title="Secure payment input frame"]';
    const stripeIFrame = this.page.frameLocator(iframeSelector);

    // Locate the Account Number input field
    const accountNumberInput = stripeIFrame.locator('input[name="accountNumber"]');

    // Fill the Account Number input with the dynamic value (not the string 'Accountnumber')
    await accountNumberInput.fill(Accountnumber);  // This will correctly fill with the value of Accountnumber
}


  async fillDirectDebitFullNameInput() {
    const iframeSelector = 'iframe[title="Secure payment input frame"]';
    const stripeIFrame = this.page.frameLocator(iframeSelector);
    const fullNameInput = stripeIFrame.locator('input[name="name"]');
     await fullNameInput.scrollIntoViewIfNeeded();
    await fullNameInput.focus();
    await fullNameInput.fill('John Doe');
    await this.page.waitForTimeout(10000);




  }

  async selectDirectDebitCheckbox() {

    const iframeSelector = 'iframe[title="Secure payment input frame"]';
    const stripeIFrame = this.page.frameLocator(iframeSelector);
    const DirectDebitCheckbox = stripeIFrame.locator('input[name="termsConfirmation"]');
     await DirectDebitCheckbox.scrollIntoViewIfNeeded();
     await DirectDebitCheckbox.focus();
    await DirectDebitCheckbox.click();


  }

  async clickDirectDebitPlaceOrderButton() {
// const iframeSelector = 'iframe[title="Secure payment input frame"]';
//     const stripeIFrame = this.page.frameLocator(iframeSelector);

    const submitButton = this.page.locator("//button[text()='Place Order']");
         await submitButton.click();
   
  }


 async clickDirectDebitConfirButton() {

  const mandateIframe = this.page.frameLocator('iframe[src*="bacs-mandate-confirmation"]');
  const confirmButton = mandateIframe.locator('button[data-testid="hosted-payment-submit-button"]:has-text("Confirm")');

// Wait for the button to be visible and click it
await expect(confirmButton).toBeVisible({timeout:10000});
await confirmButton.click();
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
    this.page.waitForTimeout(2000)
    await this.productPB1136RB.click();
    this.page.waitForTimeout(2000)

  }

  async validateTransactionSuccessfulMsg() {
    await this.transactionSuccessfulMsg.scrollIntoViewIfNeeded();
    await expect(this.transactionSuccessfulMsg).toBeVisible({ timeout: 60000 });
    const text = await this.transactionSuccessfulMsg.innerText();
    console.log('Transaction message text:', text); // Debugging statement
    return text.trim();
  }

  async fillMailingAndBillingAddress() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
    await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
    await this.companyValue.fill('userCompanyName' + faker.company.name());
    await this.jobTitileValue.fill('Automation Engineer');
    await this.userAddress1Value.fill('11 Commerce Blvd');
    await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await this.userAddress2Value.fill('CourageCA1Gift32charsforT216Page');
    await this.userPhoneNumber.fill('1234567890');
    await this.userEmailValue.fill(faker.internet.exampleEmail());
  }

  async fillMailingAndBillingAddressCA() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
    await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
    // await this.companyValue.fill('userCompanyName' + faker.company.name());
    // await this.jobTitileValue.fill('Automation Engineer');
    await this.userAddress1Value.fill('49 Cafe');
    await this.page.waitForTimeout(6000);
    await this.page.getByText('49 Cafe, Marchmont Street, London, UK').click();
    await this.userAddress2Value.fill('CourageCA1Gift32charsforT216Page');
    // await this.userCountry.selectOption('CA');
    // await this.userProvince.selectOption('ON');
    // await this.userCityValue.fill('Toronto');
    // await this.userPostalCodeValue.fill('M2N4J5');
    await this.userPhoneNumber.fill('1234567890');
    await this.userEmailValue.fill(faker.internet.exampleEmail());
    await this.page.waitForTimeout(6000);
    // await this.userEmailValue.click();
  }
  async fillGiftRecipientMailingAddressCA() {
    await expect(this.recipientFirstName1lTF).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName1lTF.scrollIntoViewIfNeeded();
    await this.recipientFirstName1lTF.fill('recipientFirstName' + faker.person.firstName());
    await this.recipientLastName1TF.fill('recipientLastName' + faker.person.lastName());
    await this.recipientCompanyName1TF.fill('recipientCompanyName' + faker.company.name());
    await this.recipientJobTitle1TF.fill('Engineer');
    await this.recipientAddress1TF.fill('12 York St');
    await this.page.getByText('12 York Street, Toronto, ON, Canada').click();
    await this.page.waitForTimeout(6000);
    await this.recipientAddress21TF.fill('45');
    await this.recipientPhoneNumber1TF.fill('1234567890');
    await this.recipientEmail1TF.fill(faker.internet.exampleEmail());
  }
}

