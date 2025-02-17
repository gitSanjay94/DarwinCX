import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AGENTNNAME, AGENTEMAIL, DESCRIPTION, AGENTNNAME2, AGENTEMAIL2} from '../../../../src/constants';
import { logger } from '../support/hook';




let expectedPurchaseSubscriptionArray = [
    {
        marketing_code: 'ZTW17MDTQ edit/ ',
        transactionDate: 'Wed Jan 03 2024 12:25:45',
        status: 'Active',
        deliveryType: 'Print and Digital',
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

let expectedInternationalSubscriptionArray = [
    {
        itemName: 'Zoomer 1yr (6 issues) $14.98 + tax',
        marketing_code: 'ZTW17MDTQ edit/ ',
        itemTotalPrice: '14.98',
        deliveryType: 'Print and Digital',
        status: 'Active',
        // itemName: '1 Year of Zoomer Mag + CARP membership + International/US ShippingTo',
        // marketing_code: 'ZTW17MDTQ',
        // itemTotalPrice: '29.95',
        // deliveryType: '',
        // status: 'Queued',

    }
];
let expectedCancellationArray = [
    {
        actionDetails: 'Cancellation'
    },
    {
        actionDetails: "Cancel transaction successful"
    }
];
let expectedCancellationRecord = [
    {
        status: 'Expired',
        itemTotalPrice: '16.93',
        itemQuantity: '1',
    },
    {
        status: 'Expired',
        itemTotalPrice: '14.97',
        itemQuantity: '12',
    },
    {
        status: '',
        itemTotalPrice: '0',
        itemQuantity: '1',
    },
    {
        status: 'Expired',
        itemTotalPrice: '-16.93',
        itemQuantity: '1',
    },{
        status: 'Expired',
        itemTotalPrice: '-13.75',
        itemQuantity: '-11',
    }
]


When('Click Purchase Subscription', async function () {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    await this.landPage.clickPurchaseSubscription();
    await this.page.waitForTimeout(20000)
    logger.info('Clicking Purchase Subscription button');
});

When('Select the Offer', async function () {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    await this.psPage.selectOffer();
    await this.page.waitForTimeout(50000)
    logger.info('Selecting the offer');
})

Then('Select the LifeTime MemberShip Offer', async function () {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    await this.psPage.selectLifeTimeOffer();
    await this.page.waitForTimeout(10000)
    logger.info('Selecting the Lifetime Membership offer');
})

When('Select the International Offer', async function () {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    await this.psPage.selectInternationalOffer();
    logger.info('Selecting the International offer');
})

Then('Validate Summary section', async function () {
    await this.page.waitForTimeout(20000)
    let calculatedAmount = await this.psPage.calculateSummaryTotal();
    let totalAmount = await this.psPage.getSummaryTotal();
    expect(calculatedAmount).toEqual(totalAmount)
    logger.info('Amount under summary section is successfully validated')
})

When('Enter valid payment details {string} and {string}  and {string}', async function (cardnumb, cardexp, cvc) {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    await this.psPage.enterCorrectPaymentDetails(cardnumb, cardexp, cvc)
    logger.info(`Entering valid payment details: Card Number - ${cardnumb}, Expiry Date - ${cardexp}, CVV - ${cvc}`);
})

Then('Validate user should be able to purchase the subscription with valid payment details', async function () {
    await this.page.waitForTimeout(10000)
    await this.landPage.paymentConfirmationMessage()
    expect(await this.landPage.paymentConfirmationMessage()).toEqual("true")
    await this.landPage.clickOkOnTransactionConfirmation();
    logger.info('User successfully purchased the subscription with valid payment details');
})

When('Validate a warning message should be shown to the user on missing one of the given payment details {string} and {string} and {string}', async function (cardnumb, cardexp, cvc) {
    await this.psPage.selectOffer();
    let warnmessge = await this.psPage.fillPaymentDetails(" ", cardexp, cvc)
    expect(warnmessge, "Your card number is incomplete.");
    logger.info(warnmessge)
    //await this.page.waitForTimeout(2000)
    warnmessge = await this.psPage.fillPaymentDetails(cardnumb, " ", cvc)
    expect(warnmessge, "Your card's expiration date is incomplete.");
    logger.info(warnmessge)
    //await this.page.waitForTimeout(2000)
    warnmessge = await this.psPage.fillPaymentDetails(cardnumb, cardexp, " ")
    expect(warnmessge, "Your card's security code is incomplete.");
    logger.info("Warning message shown to the user on entering missing payment details: " + warnmessge);
});


Then('Validate on not selecting Product Offer shows error message "Please select a product."', async function () {
    await this.page.waitForTimeout(10000)
    await this.psPage.paidToPublishierPaymentOptionSelection();
    await this.page.waitForTimeout(5000)
    expect(await this.psPage.getOfferNotSelectedErrorMessage()).toEqual("Please select a product.");
    expect(await this.psPage.getAttributeValue("class", this.psPage.offerNotSelectedError)).toContain("disabled")
    logger.info('Error message "Please select a product." is successfully validated when no product offer is selected.');
});


Then('Validate on not selecting Product and Payment Option shows error message "Please select a product and enter payment information."', async function () {
    expect(await this.psPage.getOfferAndPaymentNotSelectedErrorMessage()).toEqual("Please select a product and enter payment information.");
    expect(await this.psPage.getAttributeValue("class", this.psPage.offerAndPaymentOptionNotSelectedError)).toContain("disabled")
    logger.info('Error message "Please select a product and enter payment information." is successfully validated when no product and payment option are selected.');
});


Then('Validate Purchase Summary section', async function () {
    let actualArray = await this.landPage.getPurchaseHistoryRowCount()
    logger.info("Purchase Subscription Actual Values", actualArray)
    for (let i = 0; i < expectedPurchaseSubscriptionArray.length; i++) {
        expect(await actualArray[i].marketing_code).toContain(expectedPurchaseSubscriptionArray[i].marketing_code);
        expect(await actualArray[i].itemName).toContain(expectedPurchaseSubscriptionArray[i].itemName);
        expect(await actualArray[i].itemQuantity).toContain(expectedPurchaseSubscriptionArray[i].itemQuantity);
        expect(await actualArray[i].itemTotalPrice).toContain(expectedPurchaseSubscriptionArray[i].itemTotalPrice);
        expect(await actualArray[i].deliveryType).toContain(expectedPurchaseSubscriptionArray[i].deliveryType);
        expect(await actualArray[i].remaining).toContain(expectedPurchaseSubscriptionArray[i].remaining);
        expect(await actualArray[i].status).toContain(expectedPurchaseSubscriptionArray[i].status);
    }
    logger.info('Purchase Summary section is successfully validated.');
})

Then('Validate Susbcription section', async function () {
  expect(await this.landPage.getMagazineExpiry()).toBeTruthy()
  expect(await this.landPage.getCardExpiry()).toBeTruthy()
  logger.info('Subscription section is successfully validated.');

})

Then('Validate Comments section', async function () {

    expect(await this.landPage.getAgentName()).toEqual(AGENTNNAME)  
    expect(await this.landPage.getAgentEmail(), AGENTEMAIL)
    expect(await this.landPage.getDescription(), DESCRIPTION)
    logger.info('Comments section is successfully validated.');
})

Then('Validate Comments section Purchase Subscription with country other than "Canada"', async function () {

    expect(await this.landPage.getAgentName()).toEqual(AGENTNNAME2)  
    expect(await this.landPage.getAgentEmail(), AGENTEMAIL2)
    expect(await this.landPage.getDescription(), DESCRIPTION)
    logger.info('Comments section is successfully validated.');
})

When('Selected Cheque as payment option and fill the cheque amount', async function () {
    await this.psPage.paidByChequePaymentOptionSelection()
    logger.info('Selected Cheque as payment option and filled the cheque amounts.');
})

When('Selected PaidToPublisher as payment option', async function () {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    await this.psPage.paidToPublishierPaymentOptionSelection()
    logger.info('Selected PaidToPublisher as payment option.');
})

When('Select the bundle offer', async function () {
    await this.psPage.selectBundleOffer()
    logger.info('Selected the bundle offer.');
})

When('Select the Auto Renewal Bundles option to enable bundling', async function () {
    await this.psPage.enableBundling()
    logger.info('Selected the Auto Renewal Bundles option to enable bundling');
})

When('Use the Saved Credit Card option to make payment', async function () {
    await this.psPage.useSavedCardOption()
    logger.info('Use the Saved Credit Card option to make payment');
})

When('Click Submit button', async function () {
    await this.psPage.clickRenewButton()
    await this.page.waitForTimeout(20000)
    logger.info('Clicked Submit button');
})

Then('Validate Renewal Bundles details in the Summary section', async function () {
    expect(await this.psPage.getBundleOfferSummary()).toContain("2 Year CARP membership:  $0.00")
    logger.info('Renewal Bundles details in the Summary section is successfully validated');
})

Then('Validate Product is unavailable in selected country message', async function () {
    let warningMessage = await this.psPage.validateProductUnavailableMessage();
    expect(await warningMessage).toContain('Product is unavailable in selected country');
    logger.info("Product is unavailable in selected country Message validated under main offer section");
})

Then('Validate Purchase History section for international product', async function () {
    let actualArray = await this.landPage.getPurchaseHistoryRowCount()
    logger.info("Purchase Subscription Actual Values", actualArray)
    for (let i = 0; i < expectedInternationalSubscriptionArray.length; i++) {
        expect(await actualArray[i].marketing_code).toContain(expectedInternationalSubscriptionArray[i].marketing_code);
        expect(await actualArray[i].itemName).toContain(expectedInternationalSubscriptionArray[i].itemName);
        expect(await actualArray[i].itemTotalPrice).toContain(expectedInternationalSubscriptionArray[i].itemTotalPrice);
        expect(await actualArray[i].deliveryType).toContain(expectedInternationalSubscriptionArray[i].deliveryType);
        expect(await actualArray[i].status).toContain(expectedInternationalSubscriptionArray[i].status);
    }
    logger.info('Purchase History section for international product is successfully validated')
})

Then('Validate Payment Details in Summary section', async function () {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    await this.psPage.validatePaymentDetails() //put assertions
    logger.info('Payment Details in Summary section is successfully validated')
})


When('Click on TransactionID in purchase history section', async function () {
    await this.landPage.clickTransactionID();
    logger.info('Clicked on TransactionID in purchase history section')
})


When('Click on Show Change Payment Method Options', async function () {
    await this.landPage.clickShowChangePaymentMethodOptions();
    logger.info('Clicked on Show Change Payment Method Options');
})

When('Click on Select Payment Method Button', async function () {
    await this.landPage.clickSelectPaymentMethod();
    logger.info('Clicked on Select Payment Method Button');
})

When('Select {string} as Payment Method From DD', async function (selectPaymentMethod) {
    await this.landPage.selectPaymentMethodFromDD(selectPaymentMethod);
    logger.info(`Selected "${selectPaymentMethod}" as Payment Method.`);
})

When('Click on Change Payment Method', async function () {
    await this.landPage.clickChangePaymentMethod();
    logger.info('Clicked on Change Payment Method');
})

Then('Validate {string} as Payment Method', async function (paymentMethod) {
    await this.landPage.validatePaymentMethod(paymentMethod);
    logger.info(`Payment Method ${paymentMethod} successfully validated`);
})

Then('Check Change Payment Button to be disabled', async function () {
    let changePaymentButton = await this.landPage.changePaymentMethodToBeDisabled();
    await expect(changePaymentButton).toBeDisabled({ timeout: 10000 });
    logger.info('Verified that the Change Payment Button is disabled');
});

When('Click on Show Cancellation Options', async function () {
    await this.landPage.clickShowCancellationOptions();
    logger.info('Clicked on Show Cancellation Options')
})

When('Click Select Refund Method Button', async function () {
    await this.landPage.clickSelectRefundMethodButton();
    logger.info('Clicked on Select Refund Method Button')
})

When('Select {string} as Refund Method From DD', async function (selectRefundMethod) {
    await this.landPage.selectRefundMethodFromDD(selectRefundMethod);
    logger.info(`Selected "${selectRefundMethod}" as Payment Method.`);
})

When('Select Reason and click on Cancel Transaction', async function () {
    await this.landPage.selectReasonAndCancelTransaction();
    logger.info('Selected Reason and  clicked on Cancel Transaction')
})

Then('Validate Comments section after Cancellation', async function () {
    expect(await this.landPage.getDescription(), 'Cancel transaction successful')
    logger.info("Successfully validated the Comments section after Cancellation");
});

Then('Validate Action Details after Cancellation', async function () {
    let actualArray = await this.landPage.getActionsRowCount()
    for (let i = 0; i < expectedCancellationArray.length; i++) {
        expect(await actualArray[i].actionDetails).toContain(expectedCancellationArray[i].actionDetails);
    }
    logger.info("Successfully validated Action Details after Cancellation");
});

Then('Validate status as Expired under the Purchase History Section', async function () {
    let actualArray = await this.landPage.getPurchaseHistoryRowCount();
     for (let i = 0; i < expectedCancellationRecord.length; i++) {
        expect(await actualArray[i].itemQuantity).toContain(expectedCancellationRecord[i].itemQuantity);
        expect(await actualArray[i].itemTotalPrice).toContain(expectedCancellationRecord[i].itemTotalPrice);
        expect(await actualArray[i].status).toContain(expectedCancellationRecord[i].status);
    }
    logger.info('Validated status as Expired under the Purchase History Section');
});


When('Enter valid payment details {string} and {string}  and No CVV', async function (cardnumb, cardexp) {
    this.psPage = this.pomManager.getPurchaseSubscriptionPage();
    await this.psPage.enterCorrectPaymentDetailsWithNoCVV(cardnumb, cardexp)
    logger.info(`Entering valid payment details: Card Number - ${cardnumb}, Expiry Date - ${cardexp} and No CVV`);
});

When('the user selects the English language', async function () {
   this.psPage = await this.pomManager.getPurchaseSubscriptionPage();
  await this.psPage.selectEnglishLanguage(); // Use your method to select English
});

Then('the page language should be English', async function () {
  this.psPage = await this.pomManager.getPurchaseSubscriptionPage();

  // Select English language
  await this.psPage.selectEnglishLanguage();

  // Wait for language to be set
  const currentLanguage = await this.psPage.getCurrentLanguage();

  console.log('Current language:', currentLanguage); // Debugging line

  expect(currentLanguage).toBe('English');  // Use Playwright's expect and toBe method
});










