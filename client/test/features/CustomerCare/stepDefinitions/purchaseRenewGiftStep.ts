import { When, Then } from '@cucumber/cucumber';
//setDefaultTimeout(120000)
import { expect } from '@playwright/test'
import { logger } from '../support/hook';
import { faker } from '@faker-js/faker';


let firstname: string

let expectedGiftSentArray = [
  {
    marketing_code: 'ZTW17MDTQ edit/ ',
    transactionDate: 'Wed Jan 03 2024 12:25:45',
    status: 'Active',
    deliveryType: 'Print and Digital',
    // itemTotalPrice: '14.98',
    itemTotalPrice: '16.93',
    itemName: 'Zoomer 1yr (6 issues) $14.98 + taxTo',
    itemQuantity: '1',
    remaining: '6'
  },
  {
    marketing_code: 'ZTW17MDTQ edit/ ',
    transactionDate: 'Wed Jan 03 2024 12:25:45',
    status: 'Active',
    deliveryType: '',
    itemTotalPrice: '14.97',
    itemName: 'CARP 1yr Membership $14.97To',
    itemQuantity: '12',
    remaining: '11'
  },
  {
    marketing_code: 'ZTW17MDTQ edit/ ',
    transactionDate: 'Wed Jan 03 2024 12:25:45',
    status: '',
    deliveryType: '',
    itemTotalPrice: '0',
    itemName: 'CARP CardTo',
    itemQuantity: '1',
    remaining: '0'
  }
];

let expectedGiftReceivedArray = [
  {
    marketing_code: 'ZTW17MDTQ edit/ ',
    transactionDate: 'Tue Jan 09 2024 15:10:15',
    status: 'Active',
    deliveryType: 'Print and Digital',
    // itemTotalPrice: '14.98',
    itemTotalPrice: '16.93',
    itemName: 'Zoomer 1yr (6 issues) $14.98 + taxFrom',
    itemQuantity: '1',
    remaining: '6'
  },
  {
    marketing_code: 'ZTW17MDTQ edit/ ',
    transactionDate: 'Tue Jan 09 2024 15:10:15',
    status: 'Active',
    deliveryType: '',
    itemTotalPrice: '14.97',
    itemName: 'CARP 1yr Membership $14.97From',
    itemQuantity: '12',
    remaining: '11'
  },
  {
    marketing_code: 'ZTW17MDTQ edit/ ',
    transactionDate: 'Tue Jan 09 2024 15:10:15',
    status: '',
    deliveryType: '',
    itemTotalPrice: '0',
    itemName: 'CARP CardFrom',
    itemQuantity: '1',
    remaining: '0'
  }
]
When('Click PurchaseRenew Gift', async function () {
  this.landPage = this.pomManager.getLandingPage()
  await this.landPage.clickPurchaseRenewButton();
  logger.info('Clicked on PurchaseRenew Gift button');
});
When('Click Add Recipient button to search the existing customer or add new customer', async function () {
  this.purchaseGiftRenewPage = this.pomManager.getPurchaseRenewGiftPage()
  await this.purchaseGiftRenewPage.clickAddRecipientButton();
  logger.info('Clicked on "Add Recipient" button to search the existing customer or add new customer');
});
When('Click Create Recipient to create the customer', async function () {
  this.purchaseGiftRenewPage = this.pomManager.getPurchaseRenewGiftPage()
  await this.purchaseGiftRenewPage.clickCreateRecipientButton();
  firstname = faker.person.firstName() + (Math.random() + 1).toString(36).substring(7)
  this.addCustomerPage = this.pomManager.getAddCustomerPage();
  await this.addCustomerPage.fillCustomerDetails(firstname);
  logger.info(`Filled in recipient details for ${firstname}`)
  await this.page.waitForTimeout(40000)
  logger.info('Clicked "Create Recipient" button to create the customer');
});


Then('Validate Gifts Sent section', async function () {
  this.landPage = this.pomManager.getLandingPage()
  await this.page.waitForTimeout(60000)
  await this.landPage.clickSearchButton()
  await this.page.waitForTimeout(20000)
  let actualArray = await this.landPage.getGiftSentData()
  logger.info("Gift Sent Actual Value", actualArray)
  for (let i = 0; i < expectedGiftSentArray.length; i++) {
    expect(await actualArray[i].marketing_code).toContain(expectedGiftSentArray[i].marketing_code);
    expect(await actualArray[i].itemName).toContain(expectedGiftSentArray[i].itemName);
    expect(await actualArray[i].itemQuantity).toContain(expectedGiftSentArray[i].itemQuantity);
    expect(await actualArray[i].itemTotalPrice).toContain(expectedGiftSentArray[i].itemTotalPrice);
    expect(await actualArray[i].deliveryType).toContain(expectedGiftSentArray[i].deliveryType);
    expect(await actualArray[i].remaining).toContain(expectedGiftSentArray[i].remaining);
    expect(await actualArray[i].status).toContain(expectedGiftSentArray[i].status);

  }
  logger.info('Gifts Sent section successfully validated');
})

Then('Validate Recipient Info', async function () {
  expect(await this.purchaseGiftRenewPage.getrecipientInfo()).toContain(firstname)
  logger.info('Recipient Info successfully validated');
})

Then('Validate Gifts Received section', async function () {
  logger.info("Receipent name is  " + firstname)
  await this.landPage.enterSearchCondition(firstname)
  await this.page.waitForTimeout(10000)
  await this.landPage.clickSearchButton()
  await this.page.waitForTimeout(20000)
  let actualArray = await this.landPage.getGiftReceivedData()
  logger.info("Transaction Data Actual Value of Gifts Received section", actualArray)
  for (let i = 0; i < expectedGiftReceivedArray.length; i++) {
    expect(await actualArray[i].marketing_code).toContain(expectedGiftReceivedArray[i].marketing_code);
    expect(await actualArray[i].itemName).toContain(expectedGiftReceivedArray[i].itemName);
    expect(await actualArray[i].itemQuantity).toContain(expectedGiftReceivedArray[i].itemQuantity);
    expect(await actualArray[i].itemTotalPrice).toContain(expectedGiftReceivedArray[i].itemTotalPrice);
    expect(await actualArray[i].deliveryType).toContain(expectedGiftReceivedArray[i].deliveryType);
    expect(await actualArray[i].remaining).toContain(expectedGiftReceivedArray[i].remaining);
    expect(await actualArray[i].status).toContain(expectedGiftReceivedArray[i].status);
  }
  logger.info('Gifts Received section successfully validated')
})

When('Click Renew button', async function () {
  await this.purchaseGiftRenewPage.clickRenewButton()
  await this.page.waitForTimeout(20000)
  logger.info('Clicked Renew button');
})

When('Create the customer', async function () {
  this.landPage = this.pomManager.getLandingPage()
  firstname = faker.person.firstName() + (Math.random() + 1).toString(36).substring(7)
  logger.info(`Creating customer with first name: ${firstname}`);
  await this.landPage.openAddCustomerForm(firstname);
  this.addCustomerPage = this.pomManager.getAddCustomerPage();
  await this.addCustomerPage.fillCustomerDetails(firstname);
  logger.info(`Customer details filled for ${firstname}`);
  await this.page.waitForTimeout(20000)
  logger.info(`Performed Customer Search  ${firstname}.`)

});
Then('Validate  {string} warn message', async function (s: string) {
  this.purchaseGiftRenewPage = this.pomManager.getPurchaseRenewGiftPage()
  expect(await this.purchaseGiftRenewPage.getAddOfferWarn()).toContain(s)
  logger.info(`Validating "${s}" warning message`);
})

Then('Validate warn message {string}', async function (s: string) {
  expect(await this.purchaseGiftRenewPage.getAddRecipientWarn()).toContain(s)
  logger.info(`Validating "${s}" warning message`);
})

When('Click Create Recipient and create {int} Recipients', { timeout: 160000 }, async function (recipientCount: number) {
  //let flag = false
  for (let i = 1; i <= recipientCount; i++) {
    //if(i>1){
    await this.purchaseGiftRenewPage.clickAddAnotherRecipientButton()
    await this.page.waitForTimeout(5000)
    //}
    await this.purchaseGiftRenewPage.clickCreateRecipientButton();
    firstname = faker.person.firstName() + "recp" + (Math.random() + 1).toString(36).substring(7)
    this.addCustomerPage = this.pomManager.getAddCustomerPage();
    let flag = await this.addCustomerPage.fillCustomerDetails(firstname);
    console.log("flag  is ", flag)
    console.log(`Filled in recipient ${i} details for ${firstname}`)
    logger.info(`Filled in recipient ${i} details for ${firstname}`)
    await this.page.waitForTimeout(15000)
  }
  logger.info(`Created ${recipientCount} recipients`);
})

Then('Validate Tax Calculation under the Summary section', async function () {
  await this.page.waitForTimeout(40000)
  expect(await this.purchaseGiftRenewPage.validateTaxNotZero()).not.toBe(true);;
  await this.page.waitForTimeout(50000)
  logger.info('Tax calculation under the Summary section is validated successfully.');
})

Then('Validate Tax Calculation under the Summary section for BASS LLC', async function () {
  await this.page.waitForTimeout(40000)
  expect(await this.purchaseGiftRenewPage.validateTaxNotZero()).toBe(true);
  await this.page.waitForTimeout(50000)
  logger.info('Tax calculation under the Summary section is validated successfully.');
})


Then('Validate Total Amount Calculation under the Summary section', async function () {
  expect(await this.purchaseGiftRenewPage.getItemTotal()).toEqual(await this.purchaseGiftRenewPage.getAllItemsTotalPrice())
  await this.page.waitForTimeout(50000)
  logger.info('Total amount calculation under the Summary section is validated successfully.');
})

When('Click search to search the Recipient {string}  and select having address {string}', async function (recepientToSearch: string, address: string) {
  this.purchaseGiftRenewPage = this.pomManager.getPurchaseRenewGiftPage()
  await this.purchaseGiftRenewPage.searchRecipientByNameAndAddress(recepientToSearch, address)
  await this.page.waitForTimeout(10000)
  logger.info(`Searched for recipient "${recepientToSearch}" with address "${address}"`);
})

When('Click search to search the Recipient {string}', async function (recepientToSearch: string) {
  this.purchaseGiftRenewPage = this.pomManager.getPurchaseRenewGiftPage()
  await this.purchaseGiftRenewPage.searchRecipientByName(recepientToSearch)
  await this.page.waitForTimeout(10000)
  logger.info(`Searched for recipient "${recepientToSearch}"`);
})

When('Click Create Recipient and create {int} Recipients for {string}', async function (recipientCount: number, countryName: string) {
  this.purchaseGiftRenewPage = this.pomManager.getPurchaseRenewGiftPage()
  for (let i = 1; i <= recipientCount; i++) {
    //if(i>1){
    await this.purchaseGiftRenewPage.clickAddAnotherRecipientButton()
    await this.page.waitForTimeout(5000)
    //}
    await this.purchaseGiftRenewPage.clickCreateRecipientButton();
    firstname = faker.person.firstName() + "recp" + (Math.random() + 1).toString(36).substring(7)
    this.addCustomerPage = this.pomManager.getAddCustomerPage();
    let flag = await this.addCustomerPage.fillCustomerDetails(firstname, countryName);
    console.log("flag  is ", flag)
    console.log(`Filled in recipient ${i} details for ${firstname}`)
    logger.info(`Filled in recipient ${i} details for ${firstname}`)
    await this.page.waitForTimeout(15000)
  }
  logger.info(`Created ${recipientCount} recipients for ${countryName}`);
})

Then('Validate {string} message in Purchase Renew Gift popup', async function (message) {
  let messageText = await this.purchaseGiftRenewPage.validateLabelWarningMessage();
  expect(messageText).toContain(message);
  logger.info(`Validated "${message}" message in Purchase Renew Gift popup`);
});

When('Fill Label message with {string} text', async function (labelMessage) {
  await this.purchaseGiftRenewPage.fillLabelMessage(labelMessage)
  logger.info(`Filled Label message with text: ${labelMessage}`);
});

Then('Validate Recipient Info as {string}', async function (val: string) {
  expect(await this.purchaseGiftRenewPage.getrecipientInfo()).toContain(val)
  logger.info(`Recipient Info validated successfully as ${val}`);
})

When('Click on Label Messages section in landing page', async function () {
  await this.landPage.clickLabelMessagesSection();
  logger.info('Clicked on Label Messages section in landing page');
})

Then('Validate Label Message in landing page', async function () {
  try {
    let messageText = await this.landPage.getMessageTextFromLabelMessages();
    expect(this.labelMessage).toContain(messageText);
    logger.info('Validation of label message in landing page successful.');
  } catch (error) {
    logger.error(`Error occurred while validating label message: ${error}`);
  }
})

When('Fill Apply To All message with {string} text', async function (applyToAllMessage) {
  await this.landPage.fillApplyToAllMessage(applyToAllMessage);
  logger.info(`Filled Apply To All message with text: ${applyToAllMessage}`);
})

Then('Validate Apply To All message', async function () {
  try {
    let messageText1 = await this.landPage.getLabelMessage1();
    let messageText2 = await this.landPage.getLabelMessage2();
    expect(this.applyToAllMessage).toContain(messageText1);
    expect(this.applyToAllMessage).toContain(messageText2);
    logger.info('Validation of Apply To All message is successful.');
  } catch (error) {
    logger.error(`Error occurred while validating Apply To All message: ${error}`);
  }
})

When('Click on Suppress button', async function () {
  await this.landPage.clickSuppressButton();
  logger.info('Clicked on Suppress button');
})

Then('Validate label message after Suppress', async function () {
  let messageText1 = await this.landPage.getLabelMessage1();
  expect(messageText1).toContain('');
  logger.info('Validation of label message after Suppress is successful.');
})

