import { When, Then, Given } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

let expectedMarketingCampaignsArray = [
    {
        mc_id: 'MC-1316',
        mc_name: 'demo marketing campaign',
        marketing_code: 'G4B0000C',
        marketing_brand: 'B2B Connect',
        product_offer1: 'remo test',
        purchase_type: 'Self Order and Gift',
        international_offer: 'remo test',
        alt_campaign: 'demo alt campaign code'

    }
]


When('Click Marketing Campaigns', async function () {
    await this.landPage.clickMarketingCampaigns();
    logger.info('Clicked Marketing Campaigns');
});

When('Filter Marketing Campaigns by MC ID', async function () {
    this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    await this.marketingCampaignsPage.enterFilterByMCID();
    logger.info('Filter Marketing Campaigns by MC ID');
});

When('Filter Marketing Campaigns by Name', async function () {
    this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    await this.marketingCampaignsPage.enterFilterByName();
    logger.info('Filter Marketing Campaigns by Name');
});

Then('Validate Marketing Campaigns details', async function () {
    let actualArray = await this.marketingCampaignsPage.getMarketingCampaignsRowCount()
    for (let i = 0; i < expectedMarketingCampaignsArray.length; i++) {
        expect(await actualArray[i].mc_id).toContain(expectedMarketingCampaignsArray[i].mc_id);
        expect(await actualArray[i].mc_name).toContain(expectedMarketingCampaignsArray[i].mc_name);
        expect(await actualArray[i].marketing_code).toContain(expectedMarketingCampaignsArray[i].marketing_code);
        expect(await actualArray[i].marketing_brand).toContain(expectedMarketingCampaignsArray[i].marketing_brand);
        expect(await actualArray[i].purchase_type).toContain(expectedMarketingCampaignsArray[i].purchase_type);
        expect(await actualArray[i].product_offer1).toContain(expectedMarketingCampaignsArray[i].product_offer1);
        expect(await actualArray[i].international_offer).toContain(expectedMarketingCampaignsArray[i].international_offer);
        expect(await actualArray[i].alt_campaign).toContain(expectedMarketingCampaignsArray[i].alt_campaign);
    }
    logger.info('Validated Marketing Campaigns details successfully');
});


When('Filter Marketing Campaigns by Marketing Code', async function () {
    this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    await this.marketingCampaignsPage.enterFilterByMarketingCode();
    logger.info('Filter Marketing Campaigns by Marketing Code!');
});


When('Filter Marketing Campaigns by Brand', async function () {
    this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    await this.marketingCampaignsPage.enterFilterByBrand();
    logger.info('Filter Marketing Campaigns by Brand!');
});

When('Filter Marketing Campaigns by Purchase Type', async function () {
    this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    await this.marketingCampaignsPage.enterFilterByPurchaseType();
    logger.info('Filter Marketing Campaigns by Purchase Type');
});

When('Filter Marketing Campaigns by Product Offer1', async function () {
    this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    await this.marketingCampaignsPage.enterFilterByProductOffer1();
    logger.info('Filter Marketing Campaigns by Product Offer1');
});

When('Filter Marketing Campaigns by International Offer', async function () {
    this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    await this.marketingCampaignsPage.enterFilterByInternationalOffer();
    logger.info('Filter Marketing Campaigns by International Offer');
});

When('Filter Marketing Campaigns by Alt Campaign', async function () {
    this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    await this.marketingCampaignsPage.enterFilterByAltCampaign();
    logger.info('Filter Marketing Campaigns by Alt Campaign');
});

When('Add New Marketing Campaign', async function () {
    this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    await this.marketingCampaignsPage.addNewMarketingCampaign();
    logger.info('Added New Marketing Campaign');
});

When('Click on Add button', async function () {
    this.productOffersPage = await this.pomManager.getProductOffersPage()
    await this.productOffersPage.clickAddButton();
    logger.info('Clicked on Add button');
});

Then('Validate Required Text in Add New Marketing Campaign popup', async function () {
     this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    let text = await this.marketingCampaignsPage.validateRequiredText();
    expect(text).toEqual('*Required');
    logger.info('Validated Required Text in Add New Marketing Campaign popup');
});

Then('Validate Campaign Successfully Created Text', async function () {
     this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    let text = await this.marketingCampaignsPage.validateCampaignSuccessfullyCreatedText();
    expect(text).toEqual('campaign successfully created');
    logger.info('Validated Campaign Successfully Created Text');
});


When('Choose File To Upload data in Marketing Campaigns', async function () {
    this.marketingCampaignsPage = await this.pomManager.getMarketingCampaignsPage()
    await this.marketingCampaignsPage.chooseFileToUpload();
    logger.info('Choose File To Upload');
});







