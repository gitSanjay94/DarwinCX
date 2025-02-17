import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'
import { DONATION_TYPE, DONATION_TRIBUTE_IN_HONOUR, DONATION_TRIBUTE_IN_MEMORY } from '../../../../src/constants';

let expectedPurchaseSubscriptionArray = [
    {
        // marketing_code: 'CCQ20MNQ ',
        // itemName: 'CARP Donation',
        // itemQuantity: '1',
        // remaining: '0'
        marketing_code: 'ZTW17MDTQ edit/ ',
        itemName: 'Zoomer 1yr (6 issues) $14.98 + tax',
        itemQuantity: '1',
        remaining: '6'

    }
]



When('Click on Donation', async function () {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.clickDonationButton();
    logger.info('Clicked on Donation button');
});

When('Search Marketing Code in Donation popup', async function () {
    this.donationPage = this.pomManager.getDonationPage()
    await this.donationPage.searchMarketingCode();
    logger.info('Searched Marketing Code in Donation popup');
});

When('Enter Marketing Code {string} in Select A Campaign dropdown', async function (marketCode: string) {
    this.donationPage = this.pomManager.getDonationPage()
    await this.donationPage.selectCampaignDD(marketCode);
    logger.info(`Entered Marketing Code "${marketCode}" in Select A Campaign dropdown`);
});

When('Select Donation Amount as {string}', async function (amountToSelect) {
    await this.donationPage.selectDonationAmount(amountToSelect);
    logger.info(`Selected Donation Amount as "${amountToSelect}"`);
});

When('Extract donation amount and total amount from donation popup', async function () {
    this.donationAmountUnderSummaryTXT = await this.donationPage.donationAmountUnderSummary();
    this.totalAmountUnderSummaryTXT = await this.donationPage.totalAmountUnderSummary();
    this.totalDonationAmount = await this.donationPage.extractNumericValue(this.totalAmountUnderSummaryTXT);
    logger.info(`Donation Amount: ${this.totalDonationAmount}`);
    logger.info(`Total Amount: ${this.totalAmount}`);
})

Then('Validate Donation Amount after selecting {string}', async function (amountToSelect) {
    expect(this.donationAmountUnderSummaryTXT).toContain(amountToSelect)
    expect(this.totalAmountUnderSummaryTXT).toContain(amountToSelect)
    logger.info('Donation Amount after selecting is successfully validated')
});

When('Enter Donation Amount as {string} in the Other Amount field', async function (donationAmount) {
    await this.donationPage.enterDonationAmount(donationAmount);
    logger.info(`Donation amount entered: ${donationAmount}`);
});

Then('Validate Total amount should be the same as entered in the Other Amount field as {string}', async function (donationAmount) {
    expect(this.donationAmountUnderSummaryTXT).toContain(donationAmount)
    expect(this.totalAmountUnderSummaryTXT).toContain(donationAmount)
    console.log(this.donationAmountUnderSummaryTXT,donationAmount)
    logger.info('Total amount should be the same as entered in the Other Amount field is successfully validated')
});

When('Select Auto Renewal Bundles', async function () {
    await this.donationPage.selectAutoRenewalBundles();
    logger.info('Auto renewal bundles selected successfully');
});

When('Select Recognition As Donator', async function () {
    await this.donationPage.selectRecognitionAsDonator();
    logger.info('Recognition as donator selected successfully');
});

When('Select Recognition As Anonymous', async function () {
    await this.donationPage.selectRecognitionAsAnonymous();
    logger.info('Recognition as anonymous selected successfully');
});

When('Click Submit button in donation popup', async function () {
    await this.donationPage.clickSubmitButton();
    logger.info('Submit button clicked in donation popup');
});

Then('Validate Purchase History All Section After donation', async function () {
    let actualArray = await this.landPage.getPurchaseHistoryRowCount()
    logger.info("Purchase Subscription Actual Values", actualArray)
    for (let i = 0; i < expectedPurchaseSubscriptionArray.length; i++) {
        expect(await actualArray[i].marketing_code).toContain(expectedPurchaseSubscriptionArray[i].marketing_code);
        expect(await actualArray[i].itemName).toContain(expectedPurchaseSubscriptionArray[i].itemName);
        expect(await actualArray[i].itemQuantity).toContain(expectedPurchaseSubscriptionArray[i].itemQuantity);
        expect(await actualArray[i].remaining).toContain(expectedPurchaseSubscriptionArray[i].remaining);
    }

    let itemTotalUnderPurchaseHistoryTXT = await this.landPage.getItemTotalPriceInAllPurchaseHistory();
    expect(itemTotalUnderPurchaseHistoryTXT).toContain(this.totalDonationAmount);
    logger.info('Purchase History All section after donation is successfully validated');
});

Then('Validate Purchase History Donation Section After donation', async function () {
    let donationInfo = await this.landPage.validatePurchaseHistoryDonationSectionAfterDonation();
    console.log(donationInfo)
    expect(donationInfo).toContain(DONATION_TYPE)
    if (donationInfo.includes('anonymous')) {
        expect(donationInfo).toContain(DONATION_TRIBUTE_IN_HONOUR)
    } else {
        expect(donationInfo).toContain(DONATION_TRIBUTE_IN_MEMORY)
    }
    let donationAmtInPurchaseHistoryTXT = await this.landPage.getDonationAmtInPurchaseHistory();
    expect(donationAmtInPurchaseHistoryTXT).toContain(this.totalDonationAmount)
    logger.info('Purchase History Donation section after donation is successfully validated')
});





