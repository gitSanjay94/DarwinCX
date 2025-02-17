import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class Hoffman_USDigitalWithNoUpsellPage {

  page: Page;
  readonly thePerfectGiftForTheDeerHunterText: Locator;
  readonly freeGiftToDonorText: Locator;
  readonly giftOrder1Text: Locator;
  readonly giftOrder2Text: Locator;
  readonly USOfferText: Locator;
  readonly orderSummaryText: Locator;
  readonly userFirstNameValue: Locator;
  readonly userLastNameValue: Locator;
  readonly companyValue: Locator;
  readonly jobTitileValue: Locator;
  readonly userAddress1Value: Locator;
  readonly userAddress2Value: Locator;
  readonly userPhoneNumber: Locator;
  readonly userEmailValue: Locator;
  readonly userCountry: Locator;
  readonly userCityValue: Locator;
  readonly userPostalCodeValue: Locator;
  readonly userProvince: Locator;

  readonly recipientFirstName1lTF: Locator;
  readonly recipientLastName1TF: Locator;
  readonly recipientJobTitle1TF: Locator;
  readonly recipientCompanyName1TF: Locator;
  readonly recipientAddress1TF: Locator;
  readonly recipientAddress21TF: Locator;
  readonly recipientPhoneNumber1TF: Locator;
  readonly recipientEmail1TF: Locator;

  readonly recipientFirstName2lTF: Locator;
  readonly recipientLastName2lTF: Locator;
  readonly recipientCompanyName2lTF: Locator;
  readonly recipientJobTitle2lTF: Locator;
  readonly recipientAddress2TF: Locator;
  readonly recipientAddress22TF: Locator;
  readonly recipientPhoneNumber2TF: Locator;
  readonly recipientEmail2TF: Locator;

  readonly mailingFirstNameTF: Locator;
  readonly mailingLastNameTF: Locator;
  readonly mailingCompanyNameTF: Locator;
  readonly mailingJobTitleTF: Locator;
  readonly mailingAddressTF: Locator;
  readonly mailingAddress2TF: Locator;
  readonly mailingPhoneNumberTF: Locator;
  readonly mailingEmailTF: Locator;

  readonly firstNameIsMissingText: Locator;
  readonly lastNameIsMissingText: Locator;
  readonly address1IsMissingText: Locator;
  readonly cityIsMissingText: Locator;
  readonly selectProvinceText: Locator;
  readonly postalCodeIsMissingText: Locator;
  readonly countryIsMissingText: Locator;
  readonly emailAddressIsMissingText: Locator;
  readonly SubscriptionPreferencesNo: Locator;
  readonly productPB1000: Locator;
  readonly productPB1003: Locator;
  readonly productPB1008: Locator;
  readonly productPB1006: Locator;
   readonly productPB1002: Locator;
  readonly digitalArchiveText: Locator;
  readonly digitalArchiveCheckBox: Locator;
  readonly taxValue: Locator;
  readonly totalAmountBeforeOrder: Locator;
  readonly totalAmountAfterOrder: Locator;
  readonly productPB1004RB: Locator;
  readonly CanadianInternationaOffersToggle: Locator;
  readonly mailingAddressDifferentCB: Locator;


  constructor(page: Page) {
    this.page = page;
    this.thePerfectGiftForTheDeerHunterText = page.getByText('The Perfect Gift for the Deer Hunter');
    this.freeGiftToDonorText = page.getByText('Free Gift To Donor')
    this.giftOrder1Text = page.getByText('Gift Order 1')
    this.giftOrder2Text = page.locator("(//div[text()='Gift Order '])[2]")
    this.USOfferText = page.getByText('United States Offers')
    this.orderSummaryText = page.getByText('Order Summary')

    this.userFirstNameValue = page.locator('//input[@id="userFirstName"]')
    this.userLastNameValue = page.locator('//input[@id="userLastName"]')
    this.companyValue = page.locator('//input[@id="userCompanyName"]')
    this.jobTitileValue = page.locator('//input[@id="userJobTitle"]')
    this.userAddress1Value = page.locator('//input[@id="userAddress"]')
    this.userAddress2Value = page.locator('//input[@id="userAddress2"]')
    this.userPhoneNumber = page.locator('//input[@id="userPhoneNumber"]')
    this.userEmailValue = page.locator('//input[@id="userEmail"]')
    this.userCountry = page.locator('#userCountry')
    this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value=""]')
    this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value=""]')
    this.userProvince = page.locator('select#userProvince')
    this.recipientFirstName1lTF = page.locator('#recipientFirstName1')
    this.recipientLastName1TF = page.locator('#recipientLastName1')
    this.recipientJobTitle1TF = page.locator('#recipientJobTitle1')
    this.recipientCompanyName1TF = page.locator('#recipientCompanyName1')
    this.recipientAddress1TF = page.locator('#recipientAddress1')
    this.recipientAddress21TF = page.locator('#recipientAddress21')
    this.recipientPhoneNumber1TF = page.locator('#recipientPhoneNumber1')
    this.recipientEmail1TF = page.locator('#recipientEmail1')

    this.recipientFirstName2lTF = page.locator('#recipientFirstName2')
    this.recipientLastName2lTF = page.locator('#recipientLastName2')
    this.recipientCompanyName2lTF = page.locator('#recipientCompanyName2')
    this.recipientJobTitle2lTF = page.locator('#recipientJobTitle2')
    this.recipientAddress2TF = page.locator('#recipientAddress2')
    this.recipientAddress22TF = page.locator('#recipientAddress22')
    this.recipientPhoneNumber2TF = page.locator('#recipientPhoneNumber2')
    this.recipientEmail2TF = page.locator('#recipientEmail2')

    this.mailingFirstNameTF = page.locator('#mailingFirstName')
    this.mailingLastNameTF = page.locator('#mailingLastName')
    this.mailingCompanyNameTF = page.locator('#mailingCompanyName')
    this.mailingJobTitleTF = page.locator('#mailingJobTitle')
    this.mailingAddressTF = page.locator('#mailingAddress')
    this.mailingAddress2TF = page.locator('#mailingAddress2')
    this.mailingPhoneNumberTF = page.locator('#mailingPhoneNumber')
    this.mailingEmailTF = page.locator('#mailingEmail')

    this.firstNameIsMissingText = page.getByText('First Name is missing')
    this.lastNameIsMissingText = page.getByText('Last Name is missing')
    this.address1IsMissingText = page.getByText('required').nth(0)
    this.cityIsMissingText = page.getByText('City is missing')
    this.selectProvinceText = page.getByText('Select a Province/State')
    this.postalCodeIsMissingText = page.getByText('Postal code is missing')
    this.countryIsMissingText = page.getByText('Country is missing')
    this.emailAddressIsMissingText = page.getByText('Email address is missing')
    this.SubscriptionPreferencesNo = page.locator("//input[@name='pubspecials_BFS' and @value='0']")
    this.productPB1000 = page.locator("//input[@id='productPB-1000']")
    this.productPB1003 = page.locator("//input[@id='productPB-1003']")
    this.productPB1008 = page.locator("//input[@id='productPB-1008']")
    this.productPB1006 = page.locator("//input[@id='productPB-1006']")
    this.productPB1002 = page.locator("//input[@id='productPB-1002']")
    this.digitalArchiveText = this.page.locator('text="1 Year Digital Archive Access"');
    this.digitalArchiveCheckBox = this.page.locator("//input[@id='offer2']")
    this.taxValue = page.locator('//div[@class="row"]//div[@class="text-right col-4"]/div');
    this.totalAmountBeforeOrder = page.locator("//div[text()='Total']/..")
    this.totalAmountAfterOrder = page.locator("//div[text()='Total Price']/..")
    this.productPB1004RB = page.locator("//input[@id='productPB-1004']")
    this.CanadianInternationaOffersToggle = page.locator("//div[@id='toggler']")
    this.mailingAddressDifferentCB = page.locator('#mailingAddressDifferent')

  }

  async fillMailingAddress() {
    await expect(this.mailingFirstNameTF).toBeVisible({ timeout: 60000 });
    await this.mailingFirstNameTF.scrollIntoViewIfNeeded();
    await this.mailingFirstNameTF.fill('mailingFirstName' + faker.person.firstName());
    await this.mailingLastNameTF.fill('mailingLastName' + faker.person.lastName());
    // await this.mailingCompanyNameTF.fill('mailingCompanyName' + faker.company.name());
    // await this.mailingJobTitleTF.fill('Automation Engineer');
    await this.mailingAddressTF.fill('11 Commerce Blvd');
    await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await this.mailingAddress2TF.fill('45');
    await this.mailingPhoneNumberTF.fill('1234567890');
    await this.mailingEmailTF.fill(faker.internet.exampleEmail());
  }


  async validateThePerfectGiftForTheDeerHunterText() {
    await expect(this.thePerfectGiftForTheDeerHunterText).toBeVisible({ timeout: 60000 });
    await this.thePerfectGiftForTheDeerHunterText.scrollIntoViewIfNeeded();
    let text = await this.thePerfectGiftForTheDeerHunterText.textContent();
    return text;
  }

  async validateGiftOrder1Text() {
    await expect(this.giftOrder1Text).toBeVisible({ timeout: 60000 });
    await this.giftOrder1Text.scrollIntoViewIfNeeded();
    let text = await this.giftOrder1Text.textContent();
    return text;
  }

  async validateGiftOrder2Text() {
    await expect(this.giftOrder2Text).toBeVisible({ timeout: 60000 });
    await this.giftOrder2Text.scrollIntoViewIfNeeded();
    let text = await this.giftOrder2Text.textContent();
    return text;
  }

  async validateFreeGiftToDonorText() {
    await expect(this.freeGiftToDonorText).toBeVisible({ timeout: 60000 });
    await this.freeGiftToDonorText.scrollIntoViewIfNeeded();
    let text = await this.freeGiftToDonorText.textContent();
    return text;
  }

  async validateUSOfferText() {
    await expect(this.USOfferText).toBeVisible({ timeout: 60000 });
    await this.USOfferText.scrollIntoViewIfNeeded();
    let text = await this.USOfferText.textContent();
    return text;
  }

  async selectUSOfferPrintOnly() {
    await expect(this.productPB1000).toBeVisible({ timeout: 60000 });
    await this.productPB1000.scrollIntoViewIfNeeded();
    await this.productPB1000.click();

  }

  async selectINTOfferDigitalOnly() {
    await expect(this.productPB1008).toBeVisible({ timeout: 60000 });
    await this.productPB1008.scrollIntoViewIfNeeded();
    await this.productPB1008.click();

  }

    async selectINTOfferPrintOnly() {
    await expect(this.productPB1006).toBeVisible({ timeout: 60000 });
    await this.productPB1006.scrollIntoViewIfNeeded();
    await this.productPB1006.click();

  }

   async selectUSOfferDigitalOnly() {
    await expect(this.productPB1002).toBeVisible({ timeout: 60000 });
    await this.productPB1002.scrollIntoViewIfNeeded();
    await this.productPB1002.click();

  }
  async validateDigitalArchiveAccessText(): Promise<boolean> {
    try {
      await this.digitalArchiveText.waitFor({ state: 'attached', timeout: 30000 });
      return await this.digitalArchiveText.isVisible();
    } catch (error) {
      console.error('Element not found:', error);
      return false;
    }
  }


  async selectDigitalArchiveAccessCB() {
    try {
      await this.digitalArchiveCheckBox.waitFor({ state: 'attached', timeout: 30000 });
      await this.digitalArchiveCheckBox.click()
    } catch (error) {
      console.error('Element not found:', error);

    }
  }
  async chooseSubscriptionPreferencesNo() {
    await this.SubscriptionPreferencesNo.scrollIntoViewIfNeeded();
    await this.SubscriptionPreferencesNo.click();

  }

  async validateOrderSummaryText() {
    await expect(this.orderSummaryText).toBeVisible({ timeout: 60000 });
    await this.orderSummaryText.scrollIntoViewIfNeeded();
    let text = await this.orderSummaryText.textContent();
    return text;
  }

  async fillMailingBillingAddress() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
    await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
    await this.userAddress1Value.fill('11 Commerce Blvd');
    await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await this.userAddress2Value.fill('45');
    await this.userPhoneNumber.fill('1357930055');
    await this.userEmailValue.fill(faker.internet.exampleEmail());
  }

  async fillGiftRecipientMailingAddress() {
    await expect(this.recipientFirstName1lTF).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName1lTF.scrollIntoViewIfNeeded();
    await this.recipientFirstName1lTF.fill('recipientFirstName' + faker.person.firstName());
    await this.recipientLastName1TF.fill('recipientLastName' + faker.person.lastName());
    await this.recipientCompanyName1TF.fill('recipientCompanyName' + faker.company.name());
    await this.recipientJobTitle1TF.fill('Engineer');
    await this.recipientAddress1TF.fill('11 Commerce Blvd');
    await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await this.recipientAddress21TF.fill('45');
    await this.recipientPhoneNumber1TF.fill('1234567890');
    await this.recipientEmail1TF.fill(faker.internet.exampleEmail());
  }

  async fillGiftRecipientMailingAddress2() {
    await expect(this.recipientFirstName2lTF).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName2lTF.scrollIntoViewIfNeeded();
    await this.recipientFirstName2lTF.fill('recipientFirstName2' + faker.person.firstName());
    await this.recipientLastName2lTF.fill('recipientLastName2' + faker.person.lastName());
    await this.recipientCompanyName2lTF.fill('recipientCompanyName2' + faker.company.name());
    await this.recipientJobTitle2lTF.fill('Engineer2');
    await this.recipientAddress2TF.fill('11 Commerce Blvd');
    await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(6000);
    await this.recipientAddress22TF.fill('45');
    await this.recipientPhoneNumber2TF.fill('1234567890');
    await this.recipientEmail2TF.fill(faker.internet.exampleEmail());
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

  async validateFirstNameMissingText() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await expect(this.firstNameIsMissingText).toBeVisible({ timeout: 60000 });
    let text = await this.firstNameIsMissingText.textContent();
    return text;
  }

  async validateLastNameMissingText() {
    await expect(this.userLastNameValue).toBeVisible({ timeout: 60000 });
    await expect(this.lastNameIsMissingText).toBeVisible({ timeout: 60000 });
    let text = await this.lastNameIsMissingText.textContent();
    return text;
  }

  async validateAddress1MissingText() {
    await expect(this.userAddress1Value).toBeVisible({ timeout: 60000 });
    await expect(this.address1IsMissingText).toBeVisible({ timeout: 60000 });
    let text = await this.address1IsMissingText.textContent();
    return text;
  }

  async validateCityMissingText() {
    await expect(this.userCityValue).toBeVisible({ timeout: 60000 });
    await expect(this.cityIsMissingText).toBeVisible({ timeout: 60000 });
    let text = await this.cityIsMissingText.textContent();
    return text;
  }

  async validateProvinceMissingText() {
    await expect(this.selectProvinceText).toBeVisible({ timeout: 60000 });
    let text = await this.selectProvinceText.textContent();
    return text;
  }

  async validatePostalCodeMissingText() {
    await expect(this.postalCodeIsMissingText).toBeVisible({ timeout: 60000 });
    let text = await this.postalCodeIsMissingText.textContent();
    return text;
  }

  async validateEmailAddressMissingText() {
    await expect(this.emailAddressIsMissingText).toBeVisible({ timeout: 60000 });
    let text = await this.emailAddressIsMissingText.textContent();
    return text;
  }


  async validateTaxValue() {
    await expect(this.taxValue).toBeVisible({ timeout: 60000 });
    let text = await this.taxValue.textContent();
    return text;
  }
  async validateAmountBeforeOrder() {
    try {
      let text = await this.totalAmountBeforeOrder.textContent();
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

  async validateAmountAfterOrder() {
    try {
      let text = await this.totalAmountAfterOrder.textContent();
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

  async fillMailingAndBillingAddressCA() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
    await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
    // await this.companyValue.fill('userCompanyName' + faker.company.name());
    // await this.jobTitileValue.fill('Automation Engineer');
    await this.userAddress1Value.fill('123 Edward St');
    await this.page.waitForTimeout(6000);
    await this.page.getByText('123 Edward Street, Toronto, ON, Canada').click();
    await this.page.waitForTimeout(6000);
    await this.userAddress2Value.fill('45');
    await this.userPhoneNumber.fill('1234567890');
    await this.userEmailValue.fill(faker.internet.exampleEmail());
  }

  async fillMailingAndBillingAddress() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
    await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
    // await this.companyValue.fill('userCompanyName' + faker.company.name());
    // await this.jobTitileValue.fill('Automation Engineer');
    await this.userAddress1Value.fill('450 Sutter St');
    await this.page.waitForTimeout(6000);
    await this.page.getByText('450 Sutter Street, Sutter Street, San Francisco, CA, USA').click();
    await this.page.waitForTimeout(6000);
    await this.userAddress2Value.fill('45');
    await this.userPhoneNumber.fill('1234567890');
    await this.userEmailValue.fill(faker.internet.exampleEmail());
  }

  async fillMailingAndBillingAddressINT() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
    await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
    // await this.companyValue.fill('userCompanyName' + faker.company.name());
    // await this.jobTitileValue.fill('Automation Engineer');
    await this.userAddress1Value.fill('Germay');
    await this.page.waitForTimeout(6000);
    await this.page.getByText('Germay, France').click();
    await this.page.waitForTimeout(6000);
    await this.userAddress2Value.fill('45');
    await this.userPhoneNumber.fill('1234567890');
    await this.userEmailValue.fill(faker.internet.exampleEmail());
  }

  async selectCanadianInternationalOfferToggle() {
    await this.CanadianInternationaOffersToggle.waitFor({ state: 'visible' });
    await this.CanadianInternationaOffersToggle.scrollIntoViewIfNeeded();
    await this.CanadianInternationaOffersToggle.click()

  }

    async checkMailingAddressDifferentCB() {
    await expect(this.mailingAddressDifferentCB).toBeVisible({ timeout: 60000 });
    await this.mailingAddressDifferentCB.check();
  }

  async selectCountrySpecificSubscription() {
    this.page.waitForTimeout(2000)
    await this.productPB1004RB.click();
    this.page.waitForTimeout(2000)

  }

  async selectCANOfferPrintOnly() {
    await expect(this.productPB1003).toBeVisible({ timeout: 60000 });
    await this.productPB1003.scrollIntoViewIfNeeded();
    await this.productPB1003.click();

  }

    async selectCountyBillingDropDown() {
    await expect(this.userCountry).toBeVisible({ timeout: 60000 });
    await this.userCountry.scrollIntoViewIfNeeded();
    await this.userCountry.selectOption('US')
      
  
  }
}