import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'




Then('Mouse hover on Payment button to fetch No payment information', async function () {
    this.customerPulsePage = this.pomManager.getCustomerPulsePage()
    let text = await this.customerPulsePage.getNoPaymentInformation();
    logger.info('Fetched no payment information: ' + text);
    expect(text).toEqual('This customer has no payment information on file')
    logger.info('No payment information successfully validated');
});

Then('Mouse hover on Payment button to fetch valid payment information', async function () {
    let text = await this.customerPulsePage.getValidPaymentInformation();
    logger.info('Fetched valid payment information: ' + text);
    expect(text).toEqual('This customer has payment information on file')
    logger.info('This customer has payment information on file');
});

Then('Mouse hover on Address button to fetch valid address information', async function () {
    let text = await this.customerPulsePage.getAddressInformation();
    logger.info('Fetched valid address information: ' + text);
    expect(text).toEqual('This customer has valid address information')
    logger.info('This customer has valid address information');
});

Then('Mouse hover on phone number button to fetch No phone number information', async function () {
    let text = await this.customerPulsePage.getNoPhoneNumberInformation();
    logger.info('Fetched no phone number information: ' + text);
    expect(text).toEqual('This customer has no valid phone number')
    logger.info('No phone number information successfully validated');
});

When('Click on phone number button and fill phone number with {string}', async function (number: string) {
    await this.customerPulsePage.fillPhoneNumber(number);
    logger.info(`Clicked on phone number button and filled phone number with : ${number}`)
})

Then('Mouse hover on phone number button to fetch valid phone number information', async function () {
    let text = await this.customerPulsePage.getValidPhoneNumberInformation();
    logger.info('Fetched valid phone number information: ' + text);
    expect(text).toEqual('This customer has a valid phone number')
    logger.info('This customer has a valid phone number');
});

Then('Mouse hover on email button to fetch No email information', async function () {
    let text = await this.customerPulsePage.getNoEmailInformation();
    logger.info('Fetched No email information: ' + text);
    expect(text).toEqual('This customer has not provided an email address')
    logger.info('No email information successfully validated');
});

When('Click on email button and fill email with {string}', async function (email: string) {
    await this.customerPulsePage.fillEmail(email);
    logger.info(`Clicked on email button and filled email with : ${email}`)
})

Then('Mouse hover on email button to fetch valid email information', async function () {
    let text = await this.customerPulsePage.getValidEmailInformation();
    logger.info('Fetched valid email information: ' + text);
    expect(text).toEqual('This customer has provided their email address')
    logger.info('This customer has provided their email address');
});

When('Remove phone number and email information of customer', async function () {
    this.customerPulsePage = this.pomManager.getCustomerPulsePage();
    await this.customerPulsePage.removePhoneNumberAndEmailInfo();
})

