import { expect, type Locator, type Page } from '@playwright/test';
import { itemNumberToSuspend, themeToSuspend } from '../../src/constants';
import { logger } from '../features/CustomerCare/support/hook';

export class suspendPage {
  page: Page;
  readonly firstItemToSuspendCheckBox: Locator;
  readonly itemSelectionBasedOnTheme: Locator;
  readonly itemSelectionBasedOnIssuenumber: Locator;
  readonly confirm: Locator

  constructor(page: Page) {
    this.page = page;
    this.firstItemToSuspendCheckBox = page.locator("//tbody/tr[1]/td[7]/input[1]")
    this.itemSelectionBasedOnTheme = page.locator("//tbody/tr/td[contains(text()," + themeToSuspend + ")]/following-sibling::td/input[@type='checkbox']")
    this.itemSelectionBasedOnIssuenumber = page.locator("//tbody/tr/td[contains(text()," + itemNumberToSuspend + ")]/following-sibling::td/input[@type='checkbox']")
    this.confirm = page.getByRole('button', { name: 'Confirm' })
   
  }

  async suspendFirstOption() {
    try {
      await expect(this.firstItemToSuspendCheckBox).toBeVisible({ timeout: 60000 });
      await this.firstItemToSuspendCheckBox.check();
    }
    catch (error) {
      logger.error(`Element ${this.firstItemToSuspendCheckBox} not found or not visible: `, error);
      console.error(`Element ${this.firstItemToSuspendCheckBox} not found or not visible: `, error);
      throw error
    }
  }

  async suspendBasedonTheme() {
    try {
      await expect(this.itemSelectionBasedOnTheme).toBeVisible({ timeout: 60000 });
      await this.itemSelectionBasedOnTheme.check();
    } catch (error) {
      logger.error(`Element ${this.itemSelectionBasedOnTheme} not found or not visible: `, error);
      console.error(`Element ${this.itemSelectionBasedOnTheme} not found or not visible: `, error);
    }
  }

  async suspendBasedonItemNumber() {
    try {
      await expect(this.itemSelectionBasedOnIssuenumber).toBeVisible({ timeout: 60000 });
      await this.itemSelectionBasedOnIssuenumber.check();
    }
    catch (error) {
      logger.error(`Element ${this.itemSelectionBasedOnIssuenumber} not found or not visible: `, error);
      console.error(`Element ${this.itemSelectionBasedOnIssuenumber} not found or not visible: `, error);
    }
  }

  async confirmSuspension() {
    try {
      await expect(this.confirm).toBeVisible({ timeout: 60000 });
      await this.confirm.click();
    }
    catch (error) {
      logger.error(`Element ${this.confirm} not found or not visible: `, error);
      console.error(`Element ${this.confirm} not found or not visible: `, error);
    }
  }

}