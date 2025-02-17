import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class emailManagerPage {
    page: Page;
    readonly editButton: Locator;
    readonly customMarkups: Locator;
    readonly emailManagerText: Locator;
    readonly batchEmails: Locator;
    readonly renewals: Locator;
    readonly template1: Locator;
    readonly renewalsUpdateRequestSucceededText: Locator;
    readonly saveButton: Locator;
    readonly editTemplateButton: Locator;
    readonly editSubjectLineButton: Locator;
    readonly subjectLineTF: Locator;
    readonly emailName: Locator;
    readonly backToEmailConfigurationLink: Locator;
    readonly switchEditorButton: Locator;
    readonly sendTestButton: Locator;
    readonly importHTMLButton: Locator;
    readonly exportHTMLButton: Locator;
    readonly emailEditor: Locator;
    readonly sendTestEmailText: Locator;
    readonly closeButton: Locator;
    readonly sendTestToText: Locator;
    readonly testEmailInput: Locator;
    readonly sampleEmailSuccessfullySentText: Locator;
    readonly browseFilesButton: Locator;
    readonly continueButton: Locator;
    readonly importJSONButton: Locator;
    readonly batchEmailTemplateRenewalsUpdateRequestSucceededText: Locator;
    readonly previewButton: Locator;
    readonly emailPreviewText: Locator;
    readonly enableEmailToggleLink: Locator;
    readonly yesButton: Locator;
    readonly emailManagerDisableWarningText: Locator;
    readonly bills: Locator;
    readonly triggeredEmailsText: Locator;
    readonly renewalsPlusIcon: Locator;
    readonly billsPlusIcon: Locator;
    readonly chooseEmailTemplateText: Locator;
    readonly chooseYourCanvasText: Locator;
    readonly designBuilderText: Locator;
    readonly classicBuilderText: Locator;
    readonly crossIcon: Locator;


    constructor(page: Page) {
        this.page = page;
        this.editButton = page.getByRole('button', { name: 'Edit' })
        this.customMarkups = page.getByText('CUSTOM MARKUPS')
        // this.emailManagerText = page.locator("//strong[text()='Email Manager']")
        this.emailManagerText = page.locator('strong').filter({ hasText: 'Email Manager' })
        this.batchEmails = page.getByText('Batch Emails')
        this.renewals = page.locator('label.pointer:has-text("Renewals")')
        this.bills = page.locator('label.pointer:has-text("Bills")')
        this.template1 = page.getByText('Template 1 (enabled) (ER-1001)')
        this.renewalsUpdateRequestSucceededText = page.locator("//h6[text()='Batch Email Template - Renewals update request succeeded']")
        this.saveButton = page.getByRole('button', { name: 'Save' })
        this.editTemplateButton = page.getByRole('button', { name: 'Edit' }).nth(2)
        // this.editSubjectLineButton = page.locator('div').filter({ hasText: /^SubjectEditSubject/ }).getByRole('button')
        this.editSubjectLineButton = page.locator("//strong[text()='Subject']/parent::div/descendant::div/button")
        this.subjectLineTF = page.getByLabel('Subject Line')
        this.emailName = page.locator("//strong[text()='Email Name:']/parent::div")
        this.backToEmailConfigurationLink = page.getByRole('link', { name: '< Back to email configuration' })
        this.switchEditorButton = page.getByRole('button', { name: 'Switch Editor' })
        this.sendTestButton = page.getByRole('button', { name: 'Send Test' })
        this.importHTMLButton = page.getByRole('button', { name: 'Import HTML' })
        this.exportHTMLButton = page.getByRole('button', { name: 'Export HTML' })
        this.emailEditor = page.locator("//strong[text()='Email Editor:']/parent::div")
        this.sendTestEmailText = page.getByText('Send Test Email')
        this.closeButton = page.getByRole('button', { name: 'Close' })
        this.browseFilesButton = page.getByRole('button', { name: 'Browse Files' })
        this.continueButton = page.getByRole('button', { name: 'Continue' })
        this.importJSONButton = page.getByRole('button', { name: 'Import JSON' })
        this.previewButton = page.getByRole('button', { name: 'Preview' })
        this.sendTestToText = page.getByText('Send Test To')
        this.testEmailInput = page.locator("//input[@name='testEmail']")
        // this.sampleEmailSuccessfullySentText = page.getByText('Sample email successfully sent', { exact: true })
        this.sampleEmailSuccessfullySentText = page.locator("//h6[text()='Sample email successfully sent']")
        this.batchEmailTemplateRenewalsUpdateRequestSucceededText = page.getByText('Batch Email Template - Renewals update request succeeded', { exact: true })
        this.emailPreviewText = page.getByText('Email Preview')
        this.enableEmailToggleLink = page.locator('.col-8 > div > div > div:nth-child(2) > div')
        this.yesButton = page.getByRole('button', { name: 'Yes' })
        this.emailManagerDisableWarningText = page.getByText('Email Manager: Disable Warning')
        this.triggeredEmailsText = page.getByText('Triggered Emails')
        this.renewalsPlusIcon = page.locator("(//i[@class='fas fa-plus'])[1]")
        this.billsPlusIcon = page.locator("(//i[@class='fas fa-plus'])[2]")
        this.chooseEmailTemplateText = page.getByText('Choose Email Template')
        this.chooseYourCanvasText = page.getByText('Choose your canvas')
        this.designBuilderText = page.getByText('Design Builder')
        this.classicBuilderText = page.getByText('Classic Builder')
        this.crossIcon = page.locator("//i[@class='fas fa-times']")







    }



    async clickEditButton() {
        try {
            await expect(this.editButton).toBeVisible({ timeout: 60000 });
            await this.editButton.click();
        } catch (error) {
            logger.info(`Element ${this.editButton} not found or not visible: `, error);
            console.info(`Element ${this.editButton} not found or not visible: `, error);
        }
    }

    async clickCustomMarkups() {
        try {
            await expect(this.customMarkups).toBeVisible({ timeout: 60000 });
            await this.customMarkups.click();
        } catch (error) {
            logger.info(`Element ${this.customMarkups} not found or not visible: `, error);
            console.info(`Element ${this.customMarkups} not found or not visible: `, error);
        }
    }

    async validateEmailManagerText() {
        await expect(this.emailManagerText).toBeVisible({ timeout: 60000 });
        await this.emailManagerText.scrollIntoViewIfNeeded();
        let text = await this.emailManagerText.textContent();
        return text;
    }

    async clickBatchEmails() {
        await expect(this.batchEmails).toBeVisible({ timeout: 60000 });
        await this.batchEmails.click();
        await this.page.waitForTimeout(10000);
    }

    async clickTemplate1() {
        await expect(this.renewals).toBeVisible({ timeout: 60000 });
        await this.renewals.click();
        await this.page.waitForTimeout(6000);
        await expect(this.template1).toBeVisible({ timeout: 60000 });
        await this.template1.click();
    }

    async validateRenewalsUpdateRequestSucceededText() {
        try {
            await expect(this.renewalsUpdateRequestSucceededText).toBeVisible({ timeout: 60000 });
            let text = await this.renewalsUpdateRequestSucceededText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
            console.info(`Element not found or not visible: `, error);

        }
    }

    async editTemplate() {
        try {
            await this.clickTemplate1();
            await this.editTemplateButton.click();
            // await this.page.frameLocator('#editor-container iframe').frameLocator('iframe[title="Rich Text Area"]').locator('table:nth-child(3) > tbody > tr > td > .es-content-body > tbody > tr > td > table > tbody > tr > td > .mce-item-table > tbody > tr > td').first().scrollIntoViewIfNeeded();
            // await this.page.waitForTimeout(3000);
            // await this.page.frameLocator('#editor-container iframe').frameLocator('iframe[title="Rich Text Area"]').locator('table:nth-child(3) > tbody > tr > td > .es-content-body > tbody > tr > td > table > tbody > tr > td > .mce-item-table > tbody > tr > td').first().click();
            // await this.page.waitForTimeout(3000);
            // await this.page.frameLocator('#editor-container iframe').frameLocator('iframe[title="Rich Text Area"]').locator('table:nth-child(3) > tbody > tr > td > .es-content-body > tbody > tr > td > table > tbody > tr > td > .mce-item-table > tbody > tr > td').first().clear();
            // await this.page.waitForTimeout(3000);
            // await this.page.frameLocator('#editor-container iframe').frameLocator('iframe[title="Rich Text Area"]').locator('table:nth-child(3) > tbody > tr > td > .es-content-body > tbody > tr > td > table > tbody > tr > td > .mce-item-table > tbody > tr > td').first().fill('editTest Template' + faker.number.int({ min: 1, max: 100 }).toString());
            // await this.page.waitForTimeout(60000);
            // await this.saveButton.click();

        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
            console.info(`Element not found or not visible: `, error);
        }

    }

    async editSubjectLine() {
        await this.clickBatchEmails();
        await this.clickTemplate1();
        await this.page.waitForTimeout(3000);
        await this.editSubjectLineButton.click();
        await this.page.waitForTimeout(3000);
        await this.subjectLineTF.scrollIntoViewIfNeeded();
        await this.subjectLineTF.click();
        await this.page.waitForTimeout(3000);
        await this.subjectLineTF.clear();
        await this.page.waitForTimeout(3000);
        await this.subjectLineTF.fill('editTest Subject Line' + faker.number.int({ min: 1, max: 100 }).toString());
        await this.page.waitForTimeout(3000);
        await this.saveButton.click();

    }

    async getEmailName() {
        await expect(this.emailName).toBeVisible({ timeout: 60000 });
        await this.emailName.scrollIntoViewIfNeeded();
        let text = await this.emailName.textContent();
        return text;
    }

    async getEmailEditor() {
        await expect(this.emailEditor).toBeVisible({ timeout: 60000 });
        await this.emailEditor.scrollIntoViewIfNeeded();
        let text = await this.emailEditor.textContent();
        return text;
    }

    async getBackToEmailConfigurationLink() {
        await expect(this.backToEmailConfigurationLink).toBeVisible({ timeout: 60000 });
        await this.backToEmailConfigurationLink.scrollIntoViewIfNeeded();
        let text = await this.backToEmailConfigurationLink.textContent();
        return text;
    }

    async validateButtons() {
        await expect(this.switchEditorButton).toBeVisible({ timeout: 60000 });
        await expect(this.sendTestButton).toBeVisible({ timeout: 60000 });
        await expect(this.importHTMLButton).toBeVisible({ timeout: 60000 });
        await expect(this.exportHTMLButton).toBeVisible({ timeout: 60000 });
        await expect(this.saveButton).toBeVisible({ timeout: 60000 });
        await this.page.waitForTimeout(6000);
    }

    async clickSendTestButton() {
        await expect(this.sendTestButton).toBeVisible({ timeout: 60000 });
        await this.sendTestButton.scrollIntoViewIfNeeded();
        await this.sendTestButton.click();
    }

    async validateSendTestEmailText() {
        await expect(this.sendTestEmailText).toBeVisible({ timeout: 60000 });
        await this.sendTestEmailText.scrollIntoViewIfNeeded();
        let text = await this.sendTestEmailText.textContent();
        return text;
    }

    async validateSendTestToText() {
        await expect(this.sendTestToText).toBeVisible({ timeout: 60000 });
        await this.sendTestToText.scrollIntoViewIfNeeded();
        let text = await this.sendTestToText.textContent();
        return text;
    }

    async clickCloseButton() {
        await expect(this.closeButton).toBeVisible({ timeout: 60000 });
        await this.closeButton.scrollIntoViewIfNeeded();
        await this.closeButton.click();
    }

    async fillTestEmailInput() {
        await expect(this.testEmailInput).toBeVisible({ timeout: 60000 });
        await this.testEmailInput.scrollIntoViewIfNeeded();
        await this.testEmailInput.fill(faker.internet.email());
    }

    async validateSampleEmailSuccessfullySentText() {
        await expect(this.sampleEmailSuccessfullySentText).toBeVisible({ timeout: 60000 });
        await this.sampleEmailSuccessfullySentText.scrollIntoViewIfNeeded();
        let text = await this.sampleEmailSuccessfullySentText.textContent();
        return text;
    }

    async clickSwitchEditorButton() {
        await expect(this.switchEditorButton).toBeVisible({ timeout: 60000 });
        await this.switchEditorButton.scrollIntoViewIfNeeded();
        await this.switchEditorButton.click();
    }

    async clickBrowseFilesButton() {
        await expect(this.browseFilesButton).toBeVisible({ timeout: 60000 });
        await this.browseFilesButton.scrollIntoViewIfNeeded();
        await this.browseFilesButton.click();
    }

    async chooseFileToUpload() {
        await this.page.waitForTimeout(5000)

        await this.page.setInputFiles('input[type="file"]', 'Upload/Excel files/pack.json');

        await this.page.waitForTimeout(5000);
        await expect(this.continueButton).toBeVisible({ timeout: 6000 });
        await this.continueButton.click();
    }

    async clickImportJSONButton() {
        await expect(this.importJSONButton).toBeVisible({ timeout: 60000 });
        await this.importJSONButton.scrollIntoViewIfNeeded();
        await this.importJSONButton.click();
    }

    async clickPreviewButton() {
        await expect(this.previewButton).toBeVisible({ timeout: 60000 });
        await this.previewButton.scrollIntoViewIfNeeded();
        await this.previewButton.click();
    }

    async isExportHTMLButtonClickable() {
        // Check if the button is visible
        const isVisible = await this.exportHTMLButton.isVisible();
        // Check if the button is enabled (not disabled)
        const isEnabled = await this.exportHTMLButton.isEnabled();
        return isVisible && isEnabled;
    }

    async clickExportHTMLButton() {
        const isClickable = await this.isExportHTMLButtonClickable();
        if (isClickable) {
            await this.exportHTMLButton.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(8000);
            await this.exportHTMLButton.click();
            await this.page.waitForTimeout(8000);
        } else {
            throw new Error('Export HTML button is not clickable');
        }
    }

    async validateBatchEmailTemplateRenewalsUpdateRequestSucceededText() {
        await expect(this.batchEmailTemplateRenewalsUpdateRequestSucceededText).toBeVisible({ timeout: 60000 });
        await this.batchEmailTemplateRenewalsUpdateRequestSucceededText.scrollIntoViewIfNeeded();
        let text = await this.batchEmailTemplateRenewalsUpdateRequestSucceededText.textContent();
        return text;
    }

    async validateEmailPreviewText() {
        await expect(this.emailPreviewText).toBeVisible({ timeout: 60000 });
        await this.emailPreviewText.scrollIntoViewIfNeeded();
        let text = await this.emailPreviewText.textContent();
        return text;
    }

    async clickSaveButton() {
        await expect(this.saveButton).toBeVisible({ timeout: 60000 });
        await this.saveButton.scrollIntoViewIfNeeded();
        await this.saveButton.click();
    }

    // async updateEmailEditor() {
    //     // await this.page.frameLocator('#editor-container iframe').frameLocator('iframe[title="Rich Text Area"]').getByLabel('Nobis vallum voluntarius ceno').dblclick();
    //     // await this.page.frameLocator('#editor-container iframe').frameLocator('iframe[title="Rich Text Area"]').getByLabel('Nobis vallum voluntarius ceno').fill(faker.lorem.text());
    //     await this.page.locator('#editor-container iframe').contentFrame().locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Rich Text Area. Press ALT-0').dblclick();
    //     await this.page.locator('#editor-container iframe').contentFrame().locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill(faker.lorem.text());
    // }

    async clickRenewals() {
        await expect(this.renewals).toBeVisible({ timeout: 60000 });
        await this.renewals.click();
        await this.page.waitForTimeout(6000);
    }

    async selectTemplate1() {
        await expect(this.template1).toBeVisible({ timeout: 60000 });
        await this.template1.click();
    }

    async clickEnableEmailToggleLink() {
        await expect(this.enableEmailToggleLink).toBeVisible({ timeout: 60000 });
        await this.enableEmailToggleLink.scrollIntoViewIfNeeded();
        await this.enableEmailToggleLink.click();
    }

    async clickYesButton() {
        await expect(this.yesButton).toBeVisible({ timeout: 60000 });
        await this.yesButton.scrollIntoViewIfNeeded();
        await this.yesButton.click();
    }

    async validateEmailManagerDisableWarningText() {
        await expect(this.emailManagerDisableWarningText).toBeVisible({ timeout: 60000 });
        await this.emailManagerDisableWarningText.scrollIntoViewIfNeeded();
        let text = await this.emailManagerDisableWarningText.textContent();
        return text;
    }

    async validateRenewalsLink() {
        await expect(this.renewals).toBeVisible({ timeout: 60000 });
        await this.renewals.scrollIntoViewIfNeeded();
        let text = await this.renewals.textContent();
        return text;
    }

    async validateBillsLink() {
        await expect(this.bills).toBeVisible({ timeout: 60000 });
        await this.bills.scrollIntoViewIfNeeded();
        let text = await this.bills.textContent();
        return text;
    }

        async getItemsUnderRenewalsLink(): Promise<string[]> {
    try {
        console.log("Attempting to retrieve items...");

        // Locate the renewals section
        const renewalsSection = this.page.locator("(//div[@class='collapse show'])[2]");
        await renewalsSection.waitFor({ state: 'visible', timeout: 10000 });

        // Log the inner HTML of the section for debugging
        const sectionHtml = await renewalsSection.innerHTML();
        console.log("Renewals Section HTML:", sectionHtml);

        // Locate all labels under the section
        const labels = renewalsSection.locator('label.pointer');
        await labels.first().waitFor({ state: 'visible', timeout: 10000 });

        // Get all label texts
        const labelElements = await labels.elementHandles();
        const items = await Promise.all(labelElements.map(async (label) => {
            const text = await label.innerText();
            return text.trim(); // Trim whitespace
        }));

        console.log("Retrieved Items:", items);

        if (items.length === 0) {
            throw new Error('No items found.');
        }

        return [...new Set(items)]; // Return unique items
    } catch (error) {
        const errorMessage = (error as Error).message || 'An unknown error occurred';
        console.error('Error retrieving items:', errorMessage);
        throw new Error('Failed to get items: ' + errorMessage);
    }
}

    async clickBills() {
        await expect(this.bills).toBeVisible({ timeout: 60000 });
        await this.bills.click();
        await this.page.waitForTimeout(6000);
    }

   async getItemsUnderBillsLink(): Promise<string[]> {
    try {
        console.log("Attempting to retrieve items...");

        // Locate the bills section
        const billsSection = this.page.locator("(//div[@class='collapse show'])[2]");
        await billsSection.waitFor({ state: 'visible', timeout: 10000 });

        // Log the inner HTML of the section for debugging
        const sectionHtml = await billsSection.innerHTML();
        console.log("Bills Section HTML:", sectionHtml);

        // Locate all labels under the section
        const labels = billsSection.locator('label.pointer');
        await labels.first().waitFor({ state: 'visible', timeout: 10000 });

        // Get all label texts
        const labelElements = await labels.elementHandles();
        const items = await Promise.all(labelElements.map(async (label) => {
            const text = await label.innerText();
            return text.trim(); // Trim whitespace
        }));

        console.log("Retrieved Items:", items);

        if (items.length === 0) {
            throw new Error('No items found.');
        }

        return [...new Set(items)]; // Return unique items
    } catch (error) {
        const errorMessage = (error as Error).message || 'An unknown error occurred';
        console.error('Error retrieving items:', errorMessage);
        throw new Error('Failed to get items: ' + errorMessage);
    }
}

    async validateTriggeredEmailsLink() {
        await expect(this.triggeredEmailsText).toBeVisible({ timeout: 60000 });
        await this.triggeredEmailsText.scrollIntoViewIfNeeded();
        let text = await this.triggeredEmailsText.textContent();
        return text;
    }

    async validateBatchEmailsLink() {
        await expect(this.batchEmails).toBeVisible({ timeout: 60000 });
        await this.batchEmails.scrollIntoViewIfNeeded();
        let text = await this.batchEmails.textContent();
        return text;
    }

    async clickRenewalsPlusIcon() {
        await expect(this.renewalsPlusIcon).toBeVisible({ timeout: 60000 });
        await this.renewalsPlusIcon.scrollIntoViewIfNeeded();
        await this.renewalsPlusIcon.click();
    }

    async clickBillsPlusIcon() {
        await expect(this.billsPlusIcon).toBeVisible({ timeout: 60000 });
        await this.billsPlusIcon.scrollIntoViewIfNeeded();
        await this.billsPlusIcon.click();
    }

    async validateChooseEmailTemplateText() {
        await this.chooseEmailTemplateText.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.chooseEmailTemplateText).toBeVisible({ timeout: 60000 });
        await this.chooseEmailTemplateText.scrollIntoViewIfNeeded();
        let text = await this.chooseEmailTemplateText.textContent();
        return text;
    }

    async validateChooseYourCanvasText() {
        await this.chooseYourCanvasText.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.chooseYourCanvasText).toBeVisible({ timeout: 60000 });
        await this.chooseYourCanvasText.scrollIntoViewIfNeeded();
        let text = await this.chooseYourCanvasText.textContent();
        return text;
    }

    async validateClassicBuilderText() {
        await this.classicBuilderText.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.classicBuilderText).toBeVisible({ timeout: 60000 });
        await this.classicBuilderText.scrollIntoViewIfNeeded();
        let text = await this.classicBuilderText.textContent();
        return text;
    }

    async validateDesignBuilderText() {
        await this.designBuilderText.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.designBuilderText).toBeVisible({ timeout: 60000 });
        await this.designBuilderText.scrollIntoViewIfNeeded();
        let text = await this.designBuilderText.textContent();
        return text;
    }

    async clickOnCrossIcon() {
        await expect(this.crossIcon).toBeVisible({ timeout: 60000 });
        await this.crossIcon.scrollIntoViewIfNeeded();
        await this.crossIcon.click();
    }


}

