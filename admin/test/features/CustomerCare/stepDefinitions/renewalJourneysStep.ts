import { When, Then, Given } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

When('Click Renewal Journeys', async function () {
    await this.landPage.clickRenewalJourneys();
    logger.info('Clicked Renewal Journeys');
})

When('Add New Renewal Journey', async function () {
    this.renewalJourneysPage = await this.pomManager.getRenewalJourneysPage()
    await this.renewalJourneysPage.addNewrenewalJourney();
    logger.info('Add New Renewal Journey');
})

When('Edit Renewal Journey', async function () {
    this.renewalJourneysPage = await this.pomManager.getRenewalJourneysPage()
    await this.renewalJourneysPage.editrenewalJourney();
    logger.info('Edit Renewal Journey');
})

When('Choose File To Upload data in Renewal Journey', async function () {
    this.renewalJourneysPage = await this.pomManager.getRenewalJourneysPage()
    await this.renewalJourneysPage.chooseFileToUpload();
    logger.info('Choose File To Upload data in Renewal Journey');
})

Then('Validate File Uploaded Successfully', async function () {
   this.renewalJourneysPage = await this.pomManager.getRenewalJourneysPage()
    let text = await this.renewalJourneysPage.validateSuccessfullyUpdatedRJrecords();
    expect(text).toContain('processed');
    logger.info('Validated File Uploaded');
});

Then('Validate Renewal Journey Successfully Created Text', async function () {
    this.renewalJourneysPage = await this.pomManager.getRenewalJourneysPage()
    let text = await this.renewalJourneysPage.validateRenewalJourneySuccessfullyCreatedText();
    expect(text).toEqual('renewal journey successfully created');
    logger.info('Validated Renewal Journey Successfully Created Text');
});

Then('Validate Renewal Journey Successfully Updated Text', async function () {
    let text = await this.renewalJourneysPage.validaterenewalJourneySuccessfullyUpdatedText();
    expect(text).toEqual('renewal journey successfully updated');
    logger.info('Validated Renewal Journey Successfully Updated Text');
});
When('Click on Clone Buttons',async function () {
    this.renewalJourneysPage = await this.pomManager.getRenewalJourneysPage()
    await this.renewalJourneysPage.clickonCloneButton();
    logger.info('Clicked on Clone Button');
});

Then ('Validate the Cloned Creation Message',async function () {
    this.renewalJourneysPage = await this.pomManager.getRenewalJourneysPage()
    let text = await this.renewalJourneysPage.validateRenewalJourneySuccessfullyClonedText();
    expect(text).toEqual('renewal journey successfully created');
    logger.info('Validated Renewal Journey Successfully Cloned Text');
   })