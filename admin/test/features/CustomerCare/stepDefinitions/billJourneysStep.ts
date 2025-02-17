import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

When('Click Bill Journeys', async function () {
    await this.landPage.clickBillJourneys();
    logger.info('Clicked Bill Journeys');
})

When('Add New Bill Journey', async function () {
    this.billJourneysPage = await this.pomManager.getBillJourneysPage()
    await this.billJourneysPage.addNewBillJourney();
    logger.info('Add New Bill Journey');
})

When('Edit Bill Journey', async function () {
    this.billJourneysPage = await this.pomManager.getBillJourneysPage()
    await this.billJourneysPage.editBillJourney();
    logger.info('Edit Bill Journey');
})

When('Choose File To Upload data in Bill Journey', async function () {
    this.billJourneysPage = await this.pomManager.getBillJourneysPage()
    await this.billJourneysPage.chooseFileToUpload();
    logger.info('Choose File To Upload data in Bill Journey');
})

Then('Validate Bill Journey Successfully Created Text', async function () {
    this.billJourneysPage = await this.pomManager.getBillJourneysPage()
    let text = await this.billJourneysPage.validateBillJourneySuccessfullyCreatedText();
    expect(text).toEqual('bill journey successfully created');
    logger.info('Validated Bill Journey Successfully Created Text');
});

Then('Validate Bill Journey Successfully Updated Text', async function () {
    let text = await this.billJourneysPage.validateBillJourneySuccessfullyUpdatedText();
    expect(text).toEqual('bill journey successfully updated');
    logger.info('Validated Bill Journey Successfully Updated Text');
});

When('The user selects the English language', async function () {
    this.loginP = await this.pomManager.getLoginPage();
    await this.loginP.selectEnglishLanguage(); // Use your method to select English
});

Then('The page language should be English', async function () {
    this.loginP = await this.pomManager.getLoginPage();

    // Select English language
    await this.loginP.selectEnglishLanguage();

    // Wait for language to be set
    const currentLanguage = await this.loginP.getCurrentLanguage();

    console.log('Current language:', currentLanguage); // Debugging line

    expect(currentLanguage).toBe('English');  // Use Playwright's expect and toBe method
});