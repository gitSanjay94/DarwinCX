
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';
import { expect, FrameLocator, Locator, type Page } from '@playwright/test';



export class FSMSE_Courage02HCTYPCOrdersPage {
    page: Page;
    readonly userFirstNameTF: Locator;
    readonly userLastNameTF: Locator;
    readonly userCompanyNameTF: Locator;
    readonly userJobTitleTF: Locator;
    readonly userAddressTF: Locator;
    readonly userAddress2TF: Locator;
    readonly userCityTF: Locator;
    readonly userPhoneNumberTF: Locator;
    readonly userEmailTF: Locator;
    readonly userPostalCodeTF: Locator;
    readonly userProvinceDD: Locator;
    readonly userCountryDD: Locator;

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

    readonly isGiftCB: Locator;
    readonly mailingAddressDifferentCB: Locator;
    readonly placeOrderButton: Locator;
    readonly transactionSuccessfulTxt: Locator;
    readonly offerHasAllDeliveryTypesTxt: Locator;
    readonly perGiftTxt: Locator;
    readonly mailingAddressTxt: Locator;

    readonly cardNumber: Locator;
    readonly cardExpiry: Locator;
    readonly cardCvc: Locator;
    readonly cardNumberFrame: FrameLocator;
    readonly cardExpiryFrame: FrameLocator;
    readonly cardCvcFrame: FrameLocator;
    readonly taxValue: Locator;
    readonly totalAmountBeforeOrder: Locator;
    readonly totalAmountAfterOrder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userFirstNameTF = page.locator('#userFirstName')
        this.userLastNameTF = page.locator('#userLastName')
        this.userCompanyNameTF = page.locator('#userCompanyName')
        this.userJobTitleTF = page.locator('#userJobTitle')
        this.userAddressTF = page.locator('#userAddress')
        this.userAddress2TF = page.locator('#userAddress2')
        this.userCityTF = page.locator('#userCity')
        this.userPhoneNumberTF = page.locator('#userPhoneNumber')
        this.userEmailTF = page.locator('#userEmail')
        this.userPostalCodeTF = page.locator('#userPostalCode')
        this.userProvinceDD = page.locator("#userProvince")
        this.userCountryDD = page.locator("#userCountry")

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

        this.isGiftCB = page.locator('#isGift')
        this.mailingAddressDifferentCB = page.locator('#mailingAddressDifferent')
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
        this.transactionSuccessfulTxt = page.getByText('TRANSACTION SUCCESSFUL')
        this.offerHasAllDeliveryTypesTxt = page.getByText('Offer has all delivery types')
        this.perGiftTxt = page.getByText('Per Gift')
        this.mailingAddressTxt = page.locator("//div[text()='Mailing Address']")

        this.cardNumber = page.locator("//input[@id='Field-numberInput']");
        this.cardExpiry = page.locator("//input[@id='Field-expiryInput']");
        this.cardCvc = page.locator("//input[@id='Field-cvcInput']");
        this.cardNumberFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
        this.cardExpiryFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
        this.cardCvcFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");
        // this.taxValue = page.locator('//div[@class="sc-fYiAbW giVhEU"]/ancestor::div[@class="sc-dymIpo buHReu row"]//div[@class="text-right col"]/span');
         this.taxValue = page.locator("//span[@class='sc-eilVRo eZHCxJ' and text()='$70.00']");

        this.totalAmountBeforeOrder = page.locator("//div[text()='Total']/..")
        this.totalAmountAfterOrder = page.locator("//div[text()='Total Price']/..")
   
   
    }

    async enterPaymentDetails() {
        await expect(this.page.getByLabel('Credit Card')).toBeVisible({ timeout: 60000 });
        await this.page.getByLabel('Credit Card').check();
        await this.page.locator('.col-16 > div').click();
        await this.page.frameLocator('iframe[name="__privateStripeFrame2756"]').getByPlaceholder('Card number').click();
        await this.page.frameLocator('iframe[name="__privateStripeFrame2756"]').getByPlaceholder('Card number').fill('4242 4242 4242 4242');
        await this.page.frameLocator('iframe[name="__privateStripeFrame2756"]').getByPlaceholder('MM / YY').fill('12 / 24');
        await this.page.frameLocator('iframe[name="__privateStripeFrame2756"]').getByPlaceholder('CVC').fill('123');
    }

    async selectOffers() {
        await expect(this.page.locator('#PB-1189')).toBeVisible({ timeout: 60000 });
        await this.page.locator('#PB-1189').selectOption('0');
        await this.page.locator('#PB-1190').selectOption('30');
        await this.page.locator('#PB-1191').selectOption('65');
        await this.page.locator('#PB-1009').selectOption('100');
    }

    async fillGiftRecipientMailingAddress() {
        await expect(this.recipientFirstName1lTF).toBeVisible({ timeout: 60000 });
        await this.recipientFirstName1lTF.scrollIntoViewIfNeeded();
        await this.recipientFirstName1lTF.fill('recipientFirstName' + faker.person.firstName());
        await this.recipientLastName1TF.fill('recipientLastName' + faker.person.lastName());
        await this.recipientCompanyName1TF.fill('recipientCompanyName' + faker.company.name());
        await this.recipientJobTitle1TF.fill('Engineer');
        await this.recipientAddress1TF.fill('11 Commerce Blvd');
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.recipientAddress21TF.fill('45');
        await this.recipientPhoneNumber1TF.fill('1234567890');
        await this.recipientEmail1TF.fill(faker.internet.exampleEmail());
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
        await this.optionalLabelMessageTF.fill('Label: ' + faker.lorem.sentence());
    }


    async fillMailingAndBillingAddress() {
        await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.userFirstNameTF.scrollIntoViewIfNeeded();
        await this.userFirstNameTF.fill('userFirstName' + faker.person.firstName());
        await this.userLastNameTF.fill('userLastName' + faker.person.lastName());
        await this.userCompanyNameTF.fill('userCompanyName' + faker.company.name());
        await this.userJobTitleTF.fill('Doctor');
        await this.userAddressTF.fill('11 Commerce Blvd');
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.userAddress2TF.fill('45');
        await this.userPhoneNumberTF.fill('1234567890');
        await this.userEmailTF.fill(faker.internet.exampleEmail());
    }

    async fillMailingAddress() {
        await expect(this.mailingFirstNameTF).toBeVisible({ timeout: 60000 });
        await this.mailingFirstNameTF.scrollIntoViewIfNeeded();
        await this.mailingFirstNameTF.fill('mailFirstName' + faker.person.firstName());
        await this.mailingLastNameTF.fill('mailLastName' + faker.person.lastName());
        await this.mailingCompanyNameTF.fill('mailCompanyName' + faker.company.name());
        await this.mailingJobTitleTF.fill('Data Scientist');
        await this.mailingAddressTF.fill('11 Commerce Street')
        await this.page.getByText('11 Commerce Street, New York, NY, USA').click();
        await this.page.waitForTimeout(6000);
        await this.mailingAddress2TF.fill('69');
        await this.mailingPhoneNumberTF.fill('2345676903');
        await this.mailingEmailTF.fill(faker.internet.exampleEmail());
    }

    async clickPlaceOrderButton() {
        await expect(this.placeOrderButton).toBeVisible({ timeout: 60000 });
        await this.placeOrderButton.scrollIntoViewIfNeeded();
        await this.placeOrderButton.click();
    }

     async validateTaxValue() {
        await expect(this.taxValue).toBeVisible({ timeout: 60000 });
        let text = await this.taxValue.textContent();
        return text;
    }
     async validateAmountBeforeOrder() {
       try {
      let text = await this.totalAmountBeforeOrder.textContent();
      if (text === null) {
        console.warn('No text content found for the locator.');
        return null;
      }
      const numericValue = text.match(/[\d.]+/g);
      if (numericValue) {
        return parseFloat(numericValue.join(''));
      } else {
        console.warn('No numeric value found in the text:', text);
        return null;
      }
    } catch (error) {
      console.error('Error in totalAmount method:', error);
      throw error;
    }

        }

    async validateAmountAfterOrder() {
        try {
      let text = await this.totalAmountAfterOrder.textContent();
      if (text === null) {
        console.warn('No text content found for the locator.');
        return null;
      }
      const numericValue = text.match(/[\d.]+/g);
      if (numericValue) {
        return parseFloat(numericValue.join(''));
      } else {
        console.warn('No numeric value found in the text:', text);
        return null;
      }
    } catch (error) {
      console.error('Error in totalAmount method:', error);
      throw error;
    }

    }

    async validateTransactionSuccessfulTxt() {
        await expect(this.transactionSuccessfulTxt).toBeVisible({ timeout: 60000 });
        let text = await this.transactionSuccessfulTxt.textContent();
        return text;
    }

    async validateOfferHasAllDeliveryTypesTxt() {
        await expect(this.offerHasAllDeliveryTypesTxt).toBeVisible({ timeout: 60000 });
        let text = await this.offerHasAllDeliveryTypesTxt.textContent();
        return text;
    }

    async validatePerGiftTxt() {
        await expect(this.perGiftTxt).toBeVisible({ timeout: 60000 });
        let text = await this.perGiftTxt.textContent();
        return text;
    }

    async validateMailingAddressTxt() {
        await expect(this.mailingAddressTxt).toBeVisible({ timeout: 60000 });
        let text = await this.mailingAddressTxt.textContent();
        return text;
    }

    async checkThisIsAGiftCB() {
        await expect(this.isGiftCB).toBeVisible({ timeout: 60000 });
        await this.isGiftCB.check();
    }

    async checkMailingAddressDifferentCB() {
        await expect(this.mailingAddressDifferentCB).toBeVisible({ timeout: 60000 });
        await this.mailingAddressDifferentCB.check();
    }

 async enterCorrectPaymentDetails(cardnumb: string, cardexp: string, cvc: string) {
        // Wait for the card number field to be attached to the DOM
        const cardNumberLocator = this.cardNumberFrame.locator(this.cardNumber);
        await cardNumberLocator.waitFor({ state: 'attached', timeout: 60000 });
        await cardNumberLocator.focus()
        // Scroll into view if needed and interact with the card number field
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
        await cardCvcLocator.fill(cvc);
    }


}