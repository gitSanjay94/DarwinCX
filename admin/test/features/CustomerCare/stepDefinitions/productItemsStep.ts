import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AGENTEMAIL, AGENTNNAME, DESCRIPTION } from '../../../../src/constants';
import { logger } from '../support/hook';

let expectedItemArray = [
    {
        item_id: 'PI-1476',
        item_name: 'JP 1 Year - T-Shirt Premium - Radio Selector with Premium without Sub Pref JP',
    }
]


Given('User selects for clients', async function () {
    this.landPage = await this.pomManager.getLandingPage()
    await this.landPage.selectClient()
    logger.info('Selected the client');
})
When('Click Marketing Studios', async function () {
    this.landPage = await this.pomManager.getLandingPage()
    await this.landPage.clickMarketingStudio();
    logger.info('Clicked Marketing Studio');
});

When('Click Campaign Configurators', async function () {
    await this.landPage.clickCampaignConfigurator();
    logger.info(`Clicked Campaign Configurator`);
});

When('Click Product Items', async function () {
    await this.landPage.clickProductItems();
    logger.info('Clicked Product items');
});

When('Filter product items by item ID', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.enterFilterByItemIDs();
    logger.info(`Filter product items by item ID`);
});

When('Filter product items by name', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.enterfilterByNames();
    logger.info(`Filter product items by item name`);
});
When('Filter product items by brand', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.enterFilterByBrands()
    logger.info(`Filter product items by item brand`);
});

When('Filter product items by price', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.enterFilterByPrices()
    logger.info(`Filter product items by item price`);
});

When('Filter product items by Quantities', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.enterFilterByQuantities()
    logger.info(`Filter product items by item Quantity`);
});

When('Filter product items by delivery type', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.enterFilterByDeliveryType()
    logger.info(`Filter product items by item delivery type`);
});

Then('Validate item ID and item Name', async function () {
    let actualArray = await this.productItemsPage.getProductItemsRowCount()
    for (let i = 0; i < expectedItemArray.length; i++) {
        expect(await actualArray[i].item_id).toContain(expectedItemArray[i].item_id);
        expect(await actualArray[i].item_name).toContain(expectedItemArray[i].item_name);
    }
    logger.info(`Validated Item ID and Item Name successfully`);
});

When('Click on Add button of product item', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.clickaddProductItemButton();
    logger.info('Clicked on Add button of product item');
});
When('Click on Add Button In Add New item', async function () {
    await this.productItemsPage.addButtonInAddNewitem();
    logger.info(`Clicked on Add Button In Add New Item`);
});

Then('Validated Required Text in Add New item', async function () {
    let text = await this.productItemsPage.validatealertmsg();
    expect(text).toEqual('*Required');
    logger.info(`Validated Required Text in Add New item page.`);
});

Then('Add product items with required data', async function () {
    let text = await this.productItemsPage.addNewProductItem();
    logger.info(`Validated Required Text in Add New item page.`);
});

Then('Validated text for successfully added product item', async function () {
    let text = await this.productItemsPage.validatesuccessfullyaddedProductItemmsg();
    expect(text).toEqual('item successfully created');
    logger.info(`Validated Required Text in Add New item page.`);
});

Then('Click on Data upload button of product item', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.clickdataUploadProductItemButton();
    logger.info(`Clicked on Add Button In Add New Item`);
});


Then('Select Upload Existing Product Items Records from drop down', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.selectUpdateExistingRecordsLink();
    logger.info(`Clicked on Add Button In Add New Item`);
});

Then('Upload Product Items file with exisitng records', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.selectfilestoupload();
    logger.info('Select File To Upload');
});

Then('Validated the updated product item list', async function () {
    let text = await this.productItemsPage.validatesuccessfullyupdatedexistingrecords();
    expect(text).toContain('Your batch file has been processed.');
    logger.info('Validated File Uploaded for existing records');
});

Then('Click on Next button of page', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.clicknextbutton();
    logger.info(`Clicked on Next Button at Product item list page`);
});

Then('Click on Previos button of page', async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.clickpreviousbutton();
    logger.info(`Clicked on Previous Button at Product item list page`);
});
When('Click on Product Item Clone Buttons',async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    await this.productItemsPage.clickonCloneButton();
    logger.info('Clicked on Clone Button');
});

Then ('Validate the Product Item Cloned Creation Message',async function () {
    this.productItemsPage = await this.pomManager.getProductItemPage()
    let text = await this.productItemsPage.validateProductItemSuccessfullyClonedText();
    expect(text).toEqual('item successfully created');
    logger.info('Validated product item Successfully Cloned Text');
   })
