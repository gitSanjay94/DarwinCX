import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AGENTEMAIL, AGENTNNAME, DESCRIPTION } from '../../../../src/constants';
import { logger } from '../support/hook';


When('Click on Renewal Categories', async function () {
    await this.landPage.clickRenewalCategories();
    logger.info('Clicked Renewal Categories');
});

When('Click on Add button to Create Renewal Category', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    await this.renewalCategoriesPage.clickRenewalCategoriesAddButton();
    logger.info('Clicked Renewal Categories Add Button');
});

Then('Fill the Renewal Category Name', async function () {
    await this.renewalCategoriesPage.fillrenewalCategoryname();
    logger.info('Entered Renewal Categories Name');
});

Then('Fill the Renewal Category Code', async function () {
    await this.renewalCategoriesPage.fillrenewalCategorycode();
    logger.info('Entered Renewal Categories Name');
});
Then('Click on the Brand DropDown', async function () {
    await this.renewalCategoriesPage.clickBrandDropDown();
    logger.info('Clicked Renewal Categories Brand Name');
});

Then('Select Brands', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    await this.renewalCategoriesPage.selectfromBrandDropDown();
    logger.info('Clicked Renewal Categories Brand Name');
});
Then('Select Country Renewal Journey DropDown', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    await this.renewalCategoriesPage.selectcountryRenewalJourneyDropDown();
    logger.info('Select Country Renewal Journey DropDown');
});

Then('Select Purchase Type', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    await this.renewalCategoriesPage.selectPurchaseType();
    logger.info('Clicked Renewal Categories Brand Name');
});


Then('Click on Add button to Create Renewal Categories', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    await this.renewalCategoriesPage.createNewRenewalCategory();
    logger.info('Clicked Renewal Categories Brand Name');
});

Then('Verify the Success Message for Renewal Category', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    let text = await this.renewalCategoriesPage.validatesuccessfullyaddedRenewalCategory();
    expect(text).toEqual('renewal category successfully created');
    logger.info(`Validated Required Text in newly created Renewal.`);
});

Then('Click on Edit Icon & Update Existing Records', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    await this.renewalCategoriesPage.editRenewalCategory();
    logger.info('Renewal Category edited Successfully');
});

Then('Click on Data upload button of Renewal Category', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    await this.renewalCategoriesPage.clickdataUploadGRenewalCategoryButton();
    logger.info(`Clicked on Upload Button in Renewal Category Page`);
});

Then('Select Upload Existing Renewal Category link from drop down', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    await this.renewalCategoriesPage.chooseUpdateExistingRecordsLink();
    logger.info(`Select Update Existing Record link`);
});

Then('Upload Renewal Category file with exisitng records', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    await this.renewalCategoriesPage.selectRCfilestoupload();
    logger.info('Select File To Upload');
});
Then('Validated the updated Renewal Category list', async function () {
    let text = await this.renewalCategoriesPage.validateSuccessfullyUpdatedRCrecords();
    expect(text).toContain('Your batch file has been processed.');
    logger.info('Validated File Uploaded for existing records');
});
When('Click on Renewal Catgegory Clone Buttons', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    await this.renewalCategoriesPage.clickonCloneButton();
    logger.info('Clicked on Clone Button');
});

Then('Validate the Renewal Category Cloned Creation Message', async function () {
    this.renewalCategoriesPage = await this.pomManager.getRenewalCategoryPage()
    let text = await this.renewalCategoriesPage.validateRenewalCategorySuccessfullyClonedText();
    expect(text).toEqual('renewal category successfully created');
    logger.info('Validated Renewal category Successfully Cloned Text');
})