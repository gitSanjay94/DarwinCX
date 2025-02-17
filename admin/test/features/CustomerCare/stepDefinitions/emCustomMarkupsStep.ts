import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

When('Click on Email Manager', async function () {
    this.landPage = await this.pomManager.getLandingPage()
    await this.landPage.clickEmailManager();
    logger.info('Clicked on Email Manager');
})

Then('Validate Email Manager text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateEmailManagerText();
    expect(text).toEqual("Email Manager");
    logger.info('Email Manager text successfully validated');
})

When('Click on Edit button in Email Manager page', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickEditButton();
    logger.info('Clicked on Edit button in Email Manager page');
})

When('Click on CUSTOM MARKUPS', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickCustomMarkups();
    logger.info('Clicked on CUSTOM MARKUPS');
})

When('Click on Edit button in CUSTOM MARKUPS page', async function () {
    this.emCustomMarkupsPage = await this.pomManager.getEMCustomMarkupsPage();
    await this.emCustomMarkupsPage.clickEditButton();
    logger.info('Clicked on Edit button in CUSTOM MARKUPS page');
})

When('Edit CUSTOM MARKUPS', async function () {
    this.emCustomMarkupsPage = await this.pomManager.getEMCustomMarkupsPage();
    await this.emCustomMarkupsPage.editCustomMarkups();
    logger.info('CUSTOM MARKUPS have been successfully edited.')
})

When('Click on Save button in CUSTOM MARKUPS page', async function () {
    this.emCustomMarkupsPage = await this.pomManager.getEMCustomMarkupsPage();
    await this.emCustomMarkupsPage.clickSaveButton();
    logger.info('Clicked on Save button in CUSTOM MARKUPS page');
})

When('Click on Cancel button in CUSTOM MARKUPS page', async function () {
    this.emCustomMarkupsPage = await this.pomManager.getEMCustomMarkupsPage();
    await this.emCustomMarkupsPage.clickCancelButton();
    logger.info('Clicked on Cancel button in CUSTOM MARKUPS page');
})

Then('Validate Edit button is visible in CUSTOM MARKUPS page', async function () {
    this.emCustomMarkupsPage = await this.pomManager.getEMCustomMarkupsPage();
    let text = await this.emCustomMarkupsPage.validateEditButton();
    expect(text).toEqual('Edit');
    logger.info('Validate Edit button is visible in CUSTOM MARKUPS page');
})


