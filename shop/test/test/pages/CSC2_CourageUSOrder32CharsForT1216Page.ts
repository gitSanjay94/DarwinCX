import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class CSC2_CourageUSOrder32CharsForT1216Page {

    page: Page;
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
    readonly addGiftRecipientButton: Locator;

    readonly recipientFirstName1lTF: Locator;
    readonly recipientLastName1TF: Locator;
    readonly recipientJobTitle1TF: Locator;
    readonly recipientCompanyName1TF: Locator;
    readonly recipientAddress1TF: Locator;
    readonly recipientAddress21TF: Locator;
    readonly recipientPhoneNumber1TF: Locator;
    readonly recipientEmail1TF: Locator;

    readonly mailingFirstNameTF: Locator;
    readonly mailingLastNameTF: Locator;
    readonly mailingCompanyNameTF: Locator;
    readonly mailingJobTitleTF: Locator;
    readonly mailingAddressTF: Locator;
    readonly mailingAddress2TF: Locator;
    readonly mailingPhoneNumberTF: Locator;
    readonly mailingEmailTF: Locator;
    readonly orderNumber2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userFirstNameValue = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value=""]')
        this.userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value=""]')
        this.companyValue = page.locator('//input[@id="userCompanyName" and @name="userCompanyName" and @value=""]')
        this.jobTitileValue = page.locator('//input[@id="userJobTitle" and @name="userJobTitle" and @value=""]')
        this.userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value=""]')
        this.userAddress2Value = page.locator('//input[@id="userAddress2"]')
        this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value=""]')
        this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value=""]')
        this.userPhoneNumber = page.locator('//input[@id="userPhoneNumber"]')
        this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value=""]')
        this.userCountry = page.locator('#userCountry')
        this.userProvince = page.locator('select#userProvince')
        this.addGiftRecipientButton = page.getByRole('button', { name: 'Add Gift Recipient' })

        this.recipientFirstName1lTF = page.locator('#recipientFirstName1')
        this.recipientLastName1TF = page.locator('#recipientLastName1')
        this.recipientJobTitle1TF = page.locator('#recipientJobTitle1')
        this.recipientCompanyName1TF = page.locator('#recipientCompanyName1')
        this.recipientAddress1TF = page.locator('#recipientAddress1')
        this.recipientAddress21TF = page.locator('#recipientAddress21')
        this.recipientPhoneNumber1TF = page.locator('#recipientPhoneNumber1')
        this.recipientEmail1TF = page.locator('#recipientEmail1')

        this.mailingFirstNameTF = page.locator('#mailingFirstName')
        this.mailingLastNameTF = page.locator('#mailingLastName')
        this.mailingCompanyNameTF = page.locator('#mailingCompanyName')
        this.mailingJobTitleTF = page.locator('#mailingJobTitle')
        this.mailingAddressTF = page.locator('#mailingAddress')
        this.mailingAddress2TF = page.locator('#mailingAddress2')
        this.mailingPhoneNumberTF = page.locator('#mailingPhoneNumber')
        this.mailingEmailTF = page.locator('#mailingEmail')
        this.orderNumber2 = page.locator("//span[text()='Order Number']")
    }

    async validateOrderNumber2Text() {
        await expect(this.orderNumber2).toBeVisible({ timeout: 60000 });
        await this.orderNumber2.scrollIntoViewIfNeeded();
        let text = await this.orderNumber2.textContent();
        return text;
    }

    async fillBillingAddress() {
        await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
        await this.userFirstNameValue.scrollIntoViewIfNeeded();
        await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
        await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
        await this.companyValue.fill('userCompanyName' + faker.company.name());
        await this.jobTitileValue.fill('Automation Engineer');
        await this.userAddress1Value.fill('11 Commerce Blvd');
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.userAddress2Value.fill('CSC2_CourageUSOrder32CharsForT1216Page');
        await this.userPhoneNumber.fill('1234567890');
        await this.userEmailValue.fill(faker.internet.exampleEmail());
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

    async validateNumberOfCharInBillingAddress2() {
        await expect(this.userAddress2Value).toBeVisible({ timeout: 60000 });
        await this.userAddress2Value.scrollIntoViewIfNeeded();
        let text = await this.userAddress2Value.getAttribute('value');
        return text;
    }

    async validateNumberOfCharInMaillingAddress2() {
        await expect(this.mailingAddress2TF).toBeVisible({ timeout: 60000 });
        await this.mailingAddress2TF.scrollIntoViewIfNeeded();
        let text = await this.mailingAddress2TF.getAttribute('value');
        return text;
    }

    async validateNumberOfCharInGiftRecepientAddress2() {
        await expect(this.recipientAddress21TF).toBeVisible({ timeout: 60000 });
        await this.recipientAddress21TF.scrollIntoViewIfNeeded();
        let text = await this.recipientAddress21TF.getAttribute('value');
        return text;
    }

    async clickAddGiftRecipientButton() {
        await expect(this.addGiftRecipientButton).toBeVisible({ timeout: 60000 });
        await this.addGiftRecipientButton.scrollIntoViewIfNeeded();
        await this.addGiftRecipientButton.click();
    }

    async fillMailingAddress() {
        await expect(this.mailingFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.mailingFirstNameTF.scrollIntoViewIfNeeded();
        await this.mailingFirstNameTF.fill('mailFirstName' + faker.person.firstName());
        await this.mailingLastNameTF.fill('mailLastName' + faker.person.lastName());
        await this.mailingCompanyNameTF.fill('mailCompanyName' + faker.company.name());
        await this.mailingJobTitleTF.fill('Data Scientist');
        await this.mailingAddressTF.fill('11 Commerce Street')
        await this.page.getByText('11 Commerce Street, New York, NY, USA').click();
        await this.page.waitForTimeout(6000);
        await this.mailingAddress2TF.fill('CSC2_CourageUSOrder32CharsForT1216Page');
        await this.mailingPhoneNumberTF.fill('2345676903');
        await this.mailingEmailTF.fill(faker.internet.exampleEmail());
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
        await this.recipientAddress21TF.fill('CSC2_CourageUSOrder32CharsForT1216Page');
        await this.recipientPhoneNumber1TF.fill('1234567890');
        await this.recipientEmail1TF.fill(faker.internet.exampleEmail());
    }

}