import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class MySite_CottageLifePage {

  page: Page;
  readonly usernameTF: Locator;
  readonly passwordTF: Locator;
  readonly signIn: Locator;
  readonly accountNumberOrEmailAddressText: Locator;
  readonly lastNameOrPostalCodeText: Locator;
  readonly myCottageLifeSubscriptionText: Locator;
  readonly cottageLifeText: Locator;
  readonly expiryIssue: Locator;
  readonly membershipOrAccountNumber: Locator;
  readonly customerNotFoundText: Locator;
  readonly pleaseProvideAValidAccountNumberText: Locator;
  readonly giftCentreItem: Locator;
  readonly giftCentreText: Locator;
  readonly homeItem: Locator;
  readonly logOutItem: Locator;
  readonly purchaseNowButton: Locator;
  readonly purchaseNowText: Locator;
  readonly cancelButtonInPopup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameTF = page.locator('#signInFormUsername')
    this.passwordTF = page.locator('#signInFormPassword')
    this.signIn = page.getByLabel('submit')
    this.accountNumberOrEmailAddressText = page.getByText('Account Number Or Email Address')
    this.lastNameOrPostalCodeText = page.getByText('Last Name Or Postal Code')
    this.myCottageLifeSubscriptionText = page.getByText('My Cottage Life')
    this.cottageLifeText = page.getByText('Cottage Life', { exact: true })
    this.expiryIssue = page.locator("//div[text()='Expiry:']/parent::div").first()
    this.membershipOrAccountNumber = page.locator("//div[text()='Membership/Account Number:']/parent::div").first()
    this.customerNotFoundText = page.getByText('Customer Not Found')
    this.pleaseProvideAValidAccountNumberText = page.getByText('Please provide a valid Account Number')
    this.giftCentreItem = page.getByText('Gift Centre')
    this.logOutItem = page.locator('a.item:has-text("Log Out")');
    this.giftCentreText = page.locator("//div[text()='Gift Centre']")
    this.homeItem = page.locator("//a[text()='Home']")
    this.purchaseNowButton = page.getByRole('button', { name: 'Purchase Now' })
    this.purchaseNowText = page.locator('(//button[contains(@class, "ui icon positive right labeled button")])')
    this.cancelButtonInPopup = page.locator('(//button[contains(@class, "ui icon negative right labeled button")])')
  }

  async validateAccountNumberOrEmailAddressText() {
    await this.page.waitForTimeout(4000);
    await expect(this.accountNumberOrEmailAddressText).toBeVisible({ timeout: 60000 });
    await this.accountNumberOrEmailAddressText.scrollIntoViewIfNeeded();
    let text = await this.accountNumberOrEmailAddressText.textContent();
    return text;
  }

  async validateCottageLifeText() {
    await expect(this.cottageLifeText).toBeVisible({ timeout: 60000 });
    await this.cottageLifeText.scrollIntoViewIfNeeded();
    let text = await this.cottageLifeText.textContent();
    return text;
  }

  async validateLastNameOrPostalCodeText() {
    await this.page.waitForTimeout(4000);
    await expect(this.lastNameOrPostalCodeText).toBeVisible({ timeout: 60000 });
    await this.lastNameOrPostalCodeText.scrollIntoViewIfNeeded();
    let text = await this.lastNameOrPostalCodeText.textContent();
    return text;
  }

  async validateMyCottageLifeSubscriptionText() {
    await expect(this.myCottageLifeSubscriptionText).toBeVisible({ timeout: 60000 });
    await this.myCottageLifeSubscriptionText.scrollIntoViewIfNeeded();
    let text = await this.myCottageLifeSubscriptionText.textContent();
    return text;
  }

  async fillUsernameTF(username: string) {
    await expect(this.usernameTF).toBeVisible({ timeout: 60000 });
    await this.usernameTF.scrollIntoViewIfNeeded();
    await this.usernameTF.fill(username);
  }

  async fillPasswordTF(password: string) {
    await expect(this.passwordTF).toBeVisible({ timeout: 60000 });
    await this.passwordTF.scrollIntoViewIfNeeded();
    await this.passwordTF.fill(password);
  }

  async clickSignIn() {
    await expect(this.signIn).toBeVisible({ timeout: 60000 });
    await this.signIn.scrollIntoViewIfNeeded();
    await this.signIn.click();
  }

  async getExpiryIssue() {
    await expect(this.expiryIssue).toBeVisible({ timeout: 60000 });
    await this.expiryIssue.scrollIntoViewIfNeeded();
    let text = await this.expiryIssue.textContent();
    return text;
  }

  async getMembershipOrAccountNumber() {
    await expect(this.membershipOrAccountNumber).toBeVisible({ timeout: 60000 });
    await this.membershipOrAccountNumber.scrollIntoViewIfNeeded();
    let text = await this.membershipOrAccountNumber.textContent();
    return text;
  }

  async validateCustomerNotFoundText() {
    await this.page.waitForTimeout(4000);
    await expect(this.customerNotFoundText).toBeVisible({ timeout: 60000 });
    await this.customerNotFoundText.scrollIntoViewIfNeeded();
    let text = await this.customerNotFoundText.textContent();
    return text;
  }

  async validatePleaseProvideAValidAccountNumberText() {
    await this.page.waitForTimeout(4000);
    await expect(this.pleaseProvideAValidAccountNumberText).toBeVisible({ timeout: 60000 });
    await this.pleaseProvideAValidAccountNumberText.scrollIntoViewIfNeeded();
    let text = await this.pleaseProvideAValidAccountNumberText.textContent();
    return text;
  }

  async clickGiftCentreItem() {
    await this.page.waitForTimeout(8000);
    await expect(this.giftCentreItem).toBeVisible({ timeout: 60000 });
    await this.giftCentreItem.scrollIntoViewIfNeeded();
    await this.giftCentreItem.click();
  }

  async clickHomeItem() {
    await expect(this.homeItem).toBeVisible({ timeout: 60000 });
    await this.homeItem.scrollIntoViewIfNeeded();
    await this.homeItem.click();
  }

  async clickLogOutItem() {
    await this.logOutItem.waitFor({ state: 'visible', timeout: 60000 });
    await this.logOutItem.scrollIntoViewIfNeeded();
    await new Promise(resolve => setTimeout(resolve, 500)); // 500ms delay
    await this.logOutItem.evaluate((el) => (el as HTMLElement).click());
  }


  async validateGiftCentreText() {
    await this.page.waitForTimeout(6000);
    await expect(this.giftCentreText).toBeVisible({ timeout: 60000 });
    await this.giftCentreText.scrollIntoViewIfNeeded();
    let text = await this.giftCentreText.textContent();
    return text
  }

  async checkCheckboxStatusWithLabels(): Promise<string[]> {
    // Locate all the checkbox containers (divs) using XPath
    const checkboxDivs = await this.page.$$('//div[@class="ui checkbox" or @class="ui checked checkbox" or @class="ui read-only checkbox"]');
    const results: string[] = [];

    // Loop through the first 3 checkboxes (adjust index based on how many you need to check)
    for (let i = 0; i < 3; i++) {
      const checkbox = await checkboxDivs[i].$('input[type="checkbox"]');  // Select the checkbox input
      const label = await checkboxDivs[i].$('label');  // Select the associated label

      const isChecked = await checkbox?.isChecked();  // Check if the checkbox is checked
      const labelText = await label?.textContent();  // Get the text of the label

      // Construct the result string with checkbox number, checked/unchecked status, and label
      const result = `Checkbox ${i + 1} (${labelText?.trim()}): ${isChecked ? 'Checked' : 'Unchecked'}`;
      results.push(result);
    }
    return results;  // Return the array of results
  }

  async isSaveButtonDisabled(): Promise<boolean> {
    // Locate the "Save" button using XPath
    const saveButton = await this.page.locator("(//button[@class='ui icon positive disabled right labeled button' and contains(text(), 'Save')])[1]");

    if (saveButton) {
      // Check if the button is disabled
      const isDisabled = await saveButton.isDisabled();
      return isDisabled;
    } else {
      throw new Error('Save button not found.');
    }
  }

  async clickPurchaseNowButton() {
    await expect(this.purchaseNowButton).toBeVisible({ timeout: 60000 });
    await this.purchaseNowButton.scrollIntoViewIfNeeded();
    await this.purchaseNowButton.click();
  }

  async clickCancelButtonInPopup() {
    await expect(this.cancelButtonInPopup).toBeVisible({ timeout: 60000 });
    await this.cancelButtonInPopup.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(6000);
    await this.cancelButtonInPopup.click();
    await this.page.waitForTimeout(6000);
  }

  async getCurrentPageUrl() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      await this.purchaseNowButton.click(),
      await this.page.waitForTimeout(6000),
      await this.purchaseNowText.click()
    ]);
    await this.page.waitForTimeout(8000);
    const currentUrl = newPage.url();
    return currentUrl;
  }






}