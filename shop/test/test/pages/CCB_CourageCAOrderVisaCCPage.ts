
import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';



export class CCB_CourageCAOrderVisaCCPage {
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
    readonly userCountryDD: Locator;
    readonly userProvinceDD: Locator;
    readonly userCityTF: Locator;
    readonly userPostalCodeTF: Locator;

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
        this.userCountryDD = page.locator('#userCountry')
        this.userProvinceDD = page.locator('select#userProvince')
        this.userCityTF = page.locator('#userCity')
        this.userPostalCodeTF = page.locator('#userPostalCode')
    }

    async fillMailingAndBillingAddress() {
        await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.userFirstNameTF.scrollIntoViewIfNeeded();
        await this.userFirstNameTF.fill('userFirstName' + faker.person.firstName());
        await this.userLastNameTF.fill('userLastName' + faker.person.lastName());
        await this.userCompanyNameTF.fill('userCompany' + faker.company.name());
        await this.userJobTitleTF.fill('userJobtitle' + faker.person.jobTitle());
        await this.userAddressTF.fill('282 Dunview Ave');
        await this.userAddress2TF.fill('45');
        await this.userCountryDD.selectOption('CA');
        await this.userProvinceDD.selectOption('ON');
        await this.userCityTF.fill('Toronto');
        await this.userPostalCodeTF.fill('M2N4J5');
        await this.userPhoneNumberTF.fill('3456127890');
        await this.userEmailTF.fill(faker.internet.email());
    }

    async validateYourCardNumberIsInvalidText() {
        await expect(this.yourCardNumberIsInvalidText).toBeVisible({ timeout: 60000 });
        await this.yourCardNumberIsInvalidText.scrollIntoViewIfNeeded();
        let text = await this.yourCardNumberIsInvalidText.textContent();
        return text;
    }
}
