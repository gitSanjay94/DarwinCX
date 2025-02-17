import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class emSenderInfoPage {
    page: Page;
    readonly saveButton: Locator;
    readonly cancelButton: Locator;
    readonly testEmailSenderCloseButton: Locator;
    readonly sendTestButton: Locator;
    readonly sendTestEmailButton: Locator;
    readonly testEmailTxt: Locator;
    readonly editButton: Locator;
    readonly emailSenderName: Locator;
    readonly emailSenderAddress: Locator;
    readonly backtoEmailManager: Locator;
    readonly templateconfigurator: Locator;
    readonly addLogoText: Locator;
    readonly addBrandLogoButton: Locator;
    readonly triggeredEmails: Locator;
    readonly orderConfirmation: Locator;
    readonly paymentConfirmation: Locator;
    readonly editSubjectLine: Locator;
    readonly subjectLine: Locator;
    readonly msgMissingReq: Locator;
    readonly addSubjectLine: Locator;
    readonly additionalSenderSettingsText: Locator;
    readonly msgSubjectLineSuccess: Locator;
    readonly frameEditbutton: Locator;
    readonly emailEditor: Locator;
    readonly emailTemplateSave: Locator;
    readonly emailEditorDataFill: Locator;
    readonly emailTemplateSuccessMsg: Locator;
    readonly switchEditor: Locator;
    readonly switchEditorBackButton: Locator;
    readonly switchEditorContinueButton: Locator;
    readonly switchEditorTextArea: Locator;
    readonly switchEditorTextAreDataFill: Locator;
    readonly testEmailSentSuccessMsg: Locator;
    readonly sendTestEmailCrossIcon: Locator;
    readonly previewButton: Locator;
    readonly previewCrossIcon: Locator;
    readonly emailPreviewTxt: Locator;
    readonly emailTemplateTxtToggle: Locator;
    readonly emailTemplateToggle: Locator;
    readonly emailTemplateToggleNo: Locator;
    readonly emailTemplateToggleYes: Locator;
    readonly emailTemplateToggleDisableTxt: Locator;
    readonly emailTemplateToggleEnableTxt: Locator;
    readonly renewalsUpdateRequestSucceededText: Locator;
    readonly orderConfirmationSection: Locator;
    readonly toggleLocatorNo: Locator;
    readonly toggleLocatorYes: Locator;
    readonly toggleMessageLocator: Locator;
    readonly donorEmailAddress: Locator;
    readonly donorEmailUpdateSaveButton: Locator;
    readonly donorEmailUpdateEditButton: Locator;
    readonly MinimumPriceMaximumPriceEditBUtton: Locator;
    readonly maxPriceInputTB: Locator;



    constructor(page: Page) {
        this.page = page;
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.testEmailSenderCloseButton = page.getByRole('button', { name: 'close' });
        this.sendTestButton = page.getByRole('button', { name: 'Send Test' });
        this.sendTestEmailButton = page.getByRole('button', { name: 'Send Test' }).nth(1);
        this.testEmailTxt = page.locator('input[name="testEmail"]');
        // this.editButton = page.getByRole('button', { name: 'Edit' })
        this.editButton = page.locator('div').filter({ hasText: /^From\(Email Sender\)Edit$/ }).getByRole('button');
        this.emailSenderName = page.locator('div:nth-child(2) > input').first();
        this.emailSenderAddress = page.locator('div:nth-child(2) > div > div:nth-child(2) > input');
        this.backtoEmailManager = page.getByRole('link', { name: '< back to email manager' });
        this.templateconfigurator = page.getByText('Template Configurator');
        this.addLogoText = page.getByText('Add Logo')
        this.addBrandLogoButton = page.getByRole('button', { name: 'Add' });
        this.triggeredEmails = page.getByText('Triggered Emails')
        this.orderConfirmation = page.getByText('Order Confirmation', { exact: true });
        this.testEmailSentSuccessMsg = page.getByText('Sample email successfully sent', { exact: true });
        this.paymentConfirmation = page.getByText('Payment Confirmation');
        //this.editSubjectLine = page.locator('div').filter({ hasText: /^SubjectEditteaSubject line$/ }).getByRole('button')
        this.editSubjectLine = page.locator('//*[@id="app"]/div[1]/main/div[2]/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[1]/div/div/div/div/div/button')
        this.subjectLine = page.getByLabel('Subject Line')
        this.msgMissingReq = page.locator('text="Missing requirements to enable:"');
        this.msgSubjectLineSuccess = page.locator('text="Payment update request succeeded"');
        this.addSubjectLine = page.getByRole('button', { name: 'Add' });
        this.addBrandLogoButton = page.getByRole('button', { name: 'Add' });
        this.additionalSenderSettingsText = page.getByText('Additional Sender Settings');
        this.frameEditbutton = page.getByRole('button', { name: 'Edit' }).nth(2);
        this.emailEditor = page.frameLocator('#editor-container iframe').locator('div').filter({ hasText: /^Content$/ }).first();
        this.emailEditorDataFill = page.frameLocator('#editor-container iframe').locator('#u_content_text_2 div');
        this.emailTemplateSave = page.getByRole('button', { name: 'Save' });
        this.emailTemplateSuccessMsg = page.getByRole('heading', { name: 'Email Template - Payment' });
        this.switchEditor = page.getByRole('button', { name: 'Switch Editor' });
        this.switchEditorBackButton = page.getByRole('button', { name: 'Back' });
        this.switchEditorContinueButton = page.getByRole('button', { name: 'Continue' });
        this.switchEditorTextArea = page.frameLocator('#editor-container iframe').frameLocator('iframe[title="Rich Text Area"]').locator('.u-row-container');
        this.switchEditorTextAreDataFill = page.frameLocator('#editor-container iframe').frameLocator('iframe[title="Rich Text Area"]').getByLabel('Rich Text Area. Press ALT-0');
        this.sendTestEmailCrossIcon = page.getByRole('button', { name: '' });
        this.previewButton = page.getByRole('button', { name: 'Preview' })
        this.previewCrossIcon = page.getByRole('button', { name: '' });
        this.emailPreviewTxt = page.getByText('Email Preview');
        this.emailTemplateTxtToggle = page.getByText('Enable Email');
        this.emailTemplateToggle = page.locator('.col-8 > div > div > div:nth-child(2)');
        this.emailTemplateToggleNo = page.locator("//strong[text()='Are you sure you want to want to disable this email ?']/following::button[text()='No'][1]");
        this.emailTemplateToggleYes = page.locator("//strong[text()='Are you sure you want to want to disable this email ?']/following::button[text()='Yes'][1]");
        // this.emailTemplateToggleDisableTxt = page.locator("//*[text()='Disabled']/ancestor::div[@class='card-header']")
        this.emailTemplateToggleDisableTxt = page.locator('div').filter({ hasText: /^Disabled$/ }).locator('b');
        this.emailTemplateToggleEnableTxt = page.locator('div').filter({ hasText: /^Enabled$/ }).locator('b');
        this.renewalsUpdateRequestSucceededText = page.locator("//h6[text()='Batch Email Template - Renewals update request succeeded']");
        this.orderConfirmationSection = page.locator('div:has-text("Order Confirmation")');
        this.toggleLocatorNo = page.locator('div').filter({ hasText: /^Do you require domestic tax receipts for donations\?$/ }).locator('span').first();
        this.toggleLocatorYes = page.locator('div').filter({ hasText: /^Do you require domestic tax receipts for donations\?$/ }).locator('span').nth(1);
        this.toggleMessageLocator = page.getByRole('heading', { name: 'email_template_donation_order_domestic_tax_receipt update request succeeded' });
        this.donorEmailAddress = page.locator('input[name="donor_email_address"]');
        this.donorEmailUpdateSaveButton = page.getByRole('button', { name: 'Save' });
        this.donorEmailUpdateEditButton = page.getByRole('button', { name: 'Edit' });
        this.MinimumPriceMaximumPriceEditBUtton = page.locator('div').filter({ hasText: /^Minimum PriceMaximum PriceEdit$/ }).getByRole('button');
       this.maxPriceInputTB = page.locator('input[name="maxPrice"]');
   
    }

    async clickSaveButton() {
        try {
            await expect(this.saveButton).toBeVisible({ timeout: 60000 });
            await this.saveButton.click();
            await this.page.waitForTimeout(12000)
        } catch (error) {
            logger.info(`Element ${this.saveButton} not found or not visible: `, error);
            console.error(`Element ${this.saveButton} not found or not visible: `, error);
        }
    }

    async clickPreviewButton() {
        await expect(this.previewButton).toBeVisible({ timeout: 6000 });
        await this.previewButton.click();
        await this.page.waitForTimeout(1000); // Adjust or replace with waiting for a specific element
    }

    async clickPreviewCrossIcon() {
        await expect(this.previewCrossIcon).toBeVisible({ timeout: 6000 });
        await this.previewCrossIcon.click();
        await this.page.waitForTimeout(1000); // Adjust or replace with waiting for a specific element
    }

    async clickCancelButton() {
        try {
            await expect(this.cancelButton).toBeVisible({ timeout: 6000 });
            await this.cancelButton.click();
            await this.page.waitForTimeout(6000)
        } catch (error) {
            logger.info(`Element ${this.cancelButton} not found or not visible: `, error);
            console.error(`Element ${this.cancelButton} not found or not visible: `, error);
        }
    }



    async clicksendTestEmailCrossIcon() {

        await expect(this.sendTestEmailCrossIcon).toBeVisible({ timeout: 6000 });
        await this.sendTestEmailCrossIcon.click();
        await this.page.waitForTimeout(6000)

    }

    async clickTestEmailSenderCloseButton() {

        await expect(this.testEmailSenderCloseButton).toBeVisible({ timeout: 12000 });
        await this.testEmailSenderCloseButton.click();
        await this.page.waitForTimeout(6000)

    }
    async clickEditButton() {
        try {
            await expect(this.editButton).toBeVisible({ timeout: 6000 });
            await this.editButton.click();
        } catch (error) {
            logger.info(`Element ${this.editButton} not found or not visible: `, error);
            console.info(`Element ${this.editButton} not found or not visible: `, error);
        }
    }

    async editEmailSenderName() {
        try {
            await expect(this.emailSenderName).toBeVisible({ timeout: 6000 });
            await this.emailSenderName.click();
            await this.emailSenderName.clear();
            await this.emailSenderName.fill('SenderName' + faker.number.int({ min: 1, max: 100 }).toString());
            await this.page.waitForTimeout(3000)

        } catch (error) {
            logger.info(`Element ${this.emailSenderName} not found or not visible: `, error);
            console.error(`Element ${this.emailSenderName} not found or not visible: `, error);
        }
    }

    async editEmailSenderAddress() {
        try {
            await expect(this.emailSenderAddress).toBeVisible({ timeout: 6000 });
            await this.emailSenderAddress.click();
            await this.emailSenderAddress.clear();
            await this.emailSenderAddress.fill('noreply@darwin.cx');
            // await this.emailSenderAddress.fill('Senderemailaddress' + faker.number.int({ min: 1, max: 100 }).toString() + '@mailinator.com');
        } catch (error) {
            logger.info(`Element ${this.emailSenderAddress} not found or not visible: `, error);
            console.error(`Element ${this.emailSenderAddress} not found or not visible: `, error);
        }
    }

    

async fillTestEmailSenderAddress() {
        try {
            await expect(this.testEmailTxt).toBeVisible({ timeout: 6000 });
            await this.testEmailTxt.click();
            await this.testEmailTxt.fill('testemailaddress' + faker.number.int({ min: 1, max: 100 }).toString() + '@mailinator.com');
        } catch (error) {
            logger.info(`Element ${this.testEmailTxt} not found or not visible: `, error);
            console.error(`Element ${this.testEmailTxt} not found or not visible: `, error);
        }
    }

    async clickTestEmailSenderAddress() {
        try {
            await expect(this.testEmailTxt).toBeVisible({ timeout: 6000 });
            await this.testEmailTxt.click();
                    } catch (error) {
            logger.info(`Element ${this.testEmailTxt} not found or not visible: `, error);
            console.error(`Element ${this.testEmailTxt} not found or not visible: `, error);
        }
    }

async verifyEmailSentToSender() { 
    try {
            
        // Generate the email address using faker
        const generatedEmail = 'testemailaddress' + faker.number.int({ min: 1, max: 100 }).toString() + '@mailinator.com';
        
        // Fill the input with the generated email
        await this.testEmailTxt.fill(generatedEmail);
        
        // Log the generated email address
        logger.info(`Filled the Test Email Address: ${generatedEmail}`);
        
        // Select the filled email and copy it to the clipboard
        await this.testEmailTxt.selectText();  // Select the text inside the input
        await this.page.keyboard.press('Control+C');  // Copies the selected text to clipboard (Ctrl+C for Windows, Command+C for macOS)
     await expect(this.sendTestEmailButton).toBeVisible({ timeout: 60000 });
         await this.page.waitForTimeout(12000);
        await this.sendTestEmailButton.click();
         await this.page.waitForTimeout(12000);
        // Optionally, log the copied email or store it in a variable for later use
        logger.info(`Copied the Test Email Address: ${generatedEmail}`);
        
        // Open Mailinator's website
        await this.page.goto('https://www.mailinator.com');

        // Wait for the search bar to be visible and search for the copied email address
        await expect(this.page.locator("//input[@id='search']")).toBeVisible(); // You might need to inspect the selector based on Mailinator's DOM
        await this.page.locator("//input[@id='search']").fill(generatedEmail);  // Fill the copied email into the search field
        await this.page.locator("//button[@value='Search for public inbox for free' and text()='GO']").click();  // Click the search button (inspect if the button has a different selector)

        // Optionally, wait for the results to load
       await this.page.getByRole('cell', { name: /^SenderName\d+$/ }).click();

  await this.page.locator('#email_pane').getByText('From', { exact: true }).click();
  await this.page.getByText('noreply@darwin.cx', { exact: true }).click();
 const emailLocator = this.page.locator('text=noreply@darwin.cx');
const emailText = await emailLocator.textContent();
console.log(emailText);  // Check the actual content
await expect(emailLocator).toBeVisible()

         return generatedEmail;
       

    } catch (error) {
        logger.info(`Element ${this.testEmailTxt} not found or not visible: `, error);
        console.error(`Element ${this.testEmailTxt} not found or not visible: `, error);
    }
}


    async validateSIEditButton() {
        try {
            expect(this.editButton).toBeVisible({ timeout: 6000 });
            let text = await this.editButton.textContent();
            return text;
        } catch (error) {
            logger.info('Element not found or not visible', error);
            console.info('Element not found or not visible', error);
        }
    }


    async clickBacktoEmailManagerlink() {
        try {
            await this.page.waitForTimeout(3000)
            await expect(this.backtoEmailManager).toBeVisible({ timeout: 6000 });
            await this.backtoEmailManager.click();
            await this.page.waitForTimeout(3000)
        } catch (error) {
            logger.info(`Element ${this.backtoEmailManager} not found or not visible: `, error);
            console.info(`Element ${this.backtoEmailManager} not found or not visible: `, error);
        }
    }

    async validateTemplateConfigurator() {
        try {
            await this.page.waitForTimeout(6000)
            expect(this.templateconfigurator).toBeVisible({ timeout: 12000 });
            let text = await this.templateconfigurator.textContent();
            return text;
        } catch (error) {
            logger.info('Element not found or not visible', error);
            console.info('Element not found or not visible', error);
        }
    }

    async checkTrigreedEmailTemplateVisibility(templateText: string): Promise<void> {
        try {
            await expect(this.page.getByText(templateText, { exact: true })).toBeVisible();
        } catch (error) {
            console.error(`Visibility check failed for "${templateText}":`, error);
            throw new Error(`Template "${templateText}" is not visible.`);
        }
    }

    async clickOnTemplate(templateText: string): Promise<void> {
        try {
            // Wait for the timeout to complete
            await this.page.waitForTimeout(5000);

            // Wait for the element to be visible before clicking
            const template = await this.page.getByText(templateText, { exact: true });
            await template.waitFor({ state: 'visible' });
            await template.click();
        } catch (error) {
            console.error(`Click action failed for "${templateText}":`, error);
            throw new Error(`Unable to click on template "${templateText}".`);
        }
    }



    async editBrandName() {
        await this.page.locator('div').filter({ hasText: /^Brand NameEdit$/ }).getByRole('button').click();
        await this.page.locator('div:nth-child(2) > .card > .card-body > div > div > div > div:nth-child(2) > input').click();
        await this.page.waitForTimeout(6000);
        await this.page.locator('div:nth-child(2) > .card > .card-body > div > div > div > div:nth-child(2) > input').waitFor({ state: 'visible' });
        await this.page.locator('div:nth-child(2) > .card > .card-body > div > div > div > div:nth-child(2) > input').clear();
        await this.page.waitForTimeout(6000);
        await this.page.locator('div:nth-child(2) > .card > .card-body > div > div > div > div:nth-child(2) > input').fill('demoTestBrandName' + faker.commerce.productName() + faker.number.int({ min: 1, max: 100 }).toString());
        await this.page.waitForTimeout(6000);
    }

    async openBrandLogo() {
        await this.page.locator('div').filter({ hasText: /^Brand NameEdit$/ }).getByRole('button').click();
        await this.page.locator('.card-body > div > div:nth-child(2) > div > svg').click();
        await this.page.waitForTimeout(2000);
    }

    async validateAddLogoText() {
        await expect(this.addLogoText).toBeVisible({ timeout: 6000 });
        let text = await this.addLogoText.textContent();
        return text;
    }

    async validateEmailTemplateToggleText() {
        try {
            await expect(this.emailTemplateTxtToggle).toBeVisible({ timeout: 8000 });
            let text = await this.emailTemplateTxtToggle.textContent();
            logger.info(`Email toggle text is: ${text}`);
            return text;
        } catch (error) {
            logger.error(`Error validating email template toggle text: ${error}`);
            throw error;
        }
    }


    async changeEmailTemplateToggleOptionDisableNo() {
        try {
            await this.emailTemplateToggle.click();
            await this.page.waitForTimeout(6000);
            await this.emailTemplateToggleNo.click();
            await this.page.waitForTimeout(8000);
        } catch (error) {
            logger.error(`Error in changeEmailTemplateToggleOptionDisableNo: ${error}`);
            throw error; // Rethrow to fail the test if needed
        }
    }

    async changeEmailTemplateToggleOptionEnable() {
        try {
            // await this.emailTemplateToggle.waitFor({ state: 'visible' });
            await this.emailTemplateToggle.click();
            await this.page.waitForTimeout(6000);

        } catch (error) {
            logger.error(`Error in emailTemplateToggle: ${error}`);
            throw error; // Rethrow to fail the test if needed
        }
    }

    async changeEmailTemplateToggleOptionDisable() {

        await this.emailTemplateToggle.click();
        await this.page.waitForTimeout(6000)
        await this.emailTemplateToggleYes.waitFor({ state: 'visible' });
        await this.emailTemplateToggleYes.click();
        await this.page.waitForTimeout(6000);

    }

    async validateEmailPreviewText() {
        await expect(this.emailPreviewTxt).toBeVisible({ timeout: 6000 });
        let text = await this.emailPreviewTxt.textContent();
        return text;
    }

    async validateEmailTemplateToggleDisableTxt() {
        await this.emailTemplateToggleDisableTxt.waitFor({ state: 'visible', timeout: 30000 });
        let text = await this.emailTemplateToggleDisableTxt.textContent();
        return text;
    }

    async validateEmailTemplateToggleEnableTxt() {
        await this.emailTemplateToggleEnableTxt.waitFor({ state: 'visible', timeout: 30000 });
        let text = await this.emailTemplateToggleEnableTxt.textContent();
        return text;
    }
    async addBrandLogo() {
        await this.page.locator('div').filter({ hasText: /^Brand NameEdit$/ }).getByRole('button').click();
        await this.page.locator('.card-body > div > div:nth-child(2) > div > svg').click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('dialog').getByRole('textbox').click();
        await this.page.waitForTimeout(6000);
        await this.page.getByRole('dialog').getByRole('textbox').clear();
        await this.page.waitForTimeout(6000);
        await this.page.getByRole('dialog').getByRole('textbox').fill('https://picsum.photos/200/300');
        await this.page.waitForTimeout(6000);
        await expect(this.addBrandLogoButton).toBeVisible({ timeout: 6000 });
        await this.addBrandLogoButton.click();
    }

    async clickTriggeredEmailsLink() {
        try {
            await expect(this.triggeredEmails).toBeVisible({ timeout: 60000 });
            await this.triggeredEmails.click();
            await this.page.waitForTimeout(3000)
        } catch (error) {
            logger.info(`Element ${this.triggeredEmails} not found or not visible: `, error);
            console.error(`Element ${this.triggeredEmails} not found or not visible: `, error);
        }
    }
    async clickOrderConfirmationLink() {
        try {
            await expect(this.orderConfirmation).toBeVisible({ timeout: 60000 });
            await this.orderConfirmation.click();
            await this.page.waitForTimeout(3000)
        } catch (error) {
            logger.info(`Element ${this.orderConfirmation} not found or not visible: `, error);
            console.error(`Element ${this.orderConfirmation} not found or not visible: `, error);
        }
    }

    async clickPaymentConfirmationLink() {
        try {
            await expect(this.paymentConfirmation).toBeVisible({ timeout: 60000 });
            await this.paymentConfirmation.click();
        } catch (error) {
            logger.info(`Element ${this.paymentConfirmation} not found or not visible: `, error);
            console.error(`Element ${this.paymentConfirmation} not found or not visible: `, error);
        }
    }

    async clickSubjectLineEditButton() {
        try {
            await expect(this.editSubjectLine).toBeVisible({ timeout: 60000 });
            await this.editSubjectLine.click();
            await this.page.waitForTimeout(3000)
        } catch (error) {
            logger.info(`Element ${this.editSubjectLine} not found or not visible: `, error);
            console.error(`Element ${this.editSubjectLine} not found or not visible: `, error);
        }
    }

    async savewithoutfillingSubjectLine() {
        try {
            await expect(this.subjectLine).toBeVisible({ timeout: 60000 });
            await this.subjectLine.click();
            await this.subjectLine.clear();
            await this.saveButton.click();
            // await this.page.waitForTimeout(6000)
        } catch (error) {
            logger.info(`Element ${this.subjectLine} not found or not visible: `, error);
            console.error(`Element ${this.subjectLine} not found or not visible: `, error);
        }
    }

    async validatemsgMissingReqmsg() {
        await expect(this.msgMissingReq).toBeVisible({ timeout: 12000 });
        let text = await this.msgMissingReq.textContent();
        await this.page.waitForTimeout(3000);
        return text;
    }

    async clickAddSubjectlineButton() {
        try {
            await expect(this.addSubjectLine).toBeVisible({ timeout: 60000 });
            await this.addSubjectLine.click();
            // await this.page.waitForTimeout(3000)
        } catch (error) {
            logger.info(`Element ${this.addSubjectLine} not found or not visible: `, error);
            console.error(`Element ${this.addSubjectLine} not found or not visible: `, error);
        }
    }

    async fillSubjectLinetext() {
        try {
            await expect(this.subjectLine).toBeVisible({ timeout: 6000 });
            await this.subjectLine.click();
            await this.subjectLine.fill('SL' + faker.number.int({ min: 1, max: 100 }).toString());
        } catch (error) {
            logger.info(`Element ${this.subjectLine} not found or not visible: `, error);
            console.error(`Element ${this.subjectLine} not found or not visible: `, error);
        }
    }
    async validateSLSuccessmsg() {
        await expect(this.msgSubjectLineSuccess).toBeVisible({ timeout: 6000 });
        let text = await this.msgSubjectLineSuccess.textContent();
        return text;
    }

    // async editAdditionalSenderSettings() {
    //     await this.page.locator('div').filter({ hasText: /^Additional Sender SettingsEdit$/ }).getByRole('button').click();
    //     await this.page.waitForTimeout(12000);
    //     await this.clickAllMatchingElements()
    //     await this.page.waitForTimeout(12000);
    //     await this.page.getByPlaceholder('Enter value and press enter').first().scrollIntoViewIfNeeded();
    //     await this.page.getByPlaceholder('Enter value and press enter').first().click();
    //     await this.page.getByPlaceholder('Enter value and press enter').first().fill('test' + faker.number.int({ min: 1, max: 100 }).toString() + '@gmail.com');
    //     await this.page.locator('.col-4 > div > div > div:nth-child(2) > svg').first().click();
    //     await this.page.waitForTimeout(20000);
    //     await this.page.getByPlaceholder('Enter value and press enter').nth(1).click();
    //     await this.page.getByPlaceholder('Enter value and press enter').nth(1).fill('test' + faker.number.int({ min: 1, max: 100 }).toString() + '@gmail.com');
    //     await this.page.waitForTimeout(6000);
    //     await this.page.locator('.row > div:nth-child(2) > div > div > div:nth-child(2) > svg > path').first().click();
    //     await this.page.getByPlaceholder('Enter value and press enter').nth(2).scrollIntoViewIfNeeded();
    //     await this.page.getByPlaceholder('Enter value and press enter').nth(2).click();
    //     await this.page.getByPlaceholder('Enter value and press enter').nth(2).fill('test' + faker.number.int({ min: 1, max: 100 }).toString() + '@gmail.com');
    //     await this.page.locator('div:nth-child(2) > div > div > div > div:nth-child(2) > svg > path').first().click();
    //     await this.page.getByPlaceholder('Enter value and press enter').nth(3).click();
    //     await this.page.getByPlaceholder('Enter value and press enter').nth(3).fill('test' + faker.number.int({ min: 1, max: 100 }).toString() + '@gmail.com');
    //     await this.page.locator('div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > svg > path').click();
    //     await this.page.getByPlaceholder('Enter value and press enter').nth(4).scrollIntoViewIfNeeded();
    //     await this.page.getByPlaceholder('Enter value and press enter').nth(4).click();
    //     await this.page.getByPlaceholder('Enter value and press enter').nth(4).fill('test' + faker.number.int({ min: 1, max: 100 }).toString() + '@gmail.com');
    //     await this.page.locator('.col-4 > div > div > div:nth-child(2) > svg').nth(4).click();
    //     await this.page.getByPlaceholder('Select').click();
    //     await this.page.getByText('A (A - Whitemail)').click();
    // }

    async editAdditionalSenderSettings() {
        await this.page.locator('div').filter({ hasText: /^Additional Sender SettingsEdit$/ }).getByRole('button').click();
        await this.page.waitForTimeout(12000);
        // await this.clickAllMatchingElements()
        await this.page.waitForTimeout(12000);
        await this.page.getByPlaceholder('Enter value and press enter').first().scrollIntoViewIfNeeded();
        await this.page.getByPlaceholder('Enter value and press enter').first().focus();
        await this.page.getByPlaceholder('Enter value and press enter').first().click();
        await this.page.getByPlaceholder('Enter value and press enter').first().fill('test' + faker.number.int({ min: 1, max: 100 }).toString() + '@gmail.com');
        await this.page.locator('.col-4 > div > div > div:nth-child(2) > svg').first().click();
        await this.page.waitForTimeout(20000);
        // Wait for the input to be available
        await this.page.waitForSelector("//div[contains(text(), 'Bcc Emails:Autorenew Emails')]/ancestor::div[contains(@class, 'col-4')]//input", { timeout: 60000 });

        // Click the input field
        await this.page.locator("//div[contains(text(), 'Bcc Emails:Autorenew Emails')]/ancestor::div[contains(@class, 'col-4')]//input").click();

        // Fill the input with a generated email
        const email = 'test' + faker.number.int({ min: 1, max: 2000 }).toString() + '@gmail.com';
        await this.page.locator("//div[contains(text(), 'Bcc Emails:Autorenew Emails')]/ancestor::div[contains(@class, 'col-4')]//input").fill(email);
        await this.page.waitForTimeout(6000);
        await this.page.locator('.row > div:nth-child(2) > div > div > div:nth-child(2) > svg > path').first().click();
        await this.page.getByPlaceholder('Enter value and press enter').nth(2).scrollIntoViewIfNeeded();
        await this.page.getByPlaceholder('Enter value and press enter').nth(2).click();
        await this.page.getByPlaceholder('Enter value and press enter').nth(2).fill('test' + faker.number.int({ min: 1, max: 2000 }).toString() + '@gmail.com');
        await this.page.locator('div:nth-child(2) > div > div > div > div:nth-child(2) > svg > path').first().click();
        await this.page.getByPlaceholder('Enter value and press enter').nth(3).click();
        await this.page.getByPlaceholder('Enter value and press enter').nth(3).fill('test' + faker.number.int({ min: 1, max: 2000 }).toString() + '@gmail.com');
        await this.page.locator('div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > svg > path').click();
        await this.page.getByPlaceholder('Enter value and press enter').nth(4).scrollIntoViewIfNeeded();
        await this.page.getByPlaceholder('Enter value and press enter').nth(4).click();
        await this.page.getByPlaceholder('Enter value and press enter').nth(4).fill('test' + faker.number.int({ min: 1, max: 2000 }).toString() + '@gmail.com');
        await this.page.locator('.col-4 > div > div > div:nth-child(2) > svg').nth(4).click();
        await this.page.getByPlaceholder('Select').click();
        await this.page.getByText('A (A - Whitemail)').click();
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

    async clickAllMatchingElements() {
        await this.page.waitForTimeout(3000);
        const elements = await this.page.locator('//i[@class="fas fa-times"]').elementHandles();
        const runLimit = elements.length - 2;
        let count = 0;;
        for (const element of elements) {
            if (count >= runLimit) break;
            await this.page.waitForTimeout(3000);
            await element.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(3000);
            await element.click();
            await this.page.waitForTimeout(3000);
            count++;
        }
    }

    async clickEditButtonFrame() {
        try {
            await expect(this.frameEditbutton).toBeVisible({ timeout: 6000 });
            await this.frameEditbutton.click();
        } catch (error) {
            logger.info(`Element ${this.frameEditbutton} not found or not visible: `, error);
            console.info(`Element ${this.frameEditbutton} not found or not visible: `, error);
        }
    }

    async updateEmailEditors() {
        try {
            await expect(this.emailEditor).toBeVisible({ timeout: 6000 });
            await this.emailEditor.click();
            await this.emailEditorDataFill.clear();
            await this.emailEditorDataFill.fill('Emailtemplate' + faker.number.int({ min: 1, max: 100 }).toString());


        } catch (error) {
            logger.info(`Element ${this.emailEditor} not found or not visible: `, error);
            console.error(`Element ${this.emailEditor} not found or not visible: `, error);
        }
    }

    async clickEmailTemplateSaveButton() {
        try {
            await expect(this.emailTemplateSave).toBeVisible({ timeout: 60000 });
            await this.emailTemplateSave.click();
            //await this.page.waitForTimeout(6000)
        } catch (error) {
            logger.info(`Element ${this.emailTemplateSave} not found or not visible: `, error);
            console.error(`Element ${this.emailTemplateSave} not found or not visible: `, error);
        }
    }

    async validateEmailTemplateSuccessmsg() {
        try {
            // Wait for the success message element to be visible
            await this.emailTemplateSuccessMsg.waitFor({ state: 'visible', timeout: 10000 });

            // Get the text content
            let text = await this.emailTemplateSuccessMsg.textContent();
            console.log(`Success message text: ${text}`); // Log the actual message

            return text;
        } catch (error) {
            logger.info(`Element not found or not visible: `, error);
            console.error(`Element not found or not visible: `, error);
            throw error; // Ensure the test fails
        }
    }


    async validateTestEmailSentSuccessMsg() {
        try {
            await expect(this.testEmailSentSuccessMsg).toBeVisible({ timeout: 80000 });
            let text = await this.testEmailSentSuccessMsg.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.testEmailSentSuccessMsg} not found or not visible: `, error);
            console.error(`Element ${this.testEmailSentSuccessMsg} not found or not visible: `, error);
        }
    }


    async clickSwitchEditor() {
        try {
            await expect(this.switchEditor).toBeVisible({ timeout: 6000 });
            await this.switchEditor.click();
            await this.page.waitForTimeout(3000);
        } catch (error) {
            logger.info(`Element ${this.switchEditor} not found or not visible: `, error);
            console.info(`Element ${this.switchEditor} not found or not visible: `, error);
        }
    }

    async clickSendTestButton() {
        try {
            await expect(this.sendTestButton).toBeVisible({ timeout: 6000 });
            await this.sendTestButton.click();
            await this.page.waitForTimeout(3000);
        } catch (error) {
            logger.info(`Element ${this.sendTestButton} not found or not visible: `, error);
            console.info(`Element ${this.sendTestButton} not found or not visible: `, error);
        }
    }

    async clickSendEmailTestButton() {
        await expect(this.sendTestEmailButton).toBeVisible({ timeout: 60000 });
         await this.page.waitForTimeout(12000);
        await this.sendTestEmailButton.click();
        // await this.page.waitForTimeout(12000);

    }
    async clickSwitchEditorBack() {
        try {
            await expect(this.switchEditorBackButton).toBeVisible({ timeout: 6000 });
            await this.switchEditorBackButton.click();
            await this.page.waitForTimeout(3000);
        } catch (error) {
            logger.info(`Element ${this.switchEditorBackButton} not found or not visible: `, error);
            console.info(`Element ${this.switchEditorBackButton} not found or not visible: `, error);
        }
    }

    async clickSwitchEditorContinue() {
        try {
            await expect(this.switchEditorContinueButton).toBeVisible({ timeout: 6000 });
            await this.switchEditorContinueButton.click();
        } catch (error) {
            logger.info(`Element ${this.switchEditorContinueButton} not found or not visible: `, error);
            console.info(`Element ${this.switchEditorContinueButton} not found or not visible: `, error);
        }
    }

    async updateSwitchEditors() {
        try {
            await expect(this.switchEditorTextArea).toBeVisible({ timeout: 6000 });
            await this.switchEditorTextArea.click();
            await this.switchEditorTextAreDataFill.clear();
            await this.switchEditorTextAreDataFill.fill('SwitchEditor' + faker.number.int({ min: 1, max: 100 }).toString());


        } catch (error) {
            logger.info(`Element ${this.switchEditorTextArea} not found or not visible: `, error);
            console.error(`Element ${this.switchEditorTextArea} not found or not visible: `, error);
        }
    }

    async fillDataEmailEditors() {
        try {
            // Wait for the iframe to be visible
            const frame = this.page.frameLocator('#editor-container iframe').frameLocator('iframe[title="Rich Text Area"]');
            // await expect(frame).toBeVisible({ timeout: 6000 });

            // Wait for the text area to be visible and click it
            const richTextArea = frame.getByLabel('Rich Text Area. Press ALT-0');
            await expect(richTextArea).toBeVisible({ timeout: 12000 });
            await richTextArea.click();
            await richTextArea.clear();

            // Clear and fill the text area
            await richTextArea.fill('This is Payment Confirmation Mail ' + faker.number.int({ min: 1, max: 2000 }).toString());

        } catch (error) {
            logger.info(`Error interacting with Rich Text Area: `, error);
            console.error(`Error interacting with Rich Text Area: `, error);
        }
    }
    async getOrderConfirmationItems(): Promise<string[]> {
        try {
            console.log("Attempting to retrieve order confirmation items...");

            const orderConfirmationSection = this.page.locator('div.collapse.show').first();
            await orderConfirmationSection.waitFor({ state: 'visible', timeout: 10000 });

            const isVisible = await orderConfirmationSection.isVisible();
            console.log("Order Confirmation Section is visible:", isVisible);

            if (!isVisible) {
                throw new Error('Order Confirmation Section is not visible.');
            }

            // Array of expected labels
            const expectedLabels = [
                'Payment Confirmation',
                'Bill Me Later Order',
                'Installment Order',
                'Renewal Order',
                'Gift Order',
                'Gift Recipient',
                'Shopping Cart',
                'Default Order Confirmation'
            ];

            const items: string[] = [];

            // Check each expected label within the section
            for (const label of expectedLabels) {
                const labelLocator = orderConfirmationSection.locator(`label.pointer`).filter({ hasText: label });

                // Wait for the specific label to be visible
                await labelLocator.waitFor({ state: 'visible', timeout: 5000 });

                // Check if the filtered locator is not empty
                const labelCount = await labelLocator.count();
                if (labelCount > 0) {
                    const text = await labelLocator.innerText();
                    items.push(text.trim());
                } else {
                    console.warn(`${label} is not visible or not found.`);
                }
            }

            console.log("Retrieved Order Confirmation Items:", items);

            if (items.length === 0) {
                throw new Error('No order confirmation items found.');
            }

            return [...new Set(items)]; // Return unique items
        } catch (error) {
            const errorMessage = (error as Error).message || 'An unknown error occurred';
            console.error('Error retrieving order confirmation items:', errorMessage);
            throw new Error('Failed to get order confirmation items: ' + errorMessage);
        }
    }

    async verifyAutoRenewLinks(expectedLinks: string[]): Promise<void> {
        await this.page.waitForSelector('label.pointer'); // Wait for the elements to load

        for (const link of expectedLinks) {
            console.log(`Checking visibility for: ${link}`);
            const isVisible = await this.page.isVisible(`label.pointer >> text="${link}"`);
            console.log(`Link "${link}" visibility: ${isVisible}`);
            if (!isVisible) {
                throw new Error(`Expected link not found: ${link}`);
            }
        }
    }

    async verifyNotificationLinks(expectedLinks: string[]): Promise<void> {
        await this.page.waitForSelector('label.pointer'); // Wait for the elements to load

        for (const link of expectedLinks) {
            console.log(`Checking visibility for: ${link}`);
            const isVisible = await this.page.isVisible(`label.pointer >> text="${link}"`);
            console.log(`Link "${link}" visibility: ${isVisible}`);
            if (!isVisible) {
                throw new Error(`Expected link not found: ${link}`);
            }
        }
    }

    async verifyDonationLinks(expectedDonationLinks: string[]) {
        // Get all acknowledgment texts from the divs
        const actualDonationLinks = await this.page.locator('div').allTextContents();

        // Check if each expected acknowledgment is present
        expectedDonationLinks.forEach(expectedLink => {
            const found = actualDonationLinks.some(actualLink => actualLink.includes(expectedLink));
            if (!found) {
                throw new Error(`Missing acknowledgement: ${expectedLink}`);
            }
        });
    }

    async verifyOtherToBeDepricatedLinks(expectedOthersToBeDepricatedLinks: string[]) {
        const actualOthersToBeDepricatedlinks = await this.page.locator('div').allTextContents();

        expectedOthersToBeDepricatedLinks.forEach(expectedLink => {
            const found = actualOthersToBeDepricatedlinks.some(actualLink => actualLink.includes(expectedLink));
            if (!found) {
                throw new Error(`Missing OtherToBeDepricatedLinks: ${expectedLink}`);
            }
        });
    }

    async toggleForNoDonationReceipt(): Promise<void> {
        this.page.waitForTimeout(5000);
        await this.toggleLocatorNo.click();
        this.page.waitForTimeout(5000);
    }

    async toggleForYesDonationReceipt(): Promise<void> {
        this.page.waitForTimeout(5000);
        await this.toggleLocatorYes.click();
        this.page.waitForTimeout(5000);
    }

    async updateDonorEmailAddress() {
        // await this.page.locator('div').filter({ hasText: /^Email Address to notify donors with no email:Edit$/ }).getByRole('button').click();
        await this.donorEmailUpdateEditButton.click();
        await this.donorEmailAddress.click();
        await this.donorEmailAddress.clear();
        this.page.waitForTimeout(5000);
        const newEmail = 'DonaorEmailAddress' + faker.number.int({ min: 1, max: 100 }).toString() + '@mailinator.com';
        await this.donorEmailAddress.fill(newEmail);
        await this.donorEmailUpdateSaveButton.click();


    }

async updateMinimumPriceMaximumPrice() {
    try {
        // Wait for the "Edit" button to be visible and click it
        await this.MinimumPriceMaximumPriceEditBUtton.waitFor({ state: 'visible' });
        console.log('Clicking Edit Button...');
        await this.MinimumPriceMaximumPriceEditBUtton.click();

        // Wait for the max price input field to be visible and click it
        await this.maxPriceInputTB.waitFor({ state: 'visible' });
        console.log('Clicking Max Price Input...');
        await this.maxPriceInputTB.click();
        
        // Clear the input field
        console.log('Clearing Max Price Input...');
        await this.maxPriceInputTB.clear();

        // Fill the input with the new price
        console.log('Filling Max Price with 5000...');
        await this.maxPriceInputTB.fill('5000');

        // Wait for the save button to be visible and click it
        await this.donorEmailUpdateSaveButton.waitFor({ state: 'visible' });
        console.log('Clicking Save Button...');
        await this.donorEmailUpdateSaveButton.click();

        console.log('Max Price updated successfully.');

    } catch (error) {
        console.error('Error updating maximum price:', error);
        throw error; // Rethrow the error for further handling
    }
}



}



