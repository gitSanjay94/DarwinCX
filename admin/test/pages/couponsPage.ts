import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class couponsPage {
     page: Page;
     readonly couponSettingsText: Locator;
     readonly createCouponBtn: Locator;
     readonly manageYourCouponSettingsText: Locator;
     readonly createCouponText: Locator;
     readonly detailsText: Locator;
     readonly generalInformationText: Locator;
     readonly saveBtn: Locator;
     readonly restrictionsText: Locator;
     readonly addFilterBtn: Locator;
     readonly incorrectResctrictionFormatMsg: Locator;
     readonly nextBtn: Locator;
     readonly previousBtn: Locator;
     readonly editFirstRecord: Locator;
     readonly updateCouponBtn: Locator;
     readonly editCouponText: Locator;
     readonly exitCreateCouponText: Locator;
     readonly areYouSureYouWantToExitText: Locator;
     readonly yesBtnInExitCreateCoupon: Locator;
     readonly noBtnInExitCreateCoupon: Locator;
     readonly backToCouponsLink: Locator;
     readonly closeBtnInExitCreateCoupon: Locator;
     readonly couponCreatedSuccessfullyMsg: Locator;
     readonly couponUpdatedSuccessfullyMsg: Locator;

     constructor(page: Page) {
          this.page = page;
          this.couponSettingsText = page.getByRole('heading', { name: 'Coupon Settings' })
          this.createCouponBtn = page.getByRole('button', { name: 'Create Coupon' })
          this.manageYourCouponSettingsText = page.getByText('Manage your Coupon Settings')
          this.createCouponText = page.getByRole('heading', { name: 'Create Coupon' })
          this.detailsText = page.getByText('Details')
          this.restrictionsText = page.getByText('Restrictions')
          this.generalInformationText = page.getByText('General Information')
          this.saveBtn = page.getByRole('button', { name: 'Save' })
          this.nextBtn = page.getByRole('button', { name: 'Next' })
          this.previousBtn = page.getByRole('button', { name: 'Previous' })
          this.updateCouponBtn = page.getByRole('button', { name: 'Update Coupon' })
          this.editFirstRecord = page.locator('tr:nth-of-type(1) svg[viewBox="0 0 24 24"]')
          this.addFilterBtn = page.getByRole('link', { name: 'Add Filter +' })
          this.editCouponText = page.getByRole('heading', { name: 'Edit Coupon' })


          this.nextBtn = page.getByRole('button', { name: 'Next' })
          this.previousBtn = page.getByRole('button', { name: 'Previous' })
          this.addFilterBtn = page.getByRole('link', { name: 'Add Filter +' })
          this.incorrectResctrictionFormatMsg = page.getByText('Incorrect comma-separated format (it must have no space after a comma, e.g., MC-1000,MC-1001)')
          this.exitCreateCouponText = page.getByText('Exit Create Coupon')
          this.areYouSureYouWantToExitText = page.getByText('Are you sure you want to exit')
          this.yesBtnInExitCreateCoupon = page.getByRole('button', { name: 'Yes' })
          this.noBtnInExitCreateCoupon = page.getByRole('button', { name: 'No' })
          this.backToCouponsLink = page.getByRole('link', { name: '< back to coupons' })
          this.closeBtnInExitCreateCoupon = page.locator('div[data-radium="true"] button i.fas.fa-times')
          this.couponCreatedSuccessfullyMsg = page.locator("//h6[text()='Coupon created successfully!']")
          this.couponUpdatedSuccessfullyMsg = page.locator("//h6[text()='Coupon updated successfully!']")

     }

     async validateDetailsText() {
          await expect(this.detailsText).toBeVisible({ timeout: 60000 });
          await this.detailsText.scrollIntoViewIfNeeded();
          let text = await this.detailsText.textContent();
          return text;
     }
     async validateRestrictionsText() {
          await expect(this.restrictionsText).toBeVisible({ timeout: 60000 });
          await this.restrictionsText.scrollIntoViewIfNeeded();
          let text = await this.restrictionsText.textContent();
          return text;
     }
     async valiadateGeneralInformationText() {
          await expect(this.generalInformationText).toBeVisible({ timeout: 60000 });
          await this.generalInformationText.scrollIntoViewIfNeeded();
          let text = await this.generalInformationText.textContent();
          return text;
     }
     async validateCouponSettingsText() {
          await expect(this.couponSettingsText).toBeVisible({ timeout: 60000 });
          await this.couponSettingsText.scrollIntoViewIfNeeded();
          let text = await this.couponSettingsText.textContent();
          return text;
     }

     async validateCreateCouponText() {
          await expect(this.createCouponText).toBeVisible({ timeout: 60000 });
          await this.createCouponText.scrollIntoViewIfNeeded();
          let text = await this.createCouponText.textContent();
          return text;
     }

     async validateManageYourCouponSettingsText() {
          await expect(this.manageYourCouponSettingsText).toBeVisible({ timeout: 60000 });
          await this.manageYourCouponSettingsText.scrollIntoViewIfNeeded();
          let text = await this.manageYourCouponSettingsText.textContent();
          return text;
     }

     async clickCreateCouponBtn() {
          await expect(this.createCouponBtn).toBeVisible({ timeout: 60000 });
          await this.createCouponBtn.scrollIntoViewIfNeeded();
          await this.createCouponBtn.click();
     }

     async clickAddFilterBtn() {
          await expect(this.addFilterBtn).toBeVisible({ timeout: 60000 });
          await this.addFilterBtn.scrollIntoViewIfNeeded();
          await this.addFilterBtn.click();
     }

     async verifyCouponFilters() {
          try {
               // Step 1: Add, clear, and re-add filters
               await this.page.getByRole('link', { name: 'Add Filter +' }).click();
               await this.page.waitForTimeout(1000); // Pause for 1 second
               await this.page.getByRole('button', { name: 'Add Filter' }).click();
               await this.page.waitForTimeout(1000);
               await this.page.getByRole('link', { name: 'Clear All' }).click();
               await this.page.waitForTimeout(1000);
               await this.page.getByRole('link', { name: 'Add Filter +' }).click();

               // Step 2: Interact with the textbox
               const textbox = this.page.getByRole('textbox').nth(2);
               await textbox.waitFor({ state: 'visible' });
               await textbox.click();
               await this.page.waitForTimeout(500); // Short pause for visibility
               await textbox.fill('212121212');

               // Step 3: Add and verify filter
               await this.page.getByRole('button', { name: 'Add Filter' }).click();
               await this.page.waitForTimeout(1000);
               await this.page.waitForSelector('text=No results found for this', { timeout: 5000 });
               await this.page.getByText('No results found for this').click();
               await this.page.waitForTimeout(1000);
               await this.page.getByRole('link', { name: 'Clear All' }).click();

               // Step 4: Repeat with different inputs
               await this.page.getByRole('link', { name: 'Add Filter +' }).click();
               await this.page.waitForTimeout(500);
               await textbox.click();
               await textbox.fill('101');
               await this.page.getByRole('button', { name: 'Add Filter' }).click();
               await this.page.waitForTimeout(1000);
               await this.page.getByRole('link', { name: 'Clear All' }).click();

               // Add filters with different types and verify results
               // Example for "Description"
               await this.page.getByRole('link', { name: 'Add Filter +' }).click();
               await this.page.getByRole('combobox').selectOption('Description');
               await this.page.waitForTimeout(500);
               await this.page.getByRole('textbox').nth(2).click();
               await this.page.getByRole('textbox').nth(2).fill('test');
               await this.page.getByRole('button', { name: 'Add Filter' }).click();
               await this.page.waitForTimeout(1000);
               await this.page.getByRole('cell', { name: 'Test', exact: true }).click();
               await expect(this.page.locator('tbody')).toContainText('Test');
               await this.page.waitForTimeout(1000);

               // Add similar filters for CouponType and verify
               await this.page.getByRole('link', { name: 'Clear All' }).click();
               await this.page.getByRole('link', { name: 'Add Filter +' }).click();
               await this.page.getByRole('combobox').selectOption('CouponType');
               await this.page.waitForTimeout(500);
               await this.page.getByRole('textbox').nth(2).click();
               await this.page.getByRole('textbox').nth(2).fill('gift');
               await this.page.getByRole('button', { name: 'Add Filter' }).click();
               await this.page.waitForTimeout(1000);
               await this.page.locator('td:nth-child(3)').first().click();
               await expect(this.page.locator('tbody')).toContainText('tiered gifting');
          } catch (error) {
               console.error('Error in verifyCouponFilters:', error);
               throw error; // Rethrow to fail the test if needed
          }
     }




     async validateRequiredTexts() {
          await expect(this.page.getByText('Required').first()).toBeVisible();
          await expect(this.page.getByText('Required').nth(1)).toBeVisible();
          await expect(this.page.getByText('Required').nth(2)).toBeVisible();
     }

     async fillDetailsWithSelectorTypeAsDollar() {
          await expect(this.page.getByLabel('Description')).toBeVisible();
          await this.page.getByLabel('Description').click();
          await this.page.getByLabel('Description').fill(faker.string.alpha({ length: { min: 5, max: 10 } }));
          await this.page.locator('div').filter({ hasText: /^From\*Required$/ }).getByPlaceholder('Ex.1').click();
          await this.page.locator('div').filter({ hasText: /^From\*Required$/ }).getByPlaceholder('Ex.1').fill(faker.number.int({ min: 10, max: 100 }).toString());
          await this.page.locator('div').filter({ hasText: /^To\*Required$/ }).getByPlaceholder('Ex.1').click();
          await this.page.locator('div').filter({ hasText: /^To\*Required$/ }).getByPlaceholder('Ex.1').fill(faker.number.int({ min: 10, max: 100 }).toString());
          await this.page.locator('div').filter({ hasText: /^Dollar$/ }).first().click();
          await this.page.locator('div').filter({ hasText: /^Amount\*Required$/ }).getByPlaceholder('Ex.1').click();
          await this.page.locator('div').filter({ hasText: /^Amount\*Required$/ }).getByPlaceholder('Ex.1').fill(faker.number.int({ min: 10, max: 100 }).toString());
     }

     async fillDetailsWithSelectorTypeAsPercentage() {
          await expect(this.page.getByLabel('Description')).toBeVisible();
          await this.page.getByLabel('Description').click();
          await this.page.getByLabel('Description').fill(faker.string.alpha({ length: { min: 5, max: 10 } }));
          await this.page.getByRole('checkbox').check();
          await this.page.locator('div').filter({ hasText: /^From\*Required$/ }).getByPlaceholder('Ex.1').click();
          await this.page.locator('div').filter({ hasText: /^From\*Required$/ }).getByPlaceholder('Ex.1').fill(faker.number.int({ min: 10, max: 100 }).toString());
          await this.page.locator('div').filter({ hasText: /^To\*Required$/ }).getByPlaceholder('Ex.1').click();
          await this.page.locator('div').filter({ hasText: /^To\*Required$/ }).getByPlaceholder('Ex.1').fill(faker.number.int({ min: 10, max: 100 }).toString());
          await this.page.locator('div').filter({ hasText: /^Percentage$/ }).first().click();
          await this.page.locator('div').filter({ hasText: /^Amount\*Required$/ }).getByPlaceholder('Ex.1').click();
          await this.page.locator('div').filter({ hasText: /^Amount\*Required$/ }).getByPlaceholder('Ex.1').fill(faker.number.int({ min: 10, max: 100 }).toString());
     }

     async fillRestrictions(restriction: string): Promise<void> {
          await expect(this.page.locator('#restriction')).toBeVisible({ timeout: 60000 });
          await this.page.locator('#restriction').scrollIntoViewIfNeeded();
          await this.page.locator('#restriction').click();
          await this.page.locator('#restriction').fill(restriction);
          await this.page.waitForTimeout(6000);
     }

     async clickSaveButton() {
          await expect(this.saveBtn).toBeVisible({ timeout: 60000 });
          await this.saveBtn.scrollIntoViewIfNeeded();
          await this.saveBtn.click();
     }

     async checkAndClickCreateCouponButton(page: Page): Promise<void> {
          const button = this.page.getByRole('button', { name: 'Create Coupon' });
          // Check if the button is disabled
          const isDisabled = await button.isDisabled();
          if (!isDisabled) {
               // Button is enabled, click it
               await button.click();
               console.log("Button was enabled and clicked.");
          } else {
               console.log("Button is disabled, cannot click.");
          }
     }

     async validateIncorrectResctrictionFormatMsg() {
          await this.page.focus('#restriction');
          await this.page.keyboard.press('Enter');
          await expect(this.incorrectResctrictionFormatMsg).toBeVisible({ timeout: 60000 });
          await this.incorrectResctrictionFormatMsg.scrollIntoViewIfNeeded();
          let text = await this.incorrectResctrictionFormatMsg.textContent();
          return text;
     }

     async getTableHeaders(): Promise<string[]> {
          // Wait for the headers to be visible
          const headerLocator = this.page.locator('tr[role="row"] th span');
          await expect(headerLocator).toHaveCount(8, { timeout: 60000 }); // Ensure 8 headers are present
          await headerLocator.first().scrollIntoViewIfNeeded(); // Scroll the first header into view if necessary

          // Retrieve all header text content
          const headers = await headerLocator.allTextContents();
          return headers.map(header => header.trim()); // Trim whitespace for consistency
     }

     async clickPreviousButton(): Promise<boolean> {
          // Ensure the Previous button is visible and scrolled into view
          await expect(this.previousBtn).toBeVisible({ timeout: 60000 });
          await this.previousBtn.scrollIntoViewIfNeeded();
          // Check if the button is disabled
          const isDisabled = await this.previousBtn.isDisabled();
          if (!isDisabled) {
               // If enabled, click the button
               await this.previousBtn.click();
               await this.page.waitForTimeout(6000);
          } else {
               expect(isDisabled).toBe(true); // Validate that it's disabled
          }
          // Return the disabled state for further validation in step file
          return isDisabled;
     }

     async clickNextButton(): Promise<boolean> {
          await expect(this.nextBtn).toBeVisible({ timeout: 60000 });
          await this.nextBtn.scrollIntoViewIfNeeded();
          // Check if the button is enabled (not disabled)
          const isEnabled = !(await this.nextBtn.isDisabled());
          if (isEnabled) {
               // If enabled, click the button
               console.log("Next button is enabled. Clicking the button.");
               await this.nextBtn.click();
               await this.page.waitForTimeout(6000);
          } else {
               // Log and validate that the button is disabled
               console.log("Next button is disabled. Cannot click.");
               expect(isEnabled).toBe(true); // Validate that the button is enabled
          }
          // Return the button's enabled state for further validation in step file
          return isEnabled;
     }


     async clickEditFirstRecord() {
          await expect(this.editFirstRecord).toBeVisible({ timeout: 60000 });
          await this.editFirstRecord.scrollIntoViewIfNeeded();
          await this.editFirstRecord.click();
     }

     async clickUpdateCouponBtn() {
          await expect(this.updateCouponBtn).toBeVisible({ timeout: 60000 });
          await this.updateCouponBtn.scrollIntoViewIfNeeded();
          await this.updateCouponBtn.click();
     }

     async editDescription() {
          await this.page.locator('div').filter({ hasText: /^DetailsEdit$/ }).getByRole('button').click();
          await this.page.getByLabel('Description').click();
          await this.page.getByLabel('Description').clear();
          await this.page.getByLabel('Description').fill(faker.string.alpha({ length: { min: 5, max: 10 } }));
     }

     async validateEditCouponText() {
          await expect(this.editCouponText).toBeVisible({ timeout: 60000 });
          await this.editCouponText.scrollIntoViewIfNeeded();
          let text = await this.editCouponText.textContent();
          return text;
     }

     async validateExitCreateCouponText() {
          await expect(this.exitCreateCouponText).toBeVisible({ timeout: 60000 });
          await this.exitCreateCouponText.scrollIntoViewIfNeeded();
          let text = await this.exitCreateCouponText.textContent();
          return text;
     }
     async validateAreYouSureYouWantToExitText() {
          await expect(this.areYouSureYouWantToExitText).toBeVisible({ timeout: 60000 });
          await this.areYouSureYouWantToExitText.scrollIntoViewIfNeeded();
          let text = await this.areYouSureYouWantToExitText.textContent();
          return text;
     }

     async clickBackToCouponsLink() {
          await expect(this.backToCouponsLink).toBeVisible({ timeout: 60000 });
          await this.backToCouponsLink.scrollIntoViewIfNeeded();
          await this.backToCouponsLink.click();
     }

     async clickCloseButtonInExitCreateCoupon() {
          await expect(this.closeBtnInExitCreateCoupon).toBeVisible({ timeout: 60000 });
          await this.closeBtnInExitCreateCoupon.scrollIntoViewIfNeeded();
          await this.closeBtnInExitCreateCoupon.click();
     }

     async clickNoButtonInExitCreateCoupon() {
          await expect(this.noBtnInExitCreateCoupon).toBeVisible({ timeout: 60000 });
          await this.noBtnInExitCreateCoupon.scrollIntoViewIfNeeded();
          await this.noBtnInExitCreateCoupon.click();
     }

     async clickYesButtonInExitCreateCoupon() {
          await expect(this.yesBtnInExitCreateCoupon).toBeVisible({ timeout: 60000 });
          await this.yesBtnInExitCreateCoupon.scrollIntoViewIfNeeded();
          await this.yesBtnInExitCreateCoupon.click();
     }

     async validateCouponCreatedSuccessfullyMsg() {
          await expect(this.couponCreatedSuccessfullyMsg).toBeVisible({ timeout: 6000 });
            await this.couponCreatedSuccessfullyMsg.scrollIntoViewIfNeeded();
          let text = await this.couponCreatedSuccessfullyMsg.textContent();
          return text;
     }

     async validateCouponUpdatedSuccessfullyMsg() {
          await expect(this.couponUpdatedSuccessfullyMsg).toBeVisible({ timeout: 6000 });
            await this.couponUpdatedSuccessfullyMsg.scrollIntoViewIfNeeded();
          let text = await this.couponUpdatedSuccessfullyMsg.textContent();
          return text;
     }








}