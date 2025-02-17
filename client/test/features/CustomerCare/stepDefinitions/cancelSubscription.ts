import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { logger } from "../support/hook";

let expectedCancellationArray = [
  {
    itemName: 'Cancellation for transaction:',
    status: 'Expired',
    itemTotalPrice: '-15.73'
  }
]

When('Click on Cancel Subscription', async function () {
  this.landPage = this.pomManager.getLandingPage()
  await this.landPage.clickSearchButton();
  await this.landPage.clickCancelSubscription()
  logger.info('Clicked on Cancel Subscription');
})

When('Select the cancellation reason and mode of refund', async function () {
  this.cancelSubscriptionPage = this.pomManager.getCancelSusbscriptionPage()
  await this.page.waitForTimeout(10000)
  await this.cancelSubscriptionPage.selectChequeRefundMode()
  await this.cancelSubscriptionPage.selectCancellationReason();
  await this.cancelSubscriptionPage.fillCancellationDetailReason();
  await this.cancelSubscriptionPage.selectItemToCancel();
  await this.cancelSubscriptionPage.clickCancelSub()
  logger.info('Selected the cancellation reason and mode of refund');
})

Then('Click Exit button on Subscription Cancelled Confirmation', async function () {
  this.cancelSubscriptionPage = this.pomManager.getCancelSusbscriptionPage()
  expect(await this.landPage.getSubscriptionCancelledConfirmation()).toContain("Subscription Cancelled")
  await this.landPage.clickExitButtonOnSubscriptionCancelledConfirmation();
})

Then('Validate the Subscription should get cancelled',{ timeout: 600000 }, async function () {
  this.landPage = await this.pomManager.getLandingPage()
  let actualArray = await this.landPage.getPurchaseHistoryRowCount()
  for (let i = 0; i < expectedCancellationArray.length; i++) {
    if (actualArray[i].itemName.includes("Cancellation")) {
      expect( actualArray[i].itemName).toContain(expectedCancellationArray[i].itemName);
      expect( actualArray[i].itemTotalPrice).toContain(expectedCancellationArray[i].itemTotalPrice);
      expect( actualArray[i].status).toContain(expectedCancellationArray[i].status);
    }
  }
  logger.info('Subscription cancellation validated successfully');

})


