import {  When, Then } from '@cucumber/cucumber';

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
const assert = require('assert');


When('Enter values in Billing Address form for CSC2_CourageUSOrder32CharsForT1216 Page', async function () {
       this.CSC2_CourageUSOrder32CharsForT1216Page = await this.pomManager.getCSC2_CourageUSOrder32CharsForT1216Page();
       await this.CSC2_CourageUSOrder32CharsForT1216Page.fillBillingAddress();
       logger.info('Billing Address form has been successfully filled in.');
})

When('Enter values in Mailing Address form for CSC2_CourageUSOrder32CharsForT1216 Page', async function () {
       this.CSC2_CourageUSOrder32CharsForT1216Page = await this.pomManager.getCSC2_CourageUSOrder32CharsForT1216Page();
       await this.CSC2_CourageUSOrder32CharsForT1216Page.fillMailingAddress();
       logger.info('Mailing Address form has been successfully filled in.');
})

When('Enter values in Gift Recipient Mailing Address form for CSC2_CourageUSOrder32CharsForT1216 Page', async function () {
       this.CSC2_CourageUSOrder32CharsForT1216Page = await this.pomManager.getCSC2_CourageUSOrder32CharsForT1216Page();
       await this.CSC2_CourageUSOrder32CharsForT1216Page.fillGiftRecipientMailingAddress();
       logger.info('Gift Recipient Mailing Address form has been successfully filled in.');
})

Then('Validate number of char in Billing Address 2 text field to be 32', async function () {
       let text = await this.CSC2_CourageUSOrder32CharsForT1216Page.validateNumberOfCharInBillingAddress2();
       try {
              assert.strictEqual(text.length, 32, `Validation failed: The Billing Address 2 field contains ${text.length} characters instead of 32.`);
              logger.info('Validation passed: The Billing Address 2 field contains exactly 32 characters.');
              console.log('Validation passed: The Billing Address 2 field contains exactly 32 characters.');
       } catch (error) {
              logger.info((error as Error).message);
              logger.error((error as Error).message);
              throw error;
       }
})

Then('Validate number of char in Gift Recepient Address 2 text field to be 32', async function () {
       let text = await this.CSC2_CourageUSOrder32CharsForT1216Page.validateNumberOfCharInGiftRecepientAddress2();
       try {
              assert.strictEqual(text.length, 32, `Validation failed: The Gift Recepient Address 2 field contains ${text.length} characters instead of 32.`);
              logger.info('Validation passed: The Gift Recepient Address 2 field contains exactly 32 characters.');
              console.log('Validation passed: The Gift Recepient Address 2 field contains exactly 32 characters.');
       } catch (error) {
              logger.info((error as Error).message);
              logger.error((error as Error).message);
              throw error;
       }
})

Then('Validate number of char in Mailling Address 2 text field to be 32', async function () {
       let text = await this.CSC2_CourageUSOrder32CharsForT1216Page.validateNumberOfCharInMaillingAddress2();
       try {
              assert.strictEqual(text.length, 32, `Validation failed: The Mailling Address 2 field contains ${text.length} characters instead of 32.`);
              logger.info('Validation passed: The Mailling Address 2 field contains exactly 32 characters.');
              console.log('Validation passed: The Mailling Address 2 field contains exactly 32 characters.');
       } catch (error) {
              logger.info((error as Error).message);
              logger.error((error as Error).message);
              throw error;
       }
})

When('Click Add Gift Recipient button', async function () {
       this.CSC2_CourageUSOrder32CharsForT1216Page = await this.pomManager.getCSC2_CourageUSOrder32CharsForT1216Page();
       await this.CSC2_CourageUSOrder32CharsForT1216Page.clickAddGiftRecipientButton();
       logger.info('Clicked the "Add Gift Recipient" button successfully.');
})

Then('Validate Order Number 2 text', async function () {
       this.CSC2_CourageUSOrder32CharsForT1216Page = await this.pomManager.getCSC2_CourageUSOrder32CharsForT1216Page();
       let text = await this.CSC2_CourageUSOrder32CharsForT1216Page.validateOrderNumber2Text();
       expect(text).toEqual('Order Number 2');
       logger.info(`Validation passed: The text for Order Number 2 is "${text}".`);
})
