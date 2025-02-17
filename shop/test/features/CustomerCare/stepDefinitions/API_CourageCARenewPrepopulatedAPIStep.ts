import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CourageCARenew_LANDING_URL_ENDPOINT } from '../../../../src/constants';

let expectedpurchaserCAAvailableRenewalsArray = [
    {
        purchaserCA_renewalproduct: 'Courage CX Magazine',
        purchaserCA_renewalexpiraydate: 'Jan 1970',
    }
]

let expectedPurchaserCAInformationArray = [
    {
        purchaserCA_firstname: 'Order',
        purchaserCA_lastname: 'ca',
    }
]

Given('User opens Courage CA Renew Prepopulated API', async function () {
    try {
        // await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.goto(process.env.BASEURL + CourageCARenew_LANDING_URL_ENDPOINT, { timeout: 60000 })
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

When('Verify the Courage CA Renew Prepopulated API User Account Number', async function () {
    this.CourageCARenewPrepopulatedAPIPage = await this.pomManager.getCourageCARenewPrepopulatedAPIPage();
    const firstName = await this.CourageCARenewPrepopulatedAPIPage.validateUserAccountNumber();
    expect(firstName).toEqual("950352396");
    logger.info('Successfully verified the Account Number at Courage CA Renew Prepopulated API Page');
});

Then ('Verify the Courage CA Renew Prepopulated API User Account Last Name', async function () {
    this.CourageCARenewPrepopulatedAPIPage = await this.pomManager.getCourageCARenewPrepopulatedAPIPage();
    const AccountlastName = await this.CourageCARenewPrepopulatedAPIPage.validateUserAccountLastName();
    expect(AccountlastName).toEqual("ca");
    logger.info('Successfully verified the User Account Last Name at Courage CA Renew Prepopulated API Page');
});
Then('Validate Purchaser CA Firstname and Lastname', async function () {
    let actualArray = await this.CourageCARenewPrepopulatedAPIPage.getpurchaserCAInformationRowCount()
    for (let i = 0; i < expectedPurchaserCAInformationArray.length; i++) {
        expect(await actualArray[i].purchaserCA_firstname).toContain(expectedPurchaserCAInformationArray[i].purchaserCA_firstname);
        expect(await actualArray[i].purchaserCA_lastname).toContain(expectedPurchaserCAInformationArray[i].purchaserCA_lastname);
    }
    logger.info('Validated Purchaser CA Firstname and Lastname successfully');
});

Then('Validate Purchaser Renewals CA Product Name and Expiray Date', async function () {
    let actualArray = await this.CourageCARenewPrepopulatedAPIPage.getpurchaserCAAvailableRenewalsDataRowCount()
    for (let i = 0; i < expectedpurchaserCAAvailableRenewalsArray.length; i++) {
        expect(await actualArray[i].purchaserCA_renewalproduct).toContain(expectedpurchaserCAAvailableRenewalsArray[i].purchaserCA_renewalproduct);
        expect(await actualArray[i].purchaserCA_renewalexpiraydate).toContain(expectedpurchaserCAAvailableRenewalsArray[i].purchaserCA_renewalexpiraydate);
    }
    logger.info('Validated Purchaser CA Renewals Product Name and Expiray Date successfully');
});
