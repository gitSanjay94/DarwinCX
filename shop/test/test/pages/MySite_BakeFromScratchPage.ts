import { expect, FrameLocator, Locator, type Page, BrowserContext } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class MySite_BakeFromScratchPage {

  page: Page;
  readonly welcomeToYourBakeFromScratchAccountText: Locator;
  readonly myBakeFromScratchSubscriptionText: Locator;
  readonly bakeFromScratchText: Locator;
  readonly status: Locator;
  readonly expirationIssue: Locator;
  readonly accountID: Locator;
  readonly fullName: Locator;
  readonly itemVictoria: Locator;
  readonly myDetails: Locator;
  readonly myVictoriaSubscriptionText: Locator;
  readonly email: Locator;
  readonly signInButton: Locator;
  readonly signUpText: Locator;
  readonly needAnAccountText: Locator;
  readonly signUpAndCreateANewAccountText: Locator;
  readonly retypeEmailTF: Locator;
  readonly signUpButton: Locator;
  readonly anAccountWithTheGivenEmailAlreadyExistsText: Locator;
  readonly emailTF: Locator;
  readonly emailText: Locator;
  readonly passwordText: Locator;
  readonly passwordTF: Locator;
  readonly retypeEmailText: Locator;
  readonly thankYouForSigningUpToManageYourSubscriptionText: Locator;
  readonly purchaseNowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeToYourBakeFromScratchAccountText = page.getByText('Welcome to your Bake from Scratch account.')
    this.myBakeFromScratchSubscriptionText = page.getByText('My Bake from Scratch')
    this.bakeFromScratchText = page.getByText('Bake from Scratch', { exact: true })
    this.status = page.locator("//div[text()='Status']/parent::div").first()
    this.expirationIssue = page.locator("//div[text()='Expiration Issue:']/parent::div").first()
    this.accountID = page.locator("//div[text()='Account ID:']/parent::div").first()
    this.fullName = page.locator("//div[text()='Full Name']/parent::div")
    this.email = page.locator("//div[text()='Email']/parent::div")
    this.itemVictoria = page.getByText('Victoria')
    this.myDetails = page.getByText('My Details')
    this.myVictoriaSubscriptionText = page.getByText('My Victoria Subscription')
    this.signInButton = page.getByRole('button', { name: 'Sign In' })
    this.signUpText = page.getByText('Sign Up')
    this.needAnAccountText = page.getByText('Need an account?')
    this.signUpAndCreateANewAccountText = page.getByRole('heading', { name: 'Sign up and create a new' })
    this.retypeEmailTF = page.getByPlaceholder('Retype Email')
    this.signUpButton = page.getByRole('button', { name: 'Sign Up' })
    this.anAccountWithTheGivenEmailAlreadyExistsText = page.getByText('An account with the given')
    this.emailTF = page.getByPlaceholder('Email', { exact: true })
    this.emailText = page.locator("//label[text()='Email']")
    this.retypeEmailText = page.locator("//label[text()='Retype Email']")
    this.passwordText = page.locator("//label[text()='Password']")
    this.passwordTF = page.getByPlaceholder('Password')
    this.thankYouForSigningUpToManageYourSubscriptionText = page.getByText('Thank you for signing up to manage your subscription(s).')
    this.purchaseNowButton = page.getByRole('button', { name: 'Purchase Now' })
  }

  async validateWelcomeToYourBakeFromScratchAccountText() {
    await expect(this.welcomeToYourBakeFromScratchAccountText).toBeVisible({ timeout: 60000 });
    await this.welcomeToYourBakeFromScratchAccountText.scrollIntoViewIfNeeded();
    let text = await this.welcomeToYourBakeFromScratchAccountText.textContent();
    return text;
  }

  async validateMyBakeFromScratchSubscriptionText() {
    await expect(this.myBakeFromScratchSubscriptionText).toBeVisible({ timeout: 60000 });
    await this.myBakeFromScratchSubscriptionText.scrollIntoViewIfNeeded();
    let text = await this.myBakeFromScratchSubscriptionText.textContent();
    return text;
  }

  async validateBakeFromScratchText() {
    await expect(this.bakeFromScratchText).toBeVisible({ timeout: 60000 });
    await this.bakeFromScratchText.scrollIntoViewIfNeeded();
    let text = await this.bakeFromScratchText.textContent();
    return text;
  }

  async getStatus() {
    await expect(this.status).toBeVisible({ timeout: 60000 });
    await this.status.scrollIntoViewIfNeeded();
    let text = await this.status.textContent();
    return text;
  }

  async getExpirationIssue() {
    await expect(this.expirationIssue).toBeVisible({ timeout: 60000 });
    await this.expirationIssue.scrollIntoViewIfNeeded();
    let text = await this.expirationIssue.textContent();
    return text;
  }

  async getAccountID() {
    await expect(this.accountID).toBeVisible({ timeout: 60000 });
    await this.accountID.scrollIntoViewIfNeeded();
    let text = await this.accountID.textContent();
    return text;
  }

  async getFullName() {
    await expect(this.fullName).toBeVisible({ timeout: 60000 });
    await this.fullName.scrollIntoViewIfNeeded();
    let text = await this.fullName.textContent();
    return text;
  }

  async getEmail() {
    await expect(this.email).toBeVisible({ timeout: 60000 });
    await this.email.scrollIntoViewIfNeeded();
    let text = await this.email.textContent();
    return text;
  }

  async clickItemVictoria() {
    await expect(this.itemVictoria).toBeVisible({ timeout: 60000 });
    await this.itemVictoria.scrollIntoViewIfNeeded();
    await this.itemVictoria.click();
  }

  async validateMyDetailsText() {
    await expect(this.myDetails).toBeVisible({ timeout: 60000 });
    await this.myDetails.scrollIntoViewIfNeeded();
    let text = await this.myDetails.textContent();
    return text;
  }

  async validateMyVictoriaSubscriptionText() {
    await expect(this.myVictoriaSubscriptionText).toBeVisible({ timeout: 60000 });
    await this.myVictoriaSubscriptionText.scrollIntoViewIfNeeded();
    let text = await this.myVictoriaSubscriptionText.textContent();
    return text;
  }

  async clickSignInButton() {
    await this.page.waitForTimeout(8000);
    await expect(this.signInButton).toBeVisible({ timeout: 60000 });
    await this.signInButton.scrollIntoViewIfNeeded();
    await this.signInButton.click();
  }

  async clickSignUp() {
    await this.page.waitForTimeout(8000);
    await expect(this.signUpText).toBeVisible({ timeout: 60000 });
    await this.signUpText.scrollIntoViewIfNeeded();
    await this.signUpText.click();
  }

  async validateNeedAnAccountText() {
    await expect(this.needAnAccountText).toBeVisible({ timeout: 60000 });
    await this.needAnAccountText.scrollIntoViewIfNeeded();
    let text = await this.needAnAccountText.textContent();
    return text;
  }

  async validateSignUpAndCreateANewAccountText() {
    await expect(this.signUpAndCreateANewAccountText).toBeVisible({ timeout: 60000 });
    await this.signUpAndCreateANewAccountText.scrollIntoViewIfNeeded();
    let text = await this.signUpAndCreateANewAccountText.textContent();
    return text;
  }

  async fillRetypeEmailTF(email: string) {
    await expect(this.retypeEmailTF).toBeVisible({ timeout: 60000 });
    await this.retypeEmailTF.scrollIntoViewIfNeeded();
    await this.retypeEmailTF.fill(email);
  }

  async clickSignUpButton() {
    await expect(this.signUpButton).toBeVisible({ timeout: 60000 });
    await this.signUpButton.scrollIntoViewIfNeeded();
    await this.signUpButton.click();
  }

  async validateAnAccountWithTheGivenEmailAlreadyExistsText() {
    await expect(this.anAccountWithTheGivenEmailAlreadyExistsText).toBeVisible({ timeout: 60000 });
    await this.anAccountWithTheGivenEmailAlreadyExistsText.scrollIntoViewIfNeeded();
    let text = await this.anAccountWithTheGivenEmailAlreadyExistsText.textContent();
    return text;
  }

  async fillEmailAndPassword() {
    await expect(this.emailText).toBeVisible({ timeout: 60000 });
    await this.emailText.scrollIntoViewIfNeeded();
    await expect(this.emailTF).toBeVisible({ timeout: 60000 });
    await this.emailTF.scrollIntoViewIfNeeded();
    await this.emailTF.fill(faker.internet.email());
    let email = await this.emailTF.inputValue();
    await expect(this.retypeEmailText).toBeVisible({ timeout: 60000 });
    await this.retypeEmailText.scrollIntoViewIfNeeded();
    await expect(this.retypeEmailTF).toBeVisible({ timeout: 60000 });
    await this.retypeEmailTF.scrollIntoViewIfNeeded();
    await this.retypeEmailTF.fill(email)
    await expect(this.passwordText).toBeVisible({ timeout: 60000 });
    await this.passwordText.scrollIntoViewIfNeeded();
    await expect(this.passwordTF).toBeVisible({ timeout: 60000 });
    await this.passwordTF.scrollIntoViewIfNeeded();
    await this.passwordTF.fill('Test1234!');
  }

  async validateThankYouForSigningUpToManageYourSubscriptionText() {
    await expect(this.thankYouForSigningUpToManageYourSubscriptionText).toBeVisible({ timeout: 60000 });
    await this.thankYouForSigningUpToManageYourSubscriptionText.scrollIntoViewIfNeeded();
    let text = await this.thankYouForSigningUpToManageYourSubscriptionText.textContent();
    return text;
  }

  async clickPurchaseNowButton() {
    await expect(this.purchaseNowButton).toBeVisible({ timeout: 60000 });
    await this.purchaseNowButton.scrollIntoViewIfNeeded();
    await this.purchaseNowButton.click();
  }

  async getCurrentPageUrl() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      await this.purchaseNowButton.click()
    ]);
    await this.page.waitForTimeout(8000);
    const newurl = newPage.url();
    return newurl;
  }


}
