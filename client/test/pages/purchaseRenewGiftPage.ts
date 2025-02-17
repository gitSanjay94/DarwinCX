import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';


export class purchaseRenewGiftPage {
  page: Page;
  readonly AddRecipient: Locator;
  readonly serachExistingCustomerButton: Locator;
  readonly createRecipient: Locator;
  readonly addAnotherRecipient: Locator;
  readonly recipientInfo: Locator;
  readonly giftSentLabel: Locator;
  readonly renewButton: Locator
  readonly addRecipientWarn: Locator
  readonly addOfferWarn: Locator
  readonly giftItemTaxLabel: Locator
  readonly giftItemPrice: Locator
  readonly recipientCancelButton: Locator
  readonly allGiftItemTaxLabel: Locator
  readonly itemTotal: Locator
  readonly labelWarningMessage: Locator;
  readonly labelMessageTB: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.AddRecipient = page.getByRole('button', { name: 'Add Recipient' })
    this.serachExistingCustomerButton = page.getByRole('button', { name: 'Search' }).nth(3);
    this.createRecipient = page.getByRole('button', { name: 'Create Recipient' }).nth(1);
    this.addAnotherRecipient = page.getByRole('button', { name: 'Add Another Recipient' });
    this.recipientInfo = page.locator("div.card> div.border-bottom");
    this.giftSentLabel = page.locator("//strong[normalize-space()='Gifts Sent']");
    this.renewButton = page.locator("//span[normalize-space()='Renew']")
    this.addOfferWarn = page.getByRole('button', { name: 'Please select an offer before adding recipient(s)' })
    this.addRecipientWarn = page.getByRole('button', { name: 'Please add a recipient.' })
    this.giftItemTaxLabel = page.locator("(//div[contains(text(),'Item tax for ON')])[1]")
    this.allGiftItemTaxLabel = page.locator("//div[contains(text(),'Item tax for')]")
    this.giftItemPrice = page.locator("//div[@class='text-right col-3']").first()
    this.recipientCancelButton = page.locator("(//div[@class='modal-footer']/button[contains(text(),'Cancel')])[2]")
    this.itemTotal = page.locator("//div[@class='text-right col-6']").first()
    this.labelWarningMessage = page.locator("//small[@class='text-danger']")
    this.labelMessageTB = page.locator("(//input[contains(@name,'label_message')])[1]")
    this.searchInput = page.locator("//div[text()='Search Query']/parent::div/following-sibling::div/input")

  }
  async getItemTotal(): Promise<number> {
    try {
      await expect(this.itemTotal).toBeVisible({ timeout: 10000 });
      const originalString = await this.itemTotal?.textContent();

      if (originalString != null && originalString != undefined) {
        const startIndex = originalString.indexOf('$') + 1;
        const finalResult = parseFloat(originalString.substring(startIndex));
        if (!isNaN(finalResult)) {
          return finalResult;
        } else {
          throw new Error('Failed to parse payment total.');
        }
      } else {
        throw new Error('Payment total string is null or undefined.');
      }
    } catch (error) {
      console.error('Error in getItemTotal:', error);
      return NaN; // or any other appropriate value indicating failure
    }
  }

  async getAddOfferWarn(): Promise<string | null> {
    try {
      await expect(this.addOfferWarn).toBeVisible({ timeout: 10000 });
      logger.info("getAddOfferWarn() ", await this.addOfferWarn.textContent());
      return await this.addOfferWarn.textContent() || ''
    } catch (error) {
      logger.info(`Element ${this.addOfferWarn} not found or not visible: `, error);
      console.error(`Element ${this.addOfferWarn} not found or not visible: `, error);
      return null;
    }
  }

  async getAddRecipientWarn(): Promise<string | null> {
    try {
      await expect(this.addRecipientWarn).toBeVisible({ timeout: 10000 });
      logger.info("getAddRecipientWarn() ", await this.addRecipientWarn.textContent());
      return await this.addRecipientWarn.textContent()
    } catch (error) {
      logger.info(`Element ${this.addRecipientWarn} not found or not visible: `, error);
      console.error(`Element ${this.addRecipientWarn} not found or not visible: `, error);
      return null;
    }
  }

  async clickRenewButton() {
    try {
      await expect(this.renewButton).toBeVisible({ timeout: 10000 });
      await this.renewButton.click({ timeout: 10000 });
    } catch (error) {
      logger.info(`Element ${this.renewButton} not found or not visible: `, error);
      console.error(`Element ${this.renewButton} not found or not visible: `, error);
    }
  }

  async clickAddRecipientButton() {
    try {
      await expect(this.AddRecipient).toBeVisible({ timeout: 10000 });
      await this.AddRecipient.click();
    } catch (error) {
      logger.info(`Element ${this.AddRecipient} not found or not visible: `, error);
      console.error(`Element ${this.AddRecipient} not found or not visible: `, error);
    }
  }

  async clickAddAnotherRecipientButton() {
    try {
      await expect(this.addAnotherRecipient).toBeVisible({ timeout: 10000 });
      await this.addAnotherRecipient.focus()
      await this.addAnotherRecipient.click({ timeout: 50000 });
    } catch (error) {
      logger.info(`Element ${this.addAnotherRecipient} not found or not visible: `, error);
      console.error(`Element ${this.addAnotherRecipient} not found or not visible: `, error);
    }
  }

  async getrecipientInfo(): Promise<string | null> {
    try {
      await expect(this.recipientInfo).toBeVisible({ timeout: 60000 });
      console.log("getrecipientInfo   ", await this.recipientInfo.textContent());
      logger.info(await this.recipientInfo.textContent());
      return await this.recipientInfo.textContent() || ''
    } catch (error) {
      logger.info(`Element ${this.recipientInfo} not found or not visible: `, error);
      console.error(`Element ${this.recipientInfo} not found or not visible: `, error);
      return null;
    }
  }

  async validaterecipientInfo() {
    this.scrollToGiftSent()
  }

  async scrollToGiftSent() {
    try {
      await expect(this.giftSentLabel).toBeVisible({ timeout: 10000 });
      await this.giftSentLabel.scrollIntoViewIfNeeded();
    } catch (error) {
      logger.info(`Element ${this.giftSentLabel} not found or not visible: `, error);
      console.error(`Element ${this.giftSentLabel} not found or not visible: `, error);
    }
  }

  async getFirstItemTax() {
    let numericalValue;
    await expect(this.giftItemTaxLabel).toBeVisible({ timeout: 60000 });
    console.log(" tax label is ", await this.giftItemTaxLabel.textContent())
    let originalString = await this.giftItemTaxLabel.textContent()
    if (originalString != null) {
      let startIndex = originalString.indexOf('$') + 1;
      numericalValue = parseFloat(originalString.substring(startIndex));
    }
    console.log(" Numeric tax label is ", numericalValue)
    return numericalValue;
  }

  async getAllItemTax() {
    const allTexts = await this.allGiftItemTaxLabel.allTextContents();
    console.log("Count of taxes found", allTexts.length);
    const numericalValue = allTexts.map(originalString => {
      if (originalString != null) {
        const startIndex = originalString.indexOf('$') + 1;
        return parseFloat(originalString.substring(startIndex));
      }
      return 0; // Return a default value if the string is null
    });

    console.log("Extracted Numeric values are ", numericalValue);
    return numericalValue;
  }

  async validateTaxNotZero() {
    let taxValues = await this.getAllItemTax()
    let result = taxValues.includes(0)
    console.log("validateTaxNotZero result****** ", result)
    return result
  }

  async getAllItemsTotalPrice() {
    const itemPrice = await this.getFirstItemPrice();
    const allItemTax = await this.getAllItemTax();
    const totalPriceArray = allItemTax.map(itemTax => itemTax + itemPrice);
    const totalPrice = totalPriceArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("Total Calculated amount is:", totalPrice);
    return totalPrice; // Return the total price 
  }


  async getFirstItemPrice() {
    let numericalValue: number = 0;
    await expect(this.giftItemPrice).toBeVisible({ timeout: 60000 });
    console.log(" First Item Price  is **** ", await this.giftItemPrice.textContent())
    let originalString = await this.giftItemPrice.textContent()
    if (originalString !== null && originalString !== undefined) {
      numericalValue = parseFloat(originalString.substring(1));
    }
    console.log(" Numeric Item Price  is ", numericalValue)
    return numericalValue;
  }

  async getCalculatedPrice() {
    let itemPrice = await this.getFirstItemPrice()
    let itemTax = await this.getFirstItemTax()
    let total: number = 0;
    if (itemPrice !== undefined && itemTax != undefined) {
      total = itemPrice + itemTax
    }
    console.log("Calculated Total is ", total)
  }

  async getSubstring(text: string | null, startIndex: number | null) {
    let result;
    if (text != null && startIndex != null) {
      result = text.substring(startIndex);
    }
    return result;
  }


  async searchRecipientByNameAndAddress(recepientToSearch: string, address: string) {
    // await this.page.getByText('Find Recipient').nth(1).click()
    // await this.searchInput.fill(recepientToSearch);
    // await this.page.keyboard.press('Tab')
    // await this.page.waitForTimeout(5000)
    // await this.page.getByRole('button', { name: 'Search' }).nth(3).focus()
    // await this.page.getByRole('button', { name: 'Search' }).nth(3).click({ timeout: 20000 });
    // await this.page.waitForTimeout(10000)
    // await this.page.getByRole('button', { name: 'Search' }).nth(3).dblclick({ timeout: 20000 });
    // await this.page.waitForTimeout(10000)
  await expect(this.page.getByRole('button', { name: 'Find Recipient' }).nth(1)).toBeVisible({ timeout: 60000 });
         await this.page.getByRole('button', { name: 'Find Recipient' }).nth(1).click();
         await this.page.keyboard.press('Tab')
        await this.page.waitForTimeout(5000)
  await this.page.locator('div').filter({ hasText: /^Search QuerySearch$/ }).getByRole('textbox').click();
  await this.page.locator('div').filter({ hasText: /^Search QuerySearch$/ }).getByRole('textbox').fill(recepientToSearch);
  await this.page.locator('div').filter({ hasText: /^Search QuerySearch$/ }).getByRole('button').click();
    await this.page.locator('div:nth-child(3) > .table-responsive > .table > tbody > tr > td:nth-child(3) > div > button').first().click()
    await this.page.locator(`//td[text()[normalize-space() = '${address}']]/following-sibling::td/div/button`).scrollIntoViewIfNeeded();
    await this.page.locator(`//td[text()[normalize-space() = '${address}']]/following-sibling::td/div/button`).click();
  }
  async searchRecipientByName(recepientToSearch: string) {
    // await this.page.getByText('Find Recipient').nth(1).click()
    // await this.searchInput.fill(recepientToSearch);
    // await this.page.keyboard.press('Tab')
    // await this.page.waitForTimeout(5000)
    // await this.page.getByRole('button', { name: 'Search' }).nth(3).focus()
    // await this.page.getByRole('button', { name: 'Search' }).nth(3).click({ timeout: 20000 });
    // await this.page.waitForTimeout(10000)
    // await this.page.getByRole('button', { name: 'Search' }).nth(3).dblclick({ timeout: 20000 });
    // await this.page.waitForTimeout(10000)
    // // await this.page.locator('(//button[text()="Add Recipient"])[2]').click()
    // await this.page.getByText('Add Recipient').nth(2).click();
    // // await this.page.getByText('Add Recipient').click();

    await expect(this.page.getByRole('button', { name: 'Find Recipient' }).nth(1)).toBeVisible({ timeout: 60000 });
         await this.page.getByRole('button', { name: 'Find Recipient' }).nth(1).click();
         await this.page.keyboard.press('Tab')
        await this.page.waitForTimeout(5000)
  await this.page.locator('div').filter({ hasText: /^Search QuerySearch$/ }).getByRole('textbox').click();
  await this.page.locator('div').filter({ hasText: /^Search QuerySearch$/ }).getByRole('textbox').fill(recepientToSearch);
  await this.page.locator('div').filter({ hasText: /^Search QuerySearch$/ }).getByRole('button').click();
       await this.page.locator('div:nth-child(3) > .table-responsive > .table > tbody > tr > td:nth-child(3) > div > button').first().click();
    }
  

  async clickCreateRecipientButton() {
    try {
      await expect(this.createRecipient).toBeVisible({ timeout: 60000 });
      await this.createRecipient.click();
    } catch (error) {
      logger.info(`Element ${this.createRecipient} not found or not visible: `, error);
      console.error(`Element ${this.createRecipient} not found or not visible: `, error);
    }
  }

  async clickCancelRecipient() {
    try {
      await expect(this.recipientCancelButton).toBeVisible({ timeout: 60000 });
      await this.recipientCancelButton.focus();
      await this.recipientCancelButton.click({ force: true, timeout: 60000 });
      console.log("cancel clicked")
    } catch (error) {
      logger.info(`Element ${this.recipientCancelButton} not found or not visible: `, error);
      console.error(`Element ${this.recipientCancelButton} not found or not visible: `, error);
    }
  }

  async validateLabelWarningMessage() {
    try {
      await expect(this.labelMessageTB).toBeVisible({ timeout: 60000 });
      let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
      await this.labelMessageTB.fill(text);
      await expect(this.labelWarningMessage).toBeVisible({ timeout: 50000 })
      let message = await this.labelWarningMessage.textContent();
      return message;
    } catch (error) {
      logger.info(`Element ${this.labelWarningMessage} not found or not visible: `, error);
      console.error(`Element ${this.labelWarningMessage} not found or not visible: `, error);
    }
  }

  async fillLabelMessage(text: string) {
    try {
      await expect(this.labelMessageTB).toBeVisible({ timeout: 60000 });
      await this.labelMessageTB.clear();
      await this.labelMessageTB.fill(text);
    } catch (error) {
      logger.info(`Element ${this.labelMessageTB} not found or not visible: `, error);
      console.error(`Element ${this.labelMessageTB} not found or not visible: `, error);
    }
  }
}