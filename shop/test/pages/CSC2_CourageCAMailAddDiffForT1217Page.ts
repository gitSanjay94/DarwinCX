import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class CSC2_CourageCAMailAddDiffForT1217Page {
  page: Page;
  readonly mailingFirstNameTF: Locator;
  readonly mailingLastNameTF: Locator;
  readonly mailingCompanyNameTF: Locator;
  readonly mailingJobTitleTF: Locator;
  readonly mailingAddressTF: Locator;
  readonly mailingAddress2TF: Locator;
  readonly mailingCityTF: Locator;
  readonly mailingProvinceDD: Locator;
  readonly mailingPostalCodeTF: Locator;
  readonly mailingCountryDD: Locator;
  readonly mailingPhoneNumberTF: Locator;
  readonly mailingEmailTF: Locator;

  readonly userFirstNameValue: Locator;
  readonly userLastNameValue: Locator;
  readonly companyValue: Locator;
  readonly jobTitileValue: Locator;
  readonly userAddress1Value: Locator;
  readonly userAddress2Value: Locator;
  readonly userCityValue: Locator;
  readonly userPostalCodeValue: Locator;
  readonly userPhoneNumber: Locator;
  readonly userEmailValue: Locator;
  readonly userCountry: Locator;
  readonly userProvince: Locator;
  readonly userMobilePhoneNumberTF: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mailingFirstNameTF = page.locator('#mailingFirstName')
    this.mailingLastNameTF = page.locator('#mailingLastName')
    this.mailingCompanyNameTF = page.locator('#mailingCompanyName')
    this.mailingJobTitleTF = page.locator('#mailingJobTitle')
    this.mailingAddressTF = page.locator('#mailingAddress')
    this.mailingAddress2TF = page.locator('#mailingAddress2')
    this.mailingCityTF = page.locator('#mailingCity')
    this.mailingProvinceDD = page.locator('#mailingProvince')
    this.mailingPostalCodeTF = page.locator('#mailingPostalCode')
    this.mailingCountryDD = page.locator('#mailingCountry')
    this.mailingPhoneNumberTF = page.locator('#mailingPhoneNumber')
    this.mailingEmailTF = page.locator('#mailingEmail')

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
    this.userMobilePhoneNumberTF = page.locator('#userMobilePhoneNumber')

  }

  async fillMailingAddress() {
    await expect(this.mailingFirstNameTF).toBeVisible({ timeout: 60000 });
    await this.mailingFirstNameTF.scrollIntoViewIfNeeded();
    await this.mailingFirstNameTF.fill('mailFirstName' + faker.person.firstName());
    await this.mailingLastNameTF.fill('mailLastName' + faker.person.lastName());
    await this.mailingCompanyNameTF.fill('mailCompanyName' + faker.company.name());
    await this.mailingJobTitleTF.fill('Data Scientist');
    await this.mailingAddressTF.fill('282 Dunview Ave');
    await this.mailingAddress2TF.fill('CourageCA1Gift32charsforT216Page');
    await this.mailingCountryDD.selectOption('CA');
    await this.mailingProvinceDD.selectOption('ON');
    await this.mailingCityTF.fill('Toronto');
    await this.mailingPostalCodeTF.fill('M2N4J5');
    await this.mailingPhoneNumberTF.fill('2345676903');
    await this.mailingEmailTF.fill(faker.internet.exampleEmail());
  }

  async fillBillingAddress() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
    await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
    await this.companyValue.fill('userCompanyName' + faker.company.name());
    await this.jobTitileValue.fill('Automation Engineer');
    await this.userAddress1Value.fill('282 Dunview Ave');
    await this.userAddress2Value.fill('CourageCA1Gift32charsforT216Page');
    await this.userCountry.selectOption('CA');
    await this.userProvince.selectOption('ON');
    await this.userCityValue.fill('Toronto');
    await this.userPostalCodeValue.fill('M2N4J5');
    await this.userPhoneNumber.fill('1234567890');
    // await this.userMobilePhoneNumberTF.fill('1234567890');
    await this.userEmailValue.fill(faker.internet.exampleEmail());
  }


}