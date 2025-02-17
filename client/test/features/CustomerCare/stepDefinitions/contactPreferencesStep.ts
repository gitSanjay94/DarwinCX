import { Given, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CONTACTPREF_ACTIONSUBTYPE, ENEWSLETTERPREF_ACTIONSUBTYPE, MEMEBERSHIPTIER_ACTIONDETAIL, MEMEBERSHIPTIER_ACTIONSUBTYPE, PREFERENCES_ACTIONTYPE } from "../../../../src/constants";
import { logger } from '../support/hook'


Then('Click expand button to expand the Contact Preferences', async function () {
  this.contactprefPage = this.pomManager.getContactPreferencePage()
  await this.page.waitForTimeout(10000)
  await this.contactprefPage.clickExpandContactPref()
  await this.page.waitForTimeout(10000)
  logger.info('Clicked expand button to expand the Contact Preferences');
})

Given('Click Update button to update the Contact Preferences', async function () {
  this.contactprefPage = this.pomManager.getContactPreferencePage()
  await this.contactprefPage.clickUpdateContactPreference()
  await this.page.waitForTimeout(5000)
  logger.info('Clicked Update button to update the Contact Preferences');
})

Then('Set the {string} to {string} option', async function (prefeName: string, prefePosition: string) {
  await this.contactprefPage.clickOfferDynamically(prefeName, prefePosition)
  logger.info(`Set the ${prefeName} to ${prefePosition} option`);
})

Then('Select the {string}', async function (prefeName: string) {
  this.contactprefPage = this.pomManager.getContactPreferencePage()
  await this.contactprefPage.clickCarpMembershipOffers(prefeName)
  await this.page.waitForTimeout(20000)
  logger.info(`Selected the ${prefeName}`);
})


Then('Click  UpdateInfo Button', async function () {
  await this.page.waitForTimeout(30000)
  this.contactprefPage = this.pomManager.getContactPreferencePage()
  await this.contactprefPage.clickUpdateInfoButton()
  await this.page.waitForTimeout(40000)
  logger.info('Clicked UpdateInfo Button');
})


Then('Validate  the message {string} under the Contact prefernces', async function (expectedPref: string) {
  await this.page.waitForTimeout(5000)
  const prefCOunt = await this.contactprefPage.getActivePreferencesCount()
  expect(prefCOunt).toContain(expectedPref)
  logger.info(`Validated the message "${expectedPref}" under the Contact preferences`);
})

Then('Click Update button to update the eNewsletters Preferences', async function () {
  this.contactprefPage = this.pomManager.getContactPreferencePage()
  await this.contactprefPage.clickUpdateeNewLetterPref()
  logger.info('Clicked Update button to update the eNewsletters Preferences');
})

Then('Click expand button to expand the eNewsletters Preferences', async function () {
  this.contactprefPage = this.pomManager.getContactPreferencePage()
  await this.contactprefPage.clickExpandeNewLetterPref()
  await this.page.waitForTimeout(10000)
  logger.info('Clicked expand button to expand the eNewsletters Preferences');
})

Then('Validate  the message {string} under the eNewsletters prefernces', async function (expectedPref: string) {
  await this.page.waitForTimeout(5000)
  const prefCOunt = await this.contactprefPage.getActiveEnewslettersCount()
  expect(prefCOunt).toContain(expectedPref)
  logger.info(`Validated the message "${expectedPref}" under the eNewsletters preferences`);
})

Then('Validate the eNewsletters information under Action tab', async function () {
  expect(await this.landPage.getActionsType()).toContain(PREFERENCES_ACTIONTYPE)
  expect(await this.landPage.getActionsSubType()).toContain(ENEWSLETTERPREF_ACTIONSUBTYPE)
  //expect(await this.landPage.getActionsDetails()).toContain("Ideacity updated from undefined to true; zoomer_book_club updated from undefined to true;") 
  logger.info('Validated the eNewsletters information under Action tab');
})

Then('Validate the Contact Prefernces information under Action tab', async function () {
  expect(await this.landPage.getActionsType()).toContain(PREFERENCES_ACTIONTYPE)
  expect(await this.landPage.getActionsSubType()).toContain(CONTACTPREF_ACTIONSUBTYPE)
  expect(await this.landPage.getActionsDetails()).toContain("zoomer_3rd_party_mail updated from undefined to 1;")
  expect(await this.landPage.getActionsDetails()).toContain("CARP_3rd_party_mail updated from undefined to true;")
  logger.info('Validated the Contact Preferences information under Action tab');
})

Then('Click Update button to update the Membership Tier Preferences', async function () {
  this.contactprefPage = this.pomManager.getContactPreferencePage()
  await this.contactprefPage.clickUpdateMembershipTierPref()
  await this.page.waitForTimeout(5000)
  logger.info('Clicked Update button to update the Membership Tier Preferences');
})

Then('Select the {string}  Radio Button', async function (optionValue: string) {
  this.contactprefPage = this.pomManager.getContactPreferencePage()
  await this.page.waitForTimeout(5000)
  await this.contactprefPage.clickMembershipOffersSelection(optionValue)
  logger.info(`Selected the ${optionValue} Radio Button`);
})

Then('Validate  the message {string} under the Membership Tier prefernces', async function (expectedPref: string) {
  await this.page.waitForTimeout(5000)
  const prefCOunt = await this.contactprefPage.getActiveMemberShipTiersCount()
  expect(prefCOunt).toContain(expectedPref)
  logger.info(`Validated the message "${expectedPref}" under the Membership Tier preferences`);
})

Then('Validate the Membership Tier information under Action tab', async function () {
  logger.info("getActionsType   ", await this.landPage.getActionsType())
  logger.info("getActionsSubType ", await this.landPage.getActionsSubType())
  logger.info("getActionsDetails ", await this.landPage.getActionsDetails())
  expect(await this.landPage.getActionsType()).toContain(PREFERENCES_ACTIONTYPE)
  expect(await this.landPage.getActionsSubType()).toContain(MEMEBERSHIPTIER_ACTIONSUBTYPE)
  expect(await this.landPage.getActionsDetails()).toContain(MEMEBERSHIPTIER_ACTIONDETAIL)
  logger.info('Membership Tier information under Action tab is successfully validated');
})

Then('Click expand button to expand the Membership Tier Preferences', async function () {
  await this.page.waitForTimeout(60000)
  this.contactprefPage = this.pomManager.getContactPreferencePage()
  await this.contactprefPage.clickExpandMembershipTier()
  logger.info('Clicked expand button to expand the Membership Tier Preferences');
})

Then('Validate {string} radiobutton should be selected under the Membership Tier prefernces', async function (optionValue: string) {
  this.contactprefPage = this.pomManager.getContactPreferencePage()
  await this.page.waitForTimeout(5000)
  await this.contactprefPage.validateMembershipOffersSelection(optionValue)
  logger.info(`Validated ${optionValue} radio button selected under the Membership Tier preferences`);
})

Then('Validate Purchase History section for Lifetime Membership', async function () {
  let actualArray = await this.landPage.getPurchaseHistoryRowCount()
  logger.info(`Purchase Subscription Actual Values : ${actualArray}`)
  logger.info(`Purchase Subscription Expected Values : ${expectedPurchaseSubscriptionArray}`)
  for (let i = 0; i < expectedPurchaseSubscriptionArray.length; i++) {
    expect(await actualArray[i].marketing_code).toContain(expectedPurchaseSubscriptionArray[i].marketing_code);
    expect(await actualArray[i].itemName).toContain(expectedPurchaseSubscriptionArray[i].itemName);
    expect(await actualArray[i].itemQuantity).toContain(expectedPurchaseSubscriptionArray[i].itemQuantity);
    expect(await actualArray[i].itemTotalPrice).toContain(expectedPurchaseSubscriptionArray[i].itemTotalPrice);
    expect(await actualArray[i].deliveryType).toContain(expectedPurchaseSubscriptionArray[i].deliveryType);
    expect(await actualArray[i].remaining).toContain(expectedPurchaseSubscriptionArray[i].remaining);
    expect(await actualArray[i].status).toContain(expectedPurchaseSubscriptionArray[i].status);
  }
  logger.info('Validated Purchase History section for Lifetime Membership');
})

Then('Search Marketing Code {string}', async function (marketCode: string) {
  this.donationPage = this.pomManager.getDonationPage()
  await this.donationPage.searchMarketingCode(marketCode);
  logger.info(`Searching Marketing Code ${marketCode}`);
})

let expectedPurchaseSubscriptionArray = [
  {
    marketing_code: 'I20AT32M edit/ ',
    transactionDate: '',
    status: 'Active',
    deliveryType: 'Print',
    itemTotalPrice: '500',
    itemName: 'Lifetime Year Membership',
    itemQuantity: '1',
    remaining: '255'
  }
];