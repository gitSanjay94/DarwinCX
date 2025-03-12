import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class Upsells_ViewNoUpsellPage {
 
  page: Page;
  readonly userFirstNameValue: Locator;
  readonly userLastNameValue: Locator;
  readonly companyValue: Locator;
  readonly jobTitileValue: Locator;
  readonly userAddress1Value: Locator;
  readonly userAddress2Value: Locator;
  readonly userCityValue: Locator;
  readonly userPostalCodeValue: Locator;
  readonly userEmailValue: Locator;
  readonly userCountry: Locator;
  readonly userProvince: Locator;
  readonly addGiftRecipientButton: Locator;
  readonly placeOrderButton: Locator;
  readonly removeButton: Locator;
  readonly creditCardRB: Locator;
  readonly payPalRB: Locator;
  readonly billMeLaterRB: Locator;
  readonly cardNumberTF: Locator;
  readonly monthTF: Locator;
  readonly CVVTF: Locator;
  readonly placeorder: Locator;
  readonly productUnavailableText: Locator;
  readonly cardNumber: Locator;
  readonly cardExpiry: Locator;
  readonly cardCvc: Locator;
  readonly cardNumberFrame: FrameLocator;
  readonly cardExpiryFrame: FrameLocator;
  readonly cardCvcFrame: FrameLocator;
  readonly productPB1136RB: Locator;
  readonly transactionSuccessfulMsg: Locator;
  readonly userPhoneNumber: Locator;
  readonly purchaserAutoRenewOption: Locator;
  readonly selectButton: Locator;
  readonly noThankYouButton: Locator;
  readonly upgradeYourSubscriptionText: Locator;
  readonly bundleOption: Locator;
  readonly summaryTxt: Locator;
  readonly summaryUSDTxt: Locator;
  readonly summaryUSDTxtValue: Locator;
  readonly taxValue: Locator;
  readonly totalPriceatSuccessfulTransactionPage: Locator;
  readonly totalPriceatDfMASuccessfulTransactionPage: Locator;
  readonly mailingFirstNameTF: Locator;
  readonly mailingLastNameTF: Locator;
  readonly mailingCompanyNameTF: Locator;
  readonly mailingJobTitleTF: Locator;
  readonly mailingAddressTF: Locator;
  readonly mailingAddress2TF: Locator;
  readonly mailingCityTF: Locator;
  readonly mailingProvinceDD: Locator;
  readonly mailingPostalCodeTF: Locator;
  readonly mailingCountryDD: Locator;
  readonly mailingPhoneNumberTF: Locator;
  readonly mailingEmailTF: Locator;
  readonly mailingAddressDifferentCB: Locator;
  readonly mailingAddressTxt: Locator;


  constructor(page: Page) {
    this.page = page;
    this.userFirstNameValue = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value=""]')
    this.userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value=""]')
    this.companyValue = page.locator('//input[@id="userCompanyName" and @name="userCompanyName" and @value=""]')
    this.jobTitileValue = page.locator('//input[@id="userJobTitle" and @name="userJobTitle" and @value=""]')
    this.userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value=""]')
    this.userAddress2Value = page.locator('//input[@id="userAddress2" and @name="userAddress2" and @value=""]')
    this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value=""]')
    this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value=""]')
    this.userPhoneNumber = page.locator('//input[@id="userPhoneNumber"]')
    this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value=""]')
    this.userCountry = page.locator('#userCountry')
    this.userProvince = page.locator('select#userProvince')
    this.addGiftRecipientButton = page.getByRole('button', { name: 'Add Gift Recipient' })
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
    this.removeButton = page.getByRole('button', { name: 'Remove' })
    this.creditCardRB = page.getByLabel('Credit Card')
    this.payPalRB = page.getByLabel('PayPal')
    this.billMeLaterRB = page.getByLabel('Bill Me Later')
    this.cardNumberTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('Card number')
      
    this.monthTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('MM / YY')
    this.CVVTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('CVC')
    this.placeorder = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[3]/div/div/div[2]/div/div/div/div/div/button')
    // this.countrymissingalert = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[1]/div[1]/div[2]/div[7]/div[2]/div/span')
    // this.productUnavailableText = page.getByText('Product is unavailable in');
    this.productUnavailableText = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[1]/div[1]/div[2]/div[7]/div[2]/div/span')
   this.cardNumber = page.locator("//input[@id='Field-numberInput']");
        this.cardExpiry = page.locator("//input[@id='Field-expiryInput']");
        this.cardCvc = page.locator("//input[@id='Field-cvcInput']");
        this.cardNumberFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
        this.cardExpiryFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
        this.cardCvcFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
    this.productPB1136RB = page.locator("//input[@id='productPB-1136']")
    this.transactionSuccessfulMsg = page.locator("//*[@id='thankYou']")
    this.purchaserAutoRenewOption = page.locator("//input[@name='purchaserAutoRenewOption' and @type='checkbox']")
    this.selectButton = page.getByRole('heading', { name: 'Select' })
    this.noThankYouButton = page.getByRole('button', { name: 'No Thank You' })
    this.upgradeYourSubscriptionText = page.locator('//div[text()="Upgrade Your Subscription"]')
    this.bundleOption = page.getByLabel('Year Print with 2 upgrade options')
    this.summaryTxt = page.getByText('Summary')
    this.summaryUSDTxt     = page.getByText('USD$')
    this.summaryUSDTxtValue = page.getByText('TotalUSD$10.00Upgrades');
    this.taxValue = page.getByText('Taxes ()')
    this.totalPriceatSuccessfulTransactionPage = page.locator('//div[@class="col" and text()="$10.70"]');
   this.totalPriceatDfMASuccessfulTransactionPage = page.locator('//div[@class="col" and text()="$10.83"]');
    this.mailingFirstNameTF = page.locator('#mailingFirstName')
    this.mailingLastNameTF = page.locator('#mailingLastName')
    this.mailingCompanyNameTF = page.locator('#mailingCompanyName')
    this.mailingJobTitleTF = page.locator('#mailingJobTitle')
    this.mailingAddressTF = page.locator('#mailingAddress')
    this.mailingAddress2TF = page.locator('#mailingAddress2')
    this.mailingCityTF = page.locator('#mailingCity')
    this.mailingProvinceDD = page.locator('#mailingProvince')
    this.mailingPostalCodeTF = page.locator('#mailingPostalCode')
    this.mailingCountryDD = page.locator('#mailingCountry')
    this.mailingPhoneNumberTF = page.locator('#mailingPhoneNumber')
    this.mailingEmailTF = page.locator('#mailingEmail')
    this.mailingAddressDifferentCB = page.locator('#mailingAddressDifferent')
    this.mailingAddressTxt = page.locator("//div[text()='Mailing Address']")
 
  }


async selectBundleOption() {
    await this.bundleOption.waitFor({ state: 'visible' });
    await this.bundleOption.scrollIntoViewIfNeeded();
    await this.bundleOption.focus();
    await this.bundleOption.check();
   
    
       } 

  async validateUserFirstNameValue() {
    await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.userFirstNameValue.scrollIntoViewIfNeeded();
    let text = await this.userFirstNameValue.getAttribute('value');
    return text;
  }

  async validateUserLastNameValue() {
    await expect(this.userLastNameValue).toBeVisible({ timeout: 60000 });
    let text = await this.userLastNameValue.getAttribute('value');
    return text;
  }

  async validateBlankCompanyNameValue() {
    await expect(this.companyValue).toBeVisible({ timeout: 60000 });
    let text = await this.companyValue.getAttribute('value');
    return text;
  }

  async validateBlankJobTitleValue() {
    await expect(this.jobTitileValue).toBeVisible({ timeout: 60000 });
    let text = await this.jobTitileValue.getAttribute('value');
    return text;
  }

  async validateUserAddress1Value() {
    await expect(this.userAddress1Value).toBeVisible({ timeout: 60000 });
    let text = await this.userAddress1Value.getAttribute('value');
    return text;
  }

  async validateUserAddress2Value() {
    await expect(this.userAddress2Value).toBeVisible({ timeout: 60000 });
    let text = await this.userAddress2Value.getAttribute('value');
    return text;
  }

  
  async validateUserCityValue() {
    await expect(this.userCityValue).toBeVisible({ timeout: 60000 });
    let text = await this.userCityValue.getAttribute('value');
    return text;
  }

  async validateUserPostalCodeValue() {
    await expect(this.userPostalCodeValue).toBeVisible({ timeout: 60000 });
    let text = await this.userPostalCodeValue.getAttribute('value');
    return text;
  }

  async validateUserEmailValue() {
    await this.userEmailValue.scrollIntoViewIfNeeded();
    await expect(this.userEmailValue).toBeVisible({ timeout: 60000 });
    let text = await this.userEmailValue.getAttribute('value');
    return text;

  }

  async validateUserProvinceValue() {
    await this.userProvince.waitFor({ state: 'visible' });
    await this.userProvince.scrollIntoViewIfNeeded();
    const selectedOption = await this.userProvince.locator('option:checked').first();
    let province = null;
    if (selectedOption) {
      province = await selectedOption.innerText();
    } else {
      throw new Error('No province selected or element not found.');
    }
    console.log('Retrieved province:', province);
    return province.trim();
  }


  async validateUserCountryValue() {
    await this.userCountry.waitFor({ state: 'visible' });
    await this.userCountry.scrollIntoViewIfNeeded();
    const selectedOption = await this.userCountry.locator('option:checked').first();
    let country = null;
    if (selectedOption) {
      country = await selectedOption.innerText();
    } else {
      throw new Error('No country selected or element not found.');
    }
    console.log('Retrieved country:', country);
    return country.trim();
  }
// page.locator('#userCountry').selectOption('');


async unSelecttheCountryValue() {
    await this.userCountry.waitFor({ state: 'visible' });
    await this.userCountry.scrollIntoViewIfNeeded();
    await this.userCountry.selectOption('Choose Country*');
    
       } 
    
async clickPlaceOrderButton() {
 
  await this.placeorder.click();
  
   
    }

async validateProductUnavailableText() {
        try {
            await expect(this.productUnavailableText).toBeVisible({ timeout: 6000 });
            let text = await this.productUnavailableText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.productUnavailableText} not found or not visible: `, error);
            console.error(`Element ${this.productUnavailableText} not found or not visible: `, error);
        }
    }

  public async enterCorrectPaymentDetails(cardnumb: string, cardexp: string, cvc: string) {
  // Wait for the card number field to be attached to the DOM
  const cardNumberLocator = this.cardNumberFrame.locator(this.cardNumber);
  await cardNumberLocator.waitFor({ state: 'attached', timeout: 60000 });
  
  // Scroll into view if needed and interact with the card number field
  await cardNumberLocator.focus()
  await cardNumberLocator.scrollIntoViewIfNeeded();
  await cardNumberLocator.click();
  await cardNumberLocator.fill(cardnumb);

  // Wait for the card expiry field to be attached to the DOM
  const cardExpiryLocator = this.cardExpiryFrame.locator(this.cardExpiry);
  await cardExpiryLocator.waitFor({ state: 'attached', timeout: 60000 });
  
  // Scroll into view if needed and interact with the card expiry field
  await cardExpiryLocator.scrollIntoViewIfNeeded();
  await cardExpiryLocator.click();
  await cardExpiryLocator.fill(cardexp);

  // Wait for the card CVC field to be attached to the DOM
  const cardCvcLocator = this.cardCvcFrame.locator(this.cardCvc);
  await cardCvcLocator.waitFor({ state: 'attached', timeout: 60000 });
  
  // Scroll into view if needed and interact with the card CVC field
  await cardCvcLocator.scrollIntoViewIfNeeded();
  // await cardCvcLocator.clear();
  await cardCvcLocator.fill(cvc);
}

async selectCountrySpecificSubscription() {
   this.page.waitForTimeout(2000)
  await this.productPB1136RB.click();
  this.page.waitForTimeout(2000)
   
    }

async validateAutorenewCheckbox() {
    
    try {
      await expect(this.purchaserAutoRenewOption).toBeVisible({ timeout: 10000 });
      const isChecked = await this.purchaserAutoRenewOption.isChecked();
      return isChecked;
    } catch (error) {
      logger.info(`Element ${this.purchaserAutoRenewOption} not found or not visible: `, error);
      console.error(`Element ${this.purchaserAutoRenewOption} not found or not visible: `, error);
    }
   
    }

    async clickAutorenewCheckbox() {
    
    try {
      await expect(this.purchaserAutoRenewOption).toBeVisible({ timeout: 10000 });
      await this.purchaserAutoRenewOption.check();
     const isChecked = await this.purchaserAutoRenewOption.isChecked();
      return isChecked;
    } catch (error) {
      logger.info(`Element ${this.purchaserAutoRenewOption} not found or not visible: `, error);
      console.error(`Element ${this.purchaserAutoRenewOption} not found or not visible: `, error);
    }
   
    }

  async clickSelectButton() {
    
    try {
      await expect(this.selectButton).toBeVisible({ timeout: 10000 });
      await this.selectButton.click()
      } catch (error) {
      logger.info(`Element ${this.selectButton} not found or not visible: `, error);
      console.error(`Element ${this.selectButton} not found or not visible: `, error);
    }
   
    }

  // async clickThankYouButton() {
    
  //   try {
  //     await expect(this.noThankYouButton).toBeVisible({ timeout: 10000 });
  //     await this.noThankYouButton.scrollIntoViewIfNeeded();
  //     await this.noThankYouButton.focus();
  //     await this.noThankYouButton.click()
  //     } catch (error) {
  //     logger.info(`Element ${this.noThankYouButton} not found or not visible: `, error);
  //     console.error(`Element ${this.noThankYouButton} not found or not visible: `, error);
  //   }
   
  //   }


     async clickThankYouButton(): Promise<void> {
    try {
      // Ensure the element is visible within the timeout
      await expect(this.noThankYouButton).toBeVisible({ timeout: 10000 });

      // Optionally wait for the popup to be fully loaded and stable
      await this.page.waitForTimeout(500); // Adjust timeout if necessary

      // Scroll the element into view
      await this.noThankYouButton.scrollIntoViewIfNeeded();

      // Optionally, wait until the element is clickable
      await expect(this.noThankYouButton).toBeEnabled({ timeout: 10000 });

      // Focus on the element
      await this.noThankYouButton.focus();

      // Click the button
      await this.noThankYouButton.click();

      logger.info('Clicked the No Thanks button successfully');
      
    } catch (error) {
      logger.error(`Failed to click the No Thanks button: `, error);
      console.error(`Failed to click the No Thanks button: `, error);
    }
  }
  async validateTransactionSuccessfulMsg() {
    await this.transactionSuccessfulMsg.scrollIntoViewIfNeeded();
    await expect(this.transactionSuccessfulMsg).toBeVisible({ timeout: 60000 });
    const text = await this.transactionSuccessfulMsg.innerText();
    console.log('Transaction message text:', text); // Debugging statement
    return text.trim();
  }

  async fillMailingAndBillingAddress() {
        await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
        await this.userFirstNameValue.scrollIntoViewIfNeeded();
        await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
        await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
        await this.companyValue.fill('userCompanyName' + faker.company.name());
        await this.jobTitileValue.fill('Automation Engineer');
        await this.userAddress1Value.fill('11 Commerce Blvd');
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.userAddress2Value.fill('CourageCA1Gift32charsforT216Page');
        await this.userPhoneNumber.fill('1234567890');
        await this.userEmailValue.fill(faker.internet.exampleEmail());
    }

   async fillMailingAndBillingAddressCA() {
        await expect(this.userFirstNameValue).toBeVisible({ timeout: 60000 });
        await this.userFirstNameValue.scrollIntoViewIfNeeded();
        await this.userFirstNameValue.fill('userFirstName' + faker.person.firstName());
        await this.userLastNameValue.fill('userLastName' + faker.person.lastName());
        await this.companyValue.fill('userCompanyName' + faker.company.name());
        await this.jobTitileValue.fill('Automation Engineer');
        await this.userAddress1Value.fill('282 Dunview Ave');
        await this.userAddress2Value.fill('CourageCA1Gift32charsforT216Page');
        await this.userCountry.selectOption('CA');
        await this.userProvince.selectOption('ON');
        await this.userCityValue.fill('Toronto');
        await this.userPostalCodeValue.fill('M2N4J5');
        await this.userPhoneNumber.fill('1234567890');
        await this.userEmailValue.fill(faker.internet.exampleEmail());
    }
async fillMailingAddress() {
        await expect(this.mailingFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.mailingFirstNameTF.scrollIntoViewIfNeeded();
        await this.mailingFirstNameTF.fill('mailFirstName' + faker.person.firstName());
        await this.mailingLastNameTF.fill('mailLastName' + faker.person.lastName());
        await this.mailingCompanyNameTF.fill('mailCompanyName' + faker.company.name());
        await this.mailingJobTitleTF.fill('Data Scientist');
        await this.mailingAddressTF.fill('1400')
        await this.page.getByText('1400 Lubbock Street, Houston, TX, USA').click();
        await this.page.waitForTimeout(6000);
        await this.mailingAddress2TF.fill('CourageCA1Difa32charsforT216Page');
        await this.mailingPhoneNumberTF.fill('2345676903');
        await this.mailingEmailTF.fill(faker.internet.exampleEmail());
    }
    async validateUpgradeYourSubscriptionVisible(): Promise<boolean> {
    try {
      // Check if the element is not visible within the given timeout
      await expect(this.upgradeYourSubscriptionText).toBeVisible({ timeout: 10000 });
      return true;  // Element is hidden as expected
    } catch (error) {
       logger.info(`Element ${this.upgradeYourSubscriptionText} not visible or encountered an error:`, error);
      console.error(`Element ${this.upgradeYourSubscriptionText} not visible or encountered an error:`, error);
      return false;  // Return false if the element is not visible or an error occurred
    }
  }
  async validateCartSummaryUSDTxtValue() {

            await this.page.waitForSelector('//div[@class="sc-ckVGcZ gqdfJF"]', { timeout: 6000 });
            await expect(this.summaryUSDTxtValue).toBeVisible({ timeout: 6000 });

            // Fetch the text content
            const summaryUSDTxtValue = await this.summaryUSDTxtValue.textContent();
            console.log(`Summary USD Txt Value: ${summaryUSDTxtValue}`); // Debug output
            
            // Perform the assertion
            // Return the value for further use if necessary
            return summaryUSDTxtValue?.trim();

               }

     async validatetotalPriceatSuccessfulTransactionPage() {

            await expect(this.totalPriceatSuccessfulTransactionPage).toBeVisible({ timeout: 6000 });

            // Fetch the text content
            const totalPriceatSuccessfulTransactionPage = await this.totalPriceatSuccessfulTransactionPage.textContent();
            console.log(`Summary USD Txt Value: ${totalPriceatSuccessfulTransactionPage}`); // Debug output
            
            // Perform the assertion
            // Return the value for further use if necessary
            return totalPriceatSuccessfulTransactionPage?.trim();

               }

        async validatetotalPriceatDfMASuccessfulTransactionPage() {

            await expect(this.totalPriceatDfMASuccessfulTransactionPage).toBeVisible({ timeout: 6000 });

            // Fetch the text content
            const totalPriceatDfMASuccessfulTransactionPage = await this.totalPriceatDfMASuccessfulTransactionPage.textContent();
            console.log(`Summary USD Txt Value: ${totalPriceatDfMASuccessfulTransactionPage}`); // Debug output
            
            // Perform the assertion
            // Return the value for further use if necessary
            return totalPriceatDfMASuccessfulTransactionPage?.trim();

               }
     async checkMailingAddressDifferentCB() {
        await expect(this.mailingAddressDifferentCB).toBeVisible({ timeout: 60000 });
        await this.mailingAddressDifferentCB.check();
    }
    }

