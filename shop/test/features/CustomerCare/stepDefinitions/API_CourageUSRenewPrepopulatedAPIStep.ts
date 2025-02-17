import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CourageUSRenew_LANDING_URL_ENDPOINT } from '../../../../src/constants';

let expectedpurchaserAvailableRenewalsArray = [
    {
        purchaser_renewalproduct: 'Courage CX Magazine',
        purchaser_renewalexpiraydate: 'May 2030',
    }
]

let expectedPurchaserInformationArray = [
    {
        purchaser_firstname: 'test',
        purchaser_lastname: 'two',
    }
]

Given('User opens Courage US Renew Prepopulated API', async function () {
    try {
        // await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.goto(process.env.BASEURL + CourageUSRenew_LANDING_URL_ENDPOINT, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Opened New params in url - US no  Address 1 app: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Timeout occurred:', error.message);
        } else {
            console.error('Page navigation failed:', error.message);
        }
    }
});

When('Verify the Courage US Renew Prepopulated API User Account Number', async function () {
    this.CourageUSRenewPrepopulatedAPIPage = await this.pomManager.getCourageUSRenewPrepopulatedAPIPage();
    const firstName = await this.CourageUSRenewPrepopulatedAPIPage.validateUserAccountNumber();
    expect(firstName).toEqual("1841846");
    logger.info('Successfully verified the Account Number at Courage US Renew Prepopulated API Page');
});

Then ('Verify the Courage US Renew Prepopulated API User Account Last Name', async function () {
    this.CourageUSRenewPrepopulatedAPIPage = await this.pomManager.getCourageUSRenewPrepopulatedAPIPage();
    const AccountlastName = await this.CourageUSRenewPrepopulatedAPIPage.validateUserAccountLastName();
    expect(AccountlastName).toEqual("two");
    logger.info('Successfully verified the User Account Last Name at Courage US Renew Prepopulated API Page');
});
Then('Validate Purchaser Firstname and Lastname', async function () {
    let actualArray = await this.CourageUSRenewPrepopulatedAPIPage.getpurchaserInformationRowCount()
    for (let i = 0; i < expectedPurchaserInformationArray.length; i++) {
        expect(await actualArray[i].purchaser_firstname).toContain(expectedPurchaserInformationArray[i].purchaser_firstname);
        expect(await actualArray[i].purchaser_lastname).toContain(expectedPurchaserInformationArray[i].purchaser_lastname);
    }
    logger.info('Validated Purchaser Firstname and Lastname successfully');
});

Then('Validate Purchaser Renewals Product Name and Expiray Date', async function () {
    let actualArray = await this.CourageUSRenewPrepopulatedAPIPage.getpurchaserAvailableRenewalsDataRowCount()
    for (let i = 0; i < expectedpurchaserAvailableRenewalsArray.length; i++) {
        expect(await actualArray[i].purchaser_renewalproduct).toContain(expectedpurchaserAvailableRenewalsArray[i].purchaser_renewalproduct);
        expect(await actualArray[i].purchaser_renewalexpiraydate).toContain(expectedpurchaserAvailableRenewalsArray[i].purchaser_renewalexpiraydate);
    }
    logger.info('Validated Purchaser Renewals Product Name and Expiray Date successfully');
});
