import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class loginPage {
  page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  passwordNotExistWarn: Locator
  readonly deutschLanguageSelector: Locator
  readonly englishLanguageSelector: Locator

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('[data-test="sign-in-email-input"]')
    this.password = page.locator('[data-test="sign-in-password-input"]')
    this.loginButton = page.getByRole('button', { name: 'Sign In' })
    this.passwordNotExistWarn = page.getByText('Incorrect username or')
    this.englishLanguageSelector = page.locator('//a[normalize-space(text()) = "English"]');
    this.deutschLanguageSelector = page.locator('//a[normalize-space(text()) = "Deutsch"]');

  }

  /**
   * 
   * @param username 
   * @param password 
   */
  async login(uname: string, pwd: string) {
    await expect(this.email).toBeVisible({ timeout: 60000 });
    await this.email.fill(uname);
    await expect(this.password).toBeVisible({ timeout: 60000 });
    await this.password.fill(pwd);
    await expect(this.loginButton).toBeVisible({ timeout: 60000 });
    await this.loginButton.click();
  }


  /**
   * 
   * @returns title of the current page
   */
  async getAppTitle(): Promise<string> {
    return await this.page.title();
  }

  async getEmail() {
    await expect(this.email).toBeVisible({ timeout: 60000 });
    return this.email
  }


  /**
   * 
   * @returns warn message text
   */
  async passwordNotExistWarning() {
    await expect(this.passwordNotExistWarn).toBeVisible({ timeout: 60000 });
    const warnMsg = await this.passwordNotExistWarn.textContent()
    logger.info(" Login failure message *************** ", warnMsg)
    if (warnMsg != null && warnMsg != undefined)
      return warnMsg
  }

  async selectEnglishLanguage() {
    // Get the current language
    const currentLanguage = await this.getCurrentLanguage();

    // If the language is already English, do nothing
    if (currentLanguage === 'English') {
      console.log("Language is already English, no action needed.");
      return;
    }

    // If the current language is Deutsch, we need to click on Deutsch first and then English
    if (currentLanguage === 'Deutsch') {
      // Ensure Deutsch is visible and clickable, then click on it
      if (await this.deutschLanguageSelector.isVisible()) {
        await this.deutschLanguageSelector.click();
        // Optionally wait for the language switch if required
        await this.page.waitForTimeout(500); // Adjust as needed
      }

      // After clicking Deutsch, ensure English is visible and clickable, then click on English
      if (await this.englishLanguageSelector.isVisible()) {
        await this.englishLanguageSelector.click();
      }
    }
  }

  async getCurrentLanguage(): Promise<string | undefined> {
    // Wait for the language element to update
    await this.page.waitForSelector('#localize-active-lang', { state: 'attached' });

    return await this.page.evaluate(() => {
      const languageElement = document.querySelector('#localize-active-lang');
      return languageElement ? languageElement.textContent?.trim() : undefined;
    });
  }
}