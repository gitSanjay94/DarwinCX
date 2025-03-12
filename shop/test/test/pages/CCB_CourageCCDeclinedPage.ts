import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';



export class CCB_CourageCCDeclinedPage {
    page: Page;
    readonly yourCardNumberIsInvalidText: Locator;
    readonly userFirstNameTF: Locator;
    readonly userLastNameTF: Locator;
    readonly userCompanyNameTF: Locator;
    readonly userJobTitleTF: Locator;
    readonly userAddressTF: Locator;
    readonly userAddress2TF: Locator;
    readonly userPhoneNumberTF: Locator;
    readonly userEmailTF: Locator;
    readonly yourCardExpiryYearIsInThePastText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.yourCardNumberIsInvalidText = page.getByText('Your card number is invalid.')
        this.userFirstNameTF = page.locator('#userFirstName')
        this.userLastNameTF = page.locator('#userLastName')
        this.userCompanyNameTF = page.locator('#userCompanyName')
        this.userJobTitleTF = page.locator('#userJobTitle')
        this.userAddressTF = page.locator('#userAddress')
        this.userAddress2TF = page.locator('#userAddress2')
        this.userPhoneNumberTF = page.locator('#userPhoneNumber')
        this.userEmailTF = page.locator('#userEmail')
        // this.yourCardExpiryYearIsInThePastText = page.locator('//div[contains(text(),"Your card\'s expiry year is in the past")]');
    //    this.yourCardExpiryYearIsInThePastText = page.locator('//div[contains(text(),"Your card\'s expiration year is in the past.")]');
        // this.yourCardExpiryYearIsInThePastText = page.locator('//div[contains(text(), "Your card\'s") and contains(text(), "year is in the past")]');
        this.yourCardExpiryYearIsInThePastText = page.locator('//div[contains(@class, "alert-danger") and contains(@role, "alert") and contains(., "Your card")]')
    }

    async validateYourCardNumberIsInvalidText() {
        await expect(this.yourCardNumberIsInvalidText).toBeVisible({ timeout: 60000 });
        await this.yourCardNumberIsInvalidText.scrollIntoViewIfNeeded();
        let text = await this.yourCardNumberIsInvalidText.textContent();
        return text;
    }

    async fillMailingAndBillingAddress() {
        await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.userFirstNameTF.scrollIntoViewIfNeeded();
        await this.userFirstNameTF.fill('userFirstName' + faker.person.firstName());
        await this.userLastNameTF.fill('userLastName' + faker.person.lastName());
        await this.userCompanyNameTF.fill('userCompany' + faker.company.name());
        await this.userJobTitleTF.fill('userJobTitle' + faker.person.jobTitle());
        await this.userAddressTF.fill('11 Commerce Blvd');
        await this.page.waitForTimeout(6000);
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.userAddress2TF.fill('45');
        await this.userPhoneNumberTF.fill('3864451111');
        await this.userEmailTF.fill(faker.internet.exampleEmail());
    }

    async validateYourCardExpiryYearIsInThePastText() {
    // Ensure the element is visible with a reasonable timeout
    await expect(this.yourCardExpiryYearIsInThePastText).toBeVisible({ timeout: 120000 });

    // Scroll into view if needed
    await this.yourCardExpiryYearIsInThePastText.scrollIntoViewIfNeeded();

    // Get the text content of the element
    let text = await this.yourCardExpiryYearIsInThePastText.textContent();

    // Trim the text and return it
    return text ? text.trim() : '';
}
}