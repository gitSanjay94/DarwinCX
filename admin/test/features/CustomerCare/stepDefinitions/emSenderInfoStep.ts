import { When, Then, DataTable } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

When('Click at Email Manager', async function () {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.clickEmailManager();
    logger.info('Clicked on Email Manager');
})

Then('Verify Email Manager text', async function () {
    this.emailManagerPage = this.pomManager.getEmailManagerPage()
    let text = await this.emailManagerPage.validateEmailManagerText();
    expect(text).toEqual("Email Manager");
    logger.info('Email Manager text successfully validated');
})
When('Click on Edit button at Email Manager page', async function () {
    await this.emailManagerPage.clickEditButton();
    logger.info('Clicked on Edit button in Email Manager page');
})

When('Click on Edit button in Sender Info page', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickEditButton();
    logger.info('Clicked on Edit button in Sender Info page');
})

When('Edit Email Sender Name', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.editEmailSenderName();
    logger.info('Email Sender Name has been successfully edited.')
})

When('Edit Email Sender Address', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.editEmailSenderAddress();
    logger.info('Email Sender Name has been successfully edited.')
})

When('Click on Save button in SENDER INFO page', async function () {
    await this.emSenderInfoPage.clickSaveButton();
    logger.info('Clicked on Save button in CUSTOM MARKUPS page');

})

When('Click on Cancel button in Sender Info page', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickCancelButton();
    logger.info('Clicked on Cancel button in SENDER INFO page');
})

Then('Validate Edit button is visible in Sender Info page', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    let text = await this.emSenderInfoPage.validateSIEditButton();
    expect(text).toEqual('Edit');
    logger.info('Validate Edit button is visible in SENDER INFO page');
})

Then('Verify that Enable Email option is Disabled', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    let text = await this.emSenderInfoPage.validateEmailTemplateToggleDisableTxt();
    expect(text).toEqual('Disabled');
    logger.info(`Email option state: ${text}`);
});

Then('Verify that Enable Email option is Enabled', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    let text = await this.emSenderInfoPage.validateEmailTemplateToggleEnableTxt();
    expect(text).toEqual('Enabled');
    logger.info(`Email option state: ${text}`);
});

Then('Verify that Enable Email Option is Available', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    let text = await this.emSenderInfoPage.validateEmailTemplateToggleText();
    expect(text).toEqual('Enable Email');
    logger.info(`Email option available: ${text}`);

    // Optional: log the state of related elements if needed
});
Then('Click on Back to email manager link', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickBacktoEmailManagerlink();
    logger.info('Clicked on Back to Email Manager link');
});

Then('No to Change the Enable Email Option to Disable', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.changeEmailTemplateToggleOptionDisableNo();
    logger.info('Selected No option to Disable the Enable Email');
});

Then('Change the Enable Email Option to Disable', async function () {
    await this.emSenderInfoPage.changeEmailTemplateToggleOptionDisable();
    logger.info('Change the Enable Email Option to Disable');
});

Then('Change the Disable Email Option to Enable', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.changeEmailTemplateToggleOptionEnable();
    logger.info('Change the Enable Email Option to Enable');
});

Then('Validate Back to email manager link is working correctly', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    let text = await this.emSenderInfoPage.validateTemplateConfigurator();
    expect(text).toEqual('Template Configurator');
    logger.info('Validate Back to Email Manger link is working correctly');
});

Then('Click at Triggered Emails link', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickTriggeredEmailsLink();
    logger.info('Clicked on Triggered Emails link');

});

Then('Click at Triggered Emails link to Expand the Subsections', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickTriggeredEmailsLink();
    logger.info('Clicked on Triggered Emails link');

});

Then('Click at Triggered Emails link to Collapse the Subsections', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickTriggeredEmailsLink();
    logger.info('Clicked on Triggered Emails link');

});

Then('Click at Order Confirmation link', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickOrderConfirmationLink();
    logger.info('Clicked on Order Confirmation link');

});
Then('Validate Add Logo text in popup', async function () {
    let text = await this.emSenderInfoPage.validateAddLogoText();
    expect(text).toEqual('Add Logo');
    logger.info('Add Logo text in popup successfully validated');
});

Then('Verify the Preview Popup Text', async function () {
    let text = await this.emSenderInfoPage.validateEmailPreviewText();
    expect(text).toEqual('Email Preview');
    logger.info('Email Preview popup successfully validated');
});

When('Add Brand Logo in popup', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.addBrandLogo();
    logger.info('Brand logo successfully added in the popup');
});

When('Edit Additional Sender Settings in SENDER INFO page', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.editAdditionalSenderSettings();
    logger.info('Additional Sender Settings in SENDER INFO page successfully edited');
});

Then('Click at Payment Confirmation link', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickPaymentConfirmationLink();
    logger.info('Clicked on Payment Confirmation link');

});


Then('Click on Edit button at Subject text', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickSubjectLineEditButton();
    logger.info('Clicked on Edit button at Subject line text');

});

Then('Click on Save button without filling Subject Line', async function () {
    this.emSenderInfoPage = this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.savewithoutfillingSubjectLine();
    logger.info('Clicked on Edit button at Subject line text');

});

Then('Verify the alert message', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    let text = await this.emSenderInfoPage.validatemsgMissingReqmsg();
    expect(text).toEqual('Missing requirements to enable:');
    logger.info('Validate alert message is working correctly');
});

Then('Verify the Test Email Sent Success Message', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    let text = await this.emSenderInfoPage.validateTestEmailSentSuccessMsg();
    expect(text).toEqual('Sample email successfully sent');
    logger.info('Validate Sent Email Success Message');
});

Then('Click on Test Email Sender Cross Icon', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clicksendTestEmailCrossIcon();
    logger.info('Send Test Email popup Should be closed successfully');
});

Then('Click at Preview Button', async function () {
    // this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickPreviewButton();
    logger.info('Preview button clicked successfully');
});

Then('Click at Cross Icon at Preview State', async function () {
    // this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickPreviewCrossIcon();
    logger.info('Preview State closed successfully');
});

Then('Click on Test Email Sender Close Button', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickTestEmailSenderCloseButton();
    logger.info('Send Test Email popup Should be closed successfully by Close Button');
});

Then('Click on Add Button at Subject text', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();

    await this.emSenderInfoPage.clickAddSubjectlineButton();
    logger.info('Clicked on Add button at Subject line text');

});
When('Open Brand Logo', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.openBrandLogo();
    logger.info('Brand Logo opened successfully')
});

When('Edit Brand Name', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.editBrandName();
    logger.info('Brand Name edited successfully');
});

When('Edit Batch email Template', async function () {
    await this.emailManagerPage.editTemplate();
    logger.info('Batch email Template successfully edited')
});

Then('Validate Renewals Update Request Succeeded text', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage();
    let text = await this.emailManagerPage.validateRenewalsUpdateRequestSucceededText();
    expect(text).toEqual('Batch Email Template - Renewals update request succeeded');
    logger.info('Renewals Update Request Succeeded text successfully validated');
    // await this.page.waitForTimeout(60000)
});

When('Edit Subject Line', async function () {
    this.emailManagerPage = await this.pomManager.getEmailManagerPage();
    await this.emailManagerPage.editSubjectLine();
    logger.info('Subject Line successfully edited');
});

Then('Fill the Subject Line', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.fillSubjectLinetext();
    logger.info('Clicked on Add button at Subject line text');

});

Then('Click on Save Button', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickSaveButton();
    logger.info('Clicked on Save button at Subject line text');

});

Then('Verify the successfully added Subject Line Message', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.validateSLSuccessmsg();
    logger.info('Validate the Subject Line Added Success Message');

});

Then('Click on Edit button at Email Template Frame', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickEditButtonFrame();
    logger.info('Clicked on Edit button at Subject line text');

});

Then('Update the Email Editor', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.updateEmailEditors();
    logger.info('Clicked on Edit button at Subject line text');

});

When('Click on Save Button at Email Editor', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickEmailTemplateSaveButton();
    logger.info('Clicked on Save button in Email Editor');

});

Then('Verify the Email Template Success Message', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    let text = await this.emSenderInfoPage.validateEmailTemplateSuccessmsg();
    expect(text).toEqual('Email Template - Payment update request succeeded');
    logger.info('Validate success message is displaying correctly');
});

Then('Click on the Swich Editor', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickSwitchEditor();
    logger.info('Clicked on Switch Editor Button in Email Template');

});

Then('Fill the Payment Confirmation Email text in Editor', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.fillDataEmailEditors();
    logger.info('Filled the data in Email Editor successfully');

});

Then('Click on the Send Test Button', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickSendTestButton();
    logger.info('Clicked on Send Test Button');

});

Then('Click on the Send Test Button to Send the Mail', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickSendEmailTestButton();
    logger.info('Clicked on Send Test Button');

});

Then('Fill the Test Email Sender', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.fillTestEmailSenderAddress();
    logger.info('Filled the Test Email Address');

});

Then('Click the Test Email Sender', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickTestEmailSenderAddress();
    logger.info('Clicked the Test Email Address');

});

Then('Verify the Email Send to Recipient', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.verifyEmailSentToSender();
    logger.info('Clicked the Test Email Address');

});
Then('Click on Back Button at Swich Editor popup', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickSwitchEditorBack();
    logger.info('Clicked on Back Button at Switch Editor Button in Email Template');

});

Then('Click on Continue Button', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickSwitchEditorContinue();
    logger.info('Clicked on Back Button at Switch Editor Button in Email Template');

});

Then('Update the Swich Editor', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.updateSwitchEditors();
    // logger.info('Updated the Swich Editor');

});

Then('I should see {string} email template', async function (templateText: string) {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.checkTrigreedEmailTemplateVisibility(templateText);
});



Then('I click on {string} email template', async function (templateText: string) {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickOnTemplate(templateText);
});

Then('Clicked on {string} email template', async function (templateText: string) {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.clickOnTemplate(templateText);
});

Then('Verify the order confirmation items', async function () {
    const expectedItems = [
        'Payment Confirmation',
        'Bill Me Later Order',
        'Installment Order',
        'Renewal Order',
        'Gift Order',
        'Gift Recipient',
        'Shopping Cart',
        'Default Order Confirmation'
    ];

    try {
        this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
        const actualItems = await this.emSenderInfoPage.getOrderConfirmationItems();

        console.log("Actual Items:", actualItems);
        console.log("Expected Items:", expectedItems);

        // Check that all expected items are in the actual items
        expectedItems.forEach(item => {
            expect(actualItems).toContain(item);
        });

        // Log lengths for debugging
        console.log("Actual Items Length:", actualItems.length);
        console.log("Expected Items Length:", expectedItems.length);

    } catch (error) {
        const errorMessage = (error as Error).message || 'An unknown error occurred';
        console.error('Error during verification of order confirmation items:', errorMessage);
        throw new Error('Verification failed: ' + errorMessage);
    }

});
Then(/^Verify following links under Auto Renew$/, async function (dataTable: DataTable) {

    const expectedLinks = dataTable.raw().flat().map(link => link.trim());
    console.log('Processed Expected Links:', expectedLinks);
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    return this.emSenderInfoPage.verifyAutoRenewLinks(expectedLinks)
        .then(() => {
            console.log('All links verified successfully.');
            return Promise.resolve();
        })
        .catch((error: Error) => {
            console.error('Verification Error:', error);
            return Promise.reject(new Error(`Verification failed: ${error.message}`));
        });
});

Then(/^Verify following links under Notifications$/, async function (dataTable: DataTable) {

    const expectedLinks = dataTable.raw().flat().map(link => link.trim());
    console.log('Processed Expected Links:', expectedLinks);
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    return this.emSenderInfoPage.verifyNotificationLinks(expectedLinks)
        .then(() => {
            console.log('All links verified successfully.');
            return Promise.resolve();
        })
        .catch((error: Error) => {
            console.error('Verification Error:', error);
            return Promise.reject(new Error(`Verification failed: ${error.message}`));
        });
});

Then('Verify following links under Donations', async function (dataTable) {
    const expectedDonationLinks1 = dataTable.raw().flat();
    await this.emSenderInfoPage.verifyDonationLinks(expectedDonationLinks1);
});

Then('Verify the following links under other to be deprecated Email Link', async function (dataTable) {
    const expectedothertobedeprecatedLinks1 = dataTable.raw().flat();
    await this.emSenderInfoPage.verifyDonationLinks(expectedothertobedeprecatedLinks1);
});

Then('Click at Do you require domestic tax receipts for donations? toggler', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.toggleForNoDonationReceipt();
   
});

Then('Again Click at "Do you require domestic tax receipts for donations?" toggler', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.toggleForYesDonationReceipt();
   
});

Then('Update the Donor Email Address', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.updateDonorEmailAddress();
   
});

Then('Update the Donor Max Price', async function () {
    this.emSenderInfoPage = await this.pomManager.getemSenderInfoPage();
    await this.emSenderInfoPage.updateMinimumPriceMaximumPrice();
   
});