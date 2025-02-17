import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'


When('User give free extension without selecting any mandatory field', async function () {
   this.giveFreeExtensionPage = this.pomManager.getGiveFreeExtensionPage()
   await this.giveFreeExtensionPage.giveFreeExtensionWithoutSelection();
   logger.info('Gave free extension without selecting any mandatory field');
});


Then('Validate Warning message should display "Virtual item not found."', async function () {
   let messageTXT = await this.landPage.validateVirtualItemNotFoundMessage();
   expect(await messageTXT).toContain('Virtual item not found.')
   logger.info('Virtual item not found. message successfully validated')
});


When('User selects all mandatory fields in Complimentary Extension popup', async function () {
   this.giveFreeExtensionPage = this.pomManager.getGiveFreeExtensionPage()
   this.landPage = this.pomManager.getLandingPage()
   await this.giveFreeExtensionPage.createCustomExtension()
   logger.info('Selected all mandatory fields in Complimentary Extension popup');
});


Then('Validate the transacation details under the Action Tab', async function () {
   await this.page.waitForTimeout(60000)
   await this.landPage.selectActionTab()
   await this.page.waitForTimeout(20000)
   expect(await this.landPage.getActionsDetails()).toContain('Given free extension')
   logger.info('Transaction Details in Actions Tab is successfully validated')
});

Then('Validate the transacation details under the Purchase History Section', async function () {
   let actualArray = await this.landPage.getPurchaseHistoryRowCount();
   for (let i = 0; i < actualArray.length; i++) {
      if (actualArray[i].itemName === "Free Extension") {
         expect(actualArray[i].itemName).toContain('Purchase - extension');
      }
   }
   logger.info('Validated the transaction details under the Purchase History Section');
});


Then('Refresh the Landing page', async function () {
   await this.page.waitForTimeout(60000)
   await this.landPage.clickSearchButton()
   await this.page.waitForTimeout(50000)
   logger.info('Refreshed the Landing page');
});


When('Click  on give free extension option', async function () {
   await this.page.waitForTimeout(10000);
   await this.landPage.clickFreeExtensionButton();
   logger.info('Clicked on give free extension option');
});



When('User extend Active Subscriptions in Complimentary Extension popup', async function () {
   this.giveFreeExtensionPage = this.pomManager.getGiveFreeExtensionPage()
   await this.page.waitForTimeout(10000);
   await this.giveFreeExtensionPage.extendActiveSubscription();
   logger.info('Extended active subscriptions in Complimentary Extension popup');
});

When('User extend Previous Subscriptions in Complimentary Extension popup', async function () {
   this.giveFreeExtensionPage = this.pomManager.getGiveFreeExtensionPage()
   await this.page.waitForTimeout(10000);
   await this.giveFreeExtensionPage.extendPreviousSubscription();
   logger.info('Extended previous subscriptions in Complimentary Extension popup');
});

Then('Confirm Cancellation by clicking on Exit button in Subscription Cancelled popup', async function () {
   expect(await this.landPage.getSubscriptionCancelledConfirmation()).toContain("Subscription Cancelled")
   await this.landPage.clickExitButtonOnSubscriptionCancelledConfirmation();
   logger.info('Clicked on Exit button in Subscription Cancelled popup to confirm cancellation');
})

