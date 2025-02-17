
import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';



export class Courage_INTOrderINTBillMePage {
    page: Page;
    readonly courageMagazineSubscriptionOptionsText: Locator;
    readonly userFirstNameValue: Locator;
    readonly userLastNameValue: Locator;
    readonly companyValue: Locator;
    readonly jobTitileValue: Locator;
    readonly userAddress1Value: Locator;
    readonly userAddress2Value: Locator;
    readonly userPhoneNumber: Locator;
    readonly userEmailValue: Locator;
    readonly userCountry: Locator;
    readonly userProvince: Locator;
    readonly userCityValue: Locator;
    readonly userPostalCodeValue: Locator;
    readonly productPB1138: Locator;

    constructor(page: Page) {
        this.page = page;
        this.courageMagazineSubscriptionOptionsText = page.getByText('Courage Magazine Subscription Options')

        this.userFirstNameValue = page.locator('//input[@id="userFirstName"]')
        this.userLastNameValue = page.locator('//input[@id="userLastName"]')
        this.companyValue = page.locator('//input[@id="userCompanyName"]')
        this.jobTitileValue = page.locator('//input[@id="userJobTitle"]')
        this.userAddress1Value = page.locator('//input[@id="userAddress"]')
        this.userAddress2Value = page.locator('//input[@id="userAddress2"]')
        this.userPhoneNumber = page.locator('//input[@id="userPhoneNumber"]')
        this.userEmailValue = page.locator('//input[@id="userEmail"]')
        this.userCountry = page.locator('#userCountry')
        this.userProvince = page.locator('#userProvince')
        this.userCityValue = page.locator('#userCity')
        this.userPostalCodeValue = page.locator('#userPostalCode')
        this.productPB1138 = page.locator('#productPB-1138')

    }

    async validateCourageMagazineSubscriptionOptionsText() {
        await expect(this.courageMagazineSubscriptionOptionsText).toBeVisible({ timeout: 60000 });
        await this.courageMagazineSubscriptionOptionsText.scrollIntoViewIfNeeded();
        let text = await this.courageMagazineSubscriptionOptionsText.textContent();
        return text;
    }

    async fillMailingAndBillingAddress() {
        await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
        await this.userFirstNameValue.scrollIntoViewIfNeeded();
        await this.userFirstNameValue.fill(faker.person.firstName());
        await this.userLastNameValue.fill(faker.person.lastName());
        await this.companyValue.fill(faker.company.name());
        await this.jobTitileValue.fill(faker.person.jobTitle());
        await this.userAddress1Value.fill('484 Carrer del Rosselló')
        await this.userAddress2Value.fill('45');
        await this.userCountry.selectOption('ES');
        await this.userProvince.selectOption('GI');
        await this.userCityValue.fill('Barcelona');
        await this.userPostalCodeValue.fill('08025');
        await this.userPhoneNumber.fill('3456127890');
        await this.userEmailValue.fill(faker.internet.email());
    }

    async selectCountrySpecificSubscription() {
        this.page.waitForTimeout(2000)
        await this.productPB1138.click();
        this.page.waitForTimeout(2000)

    }
}

