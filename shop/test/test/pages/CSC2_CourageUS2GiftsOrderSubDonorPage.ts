import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class CSC2_CourageUS2GiftsOrderSubDonorPage {
 
  page: Page;
  readonly addGiftRecipientButton: Locator;
  readonly recipientFirstName2: Locator;
  readonly recipientLastName2: Locator;
  readonly recipientJobTitle2: Locator;
  readonly recipientCompanyName2: Locator;
  readonly recipientAddress21: Locator;
  readonly recipientAddress22: Locator;
  readonly recipientCity2: Locator;
  readonly recipientProvince2DD: Locator;
  readonly recipientPostalCode2: Locator;
  readonly recipientCountry2DD: Locator
  readonly recipientPhoneNumber2: Locator;
  readonly recipientEmail2: Locator;
  readonly recipientLabelMessage2: Locator;
  readonly recipient2Validation: Locator;
  readonly  donationSubscriptionRB: Locator;
  readonly totalPriceText: Locator;



 
  constructor(page: Page) {
        this.page = page;
        this.addGiftRecipientButton = page.getByRole('button', { name: 'Add Gift Recipient' })
        this.recipientFirstName2 = page.locator('#recipientFirstName2')
        this.recipientLastName2 = page.locator('#recipientLastName2')
        this.recipientJobTitle2 = page.locator('#recipientJobTitle2')
        this.recipientCompanyName2 = page.locator('#recipientCompanyName2')
        this.recipientAddress21 = page.locator('#recipientAddress2')
        this.recipientAddress22 = page.locator('#recipientAddress22')
        this.recipientCity2 = page.locator('#recipientCity2')
        this.recipientProvince2DD = page.locator('#recipientProvince2')
        this.recipientPostalCode2 = page.locator('#recipientPostalCode2')
        this.recipientCountry2DD = page.locator('#recipientCountry2')
        this.recipientPhoneNumber2 = page.locator('#recipientPhoneNumber2')
        this.recipientEmail2 = page.locator('#recipientEmail2')
        this.recipientLabelMessage2 = page.locator('#recipientLabelMessage2')
        this.recipient2Validation = page.getByText('Recipient #2:')
        this.donationSubscriptionRB   = page.getByLabel('Donation')
        this.totalPriceText = page.locator('text=Total Price: >> following-sibling::div');
       
  }


async clickdonationSubscriptionRB() {
 
 await this.page.waitForTimeout(8000);
  await this.donationSubscriptionRB.check();
  
   
    }
  
 async clickaddGiftRecipientButton() {
 
  await this.addGiftRecipientButton.click();
  
   
    }

async fillAddGiftRecipient2MailingAddress() {
        await expect(this.recipientFirstName2).toBeVisible({ timeout: 60000 });
        await this.recipientFirstName2.scrollIntoViewIfNeeded();
        await this.recipientFirstName2.fill('recipientFirstName' + faker.person.firstName());
        await this.recipientLastName2.fill('recipientLastName' + faker.person.lastName());
        await this.recipientCompanyName2.fill('recipientCompanyName' + faker.company.name());
        await this.recipientJobTitle2.fill('Playwright Automation Engineer');
        await this.recipientAddress21.fill('60 Furman St');
        await this.page.getByText('60 Furman Street, Schenectady, NY, USA').click();
        await this.page.waitForTimeout(6000);
        await this.recipientAddress22.fill('45');
        await this.recipientPhoneNumber2.fill('123456789550');
        await this.recipientEmail2.fill(faker.internet.exampleEmail());
    }

   async validateTranscationSuccessfulForRecipitent2() {
      
        try {
            await expect(this.recipient2Validation).toBeVisible({ timeout: 6000 });
            await this.recipient2Validation.scrollIntoViewIfNeeded();
            await this.recipient2Validation.focus();
            let text = await this.recipient2Validation.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.recipient2Validation} not found or not visible: `, error);
            console.error(`Element ${this.recipient2Validation} not found or not visible: `, error);
        }
    }

async validateTotalPriceValue() {
      
   await this.page.waitForSelector('div.total-price', { state: 'visible', timeout: 60000 });

    // Locate the total price element using XPath
    const totalPriceXPath = '//div[contains(text(), "Total Price:")]/following-sibling::div';
    const totalPriceElement = this.page.locator(totalPriceXPath);

    // Wait for the element to be visible
    await totalPriceElement.waitFor({ timeout: 60000 });

    // Optionally, focus on the element
    await totalPriceElement.focus();

    // Optionally, wait a short time to ensure the focus is applied
    await this.page.waitForTimeout(500); // 500ms delay

    // Get the text content of the total price element
    const priceText = await totalPriceElement.textContent();

    // Assert that the price text is exactly '$0.00'
    expect(priceText?.trim()).toBe('$0.00');

    

    }
      }
