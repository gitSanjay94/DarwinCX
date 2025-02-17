import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';



export class CSC_CourageOrderSpecialCharsPage {
    page: Page;
    readonly invalidEmailAddressText: Locator;
    readonly orderNumber1Text: Locator;
    readonly giftsText: Locator;
    readonly giftOrder1Text: Locator;
    readonly userFirstNameTF: Locator;
    readonly userLastNameTF: Locator;
    readonly userCompanyNameTF: Locator;
    readonly userJobTitleTF: Locator;
    readonly userAddressTF: Locator;
    readonly userAddress2TF: Locator;
    readonly userPhoneNumberTF: Locator;
    readonly userEmailTF: Locator;
    readonly userPostalCodeTF: Locator;
    readonly userCityTF: Locator;
    readonly userCountryDD: Locator;
    readonly userProvinceDD: Locator;
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
    readonly billingAddressText: Locator;
    readonly giftRecipientMailingAddressText: Locator;
    readonly mailingAndBillingAddressText: Locator;
    readonly emailAlertText: Locator;
    readonly phoneNumberAlertText: Locator;
    readonly numericCharactersOnlyText: Locator;
    readonly userMobilePhoneNumberTF: Locator;
    readonly recipientLabelMessage1TF: Locator;

    constructor(page: Page) {
        this.page = page;
        this.invalidEmailAddressText = page.locator("//span[text()='Invalid email address']")
        this.orderNumber1Text = page.getByText('Order Number')
        this.giftsText = page.locator("//div[text()='Gifts']")
        this.giftOrder1Text = page.locator("//li[text()='Gift Order 1']")
        this.userPostalCodeTF = page.locator("#userPostalCode")
        this.userCityTF = page.locator("#userCity")
        this.userCountryDD = page.locator('#userCountry')
        this.userProvinceDD = page.locator('#userProvince')
        this.userFirstNameTF = page.locator('#userFirstName')
        this.userLastNameTF = page.locator('#userLastName')
        this.userCompanyNameTF = page.locator('#userCompanyName')
        this.userJobTitleTF = page.locator('#userJobTitle')
        this.userAddressTF = page.locator('#userAddress')
        this.userAddress2TF = page.locator('#userAddress2')
        this.userPhoneNumberTF = page.locator('#userPhoneNumber')
        this.userMobilePhoneNumberTF = page.locator('#userMobilePhoneNumber')
        this.userEmailTF = page.locator('#userEmail')

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
        this.recipientLabelMessage1TF = page.locator('#recipientLabelMessage1')
        this.billingAddressText = page.getByText('Billing Address')
        this.giftRecipientMailingAddressText = page.getByText('Gift Recipient Mailing Address')
        this.mailingAndBillingAddressText = page.getByText('Mailing and Billing Address')
        this.emailAlertText = page.locator("//div[text()='Email']")
        this.phoneNumberAlertText = page.locator("//div[text()='Numeric characters only']")
        this.numericCharactersOnlyText = page.locator("//span[text()='Numeric characters only']")
    }

    async validateInvalidEmailAddressText() {
        await expect(this.invalidEmailAddressText).toBeVisible({ timeout: 60000 });
        await this.invalidEmailAddressText.scrollIntoViewIfNeeded();
        let text = await this.invalidEmailAddressText.textContent();
        return text;
    }

    async validateOrderNumber1Text() {
        await expect(this.orderNumber1Text).toBeVisible({ timeout: 60000 });
        await this.orderNumber1Text.scrollIntoViewIfNeeded();
        let text = await this.orderNumber1Text.textContent();
        return text;
    }

    async validateGiftOrder1Text() {
        await expect(this.giftOrder1Text).toBeVisible({ timeout: 60000 });
        await this.giftOrder1Text.scrollIntoViewIfNeeded();
        let text = await this.giftOrder1Text.textContent();
        return text;
    }

    async validateGiftsText() {
        await expect(this.giftsText).toBeVisible({ timeout: 60000 });
        await this.giftsText.scrollIntoViewIfNeeded();
        let text = await this.giftsText.textContent();
        return text;
    }

    async fillBillingAddressForCA() {
        await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.userFirstNameTF.scrollIntoViewIfNeeded();
        await this.userFirstNameTF.fill('userFirstName' + faker.person.firstName());
        await this.userLastNameTF.fill('userLastName' + faker.person.lastName());
        await this.userCompanyNameTF.fill('userCompanyName' + faker.company.name());
        await this.userJobTitleTF.fill('Doctor');
        await this.userAddressTF.fill('282 Dunview Ave');
        await this.userAddress2TF.fill('45');
        await this.userCountryDD.selectOption('CA');
        await this.page.keyboard.press('Tab');
        await this.userProvinceDD.selectOption('ON');
        await this.userPostalCodeTF.fill('M2N4J5');
        await this.userCityTF.fill('Toronto');
        await this.userPhoneNumberTF.fill('1234567890');
        // await this.userMobilePhoneNumberTF.fill('1234567890');
        await this.userEmailTF.fill(faker.internet.exampleEmail());


    }

     async fillBillAddForCA() {
        await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.userFirstNameTF.scrollIntoViewIfNeeded();
        await this.userFirstNameTF.fill('userFirstName' + faker.person.firstName());
        await this.userLastNameTF.fill('userLastName' + faker.person.lastName());
        await this.userCompanyNameTF.fill('userCompanyName' + faker.company.name());
        await this.userJobTitleTF.fill('Doctor');
        await this.userAddressTF.fill('282 Dunview Ave');
        await this.userAddress2TF.fill('45');
        await this.userCountryDD.selectOption('CA');
        await this.page.keyboard.press('Tab');
        await this.userProvinceDD.selectOption('ON');
        await this.userPostalCodeTF.fill('M2N4J5');
        await this.userCityTF.fill('Toronto');
        await this.userPhoneNumberTF.fill('1234567890');
        await this.userMobilePhoneNumberTF.fill('1234567890');
        await this.userEmailTF.fill(faker.internet.exampleEmail());


    }

    async fillGiftRecipientMailingAddressForCA() {
        await expect(this.recipientFirstName1lTF).toBeVisible({ timeout: 60000 });
        await this.recipientFirstName1lTF.scrollIntoViewIfNeeded();
        await this.recipientFirstName1lTF.fill('recipientFirstName' + faker.person.firstName());
        await this.recipientLastName1TF.fill('recipientLastName' + faker.person.lastName());
        await this.recipientCompanyName1TF.fill('recipientCompanyName' + faker.company.name());
        await this.recipientJobTitle1TF.fill('recipientJobTitle' + faker.name.jobTitle());
        await this.recipientAddress1TF.fill('282 Dunview Ave');
        await this.recipientAddress21TF.fill('45');
        await this.recipientCity1TF.fill('Toronto');
        await this.recipientPostalCode1TF.fill('M2N4J5');
        await this.recipientCountry1DD.selectOption('CA');
        await this.page.keyboard.press('Tab');
        await this.recipientProvince1DD.selectOption('ON');
        await this.recipientPhoneNumber1TF.fill('1234567890');
        await this.recipientEmail1TF.fill(faker.person.firstName() + "*(#$%&'@gmail.com");
        await this.page.keyboard.press('Tab');
        await this.recipientLabelMessage1TF.fill('test');

    }

    async fillGiftRecipientMailAddForCA() {
        await expect(this.recipientFirstName1lTF).toBeVisible({ timeout: 60000 });
        await this.recipientFirstName1lTF.scrollIntoViewIfNeeded();
        await this.recipientFirstName1lTF.fill('recipientFirstName' + faker.person.firstName());
        await this.recipientLastName1TF.fill('recipientLastName' + faker.person.lastName());
        await this.recipientCompanyName1TF.fill('recipientCompanyName' + faker.company.name());
        await this.recipientJobTitle1TF.fill('recipientJobTitle' + faker.name.jobTitle());
        await this.recipientAddress1TF.fill('282 Dunview Ave');
        await this.recipientAddress21TF.fill('45');
        await this.recipientCity1TF.fill('Toronto');
        await this.recipientPostalCode1TF.fill('M2N4J5');
        await this.recipientCountry1DD.selectOption('CA');
        await this.page.keyboard.press('Tab');
        await this.recipientProvince1DD.selectOption('ON');
        await this.recipientPhoneNumber1TF.fill('1234567890');
        await this.recipientEmail1TF.fill(faker.person.firstName() + "*(#$%&'@gmail.com");
        await this.page.keyboard.press('Tab');
        await this.recipientLabelMessage1TF.fill('test');

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

    async validateMailingAndBillingAddressText() {
        await expect(this.mailingAndBillingAddressText).toBeVisible({ timeout: 60000 });
        await this.mailingAndBillingAddressText.scrollIntoViewIfNeeded();
        let text = await this.mailingAndBillingAddressText.textContent();
        return text;
    }

    async fillMailingAndBillingAddressForUSSpecialCharsEmail() {
        await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.userFirstNameTF.scrollIntoViewIfNeeded();
        await this.userFirstNameTF.fill(faker.person.firstName());
        await this.userLastNameTF.fill(faker.person.lastName());
        await this.userCompanyNameTF.fill(faker.company.name());
        await this.userJobTitleTF.fill(faker.name.jobTitle());
        await this.userAddressTF.fill('11 Commerce Blvd');
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.userAddress2TF.fill('45');
        await this.userPhoneNumberTF.fill('1234567890');
        // await this.userMobilePhoneNumberTF.fill('1234567890');
        await this.userEmailTF.fill(faker.person.firstName() + "*(#$%&'@gmail.com");
        await this.page.keyboard.press('Tab');
    }

     async fillMailBillAddressForUSSpecialCharsEmail() {
        await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.userFirstNameTF.scrollIntoViewIfNeeded();
        await this.userFirstNameTF.fill(faker.person.firstName());
        await this.userLastNameTF.fill(faker.person.lastName());
        await this.userCompanyNameTF.fill(faker.company.name());
        await this.userJobTitleTF.fill(faker.name.jobTitle());
        await this.userAddressTF.fill('11 Commerce Blvd');
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.userAddress2TF.fill('45');
        await this.userPhoneNumberTF.fill('1234567890');
        await this.userMobilePhoneNumberTF.fill('1234567890');
        await this.userEmailTF.fill(faker.person.firstName() + "*(#$%&'@gmail.com");
        await this.page.keyboard.press('Tab');
    }

    async fillMailingAndBillingAddressForUSSpecialCharPhone() {
        await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.userFirstNameTF.scrollIntoViewIfNeeded();
        await this.userFirstNameTF.fill(faker.person.firstName());
        await this.userLastNameTF.fill(faker.person.lastName());
        await this.userCompanyNameTF.fill(faker.company.name());
        await this.userJobTitleTF.fill(faker.name.jobTitle());
        await this.userAddressTF.fill('11 Commerce Blvd');
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.userAddress2TF.fill('45');
        await this.userPhoneNumberTF.fill("123#$%&*9')");
        // await this.userMobilePhoneNumberTF.fill("3456127890");
        await this.page.keyboard.press('Tab');
        await this.userEmailTF.fill(faker.internet.email());
    }

     async fillMailAndBillAddressForUSSpecialCharPhone() {
        await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.userFirstNameTF.scrollIntoViewIfNeeded();
        await this.userFirstNameTF.fill(faker.person.firstName());
        await this.userLastNameTF.fill(faker.person.lastName());
        await this.userCompanyNameTF.fill(faker.company.name());
        await this.userJobTitleTF.fill(faker.name.jobTitle());
        await this.userAddressTF.fill('11 Commerce Blvd');
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.userAddress2TF.fill('45');
        await this.userPhoneNumberTF.fill("123#$%&*9')");
        await this.userMobilePhoneNumberTF.fill("3456127890");
        await this.page.keyboard.press('Tab');
        await this.userEmailTF.fill(faker.internet.email());
    }

    async validateEmailAlertText() {
        await expect(this.emailAlertText).toBeVisible({ timeout: 60000 });
        await this.emailAlertText.scrollIntoViewIfNeeded();
        let text = await this.emailAlertText.textContent();
        return text;
    }

    async validatePhoneNumberAlertText() {
        await expect(this.phoneNumberAlertText).toBeVisible({ timeout: 60000 });
        await this.phoneNumberAlertText.scrollIntoViewIfNeeded();
        let text = await this.phoneNumberAlertText.textContent();
        return text;
    }

    async fillValidEmail() {
        await expect(this.userEmailTF).toBeVisible({ timeout: 60000 });
        await this.userEmailTF.scrollIntoViewIfNeeded();
        await this.userEmailTF.clear();
        await this.userEmailTF.fill(faker.internet.email());
    }

    async fillValidPhoneNumber() {
        await expect(this.userPhoneNumberTF).toBeVisible({ timeout: 60000 });
        await this.userPhoneNumberTF.scrollIntoViewIfNeeded();
        await this.userPhoneNumberTF.clear();
        await this.userPhoneNumberTF.fill('1234567890');
    }

    async validateNumericCharactersOnlyText() {
        await expect(this.numericCharactersOnlyText).toBeVisible({ timeout: 60000 });
        await this.numericCharactersOnlyText.scrollIntoViewIfNeeded();
        let text = await this.numericCharactersOnlyText.textContent();
        return text;
    }

}