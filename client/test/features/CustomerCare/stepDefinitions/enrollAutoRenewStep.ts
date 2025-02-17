import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

import { RECIPIENT_COUNTRY_NOT_AVAILABLE_WARNING_MSG } from '../../../../src/constants';

import { faker } from '@faker-js/faker';

export let firstname: string;
export let firstNameForBillingInfo: string;
export let lastNameForBillingInfo: string;



When('Click on Enroll Autorenew', async function () {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.clickEnrollAutorenewButton();
    logger.info('Clicked on Enroll Autorenew button');
});

When('Fill Enroll Autorenew popup and add Self as Recipient', async function () {
    this.enrollAutoRenewPage = this.pomManager.getEnrollAutoRenewPage()
    await this.enrollAutoRenewPage.enrollAutorenewPopupAndAddSelfAsRecipient();
    logger.info('Filled Enroll Autorenew popup and added self as recipient');
});

When('Click on Activate button', async function () {
    await this.enrollAutoRenewPage.clickActivateButton();
    logger.info('Clicked on Activate button');
});

When('Click on Remove button to remove Self from Recipient', async function () {
    await this.enrollAutoRenewPage.clickRemoveButton();
    logger.info('Clicked on Remove button to remove Self from Recipient');
});

When('Click Enter New Credit Card in Payment Info Section', async function () {
    this.enrollAutoRenewPage = this.pomManager.getEnrollAutoRenewPage()
    await this.enrollAutoRenewPage.clickEnterNewCreditCard();
    logger.info('Clicked on Enter New Credit Card in Payment Info Section');
});


Then('Validate self autorenew status as Active in subscriptions section', async function () {
    await this.landPage.getSelfAutorenewStatusAsActive();
    logger.info('Self autorenew status as Active in subscriptions section is successfully validated');
});

Then('Validate Transaction Confirmation popup', async function () {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.transactionConfirmationPopup();
    logger.info('Transaction Confirmation popup successfully validated');
});

When('Fill Enroll Autorenew popup and add Another Recipient', async function () {
    this.enrollAutoRenewPage = this.pomManager.getEnrollAutoRenewPage()
    await this.enrollAutoRenewPage.enrollAutorenewPopupAndAddAnotherRecipient();
    logger.info('Filled Enroll Autorenew popup and added Another Recipient');
});

Then('Validate Recipient Country Not Available Warning Message', async function () {
    let warningMsg = await this.enrollAutoRenewPage.recipientCountryNotAvailableWarnMessage()
    expect(warningMsg).toContain(RECIPIENT_COUNTRY_NOT_AVAILABLE_WARNING_MSG)
    logger.info('Recipient Country Not Available Warning Message successfully validated')
});


When('Fill Enroll Autorenew popup and add Gift Recipient', async function () {
    this.enrollAutoRenewPage = this.pomManager.getEnrollAutoRenewPage()
    await this.enrollAutoRenewPage.enrollAutorenewPopupAndAddGiftRecipient();
    logger.info('Enroll Autorenew popup filled and Gift Recipient added');
});

When('Click on add Another Recipient', async function () {
    await this.enrollAutoRenewPage.clickAddAnotherRecipient();
    logger.info('Clicked on add Another Recipient');
});


Then('Validate Self Autorenew already exists button in Enroll Autorenew popup', async function () {
    let text = await this.enrollAutoRenewPage.selfAutorenewAlreadyExistsButton();
    expect(text).toContain("Self Autorenew already exists")
    logger.info('Self Autorenew already exists button in Enroll Autorenew popup successfully validated');
});

Then('Validate Summary section in Enroll Autorenew popup', async function () {
    let totalAmount = await this.enrollAutoRenewPage.getTotalAmountInSummary();
    let taxAmount = await this.enrollAutoRenewPage.getItemTaxInSummary();
    // expect(totalAmount).toContain("$26.20")
    // expect(taxAmount).toContain("$1.25")
    expect(totalAmount).toContain("$28.19")
    expect(taxAmount).toContain("$3.24")
    logger.info('Summary section in Enroll Autorenew popup successfully validated');
});

When('Click View Details in subscriptions section', async function () {
    await this.landPage.clickViewDetailsInSubscriptions();
    logger.info('View Details button clicked in subscriptions section');
});

When('Click on Cancel Autorenew in Autorenew Details popup', async function () {
    await this.enrollAutoRenewPage.cancelCurrentAutorenew();
    logger.info('Clicked on Cancel Autorenew in Autorenew Details popup');
});

When('Click on Activate Autorenew in Autorenew Details popup', async function () {
    await this.enrollAutoRenewPage.activateCurrentAutorenew();
    logger.info('Clicked on Activate Autorenew in Autorenew Details popup');
});

Then('Validate Process Status as Cancelled in Autorenew Details popup', async function () {
    let processStatus = await this.enrollAutoRenewPage.processStatusInAutorenewDetailsPopup();
    expect(processStatus).toContain("Cancelled");
    logger.info('Process Status as Cancelled in Autorenew Details popup is successfully validated');
});


Then('Validate Product Name, Process Status, Marketing Code, Bundle Price in Autorenew Details popup', async function () {
    let productName = await this.enrollAutoRenewPage.productNameInAutorenewDetailsPopup();
    let processStatus = await this.enrollAutoRenewPage.processStatusInAutorenewDetailsPopup();
    let marketingCode = await this.enrollAutoRenewPage.marketingCodeInAutorenewDetailsPopup();
    let bundlePrice = await this.enrollAutoRenewPage.bundlePriceInAutorenewDetailsPopup();
    expect(productName).toContain("Zoomer Magazine")
    expect(processStatus).toContain("Active")
    expect(marketingCode).toContain("ZTK20MARQ")
    expect(bundlePrice).toContain("$24.95")
    logger.info('Product Name, Process Status, Marketing Code, Bundle Price in Autorenew Details popup are successfully validated');
});

Then('Validate Auto Renewal Info under Actions Tab', async function () {
    await this.page.waitForTimeout(60000)
    await this.landPage.selectActionTab()
    await this.page.waitForTimeout(20000)
    expect(await this.landPage.getActionsType()).toContain('enroll autorenew')
    expect(await this.landPage.getActionsSubType()).toContain('enroll autorenew successful')
    expect(await this.landPage.getActionsDetails()).toContain('Unfulfilled autorenew record inserted with autorenew id')
    logger.info('Auto Renewal Info under Actions Tab is successfully validated');
});

Then('Validate Auto Renewal Info under Actions Tab after Cancellation', async function () {
    await this.page.waitForTimeout(60000)
    await this.landPage.selectActionTab()
    await this.page.waitForTimeout(20000)
    expect(await this.landPage.getActionsType()).toContain('update autorenew')
    expect(await this.landPage.getActionsSubType()).toContain('cancel autorenew')
    expect(await this.landPage.getActionsDetails()).toContain('cancel autorenew record from autorenew record id')
    logger.info('Auto Renewal Info under Actions Tab after Cancellation is successfully validated');
});

Then('Validate Auto Renewal Info under Actions Tab after Activation', async function () {
    await this.page.waitForTimeout(60000)
    await this.landPage.selectActionTab()
    await this.page.waitForTimeout(20000)
    expect(await this.landPage.getActionsType()).toContain('update autorenew')
    expect(await this.landPage.getActionsSubType()).toContain('activate autorenew')
    expect(await this.landPage.getActionsDetails()).toContain('insert new autorenew record from autorenew record id')
    logger.info('Auto Renewal Info under Actions Tab after Activation is successfully validated');
});




When('Click Close button in Autorenew Details popup', async function () {
    await this.enrollAutoRenewPage.clickCloseInAutorenewDetailsPopup();
    logger.info('Clicked Close button in Autorenew Details popup');
});

When('Check Expiry radio button in enroll autorenew popup', async function () {
    await this.enrollAutoRenewPage.CheckExpiryRadioButton();
    logger.info('Checked Expiry radio button in enroll autorenew popup');
});

When('Click Create Recipient to create the customer in enroll autorenew popup', async function () {
    await this.enrollAutoRenewPage.clickCreateRecipientButton();
   firstname = faker.person.firstName() + (Math.random() + 1).toString(36).substring(7)
    // this.firstname = faker.person.firstName() + faker.person.zodiacSign()+ '#%".>!$&*(),;:/?-_+=';
    this.addCustomerPage = this.pomManager.getAddCustomerPage();
    await this.addCustomerPage.fillCustomerDetails(this.firstname);
    logger.info(`Filled in recipient detils for ${this.firstname}`)
    await this.page.waitForTimeout(40000)
    logger.info('Clicked Create Recipient to create the customer in enroll autorenew popup');
});

When('Click search to search the Recipient', async function () {
    await this.enrollAutoRenewPage.searchRecipient(this.firstname)
    await this.page.waitForTimeout(10000)
    logger.info(`Searched for recipient "${this.firstname}" `);
})

Then('Validate Recipient Already Added warning message', async function () {
    let warningMessage = await this.enrollAutoRenewPage.validateRecipientAlreadyAddedTxt();
    expect(warningMessage).toContain("Recipient Already Added")
    logger.info('Validated Recipient Already Added warning message')
    await this.enrollAutoRenewPage.clickCancelButton();
})

//Steps of Update Autorenew Billing
When('Click on Update Autorenew Billing', async function () {
    await this.page.waitForTimeout(3000)
    // Check if the button is enabled
    const isButtonEnabled = await this.landPage.isUpdateAutorenewBillingButtonEnabled();
    if (isButtonEnabled) {
        await this.landPage.clickUpdateAutorenewBillingButton();
        logger.info('Clicked on Update Autorenew Billing');
    } else {
        logger.info('The Update Autorenew Billing button is disabled');
    }
})

When('Click on Update Payment Info', async function () {
    await this.enrollAutoRenewPage.clickUpdatePaymentInfo();
    logger.info('Click on Update Payment Info');
})

When('Click on Payment Method', async function () {
    await this.enrollAutoRenewPage.clickPaymentMethod();
    logger.info('Clicked on Payment Method');
})

When('Fill billing information', async function () {
    this.firstNameForBillingInfo = faker.person.firstName() + (Math.random() + 1).toString(36).substring(7)
    this.lastNameForBillingInfo = faker.person.lastName() + (Math.random() + 1).toString(36).substring(7)
    await this.enrollAutoRenewPage.fillBillingInformation(this.firstNameForBillingInfo, this.lastNameForBillingInfo)
    logger.info('Filled billing information successfully.')
})

Then('Validate credit card holder', async function () {
    await this.page.waitForTimeout(3000)
    this.creditCardHolderName = await this.enrollAutoRenewPage.validateCreditCardHolder();
    expect(this.creditCardHolderName).toContain(this.firstNameForBillingInfo)
    expect(this.creditCardHolderName).toContain(this.lastNameForBillingInfo)
    await this.page.waitForTimeout(3000)
    logger.info('Validated credit card holder')
})

Then('Validate autorenew payment information updated', async function () {
    let message = await this.enrollAutoRenewPage.validateAutorenewPaymentInformationUpdated();
    expect(message).toEqual('autorenew payment information updated!')
    logger.info('Validated autorenew payment information updated')
})




