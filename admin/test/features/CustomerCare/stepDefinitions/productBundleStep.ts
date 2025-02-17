import { When, Then, Given } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'
let expectedOfferArray = [
    {
        bundle_id: 'PB-1576',
        bundle_name: 'Premium Package',
    }
]


When('Click Product Bundle', async function () {
    await this.landPage.clickProductBundles();
    logger.info('Clicked Product Bundles');
});

When('Filter Product Bundle by bundle ID', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.enterFilterByBundleIDs();
    logger.info('Filter product bundle by bundle ID');
});

When('Filter product bundle by bundle Name', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.enterfilterByBundleNames();
    logger.info('Filter product bundle by bundle Name');
});

Then('Validate bundle ID and bundle Name', async function () {
    let actualArray = await this.productbundlePage.getProductBundlesRowCount()
    for (let i = 0; i < expectedOfferArray.length; i++) {
        expect(await actualArray[i].bundle_id).toContain(expectedOfferArray[i].bundle_id);
        expect(await actualArray[i].bundle_name).toContain(expectedOfferArray[i].bundle_name);
    }
    logger.info('Validated Bundle ID and Bundle Name successfully');
});

When('Filter product bundle by Delivery Restriction', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.enterfilterByDeliveryRestrictions();
    logger.info('Filter product bundle by Delivery Restrictions');
});

When('Filter product bundle by Autorenew Bundle Attached', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.enterfilterByAutorenewbundleattached();
    logger.info('Filter product bundle by Autorenew bundleattached');
});

When('Click on Add button of product bundle', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.clickaddProductBundleButton();
    logger.info('Clicked on Add button');
});
When('Click on Add button without filling any data', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.clickaddProductBundleButtonWithoutfillingData();
    logger.info('Clicked on Add button');
});

When('Validated Required Text in Add New Bundle', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    let text = await this.productbundlePage.validatealertmsg();
    expect(text).toEqual('*Required');
    logger.info('Validated Required Text while adding new bundle without filling data');
});

When('Add product bundle with required data', async function () {
    let text = await this.productbundlePage.addNewProductBundle();
    logger.info(`Validated Required Text in Add New item page.`);
})

Then('Validated text for successfully added product bundle', async function () {
    let text = await this.productbundlePage.validatesuccessfullyaddedProductBundlemsg();
    expect(text).toEqual('bundle successfully created');
    logger.info(`Validated Successfully created Text.`);
});


When('Click on Data Upload link Button', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.clickDataUploadlinkButton();
    logger.info('Clicked on Data Upload Button');
});


When('Choose File To be Upload', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.chooseFileTobeUpload();
    logger.info('Choose File To Upload');
});


Then('Validate File Uploaded or not', async function () {
    let text = await this.productbundlePage.validateFileUploaded();
    expect(text).toContain('uploaded');
    logger.info('Validated File Uploaded');
});

When('Click on Product Bundle Edit link', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.clickEditProductBundleLink();
    logger.info('Clicked on Edit link of product bundle');
});

Then('Update the Product bundle', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.clickSubmitProductBundleLink();
    logger.info('Clicked on updated button of product bundle');
});

Then('Verify the Updated Message', async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    let text = await this.productbundlePage.validateUpdateSuccessfullyMsg();
    expect(text).toEqual('bundle successfully updated');
    logger.info('Validated Product Bundle Updated Successfully');
});
When('Click on Product Bundle Clone Buttons',async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    await this.productbundlePage.clickonCloneButton();
    logger.info('Clicked on Clone Button');
});

Then ('Validate the Product Bundle Cloned Creation Message',async function () {
    this.productbundlePage = await this.pomManager.getproductbundlePage()
    let text = await this.productbundlePage.validateProductBundleSuccessfullyClonedText();
    expect(text).toEqual('bundle successfully created');
    logger.info('Validated product bundle Successfully Cloned Text');
   })