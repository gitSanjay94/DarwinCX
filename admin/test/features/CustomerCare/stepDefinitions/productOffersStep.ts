import { When, Then, Given } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'
let expectedOfferArray = [
    {
        offer_id: 'PO-1382',
        offer_name: 'Rovertest',
    }
]
Given('User selects the clients', async function () {
    this.landPage = await this.pomManager.getLandingPage();
    await this.landPage.selectClient();
    logger.info('Selected the client');
})
When('Click Marketing Studio', async function () {
    this.landPage = await this.pomManager.getLandingPage();
    await this.landPage.clickMarketingStudio();
    logger.info('Clicked Marketing Studio');
});

When('Click Campaign Configurator', async function () {
    this.landPage = await this.pomManager.getLandingPage()
    await this.landPage.clickCampaignConfigurator();
    logger.info('Clicked Campaign Configurator');
});

When('Click Product Offers', async function () {
    this.landPage = await this.pomManager.getLandingPage()
    await this.landPage.clickProductOffers();
    logger.info('Clicked Product Offers');
});

When('Filter product offers by offer ID', async function () {
    this.productOffersPage = await this.pomManager.getProductOffersPage()
    await this.productOffersPage.enterFilterByOfferID();
    logger.info('Filter product offers by offer ID');
});

When('Filter product offers by offer Name', async function () {
    this.productOffersPage = await this.pomManager.getProductOffersPage()
    await this.productOffersPage.enterFilterByName();
    logger.info('Filter product offers by offer Name');
});

Then('Validate Offer ID and Offer Name', async function () {
    this.productOffersPage = await this.pomManager.getProductOffersPage()
    let actualArray = await this.productOffersPage.getOffersRowCount()
    for (let i = 0; i < expectedOfferArray.length; i++) {
        expect(await actualArray[i].offer_id).toContain(expectedOfferArray[i].offer_id);
        expect(await actualArray[i].offer_name).toContain(expectedOfferArray[i].offer_name);
    }
    logger.info('Validated Offer ID and Offer Name successfully');
});



When('Click on Add Button in popup', async function () {
    this.productOffersPage = await this.pomManager.getProductOffersPage()
    await this.productOffersPage.addButtonInAddNewOffer();
    logger.info('Clicked on Add Button In Add New Offer');
});

Then('Validate Required Text in Add New Offer popup', async function () {
    this.productOffersPage = await this.pomManager.getProductOffersPage()
    let text = await this.productOffersPage.validateRequiredText();
    expect(text).toEqual('*Required');
    logger.info('Validated Required Text in Add New Offer popup');
});


When('Click on Data Upload Button', async function () {
        this.productOffersPage = await this.pomManager.getProductOffersPage()
    this.productOffersPage = await this.pomManager.getProductOffersPage()
    await this.productOffersPage.clickDataUploadButton();
    logger.info('Clicked on Data Upload Button');
});


When('Choose File To Upload', async function () {
    this.productOffersPage = await this.pomManager.getProductOffersPage()
    await this.productOffersPage.chooseFileToUpload();
    logger.info('Choose File To Upload');
});


Then('Validate File Uploaded', async function () {
    this.productOffersPage = await this.pomManager.getProductOffersPage()
    let text = await this.productOffersPage.validateFileUploaded();
    expect(text).toContain('uploaded');
    logger.info('Validated File Uploaded');
});

Then('Validate Offer Successfully Created Text', async function () {
    let text = await this.productOffersPage.validateOfferSuccessfullyCreatedText();
    expect(text).toEqual('offer successfully created');
    logger.info('Validated Offer Successfully Created Text');
});

When('Edit Product Offer',async function () {
        this.productOffersPage = await this.pomManager.getProductOffersPage()
    await this.productOffersPage.editProductOffer();
    logger.info('Product Offer edited');
})

Then('Validate Offer Successfully Updated Text', async function () {
      this.productOffersPage = await this.pomManager.getProductOffersPage()
    let text = await this.productOffersPage.validateOfferSuccessfullyUpdatedText();
    expect(text).toEqual('offer successfully updated');
    logger.info('Validated Offer Successfully Updated Text');
});