import { When, Then, Given } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

When('Click Lettershop Bundles', async function () {
    await this.landPage.clickLettershopBundles();
    logger.info('Clicked Lettershop Bundles');
})

When('Add New Lettershop Bundles', async function () {
    this.lettershopBundlesPage = await this.pomManager.getLettershopBundlesPage()
    await this.lettershopBundlesPage.addNewLettershopBundle();
    logger.info('Add New Lettershop Bundles');
})

When('Edit Lettershop Bundles', async function () {
    this.lettershopBundlesPage = await this.pomManager.getLettershopBundlesPage()
    await this.lettershopBundlesPage.editLettershopBundle();
    logger.info('Edit Lettershop Bundles');
})

Then('Validate Lettershop Bundle Successfully Updated Text', async function () {
    let text = await this.lettershopBundlesPage.validateLettershopBundleSuccessfullyUpdatedText();
    expect(text).toEqual('lettershop bundle successfully updated');
    logger.info('Lettershop Bundle Successfully Updated Text validated');
})

Then('Validate Lettershop Bundle Successfully Created Text', async function () {
    this.lettershopBundlesPage = await this.pomManager.getLettershopBundlesPage()
    let text = await this.lettershopBundlesPage.validateLettershopBundleSuccessfullyCreatedText();
    expect(text).toEqual('lettershop bundle successfully created');
    logger.info('Lettershop Bundle Successfully Created Text validated');
})









