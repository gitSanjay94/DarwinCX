import { expect, type Locator, type Page } from '@playwright/test';
import { PRODUCT_ZOOMER_MAGAZINE } from '../../src/constants';
import { faker } from '@faker-js/faker';
import { logger } from '../features/CustomerCare/support/hook';

export class enrollAutoRenewPage {
    page: Page;
    readonly enrollAutorenewTXT: Locator;
    readonly expiryRadioButton: Locator;
    readonly productDD: Locator;
    readonly productOfferRadioButton: Locator;
    readonly addSelfAsRecipientButton: Locator;
    readonly enterNewCreditCard: Locator;
    readonly activateButton: Locator;
    readonly marketingTXT: Locator;
    readonly addAnotherRecipientButton: Locator;
    readonly createRecipientButton: Locator;
    readonly recipientCountryNotAvailableTXT: Locator;
    readonly removeButton: Locator;
    readonly addGiftRecipientButton: Locator;
    readonly cancelCurrentAutorenewTXT: Locator;
    readonly activateCurrentAutorenewTXT: Locator;
    readonly autorenewInformationUpdatedMsg: Locator;
    readonly closeButton: Locator;
    readonly selfAutorenewAlreadyExists: Locator;
    readonly productName: Locator;
    readonly processStatus: Locator;
    readonly marketingCode: Locator;
    readonly bundlePrice: Locator;
    readonly itemTaxInSummary: Locator;
    readonly totalAmountInSummary: Locator;
    readonly recipientAlreadyAddedButton: Locator;
    readonly createRecipient: Locator;
    readonly recipientAlreadyAddedTxt: Locator;
    readonly cancelButton: Locator;
    readonly searchInput: Locator;
    readonly updatePaymentInfo: Locator;
    readonly paymentMethod: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly address2: Locator;
    readonly address3: Locator;
    readonly city: Locator;
    readonly provinceState: Locator;
    readonly postalCode: Locator;
    readonly country: Locator;
    readonly email: Locator;
    readonly updateButton: Locator;
    readonly creditCardHolder: Locator;
    readonly autorenewPaymentInformationUpdated: Locator;


    constructor(page: Page) {
        this.page = page;
        this.enrollAutorenewTXT = page.getByRole('heading', { name: 'Enroll Autorenew' })
        this.expiryRadioButton = page.locator("input[value='Expiry']")
        this.productDD = page.locator("//select[@id='product']")
        this.addSelfAsRecipientButton = page.getByText('Add Self as Recipient')
        this.addAnotherRecipientButton = page.getByText('Add Another Recipient')
        this.addGiftRecipientButton = page.getByText('Add Gift Recipient')
        this.createRecipientButton = page.locator('button').filter({ hasText: 'Create Recipient' })
        this.enterNewCreditCard = page.locator("input[name='Enter new credit card']")
        this.productOfferRadioButton = page.locator("input[value='PB-2352']")
        this.activateButton = page.getByText('Activate')
        this.marketingTXT = page.locator("//h5[text()='Marketing Code: ']")
        this.recipientCountryNotAvailableTXT = page.getByText("*Recipient's country is not available for select bundle")
        this.removeButton = page.locator("(//button[text()='Remove Recipient'])[1]")
        this.cancelCurrentAutorenewTXT = page.locator("//span[normalize-space()='Cancel Current Autorenew']")
        this.activateCurrentAutorenewTXT = page.locator("//span[normalize-space()='Activate Current Autorenew']")
        this.autorenewInformationUpdatedMsg = page.locator("//h6[normalize-space()='autorenew information updated!']")
        this.closeButton = page.getByText('Close')
        this.selfAutorenewAlreadyExists = page.locator("//button[text()='Self Autorenew already exists']")
        this.productName = page.locator("//p[contains(text(),'Product Name:')]")
        this.processStatus = page.locator("//p[contains(text(),'Process Status:')]")
        this.marketingCode = page.locator("//p[contains(text(),'Marketing Code:')]")
        this.bundlePrice = page.locator("//p[contains(text(),'Bundle Price: $')]")
        // this.itemTaxInSummary = page.locator("//div[@class='row']//div[@class='card-body']//div[1]//div[1]//div[1]//div[1]")
        this.itemTaxInSummary = page.locator("//div[@class='row']//div[@class='card-body']//div[1]//div[1]//div[1]//div[contains(text(),'Item tax')]")
        this.totalAmountInSummary = page.locator("//div[@class='card-body']//div[1]//div[1]//div[1]//p[2]")
        this.recipientAlreadyAddedButton = page.locator("//button[text()='Recipient Already Added']")
        this.createRecipient = page.locator("(//button[text()='Create Recipient'])[2]");
        this.recipientAlreadyAddedTxt = page.locator("//span[text()='Recipient Already Added']")
        this.cancelButton = page.locator("(//button[text()='Cancel'])[2]")
        this.searchInput = page.locator("//div[text()='Search Query']/parent::div/following-sibling::div/input")
        this.updatePaymentInfo = page.locator("//span[text()='Update Payment Info']")
        this.paymentMethod = page.locator("//select[@id='payment_method']")
        this.firstName = page.getByPlaceholder('First Name')
        this.lastName = page.getByPlaceholder('Last Name')
        this.address = page.locator("//input[@name='street_1']")
        this.address2 = page.getByPlaceholder('Address 2')
        this.address3 = page.getByPlaceholder('Address 3')
        this.city = page.getByPlaceholder('City')
        this.provinceState = page.getByPlaceholder('Province/State')
        this.postalCode = page.getByPlaceholder('Postal Code')
        this.country = page.getByPlaceholder('Country')
        this.email = page.getByPlaceholder('Email')
        this.updateButton = page.locator("//span[text()='Update']")
        this.creditCardHolder = page.locator("//p[text()='Credit Card Holder: ']")
        this.autorenewPaymentInformationUpdated = page.locator("//h6[text()='autorenew payment information updated!']")


    }

    async CheckExpiryRadioButton() {
        try {
            await expect(this.expiryRadioButton).toBeVisible({ timeout: 3000 });
            await this.expiryRadioButton.check()
        } catch (error) {
            logger.error(`Element ${this.expiryRadioButton} not found or not visible: `, error);
            console.error(`Element ${this.expiryRadioButton} not found or not visible: `, error);
        }
    }

    async fillEnrollAutorenewForm() {
        try {
            await expect(this.enrollAutorenewTXT).toBeVisible({ timeout: 3000 });
            await this.expiryRadioButton.check()
            await this.page.waitForTimeout(30000)
            await this.productDD.selectOption(PRODUCT_ZOOMER_MAGAZINE);
            await this.page.waitForTimeout(60000)
            await expect(this.productOfferRadioButton).toBeVisible({ timeout: 10000 });
            await this.productOfferRadioButton.check();
        } catch (error) {
            logger.error(`Element not found or not visible: `, error);
            console.error(`Element not found or not visible: `, error);
        }
    }

    async enrollAutorenewPopupAndAddSelfAsRecipient() {
        try {
            await this.fillEnrollAutorenewForm();
            await this.addSelfAsRecipientButton.click();
            await expect(this.recipientAlreadyAddedButton).toBeDisabled({ timeout: 10000 });
        } catch (error) {
            logger.error(`Element not found or not visible: `, error);
            console.error(`Element not found or not visible: `, error);
        }
    }

    async addAnotherRecipient() {
        try {
            await this.addAnotherRecipientButton.click();
            await this.createRecipient.click();
        } catch (error) {
            logger.error(`Element not found or not visible: `, error);
            console.error(`Element not found or not visible: `, error);
        }
    }
    
    async clickAddAnotherRecipient() {
        try {
            await this.addAnotherRecipientButton.click();
        } catch (error) {
            logger.error(`Element not found or not visible: `, error);
            console.error(`Element not found or not visible: `, error);
        }
    }

    async clickRemoveButton() {
        try {
            await expect(this.removeButton).toBeVisible({ timeout: 20000 });
            await this.removeButton.click();
        } catch (error) {
            logger.error(`Element ${this.removeButton} not found or not visible: `, error);
            console.error(`Element ${this.removeButton} not found or not visible: `, error);
        }
    }

    async clickEnterNewCreditCard() {
        try {
            await expect(this.enterNewCreditCard).toBeAttached({ timeout: 20000 });
            await expect(this.enterNewCreditCard).toBeVisible({ timeout: 20000 });
            await this.enterNewCreditCard.check();
        } catch (error) {
            logger.error(`Element ${this.enterNewCreditCard} not found or not visible: `, error);
            console.error(`Element ${this.enterNewCreditCard} not found or not visible: `, error);
        }
    }

    async clickActivateButton() {
        try {
            await expect(this.activateButton).toBeVisible({ timeout: 60000 });
            await this.activateButton.scrollIntoViewIfNeeded()
            await this.activateButton.click()
        } catch (error) {
            logger.error(`Element ${this.activateButton} not found or not visible: `, error);
            console.error(`Element ${this.activateButton} not found or not visible: `, error);
        }
    }

    async enrollAutorenewPopupAndAddAnotherRecipient() {
        await this.enrollAutorenewPopupAndAddSelfAsRecipient();
        await this.addAnotherRecipient();
    }

    async enrollAutorenewPopupAndAddGiftRecipient() {
        try {
            // await this.fillEnrollAutorenewForm();

            await expect(this.addAnotherRecipientButton).toBeVisible({ timeout: 10000 });
            await this.addAnotherRecipientButton.click();
            // await expect(this.addGiftRecipientButton).toBeVisible({ timeout: 10000 });
            // await this.addGiftRecipientButton.click();
        } catch (error) {
            logger.error(`Element ${this.addGiftRecipientButton} not found or not visible: `, error);
            console.error(`Element ${this.addGiftRecipientButton} not found or not visible: `, error);
        }
    }

    async recipientCountryNotAvailableWarnMessage(): Promise<string | null> {
        try {
            await expect(this.recipientCountryNotAvailableTXT).toBeVisible({ timeout: 60000 });
            await this.recipientCountryNotAvailableTXT.scrollIntoViewIfNeeded();
            return await this.recipientCountryNotAvailableTXT.textContent();
        } catch (error) {
            logger.error(`Element ${this.recipientCountryNotAvailableTXT} not found or not visible: `, error);
            console.error(`Element ${this.recipientCountryNotAvailableTXT} not found or not visible: `, error);
            return null;
        }
    }

    async cancelCurrentAutorenew() {
        try {
            await expect(this.cancelCurrentAutorenewTXT).toBeVisible({ timeout: 10000 });
            await this.cancelCurrentAutorenewTXT.click();
            await expect(this.autorenewInformationUpdatedMsg).toBeVisible({ timeout: 10000 });
            await expect(this.activateCurrentAutorenewTXT).toBeVisible({ timeout: 60000 });
        } catch (error) {
            logger.error(`Element not found or not visible: `, error);
            console.error(`Element not found or not visible: `, error);
        }
    }

    async activateCurrentAutorenew() {
        try {
            await expect(this.activateCurrentAutorenewTXT).toBeVisible({ timeout: 10000 });
            await this.activateCurrentAutorenewTXT.click();
            await expect(this.autorenewInformationUpdatedMsg).toBeVisible({ timeout: 10000 });
            await expect(this.cancelCurrentAutorenewTXT).toBeVisible({ timeout: 60000 });
        } catch (error) {
            logger.error(`Element not found or not visible: `, error);
            console.error(`Element not found or not visible: `, error);
        }
    }

    async selfAutorenewAlreadyExistsButton(): Promise<string | null> {
        try {
            await this.selfAutorenewAlreadyExists.scrollIntoViewIfNeeded();
            await expect(this.selfAutorenewAlreadyExists).toBeVisible({ timeout: 60000 });
            return await this.selfAutorenewAlreadyExists.textContent();
        } catch (error) {
            logger.error(`Element ${this.selfAutorenewAlreadyExists} not found or not visible: `, error);
            console.error(`Element ${this.selfAutorenewAlreadyExists} not found or not visible: `, error);
            return null;
        }
    }

    async productNameInAutorenewDetailsPopup(): Promise<string | null> {
        try {
            await expect(this.productName).toBeVisible({ timeout: 60000 });
            await this.productName.scrollIntoViewIfNeeded();
            return await this.productName.textContent();
        } catch (error) {
            logger.error(`Element ${this.productName} not found or not visible: `, error);
            console.error(`Element ${this.productName} not found or not visible: `, error);
            return null;
        }
    }

    async processStatusInAutorenewDetailsPopup(): Promise<string | null> {
        try {
            await expect(this.processStatus).toBeVisible({ timeout: 60000 });
            await this.processStatus.scrollIntoViewIfNeeded();
            return await this.processStatus.textContent();
        } catch (error) {
            logger.error(`Element ${this.processStatus} not found or not visible: `, error);
            console.error(`Element ${this.processStatus} not found or not visible: `, error);
            return null;
        }
    }

    async marketingCodeInAutorenewDetailsPopup(): Promise<string | null> {
        try {
            await expect(this.marketingCode).toBeVisible({ timeout: 60000 });
            await this.marketingCode.scrollIntoViewIfNeeded();
            return await this.marketingCode.textContent();
        }
        catch (error) {
            logger.error(`Element ${this.marketingCode} not found or not visible: `, error);
            console.error(`Element ${this.marketingCode} not found or not visible: `, error);
            return null;
        }
    }

    async bundlePriceInAutorenewDetailsPopup(): Promise<string | null> {
        try {
            await expect(this.bundlePrice).toBeVisible({ timeout: 60000 });
            await this.page.waitForTimeout(20000)
            await this.bundlePrice.scrollIntoViewIfNeeded();
            return await this.bundlePrice.textContent();
        } catch (error) {
            logger.error(`Element ${this.bundlePrice} not found or not visible: `, error);
            console.error(`Element ${this.bundlePrice} not found or not visible: `, error);
            return null;
        }
    }

    async getTotalAmountInSummary() {
        try {
            await expect(this.totalAmountInSummary).toBeVisible({ timeout: 60000 });
            await this.totalAmountInSummary.scrollIntoViewIfNeeded();
            return await this.totalAmountInSummary.textContent();
        } catch (error) {
            logger.error(`Element ${this.totalAmountInSummary} not found or not visible: `, error);
            console.error(`Element ${this.totalAmountInSummary} not found or not visible: `, error);
        }
    }

    async getItemTaxInSummary() {
        try {
            await expect(this.itemTaxInSummary).toBeVisible({ timeout: 60000 });
            await this.itemTaxInSummary.scrollIntoViewIfNeeded();
            return await this.itemTaxInSummary.textContent();
        } catch (error) {
            logger.error(`Element ${this.itemTaxInSummary} not found or not visible: `, error);
            console.error(`Element ${this.itemTaxInSummary} not found or not visible: `, error);
        }
    }

    async clickCloseInAutorenewDetailsPopup() {
        try {
            await expect(this.closeButton).toBeVisible({ timeout: 10000 });
            await this.closeButton.click();
        } catch (error) {
            logger.error(`Element ${this.closeButton} not found or not visible: `, error);
            console.error(`Element ${this.closeButton} not found or not visible: `, error);
        }
    }

    async clickCreateRecipientButton() {
        try {
            await expect(this.createRecipient).toBeVisible({ timeout: 60000 });
            await this.createRecipient.click();
        } catch (error) {
            logger.error(`Element ${this.createRecipient} not found or not visible: `, error);
            console.error(`Element ${this.createRecipient} not found or not visible: `, error);
        }
    }

    async validateRecipientAlreadyAddedTxt() {
        await expect(this.recipientAlreadyAddedTxt).toBeVisible({ timeout: 60000 });
        await this.recipientAlreadyAddedTxt.scrollIntoViewIfNeeded();
        return await this.recipientAlreadyAddedTxt.textContent();
    }

    async clickCancelButton() {
        await expect(this.cancelButton).toBeVisible({ timeout: 60000 });
        await this.cancelButton.scrollIntoViewIfNeeded();
        await this.cancelButton.click();
    }

    async searchRecipient(recepientToSearch: string) {
        // await this.page.getByRole('button', { name: 'Find Recipient' }).nth(1).click();
        // await this.searchInput.fill(recepientToSearch);
        // await this.page.keyboard.press('Tab')
        // await this.page.waitForTimeout(5000)
        // await this.page.locator("(//button[text()='Search'])[2]").focus()
        // await this.page.locator("(//button[text()='Search'])[2]").click({ timeout: 20000 });
        // await this.page.waitForTimeout(10000)
        // await this.page.locator("(//button[text()='Search'])[2]").dblclick({ timeout: 20000 });
        // await this.page.waitForTimeout(10000)
await expect(this.page.getByRole('button', { name: 'Find Recipient' }).nth(1)).toBeVisible({ timeout: 60000 });
         await this.page.getByRole('button', { name: 'Find Recipient' }).nth(1).click();
         await this.page.keyboard.press('Tab')
        await this.page.waitForTimeout(5000)
  await this.page.locator('div').filter({ hasText: /^Search QuerySearch$/ }).getByRole('textbox').click();
  await this.page.locator('div').filter({ hasText: /^Search QuerySearch$/ }).getByRole('textbox').fill(recepientToSearch);
  await this.page.locator('div').filter({ hasText: /^Search QuerySearch$/ }).getByRole('button').click();
    }

    //Methods of Update Autorenew Billing
    async clickUpdatePaymentInfo() {
        await expect(this.updatePaymentInfo).toBeVisible({ timeout: 60000 });
        return await this.updatePaymentInfo.click();
    }
    
    async clickPaymentMethod() {
        await expect(this.paymentMethod).toBeVisible({ timeout: 60000 });
        await this.paymentMethod.click();
        await this.page.waitForTimeout(1000);
        await this.page.selectOption('#payment_method', { label: 'Credit Card' });
        await this.page.waitForTimeout(1000);
    }

    async fillBillingInformation(firstNameForBillingInfo: string, lastNameForBillingInfo: string) {
        await expect(this.firstName).toBeVisible();
        await this.firstName.fill(firstNameForBillingInfo);
        await expect(this.lastName).toBeVisible();
        await this.lastName.fill(lastNameForBillingInfo);
        await expect(this.address).toBeVisible({ timeout: 20000 });
        await this.address.fill(faker.location.buildingNumber())
        await expect(this.address2).toBeVisible();
        await this.address2.fill(faker.location.direction())
        await expect(this.address3).toBeVisible();
        await this.address3.fill(faker.location.cardinalDirection())
        await expect(this.city).toBeVisible();
        await this.city.fill(faker.location.city())
        await expect(this.provinceState).toBeVisible();
        await this.provinceState.fill('On');
        await expect(this.postalCode).toBeVisible();
        await this.postalCode.fill('K0A 0A2');
        await expect(this.country).toBeVisible();
        await this.country.fill('Ca')
        await expect(this.email).toBeVisible();
        await this.email.fill(faker.internet.exampleEmail())
        await this.updateButton.click();
    }

    async validateCreditCardHolder(): Promise<string | null> {
        try {
            await expect(this.creditCardHolder).toBeVisible({ timeout: 60000 });
            return await this.creditCardHolder.textContent();
        } catch (error) {
            logger.error(`Element ${this.creditCardHolder} not found or not visible: `, error);
            console.error(`Element ${this.creditCardHolder} not found or not visible: `, error);
            return null;
        }
    }

    async validateAutorenewPaymentInformationUpdated() {
        try {
            await expect(this.autorenewPaymentInformationUpdated).toBeVisible({ timeout: 60000 });
            return await this.autorenewPaymentInformationUpdated.textContent();
        } catch (error) {
            logger.error(`Element ${this.autorenewPaymentInformationUpdated} not found or not visible: `, error);
            console.error(`Element ${this.autorenewPaymentInformationUpdated} not found or not visible: `, error);
            return null;
        }
    }
}