import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AGENTEMAIL, AGENTNNAME, DESCRIPTION } from '../../../../src/constants';
import { logger } from '../support/hook';


When('Click on Renewal Groups', async function () {
    await this.landPage.clickRenewalGroups();
    logger.info('Clicked Renewal Groups');
});

When('Click on Renewal Groups Add Button', async function () {
    this.renewalGroupsPage = await this.pomManager.getrenewalGroupsPage()
    await this.renewalGroupsPage.clickRenewalGroupsAddButton();
    logger.info('Clicked Renewal Groups Add Button');
});

Then('Click on Brand Drop Down box', async function () {
    await this.renewalGroupsPage.clickBrandDropDown();
    logger.info('Clicked Renewal Groups');
});

Then('Select Brand', async function () {
    await this.renewalGroupsPage.selectfromBrandDropDown();
    logger.info('Clicked Renewal Groups');
})

Then('Fill the Renewal Group Name', async function () {
    await this.renewalGroupsPage.fillRenewalGroupName();
    logger.info('Filled Renewal Groups');
})

Then('Click on Add button to Create Renewal Group', async function () {
    this.renewalGroupsPage = await this.pomManager.getrenewalGroupsPage()
    await this.renewalGroupsPage.createNewRenewalGroup();
    logger.info('Renewal Groups Created Successfully');
})

Then('Verify the Success Message', async function () {
    let text = await this.renewalGroupsPage.validatesuccessfullyaddedRenewalGroup();
    expect(text).toEqual('renewal group successfully created');
    logger.info(`Validated Required Text in newly created Renewal.`);
});

Then('Click on Edit Icon & Update Existing Record', async function () {
    this.renewalGroupsPage = await this.pomManager.getrenewalGroupsPage()
    await this.renewalGroupsPage.editRenewalGroup();
    logger.info('Renewal Groups edited Successfully');
});

Then('Click on Data upload button of Renewal Groups', async function () {
      this.renewalGroupsPage = await this.pomManager.getrenewalGroupsPage()
    await this.renewalGroupsPage.clickdataUploadGroupRenewalButton();
    logger.info(`Clicked on Upload Button in Renewal Group Page`);
});

Then('Select Upload Existing Renewal Groups link from drop down', async function () {
     this.renewalGroupsPage = await this.pomManager.getrenewalGroupsPage()
    await this.renewalGroupsPage.chooseUpdateExistingRecordsLink();
    logger.info(`Select Update Existing Record link`);
});

Then('Upload Renewal Groups file with exisitng records', async function () {
     this.renewalGroupsPage = await this.pomManager.getrenewalGroupsPage()
    await this.renewalGroupsPage.selectRGfilestoupload();
        logger.info('Select File To Upload');
    });
Then('Validated the updated Renewal Group list', async function () {
    let text = await this.renewalGroupsPage.validateSuccessfullyUpdatedRGrecords();
    expect(text).toContain('Your batch file has been processed.');
    logger.info('Validated File Uploaded for existing records');
});
When('Click on Renewal Group Clone Buttons',async function () {
    this.renewalGroupsPage = await this.pomManager.getrenewalGroupsPage()
    await this.renewalGroupsPage.clickonCloneButton();
    logger.info('Clicked on Clone Button');
});

Then ('Validate the RG Cloned Creation Message',async function () {
   this.renewalGroupsPage = await this.pomManager.getrenewalGroupsPage()
    let text = await this.renewalGroupsPage.validateRenewalGroupSuccessfullyClonedText();
    expect(text).toEqual('renewal group successfully created');
    logger.info('Validated Renewal group Successfully Cloned Text');
   })