import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';



export class Courage_USOrderBillMePage {
    page: Page;
    readonly courageMagazineSubscriptionOptionsText: Locator;
    readonly USSubscriptionOption: Locator;
    readonly userFirstNameValue: Locator;
    readonly userLastNameValue: Locator;
    readonly companyValue: Locator;
    readonly jobTitileValue: Locator;
    readonly userAddress1Value: Locator;
    readonly userAddress2Value: Locator;
    readonly userPhoneNumber: Locator;
    readonly userEmailValue: Locator;
    readonly billMeLaterInfo: Locator;
    readonly billMeLaterInfoText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.courageMagazineSubscriptionOptionsText = page.getByText('Courage Magazine Subscription Options')
        this.USSubscriptionOption = page.locator("//div[text()='Batch QA US 8/$11.10']/../../preceding-sibling::div/input")

        this.userFirstNameValue = page.locator('//input[@id="userFirstName"]')
        this.userLastNameValue = page.locator('//input[@id="userLastName"]')
        this.companyValue = page.locator('//input[@id="userCompanyName"]')
        this.jobTitileValue = page.locator('//input[@id="userJobTitle"]')
        this.userAddress1Value = page.locator('//input[@id="userAddress"]')
        this.userAddress2Value = page.locator('//input[@id="userAddress2"]')
        this.userPhoneNumber = page.locator('//input[@id="userPhoneNumber"]')
        this.userEmailValue = page.locator('//input[@id="userEmail"]')
        this.billMeLaterInfo = page.locator('#UncontrolledTooltipExample')
        this.billMeLaterInfoText = page.getByText('You will be sent future payment requests for this purchase if choosing Bill Me Later option.')
    }

    async validateCourageMagazineSubscriptionOptionsText() {
        await expect(this.courageMagazineSubscriptionOptionsText).toBeVisible({ timeout: 60000 });
        await this.courageMagazineSubscriptionOptionsText.scrollIntoViewIfNeeded();
        let text = await this.courageMagazineSubscriptionOptionsText.textContent();
        return text;
    }

    async validateUSSubscriptionOption() {
        await expect(this.USSubscriptionOption).toBeVisible({ timeout: 60000 });
        await this.USSubscriptionOption.scrollIntoViewIfNeeded();
        let text = await this.USSubscriptionOption.textContent();
        return text;
    }

    async fillMailingAndBillingAddress() {
        await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
        await this.userFirstNameValue.scrollIntoViewIfNeeded();
        await this.userFirstNameValue.fill(faker.person.firstName());
        await this.userLastNameValue.fill(faker.person.lastName());
        await this.companyValue.fill(faker.company.name());
        await this.jobTitileValue.fill(faker.person.jobTitle());
        await this.userAddress1Value.fill('11 Commerce Blvd')
        await this.page.waitForTimeout(6000);
        await this.page.getByText('11 Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.userAddress2Value.fill('45');
        await this.userPhoneNumber.fill('3456127890');
        await this.userEmailValue.fill(faker.internet.email());
    }

    async clickBillMeLaterInfo() {
        await expect(this.billMeLaterInfo).toBeVisible({ timeout: 60000 });
        await this.billMeLaterInfo.scrollIntoViewIfNeeded();
        await this.billMeLaterInfo.click();
    }

    async validateBillMeLaterInfoText() {
        await expect(this.billMeLaterInfoText).toBeVisible({ timeout: 60000 });
        await this.billMeLaterInfoText.scrollIntoViewIfNeeded();
        let text = await this.billMeLaterInfoText.textContent();
        return text;
    }

}





