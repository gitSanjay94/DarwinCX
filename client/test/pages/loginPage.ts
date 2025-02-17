import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class loginPage {
  page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  passwordNotExistWarn: Locator

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('[data-test="sign-in-email-input"]')
    this.password = page.locator('[data-test="sign-in-password-input"]')
    this.loginButton = page.getByRole('button', { name: 'Sign In' })
    this.passwordNotExistWarn = page.getByText('Incorrect username or')


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
}