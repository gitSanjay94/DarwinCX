
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';
import { expect, FrameLocator, type Locator, type Page } from '@playwright/test';


export class CSC_CourageNoneSubDonorAnd4GiftsPage {
  page: Page;
  readonly userFirstNameTF: Locator;
  readonly userLastNameTF: Locator;
  readonly userCompanyNameTF: Locator;
  readonly userJobTitleTF: Locator;
  readonly userAddressTF: Locator;
  readonly userAddress2TF: Locator;
  readonly userCityTF: Locator;
  readonly userPhoneNumberTF: Locator;
  readonly userEmailTF: Locator;
  readonly userPostalCodeTF: Locator;
  readonly userProvinceDD: Locator;
  readonly userCountryDD: Locator;

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
  readonly isGiftCB: Locator;

  readonly mailingBillingAddressText: Locator;
  readonly addGiftRecipientButton: Locator;
  readonly creditCardRB: Locator;
  readonly payPalRB: Locator;
  readonly billMeLaterRB: Locator;
  readonly placeOrderButton: Locator;
  readonly removeButton: Locator;
  readonly cardNumberTF: Locator;
  readonly monthTF: Locator;
  readonly cvvTF: Locator;
  readonly mailingAddressDifferentCB: Locator;
  readonly autoRenewThisGiftSubscriptionCB: Locator;

  readonly recipientFirstName2TF: Locator;
  readonly recipientLastName2TF: Locator;
  readonly recipientCompanyName2TF: Locator;
  readonly recipientJobTitle2TF: Locator;
  readonly recipientAddress2TF: Locator;
  readonly recipientAddress22TF: Locator;
  readonly recipientCity2TF: Locator;
  readonly recipientPostalCode2TF: Locator;
  readonly recipientPhoneNumber2TF: Locator;
  readonly recipientEmail2TF: Locator;
  readonly recipientProvince2DD: Locator;
  readonly recipientCountry2DD: Locator;




  constructor(page: Page) {
    this.page = page;
    this.userFirstNameTF = page.locator('#userFirstName')
    this.userLastNameTF = page.locator('#userLastName')
    this.userCompanyNameTF = page.locator('#userCompanyName')
    this.userJobTitleTF = page.locator('#userJobTitle')
    this.userAddressTF = page.locator('#userAddress')
    this.userAddress2TF = page.locator('#userAddress2')
    this.userCityTF = page.locator('#userCity')
    this.userPhoneNumberTF = page.locator('#userPhoneNumber')
    this.userEmailTF = page.locator('#userEmail')
    this.userPostalCodeTF = page.locator('#userPostalCode')
    this.userProvinceDD = page.locator("#userProvince")
    this.userCountryDD = page.locator("#userCountry")

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
    this.optionalLabelMessageTF = page.locator('#recipientLabelMessage1')

    this.recipientFirstName2TF = page.locator('#recipientFirstName2')
    this.recipientLastName2TF = page.locator('#recipientLastName2')
    this.recipientCompanyName2TF = page.locator('#recipientCompanyName2')
    this.recipientJobTitle2TF = page.locator('#recipientJobTitle2')
    this.recipientAddress2TF = page.locator('#recipientAddress2')
    this.recipientAddress22TF = page.locator('#recipientAddress22')
    this.recipientCity2TF = page.locator('#recipientCity2')
    this.recipientPostalCode2TF = page.locator('#recipientPostalCode2')
    this.recipientPhoneNumber2TF = page.locator('#recipientPhoneNumber2')
    this.recipientEmail2TF = page.locator('#recipientEmail2')
    this.recipientProvince2DD = page.locator('#recipientProvince2')
    this.recipientCountry2DD = page.locator('#recipientCountry2')


    this.isGiftCB = page.locator('#isGift')
    this.mailingBillingAddressText = page.getByText('Mailing and Billing Address')
    this.mailingAddressDifferentCB = page.locator('#mailingAddressDifferent')
    this.removeButton = page.getByRole('button', { name: 'Remove' })
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
    this.addGiftRecipientButton = page.getByRole('button', { name: 'Add Gift Recipient' })
    this.cardNumberTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('Card number')
    this.monthTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('MM / YY')
    this.cvvTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('CVC')
    this.creditCardRB = page.getByLabel('Credit Card')
    this.payPalRB = page.getByLabel('PayPal')
    this.billMeLaterRB = page.getByLabel('Bill Me Later')
    this.autoRenewThisGiftSubscriptionCB = page.locator("#recipientAutoRenewOption1")



  }

  async fillMailingAndBillingAddress() {
    await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
    await this.userFirstNameTF.scrollIntoViewIfNeeded();
    await this.userFirstNameTF.fill('userFirstName' + faker.person.firstName());
    await this.userLastNameTF.fill('userLastName' + faker.person.lastName());
    await this.userCompanyNameTF.fill('userCompanyName' + faker.company.name());
    await this.userJobTitleTF.fill('userJobTitle' + faker.name.jobTitle());
    await this.userAddressTF.fill('11 Commerce Blvd');
    await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(15000);
    await this.userAddress2TF.fill('45');
    await this.userPhoneNumberTF.fill('1234567890');
    await this.userEmailTF.fill(faker.internet.exampleEmail());


  }

  async fillGiftRecipientMailingAddress() {
    await expect(this.recipientFirstName1lTF).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName1lTF.scrollIntoViewIfNeeded();
    await this.recipientFirstName1lTF.fill('recipientFirstName' + faker.person.firstName());
    await this.recipientLastName1TF.fill('recipientLastName' + faker.person.lastName());
    await this.recipientCompanyName1TF.fill('recipientCompanyName' + faker.company.name());
    await this.recipientJobTitle1TF.fill('recipientJobTitle' + faker.name.jobTitle());
    await this.recipientAddress1TF.fill('11 Commerce Blvd');
    await this.page.getByText('11 Commerce Blvd, Palm Coast, FL, USA').click();
    await this.page.waitForTimeout(15000);
    await this.recipientAddress21TF.fill('45');
    await this.recipientPhoneNumber1TF.fill('1234567890');
    await this.recipientEmail1TF.fill(faker.internet.exampleEmail());

    await this.optionalLabelMessageTF.fill('message' + faker.number.int({ min: 1, max: 100 }).toString());
     await this.page.waitForTimeout(5000);

   

  }

  async fillGiftRecipientMailingAddress2() {
    await expect(this.recipientFirstName2TF).toBeVisible({ timeout: 60000 });
    await this.recipientFirstName2TF.scrollIntoViewIfNeeded();
    await this.recipientFirstName2TF.fill('recipient2FirstName' + faker.person.firstName());
    await this.recipientLastName2TF.fill('recipient2LastName' + faker.person.lastName());
    await this.recipientCompanyName2TF.fill('recipient2CompanyName' + faker.company.name());
    await this.recipientJobTitle2TF.fill('recipient2JobTitle' + faker.name.jobTitle());
    await this.recipientAddress2TF.fill('11 Commerce Street')
    await this.page.getByText('11 Commerce Street, New York, NY, USA').click();
    await this.page.waitForTimeout(15000);
    await this.recipientAddress22TF.fill('45');
    await this.recipientPhoneNumber2TF.fill('3456798450');
    await this.recipientEmail2TF.fill(faker.internet.exampleEmail());
  }

  async checkCreditCardRB() {
    await expect(this.creditCardRB).toBeVisible({ timeout: 60000 });
    await this.creditCardRB.scrollIntoViewIfNeeded();
    await this.creditCardRB.check();
  }

  async clickPlaceOrderButton() {
    await expect(this.placeOrderButton).toBeVisible({ timeout: 60000 });
    await this.placeOrderButton.scrollIntoViewIfNeeded();
await this.placeOrderButton.click();
   await this.page.waitForTimeout(5000);
  }

  async checkautoRenewThisGiftSubscriptionCB() {
    await expect(this.autoRenewThisGiftSubscriptionCB).toBeVisible({ timeout: 60000 });
    await this.autoRenewThisGiftSubscriptionCB.check();
  }



}
   



 

 






