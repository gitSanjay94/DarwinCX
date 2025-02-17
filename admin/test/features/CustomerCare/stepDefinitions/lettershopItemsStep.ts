import { When, Then, Given } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

When('Click Lettershop Items', async function () {
    await this.landPage.clickLettershopItems();
    logger.info('Clicked Lettershop Items');
})

When('Add New Lettershop Items', async function () {
    this.lettershopItemsPage = await this.pomManager.getLettershopItemsPage()
    await this.lettershopItemsPage.addNewLettershopItem();
    logger.info('Add New Lettershop Items');
})


When('Edit Lettershop Item', async function () {
    this.lettershopItemsPage = await this.pomManager.getLettershopItemsPage()
    await this.lettershopItemsPage.editLettershopItem();
    logger.info('Edit Lettershop Item');
})

When('Click on clone button for first ID', async function () {
    this.lettershopItemsPage = await this.pomManager.getLettershopItemsPage()
    await this.lettershopItemsPage.clickCloneFirstID();
    logger.info('Click on clone button for first ID');
})


Then('Validate Required Text in popup', async function () {
    this.lettershopItemsPage = await this.pomManager.getLettershopItemsPage()
    let text = await this.lettershopItemsPage.validateRequiredText();
    expect(text).toEqual('*Required');
    logger.info('Validated Required Text in Add New Lettershop Item popup');
});

Then('Validate Lettershop Item Successfully Updated Text',async function(){
    let text = await this.lettershopItemsPage.validateLettershopItemSuccessfullyUpdatedText();
    expect(text).toEqual('lettershop item successfully updated');
    logger.info('Lettershop Item Successfully Updated Text validated');
})

Then('Validate Lettershop Item Successfully Created Text',async function(){
    let text = await this.lettershopItemsPage.validateLettershopItemSuccessfullyCreatedText();
    expect(text).toEqual('lettershop item successfully created');
    logger.info('Lettershop Item Successfully Created Text validated');
})



