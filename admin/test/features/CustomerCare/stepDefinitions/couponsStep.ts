import { When, Then } from '@cucumber/cucumber';
import { logger } from '../support/hook';
import { expect } from '@playwright/test'

const expectedHeaders = [

  "ID",
  "DESCRIPTION",
  "TYPE",
  "APPLIES TO",
  "TIERS",
  "START DATE",
  "LAST MODIFIED",
  "ACTIONS"
];

When('Click Coupons', async function () {
  await this.landPage.clickCoupons();
  logger.info('Clicked Coupons');
})

Then('Validate "Coupon Settings" text', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  let text = await this.couponsPage.validateCouponSettingsText();
  expect(text).toEqual('Coupon Settings');
  logger.info(`Validation result: Expected "Coupon Settings", received "${text}"`);
})

Then('Validate "Manage your Coupon Settings" text', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  let text = await this.couponsPage.validateManageYourCouponSettingsText();
  expect(text).toEqual('Manage your Coupon Settings');
  logger.info(`Validation result: Expected "Manage your Coupon Settings", received "${text}"`);
})

When('Click on "Create Coupon" button', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.clickCreateCouponBtn();
  logger.info('Clicked on "Create Coupon" button');
})
When('Click on "Add Filter" LInk', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.clickAddFilterBtn();
  logger.info('Clicked on "Add Filter" link');
})
Then('Verify Filter options for Coupon', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.verifyCouponFilters();
  logger.info('Verified Coupon filters');
})

When('Click on Save button in Create Coupon Details section', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.clickSaveButton();
  logger.info('Clicked on Save button in Create Coupon Details section');
})

When('Check and click Create Coupon button if enabled', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.checkAndClickCreateCouponButton();
  logger.info('Checked and clicked Create Coupon button if enabled');
})

Then('Validate "Details" text', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  let text = await this.couponsPage.validateDetailsText();
  expect(text).toEqual('Details');
  logger.info(`Validation result: Expected "Details", received "${text}"`);
})

Then('Validate "General Information" text', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  let text = await this.couponsPage.valiadateGeneralInformationText();
  expect(text).toEqual('General Information');
  logger.info(`Validation result: Expected "General Information", received "${text}"`);
})

Then('Validate "Restrictions" text', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  let text = await this.couponsPage.validateRestrictionsText();
  expect(text).toEqual('Restrictions');
  logger.info(`Validation result: Expected "Restrictions", received "${text}"`);
})

Then('Validate "Required" text in Create Coupon Details section', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.validateRequiredTexts();
})

When('Fill Details with Selector Type as Dollar', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.fillDetailsWithSelectorTypeAsDollar();
  logger.info('Filled Details with Selector Type as Dollar')
})

When('Fill Details with Selector Type as Percentage', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.fillDetailsWithSelectorTypeAsPercentage();
  logger.info('Filled Details with Selector Type as Percentage')
})

When('Fill Restrictions with {string} after filling details', async function (restriction) {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.fillRestrictions(restriction);
  logger.info('Filled Restrictions after filling details')
})

Then('Validate incorrect Resctriction format message', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  let text = await this.couponsPage.validateIncorrectResctrictionFormatMsg();
  expect(text).toContain('Incorrect comma-separated format');
  logger.info(`Validation result: Expected "Incorrect comma-separated format", received "${text}"`);
})

Then('Validate the table headers of coupon section', async function () {

  try {
    // Fetch the CouponsPage from the POM Manager
    this.couponsPage = await this.pomManager.getCouponsPage();

    // Get actual headers from the Coupons page
    const actualHeaders = await this.couponsPage.getTableHeaders();

    // Log headers for debugging
    console.log("Expected Headers:", expectedHeaders);
    console.log("Actual Headers:", actualHeaders);

    // Validate the number of headers
    if (actualHeaders.length !== expectedHeaders.length) {
      console.error("Header count mismatch");
      console.error("Actual:", actualHeaders.length, "Expected:", expectedHeaders.length);
    }
    expect(actualHeaders.length).toBe(expectedHeaders.length);

    // Validate each header text
    for (let i = 0; i < expectedHeaders.length; i++) {
      if (actualHeaders[i] !== expectedHeaders[i]) {
        console.error(`Header mismatch at index ${i}: Expected '${expectedHeaders[i]}', Got '${actualHeaders[i]}'`);
      }
      expect(actualHeaders[i]).toBe(expectedHeaders[i]);
    }
  } catch (error) {
    console.error("Error during validation:", error);
    throw new Error("Header validation failed: " + error);
  }
});

Then('Validate the Previous button is disabled in Coupon table', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage();
  const isDisabled = await this.couponsPage.clickPreviousButton();
  // Assert that the button is disabled (i.e., isDisabled should be true)
  expect(isDisabled).toBe(true);  // Assert that the button is disabled
  logger.info("Previous button is disabled.");
    
    try {
        // Fetch the CouponsPage from the POM Manager
        this.couponsPage = await this.pomManager.getCouponsPage();

        // Get actual headers from the Coupons page
        const actualHeaders = await this.couponsPage.getTableHeaders();

        // Log headers for debugging
        console.log("Expected Headers:", expectedHeaders);
        console.log("Actual Headers:", actualHeaders);

        // Validate the number of headers
        if (actualHeaders.length !== expectedHeaders.length) {
            console.error("Header count mismatch");
            console.error("Actual:", actualHeaders.length, "Expected:", expectedHeaders.length);
        }
        expect(actualHeaders.length).toBe(expectedHeaders.length);

        // Validate each header text
        for (let i = 0; i < expectedHeaders.length; i++) {
            if (actualHeaders[i] !== expectedHeaders[i]) {
                console.error(`Header mismatch at index ${i}: Expected '${expectedHeaders[i]}', Got '${actualHeaders[i]}'`);
            }
            expect(actualHeaders[i]).toBe(expectedHeaders[i]);
        }
    } catch (error) {
        console.error("Error during validation:", error);
        throw new Error("Header validation failed: " + error);
    }
});


Then('Validate and click Previous button if enabled in Coupon table', async function () {

  this.couponsPage = await this.pomManager.getCouponsPage();
  const isDisabled = await this.couponsPage.clickPreviousButton();
  // Assert that the button is enabled (i.e., isDisabled should be false)
  expect(isDisabled).toBe(false); // Assert that the button is enabled (should not be disabled)
  logger.info("Previous button was enabled and clicked.");

});


Then('Validate the Next button state and click if enabled', async function () {

  this.couponsPage = await this.pomManager.getCouponsPage();
  const isNextButtonEnabled = await this.couponsPage.clickNextButton();
  // Assert that the button is enabled (if it was clicked, it should be enabled)
  expect(isNextButtonEnabled).toBe(true); // Assert that the button is enabled
  if (isNextButtonEnabled) {
    console.log("Next button is enabled and clicked.");
  } else {
    console.log("Next button is disabled.");
  }
});


When('Click on Edit first record in coupon table', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.clickEditFirstRecord();
  logger.info('Clicked on Edit first record in coupon table');
})

When('Click on Update Coupon button', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.clickUpdateCouponBtn();
  logger.info('Clicked on Update Coupon button');
})

When('Edit description under Details section', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.editDescription();
  logger.info('Edited description under Details section');
})


Then('Validate "Edit Coupon" text', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  let text = await this.couponsPage.validateEditCouponText();
  expect(text).toEqual('Edit Coupon');
  logger.info(`Validation result: Expected "Edit Coupon", received "${text}"`);
})

Then('Validate "Exit Create Coupon" text', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  let text = await this.couponsPage.validateExitCreateCouponText();
  expect(text).toEqual('Exit Create Coupon');
  logger.info(`Validation result: Expected "Exit Create Coupon", received "${text}"`);
})

Then('Validate "Are you sure you want to exit" text', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  let text = await this.couponsPage.validateAreYouSureYouWantToExitText();
  expect(text).toEqual('Are you sure you want to exit from creating a coupon? All progress will be lost.');
  logger.info(`Validation result: Expected "Are you sure you want to exit from creating a coupon? All progress will be lost.", received "${text}"`);
})

When('Click on "back to coupons" link', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.clickBackToCouponsLink();
  logger.info('Clicked on "back to coupons" link');
})

When('Click on Close button in Exit Create Coupon pop up', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.clickCloseButtonInExitCreateCoupon();
  logger.info('Clicked on Close button in Exit Create Coupon pop up');
})

When('Click on No button in Exit Create Coupon pop up', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.clickNoButtonInExitCreateCoupon();
  logger.info('Clicked on No button in Exit Create Coupon pop up');
})

When('Click on Yes button in Exit Create Coupon pop up', async function () {
  this.couponsPage = await this.pomManager.getCouponsPage()
  await this.couponsPage.clickYesButtonInExitCreateCoupon();
  logger.info('Clicked on Yes button in Exit Create Coupon pop up');
})

Then('Validate "Coupon created successfully!" text', async function () {
   this.couponsPage = await this.pomManager.getCouponsPage()
    let text = await this.couponsPage.validateCouponCreatedSuccessfullyMsg();
    expect(text).toEqual('Coupon created successfully!');
    logger.info(`Validated "Coupon created successfully!" text`);
});

Then('Validate "Coupon updated successfully!" text', async function () {
   this.couponsPage = await this.pomManager.getCouponsPage()
    let text = await this.couponsPage.validateCouponUpdatedSuccessfullyMsg();
    expect(text).toEqual('Coupon updated successfully!');
    logger.info(`Validated "Coupon updated successfully!" text`);
});










