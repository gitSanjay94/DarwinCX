import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class CSC2_HoffmanUSGiftOrderBOGODonorAndRecipPage {

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


    constructor(page: Page) {
        this.page = page;
        this.thePerfectGiftForTheDeerHunterText = page.getByText('The Perfect Gift for the Deer Hunter');
        this.freeGiftToDonorText = page.getByText('Free Gift To Donor')
        this.giftOrder1Text = page.getByText('Gift Order 1')
        this.giftOrder2Text = page.locator("(//div[text()='Gift Order '])[2]")
        this.USOfferText = page.getByText('US Offer')
        this.orderSummaryText = page.getByText('Order Summary')

        this.userFirstNameValue = page.locator('//input[@id="userFirstName"]')
        this.userLastNameValue = page.locator('//input[@id="userLastName"]')
        this.companyValue = page.locator('//input[@id="userCompanyName"]')
        this.jobTitileValue = page.locator('//input[@id="userJobTitle"]')
        this.userAddress1Value = page.locator('//input[@id="userAddress"]')
        this.userAddress2Value = page.locator('//input[@id="userAddress2"]')
        this.userPhoneNumber = page.locator('//input[@id="userPhoneNumber"]')
        this.userEmailValue = page.locator('//input[@id="userEmail"]')

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
    }

    async fillMailingAddress() {
        await expect(this.mailingFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.mailingFirstNameTF.scrollIntoViewIfNeeded();
        await this.mailingFirstNameTF.fill('mailingFirstName' + faker.person.firstName());
        await this.mailingLastNameTF.fill('mailingLastName' + faker.person.lastName());
        await this.mailingCompanyNameTF.fill('mailingCompanyName' + faker.company.name());
        await this.mailingJobTitleTF.fill('Automation Engineer');
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
        await this.companyValue.fill('userCompanyName' + faker.company.name());
        await this.jobTitileValue.fill('Automation Engineer');
        await this.userAddress1Value.fill('11 Commerce Blvd');
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.userAddress2Value.fill('45');
        await this.userPhoneNumber.fill('1234567890');
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
}