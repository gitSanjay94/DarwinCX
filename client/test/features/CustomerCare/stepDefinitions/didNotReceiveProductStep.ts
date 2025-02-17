import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

import { AGENTNNAME, REFULFILLED_CUSTOMER_SERVICE_TXT } from '../../../../src/constants';

let expectedProductNotReceivedArray = [
    {
        itemName: 'Purchase - refulfillment'
    }
]

When('Click on Did Not Receive Product', async function () {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.clickDidNotReceiveProductButton();
    logger.info('Clicked on "Did Not Receive Product" button');
});


When('Select product offer with payment charge greater than Zero', async function () {
    this.didNotReceiveProductPage = this.pomManager.getDidNotReceiveProductPage()
    await this.didNotReceiveProductPage.selectProductOfferForChargeGreaterThanZero();
    logger.info('Selected product offer with payment charge greater than Zero');
});

When('Select product offer with payment charge equal to Zero', async function () {
    this.didNotReceiveProductPage = this.pomManager.getDidNotReceiveProductPage()
    await this.didNotReceiveProductPage.selectProductOfferForChargeZero();
    logger.info('Selected product offer with payment charge equal to Zero');
});

When('Select Reason for not receiving product', async function () {
    await this.didNotReceiveProductPage.selectReason();
    logger.info('Selected reason for not receiving product');
});

Then('Validate Please Select an Offer button when product offer is not selected in Product Not Fulfilled popup', async function () {
    this.didNotReceiveProductPage = this.pomManager.getDidNotReceiveProductPage()
    let buttonTXT = await this.didNotReceiveProductPage.validatePleaseSelectAnOfferButton();
    expect(buttonTXT).toContain("Please select an offer");
    logger.info('"Please Select an Offer" button when product offer is not selected  is successfully validated')
});

Then('Validate Please Select Product button when product offer is not selected in Product Not Fulfilled popup', async function () {
    let buttonTXT = await this.didNotReceiveProductPage.validatePleaseSelectProductButton();
    expect(buttonTXT).toContain("Please select a product and enter payment information");
    logger.info('"Please Select Product" button when product offer is not selected  is successfully validated')
});



Then('Validate Comments Section After Product Not Received', async function () {
    expect(await this.landPage.getAgentName(), AGENTNNAME)
    expect(await this.landPage.getDescription(), REFULFILLED_CUSTOMER_SERVICE_TXT)
    logger.info('Comments Section after Product Not Received is successfully validated')
});


Then('Validate Purchase History Section After Product Not Received', async function () {
    this.landPage = this.pomManager.getLandingPage();
    let actualArray = await this.landPage.getPurchaseHistoryRowCount();
    for (let i = 0; i < expectedProductNotReceivedArray.length; i++) {
        // Check if the itemName is "Purchase - refulfillment"
        if (actualArray[i].itemName === "Purchase - refulfillment") {
            // Perform assertion only for "Purchase - refulfillment" items
            expect(actualArray[i].itemName).toContain(expectedProductNotReceivedArray[i].itemName);
        }
    }
    logger.info('Purchase History Section after Product Not Received is successfully validated');
});

Then('Validate warning message for customer other than CANADA', async function () {
    let messageTXT = await this.didNotReceiveProductPage.validateWarningMsg();
    expect(messageTXT).toEqual("*Couldn't find a valid transaction includes all brands in selected bundle");
    logger.info('Warning message for customer other than CANADA is successfully validated')
});

When('Select Product Quantity {string} under summary section', async function (quantity) {
    await this.didNotReceiveProductPage.selectProductQty(quantity);
    logger.info(`Product quantity ${quantity} selected under summary section`);
});

Then('Validate Amount under summary section', async function () {
    let sumAmt = await this.didNotReceiveProductPage.getSumAmount();
    let totalAmt = await this.didNotReceiveProductPage.getSummaryTotal();
    expect(sumAmt).toEqual(totalAmt)
    logger.info('Amount under summary section is successfully validated')
});

When('Click on send button after payment', async function () {
    await this.didNotReceiveProductPage.clickSendButton();
    logger.info('Clicked on send button after payment');
});



