import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';



export class FSMSE_Courage02HMTYPCOrdersPage {
   page: Page;
   readonly oneYearPrintCB: Locator;
   readonly oneYearDigital: Locator;
   readonly oneYearPrintAndDigital: Locator;
   readonly courageCalendar: Locator;
   readonly taxValue: Locator;
   readonly totalAmountBeforeOrder: Locator;
   readonly totalAmountAfterOrder: Locator;

   constructor(page: Page) {
      this.page = page;
      this.oneYearPrintCB = page.locator("//*[@id='PB-1189']")
      this.oneYearDigital = page.locator("//*[@id='PB-1190']")
      this.oneYearPrintAndDigital = page.locator("//*[@id='PB-1191']")
      this.courageCalendar = page.locator("//*[@id='PB-1009']")
      // this.taxValue = page.locator('//div[@class="sc-fYiAbW giVhEU"]/ancestor::div[@class="sc-dymIpo buHReu row"]//div[@class="text-right col"]/span');
     
     this.taxValue = page.locator("//span[@class='sc-eilVRo eZHCxJ' and text()='$0.70']");
      this.totalAmountBeforeOrder = page.locator("//div[text()='Total']/..")
      this.totalAmountAfterOrder = page.locator("//div[text()='Total Price']/..")

   }

   async checkOneYearPrintCB() {
      await expect(this.oneYearPrintCB).toBeVisible({ timeout: 60000 });
      await this.oneYearPrintCB.check();
   }

   async checkOneYearDigitalCB() {
      await expect(this.oneYearDigital).toBeVisible({ timeout: 60000 });
      await this.oneYearDigital.check();
   }

   async checkOneYearPrintAndDigitalCB() {
      await expect(this.oneYearPrintAndDigital).toBeVisible({ timeout: 60000 });
      await this.oneYearPrintAndDigital.check();
   }

   async checkCourageCalendar() {
      await expect(this.courageCalendar).toBeVisible({ timeout: 60000 });
      await this.courageCalendar.check();
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
}