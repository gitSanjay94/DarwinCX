import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class CCB_CourageCAOrderMasterCCPage {
 
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
  readonly recipientFirstName1lTF: Locator;
  readonly recipientLastName1TF: Locator;
  readonly recipientJobTitle1TF: Locator;
  readonly recipientCompanyName1TF: Locator;
  readonly recipientAddress1TF: Locator;
  readonly recipientAddress21TF: Locator;
  readonly recipientCity1TF: Locator;
  readonly recipientProvince1DD: Locator;
  readonly recipientPostalCode1TF: Locator;
  readonly recipientCountry1DD: Locator;
  readonly recipientPhoneNumber1TF: Locator;
  readonly recipientEmail1TF: Locator;
  readonly optionalLabelMessageTF: Locator;
  readonly emailContent: Locator;
 




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
    this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail"]')
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

    this.recipientFirstName1lTF = page.locator('#recipientFirstName1')
    this.recipientLastName1TF = page.locator('#recipientLastName1')
    this.recipientJobTitle1TF = page.locator('#recipientJobTitle1')
    this.recipientCompanyName1TF = page.locator('#recipientCompanyName1')
    this.recipientAddress1TF = page.locator('#recipientAddress1')
    this.recipientAddress21TF = page.locator('#recipientAddress21')
    this.recipientCity1TF = page.locator('#recipientCity1')
    this.recipientProvince1DD = page.locator('#recipientProvince1')
    this.recipientPostalCode1TF = page.locator('#recipientPostalCode1')
    this.recipientCountry1DD = page.locator('#recipientCountry1')
    this.recipientPhoneNumber1TF = page.locator('#recipientPhoneNumber1')
    this.recipientEmail1TF = page.locator('#recipientEmail1')
    this.optionalLabelMessageTF = page.locator('#recipientLabelMessage1')
    this.emailContent =  page.frameLocator('iframe[name="html_msg_body"]').locator('text=Markup').first();

    
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
        const generatedEmail = 'testemailaddress' + faker.number.int({ min: 1, max: 100 }).toString() + '@mailinator.com';
        await this.userEmailValue.fill(generatedEmail);
        await this.userEmailValue.selectText();  // Select the text inside the input
          await this.page.keyboard.press('Control+C')
         return generatedEmail;

    }


    async verifyEmailSentToSender(generatedEmail: string) {
        try {

            // Generate the email address using faker
                       // Open Mailinator's website
            await this.page.goto('https://www.mailinator.com');

            // Wait for the search bar to be visible and search for the copied email address
            await expect(this.page.locator("//input[@id='search']")).toBeVisible(); // You might need to inspect the selector based on Mailinator's DOM
           await this.page.locator("//input[@id='search']").click();
           await this.page.keyboard.press('Control+V')
            // await this.page.locator("//input[@id='search']").fill(generatedEmail);  // Fill the copied email into the search field
            await this.page.locator("//button[@value='Search for public inbox for free' and text()='GO']").click();  // Click the search button (inspect if the button has a different selector)

            // Optionally, wait for the results to load
            await this.page.getByRole('cell', { name: 'Thank you for subscription' }).click();

            await this.page.locator('#email_pane').getByText('From', { exact: true }).click();
            await this.page.getByText('noreply@darwin.cx', { exact: true }).click();
            const emailLocator = this.page.locator('text=noreply@darwin.cx');
            const emailText = await emailLocator.textContent();
            console.log(emailText);  // Check the actual content
            await expect(emailLocator).toBeVisible()

            return generatedEmail;


        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
            console.error(`Element not found or not visible: `, error);
        }
    }

async fillGiftRecipientMailingAddressCA() {
        await expect(this.recipientFirstName1lTF).toBeVisible({ timeout: 60000 });
        await this.recipientFirstName1lTF.scrollIntoViewIfNeeded();
        await this.recipientFirstName1lTF.fill('recipientFirstName' + faker.person.firstName());
        await this.recipientLastName1TF.fill('recipientLastName' + faker.person.lastName());
        await this.recipientCompanyName1TF.fill('recipientCompanyName' + faker.company.name());
        await this.recipientJobTitle1TF.fill('Engineer');
        await this.recipientAddress1TF.fill('12 York St');
        await this.page.getByText('12 York Street, Toronto, ON, Canada').click();
        await this.page.waitForTimeout(6000);
        await this.recipientAddress21TF.fill('45');
        await this.recipientPhoneNumber1TF.fill('1234567890');
        await this.recipientEmail1TF.fill(faker.internet.exampleEmail());
    }

    async validateEmailContentText() {
        await expect(this.emailContent).toBeVisible({ timeout: 4000 })
        let text = await this.emailContent.textContent();
        text = text?.trim() || '';
        return text;
    }
    }

