import { expect, FrameLocator, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';


export class purchaseSubscriptionPage {
  page: Page;
  readonly firstMainOffer: Locator;
  readonly firstInternationalOffer: Locator;
  readonly cardNumber: Locator;
  readonly cardExpiry: Locator;
  readonly cardCvc: Locator;
  readonly cancelButton: Locator;
  readonly missingCardDetailsAlertElement: Locator;
  readonly cardNumberFrame: FrameLocator;
  readonly cardExpiryFrame: FrameLocator;
  readonly cardCvcFrame: FrameLocator;

  readonly paidToPublishierOption: Locator;
  readonly offerNotSelectedError: Locator;
  readonly offerAndPaymentOptionNotSelectedError: Locator;
  readonly summaryItem: Locator;
  readonly summaryTax: Locator;
  readonly summaryTotal: Locator;
  readonly summaryItemPrice: Locator;
  readonly chequePaymentOption: Locator;
  readonly chequeAmount: Locator;
  readonly submitButton: Locator;
  readonly savedCardInput: Locator;
  readonly bundleOffer: Locator;
  readonly enableBundle: Locator;
  readonly bundleOfferSummary: Locator;
  readonly productUnavailableTXT: Locator;
  readonly LifeMembershipOffer: Locator;
  readonly savedCreditCardTXT: Locator;
  readonly noCVVCB: Locator;
  readonly englishLanguageSelector: Locator;
  readonly deutschLanguageSelector: Locator


  constructor(page: Page) {
    this.page = page;
    this.firstMainOffer = page.locator("input[value='PB-2349']");
    this.LifeMembershipOffer = page.locator("input[value='PB-1073']");
    this.firstInternationalOffer = page.locator("input[value='PB-2370']");
    this.cardNumber = page.locator("[data-elements-stable-field-name='cardNumber']");
    this.cardExpiry = page.locator("[data-elements-stable-field-name='cardExpiry']");
    this.cardCvc = page.locator("[data-elements-stable-field-name='cardCvc']");
    this.submitButton = page.getByRole('button', { name: 'Submit' })
    this.cancelButton = page.locator("//button[contains(text(),'Cancel')]");
    this.missingCardDetailsAlertElement = page.locator("h6.notification-text");
    this.cardNumberFrame = page.frameLocator("//iframe[@title='Secure card number input frame']");
    this.cardExpiryFrame = page.frameLocator("//iframe[@title='Secure expiration date input frame']");
    this.cardCvcFrame = page.frameLocator("//iframe[@title='Secure CVC input frame']");
    this.paidToPublishierOption = page.getByLabel('paid to publisher')
    this.offerAndPaymentOptionNotSelectedError = page.getByRole('button', { name: 'Please select a product and enter payment information.' })
    this.offerNotSelectedError = page.getByRole('button', { name: 'Please select a product.' })
    this.summaryItem = page.locator("//div[contains(text(),'1 Year Zoomer Magazine + 1 Year CARP Membership')]");
    this.summaryTax = page.locator("//div[@class='col']//div//div[@class='card']//div[2]//div[1]//div[2]")
    this.summaryItemPrice = page.locator("//div[@class='card-body']/div[1]/div[1]/div[@class='text-right col-3']")
    this.summaryTotal = page.locator("//h4[@class='m-0 p-3 card-footer']//div[1]//div[2]");
    this.chequePaymentOption = page.getByLabel('cheque');
    this.chequeAmount = page.getByPlaceholder('Cheque Amount');
    this.savedCardInput = page.locator('input[name="Use saved credit card"]');
    this.bundleOfferSummary = page.getByText('2 Year CARP membership: $');
    this.enableBundle = page.getByText('Select Auto Renewal Bundles');
    this.bundleOffer = page.getByLabel('2 Year CARP membership');
    this.productUnavailableTXT = page.locator("(//p[@class='text-danger'])[1]");
    this.savedCreditCardTXT = page.locator("//h5[text()='Saved Credit Card:']");
    this.noCVVCB = page.locator("//input[@name='no cvc']");
    this.englishLanguageSelector = page.locator('//a[normalize-space(text()) = "English"]') ;
    this.deutschLanguageSelector = page.locator('//a[normalize-space(text()) = "Deutsch"]') ;
  }


  async useSavedCardOption() {
    try {
      await expect(this.savedCardInput).toBeVisible({ timeout: 10000 });
      await this.savedCardInput.check();
    } catch (error) {
      logger.error(`Element ${this.savedCardInput} not found or not visible: `, error);
      console.error(`Element ${this.savedCardInput} not found or not visible: `, error);
    }
  }

  async selectBundleOffer() {
    try {
      await expect(this.bundleOffer).toBeVisible({ timeout: 10000 });
      await this.bundleOffer.check();
    } catch (error) {
      logger.error(`Element ${this.bundleOffer} not found or not visible: `, error);
      console.error(`Element ${this.bundleOffer} not found or not visible: `, error);
    }
  }

  async enableBundling() {
    try {
      await expect(this.enableBundle).toBeVisible({ timeout: 10000 });
      await this.enableBundle.click();
    } catch (error) {
      logger.error(`Element ${this.enableBundle} not found or not visible: `, error);
      console.error(`Element ${this.enableBundle} not found or not visible: `, error);
    }
  }

  async getBundleOfferSummary(): Promise<string | null> {
    try {
      await expect(this.bundleOfferSummary).toBeVisible({ timeout: 10000 });
      logger.info("BundleSummary ", await this.bundleOfferSummary.textContent());
      return await this.bundleOfferSummary.textContent();
    } catch (error) {
      logger.error(`Element ${this.bundleOfferSummary} not found or not visible: `, error);
      console.error(`Element ${this.bundleOfferSummary} not found or not visible: `, error);
      return null;
    }
  }
  /**
   * Select the offer while purchasing the subscription
   */
  async selectOffer() {
    try {
      await expect(this.firstMainOffer).toBeVisible({ timeout: 10000 });
      await this.firstMainOffer.click();
    } catch (error) {
      logger.error(`Element ${this.firstMainOffer} not found or not visible: `, error);
      console.error(`Element ${this.firstMainOffer} not found or not visible: `, error);
    }
  }

  /**
   * Select the Lifetime offer while purchasing the subscription
   */
  async selectLifeTimeOffer() {
    try {
      await expect(this.LifeMembershipOffer).toBeVisible({ timeout: 10000 });
      await this.LifeMembershipOffer.click({ timeout: 10000 });
    } catch (error) {
      logger.error(`Element ${this.LifeMembershipOffer} not found or not visible: `, error);
      console.error(`Element ${this.LifeMembershipOffer} not found or not visible: `, error);
    }
  }

  async selectInternationalOffer() {
    try {
      await expect(this.firstInternationalOffer).toBeVisible({ timeout: 10000 });
      await this.firstInternationalOffer.click();
    } catch (error) {
      logger.error(`Element ${this.firstInternationalOffer} not found or not visible: `, error);
      console.error(`Element ${this.firstInternationalOffer} not found or not visible: `, error);
    }
  }


  async validatePaymentDetails(): Promise<string[]> {
    let summaryArr: string[] = [];
    try {
      await Promise.all([
        expect(this.summaryItemPrice).toBeVisible({ timeout: 10000 }),
        expect(this.summaryTax).toBeVisible({ timeout: 10000 }),
        expect(this.summaryTotal).toBeVisible({ timeout: 10000 })
      ]);
      summaryArr = [
        await this.summaryItemPrice.textContent() || '',
        await this.summaryTax.textContent() || '',
        await this.summaryTotal.textContent() || ''
      ];
      console.log("Payment details ", summaryArr)
    }
    catch (error) {
      console.error("Error validating summary details:", error);
    }
    return summaryArr;
  }

  async getOfferNotSelectedErrorMessage() {
    try {
      await expect(this.offerNotSelectedError).toBeVisible({ timeout: 20000 });
      await this.offerNotSelectedError.scrollIntoViewIfNeeded();
      return await this.offerNotSelectedError.textContent({ timeout: 20000 })
    } catch (error) {
      logger.error(`Element ${this.offerNotSelectedError} not found or not visible: `, error);
      console.error(`Element ${this.offerNotSelectedError} not found or not visible: `, error);
    }
  }

  async getOfferAndPaymentNotSelectedErrorMessage(): Promise<string | null> {
    try {
      await expect(this.offerAndPaymentOptionNotSelectedError).toHaveText("Please select a product and enter payment information.", { timeout: 30000 });
      await this.offerAndPaymentOptionNotSelectedError.scrollIntoViewIfNeeded();
      return await this.offerAndPaymentOptionNotSelectedError.textContent();
    } catch (error) {
      logger.error(`Element ${this.offerAndPaymentOptionNotSelectedError} not found or not visible: `, error);
      console.error(`Element ${this.offerAndPaymentOptionNotSelectedError} not found or not visible: `, error);
      return null;
    }
  }


  async getAttributeValue(attributeName: string, eleLocator: Locator) {

    return await eleLocator.getAttribute(attributeName)

  }
  /**
   * Click Renew button to purchase the subscription
   */
  async clickRenewButton() {
    try {
      await expect(this.submitButton).toBeVisible({ timeout: 60000 });
      await this.submitButton.click({ timeout: 60000 });
    } catch (error) {
      logger.error(`Element ${this.submitButton} not found or not visible: `, error);
      console.error(`Element ${this.submitButton} not found or not visible: `, error);
    }
  }


  async paidToPublishierPaymentOptionSelection() {
    try {
      await expect(this.paidToPublishierOption).toBeVisible();
      await this.paidToPublishierOption.check({ timeout: 60000 });
    } catch (error) {
      logger.error(`Element ${this.paidToPublishierOption} not found or not visible: `, error);
      console.error(`Element ${this.paidToPublishierOption} not found or not visible: `, error);
    }
  }

  async paidByChequePaymentOptionSelection() {
    try {
      await expect(this.chequePaymentOption).toBeVisible();
      await this.chequePaymentOption.check({ timeout: 60000 });
      await expect(this.chequeAmount).toBeVisible();
      await this.chequeAmount.fill('17')
    }
    catch (error) {
      logger.error(`Element not found or not visible: `, error);
      console.error(`Element not found or not visible: `, error);
    }
  }

  /**
   * 
   * @param cdNumber to get the creditcardnumber
   * @param cdExpiry to get the creditcardExpiry
   * @param cdCvc  to get the creditcardCVC
   * @returns the error message based on the provided payment data 
   */
  async fillPaymentDetails(cdNumber: string, cdExpiry: string, cdCvc: string): Promise<string | null> {
    try {
      await this.enterCorrectPaymentDetails(cdNumber, cdExpiry, cdCvc)
      await this.clickRenewButton();
      await expect(this.missingCardDetailsAlertElement).toBeVisible();
      return await this.missingCardDetailsAlertElement.textContent();
    } catch (error) {
      logger.error(`Element ${this.missingCardDetailsAlertElement} not found or not visible: `, error);
      console.error(`Element ${this.missingCardDetailsAlertElement} not found or not visible: `, error);
      return null;
    }
  }

  /**
   * 
   * @param cdNumber to get the creditcardnumber
   * @param cdExpiry to get the creditcardExpiry
   * @param cdCvc  to get the creditcardCVC
   * @returns the order confirmation 
   */
  public async enterCorrectPaymentDetails(cardnumb: string, cardexp: string, cvc: string) {
    await this.cardNumberFrame.locator(this.cardNumber).waitFor({ state: 'attached', timeout: 60000 })
    await this.cardNumberFrame.locator(this.cardNumber).clear();
    await this.cardNumberFrame.locator(this.cardNumber).fill(cardnumb);
    await this.cardExpiryFrame.locator(this.cardExpiry).clear();
    await this.cardExpiryFrame.locator(this.cardExpiry).fill(cardexp);
    await this.cardCvcFrame.locator(this.cardCvc).clear();
    await this.cardCvcFrame.locator(this.cardCvc).fill(cvc);
  }

  async validateProductUnavailableMessage(): Promise<string | null> {
    try {
      await this.productUnavailableTXT.scrollIntoViewIfNeeded();
      await expect(this.productUnavailableTXT).toBeVisible({ timeout: 60000 });
      let messageTXT = await this.productUnavailableTXT.textContent()
      return messageTXT;
    } catch (error) {
      logger.error(`Element ${this.productUnavailableTXT} not found or not visible: `, error);
      console.error(`Element ${this.productUnavailableTXT} not found or not visible: `, error);
      return null;
    }
  }

  async clickCancelButton() {
    try {
      await expect(this.cancelButton).toBeVisible({ timeout: 60000 });
      await this.cancelButton.click();
    } catch (error) {
      logger.error(`Element ${this.cancelButton} not found or not visible: `, error);
      console.error(`Element ${this.cancelButton} not found or not visible: `, error);
    }
  }

  async savedCardInputToBeVisible() {
    try {
      await this.savedCreditCardTXT.scrollIntoViewIfNeeded();
      await expect(this.savedCreditCardTXT).toBeVisible({ timeout: 30000 });
      await expect(this.savedCardInput).toBeVisible({ timeout: 10000 });
      return this.savedCardInput;
    } catch (error) {
      logger.error(`Element ${this.savedCardInput} not found or not visible: `, error);
      console.error(`Element ${this.savedCardInput} not found or not visible: `, error);
    }
  }

  async savedCardInputToBeHidden() {
    try {
      await this.savedCreditCardTXT.scrollIntoViewIfNeeded();
      await expect(this.savedCreditCardTXT).toBeVisible({ timeout: 30000 });
      await expect(this.savedCardInput).toBeHidden({ timeout: 10000 });
      return this.savedCardInput;
    } catch (error) {
      logger.error(`Element ${this.savedCardInput} not found or not visible: `, error);
      console.error(`Element ${this.savedCardInput} not found or not visible: `, error);
    }
  }

  async getSummaryTotal(): Promise<number> {
    let summaryTotalText = await this.summaryTotal.textContent();
    if (summaryTotalText === null) {
      throw new Error("Total text is null or undefined. Unable to retrieve total amount.");
    }
    let total = parseFloat(summaryTotalText.trim().replace('$', ''));
    if (isNaN(total)) {
      throw new Error("Unable to parse total amount as a valid number.");
    } else {
      return total;
    }

  }


  async calculateSummaryTotal(): Promise<number> {
    let summaryItemPriceText = await this.summaryItemPrice.textContent();
    let summaryTaxText = await this.summaryTax.textContent();
    if (summaryItemPriceText === null || summaryTaxText === null) {
      throw new Error("Principal or tax text is null or undefined. Unable to validate amount.");
    }
    let principal = parseFloat(summaryItemPriceText.trim().replace('$', ''));
    let tax = parseFloat(summaryTaxText.trim().replace('$', ''));
    if (isNaN(principal) || isNaN(tax)) {
      throw new Error("Unable to parse principal or tax amount as valid numbers.");
    }
    let sum = principal + tax;
    return sum;

  }
    

  /**
   * 
   * @param cdNumber to get the creditcardnumber
   * @param cdExpiry to get the creditcardExpiry
   * @returns the order confirmation 
   */
  public async enterCorrectPaymentDetailsWithNoCVV(cardnumb: string, cardexp: string) {
    await this.cardNumberFrame.locator(this.cardNumber).waitFor({ state: 'attached', timeout: 30000 })
    await this.cardNumberFrame.locator(this.cardNumber).clear();
    await this.cardNumberFrame.locator(this.cardNumber).fill(cardnumb);
    await this.cardExpiryFrame.locator(this.cardExpiry).clear();
    await this.cardExpiryFrame.locator(this.cardExpiry).fill(cardexp);
    await this.cardCvcFrame.locator(this.cardCvc).clear();
    await this.noCVVCB.check()
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