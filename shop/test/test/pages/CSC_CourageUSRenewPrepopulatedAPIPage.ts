import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';

export class CSC_CourageUSRenewPrepopulatedAPIPage {
    page: Page;
    readonly enterYourAccountNumberToRenewText: Locator;
    readonly purchaserInformationText: Locator;
    readonly availableRenewalsText: Locator;
    readonly purchaserName: Locator;
    readonly lastName: Locator;
    readonly purchaserInformationFirstName: Locator;
    readonly purchaserInformationLastName: Locator;
    readonly purchaserInformationAddressLine: Locator;
    readonly purchaserInformationCity: Locator;
    readonly purchaserInformationProvince: Locator;
    readonly purchaserInformationPostalCode: Locator;
    readonly availableRenewalsFirstName1: Locator;
    readonly availableRenewalsLastName1: Locator;
    readonly availableRenewalsAddressLine1: Locator;
    readonly availableRenewalsCity1: Locator;
    readonly availableRenewalsProvince1: Locator;
    readonly availableRenewalsPostalCode1: Locator;
    readonly availableRenewalsProduct1: Locator;
    readonly availableRenewalsExpiryDate1: Locator;
    readonly availableRenewalsFirstName2: Locator;
    readonly availableRenewalsLastName2: Locator;
    readonly availableRenewalsAddressLine2: Locator;
    readonly availableRenewalsCity2: Locator;
    readonly availableRenewalsProvince2: Locator;
    readonly availableRenewalsPostalCode2: Locator;
    readonly availableRenewalsProduct2: Locator;
    readonly availableRenewalsExpiryDate2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.enterYourAccountNumberToRenewText = page.getByText("Enter your account number to renew")
        this.purchaserInformationText = page.getByText("Purchaser Information")
        this.availableRenewalsText = page.getByText("Available Renewals")
        this.purchaserName = page.locator("//input[@name='purchaser' and @value='1841846']")
        this.lastName = page.locator("//input[@name='lastName' and @value='two']")
        this.purchaserInformationFirstName = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::tr/td[text()='test']")
        this.purchaserInformationLastName = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::tr/td[text()='two']")
        this.purchaserInformationAddressLine = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::tr/td[text()='111 Flagler Plaza Dr']")
        this.purchaserInformationCity = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::tr/td[text()='Palm Coast']")
        this.purchaserInformationProvince = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::tr/td[text()='FL']")
        this.purchaserInformationPostalCode = page.locator("//div[text()='Purchaser Information']/parent::div/../following-sibling::div[1]/descendant::tr/td[text()='32137-2137']")

        this.availableRenewalsFirstName1 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[1]/td[text()='test']")
        this.availableRenewalsLastName1 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[1]/td[text()='two']")
        this.availableRenewalsAddressLine1 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[1]/td[text()='111 Flagler Plaza Dr']")
        this.availableRenewalsCity1 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[1]/td[text()='Palm Coast']")
        this.availableRenewalsProvince1 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[1]/td[text()='FL']")
        this.availableRenewalsPostalCode1 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[1]/td[text()='32137-2137']")
        this.availableRenewalsProduct1 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[1]/td[text()='Courage CX Magazine']")
        this.availableRenewalsExpiryDate1 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[1]/td[text()='May']")

        this.availableRenewalsFirstName2 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[2]/td[text()='test']")
        this.availableRenewalsLastName2 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[2]/td[text()='two']")
        this.availableRenewalsAddressLine2 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[2]/td[text()='111 Flagler Plaza Dr']")
        this.availableRenewalsCity2 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[2]/td[text()='Palm Coast']")
        this.availableRenewalsProvince2 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[2]/td[text()='FL']")
        this.availableRenewalsPostalCode2 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[2]/td[text()='32137-2137']")
        this.availableRenewalsProduct2 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[2]/td[text()='Courage CX Membership']")
        this.availableRenewalsExpiryDate2 = page.locator("//div[text()='Available Renewals']/parent::div/../following-sibling::div[1]/descendant::tbody/tr[2]/td[text()='Aug']")
    }

    async validateEnterYourAccountNumberToRenewText() {
        await expect(this.enterYourAccountNumberToRenewText).toBeVisible({ timeout: 60000 });
        await this.enterYourAccountNumberToRenewText.scrollIntoViewIfNeeded();
        let text = await this.enterYourAccountNumberToRenewText.textContent();
        return text;
    }

    async validatePurchaserInformationText() {
        await expect(this.purchaserInformationText).toBeVisible({ timeout: 60000 });
        await this.purchaserInformationText.scrollIntoViewIfNeeded();
        let text = await this.purchaserInformationText.textContent();
        return text;
    }

    async validateAvailableRenewalsText() {
        await expect(this.availableRenewalsText).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsText.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsText.textContent();
        return text;
    }

    async validatePurchaserName() {
        await expect(this.purchaserName).toBeVisible({ timeout: 60000 });
        await this.purchaserName.scrollIntoViewIfNeeded();
        let text = await this.purchaserName.getAttribute('value');
        return text;
    }

    async validateLastName() {
        await expect(this.lastName).toBeVisible({ timeout: 60000 });
        await this.lastName.scrollIntoViewIfNeeded();
        let text = await this.lastName.getAttribute('value');
        return text;
    }

    async validatePurchaserInformationFirstName() {
        await expect(this.purchaserInformationFirstName).toBeVisible({ timeout: 60000 });
        await this.purchaserInformationFirstName.scrollIntoViewIfNeeded();
        let text = await this.purchaserInformationFirstName.textContent();
        return text;
    }

    async validatePurchaserInformationLastName() {
        await expect(this.purchaserInformationLastName).toBeVisible({ timeout: 60000 });
        await this.purchaserInformationLastName.scrollIntoViewIfNeeded();
        let text = await this.purchaserInformationLastName.textContent();
        return text;
    }

    async validatePurchaserInformationAddressLine() {
        await expect(this.purchaserInformationAddressLine).toBeVisible({ timeout: 60000 });
        await this.purchaserInformationAddressLine.scrollIntoViewIfNeeded();
        let text = await this.purchaserInformationAddressLine.textContent();
        return text;
    }

    async validatePurchaserInformationCity() {
        await expect(this.purchaserInformationCity).toBeVisible({ timeout: 60000 });
        await this.purchaserInformationCity.scrollIntoViewIfNeeded();
        let text = await this.purchaserInformationCity.textContent();
        return text;
    }

    async validatePurchaserInformationProvince() {
        await expect(this.purchaserInformationProvince).toBeVisible({ timeout: 60000 });
        await this.purchaserInformationProvince.scrollIntoViewIfNeeded();
        let text = await this.purchaserInformationProvince.textContent();
        return text;
    }

    async validatePurchaserInformationPostalCode() {
        await expect(this.purchaserInformationPostalCode).toBeVisible({ timeout: 60000 });
        await this.purchaserInformationPostalCode.scrollIntoViewIfNeeded();
        let text = await this.purchaserInformationPostalCode.textContent();
        return text;
    }

    async validateAvailableRenewalsFirstName1() {
        await expect(this.availableRenewalsFirstName1).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsFirstName1.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsFirstName1.textContent();
        return text;
    }

    async validateAvailableRenewalsLastName1() {
        await expect(this.availableRenewalsLastName1).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsLastName1.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsLastName1.textContent();
        return text;
    }

    async validateAvailableRenewalsAddressLine1() {
        await expect(this.availableRenewalsAddressLine1).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsAddressLine1.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsAddressLine1.textContent();
        return text;
    }

    async validateAvailableRenewalsCity1() {
        await expect(this.availableRenewalsCity1).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsCity1.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsCity1.textContent();
        return text;
    }

    async validateAvailableRenewalsProvince1() {
        await expect(this.availableRenewalsProvince1).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsProvince1.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsProvince1.textContent();
        return text;
    }

    async validateAvailableRenewalsPostalCode1() {
        await expect(this.availableRenewalsPostalCode1).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsPostalCode1.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsPostalCode1.textContent();
        return text;
    }
    async validateAvailableRenewalsProduct1() {
        await expect(this.availableRenewalsProduct1).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsProduct1.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsProduct1.textContent();
        return text;
    }

    async validateAvailableRenewalsExpiryDate1() {
        await expect(this.availableRenewalsExpiryDate1).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsExpiryDate1.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsExpiryDate1.textContent();
        return text;
    }

    async validateAvailableRenewalsFirstName2() {
        await expect(this.availableRenewalsFirstName2).toBeVisible({ timeout: 60000 })
        await this.availableRenewalsFirstName2.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsFirstName2.textContent();
        return text;
    }
    async validateAvailableRenewalsLastName2() {
        await expect(this.availableRenewalsLastName2).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsLastName2.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsLastName2.textContent();
        return text;
    }

    async validateAvailableRenewalsAddressLine2() {
        await expect(this.availableRenewalsAddressLine2).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsAddressLine2.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsAddressLine2.textContent();
        return text;
    }

    async validateAvailableRenewalsCity2() {
        await expect(this.availableRenewalsCity2).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsCity2.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsCity2.textContent();
        return text;
    }

    async validateAvailableRenewalsProvince2() {
        await expect(this.availableRenewalsProvince2).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsProvince2.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsProvince2.textContent();
        return text;
    }

    async validateAvailableRenewalsPostalCode2() {
        await expect(this.availableRenewalsPostalCode2).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsPostalCode2.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsPostalCode2.textContent();
        return text;
    }

    async validateAvailableRenewalsProduct2() {
        await expect(this.availableRenewalsProduct2).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsProduct2.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsProduct2.textContent();
        return text;
    }

    async validateAvailableRenewalsExpiryDate2() {
        await expect(this.availableRenewalsExpiryDate2).toBeVisible({ timeout: 60000 });
        await this.availableRenewalsExpiryDate2.scrollIntoViewIfNeeded();
        let text = await this.availableRenewalsExpiryDate2.textContent();
        return text;
    }
}