import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

When('Click on "Batch Emails"', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickBatchEmails();
    logger.info('Clicked on "Batch Emails"');
})

When('Click on "Renewals" and select "Template one"', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.editTemplate();
    logger.info('Clicked on "Renewals" and selected "Template1"');
})

Then('Validate "Email Name" to contain "Template enabled"', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.getEmailName();
    expect(text).toContain('Template 1 (enabled)');
    logger.info(`Email name validation passed: ${text}`);
})

Then('Validate "Email Editor" to contain "Classic" and "Email Template"', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.getEmailEditor();
    expect(text).toContain('Classic');
    expect(text).toContain('Email Template');
    logger.info(`Email Editor validation passed: ${text}`);
})

Then('Validate "Back to email configuration" link', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.getBackToEmailConfigurationLink();
    expect(text).toContain('Back to email configuration');
    logger.info(`"Back to email configuration" link validation passed: ${text}`);
})

Then('Validate buttons are visible', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.validateButtons();
    logger.info('Validation passed: buttons are visible');
})

When('Click on "Send Test" button', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickSendTestButton();
    logger.info('Clicked on "Send Test" button');
})

Then('Validate "Send Test Email" text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateSendTestEmailText();
    expect(text).toEqual('Send Test Email');
    logger.info(`Validation result: Expected "Send Test Email", received "${text}"`);
})

Then('Validate "Send Test To" text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateSendTestToText();
    expect(text).toEqual('Send Test To');
    logger.info(`Validation result: Expected "Send Test To", received "${text}"`);
})

When('Click on "Close" button', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickCloseButton();
    logger.info('Clicked on "Close" button');
})

When('Fill "Test Email" input', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.fillTestEmailInput();
    logger.info('Filled "Test Email" input');
})

Then('Validate "Sample email successfully sent" text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateSampleEmailSuccessfullySentText();
    expect(text).toEqual('Sample email successfully sent');
    logger.info(`Validation result: Expected "Sample email successfully sent", received "${text}"`);
})

When('Click on "Switch Editor" button', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickSwitchEditorButton();
    logger.info('Clicked on "Switch Editor" button');
})

When('Click on "Browse Files" button', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickBrowseFilesButton();
    logger.info('Clicked on "Browse Files" button');
})

When('Choose file to upload in JSON format', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.chooseFileToUpload();
    logger.info('Choose file to upload in JSON format');
})

When('Click on "Import JSON" button', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickImportJSONButton();
    logger.info('Clicked on "Import JSON" button');
})

When('Click on "Save" button', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickSaveButton();
    logger.info('Clicked on "Save" button');
})

When('Click on "Export HTML" button', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickExportHTMLButton();
    logger.info('Clicked on "Export HTML" button');
})

Then('Validate "Batch Email Template Renewals update request succeeded" text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateBatchEmailTemplateRenewalsUpdateRequestSucceededText();
    expect(text).toEqual('Batch Email Template - Renewals update request succeeded');
    logger.info(`Validation result: Expected "Batch Email Template - Renewals update request succeeded", received "${text}"`);
})

Then('Validate "Email Preview" text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateEmailPreviewText();
    expect(text).toEqual('Email Preview');
    logger.info(`Validation result: Expected "Email Preview", received "${text}"`);
})

When('Update Email Editor', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.updateEmailEditor();
    logger.info('Email Editor updateed');
})

When('Click on "Preview" button', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickPreviewButton();
    logger.info('Click on "Preview" button')
})

When('Select "Template1"', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.selectTemplate1();
    logger.info('Selected "Template1"')
})

When('Click on "Renewals"', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickRenewals();
    logger.info('Clicked on "Renewals"')
})

When('Click on "Enable Email" toggle link', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickEnableEmailToggleLink();
    logger.info('Clicked "Enable Email" toggle link')
})

When('Click on "Yes" button in "Email Manager Disable Warning" pop up', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickYesButton();
    logger.info('Clicked on "Yes" button in "Email Manager Disable Warning" pop up')
})

Then('Validate "Email Manager Disable Warning" text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateEmailManagerDisableWarningText();
    expect(text).toEqual('Email Manager: Disable Warning');
    logger.info(`Validation result: Expected "Email Manager: Disable Warning", received "${text}"`);
})

Then('Validate "Renewals" link', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateRenewalsLink();
    expect(text).toEqual('Renewals');
    logger.info(`Validation result: Expected "Renewals", received "${text}"`);
})

Then('Validate "Bills" link', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateBillsLink();
    expect(text).toEqual('Bills');
    logger.info(`Validation result: Expected "Bills", received "${text}"`);
})

Then('Verify the items under Renewals link', async function () {
    const expectedItems = [
        'Template 1 (enabled) (ER-1001)',
        'Template 22 (ER-1002)',
        'Template 1 Clone (ER-1003)',
        'Template 1 Clone (enabled) (ER-1004)',
        'Template 1 Clone (enabled) (ER-1005)'
    ];

    try {
        this.emailManagerPage = await this.pomManager.getEmailManagerPage();
        const actualItems = await this.emailManagerPage.getItemsUnderRenewalsLink();

        console.log("Actual Items:", actualItems);
        console.log("Expected Items:", expectedItems);

        // Check that all expected items are in the actual items
        expectedItems.forEach(item => {
            if (!actualItems.includes(item)) {
                throw new Error(`Expected item "${item}" not found in actual items.`);
            }
        });

        // Log lengths for debugging
        console.log("Actual Items Length:", actualItems.length);
        console.log("Expected Items Length:", expectedItems.length);

    } catch (error) {
        const errorMessage = (error as Error).message || 'An unknown error occurred';
        console.error('Error during verification of items:', errorMessage);
        throw new Error('Verification failed: ' + errorMessage);
    }
});

When('Click on "Bills"', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickBills();
    logger.info('Clicked on "Bills"')
})


Then('Verify the items under Bills link', async function () {
    const expectedItems = [
        'Bill Template 1 (EB-1001)',
        'Bill Template 1 clone (EB-1002)',
        'Bill Template 12 (EB-1003)',
        'New Bill template (EB-1004)'
    ];

    try {
        this.emailManagerPage = await this.pomManager.getEmailManagerPage();
        const actualItems = await this.emailManagerPage.getItemsUnderBillsLink();

        console.log("Actual Items:", actualItems);
        console.log("Expected Items:", expectedItems);

        // Check that all expected items are in the actual items
        expectedItems.forEach(item => {
            if (!actualItems.includes(item)) {
                throw new Error(`Expected item "${item}" not found in actual items.`);
            }
        });

        // Log lengths for debugging
        console.log("Actual Items Length:", actualItems.length);
        console.log("Expected Items Length:", expectedItems.length);

    } catch (error) {
        const errorMessage = (error as Error).message || 'An unknown error occurred';
        console.error('Error during verification of items:', errorMessage);
        throw new Error('Verification failed: ' + errorMessage);
    }
});



Then('Validate "Triggered Emails" link', async function(){

    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateTriggeredEmailsLink();
    expect(text).toEqual('Triggered Emails');
    logger.info(`Validation result: Expected "Triggered Emails", received "${text}"`);
})




Then('Validate "Batch Emails" link', async function(){

    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateBatchEmailsLink();
    expect(text).toEqual('Batch Emails');
    logger.info(`Validation result: Expected "Batch Emails", received "${text}"`)
})


When('Click Renewals plus icon', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickRenewalsPlusIcon();
    logger.info('Clicked Renewals plus icon');
})

When('Click Bills plus icon', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickBillsPlusIcon();
    logger.info('Clicked Bills plus icon');
})

Then('Validate "Choose Email Template" pop up', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateChooseEmailTemplateText();
    expect(text).toEqual('Choose Email Template');
    logger.info(`Validation result: Expected "Choose Email Template", received "${text}"`)
})

Then('Validate "Choose your canvas" text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateChooseYourCanvasText();
    expect(text).toEqual('Choose your canvas');
    logger.info(`Validation result: Expected "Choose your canvas", received "${text}"`)
})

Then('Validate "Classic Builder" text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateClassicBuilderText();
    expect(text).toEqual('Classic Builder');
    logger.info(`Validation result: Expected "Classic Builder", received "${text}"`)
})

Then('Validate "Design Builder" text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateDesignBuilderText();
    expect(text).toEqual('Design Builder');
    logger.info(`Validation result: Expected "Design Builder", received "${text}"`)
})

When('Click on cross icon', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage()
    await this.emailManagerPage.clickOnCrossIcon();
    logger.info('Clicked on cross icon');
})


