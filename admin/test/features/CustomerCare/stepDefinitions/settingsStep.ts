import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test';



When('Click on Settings', async function () {
    await this.landPage.clickSettings();
    logger.info('Clicked on Settings');
})

When('Click on Clients DO', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.clickClientsDO();
    logger.info('Clicked on Clients DO');
})


Then('Validate "Active Clients" text', async function () {
    this.settingsPage = this.pomManager.getSettingsPage()
    let text = await this.settingsPage.validateActiveClientsText();
    expect(text).toEqual('Active Clients');
    logger.info(`Validation result: Expected "Active Clients", received "${text}"`);
})

When('Verify active clients', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.checkForActiveClients();
    logger.info('Verified active clients');
});

Then('Verify the active clients table columns', async function () {
    const expectedHeaders = ['Client Id', 'Name', 'Currency', 'Created', 'Updated', 'Status', 'Action'];
    await this.settingsPage.verifyActiveClientsTableColumns(expectedHeaders);
});


When('Click on Clients Info', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.clickClientsInfo();
    logger.info('Clicked on Clients Info');
})

When('Verify inactive clients', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.checkForInactiveClients();
    logger.info('Verified inactive clients');
});

Then('Verify no inactive clients listed', async function () {
    const hasInactiveClients = await this.settingsPage.hasInactiveClients();
    if (hasInactiveClients) {
        throw new Error('There are inactive clients listed. Please verify the inactive clients table.');
    }
});

Then('Verify the inactive clients table columns', async function () {
    const expectedHeaders = ['Client Id', 'Name', 'Currency', 'Created', 'Updated', 'Status', 'Action'];
    await this.settingsPage.verifyInactiveClientsTableColumns(expectedHeaders);
});

Then('Verify the Clients Info Title text', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateClinetsInfoTitleText();
    expect(text).toEqual('9999 - Courage CX USD Active');
    logger.info('Validated Clients Info Title');
});

Then('Verify the Client ID', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateClientsID();
    expect(text).toEqual('9999');
    logger.info('Validated Client ID');
});



Then('Validate "details" text', async function () {
    this.settingsPage = this.pomManager.getSettingsPage()
    let text = await this.settingsPage.validateDetailsText();
    expect(text).toEqual('Details');
    logger.info(`Validation result: Expected "details", received "${text}"`);
})

Then('Validate Client Name as "Courage CX"', async function () {
    this.settingsPage = this.pomManager.getSettingsPage()
    let text = await this.settingsPage.validateClientName();
    expect(text).toContain('Courage CX');
    logger.info(`Validation result: Expected Client Name as "Courage CX", received "${text}"`);
})

Then('Validate Country ID as "US"', async function () {
    this.settingsPage = this.pomManager.getSettingsPage()
    let text = await this.settingsPage.validateCountryID();
    expect(text).toContain('US');
    logger.info(`Validation result: Expected Country ID as "US", received "${text}"`);
})


Then('Verify the Client Website URL', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    let websiteURLText = await this.settingsPage.validateClientsWebsiteURL();
    expect(websiteURLText).toEqual('courage.cx');
    logger.info('Validated Website URL');

});

When('Click on Tax-Nexus tab', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.clickClientsTaxNexus();
    logger.info('Clicked on Clients TaxNexus tab');
});

Then('Validate "Sales Tax Nexus" text', async function () {
    this.settingsPage = this.pomManager.getSettingsPage()
    let text = await this.settingsPage.validateClientsSalesTaxNexusText();
    expect(text).toEqual('Sales Tax Nexus');
    logger.info(`Validation result: Expected "Sales Tax Nexus", received "${text}"`);
});

When('Count the Sales Tax Nexus table headings and checkboxes', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    const headings = await this.settingsPage.getSalesTaxProductHeadings();
    const checkboxCount = await this.settingsPage.countSalesTaxProductCheckboxes();
    console.log(`Relevant table headings: ${headings.join(', ')}`);
    console.log(`Number of relevant checkboxes: ${checkboxCount}`);
});

Then('Verify the Sales Tax Nexus table Products', async function () {
    const expectedHeaders = [
        'Default - Courage CX',
        'Darwin Box',
        'Graphics Pro Expo',
        'Courage CX Magazine',
        'Courage CX Membership',
        'Courage Box',
        'B2B Connect',
    ];
    const actualHeadings = await this.settingsPage.getSalesTaxProductHeadings();
    expect(actualHeadings).toEqual(expectedHeaders);
});


Then('I should verify the checked checkboxes', async function (dataTable) {
    const expectedStates: { header: string; checked: boolean }[] = dataTable.rawTable.slice(1).map(([header, checked]: [string, string]) => ({
        header,
        checked: checked.toLowerCase() === 'true',
    }));

    await this.settingsPage.verifySalesTaxProductCheckboxStates(expectedStates);
});


When('Checks the "B2B Connect Product" checkbox', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.checkTaxNexusB2BConnectCheckbox();
});

When('Unchecks the "B2B Connect Product" checkbox', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.uncheckTaxNexusB2BConnectCheckbox();
});


Then('Clicks the "Apply" button', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.clickTaxNexusApplyButton();
});

When('Click on PREFERENCE SETTING tab', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.clickPreferenceSetting();
    logger.info('Clicked on Preference Setting tab');
});

When('Click on Parnter API Keys tab', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.clickPartnerAPI();
    logger.info('Clicked on Parnter API Keys tab');
});

When('Click on New Partner Key Option Button', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.clickNewPartnerKeyOption();
    logger.info('Clicked on New Partner Key Option Button');
});

Then('Create New Partner Key', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.createNewAPIKEY();
    logger.info('Create New Partner Key');
});

Then('Validate New Partner Key Creation Success Message', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateCreateNewAPIKEYSuccessMsg();
    expect(text).toEqual('Successfully updated');
    logger.info(`Validation result: Expected "Successfully updated", received "${text}"`);
})

Then('Click on Issues Tab', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickIssuesTab();
    logger.info('Issues Tab link opened successfully');
});

Then('Click on Payment Provider Tab', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickPaymentProviderTab();
    logger.info('Payment Provider Tab link opened successfully');
});
Then('Click on Marketing Coupon Tab', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickMarketingCouponTab();
    logger.info('Payment Provider Tab link opened successfully');
});

Then('Verify the Stripe and CheckIssuing Payment Logo', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage(); // Get the SettingsPage instance

    // Verify alt text for the Stripe image
    await this.settingsPage.verifyImageAltText('img[src="/img/Stripe wordmark - slate.svg"]', 'Stripe Logo');

    // Verify alt text for the CheckIssuing image
    await this.settingsPage.verifyImageAltText('img[src="/img/checkissuinglogo.png"]', 'CheckIssuing Logo');

    console.log('Both images alt text verified successfully');
});

Then('Verify the Stripe Payment Provider table columns', async function () {
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

    // Locator for the table headers
    const tableLocator = this.page.locator('.card-body table:first-of-type thead tr th');


});

Then('Verify the CheckIssuing Payment Provider table columns', async function () {
    const expectedHeaders = [
        'Account ID',
        'Brand Name',
        'Bank Name',
        'Bank Account Type',
        'Bank Account Number',
        'Status',
    ];

    // Get the actual headers from the page
    const actualHeadings = await this.settingsPage.getPPCheckIssuingTableColumns();

    // Assert that the actual headers match the expected ones
    expect(actualHeadings).toEqual(expectedHeaders);
});
Then('Verify the Stripe Payment Provider table data', async function () {
    // Initialize settings page object
    this.settingsPage = this.pomManager.getSettingsPage();
    
    // Expected values for the row in the table
    const expectedRowValues = [
        ['acct_1IC7UFJKyb9h6yTw', 'CourageCX', 'COURAGE', 'YES', 'YES', 'US', 'usd', 'View Detail', 'Completed', '']
    ];
    
    // Get actual row values from the page
    const actualRowValues = await this.settingsPage.getPPStripeTableRowValues();

    // Assert that actual row values match the expected values
    expect(actualRowValues).toEqual(expectedRowValues);
});
When('Verify the CheckIssuing table', async function () {
  const rows = await this.settingsPage.getCheckIssuingTableRows();
  const rowData = await rows.allTextContents();  // This will fetch the entire row as a single string
  console.log(rowData);  // Log the data to check
});
Then('the CheckIssuing table should contain {string}, {string}, {string}, {string}, {string}, {string}', async function (
  accountId: string,
  brandName: string,
  bankName: string,
  accountType: string,
  accountNumber: string,
  status: string
) {
  // Extract the data for the first row (assuming rowIndex = 1 for the first row)
  const rowData = await this.settingsPage.getCheckIssuingTableRowData(1);

  // Assert the extracted rowData contains all the expected values
  expect(rowData).toContain(accountId);       // Ensure Account ID is in the row
  expect(rowData).toContain(brandName);       // Ensure Brand Name is in the row
  expect(rowData).toContain(bankName);        // Ensure Bank Name is in the row
  expect(rowData).toContain(accountType);     // Ensure Account Type is in the row
  expect(rowData).toContain(accountNumber);   // Ensure Bank Account Number is in the row
  expect(rowData).toContain(status);          // Ensure Status is in the row
});




Then('Verify the Logs', async function () {
    this.settingsPage = this.pomManager.getSettingsPage();
    await this.settingsPage.verifyLogHtml();
    logger.info('View details Link for the Stripe Payment Provieder verified successfully');
});
Then('Verify the View details Link for the Stripe Payment Provieder', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.verifyPPStripeViewDetailsLink();
    logger.info('View details Link for the Stripe Payment Provieder verified successfully');
});

Then('Verify the Download button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    const text = await this.settingsPage.getDownloadButtonText();
    expect(text).toEqual('Download')
    logger.info('Download button displayed successfully');
});

Then('Click on Download button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickIssuesDownloadBtn();
    logger.info('Clicked successfully on Download button');
});

Then('Verify the table headers under Issues Tab', async function () {
    // Initialize the settings page from the Page Object Manager
    this.settingsPage = this.pomManager.getSettingsPage();

    // Expected headers that we want to verify
    const expectedHeaders = [
        'Id',
        'Client Id',
        'Product Id',
        'Product Type',
        'Issue Number',
        'Issue Month',
        'Issue Year',
        'Theme',
        'Selection Date',
        'Mail Date',
        'In Home Date',
        'Newsstand Date',
        'Active Date',
        'Expiry Date',
        'Issue Closed',
        'Issue Closed Date',
        'Supplementary Copies',
        'Supplementary Cutoff Date',
        'Date Created',
        'Last Modified',
        'Action',
    ];

    // Get the actual headers from the table via the page object
    const actualHeaders = await this.settingsPage.getIssuesTableHeaders();

    // Log the actual headers for debugging purposes
    console.log('Actual table headers:', actualHeaders);

    // Filter out any empty strings and unwanted columns (like 'Timestamp', 'User', etc.)
    const filteredActualHeaders = actualHeaders
        .filter((header: string) => header.trim() !== '' && !['Timestamp', 'User', 'Query', 'Params'].includes(header));

    // Remove any duplicates in the actual headers
    const uniqueActualHeaders = [...new Set(filteredActualHeaders)];

    // Sort both expected and actual headers to ensure order doesn't affect the comparison
    const sortedExpectedHeaders = [...expectedHeaders].sort();
    const sortedActualHeaders = uniqueActualHeaders.sort();

    // Assert that the sorted and filtered actual headers match the expected headers
    expect(sortedActualHeaders).toEqual(sortedExpectedHeaders);

    // Log the success of the header verification
    logger.info('Verified table headers under Issues Tab');
});


Then('Search the issue by issue number', async function () {
    // Click on the Preference Settings tab (implement this method as needed)
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.searchIssueByNumber();
});

Then('Click on Batch Upload button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickIssuesBatchUploadBtn();
    logger.info('Clicked successfully on Download button');
});

Then('Click on "Browse File" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickBrowseFilesButton();
    logger.info('Clicked successfully on BrowseFile button');
});

When('Choose file to upload', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.chooseFileToUpload();
    logger.info('Choose file to upload');
})

Then('Update the Issue Closed status and Supplementary Copies for the issue', async function () {
    // Click on the Preference Settings tab (implement this method as needed)
    this.settingsPage =await this.pomManager.getSettingsPage();
    await this.settingsPage.updateIssueByNumber();
});
Then('I should see the following preference link texts:', async function (dataTable) {
    // Click on the Preference Settings tab (implement this method as needed)
    await this.settingsPage.getPreferenceLinkTexts();

    // Wait for an element that indicates the page has loaded
    await this.page.waitForSelector('.card-header strong', { state: 'visible' });

    const expectedTexts: string[] = dataTable.rawTable.map((row: string[]) => row[0]);
    const actualTexts = await this.settingsPage.getPreferenceLinkTexts();

    console.log('Actual texts found:', actualTexts); // Debugging log

    expectedTexts.forEach((text: string) => {
        if (!actualTexts.map((t: string) => t.trim()).includes(text.trim())) { // Explicitly typing 't' as string
            throw new Error(`Expected link text not found: ${text}`);
        }
    });
});

When('Expand the 90 Courage CX Magazine link', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickcourageCXMagazine90Link();
    logger.info('Expanded the CourageCXMagazine 90Link');
});

Then('Collapse the 90 Courage CX Magazine link', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickcourageCXMagazine90Link();
    logger.info('Collapse the CourageCXMagazine 90Link');
});


When('Expand the 9999 Courage CX Magazine link', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickcourageCXMagazine9999Link();
    logger.info('Expanded the CourageCXMagazine 9999 Link');
});

Then('Collapse the 9999 Courage CX Magazine link', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickcourageCXMagazine9999Link();
    logger.info('Collapse the CourageCXMagazine 9999 Link');
});

When('Expand the Configurable Preference link', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickConfigurablePreferenceLink();
    logger.info('Expanded the Configurable Preference link');
});

Then('Collapse the Configurable Preference link', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickConfigurablePreferenceLink();
    logger.info('Collapse the Configurable Preference link');
});
Then('Verify 90 CourageCXMagazineLink table headers', async function () {
    // Ensure you're working with the correct page object
    this.settingsPage = await this.pomManager.getSettingsPage(); // Assuming this gets the correct page object

    // Get the expected headers for comparison
    const expectedHeaders = [
        'Category',
        'Sub Category',
        'Config Name',
        'Config Key',
        'Config Data',
        'Config Type',
        'Config I D',
        'Description',
        'Last Updated Date'
    ];

    // Call the method in the page object to get the actual headers
    const actualHeaders = await this.settingsPage.getcourageCXMagazine90LinkTableHeader();

    // Log actual headers for debugging
    console.log('Actual table headers:', actualHeaders);

    // Assert that the actual headers match the expected headers
    expect(actualHeaders).toEqual(expectedHeaders);

    // Log the success of the header verification
    logger.info('Verified CourageCXMagazineLink table headers');
});

Then('Verify 9999 CourageCXMagazineLink table headers', async function () {
    // Ensure you're working with the correct page object
    this.settingsPage = await this.pomManager.getSettingsPage(); // Assuming this gets the correct page object

    // Get the expected headers for comparison
    const expectedHeaders = [
        'Category',
        'Sub Category',
        'Config Name',
        'Config Key',
        'Config Data',
        'Config Type',
        'Description',
        'Config I D',
        'Last Updated Date'
    ];

    // Call the method in the page object to get the actual headers
    const actualHeaders = await this.settingsPage.getcourageCXMagazine9999LinkTableHeader();

    // Log actual headers for debugging
    console.log('Actual table headers:', actualHeaders);

    // Assert that the actual headers match the expected headers
    expect(actualHeaders).toEqual(expectedHeaders);

    // Log the success of the header verification
    logger.info('Verified CourageCXMagazineLink table headers');
});

// Then('Verify CourageCXMagazineLink table headers', async () => {
//   // Expected table headers
//   const expectedHeaders = [
//     'Category', 
//     'Sub Category', 
//     'Config Name', 
//     'Config Key', 
//     'Config Data', 
//     'Config Type', 
//     'Config I D', 
//     'Description', 
//     'Last Updated Date'
//   ];

//   // Get all the headers from the table (this is always an array now)
//   const headers = await this.settingsPage.getcourageCXMagazine90LinkTableHeader();

//   // Ensure headers are not empty
//   if (headers.length === 0) {
//     throw new Error('Table headers are empty or not found');
//   }

//   // Assert that the headers match the expected values
//   for (let i = 0; i < expectedHeaders.length; i++) {
//     expect(headers[i].trim()).toBe(expectedHeaders[i]);
//   }
// });


When('Click on "Subscription Preferences"', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickSubscriptionPreferences();
    logger.info('Clicked on "Subscription Preferences"');
})

Then('Validate "Subscription Preferences" text', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateSubscriptionPreferencesText();
    expect(text).toEqual('Subscription Preferences');
    logger.info(`Validation result: Expected "Subscription Preferences", received "${text}"`);
})

Then('Validate "Manage subscription preferences in difference campaigns" text', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateManageSubscriptionPreferencesText();
    expect(text).toEqual('Manage subscription preferences in difference campaigns');
    logger.info(`Validation result: Expected "Manage subscription preferences in difference campaigns", received "${text}"`);
})

When('Click on "Show Inactive List" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickShowInactiveListBtn();
    logger.info('Clicked on "Show Inactive List" button');
})

Then('Validate "Show Active List" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateShowActiveListBtn();
    expect(text).toEqual('Show Active List');
    logger.info(`Validation result: Expected "Show Active List", received "${text}"`);
})

Then('Verify the following table columns under "Inactive List"', async function (dataTable) {
    const expectedHeadings = dataTable.raw().flat();
    await this.settingsPage.verifyHeadings(expectedHeadings);
});

When('the user fetches the inactive subscriptions', async function () {
    this.inactiveSubscriptions = await this.settingsPage.getInactiveSubscriptions();
});

Then('the user should see a list of inactive subscriptions with correct details', function () {
    for (const subscription of this.inactiveSubscriptions) {
        console.log(`ID: ${subscription.id}, Name: ${subscription.name}, Status: ${subscription.status}`);
        // Add assertions here to validate the details if necessary 
    }
});

When('I fetch all inactive subscription rows', async function () {
    const inactiveRows = await this.settingsPage.getInactiveRows();
    this.inactiveRowsData = inactiveRows;
});

// Step to check inactive subscription data
Then('I should see the following inactive subscription data', async function (dataTable) {
    // Handle the dataTable
    const expectedData = dataTable.rawTable().map((row: string[]) => row.join(', '));

    // Debugging logs to verify data structure
    console.log("Expected Data:", expectedData);
    console.log("Inactive Rows Data:", this.inactiveRowsData);

    // Iterate through each row in expectedData to verify it exists in inactiveRowsData
    for (const row of expectedData) {
        if (!this.inactiveRowsData.includes(row)) {
            throw new Error(`Expected inactive row data not found: ${row}`);
        }
    }
});


When('Click on "Add Subscription Preference" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickAddSubscriptionPreferenceBtn();
    logger.info('Clicked on "Add Subscription Preference" button');
});

Then('Validate "Add Subscription Preference" text', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateAddSubscriptionPreferenceText();
    expect(text).toEqual('Add Subscription Preference');
    logger.info(`Validation result: Expected "Add Subscription Preference", received "${text}"`);
});

Then('Validate "General Setup" text', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateGeneralSetupText();
    expect(text).toEqual('General Setup');
    logger.info(`Validation result: Expected "General Setup", received "${text}"`);
});

When('Click on "Next" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickNextBtn();
    logger.info('Clicked on "Next" button');
});

When('Click on "Next2" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickNext2Btn();
    logger.info('Clicked on "Next" button');
});

Then('Validate "Required" texts in "Add Subscription Preference" pop up', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.validateRequiredTexts();
    logger.info(`Validation "Required" texts in "Add Subscription Preference" pop up`);
});

When('Fill "General Setup" form', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.fillGeneralSetupForm();
    logger.info('Filled "General Setup" form');
});

When('Fill "Shop Page and MY Page Setup" form', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.fillShopPageMYPageSetupForm();
    logger.info('Filled "Shop Page and MY Page Setup" form');
});

Then('Validate "Shop Page and MY Page Setup" text', async function () {
    this.settingsPage =await this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateShopPageMYPageSetupText();
    expect(text).toEqual('Shop Page and MY. Page Setup');
    logger.info(`Validation "Shop Page and MY Page Setup" text`);
});

Then('Validate "Customer Care Setup" text', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateCustomerCareSetupText();
    expect(text).toEqual('Customer Care Setup');
    logger.info(`Validation "Customer Care Setup" text`);
});

When('Click on "Add Preferences" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickAddPreferencesBtn();
    logger.info('Clicked on "Add Preferences" button');
});

Then('Validate "Preference Update Successful" text', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validatePreferenceUpdateSuccessfulText();
    expect(text).toEqual('Preference update successful');
    logger.info(`Validation "Preference Update Successful" text`);
});

When('Click on "Edit Preference" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickEditPreferenceBtn();
    logger.info('Clicked on "Edit Preference" button');
});

When('Click on "Update Preference" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickUpdatePreferenceBtn();
    logger.info('Clicked on "Update Preference" button');
});

When('Click on "Edit Subscription Preference Toggle" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickEditSubscriptionPreferenceToggleBtn();
    logger.info('Clicked on "Edit Subscription Preference Toggle" button');
});

When('Click on "Show Active List" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickShowActiveListBtn();
    logger.info('Clicked on "Show Active List" button');
});

When('Click on "Subscription Preference Four Highlight Clone"', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickSubscriptionPreferenceFourHighlightClone();
    logger.info('Clicked on "Subscription Preference Four Highlight Clone"');
});

When('Click on First Subscription Preference Code data from the table', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickFirstSubscriptionPreferenceCodeData();
    logger.info('Clicked on First Subscription Preference Code data from the table');
});

Then('Validate "Edit Subscription Preference" text', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateEditSubscriptionPreferenceText();
    expect(text).toEqual('Edit Subscription Preference');
    logger.info(`Validation "Edit Subscription Preference" text`);
});

Then('Validate "Clone Preference" text', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    let text = await this.settingsPage.validateClonePreferenceText();
    expect(text).toEqual('Clone Preference');
    logger.info(`Validation "Clone Preference" text`);
});

When('Expand the GENERAL link in Subscription Preference', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickGeneralTextInSubscriptionPreference();
    logger.info('Expanded the GENERAL Link in Subscription Preference');
});

Then('Collapse the GENERAL link in Subscription Preference', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickGeneralTextInSubscriptionPreference();
    logger.info('Collapse the GENERAL Link in Subscription Preference');
});

When('Expand the SHOP PAGE AND MY PAGE SETUP link in Subscription Preference', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickShopPageAndMyPageSetupTextInSubscriptionPreference();
    logger.info('Expanded the SHOP PAGE AND MY PAGE SETUP Link in Subscription Preference');
});

Then('Collapse the SHOP PAGE AND MY PAGE SETUP link in Subscription Preference', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickShopPageAndMyPageSetupTextInSubscriptionPreference();
    logger.info('Collapse the SHOP PAGE AND MY PAGE SETUP Link in Subscription Preference');
});

When('Expand the CUSTOMER CARE SETUP link in Subscription Preference', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickCustomerCareSetupTextInSubscriptionPreference();
    logger.info('Expanded the CUSTOMER CARE SETUP Link in Subscription Preference');
});

Then('Collapse the CUSTOMER CARE SETUP link in Subscription Preference', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickCustomerCareSetupTextInSubscriptionPreference();
    logger.info('Collapse the CUSTOMER CARE SETUP Link in Subscription Preference');
});

When('Expand the OPT IN CODE HISTORY link in Subscription Preference', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickOptInCodeHistoryTextInSubscriptionPreference();
    logger.info('Expanded the OPT IN CODE HISTORY Link in Subscription Preference');
});

When('Click "Back To Subscription" in Subscription Preference', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickBackToSubscription();
    logger.info('Clicked "Back To Subscription" in Subscription Preference');
});

Then('Collapse the OPT IN CODE HISTORY link in Subscription Preference', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickOptInCodeHistoryTextInSubscriptionPreference();
    logger.info('Collapse the OPT IN CODE HISTORY Link in Subscription Preference');
});

Then('Verify headers under "GENERAL" Link', async function () {
    // Ensure you're working with the correct page object
    this.settingsPage = await this.pomManager.getSettingsPage(); // Assuming this gets the correct page object
    const expectedHeaders = [
        'ACTIVE',
        'SUBSCRIPTION PREFERENCE TARGET',
        'SUBSCRIPTION PREFERENCE CODE',
        'FULFILLMENT ACTION',
        'GROUP CODE'
    ];

    const actualHeaders = (await this.settingsPage.getGeneralLinkHeaders()).slice(0, expectedHeaders.length);

    expect(actualHeaders).toEqual(expectedHeaders);
    logger.info('Verified headers under "GENERAL" Link');
});

Then('Verify headers under "SHOP PAGE AND MY PAGE SETUP" Link', async function () {
    // Ensure you're working with the correct page object
    this.settingsPage = await this.pomManager.getSettingsPage(); // Assuming this gets the correct page object
    const expectedHeaders = [
        'LABEL',
        'SELECTOR TYPE*',
        'PRE SELECTION OPTION',
        'HIDE PREFERENCE ON SHOP PAGE',
        'DISPLAY PREFERENCE ON MY. PAGE'
    ];

    const actualHeaders = (await this.settingsPage.getShopPageAndMyPageSetupLinkHeaders()).slice(0, expectedHeaders.length);

    expect(actualHeaders).toEqual(expectedHeaders);
    logger.info('Verified headers under "SHOP PAGE AND MY PAGE SETUP"  Link');
});

Then('Verify headers under "CUSTOMER CARE SETUP" Link', async function () {
    // Ensure you're working with the correct page object
    this.settingsPage = await this.pomManager.getSettingsPage(); // Assuming this gets the correct page object
    const expectedHeaders = [
        'LOCATION',
        'LABEL',
        'SELECTOR TYPE',
        'LABEL VALUE OPTIONS',
        'IMAGE URL'
    ];

    const actualHeaders = (await this.settingsPage.getCustomerCareSetupLinkHeaders()).slice(0, expectedHeaders.length);

    expect(actualHeaders).toEqual(expectedHeaders);
    logger.info('Verified headers under "CUSTOMER CARE SETUP" Link');
});

Then('Verify headers under "OPT-IN CODE HISTORY" Link', async function () {
    // Ensure you're working with the correct page object
    this.settingsPage = await this.pomManager.getSettingsPage(); // Assuming this gets the correct page object
    const expectedHeaders = [
        'AGENT EMAIL',
        'SUBSCRIPTION PREFERENCE CODE',
        'GROUP CODE',
        'PRE CHECKED',
        'HIDE PREFERENCE ON SHOP PAGE'
    ];

    const actualHeaders = (await this.settingsPage.getOptInCodeHistoryLinkHeaders()).slice(0, expectedHeaders.length);

    expect(actualHeaders).toEqual(expectedHeaders);
    logger.info('Verified headers under "OPT-IN CODE HISTORY" Link');
});


When('Enter value in CRM Instance text field', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.enterCRMInstanceTF();
    logger.info('Enter value in CRM Instance text field');
});

When('Enter value in CRM Field text field', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.enterCRMFieldTF();
    logger.info('Enter value in CRM Field text field');
});

When('Click on "Clone Preference" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickClonePreferenceBtn();
    logger.info('Clicked on "Clone Preference" button');
});

When('Click on "Clone" button', async function () {
    this.settingsPage = await this.pomManager.getSettingsPage();
    await this.settingsPage.clickCloneBtn();
    logger.info('Clicked on "Clone" button');
});




function verifyImageAltText(arg0: string, arg1: string) {
    throw new Error('Function not implemented.');
}

