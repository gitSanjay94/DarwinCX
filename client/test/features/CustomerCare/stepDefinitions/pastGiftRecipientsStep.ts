import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'
import { getExcelData, jsonComparison } from '../../../../src/util/ExcelReader';

let expectedJsonObj = [
    {
        client_id: 1000,
        product_id: 10,
        product_name: 'Zoomer Magazine',
        purchaser_id: 210644740,
        recipient_id: 912302583,
        expiry_issue: 274
    },
    {
        client_id: 1000,
        product_id: 20,
        product_name: 'CARP Canada Membership',
        purchaser_id: 210644740,
        recipient_id: 912302583,
        expiry_issue: 662,
        expiry_date: '2025-04-03T00:00:00.000Z'
    }
]

When('Click Past Gift Recipients button', async function () {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.clickPastGiftRecipientsButton();
    logger.info('Clicked Past Gift Recipients button');
});


Then('Check No Data button to be disabled', async function () {
    this.pastGiftPage = this.pomManager.getPastGiftRecipientsPage();
    let noDataButton = await this.pastGiftPage.validateNoDataButton();
    await expect(noDataButton).toBeDisabled({ timeout: 10000 });
    logger.info('Verified that the No Data button is disabled');
});

Then('Validate {string} message in Past gift recipients popup', async function (message) {
    let messageText = await this.pastGiftPage.validateNoGiftRecipientTXT();
    expect(messageText).toContain(message);
    logger.info(`${message} message in Past gift recipients popup is successfully validated`);
});

When('Extract number of rows in Past gift recipients popup', async function () {
    this.pastGiftPage = this.pomManager.getPastGiftRecipientsPage();
    await this.page.waitForTimeout(10000);
    this.noOfRows = await this.pastGiftPage.getPastGiftRecipientsRowCount();
    logger.info(`Extracted number of rows in Past gift recipients popup: ${this.noOfRows}`);
});

When('Click Download button in Past gift recipients popup', async function () {
    this.pastGiftPage = this.pomManager.getPastGiftRecipientsPage();
    await this.pastGiftPage.clickDownloadButton();
    await this.page.waitForTimeout(30000);
    logger.info('Clicked Download button in Past gift recipients popup');
});

Then('Validate number of rows matched with Excel data length', async function () {
    let filename = "Past Gift Recipients for - 210644740 - Atticus Oodriguez.csv";
    let sheetName = "Sheet1";
    let actualJsonObj = await getExcelData(filename, sheetName);
    expect(actualJsonObj.length).toEqual(this.noOfRows);
    await jsonComparison(expectedJsonObj, actualJsonObj);
    logger.info('Number of rows matched with Excel data length');
});



