import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { CyberSourcePageUrl } from '../../../../src/constants';

Given('User opens CyberSource page', async function () {
    try {
        await this.page.goto(CyberSourcePageUrl, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Successfully navigated to the CyberSource page: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Navigation timeout error:', error.message);
        } else {
            console.error('Page navigation error:', error.message);
        }
    }
});

When('Enter valid payment detail {string} and {string}  and {string}', async function (cardnumb, cvc, cardexp) {
    this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    await this.CyberSourcePage.enterCorrectPaymentDetails(cardnumb, cvc, cardexp)
    logger.info(`Entering valid payment detail: Card Number - ${cardnumb}, Expiry Date - ${cardexp}, CVV - ${cvc}`);
})

When('Enter valid payment detail', async function ( ) {
    this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    await this.CyberSourcePage.enterPaymentDetail();
    
})
Then('Validate Offer Has All Delivery Types text at Cyber Source Page', async function () {
   this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    const text = await this.CyberSourcePage.validateOfferHasAllDeliveryTypesTxt();
    expect(text).toEqual('Offer has all delivery types');
    logger.info('The text "Offer has all delivery types" has been successfully validated');
})

When('Select offers from the drop downs at Cyber Source Page', async function () {
    await this.CyberSourcePage.selectOffers();
    logger.info('Offer successfully selected from the drop downs');
})

When('Enter values in Mailing and Billing Address form at Cyber Source Page', async function () {
    this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    await this.CyberSourcePage.fillMailingAndBillingAddress();
    logger.info('Values successfully entered in Mailing and Billing Address form');
})

When('Enter values in Gift Recipient Mailing Address form at Cyber Source Page', async function () {
    await this.CyberSourcePage.fillGiftRecipientMailingAddressCA();
    logger.info('Values successfully entered in Gift Recipient Mailing Address form');
})

Then('Validate Per Gift text in Summary section at Cyber Source Page', async function () {
   this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    await this.CyberSourcePage.validatePerGiftTxt();
    logger.info('The text "Per Gift" in Summary section has been successfully validated');
})

Given('Check This Is A Gift checkbox at Cyber Source Page', async function () {
   this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    await this.CyberSourcePage.checkThisIsAGiftCB();
    logger.info('The checkbox "This Is A Gift" successfully checked');
})

When('Check I have a different mailing address checkbox at Cyber Source Page', async function () {

   this.CyberSourcePage = await this.pomManager.getCyberSourcePage();

    await this.CyberSourcePage.checkMailingAddressDifferentCB();
    logger.info('The checkbox "I have a different mailing address" successfully checked');
})

When('Enter values in Mailing Address form at Cyber Source Page', async function () {
    await this.CyberSourcePage.fillMailingAddress();
    logger.info('Values successfully entered in Mailing Address form');
})

Then('Validate Mailing Address text at Cyber Source Page', async function () {
    const text = await this.CyberSourcePage.validateMailingAddressTxt();
    expect(text).toEqual('Mailing Address');
    logger.info('The text "Mailing Address" has been successfully validated');
})

// Then('Validate Tax Value', async function () {
//    this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
//     const tax = await this.CyberSourcePage.validateTaxValue();
//     expect(tax).toBe('$70.00');
    
// })

// Then('Validate Amount Before Order', async function () {
//    this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
//     this.beforeOrderAmount = await this.CyberSourcePage.validateAmountBeforeOrder();
//     const beforeOrderAmount = await this.CyberSourcePage.validateAmountBeforeOrder();
//     expect(beforeOrderAmount).toBe(2020.00);
//     logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
// })

Then('Validate Gift Order Amount Before Order at Cyber Source Page', async function () {
   this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    this.beforeOrderAmount = await this.CyberSourcePage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.CyberSourcePage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(12);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})

Then('Validate Different Mailing Address Order Amount Before Order at Cyber Source Page', async function () {
   this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    this.beforeOrderAmount = await this.CyberSourcePage.validateAmountBeforeOrder();
    const beforeOrderAmount = await this.CyberSourcePage.validateAmountBeforeOrder();
    expect(beforeOrderAmount).toBe(12);
    logger.info(`Successfully fetched the Total amount: ${this.beforeOrderAmount}`);
})
// Then('Validate Amount After Order', async function () {
//    this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
//     this.AfterOrderAmount = await this.CyberSourcePage.validateAmountAfterOrder();
//     const AfterOrderAmount = await this.CyberSourcePage.validateAmountAfterOrder();
//     expect(AfterOrderAmount).toBe(2020.00);
//     logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
// })

Then('Validate Gift Order Amount After Order at Cyber Source Page', async function () {
   this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    this.AfterOrderAmount = await this.CyberSourcePage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.CyberSourcePage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(12);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Validate Different Mailing Address Order Amount After Order at Cyber Source Page', async function () {
   this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    this.AfterOrderAmount = await this.CyberSourcePage.validateAmountAfterOrder();
    const AfterOrderAmount = await this.CyberSourcePage.validateAmountAfterOrder();
    expect(AfterOrderAmount).toBe(1950);
    logger.info(`Successfully fetched the Total amount: ${this.AfterOrderAmount}`);
})

Then('Verify Email Send to Recipient from Cyber Source Page', async function () {
    this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    await this.CyberSourcePage.verifyEmailSentToSender();
    logger.info('Clicked the Test Email Address');

});

// Then('Validate Total Amount before & after Order', async function () {
//    this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
//     expect(this.beforeOrderAmount).toEqual(this.AfterOrderAmount)
//     logger.info(`Summary Amount (${this.beforeOrderAmount}) and Total Amount (${this.AfterOrderAmount}) are equal.`);

        
// })

Then('Verify Email Content at Maiinator Email', async function () {
      this.CyberSourcePage = await this.pomManager.getCyberSourcePage();
    const text = await this.CyberSourcePage.validateEmailContentText();
    expect(text).toEqual('Thank you for your paid membership to B.A.S.S.');
    logger.info('Validate Required Text in Email Content');
});
