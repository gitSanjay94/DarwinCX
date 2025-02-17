import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';


export class didNotReceiveProductPage {
    page: Page;
    readonly productNotFulfilledTXT: Locator;
    readonly sendButton: Locator;
    readonly reasonDetail: Locator;
    readonly selectCARPCardDelivery: Locator;
    readonly productQtyDD: Locator;
    readonly reasonDD: Locator;
    readonly selectReasonOption: Locator;
    readonly selectCARPCardDeliverySubOffer: Locator;
    readonly pleaseSelectAnOfferButton: Locator;
    readonly pleaseSelectProductButton: Locator;
    readonly errorMessage: Locator;
    readonly principalAmt: Locator;
    readonly taxAmt: Locator;
    readonly totalAmt: Locator;
    readonly selectNoChargeSubOffer: Locator;
    readonly productOfferWithAmount: Locator;



    constructor(page: Page) {
        this.page = page;
        this.productNotFulfilledTXT = page.getByRole('heading', { name: 'Product Not Fulfilled' })
        this.sendButton = page.getByRole('button', { name: 'Send' })
        this.reasonDetail = page.locator("[name='reasonDetail']")
       this.selectCARPCardDelivery = page.locator("//div[@role='dialog']//div[@class='row']//div[@class='card-body']//div[1]//button[1]")
        this.selectCARPCardDeliverySubOffer = page.locator("//input[(contains(@value,'Customer Service CARP Card Delivery for'))]")
        this.productQtyDD = page.locator("//select[@name='copies']")
        this.reasonDD = page.locator("//button[@class='bg-white btn btn-secondary']");
        this.selectReasonOption = page.locator("//button[text()='did not receive issue/card']")
        this.pleaseSelectAnOfferButton = page.getByRole('button', { name: 'Please select an offer' })
        this.pleaseSelectProductButton = page.getByRole('button', { name: 'Please select a product and enter payment information.' })
        this.errorMessage = page.getByText("*Couldn't find a valid transaction includes all brands in selected bundle")
        this.principalAmt = page.locator("//div[text()='Customer Service CARP Card Delivery']/following-sibling::div")
        this.taxAmt = page.locator("//div[text()='Tax']/following-sibling::div")
        this.totalAmt = page.locator("//div[text()='Total:']/following-sibling::div")
        this.selectNoChargeSubOffer = page.locator("//input[@value='Customer Service CARP Card Delivery - No Charge for Card']")
        this.productOfferWithAmount = page.locator('div').filter({ hasText: /^Customer Service CARP Card Delivery for \$5\.00CARP Card \$5\.00 Charge$/ }).getByRole('radio')



    }

    async validatePleaseSelectAnOfferButton(): Promise<string | null> {
        await expect(this.productNotFulfilledTXT).toBeVisible({ timeout: 10000 });
        await expect(this.pleaseSelectAnOfferButton).toBeVisible({ timeout: 10000 });
        return await this.pleaseSelectAnOfferButton.textContent();
    }

    async validatePleaseSelectProductButton(): Promise<string | null> {
        await expect(this.pleaseSelectProductButton).toBeVisible({ timeout: 10000 });
        return await this.pleaseSelectProductButton.textContent();
    }


    async selectProductOffer() {
        try {
            await expect(this.productNotFulfilledTXT).toBeVisible({ timeout: 10000 });
            await this.selectCARPCardDelivery.waitFor({ state: 'attached', timeout: 20000 })
            await expect(this.selectCARPCardDelivery).toBeEnabled({ timeout: 50000 })
            await this.selectCARPCardDelivery.focus()
            await this.selectCARPCardDelivery.hover()
            await this.selectCARPCardDelivery.click()
            await this.selectCARPCardDelivery.dblclick({ timeout: 30000 })
        } catch (error) {
            logger.info(`An error occurred while selecting the product offer:${this.selectCARPCardDelivery}`, error)
            console.error(`An error occurred while selecting the product offer:${this.selectCARPCardDelivery}`, error);
        }
    }

    async selectProductOfferForChargeGreaterThanZero() {
        try {
            await this.selectProductOffer()
            await this.page.waitForTimeout(2000)
            await this.productOfferWithAmount.check({ timeout: 60000 })
        }
        catch (error) {
            logger.info('An Error occurred selecting product offer for charge greater than zero:', error)
            console.error('An Error occurred selecting product offer for charge greater than zero:', error);
        }
    }

    async selectProductOfferForChargeZero() {
        try {
            await this.selectProductOffer()
            await this.selectNoChargeSubOffer.waitFor({ state: 'attached', timeout: 30000 })
            await expect(this.selectNoChargeSubOffer).toBeVisible({ timeout: 20000 });
            await this.selectNoChargeSubOffer.click();
        }
        catch (error) {
            logger.info(`An Error occurred selecting product offer for charge zero ${this.selectNoChargeSubOffer}:`, error)
            console.error(`An Error occurred selecting product offer for charge zero ${this.selectNoChargeSubOffer}:`, error);
        }
    }

    async clickSendButton() {
        await expect(this.sendButton).toBeVisible({ timeout: 10000 });
        await this.sendButton.click();
    }


    async selectProductQty(quantity: string) {
        try {
            await expect(this.productQtyDD).toBeVisible({ timeout: 10000 });
            await this.productQtyDD.selectOption(quantity);
            await this.page.waitForTimeout(60000);
        } catch (error) {
            logger.info(`Element ${this.productQtyDD} not found or not visible: `, error)
            console.error(`Element ${this.productQtyDD} not found or not visible: `, error);
        }
    }

    async selectReason() {
        await expect(this.reasonDD).toBeVisible({ timeout: 10000 });
        await this.reasonDD.click();
        await expect(this.selectReasonOption).toBeVisible({ timeout: 10000 });
        await this.selectReasonOption.click();
        await this.reasonDetail.scrollIntoViewIfNeeded()
        await this.reasonDetail.fill('did not receive');
    }


    async validateWarningMsg(): Promise<string | null> {
        await expect(this.errorMessage).toBeVisible({ timeout: 30000 });
        await this.errorMessage.scrollIntoViewIfNeeded();
        return await this.errorMessage.textContent();
    }

    async getSummaryTotal(): Promise<number> {
        let totalText = await this.totalAmt.textContent();
        if (totalText === null) {
            throw new Error("Total text is null or undefined. Unable to retrieve total amount.");
        }
        let total = parseFloat(totalText.trim().replace('$', ''));
        if (isNaN(total)) {
            throw new Error("Unable to parse total amount as a valid number.");
        } else {
            return total;
        }
    }


    async getSumAmount(): Promise<number> {
        let principalText = await this.principalAmt.textContent();
        let taxText = await this.taxAmt.textContent();
        if (principalText === null || taxText === null) {
            throw new Error("Principal or tax text is null or undefined. Unable to validate amount.");
        }
        let principal = parseFloat(principalText.trim().replace('$', ''));
        let tax = parseFloat(taxText.trim().replace('$', ''));
        if (isNaN(principal) || isNaN(tax)) {
            throw new Error("Unable to parse principal or tax amount as valid numbers.");
        }
        let sum = principal + tax;
        return sum;
    }

}