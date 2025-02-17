import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';


export class pastGiftRecipientsPage {
   page: Page;
   readonly noDataButton: Locator;
   readonly noGiftRecipientTXT: Locator;
   readonly downloadButton: Locator;
   readonly pastGiftRecipientsRows: Locator;

   constructor(page: Page) {
      this.page = page;
      this.noDataButton = page.locator("//button[text()='No Data']")
      this.noGiftRecipientTXT = page.getByText('No gift recipient data available.')
      this.downloadButton = page.locator("//button[text()='Download']")
      this.pastGiftRecipientsRows = page.locator("//div[@class='modal-body']/div[@class='table-responsive']/table/tbody/tr")
   }

   async validateNoDataButton() {
      try {
         await expect(this.noDataButton).toBeVisible({ timeout: 10000 });
         return this.noDataButton;
      } catch (error) {
         logger.info(`Element ${this.noDataButton} not found or not visible: `, error);
         console.error(`Element ${this.noDataButton} not found or not visible: `, error);
      }
   }

   async validateNoGiftRecipientTXT() {
      try {
         await expect(this.noGiftRecipientTXT).toBeVisible({ timeout: 30000 });
         let messageTXT = await this.noGiftRecipientTXT.textContent();
         return messageTXT;
      } catch (error) {
         logger.info(`Element ${this.noGiftRecipientTXT} not found or not visible: `, error);
         console.error(`Element ${this.noGiftRecipientTXT} not found or not visible: `, error);
      }
   }


   async clickDownloadButton() {
      try {
         const downloadPromise = this.page.waitForEvent('download');
         await expect(this.downloadButton).toBeVisible({ timeout: 40000 });
         await this.downloadButton.focus();
         await this.downloadButton.click({ force: true });
         const download = await downloadPromise;
         let path = download.suggestedFilename()
         console.log("path ************", path)
         await download.saveAs(path);
      } catch (error) {
         logger.info(`Element ${this.downloadButton} not found or not visible: `, error);
         console.error(`Element ${this.downloadButton} not found or not visible: `, error);
      }
   }

   async getPastGiftRecipientsRowCount() {
      try {
         let numberOfRows = await this.pastGiftRecipientsRows.count();
         return numberOfRows;
      } catch (error) {
         logger.info(`Element ${this.pastGiftRecipientsRows} not found or not visible: `, error);
         console.error(`Element ${this.pastGiftRecipientsRows} not found or not visible: `, error);
      }
   }



}