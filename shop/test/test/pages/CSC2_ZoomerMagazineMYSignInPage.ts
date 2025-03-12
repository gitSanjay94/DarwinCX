
import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';




export class CSC2_ZoomerMagazineMYSignInPage {

    page: Page;
    readonly welcomeText: Locator;
    readonly signInWithYourEmailAndPasswordText: Locator;
    readonly emailTF: Locator;
    readonly passwordTF: Locator;
    readonly emailText: Locator;
    readonly passwordText: Locator;
    readonly signInButton: Locator;
    readonly invalidPasswordWarn: Locator;
    readonly invalidEmailWarn: Locator;
    readonly linkMySubscriptionText: Locator;
    readonly cancelButton: Locator;
    readonly getFullName: Locator;
    readonly getEmail: Locator;
    readonly accountNumber: Locator;
    readonly myAccountDetailsText: Locator;
  

    constructor(page: Page) {
        this.page = page;
        this.welcomeText = page.getByText('Welcome!')
        this.signInWithYourEmailAndPasswordText = page.getByText('Sign in with your email and password')
        this.emailTF = page.getByPlaceholder('Email', { exact: true })
        this.emailText = page.locator("//label[text()='Email']")
        this.passwordText = page.locator("//label[text()='Password']")
        this.passwordTF = page.getByPlaceholder('Password')
        this.signInButton = page.getByRole('button', { name: 'Sign In' })
        this.invalidPasswordWarn = page.getByText("That’s not the right password.")
        this.invalidEmailWarn = page.getByText("This email is not associated with an account. Please sign up or choose another login option.")
        this.linkMySubscriptionText = page.getByText('Link My Subscription')
        this.cancelButton = page.getByRole('button', { name: 'Cancel' })
        this.getFullName = page.locator("//div[text()='Full Name']/following-sibling::div")
        this.getEmail = page.locator("//div[text()='Email']/following-sibling::div")
        this.accountNumber = page.getByText('Membership/Account Number:1799745')
        this.myAccountDetailsText = page.getByText('My Account Details')
      
    }

    async validateMyAccountDetailsText() {
        await expect(this.myAccountDetailsText).toBeVisible({ timeout: 60000 });
        await this.myAccountDetailsText.scrollIntoViewIfNeeded();
        let text = await this.myAccountDetailsText.textContent();
        return text;
    }

    async getAccountNumber() {
        await expect(this.accountNumber.first()).toBeVisible({ timeout: 60000 });
        await this.accountNumber.first().scrollIntoViewIfNeeded();
        let text = await this.accountNumber.first().textContent();
        return text;
    }

    async getEmailText() {
        await expect(this.getEmail).toBeVisible({ timeout: 60000 });
        await this.getEmail.scrollIntoViewIfNeeded();
        let text = await this.getEmail.textContent();
        return text;
    }

    async getFullNameText() {
        await expect(this.getFullName).toBeVisible({ timeout: 60000 });
        await this.getFullName.scrollIntoViewIfNeeded();
        let text = await this.getFullName.textContent();
        return text;
    }

    async clickCancelButton() {
        await expect(this.cancelButton).toBeVisible({ timeout: 60000 });
        await this.cancelButton.scrollIntoViewIfNeeded();
        await this.cancelButton.click();
    }

    async validateLinkMySubscriptionText() {
        await expect(this.linkMySubscriptionText).toBeVisible({ timeout: 60000 });
        await this.linkMySubscriptionText.scrollIntoViewIfNeeded();
        let text = await this.linkMySubscriptionText.textContent();
        return text;
    }

    async invalidPasswordWarningMessage() {
        await expect(this.invalidPasswordWarn).toBeVisible({ timeout: 60000 });
        await this.invalidPasswordWarn.scrollIntoViewIfNeeded();
        const warnMsg = await this.invalidPasswordWarn.textContent()
        logger.info(" Invalid password message *************** ", warnMsg)
        if (warnMsg != null && warnMsg != undefined)
            return warnMsg
    }

    async invalidEmailWarningMessage() {
        await expect(this.invalidEmailWarn).toBeVisible({ timeout: 60000 });
        await this.invalidEmailWarn.scrollIntoViewIfNeeded();
        const warnMsg = await this.invalidEmailWarn.textContent()
        logger.info(" Invalid email message *************** ", warnMsg)
        if (warnMsg != null && warnMsg != undefined)
            return warnMsg
    }

    async fillEmailAndPassword(email: string, pwd: string) {
        await expect(this.emailText).toBeVisible({ timeout: 60000 });
        await this.emailText.scrollIntoViewIfNeeded();
        await expect(this.emailTF).toBeVisible({ timeout: 60000 });
        await this.emailTF.scrollIntoViewIfNeeded();
        await this.emailTF.fill(email);
        await expect(this.passwordText).toBeVisible({ timeout: 60000 });
        await this.passwordText.scrollIntoViewIfNeeded();
        await expect(this.passwordTF).toBeVisible({ timeout: 60000 });
        await this.passwordTF.scrollIntoViewIfNeeded();
        await this.passwordTF.fill(pwd);
    }

    async clickSignInButton() {
        await expect(this.signInButton).toBeVisible({ timeout: 60000 });
        await this.signInButton.scrollIntoViewIfNeeded();
        await this.signInButton.click();
    }

    async validateWelcomeText() {
        await expect(this.welcomeText).toBeVisible({ timeout: 60000 });
        await this.welcomeText.scrollIntoViewIfNeeded();
        let text = await this.welcomeText.textContent();
        return text;
    }

    async validateSignInWithYourEmailAndPasswordText() {
        await expect(this.signInWithYourEmailAndPasswordText).toBeVisible({ timeout: 60000 });
        await this.signInWithYourEmailAndPasswordText.scrollIntoViewIfNeeded();
        let text = await this.signInWithYourEmailAndPasswordText.textContent();
        return text;
    }

    
}

