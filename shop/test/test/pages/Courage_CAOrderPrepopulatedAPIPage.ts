import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';



export class Courage_CAOrderPrepopulatedAPIPage {
    page: Page;
    readonly courageMagazineSubscriptionOptionsText: Locator;
    readonly companyValue: Locator;
    readonly jobTitileValue: Locator;
    readonly userAddress2Value: Locator;
    readonly userPhoneNumber: Locator;
    readonly userFirstNameValue: Locator;
    readonly userLastNameValue: Locator;
    readonly userAddress1Value: Locator;
    readonly userCityValue: Locator;
    readonly userPostalCodeValue: Locator;
    readonly userEmailValue: Locator;
    readonly userCountry: Locator;
    readonly userProvince: Locator;

    constructor(page: Page) {
        this.page = page;
        this.courageMagazineSubscriptionOptionsText = page.getByText('Courage Magazine Subscription Options')
        this.companyValue = page.locator('//input[@id="userCompanyName"]')
        this.jobTitileValue = page.locator('//input[@id="userJobTitle"]')
        this.userAddress2Value = page.locator('//input[@id="userAddress2"]')
        this.userPhoneNumber = page.locator('//input[@id="userPhoneNumber"]')
        this.userFirstNameValue = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value="Order"]')
        this.userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value="ca"]')
        this.userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value="line 1"]')
        this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value="windsor"]')
        this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value="N9A 9Z9"]')
        this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value="webtest6@palmcoastd.com"]')
        this.userCountry = page.locator('select#userCountry');
        this.userProvince = page.locator('select#userProvince');
    }

    async validateCourageMagazineSubscriptionOptionsText() {
        await expect(this.courageMagazineSubscriptionOptionsText).toBeVisible({ timeout: 60000 });
        await this.courageMagazineSubscriptionOptionsText.scrollIntoViewIfNeeded();
        let text = await this.courageMagazineSubscriptionOptionsText.textContent();
        return text;
    }

    async fillMailingAndBillingAddress() {
        await expect(this.companyValue).toBeVisible({ timeout: 60000 });
        await this.companyValue.scrollIntoViewIfNeeded();
        await this.companyValue.fill(faker.company.name());
        await expect(this.companyValue).toBeVisible({ timeout: 60000 });
        await this.companyValue.scrollIntoViewIfNeeded();
        await this.jobTitileValue.fill(faker.person.jobTitle());
        await expect(this.userAddress2Value).toBeVisible({ timeout: 60000 });
        await this.userAddress2Value.scrollIntoViewIfNeeded();
        await this.userAddress2Value.fill('45');
        await expect(this.userPhoneNumber).toBeVisible({ timeout: 60000 });
        await this.userPhoneNumber.scrollIntoViewIfNeeded();
        await this.userPhoneNumber.fill('3456127890');
    }

    async validateUserFirstNameValue() {
        await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
        await this.userFirstNameValue.scrollIntoViewIfNeeded();
        let text = await this.userFirstNameValue.getAttribute('value');
        return text;
    }

    async validateUserLastNameValue() {
        await expect(this.userLastNameValue).toBeVisible({ timeout: 60000 });
        await this.userLastNameValue.scrollIntoViewIfNeeded();
        let text = await this.userLastNameValue.getAttribute('value');
        return text;
    }

    async validateAddress1Value() {
        await expect(this.userAddress1Value).toBeVisible({ timeout: 60000 });
        await this.userAddress1Value.scrollIntoViewIfNeeded();
        let text = await this.userAddress1Value.getAttribute('value');
        return text;
    }

    async validateCityValue() {
        await expect(this.userCityValue).toBeVisible({ timeout: 60000 });
        await this.userCityValue.scrollIntoViewIfNeeded();
        let text = await this.userCityValue.getAttribute('value');
        return text;
    }

    async validatePostalCodeValue() {
        await expect(this.userPostalCodeValue).toBeVisible({ timeout: 60000 });
        await this.userPostalCodeValue.scrollIntoViewIfNeeded();
        let text = await this.userPostalCodeValue.getAttribute('value');
        return text;
    }

    async validateEmailValue() {
        await expect(this.userEmailValue).toBeVisible({ timeout: 60000 });
        await this.userEmailValue.scrollIntoViewIfNeeded();
        let text = await this.userEmailValue.getAttribute('value');
        return text;
    }

    async validateCountryValue() {
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

    async validateProvinceValue() {
        await this.userCountry.waitFor({ state: 'visible' });
        await this.userCountry.scrollIntoViewIfNeeded();
        const selectedOption = await this.userProvince.locator('option:checked').first();
        let city = null;

        if (selectedOption) {
            city = await selectedOption.innerText();
        } else {
            throw new Error('No country selected or element not found.');
        }
        console.log('Retrieved country:', city);
        return city.trim();
    }

}

