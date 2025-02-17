import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class settingsPage {
    page: Page;
    readonly clientsDO: Locator;

    readonly activeClientsText: Locator;
    readonly activeClientsCard: Locator;
    readonly activeClientsTable: Locator;

    readonly inactiveClientsTable: Locator;
    readonly inactiveClientsCard: Locator;
    readonly clientsInfo: Locator;
    readonly courageUSCSDText: Locator;
    readonly clinetIDNo: Locator;

    readonly clientInfo: Locator;
    readonly detailsText: Locator;
    readonly clientName: Locator;
    readonly countryID: Locator;

    readonly clientWebsiteURL: Locator;
    readonly clientsTaxNexus: Locator;
    readonly clientsSalesTaxNexusText: Locator;
    readonly taxNexusRelevantTable: Locator;
    readonly taxNexusb2bConnectCheckbox: Locator;
    readonly taxNexusapplyButton: Locator;


    readonly subscriptionPreferences: Locator;
    readonly subscriptionPreferencesText: Locator;
    readonly manageSubscriptionPreferencesText: Locator;
    readonly showInactiveListBtn: Locator;
    readonly showActiveListBtn: Locator;
    readonly inactiveSubscriptionsSelector: Locator;


    readonly preferenceSetting: Locator;
    readonly partnerAPI: Locator;
    readonly newPartnerKeyOption: Locator;
    readonly partnerAPIPartnerName: Locator;
    readonly partnerAPIPartnerdescription: Locator;
    readonly partnerAPIPartnersource: Locator;
    readonly partnerAPIPartnerdefault_marketing_code: Locator;
    readonly partnerAPIPartnerdefault_bundle_id: Locator;
    readonly partnerAPICreateNewAPIKEYButton: Locator;
    readonly preferenceLinkTexts: Locator;
    readonly issues: Locator;
    readonly issuesDownloadBtn: Locator;
    readonly issuesBatchUploadBtn: Locator;
    readonly issuesTableHeader: Locator;
    readonly issueSearchByNumber: Locator;
    readonly browseFilesButton: Locator;
    readonly continueButton: Locator;
    readonly paymentProvider: Locator;
    readonly marketingCoupon: Locator;
    readonly ppStripeTableColumns: Locator;
    readonly ppStripeViewDetailsLink: Locator;
    readonly ppStripeViewDetailsLinkCloseBtn: Locator;

    readonly courageCXMagazine90Link: Locator;
    readonly courageCXMagazine9999Link: Locator;

    readonly configurablePreferenceLink: Locator;
    readonly courageCXMagazine90LinkTableHeader: Locator;

    readonly addSubscriptionPreferenceBtn: Locator;
    readonly addSubscriptionPreferenceText: Locator;
    readonly generalSetupText: Locator;
    readonly nextBtn: Locator;
    readonly next2Btn: Locator;
    readonly shopPageMYPageSetupText: Locator;
    readonly customerCareSetupText: Locator;
    readonly summaryText: Locator;
    readonly addPreferencesBtn: Locator;
    readonly preferenceUpdateSuccessfulText: Locator;
    readonly editPreferenceBtn: Locator;
    readonly editSubscriptionPreferenceText: Locator;
    readonly updatePreferenceBtn: Locator;
    readonly subscriptionPreferenceFourHighlightClone: Locator;
    readonly editSubscriptionPreferenceToggleBtn: Locator;
    readonly firstSubscriptionPreferenceCodeData: Locator;
    readonly generalTextInSubscriptionPreference: Locator;
    readonly shopPageAndMyPageSetupTextInSubscriptionPreference: Locator;
    readonly customerCareSetupTextInSubscriptionPreference: Locator;
    readonly optInCodeHistoryTextInSubscriptionPreference: Locator;
    readonly backToSubscription: Locator;
    readonly clonePreferenceBtn: Locator;
    readonly crmFieldTF: Locator;
    readonly crmInstanceTF: Locator;
    readonly cloneBtn: Locator;
    readonly clonePreferenceText: Locator;




    constructor(page: Page) {
        this.page = page;

        this.clientsDO = page.getByText("CLIENTS (DO)")
        this.activeClientsText = page.getByText('Active Clients', { exact: true })
        this.activeClientsCard = this.page.locator('div.card-header:has-text("Active Clients")').locator('..').first();
        this.activeClientsTable = this.activeClientsCard.locator('div.card-body > div.table-responsive > table > tbody');

        this.clientsDO = page.getByText("CLIENTS (DO)");
        this.clientsInfo = page.getByText("CLIENT INFO");
        this.inactiveClientsCard = this.page.locator('div.card-header:has-text("Inactive Clients")').locator('..'); // Get the closest card
        this.inactiveClientsTable = this.inactiveClientsCard.locator('div.card-body > div.table-responsive > table > tbody');
        this.courageUSCSDText = page.locator('h4:has-text("9999 - Courage CX USD Active")');
        this.clinetIDNo = page.locator('div').filter({ hasText: /^9999$/ });

        this.clientInfo = page.getByText('CLIENT INFO')
        this.detailsText = page.getByText('Details')
        this.clientName = page.locator('li').filter({ hasText: 'Name Courage CX' })
        this.countryID = page.locator('li').filter({ hasText: 'Country ID US' })

        this.clientWebsiteURL = page.locator('div').filter({ hasText: /^courage.cx$/ });
        this.clientsTaxNexus = page.getByText("TAX NEXUS");
        this.clientsSalesTaxNexusText = page.getByText("Sales Tax Nexus");
        this.taxNexusRelevantTable = page.locator('table');
        this.taxNexusb2bConnectCheckbox = page.getByRole('cell', { name: 'B2B Connect' }).getByRole('checkbox');
        this.taxNexusapplyButton = page.locator('button:has-text("Apply")');
        this.preferenceSetting = page.getByText("PREFERENCE SETTING");
        this.newPartnerKeyOption = page.locator('.btn-primary');
        this.partnerAPI = page.getByText("PARTNER API");
        this.partnerAPIPartnerName = page.locator("//input[@name='partner_name']");
        this.partnerAPIPartnerdescription = page.locator("//input[@name='description']");
        this.partnerAPIPartnersource = page.locator("//input[@name='source']");
        this.partnerAPIPartnerdefault_marketing_code = page.locator("//input[@name='default_marketing_code']");
        this.partnerAPIPartnerdefault_bundle_id = page.locator("//input[@name='default_bundle_id']");
        this.partnerAPICreateNewAPIKEYButton = page.getByText('Create New API KEY');
        this.preferenceLinkTexts = page.locator('.card-header strong');
        this.courageCXMagazine9999Link = page.locator("(//div[@class='pointer card-header'])[1]");
        this.courageCXMagazine90Link = page.locator("(//div[@class='pointer card-header'])[2]");
        this.configurablePreferenceLink = page.locator("(//div[@class='pointer card-header'])[3]")
        this.courageCXMagazine90LinkTableHeader = page.locator('table thead th');
        this.issues = page.getByText('ISSUES');
        this.issuesDownloadBtn = page.getByText('Download');
        this.issuesBatchUploadBtn = page.getByText('Batch Upload (DO)');
        this.issuesTableHeader = page.locator('.rt-thead .rt-th')
        this.issueSearchByNumber = page.locator('div:nth-child(5) > input').first()
        this.browseFilesButton = page.locator('p.uploader-message', { hasText: 'Try dropping some files here, or click to select files to upload.' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.paymentProvider = page.getByText('PAYMENT PROVIDER');
          this.marketingCoupon = page.getByText('MARKETING COUPON');
        this.ppStripeTableColumns = page.locator("table thead tr th");
        this.ppStripeViewDetailsLink = page.locator("//button[normalize-space()='View Detail']");
        this.ppStripeViewDetailsLinkCloseBtn = page.locator("//button[normalize-space()='Close']");
        this.subscriptionPreferences = page.getByText('SUBSCRIPTION PREFERENCES');
        this.subscriptionPreferencesText = page.locator("//h3[text()='Subscription Preferences']");
        this.manageSubscriptionPreferencesText = page.getByText('Manage subscription preferences in difference campaigns');
        this.showInactiveListBtn = page.getByRole("button", { name: 'Show Inactive List' });
        this.showActiveListBtn = page.getByRole("button", { name: 'Show Active List' });
        this.inactiveSubscriptionsSelector = page.locator('.ReactTable .rt-tbody .rt-tr');

        this.preferenceSetting = page.getByText("PREFERENCE SETTING");
        this.preferenceLinkTexts = page.locator('.card-header strong');
        this.addSubscriptionPreferenceBtn = page.getByRole('button', { name: 'Add Subscription Preference' });
        this.addSubscriptionPreferenceText = page.locator("//span[text()='Add Subscription Preference']");
        this.generalSetupText = page.getByText("General Setup");
        this.summaryText = page.getByRole('heading', { name: 'Summary' });
        this.customerCareSetupText = page.locator("//h3[text()='Customer Care Setup']");
        this.shopPageMYPageSetupText = page.getByText("Shop Page and MY. Page Setup");
        this.next2Btn = page.getByRole('dialog').getByRole('button', { name: 'Next' })
        // this.nextBtn = page.locator("(//button[text()='Next'])[2]")
        this.nextBtn = page.getByRole('dialog').getByRole('button', { name: 'Next' })
        this.addPreferencesBtn = page.getByRole('button', { name: 'Add Preferences' })
        this.editPreferenceBtn = page.getByRole('button', { name: 'Edit Preference' })
        this.updatePreferenceBtn = page.getByRole('button', { name: 'Update Preference' })
        this.preferenceUpdateSuccessfulText = page.getByRole('heading', { name: 'Preference update successful' })

        this.editSubscriptionPreferenceText = page.getByText("Edit Subscription Preference");
        // this.subscriptionPreferenceFourHighlightClone = page.locator('#opt2946')
        this.subscriptionPreferenceFourHighlightClone = page.getByRole('link', { name: '4_highlight_Clone' })
        this.editSubscriptionPreferenceToggleBtn = page.getByRole('dialog').locator('label span').nth(1)
        this.firstSubscriptionPreferenceCodeData = page.locator("(//div[@class='rt-tr-group'])[1]/descendant::a[1]")
        this.generalTextInSubscriptionPreference = page.getByText('GENERAL')
        this.shopPageAndMyPageSetupTextInSubscriptionPreference = page.getByText('SHOP PAGE AND MY. PAGE SETUP')
        this.customerCareSetupTextInSubscriptionPreference = page.getByText('CUSTOMER CARE SETUP')
        this.optInCodeHistoryTextInSubscriptionPreference = page.getByText('OPT-IN CODE HISTORY')
        this.backToSubscription = page.getByRole('link', { name: '< Back to Subscription' })
        this.clonePreferenceBtn = page.getByRole('button', { name: 'Clone Preference' })
        this.crmFieldTF = page.locator('input[name="crm_field"]')
        this.crmInstanceTF = page.locator('input[name="crm_instance"]')
        this.cloneBtn = page.getByRole('button', { name: 'Clone', exact: true })
        this.clonePreferenceText = page.getByText("Clone Preference");
    }

    async clickIssuesTab() {
        try {
            await expect(this.issues).toBeVisible({ timeout: 30000 });
            await this.issues.click();
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }

    async clickPaymentProviderTab() {
        try {
            await expect(this.paymentProvider).toBeVisible({ timeout: 30000 });
            await this.paymentProvider.click();
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }


      async clickMarketingCouponTab() {
        try {
            await expect(this.marketingCoupon).toBeVisible({ timeout: 30000 });
            await this.marketingCoupon.click();
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }
    // Helper function to verify the alt text of an image
    async verifyImageAltText(imageSelector: string, expectedAltText: string) {
        try {
            const imageElement = await this.page.locator(imageSelector); // Access the page and locate the image
            const altText = await imageElement.getAttribute('alt'); // Get the alt text of the image
            expect(altText).toBe(expectedAltText); // Verify if the alt text matches the expected value
            console.log(`Verified alt text: ${altText}`);
        } catch (error) {
            console.error('Error verifying image alt text:', error);
        }
    }


    async getDownloadButtonText() {
        await expect(this.issuesDownloadBtn).toBeVisible({ timeout: 60000 });
        await this.issuesBatchUploadBtn.scrollIntoViewIfNeeded();
        return await this.issuesDownloadBtn.textContent();
    }

    async clickIssuesDownloadBtn() {
        try {
            await expect(this.issuesDownloadBtn).toBeVisible({ timeout: 60000 });
            await this.issuesBatchUploadBtn.scrollIntoViewIfNeeded();
            await this.issuesDownloadBtn.click();

        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }


    async clickIssuesBatchUploadBtn() {
        try {
            await expect(this.issuesBatchUploadBtn).toBeVisible({ timeout: 60000 });
            await this.issuesBatchUploadBtn.click();

        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }


    async clickBrowseFilesButton() {
        await expect(this.browseFilesButton).toBeVisible({ timeout: 60000 });
        await this.browseFilesButton.scrollIntoViewIfNeeded();
        await this.browseFilesButton.click();
    }


    async chooseFileToUpload() {

        await this.page.waitForTimeout(5000)
        await this.page.setInputFiles('input[type="file"]', 'Upload/Excel files/Issues.csv');
        await this.page.waitForTimeout(5000)
    }

    async getIssuesTableHeaders() {
        // Get all header texts
        const headerTexts = await this.issuesTableHeader.allTextContents();

        // Filter out any empty strings or columns that should be ignored
        const filteredHeaderTexts = headerTexts
            .map(text => text.trim())  // Trim any unnecessary spaces
            .filter(text => text !== '' && !['Timestamp', 'User', 'Query', 'Params'].includes(text));  // Remove unwanted columns

        return filteredHeaderTexts;
    }

    async getPPStripeTableColumns(): Promise<string[]> {
        try {
            // Wait for the first table in .card-body to be loaded
            await this.page.waitForSelector('.card-body table:first-of-type');

            // Locator for the first table header columns
            const firstTableLocator = this.page.locator('.card-body table:first-of-type thead tr th');

            // Extract the header texts
            const headerTexts: string[] = await firstTableLocator.allInnerTexts();
            console.log('First table header columns:', headerTexts);

            // Define the expected headers
            const expectedHeaders = [
                'Account ID',
                'Business Name',
                'Shortened descriptor',
                'Payments Enabled',
                'Payouts Enabled',
                'Country',
                'Default Currency',
                'Enable Apple Pay',
                'Status'
            ];

            // Filter the headers to match the expected ones
            const matchedHeaders = headerTexts.filter(header => expectedHeaders.includes(header));
            console.log('Matched headers:', matchedHeaders);

            // Return matched headers
            return matchedHeaders;
        } catch (error) {
            console.error('Error retrieving table headers:', error);
            return [];
        }
    }

     async getPPStripeTableRowValues(): Promise<string[][]> {
        try {
            // Wait for the first Stripe table to be visible on the page
            const tableSelector = '#app > div > main > div.content-holder.container-fluid > div > div.card-body > div > div:nth-child(2) > div.card-body > div > div > table:first-of-type > tbody';
            await this.page.waitForSelector(tableSelector, { timeout: 50000 });

            // Get all rows inside the first table
            const rows = await this.page.locator(`${tableSelector} > tr`);

            // Initialize an array to store row data
            const rowData: string[][] = [];

            // Iterate through each row and extract the cells (td elements)
            const rowCount = await rows.count();
            console.log(`Number of rows found: ${rowCount}`);

            for (let i = 0; i < rowCount; i++) {
                const row = rows.nth(i);
                
                // Extract all <td> elements in the row
                const cells = await row.locator('td').allInnerTexts();

                // Handle button (View Detail) if present in the row
                const buttonText = await row.locator('td button').innerText();

                // Replace the button text in the correct cell if necessary
                if (buttonText) {
                    // Let's say it's the 8th column (index 7)
                    cells[7] = buttonText;
                }

                // Clean cell text by trimming spaces and pushing it into rowData
                const cleanCells = cells.map(cell => cell.trim());

                // Add row to rowData array
                rowData.push(cleanCells);
            }

            // Log the extracted row data for debugging
            console.log(`Extracted row data: ${JSON.stringify(rowData)}`);

            return rowData;

        } catch (error) {
            // Log any errors encountered during extraction
            console.error('Error retrieving Stripe table row data:', error);
            return [];
        }
    }

  async getCheckIssuingTableRows() {
  const rows = await this.page.locator('div.card:nth-of-type(2) table tbody tr');
  return rows;
}
  // Method to get the text content of a specific row from the second table
  async getCheckIssuingTableRowData(rowIndex: number) {
  const row = await this.page.locator(`div.card:nth-of-type(2) table tbody tr:nth-child(${rowIndex})`);
  const columns = await row.locator('td').allTextContents(); // Get individual column text
  return columns; // This will return an array of column values
}

async verifyLogHtml() {
const html = await this.page.content(); // Retrieves the full HTML content of the page
    console.log(html);
}
    async verifyPPStripeViewDetailsLink() {
        await expect(this.ppStripeViewDetailsLink).toBeVisible({ timeout: 6000 });
        await this.ppStripeViewDetailsLink.click();
         await this.page.waitForTimeout(5000);
        await expect(this.ppStripeViewDetailsLinkCloseBtn).toBeVisible({ timeout: 6000 });
        await this.ppStripeViewDetailsLinkCloseBtn.click();

    }

    async getPPCheckIssuingTableColumns(): Promise<string[]> {
        // Wait for the table to be visible on the page
        await this.page.waitForSelector('table', { timeout: 50000 });

        // Get all header cells (th elements) inside the table header (thead)
        const headers = await this.page.locator('//*[@id="app"]/div/main/div[2]/div/div[2]/div/div[2]/div[2]/div/div/table/thead/tr/th').allInnerTexts();

        // Clean headers by trimming any extra spaces
        const cleanHeaders = headers.map(header => header.trim());

        // Log the headers for debugging
        logger.info(`Found headers: ${cleanHeaders}`);

        // Define the expected columns for the CheckIssuing table
        const relevantHeaders = [
            'Account ID',
            'Brand Name',
            'Bank Name',
            'Bank Account Type',
            'Bank Account Number',
            'Status',
        ];

        // Return the relevant headers that are found in the table
        return relevantHeaders.filter(header => cleanHeaders.includes(header));
    }
    async getCombinedPPTableData(): Promise<string[][]> {
        try {
            // Wait for the first table (Stripe table) to be visible and fully loaded
            await this.page.waitForSelector('.card-body table:first-of-type tbody tr', { timeout: 5000 });

            const stripeRows = await this.page.locator('.card-body table:first-of-type tbody tr');
            const stripeData: string[][] = [];
            const stripeRowCount = await stripeRows.count();

            console.log('Stripe Row Count:', stripeRowCount); // Debugging row count
            if (stripeRowCount > 0) {
                // Loop through each row of the Stripe table and extract the cells
                for (let i = 0; i < stripeRowCount; i++) {
                    const row = stripeRows.nth(i);
                    const cells = await row.locator('td').allInnerTexts();
                    console.log(`Stripe Row ${i + 1}:`, cells); // Debugging individual row content
                    stripeData.push(cells);
                }
            } else {
                console.log('No rows found in Stripe table.');
            }

            // Wait for the second table (CheckIssuing table) to be visible and fully loaded
            await this.page.waitForSelector('.card-body table:nth-of-type(2) tbody tr', { timeout: 5000 });

            const checkIssuingRows = await this.page.locator('.card-body table:nth-of-type(2) tbody tr');
            const checkIssuingData: string[][] = [];
            const checkIssuingRowCount = await checkIssuingRows.count();

            console.log('CheckIssuing Row Count:', checkIssuingRowCount); // Debugging row count
            if (checkIssuingRowCount > 0) {
                // Loop through each row of the CheckIssuing table and extract the cells
                for (let i = 0; i < checkIssuingRowCount; i++) {
                    const row = checkIssuingRows.nth(i);
                    const cells = await row.locator('td').allInnerTexts();
                    console.log(`CheckIssuing Row ${i + 1}:`, cells); // Debugging individual row content
                    checkIssuingData.push(cells);
                }
            } else {
                console.log('No rows found in CheckIssuing table.');
            }

            // Combine data from both tables into one array
            const combinedData = [...stripeData, ...checkIssuingData];
            console.log('Combined Payment Provider table data:', combinedData); // Debugging combined data

            // Return the combined data
            return combinedData;
        } catch (error) {
            console.error('Error retrieving combined table data:', error);
            return [];
        }
    }
    async searchIssueByNumber() {
        try {
            await expect(this.issueSearchByNumber).toBeVisible({ timeout: 30000 });
            await this.issueSearchByNumber.click();
            await this.issueSearchByNumber.fill('10');
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }

    async updateIssueByNumber() {
        try {
            await this.page.getByRole('row', { name: '40345 9999 90 Issues 10 May' }).getByRole('button').click();
            await this.page.getByRole('dialog').locator('div').filter({ hasText: /^Issue Closed$/ }).getByRole('textbox').click();
            await this.page.getByRole('dialog').locator('div').filter({ hasText: /^Issue Closed$/ }).getByRole('textbox').clear();
            await this.page.getByRole('dialog').locator('div').filter({ hasText: /^Issue Closed$/ }).getByRole('textbox').fill('1');
            await this.page.getByRole('dialog').locator('div').filter({ hasText: /^Supplementary Copies$/ }).getByRole('textbox').click();
            await this.page.getByRole('dialog').locator('div').filter({ hasText: /^Supplementary Copies$/ }).getByRole('textbox').clear();
            await this.page.getByRole('dialog').locator('div').filter({ hasText: /^Supplementary Copies$/ }).getByRole('textbox').fill('2');
            await this.page.getByRole('button', { name: 'Update' }).click();
            await this.page.waitForTimeout(20000);

        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }



    async clickcourageCXMagazine90Link() {
        try {
            await expect(this.courageCXMagazine90Link).toBeVisible({ timeout: 30000 });
            await this.courageCXMagazine90Link.click();
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }

    async clickcourageCXMagazine9999Link() {
        try {
            await expect(this.courageCXMagazine9999Link).toBeVisible({ timeout: 30000 });
            await this.courageCXMagazine9999Link.click();
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }


    async clickConfigurablePreferenceLink() {
        try {
            await expect(this.configurablePreferenceLink).toBeVisible({ timeout: 30000 });
            await this.configurablePreferenceLink.click();
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }



    async clickClientsDO() {


        try {
            await expect(this.clientsDO).toBeVisible({ timeout: 30000 });
            await this.clientsDO.click();
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }


    async validateActiveClientsText() {
        await expect(this.activeClientsText).toBeVisible({ timeout: 60000 });
        await this.activeClientsText.scrollIntoViewIfNeeded();
        let text = await this.activeClientsText.textContent();
        return text;
    }



    async checkForActiveClients(): Promise<void> {
        // Wait for the active clients card to be visible
        await this.activeClientsCard.waitFor({ state: 'visible' });
    }

    // Check if there are active clients listed
    async hasActiveClients(): Promise<boolean> {
        const rowCount = await this.activeClientsTable.locator('tr').count();
        console.log(`Active Clients Row Count: ${rowCount}`);
        return rowCount > 0;
    }

    async verifyActiveClientsTableColumns(expectedHeaders: string[]): Promise<void> {
        const headers = await this.activeClientsCard.locator('thead th').allInnerTexts();
        if (headers.length !== expectedHeaders.length) {
            throw new Error(`Column count mismatch. Expected ${expectedHeaders.length}, but found ${headers.length}.`);
        }
    }


    async clickClientsInfo() {
        try {
            await expect(this.clientsInfo).toBeVisible({ timeout: 30000 });
            await this.clientsInfo.click();
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }
    async checkForInactiveClients(): Promise<void> {
        // Wait for the inactive clients card to be visible
        await this.inactiveClientsCard.waitFor({ state: 'visible' });
    }

    // Check if there are inactive clients listed
    async hasInactiveClients(): Promise<boolean> {
        const rowCount = await this.inactiveClientsTable.locator('tr').count();
        console.log(`Inactive Clients Row Count: ${rowCount}`);
        return rowCount > 0;
    }

    async verifyInactiveClientsTableColumns(expectedHeaders: string[]): Promise<void> {
        const headers = await this.inactiveClientsCard.locator('thead th').allInnerTexts();

        if (headers.length !== expectedHeaders.length) {
            throw new Error(`Column count mismatch. Expected ${expectedHeaders.length}, but found ${headers.length}.`);
        }


        for (let i = 0; i < headers.length; i++) {
            if (headers[i] !== expectedHeaders[i]) {
                throw new Error(`Header mismatch at index ${i}. Expected: "${expectedHeaders[i]}", Found: "${headers[i]}"`);
            }
        }
        console.log('All headers verified successfully.');
    }




    async validateClinetsInfoTitleText() {
        await this.courageUSCSDText.waitFor({ state: 'visible' }); // Wait for the element to be visible
        const courageText = await this.courageUSCSDText.innerText();
        return courageText;
    }

    async validateClientsID() {
        await this.clinetIDNo.waitFor({ state: 'visible' }); // Wait for the element to be visible
        const clientIDNumber = await this.clinetIDNo.innerText();
        return clientIDNumber;
    }


    async clickClientInfo() {
        await expect(this.clientInfo).toBeVisible({ timeout: 60000 });
        await this.clientInfo.scrollIntoViewIfNeeded();
        await this.clientInfo.click();
    }

    async validateDetailsText() {
        await expect(this.detailsText).toBeVisible({ timeout: 60000 });
        await this.detailsText.scrollIntoViewIfNeeded();
        let text = await this.detailsText.textContent();
        return text;
    }

    async validateClientName() {
        await expect(this.clientName).toBeVisible({ timeout: 60000 });
        await this.clientName.scrollIntoViewIfNeeded();
        let text = await this.clientName.textContent();
        return text;
    }

    async validateCountryID() {
        await expect(this.countryID).toBeVisible({ timeout: 60000 });
        await this.countryID.scrollIntoViewIfNeeded();
        let text = await this.countryID.textContent();
        return text;
    }

    async validateClientsWebsiteURL() {
        await this.clientWebsiteURL.waitFor({ state: 'visible' });
        const websiteURL = await this.clientWebsiteURL.innerText();
        return websiteURL;


    }

    async clickClientsTaxNexus() {
        try {
            await expect(this.clientsTaxNexus).toBeVisible({ timeout: 30000 });
            await this.clientsTaxNexus.click();
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }

    async validateClientsSalesTaxNexusText() {
        await this.clientsSalesTaxNexusText.waitFor({ state: 'visible' });
        const TaxNexusText = await this.clientsSalesTaxNexusText.textContent();
        return TaxNexusText;


    }

    async getSalesTaxProductHeadings(): Promise<string[]> {
        // Get relevant table headings
        const headers = await this.taxNexusRelevantTable.locator('th').allInnerTexts();
        const relevantHeaders = [
            'Default - Courage CX',
            'Darwin Box',
            'Graphics Pro Expo',
            'Courage CX Magazine',
            'Courage CX Membership',
            'Courage Box',
            'B2B Connect',
        ];
        logger.info(`Found headers: ${headers}`);
        return relevantHeaders.filter(header => headers.includes(header));
    }


    async countSalesTaxProductCheckboxes(): Promise<number> {
        // Count relevant checkboxes
        const checkboxCount = await this.taxNexusRelevantTable.locator('input[type="checkbox"]:visible').count();
        logger.info(`Checkbox count: ${checkboxCount}`);
        return checkboxCount;
    }

    async verifySalesTaxProductCheckboxesCount(): Promise<void> {
        const relevantCheckboxCount = await this.countSalesTaxProductCheckboxes();
        logger.info(`Number of relevant checkboxes: ${relevantCheckboxCount}`);

    }


    async getSalesTaxProductCheckedCheckboxes(): Promise<{ header: string; checked: boolean }[]> {
        const relevantHeaders = await this.getSalesTaxProductHeadings();
        const checkedCheckboxes: { header: string; checked: boolean }[] = [];

        for (const header of relevantHeaders) {
            const checkbox = this.taxNexusRelevantTable.locator(`th:has-text("${header}")`).locator('input[type="checkbox"]');
            const isChecked = await checkbox.isChecked();
            checkedCheckboxes.push({ header, checked: isChecked });
        }

        logger.info(`Checked checkboxes: ${JSON.stringify(checkedCheckboxes)}`);
        return checkedCheckboxes;
    }


    async verifySalesTaxProductCheckboxStates(expectedStates: { header: string; checked: boolean }[]): Promise<void> {
        const actualStates = await this.getSalesTaxProductCheckedCheckboxes();

        for (const expected of expectedStates) {
            const actual = actualStates.find(a => a.header === expected.header);
            if (!actual) {
                throw new Error(`Header "${expected.header}" not found in actual states.`);
            }
            expect(actual.checked).toBe(expected.checked);
        }

        logger.info('All checkbox states verified successfully.');
    }

    async checkTaxNexusB2BConnectCheckbox() {
        await this.taxNexusb2bConnectCheckbox.waitFor({ state: 'visible' });
        await this.taxNexusb2bConnectCheckbox.click();
        this.page.waitForTimeout(10000);
        await this.page.reload();
        logger.info('B2B Connect checkbox checked.');


    }


    async uncheckTaxNexusB2BConnectCheckbox() {
        await this.taxNexusb2bConnectCheckbox.waitFor({ state: 'visible' });
        await this.taxNexusb2bConnectCheckbox.click();
        this.page.waitForTimeout(10000);
        logger.info('B2B Connect checkbox checked.');
    }

    async clickTaxNexusApplyButton() {
        await this.taxNexusapplyButton.waitFor({ state: 'visible' });

        const isDisabled = await this.taxNexusapplyButton.evaluate((button) => {
            // Type assertion to HTMLButtonElement
            const htmlButton = button as HTMLButtonElement;
            return htmlButton.disabled;
        });

        if (isDisabled) {
            logger.warn('Apply button is disabled, cannot click.');
            throw new Error('Apply button is disabled.');
        }

        await this.taxNexusapplyButton.click();
        logger.info('Apply button clicked.');
    }



    async clickPreferenceSetting() {
        try {
            await expect(this.preferenceSetting).toBeVisible({ timeout: 30000 });
            await this.preferenceSetting.click();
            await this.page.waitForTimeout(10000);
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }

    async clickPartnerAPI() {
        try {
            await expect(this.partnerAPI).toBeVisible({ timeout: 30000 });
            await this.partnerAPI.click();
            await this.page.waitForTimeout(10000);
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }

    async clickNewPartnerKeyOption() {
        try {
            await expect(this.newPartnerKeyOption).toBeVisible({ timeout: 30000 });
            await this.newPartnerKeyOption.click();
            await this.page.waitForTimeout(10000);
        } catch (error) {
            logger.info("Element not found or not visible:", error);
            console.error("Element not found or not visible:", error);
        }
    }

    async getPreferenceLinkTexts() {
        const preferenceHeadersLocator = this.preferenceLinkTexts;
        const count = await preferenceHeadersLocator.count();
        if (count === 0) {
            console.warn("No preference headers found.");
            return [];
        }

        const texts = await Promise.all(
            [...Array(count)].map(async (_, index) => {
                try {
                    return (await preferenceHeadersLocator.nth(index).innerText()).trim();
                } catch (error) {
                    console.error(`Error fetching text for index ${index}:`, error);
                    return ''; // Handle error as needed
                }
            })
        );

        return texts;
    }






    // Method to verify a specific table header text






    // Method to verify a specific table header text
    async verifycourageCXMagazine90LinkTableHeader(index: number, expectedText: string): Promise<boolean> {
        const headerText = await this.courageCXMagazine90LinkTableHeader.nth(index).textContent();
        return headerText?.trim() === expectedText;
    }


    async getcourageCXMagazine90LinkTableHeader() {
        const headers = await this.page.$$eval('table.table thead th', thElements =>
            thElements.map(th => th.textContent?.trim() || '') // Use optional chaining and fallback to empty string
        );
        return headers; // Returns the headers as an array of strings
    }

    async getcourageCXMagazine9999LinkTableHeader() {
        const headers = await this.page.$$eval('table.table thead th', thElements =>
            thElements.map(th => th.textContent?.trim() || '') // Use optional chaining and fallback to empty string
        );
        return headers; // Returns the headers as an array of strings
    }


    async createNewAPIKEY() {
        try {

            await this.partnerAPIPartnerName.fill('TestPartnerName' + faker.number.int({ min: 1, max: 1000 }).toString());
            await this.page.waitForTimeout(2000);
            await this.partnerAPIPartnerdescription.fill('TestDescription' + faker.number.int({ min: 1, max: 1000 }).toString());
            await this.page.waitForTimeout(2000);
            await this.partnerAPIPartnersource.fill('TestPartnersource' + faker.number.int({ min: 1, max: 1000 }).toString());
            await this.page.waitForTimeout(2000);
            await this.partnerAPIPartnerdefault_marketing_code.fill('TestPartnerdefault_marketing_code' + faker.number.int({ min: 1, max: 1000 }).toString());
            await this.page.waitForTimeout(2000);
            await this.partnerAPIPartnerdefault_bundle_id.fill('TestpartnerAPIPartnerdefault_bundle_id' + faker.number.int({ min: 1, max: 1000 }).toString());
            await this.page.waitForTimeout(2000);
            await this.partnerAPICreateNewAPIKEYButton.click();


        } catch (error) {
            logger.info('Element not found or not visible: ', error);
            console.info('Element not found or not visible: ', error);
        }
    }

    async validateCreateNewAPIKEYSuccessMsg() {
        try {
            const successmsg = await this.page.getByRole('heading', { name: 'Successfully updated' }).textContent();
            return successmsg;

        } catch (error) {
            logger.info('Element not found or not visible: ', error);
            console.info('Element not found or not visible: ', error);
        }
    }

    //   // Method to verify a specific table header text
    //   async verifycourageCXMagazine90LinkTableHeader(index: number, expectedText: string): Promise<boolean> {
    //     const headerText = await this.courageCXMagazine90LinkTableHeader.nth(index).textContent();
    //     return headerText?.trim() === expectedText;
    //   }


    //   // Method to verify a specific table header text
    //   async verifycourageCXMagazine90LinkTableHeader(index: number, expectedText: string): Promise<boolean> {
    //     const headerText = await this.courageCXMagazine90LinkTableHeader.nth(index).textContent();
    //     return headerText?.trim() === expectedText;
    //   }


    async clickSubscriptionPreferences() {
        await expect(this.subscriptionPreferences).toBeVisible({ timeout: 60000 });
        await this.subscriptionPreferences.scrollIntoViewIfNeeded();
        await this.subscriptionPreferences.click();
    }

    async validateSubscriptionPreferencesText() {
        await expect(this.subscriptionPreferencesText).toBeVisible({ timeout: 60000 });
        await this.subscriptionPreferencesText.scrollIntoViewIfNeeded();
        const text = await this.subscriptionPreferencesText.textContent();
        return text;
    }

    async validateManageSubscriptionPreferencesText() {
        await expect(this.manageSubscriptionPreferencesText).toBeVisible({ timeout: 60000 });
        await this.manageSubscriptionPreferencesText.scrollIntoViewIfNeeded();
        const text = await this.manageSubscriptionPreferencesText.textContent();
        return text;
    }

    async clickShowInactiveListBtn() {
        await expect(this.showInactiveListBtn).toBeVisible({ timeout: 60000 });
        await this.showInactiveListBtn.scrollIntoViewIfNeeded();
        await this.showInactiveListBtn.click();
    }

    async validateShowActiveListBtn() {
        await expect(this.showActiveListBtn).toBeVisible({ timeout: 60000 });
        await this.showActiveListBtn.scrollIntoViewIfNeeded();
        let text = await this.showActiveListBtn.textContent();
        return text;
    }

    async verifyHeadings(expectedHeadings: string[]) {
        // Get all acknowledgment texts from the divs
        const actualHeadings = await this.page.locator('.rt-thead .rt-tr div > span').allTextContents();

        // Check if each expected acknowledgment is present
        expectedHeadings.forEach(expected => {
            const found = actualHeadings.some(actual => actual.includes(expected));
            if (!found) {
                throw new Error(`Missing acknowledgement: ${expected}`);
            }
        });
    }

    async getInactiveRows() {
        // Selector for rows containing "inactive" status 
        const rows = await this.page.$$('div.rt-tr'); const inactiveRowsData: string[] = [];
        for (const row of rows) {
            const statusCell = await row.$('div:has-text("inactive")');
            if (statusCell) {
                const cells = await row.$$('div');
                const rowData = await Promise.all(cells.map(cell => cell.innerText()));
                inactiveRowsData.push(rowData.join(', '));
                // Join cells data as a single string
            }
        }
        return inactiveRowsData;
    }

    async clickNextBtn() {
        await this.page.waitForLoadState();
        await this.nextBtn.waitFor({ state: 'attached', timeout: 60000 })
        await expect(this.nextBtn).toBeVisible({ timeout: 60000 });
        await expect(this.nextBtn).toBeEnabled({ timeout: 80000 })
        await this.nextBtn.scrollIntoViewIfNeeded();
        await this.nextBtn.click({ force: true });
        // await this.page.waitForTimeout( 10000)
    }
    async clickNext2Btn() {
        await this.page.waitForLoadState();
        await this.next2Btn.waitFor({ state: 'attached', timeout: 60000 })
        await expect(this.next2Btn).toBeVisible({ timeout: 60000 });
        await expect(this.next2Btn).toBeEnabled({ timeout: 50000 })
        await this.next2Btn.scrollIntoViewIfNeeded();
        await this.next2Btn.click();
        await this.page.waitForTimeout(10000)
    }

    async validateRequiredTexts() {
        await expect(this.page.locator("(//small[text()='Required'])[1]")).toBeVisible({ timeout: 60000 });
        await expect(this.page.locator("(//small[text()='Required'])[2]")).toBeVisible({ timeout: 60000 });
        await this.page.locator("(//small[text()='Required'])[1]").scrollIntoViewIfNeeded();
        await this.page.locator("(//small[text()='Required'])[2]").scrollIntoViewIfNeeded();

    }

    async fillGeneralSetupForm() {
        await this.page.locator('select[name="fulfillment_action"]').selectOption('30=survey data');
        //   await page.goto('https://dev.darwin.cx/#/admin/setting?activeTab=subscription&form=1');
        await this.page.getByPlaceholder('Required - Do not use spaces').click();
        await this.page.getByPlaceholder('Required - Do not use spaces').fill('test' + faker.number.int());
    }

    async fillShopPageMYPageSetupForm() {
        await this.page.getByPlaceholder('Example: Do you want to').click();
        await this.page.getByPlaceholder('Example: Do you want to').fill('test');
        await this.page.waitForTimeout(5000);
        await this.page.getByRole('combobox').selectOption('radio');
        await this.page.getByPlaceholder('Label...').click();
        await this.page.getByPlaceholder('Label...').fill('test');
        await this.page.getByPlaceholder('Example: Do you want to').click();
        await this.page.getByPlaceholder('Example: Do you want to').fill('yes');
    }

    async validateCustomerCareSetupText() {
        await this.customerCareSetupText.waitFor({ state: 'visible' });
        await expect(this.customerCareSetupText).toBeVisible({ timeout: 60000 });
        await this.customerCareSetupText.scrollIntoViewIfNeeded();
        let text = await this.customerCareSetupText.textContent();
        return text;
    }


    async validateSummaryText() {
        await expect(this.summaryText).toBeVisible({ timeout: 60000 });
        await this.summaryText.scrollIntoViewIfNeeded();
        let text = await this.summaryText.textContent();
        return text;
    }

    async clickAddPreferencesBtn() {
        // await this.page.waitForTimeout( 10000)
        await this.addPreferencesBtn.waitFor({ state: 'attached', timeout: 60000 })
        await expect(this.addPreferencesBtn).toBeVisible({ timeout: 60000 });
        await expect(this.addPreferencesBtn).toBeEnabled({ timeout: 50000 })
        await this.addPreferencesBtn.scrollIntoViewIfNeeded();
        await this.addPreferencesBtn.click()
        //  await this.page.waitForTimeout( 10000)
    }

    async validatePreferenceUpdateSuccessfulText() {
        await expect(this.preferenceUpdateSuccessfulText).toBeVisible({ timeout: 60000 });
        await this.preferenceUpdateSuccessfulText.scrollIntoViewIfNeeded();
        let text = await this.preferenceUpdateSuccessfulText.textContent();
        return text;
    }

    async clickAddSubscriptionPreferenceBtn() {
        await expect(this.addSubscriptionPreferenceBtn).toBeVisible({ timeout: 60000 });
        await this.addSubscriptionPreferenceBtn.scrollIntoViewIfNeeded();
        await this.addSubscriptionPreferenceBtn.click();
    }

    async validateAddSubscriptionPreferenceText() {
        await expect(this.addSubscriptionPreferenceText).toBeVisible({ timeout: 60000 });
        await this.addSubscriptionPreferenceText.scrollIntoViewIfNeeded();
        let text = await this.addSubscriptionPreferenceText.textContent();
        return text;
    }

    async validateGeneralSetupText() {
        await expect(this.generalSetupText).toBeVisible({ timeout: 60000 });
        await this.generalSetupText.scrollIntoViewIfNeeded();
        let text = await this.generalSetupText.textContent();
        return text;
    }

    async validateShopPageMYPageSetupText() {
        await expect(this.shopPageMYPageSetupText).toBeVisible({ timeout: 60000 });
        await this.shopPageMYPageSetupText.scrollIntoViewIfNeeded();
        let text = await this.shopPageMYPageSetupText.textContent();
        return text;
    }

    async clickEditPreferenceBtn() {
        await expect(this.editPreferenceBtn).toBeVisible({ timeout: 60000 });
        await this.editPreferenceBtn.scrollIntoViewIfNeeded();
        await this.editPreferenceBtn.click();
    }

    async clickUpdatePreferenceBtn() {
        await expect(this.updatePreferenceBtn).toBeVisible({ timeout: 60000 });
        await this.updatePreferenceBtn.scrollIntoViewIfNeeded();
        await this.updatePreferenceBtn.click();
    }

    async validateEditSubscriptionPreferenceText() {
        await expect(this.editSubscriptionPreferenceText).toBeVisible({ timeout: 60000 });
        await this.editSubscriptionPreferenceText.scrollIntoViewIfNeeded();
        let text = await this.editSubscriptionPreferenceText.textContent();
        return text;
    }

    async validateClonePreferenceText() {
        await expect(this.clonePreferenceText).toBeVisible({ timeout: 80000 });
        await this.clonePreferenceText.scrollIntoViewIfNeeded();
        let text = await this.clonePreferenceText.textContent();
        return text;
    }

    async clickShowActiveListBtn() {
        await expect(this.showActiveListBtn).toBeVisible({ timeout: 60000 });
        await this.showActiveListBtn.scrollIntoViewIfNeeded();
        await this.showActiveListBtn.click();
    }

    async clickSubscriptionPreferenceFourHighlightClone() {
        await expect(this.subscriptionPreferenceFourHighlightClone).toBeVisible({ timeout: 60000 });
        await this.subscriptionPreferenceFourHighlightClone.scrollIntoViewIfNeeded();
        await this.subscriptionPreferenceFourHighlightClone.click();
    }

    async clickEditSubscriptionPreferenceToggleBtn() {
        await expect(this.editSubscriptionPreferenceToggleBtn).toBeVisible({ timeout: 60000 });
        await this.editSubscriptionPreferenceToggleBtn.scrollIntoViewIfNeeded();
        await this.editSubscriptionPreferenceToggleBtn.click();
    }

    async clickFirstSubscriptionPreferenceCodeData() {
        await expect(this.firstSubscriptionPreferenceCodeData).toBeVisible({ timeout: 60000 });
        await this.firstSubscriptionPreferenceCodeData.scrollIntoViewIfNeeded();
        await this.firstSubscriptionPreferenceCodeData.click();
    }

    async clickGeneralTextInSubscriptionPreference() {
        await expect(this.generalTextInSubscriptionPreference).toBeVisible({ timeout: 60000 });
        await this.generalTextInSubscriptionPreference.scrollIntoViewIfNeeded();
        await this.generalTextInSubscriptionPreference.click();
    }

    async clickShopPageAndMyPageSetupTextInSubscriptionPreference() {
        await expect(this.shopPageAndMyPageSetupTextInSubscriptionPreference).toBeVisible({ timeout: 60000 });
        await this.shopPageAndMyPageSetupTextInSubscriptionPreference.scrollIntoViewIfNeeded();
        await this.shopPageAndMyPageSetupTextInSubscriptionPreference.click();
    }

    async clickCustomerCareSetupTextInSubscriptionPreference() {
        await expect(this.customerCareSetupTextInSubscriptionPreference).toBeVisible({ timeout: 60000 });
        await this.customerCareSetupTextInSubscriptionPreference.scrollIntoViewIfNeeded();
        await this.customerCareSetupTextInSubscriptionPreference.click();
    }

    async clickOptInCodeHistoryTextInSubscriptionPreference() {
        await expect(this.optInCodeHistoryTextInSubscriptionPreference).toBeVisible({ timeout: 60000 });
        await this.optInCodeHistoryTextInSubscriptionPreference.scrollIntoViewIfNeeded();
        await this.optInCodeHistoryTextInSubscriptionPreference.click();
    }

    async clickBackToSubscription() {
        await expect(this.backToSubscription).toBeVisible({ timeout: 60000 });
        await this.backToSubscription.scrollIntoViewIfNeeded();
        await this.backToSubscription.click();

    }



    async getGeneralLinkHeaders(): Promise<string[]> {
        // Assuming the "General" section has a unique class or ID, adjust the selector accordingly
        const headers = await this.page.$$eval("//span[text()='GENERAL']/parent::div/parent::div/following-sibling::div[1]/descendant::div/div/span", thElements =>
            thElements
                .filter(th => (th as HTMLElement).offsetParent !== null) // Ensure only visible elements are included
                .map(th => th.textContent?.trim() || '') // Retrieve and trim text content
        );
        return headers; // Returns the headers as an array of strings
    }

    async getShopPageAndMyPageSetupLinkHeaders(): Promise<string[]> {
        // Assuming the "General" section has a unique class or ID, adjust the selector accordingly
        const headers = await this.page.$$eval("//span[text()='SHOP PAGE AND MY. PAGE SETUP']/parent::div/parent::div/following-sibling::div[1]/descendant::div/div/span", thElements =>
            thElements
                .filter(th => (th as HTMLElement).offsetParent !== null) // Ensure only visible elements are included
                .map(th => th.textContent?.trim() || '') // Retrieve and trim text content
        );
        return headers; // Returns the headers as an array of strings
    }

    async getCustomerCareSetupLinkHeaders(): Promise<string[]> {
        // Assuming the "General" section has a unique class or ID, adjust the selector accordingly
        const headers = await this.page.$$eval("//span[text()='CUSTOMER CARE SETUP']/parent::div/parent::div/following-sibling::div[1]/descendant::div/div/span", thElements =>
            thElements
                .filter(th => (th as HTMLElement).offsetParent !== null) // Ensure only visible elements are included
                .map(th => th.textContent?.trim() || '') // Retrieve and trim text content
        );
        return headers; // Returns the headers as an array of strings
    }

    async getOptInCodeHistoryLinkHeaders(): Promise<string[]> {
        // Assuming the "General" section has a unique class or ID, adjust the selector accordingly
        const headers = await this.page.$$eval("//span[text()='OPT-IN CODE HISTORY']/parent::div/parent::div/following-sibling::div[1]/descendant::div/div/span", thElements =>

            thElements
                .filter(th => (th as HTMLElement).offsetParent !== null) // Ensure only visible elements are included
                .map(th => th.textContent?.trim() || '') // Retrieve and trim text content
        );
        return headers; // Returns the headers as an array of strings
    }


    async clickClonePreferenceBtn() {
        await expect(this.clonePreferenceBtn).toBeVisible({ timeout: 60000 });
        await this.clonePreferenceBtn.scrollIntoViewIfNeeded();
        await this.clonePreferenceBtn.click();
    }

    async clickCloneBtn() {
        await expect(this.cloneBtn).toBeVisible({ timeout: 60000 });
        await this.cloneBtn.scrollIntoViewIfNeeded();
        await this.cloneBtn.click();
    }

    async enterCRMInstanceTF() {
        await expect(this.crmInstanceTF).toBeVisible({ timeout: 60000 });
        await this.crmInstanceTF.scrollIntoViewIfNeeded();
        await this.crmInstanceTF.click();
        await this.crmInstanceTF.clear();
        await this.crmInstanceTF.fill('testCRMInstance' + faker.number.int({ min: 0, max: 1000 }));
    }

    async enterCRMFieldTF() {
        await expect(this.crmFieldTF).toBeVisible({ timeout: 60000 });
        await this.crmFieldTF.scrollIntoViewIfNeeded();
        await this.crmFieldTF.click();
        await this.crmFieldTF.clear();
        await this.crmFieldTF.fill('testCRMField' + faker.number.int({ min: 0, max: 1000 }));
    }



}








