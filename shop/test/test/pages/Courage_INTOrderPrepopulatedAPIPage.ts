import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';



export class Courage_INTOrderPrepopulatedAPIPage {
    page: Page;
    readonly billMeOrderRejected: Locator;
    readonly userFirstNameValue: Locator;
    readonly userLastNameValue: Locator;
    readonly companyValue: Locator;
    readonly jobTitileValue: Locator;
    readonly userAddress2Value: Locator;
    readonly userPhoneNumber: Locator;
    readonly courageMagazineSubscriptionOptionsText: Locator;
    readonly userEmailValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.billMeOrderRejected = page.getByText('Bill me order rejected due to existing bill')
        this.userFirstNameValue = page.locator('//input[@id="userFirstName"]')
        this.userLastNameValue = page.locator('//input[@id="userLastName"]')
        this.companyValue = page.locator('//input[@id="userCompanyName"]')
        this.jobTitileValue = page.locator('//input[@id="userJobTitle"]')
        this.userAddress2Value = page.locator('//input[@id="userAddress2"]')
        this.userPhoneNumber = page.locator('//input[@id="userPhoneNumber"]')
        this.courageMagazineSubscriptionOptionsText = page.getByText('Courage Magazine Subscription Options')
        this.userEmailValue = page.locator('//input[@id="userEmail"]')

    }

    async validateCourageMagazineSubscriptionOptionsText() {
        await expect(this.courageMagazineSubscriptionOptionsText).toBeVisible({ timeout: 60000 });
        await this.courageMagazineSubscriptionOptionsText.scrollIntoViewIfNeeded();
        let text = await this.courageMagazineSubscriptionOptionsText.textContent();
        return text;
    }

    async validateBillMeOrderRejected() {
        await expect(this.billMeOrderRejected).toBeVisible({ timeout: 60000 });
        await this.billMeOrderRejected.scrollIntoViewIfNeeded();
        let text = await this.billMeOrderRejected.textContent();
        return text;
    }

    async fillMailingAndBillingAddress() {
        await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
        await this.userFirstNameValue.scrollIntoViewIfNeeded();
        await this.userFirstNameValue.fill(faker.person.firstName());
        await this.userLastNameValue.fill(faker.person.lastName());
        await this.companyValue.fill(faker.company.name());
        await this.jobTitileValue.fill(faker.person.jobTitle());
        await this.userAddress2Value.fill('45');
        await this.userPhoneNumber.fill('3450127890');
        await this.userEmailValue.fill(faker.internet.email());
    }
}