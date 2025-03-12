import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'

When('Enter values in Billing Address form at CSC2_CourageCAMailAddDiffforT1217 Page', async function () {
    this.CSC2_CourageCAMailAddDiffForT1217Page = await this.pomManager.getCSC2_CourageCAMailAddDiffForT1217Page();
    await this.CSC2_CourageCAMailAddDiffForT1217Page.fillBillingAddress();
})

When('Enter values in Mailing Address form at CSC2_CourageCAMailAddDiffforT1217 Page', async function () {
    this.CSC2_CourageCAMailAddDiffForT1217Page = await this.pomManager.getCSC2_CourageCAMailAddDiffForT1217Page();
    await this.CSC2_CourageCAMailAddDiffForT1217Page.fillMailingAddress();
    logger.info('Mailing Address form has been successfully filled in.');
})



