import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class NewParamsInUrlUSNoCityPage {
    page: Page;
    readonly userFirstNameValue: Locator;
    readonly userLastNameValue: Locator;
    readonly userAddress1Value: Locator;
    readonly userAddress2Value: Locator;
    readonly userCityValue: Locator;
    readonly userPostalCodeValue: Locator;
    readonly userEmailValue: Locator;
    readonly userCountry: Locator;
    readonly userProvince: Locator;
    readonly cityMissingText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userFirstNameValue = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value="jonathan"]')
        this.userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value="kok"]')
        this.userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value="11 Commerce Blvd"]')
        this.userAddress2Value = page.locator('//input[@id="userAddress2" and @name="userAddress2" and @value="45"]')
        this.userCityValue = page.locator('//input[@id="userCity"]')
        this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value="32164"]')
        this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value="webtest6@darwin.cx"]')
        this.userCountry = page.locator('select#userCountry');
        this.userProvince = page.locator('select#userProvince')
        this.cityMissingText = page.locator("//span[text()='City is missing']")

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

    async validateUserAddress1Value() {
        await expect(this.userAddress1Value).toBeVisible({ timeout: 60000 });
        await this.userAddress1Value.scrollIntoViewIfNeeded();
        let text = await this.userAddress1Value.getAttribute('value');
        return text;
    }

    async validateUserAddress2Value() {
        await expect(this.userAddress2Value).toBeVisible({ timeout: 60000 });
        await this.userAddress2Value.scrollIntoViewIfNeeded();
        let text = await this.userAddress2Value.getAttribute('value');
        return text;
    }

    async validateUserCityValue() {
        await expect(this.userCityValue).toBeVisible({ timeout: 60000 });
        await this.userCityValue.scrollIntoViewIfNeeded();
        let text = await this.userCityValue.getAttribute('value');
        return text;
    }

    async validateUserPostalCodeValue() {
        await expect(this.userPostalCodeValue).toBeVisible({ timeout: 60000 });
        await this.userPostalCodeValue.scrollIntoViewIfNeeded();
        let text = await this.userPostalCodeValue.getAttribute('value');
        return text;
    }

    async validateUserEmailValue() {
        await expect(this.userEmailValue).toBeVisible({ timeout: 60000 });
        await this.userEmailValue.scrollIntoViewIfNeeded();
        let text = await this.userEmailValue.getAttribute('value');
        return text;
    }

    async validateCityMissingText() {
        await expect(this.userCityValue).toBeVisible({ timeout: 60000 });
        await this.userCityValue.click();
        await this.page.keyboard.press('Tab');
        await expect(this.cityMissingText).toBeVisible({ timeout: 60000 });
        let text = await this.cityMissingText.textContent();
        return text;
    }

    async validateUserCountryValue() {
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

    async validateUserProvinceValue() {
        await this.userProvince.waitFor({ state: 'visible' });
        await this.userProvince.scrollIntoViewIfNeeded();
        const selectedOption = await this.userProvince.locator('option:checked').first();
        let province = null;
        if (selectedOption) {
            province = await selectedOption.innerText();
        } else {
            throw new Error('No province selected or element not found.');
        }
        console.log('Retrieved province:', province);
        return province.trim();
    }
}