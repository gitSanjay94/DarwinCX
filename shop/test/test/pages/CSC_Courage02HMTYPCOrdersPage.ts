import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';



export class CSC_Courage02HMTYPCOrdersPage {
   page: Page;
   readonly oneYearPrintCB: Locator;
   readonly oneYearDigital: Locator;
   readonly oneYearPrintAndDigital: Locator;
   readonly courageCalendar: Locator;

   constructor(page: Page) {
      this.page = page;
      this.oneYearPrintCB = page.locator("//*[@id='PB-1189']")
      this.oneYearDigital = page.locator("//*[@id='PB-1190']")
      this.oneYearPrintAndDigital = page.locator("//*[@id='PB-1191']")
      this.courageCalendar = page.locator("//*[@id='PB-1009']")



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
}