import { Given, When, Then } from '@cucumber/cucumber';

import { MARKED_AS_DELETED_TXT, REACTIVATED_ACCOUNT_TXT, WRONG_FIRST_NAME_TXT, WRONG_LAST_NAME_TXT, ACCOUNT_ON_DELIVERY_SUSPEND_TXT, ACCOUNT_ON_DELIVERY_SUSPENSION_TXT, ACCOUNT_ON_DELIVERY_UNSUSPEND_TXT } from '../../../../src/constants';


import { expect } from '@playwright/test'
import { logger } from '../support/hook';
import { faker } from '@faker-js/faker';

export let firstname: string;
export let lastname: string;

let expectedDeceasedArray = [
  {
    actionSubtype: '',
    actionDetails: 'Deceased__pc updated from 0 to'


  },
  {
    actionSubtype: 'marked as deceased',
    actionDetails: ''

  }
]
let expectedRemovedDeceasedArray = [
  {
    actionSubtype: '',
    actionDetails: 'Never_Contact_Again__pc updated from 1 to null'

  },
  {
    actionSubtype: 'removed deceased mark',
    actionDetails: ''

  }
]
let expectedDeletedArray = [
  {
    actionDetails: 'Marked as deleted'

  },
  {
    actionDetails: 'deleted__pc updated from 0 to true'

  }
]
let expectedActivatedArray = [
  {
    actionDetails: 'Re-activated account'

  },
  {
    actionDetails: 'deleted__pc updated from 1 to false'

  }
]

When('Click Add Customer button to create the customer', async function () {
  this.landPage = this.pomManager.getLandingPage()
  this.firstname = faker.person.firstName() + faker.person.zodiacSign()+(Math.random() + 1).toString(36).substring(7)
    // this.firstname = faker.person.firstName() + faker.person.zodiacSign()+ '#%".>!$&*(),;:/?-_+=';

  await this.landPage.openAddCustomerForm(this.firstname);
  logger.info('Clicked the "Add Customer" button to create the customer');
});

When('Enter all the fields on the Add Customer form', async function () {
  this.addCustomerPage = this.pomManager.getAddCustomerPage();
  await this.addCustomerPage.fillCustomerDetails(this.firstname);
  logger.info(`Sucessfully filled all the Customer information  ${this.firstname}`);
  await this.page.waitForTimeout(15000)
})

Then( 'Validate customer details should get added successfully', async function () {
  await this.landPage.clickSearchButton();
  let customerInfo = await this.landPage.validateCustomerInfo();
  if (typeof customerInfo === "string" && customerInfo.length === 0) {
    logger.info("Unable to create customer. The customerInfo is empty.");
  } else if (customerInfo === null) {
    logger.info("Unable to create customer. The customerInfo is null.");
  } else {
    logger.info(`Customer created successfully. Customer info: ${customerInfo}`);
  }
  console.log('Customer info is: ' + customerInfo)
  logger.info('Customer info successfully validated!');
});


Then('Validate  showing warn as *Required against all the  missing required fields', async function () {
  this.addCustomerPage = this.pomManager.getAddCustomerPage(); //added to handle TypeError: Cannot read properties of undefined (reading 'clickCreateCustomerButton')
  await this.addCustomerPage.clickCreateCustomerButton();
  logger.info('Clicked the "Create customer" button');
  await this.addCustomerPage.missingRequiredCustomerDetails();
  logger.info('Successfully validated "*Required against all the missing required fields" warning message');
});


Then('Validate customer details should get updated successfully', async function () {
  let compName = await this.addCustomerPage.updateCompanyName()
  await this.page.waitForTimeout(20000)
  let customerInfo = await this.landPage.validateCustomerInfo();
  expect(await customerInfo).toContain(compName)
  logger.info('Successfully validated that customer details were updated');
});


When('Click Customer Info Update  button to update the customer info', async function () {
  await this.addCustomerPage.customerInfoUpdate();
  logger.info('Clicked the "Customer Info Update" button to update the customer info');
});

Then('Validate Partner details should get added successfully', async function () {
  await this.page.waitForTimeout(20000)
  let partnerInfo = await this.landPage.validatePartnerInfo();
  if (typeof partnerInfo === "string" && partnerInfo.length === 0) {
    logger.info("Unable to create partner. The partnerInfo is empty.");
  } else if (partnerInfo === null) {
    logger.info("Unable to create partner. The partnerInfo is null.");
  } else {
    logger.info(`Partner created successfully. Partner info: ${partnerInfo}`);

    let partnerFirstName = await this.landPage.getPartnerFirstName()
    let partnerLastName = await this.landPage.getPartnerLastName()
    let partnerEmail = await this.landPage.getPartnerEmail()

    expect(await partnerInfo).toContain(partnerFirstName)
    expect(await partnerInfo).toContain(partnerLastName)
    expect(await partnerInfo).toContain(partnerEmail)
    logger.info('Partner info successfully validated');
  }
});

When('Click Customer Info Update  button and update country with {string}', async function (countryName: string) {
  await this.addCustomerPage.updateCustomerWithDiffCountry(countryName)
  logger.info(`Clicked the "Customer Info Update" button to update country with ${countryName}`);
});



When('Click Partner Info Update  button to update the partner mailId with {string}', async function (mail: string) {
  await this.addCustomerPage.updatePartnerInfoWithInvalidEmailAddress(mail)
  logger.info(`Clicked the "Partner Info Update" button to update partner email Id with ${mail}`);
});

Then('Validate  showing warn as *Invalid email address', async function () {
  let invalidEmailMessage = await this.addCustomerPage.partnerInvalidEmailWarnMessage();
  expect(await invalidEmailMessage).toContain('*Invalid email address');
  logger.info("Successfully validated the '*Invalid email address' warning message for Partner info");
});

When('Update First Name in Partner Info with {string}', async function (partnerFirstName: string) {
  await this.addCustomerPage.updateFirstNameInPartnerInfo(partnerFirstName);
 logger.info(`Successfully upddated First Name in Partner Info with ${partnerFirstName}`);
});

Then('Validate Partner First Name with {string}', async function (partnerFirstName: string) {
 
  let updatedPartnerFirstNameTXT = await this.landPage.getUpdatedPartnerFirstName();
  let partnerInfo = await this.landPage.validatePartnerInfo();
  expect(partnerInfo).toContain(updatedPartnerFirstNameTXT)
  logger.info(`Successfully validated Partner First Name with ${partnerFirstName} before and after update`);
});

Then('Validate Removed Partner Info text under comments after clicking on Remove Partner Info Button', async function () {
  await this.landPage.clickSearchButton();
  await this.addCustomerPage.partnerInfoUpdateBtn();
  await this.addCustomerPage.clickRemovePartnerInfoButton();
  let removePartnerInfo = await this.landPage.validateRemovedPartnerInfoTXT()
  expect(removePartnerInfo).toContain('Removed Partner Info ')
  logger.info('Successfully validated the "Removed Partner Info" text under comments');
});

Given('Enter all the fields on the Add Customer form with country  {string}', async function (country: string) {
  this.addCustomerPage = this.pomManager.getAddCustomerPage();
  await this.addCustomerPage.fillCustomerDetails(this.firstname, country);
  logger.info(`Filled all fields on the Add Customer form with country ${country} for ${this.firstname}`);
  await this.page.waitForTimeout(15000)

})

Given('Click Add Customer button to create the customer for client {string}', async function (clientName: string) {
  this.landPage = this.pomManager.getLandingPage()
  this.firstname = faker.person.firstName() + faker.person.zodiacSign() +(Math.random() + 1).toString(36).substring(7)
  await this.landPage.openAddCustomerForm(this.firstname, clientName);
  logger.info(`Clicked the "Add Customer" button to create the customer for client ${clientName}`);
});

When('Click on Delete button under Customer Info section', async function () {
  await this.landPage.clickDeleteButton();
  logger.info('Clicked on the Delete button under Customer Info section')
});

When('Click on Activate button under Customer Info section', async function () {
  await this.landPage.clickActivateButton();
  logger.info('Clicked on the Activate button under Customer Info section');
});

When('Click on Comments section in landing page', async function () {
  await this.landPage.clickCommentsSection();
  logger.info('Clicked on the Comments section in the landing page');
});

Then('Validate Comments section after search and delete', async function () {
  expect(await this.landPage.getDescriptionAfterSearchAndDelete(), MARKED_AS_DELETED_TXT)
  logger.info("Successfully validated the Comments section after performing search and delete");
});

Then('Validate Comments section after search and activate', async function () {
  expect(await this.landPage.getDescriptionAfterSearchAndDelete(), REACTIVATED_ACCOUNT_TXT)
  logger.info("Successfully validated the Comments section after performing search and activate");
});

Then('Validate Comments section after Deletion', async function () {
  expect(await this.landPage.getDescription(), MARKED_AS_DELETED_TXT)
  logger.info("Successfully validated the Comments section after deletion");
});

Then('Validate comments section after Activation', async function () {
  expect(await this.landPage.getDescription(), REACTIVATED_ACCOUNT_TXT)
  logger.info("Successfully validated the comments section after activation");
});

When('Select Actions tab in landing page', async function () {
  await this.page.waitForTimeout(60000)
  await this.landPage.selectActionTab()
  await this.page.waitForTimeout(20000)
  logger.info("Selected the Actions tab in the landing page");
});

Then('Validate Action Details after Deletion', async function () {
  let actualArray = await this.landPage.getActionsRowCount()
  for (let i = 0; i < expectedDeletedArray.length; i++) {
    expect(await actualArray[i].actionDetails).toContain(expectedDeletedArray[i].actionDetails);
  }
  logger.info("Successfully validated Action Details after deletion");
});

Then('Validate Action Details after Activation', async function () {
  let actualArray = await this.landPage.getActionsRowCount()
  for (let i = 0; i < expectedActivatedArray.length; i++) {
    expect(await actualArray[i].actionDetails).toContain(expectedActivatedArray[i].actionDetails);
  }
  logger.info("Successfully validated Action Details after activation");
});

When('Click on Mark Deceased button under Customer Info section', async function () {
  await this.landPage.clickMarkDeceasedButton();
  logger.info('Clicked on the "Mark Deceased" button under Customer Info section');
});

Then('Validate Action Details after Deceased', async function () {
  let actualArray = await this.landPage.getActionsRowCount()
  for (let i = 0; i < expectedDeceasedArray.length; i++) {
    expect(await actualArray[i].actionSubtype).toContain(expectedDeceasedArray[i].actionSubtype);
    expect(await actualArray[i].actionDetails).toContain(expectedDeceasedArray[i].actionDetails);
  }
  logger.info("Successfully validated Action Details after marking as deceased");
});

When('Click on Remove Deceased Flag button', async function () {
  await this.landPage.clickRemoveDeceasedFlagButton();
  logger.info('Clicked on the "Remove Deceased Flag" button');
});

When('Fill {string}, {string} and {string} in Deceased popup', async function (firstName, lastName, reason) {
  await this.addCustomerPage.fillInvalidCustomerDetailsInDeceasedPopup(firstName, lastName, reason);
  logger.info(`Filled ${firstName}, ${lastName}, and ${reason} in the Deceased popup`);
});

Then('Validate Wrong First Name Warning message', async function () {
  let warnMsg = await this.addCustomerPage.wrongFirstNameWarnMessage();
  expect(warnMsg).toContain(WRONG_FIRST_NAME_TXT);
  logger.info("Successfully validated the Wrong First Name Warning message");
});

Then('Validate Wrong Last Name Warning message', async function () {
  let warnMsg = await this.addCustomerPage.wrongLastNameWarnMessage();
  expect(warnMsg).toContain(WRONG_LAST_NAME_TXT);
  logger.info("Successfully validated the Wrong Last Name Warning message");
});


When('Fill Customer details in Deceased popup', async function () {
  await this.addCustomerPage.fillCustomerDetailsInDeceasedPopup(this.firstname);
  logger.info(`Filled customer details in the Deceased popup: ${this.firstname}`);
});

Then('Validate Action Details after Remove Deceased', async function () {
  let actualArray = await this.landPage.getActionsRowCount()
  for (let i = 0; i < expectedRemovedDeceasedArray.length; i++) {
    expect(await actualArray[i].actionSubtype).toContain(expectedRemovedDeceasedArray[i].actionSubtype);
    expect(await actualArray[i].actionDetails).toContain(expectedRemovedDeceasedArray[i].actionDetails);
  }
  logger.info("Successfully validated Action Details after removing the deceased flag");
});

Then('Validate status as Deleted in search results', async function () {
  this.searchPage = this.pomManager.getSearchPage();
  let custAccNo = await this.landPage.extractAccountNumber();
  await this.searchPage.clickShowDeletedButton();
  let accNo = await this.searchPage.getAccountNumberInSearchResults();
  expect(accNo).toEqual(custAccNo);
  let status = await this.searchPage.getStatusAsDeletedInSearchResults();
  expect(status).toContain('Deleted');
  logger.info("Successfully validated the status as Deleted in search results");
});

When('Click on suspend delivery in landing page', async function () {
  await this.landPage.clickSuspendDelivery();
  logger.info('Clicked on "Suspend Delivery" in the landing page');
});

Then('Validate account On delivery suspension text in landing page', async function () {
  let infoTXT = await this.landPage.validateAccountOnDeliverySuspensionTXT();
  expect(infoTXT).toContain(ACCOUNT_ON_DELIVERY_SUSPENSION_TXT);
  logger.info("Successfully validated the Account On Delivery Suspension text in the landing page");
});

Then('Validate action details after Suspend in landing page', async function () {
  expect(await this.landPage.getActionsDetails()).toContain(ACCOUNT_ON_DELIVERY_SUSPEND_TXT)
  logger.info("Successfully validated action details after suspending delivery in the landing page");
});

When('Click on unsuspend delivery in landing page', async function () {
  await this.landPage.clickUnsuspendDelivery();
  logger.info('Clicked on "Unsuspend Delivery" in the landing page');
});

Then('Validate action details after unsuspend', async function () {
  expect(await this.landPage.getActionsDetails()).toContain(ACCOUNT_ON_DELIVERY_UNSUSPEND_TXT)
  logger.info("Successfully validated action details after unsuspending delivery in the landing page");
});



When('Click Go To Partner Account button in landing page', async function () {
  await this.landPage.clickGoToPartnerAccountButton();
  logger.info('Clicked on the "Go To Partner Account" button in the landing page');
});


When('Extract Customer email from Customer Info section', async function () {
  this.customerEmail = await this.landPage.extractCustEmail();
  logger.info('Extracted customer email from Customer Info section');
});

When('Extract Partner first name, last name and email from Partner Info section', async function () {
  await this.page.waitForTimeout(20000)
  this.partnerFirstName = await this.landPage.getPartnerFirstName()
  this.partnerLastName = await this.landPage.getPartnerLastName()
  this.partnerEmail = await this.landPage.getPartnerEmail()
  logger.info('Extracted partner first name, last name, and email from Partner Info section');
});

Then('Validate Customer info should contain Partner first name, last name and email', async function () {
  await this.page.waitForTimeout(20000)
  let customerInfo = await this.landPage.getCustInfoSection();
  expect(customerInfo).toContain(this.partnerFirstName)
  expect(customerInfo).toContain(this.partnerLastName)
  expect(customerInfo).toContain(this.partnerEmail)
  logger.info('Successfully validated that Customer info contains Partner first name, last name, and email');
});

Then('Validate Partner info should contain Customer first name and email', async function () {
  await this.page.waitForTimeout(20000)
  let partnerInfo = await this.landPage.validatePartnerInfo();
  expect(partnerInfo).toContain(this.firstname)
  expect(partnerInfo).toContain(this.customerEmail.toLowerCase())
  logger.info('Successfully validated that Partner info contains Customer first name and email');
});


