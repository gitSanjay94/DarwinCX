import { expect, FrameLocator, Locator, type Page, BrowserContext } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class MySite_v2Page {

  page: Page;
  readonly signInText: Locator;
  readonly myBakeFromScratchSubscriptionText: Locator;
  readonly bakeFromScratchText: Locator;
  readonly status: Locator;
  readonly expirationIssue: Locator;
  readonly accountID: Locator;
  readonly fullName: Locator;
  readonly itemVictoria: Locator;
  readonly myDetails: Locator;
  readonly myVictoriaSubscriptionText: Locator;
  readonly email: Locator;
  readonly signInButton: Locator;
  readonly signUpText: Locator;
  readonly needAnAccountText: Locator;
  readonly signUpAndCreateANewAccountText: Locator;
  readonly retypeEmailTF: Locator;
  readonly signUpButton: Locator;
  readonly anAccountWithTheGivenEmailAlreadyExistsText: Locator;
  readonly emailTF: Locator;
  readonly emailText: Locator;
  readonly passwordText: Locator;
  readonly passwordTF: Locator;
  readonly retypeEmailText: Locator;
  readonly thankYouForSigningUpToManageYourSubscriptionText: Locator;
  readonly purchaseNowButton: Locator;
  readonly usernameTF: Locator;
  readonly signIn: Locator;
  readonly signInAlert: Locator;
  readonly logOut: Locator;
  readonly myAccountDetailsText: Locator;
  readonly accountIDs: Locator;
  readonly editInfo: Locator;
  readonly contactCustmerService: Locator;
  readonly courageCXMagazineTab: Locator;

  readonly renewNowButton: Locator;
  readonly payBillButton: Locator;
  readonly placeOrderButton: Locator;


  readonly accountStatusText: Locator;
  readonly subscriptionPreferencesText: Locator;
  readonly subscriptionRecordUpdatedText: Locator;
  readonly submitButton: Locator;
  readonly tileElements: Locator;
  readonly autoRenewInfoText: Locator;
  readonly editBillingInfoButton: Locator;
  readonly editMyBillingInfoText: Locator;
  readonly updateButton: Locator;
  readonly yourCardNumberIsIncompleteText: Locator;


  constructor(page: Page) {
    this.page = page;
    this.signInText = page.getByText('Account Number Or Email Address');
    this.usernameTF = page.locator('#signInFormUsername');
    this.passwordTF = page.locator('#signInFormPassword');
    this.signIn = page.getByLabel('submit')
    this.myBakeFromScratchSubscriptionText = page.getByText('My Bake from Scratch')
    this.bakeFromScratchText = page.getByText('Bake from Scratch', { exact: true })
    this.status = page.locator("//div[contains(@class, 'MuiGrid-item') and contains(text(), 'Active')]");
    this.expirationIssue = page.locator("//div[text()='Expiration Issue:']/parent::div").first()
    this.accountID = page.locator("//div[text()='Account ID:']/parent::div").first()
    this.fullName = page.locator("//div[text()='Full Name']/parent::div")
    this.email = page.locator("//div[text()='Email']/parent::div")
    this.itemVictoria = page.getByText('Victoria')
    this.myDetails = page.getByText('My Details')
    this.myVictoriaSubscriptionText = page.getByText('My Victoria Subscription')
    this.signInButton = page.getByRole('button', { name: 'Sign In' })
    this.signUpText = page.getByText('Sign Up')
    this.needAnAccountText = page.getByText('Need an account?')
    this.signUpAndCreateANewAccountText = page.getByRole('heading', { name: 'Sign up and create a new' })
    this.retypeEmailTF = page.getByPlaceholder('Retype Email')
    this.signUpButton = page.getByRole('button', { name: 'Sign Up' })
    this.anAccountWithTheGivenEmailAlreadyExistsText = page.getByText('An account with the given')
    this.emailTF = page.getByPlaceholder('Email', { exact: true })
    this.emailText = page.locator("//label[text()='customer_id']")
    this.retypeEmailText = page.locator("//label[text()='Retype Email']")
    this.passwordText = page.locator("//label[text()='Password']")
    // this.passwordTF = page.getByPlaceholder('Password')
    this.thankYouForSigningUpToManageYourSubscriptionText = page.getByText('Thank you for signing up to manage your subscription(s).')
    this.purchaseNowButton = page.getByRole('button', { name: 'Purchase Now' })
    this.signInAlert = page.locator("//span[@class='text-danger']/ul/li[text()='Customer Not Found']")
    this.logOut = page.locator("//button[normalize-space()='Logout']")
    this.myAccountDetailsText = page.locator("//h2[@class='MuiTypography-root MuiTypography-h6 my-paper-header css-s54g3x' and text()='Account Status']")
    this.accountIDs = page.locator("//div[contains(@class, 'MuiGrid-item') and contains(text(), '869178295')]")
    this.editInfo = page.getByRole('button', { name: 'Edit Info' })
    this.contactCustmerService = page.getByRole('button', { name: 'Contact Customer Service' })
    this.courageCXMagazineTab = page.locator("//button[normalize-space()='Courage CX Magazine']")

    this.renewNowButton = page.getByRole('button', { name: 'Renew Now' })
      this.payBillButton = page.getByRole('button', { name: 'Pay Bill' })
      this.placeOrderButton = page.getByRole('button', { name: 'Pay Bill' })
  
    this.accountStatusText = page.getByText("Account Status")
    this.subscriptionPreferencesText = page.getByText("Subscription Preferences")
    this.subscriptionRecordUpdatedText = page.locator('//*[@id="root"]/div/div/div[9]/div/div[2]')
    this.submitButton = page.locator('//*[@id="root"]/div/div/div[4]/div[3]/div/div/div[2]/form/div/button')
    this.tileElements = page.locator('img[alt^="tile_"]')
    this.autoRenewInfoText = page.getByText('Auto Renew Info')
    this.editBillingInfoButton = page.getByRole('button', {name:'Edit Billing Info'})
    this.editMyBillingInfoText = page.getByText('Edit My Billing Info')
    this.updateButton = page.locator('//*[@id="stripeSubmit"]/button')
    this.yourCardNumberIsIncompleteText = page.getByText('Your card number is incomplete.')

  }

  async validateSignInText() {
    await expect(this.signInText).toBeVisible({ timeout: 60000 });
    await this.signInText.scrollIntoViewIfNeeded();
    let text = await this.signInText.textContent();
    return text;
  }

  async validateMyBakeFromScratchSubscriptionText() {
    await expect(this.myBakeFromScratchSubscriptionText).toBeVisible({ timeout: 60000 });
    await this.myBakeFromScratchSubscriptionText.scrollIntoViewIfNeeded();
    let text = await this.myBakeFromScratchSubscriptionText.textContent();
    return text;
  }

  async validateBakeFromScratchText() {
    await expect(this.bakeFromScratchText).toBeVisible({ timeout: 60000 });
    await this.bakeFromScratchText.scrollIntoViewIfNeeded();
    let text = await this.bakeFromScratchText.textContent();
    return text;
  }

  async getStatus() {
    await expect(this.status).toBeVisible({ timeout: 60000 });
    await this.status.scrollIntoViewIfNeeded();
    let text = await this.status.textContent();
    return text;
  }

  async getExpirationIssue() {
    await expect(this.expirationIssue).toBeVisible({ timeout: 60000 });
    await this.expirationIssue.scrollIntoViewIfNeeded();
    let text = await this.expirationIssue.textContent();
    return text;
  }

  async getAccountID() {
    await expect(this.accountID).toBeVisible({ timeout: 60000 });
    await this.accountID.scrollIntoViewIfNeeded();
    let text = await this.accountID.textContent();
    return text;
  }

  async getFullName() {
    await expect(this.fullName).toBeVisible({ timeout: 60000 });
    await this.fullName.scrollIntoViewIfNeeded();
    let text = await this.fullName.textContent();
    return text;
  }

  async getEmail() {
    await expect(this.email).toBeVisible({ timeout: 60000 });
    await this.email.scrollIntoViewIfNeeded();
    let text = await this.email.textContent();
    return text;
  }

  async clickItemVictoria() {
    await expect(this.itemVictoria).toBeVisible({ timeout: 60000 });
    await this.itemVictoria.scrollIntoViewIfNeeded();
    await this.itemVictoria.click();
  }

  async clickCXMagazineTab() {
    await expect(this.courageCXMagazineTab).toBeVisible({ timeout: 60000 });
    await this.courageCXMagazineTab.scrollIntoViewIfNeeded();
    await this.courageCXMagazineTab.click();
    await this.page.waitForTimeout(5000);
  }

  async validateMyDetailsText() {
    await expect(this.myDetails).toBeVisible({ timeout: 60000 });
    await this.myDetails.scrollIntoViewIfNeeded();
    let text = await this.myDetails.textContent();
    return text;
  }

  async validateMyVictoriaSubscriptionText() {
    await expect(this.myVictoriaSubscriptionText).toBeVisible({ timeout: 60000 });
    await this.myVictoriaSubscriptionText.scrollIntoViewIfNeeded();
    let text = await this.myVictoriaSubscriptionText.textContent();
    return text;
  }

  async clickSignInButton() {
    await this.page.waitForTimeout(8000);
    await expect(this.signInButton).toBeVisible({ timeout: 60000 });
    await this.signInButton.scrollIntoViewIfNeeded();
    await this.signInButton.click();
  }

  async clickSignUp() {
    await this.page.waitForTimeout(8000);
    await expect(this.signUpText).toBeVisible({ timeout: 60000 });
    await this.signUpText.scrollIntoViewIfNeeded();
    await this.signUpText.click();
  }

  async validateNeedAnAccountText() {
    await expect(this.needAnAccountText).toBeVisible({ timeout: 60000 });
    await this.needAnAccountText.scrollIntoViewIfNeeded();
    let text = await this.needAnAccountText.textContent();
    return text;
  }

  async validateSignUpAndCreateANewAccountText() {
    await expect(this.signUpAndCreateANewAccountText).toBeVisible({ timeout: 60000 });
    await this.signUpAndCreateANewAccountText.scrollIntoViewIfNeeded();
    let text = await this.signUpAndCreateANewAccountText.textContent();
    return text;
  }

  async fillRetypeEmailTF(email: string) {
    await expect(this.retypeEmailTF).toBeVisible({ timeout: 60000 });
    await this.retypeEmailTF.scrollIntoViewIfNeeded();
    await this.retypeEmailTF.fill(email);
  }

  async clickSignUpButton() {
    await expect(this.signUpButton).toBeVisible({ timeout: 60000 });
    await this.signUpButton.scrollIntoViewIfNeeded();
    await this.signUpButton.click();
  }

  async validateAnAccountWithTheGivenEmailAlreadyExistsText() {
    await expect(this.anAccountWithTheGivenEmailAlreadyExistsText).toBeVisible({ timeout: 60000 });
    await this.anAccountWithTheGivenEmailAlreadyExistsText.scrollIntoViewIfNeeded();
    let text = await this.anAccountWithTheGivenEmailAlreadyExistsText.textContent();
    return text;
  }

  async fillEmailAndPassword() {
    await expect(this.emailText).toBeVisible({ timeout: 60000 });
    await this.emailText.scrollIntoViewIfNeeded();
    await expect(this.emailTF).toBeVisible({ timeout: 60000 });
    await this.emailTF.scrollIntoViewIfNeeded();
    await this.emailTF.fill(faker.internet.email());
    let email = await this.emailTF.inputValue();
    await expect(this.retypeEmailText).toBeVisible({ timeout: 60000 });
    await this.retypeEmailText.scrollIntoViewIfNeeded();
    await expect(this.retypeEmailTF).toBeVisible({ timeout: 60000 });
    await this.retypeEmailTF.scrollIntoViewIfNeeded();
    await this.retypeEmailTF.fill(email)
    await expect(this.passwordText).toBeVisible({ timeout: 60000 });
    await this.passwordText.scrollIntoViewIfNeeded();
    await expect(this.passwordTF).toBeVisible({ timeout: 60000 });
    await this.passwordTF.scrollIntoViewIfNeeded();
    await this.passwordTF.fill('Test1234!');
  }

  async validateThankYouForSigningUpToManageYourSubscriptionText() {
    await expect(this.thankYouForSigningUpToManageYourSubscriptionText).toBeVisible({ timeout: 60000 });
    await this.thankYouForSigningUpToManageYourSubscriptionText.scrollIntoViewIfNeeded();
    let text = await this.thankYouForSigningUpToManageYourSubscriptionText.textContent();
    return text;
  }

  async clickPurchaseNowButton() {
    await expect(this.purchaseNowButton).toBeVisible({ timeout: 60000 });
    await this.purchaseNowButton.scrollIntoViewIfNeeded();
    await this.purchaseNowButton.click();
  }

  async getCurrentPageUrl() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      await this.purchaseNowButton.click()
    ]);
    await this.page.waitForTimeout(8000);
    const newurl = newPage.url();
    return newurl;
  }

  async fillUsernameTF(username: string) {
    await expect(this.usernameTF).toBeVisible({ timeout: 60000 });
    await this.usernameTF.scrollIntoViewIfNeeded();
    await this.usernameTF.fill(username);
  }
  async fillPasswordTF(password: string) {
    await expect(this.passwordTF).toBeVisible({ timeout: 60000 });
    await this.passwordTF.scrollIntoViewIfNeeded();
    await this.passwordTF.fill(password);
  }

  async clickSignIn() {
    await expect(this.signIn).toBeVisible({ timeout: 60000 });
    await this.signIn.scrollIntoViewIfNeeded();
    await this.signIn.click();
  }

  async validateAlertMsg() {
    await expect(this.signInAlert).toBeVisible({ timeout: 60000 });
    await this.signInAlert.scrollIntoViewIfNeeded();
    let text = await this.signInAlert.textContent();
    return text;
  }

  async clickLogOut() {
    await expect(this.logOut).toBeVisible({ timeout: 60000 });
    await this.logOut.scrollIntoViewIfNeeded();
    await this.logOut.click();
  }

  async validateMyAccountDetailsText() {
    await expect(this.myAccountDetailsText).toBeVisible({ timeout: 60000 });
    await this.myAccountDetailsText.scrollIntoViewIfNeeded();
    let text = await this.myAccountDetailsText.textContent();
    return text;
  }

  async validateAccountID() {
    await expect(this.accountIDs).toBeVisible({ timeout: 60000 });
    await this.accountIDs.scrollIntoViewIfNeeded();
    let text = await this.accountIDs.textContent();
    return text;
  }
  async clickEditInfoButton() {
    await expect(this.editInfo).toBeVisible({ timeout: 60000 });
    await this.editInfo.scrollIntoViewIfNeeded();
    await this.editInfo.click();
  }

  async updateCustomerInfo() {
    // await expect(this.editInfo).toBeVisible({ timeout: 60000 });
    // await this.editInfo.scrollIntoViewIfNeeded();
    // await this.editInfo.click();

    await this.page.locator('input[name="address2"]').click();
    await this.page.getByLabel('Address *').clear();
    await this.page.getByLabel('Address *').fill('111');
    await this.page.getByText('111 East 210th Street, The').click();
    await this.page.locator('input[name="city"]').clear();
    await this.page.locator('input[name="city"]').click();
    await this.page.locator('input[name="city"]').fill('Palm CoPalm coast');
    await this.page.getByRole('button', { name: 'Submit' }).scrollIntoViewIfNeeded();
    await this.page.getByRole('button', { name: 'Submit' }).click();
    // await page.getByRole('button', { name: 'Edit Info' }).click();
    // await page.getByRole('button', { name: 'Cancel' }).click();
    // await page.getByRole('button', { name: 'Edit Info' }).click();
    // await page.getByRole('button', { name: 'Submit' }).click();

  }

  async cancelUpdateInfo() {
    await this.page.getByRole('button', { name: 'Cancel' }).click();
    // await page.getByRole('button', { name: 'Edit Info' }).click();
    // await page.getByRole('button', { name: 'Submit' }).click();

  }
  async clickContactCustomerServiceButton() {
    await expect(this.contactCustmerService).toBeVisible({ timeout: 60000 });
    await this.contactCustmerService.scrollIntoViewIfNeeded();
    await this.contactCustmerService.click();
  }

  async fillContactCustomerService() {
    await this.page.getByLabel('Reason for contact').click();
    await this.page.getByRole('option', { name: 'Damaged' }).click();
    await this.page.getByLabel('Damaged').click();
    await this.page.getByRole('option', { name: 'Require Assistant' }).click();
    await this.page.getByLabel('Message').click();
    await this.page.getByLabel('Message').fill('This is sample messages! "Please have a look.\nThanks for update.');
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async validateAccountStatusText() {
    expect(this.accountStatusText).toBeVisible({ timeout: 60000 });
    await this.accountStatusText.scrollIntoViewIfNeeded();
    let text = await this.accountStatusText.textContent();
    return text;
  }

  async validateSubscriptionPreferencesText() {
    expect(this.subscriptionPreferencesText).toBeVisible({ timeout: 60000 });
    await this.subscriptionPreferencesText.scrollIntoViewIfNeeded();
    let text = await this.subscriptionPreferencesText.textContent();
    return text;
  }

  async validateSubscriptionRecordUpdatedText() {
    await this.subscriptionRecordUpdatedText.waitFor({ state: 'visible', timeout: 60000 });
    await this.subscriptionRecordUpdatedText.scrollIntoViewIfNeeded();
    let text = await this.subscriptionRecordUpdatedText.textContent();
    return text?.trim();
  }

  async clickSubmitButton() {
    expect(this.submitButton).toBeVisible({ timeout: 60000 });
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }

  async fillSubscriptionPreferencesSection() {
    await this.page.locator('div:nth-child(12) > .MuiInputBase-root > #demo-simple-select-helper').click();
    await this.page.getByRole('option', { name: 'Bicycles (primarily) sales/' }).click();
    await this.page.locator('[id="\\32 529"]').check();
    await this.page.locator('div:nth-child(27) > .MuiInputBase-root > #demo-simple-select-helper').click();
    await this.page.getByRole('option', { name: 'good' }).click();
  }

  async countTileElements(): Promise<number> {
    return await this.tileElements.count();
  }

  async clickAllTilesSimultaneously(): Promise<void> {
    const count = await this.countTileElements();
    const clickPromises = [];
    for (let i = 0; i < count; i++) {
      // Push the click action for each tile into an array
      clickPromises.push(this.tileElements.nth(i).click());
      await this.page.waitForTimeout(6000);
    }
    // Execute all click actions concurrently
    await Promise.all(clickPromises);

  }

  async validateAutoRenewInfoText(){
    expect(this.autoRenewInfoText).toBeVisible({timeout: 60000});
    await this.autoRenewInfoText.scrollIntoViewIfNeeded();
    let text = await this.autoRenewInfoText.textContent();
    return text;
  }

  async clickEditBillingInfoButton(){
    expect(this.editBillingInfoButton).toBeVisible({timeout: 60000});
    await this.editBillingInfoButton.scrollIntoViewIfNeeded();
    await this.editBillingInfoButton.click();
  }

  async validateEditMyBillingInfoText(){
    expect(this.editMyBillingInfoText).toBeVisible({timeout: 60000});
    await this.editMyBillingInfoText.scrollIntoViewIfNeeded();
    let text = await this.editMyBillingInfoText.textContent();
    return text;
  }

async clickUpdateButton() {
    await this.updateButton.waitFor({ state: 'visible' });
    // Ensure viewport is large enough
    await this.page.setViewportSize({ width: 1920, height: 1080 });
    // Get the element handle safely
    const elementHandle = await this.updateButton.elementHandle();
        if (elementHandle) {
        // Scroll into view smoothly
        await this.page.evaluate((el) => el.scrollIntoView({ behavior: "smooth", block: "center" }), elementHandle);
                // Wait for a short duration to allow scrolling to complete
        await this.page.waitForTimeout(500);
                // Click the button with force if necessary
        await elementHandle.click();
    } else {
        throw new Error("Update button element handle is null");
    }
}

  async validateYourCardNumberIsIncompleteText(){
    expect(this.yourCardNumberIsIncompleteText).toBeVisible({timeout: 60000});
    await this.yourCardNumberIsIncompleteText.scrollIntoViewIfNeeded();
    let text = await this.yourCardNumberIsIncompleteText.textContent();
    return text;
  }

  async enterCreditCardDetails(creditcard: string, expirydate: string,  cvv: string) {
   // Validate that all inputs are provided
  if (!creditcard || !expirydate || !cvv) {
    throw new Error('One or more input values are missing or invalid.');
  }

  // Debugging: Log the input values
  console.log('Card Number:', creditcard);  
  console.log('Card Expiry:', expirydate);   
  console.log('Card CVC:', cvv);

  // Wait for the popup page to appear
  // const page1Promise = this.page.waitForEvent('popup');
  // const page1 = await page1Promise;

  // Get the iframe context for the payment fields
  const iframe1 = this.page.frameLocator("//iframe[@title='Secure card number input frame']");

  // Wait and fill the card number field
  const cardNumberLocator = iframe1.getByPlaceholder('1234 1234 1234 1234')
  await cardNumberLocator.waitFor({ state: 'attached', timeout: 60000 });
  await cardNumberLocator.fill(creditcard);  // Fill card number

  // Wait and fill the expiration date field
  const iframe2 = this.page.frameLocator("//iframe[@title='Secure expiration date input frame']");
  const cardExpiryLocator = iframe2.getByPlaceholder('MM / YY')
  await cardExpiryLocator.waitFor({ state: 'attached', timeout: 60000 });
  await cardExpiryLocator.fill(expirydate);  // Fill card expiration

  // Wait and fill the CVC field
    const iframe3 = this.page.frameLocator("//iframe[@title='Secure CVC input frame']");
  const cardCvcLocator = iframe3.getByPlaceholder('CVC')
  await cardCvcLocator.waitFor({ state: 'attached', timeout: 60000 });
  await cardCvcLocator.fill(cvv);  // Fill card CVV
   
    await this.page.waitForTimeout(2000);
}



  async clickRenewNowButton() {
    await expect(this.renewNowButton).toBeVisible({ timeout: 60000 });
    await this.renewNowButton.scrollIntoViewIfNeeded();
    await this.renewNowButton.click();
  }

    async clickPayNowButton() {
    await expect(this.payBillButton).toBeVisible({ timeout: 60000 });
    await this.payBillButton.scrollIntoViewIfNeeded();
    await this.payBillButton.click();
  }

 async clickBillMeLater() {

  const page1Promise = this.page.waitForEvent('popup');
  const page1 = await page1Promise;
  await page1.getByLabel('Batch QA US 24/$').check();
  await page1.getByPlaceholder('Address Line 2 - Ex. e.g.').click();
   await page1.getByPlaceholder('Address Line 2 - Ex. e.g.').clear();
  await page1.getByPlaceholder('Address Line 2 - Ex. e.g.').fill('Test');
  await page1.getByLabel('Bill Me Later').check();
  await page1.getByRole('button', { name: 'Place Order' }).press('Enter');
}


async fillPaymentDetails(cardnumb: string, cardexp: string, cvc: string) {
  // Validate that all inputs are provided
  if (!cardnumb || !cardexp || !cvc) {
    throw new Error('One or more input values are missing or invalid.');
  }

  // Debugging: Log the input values
  console.log('Card Number:', cardnumb);  
  console.log('Card Expiry:', cardexp);   
  console.log('Card CVC:', cvc);

  // Wait for the popup page to appear
  const page1Promise = this.page.waitForEvent('popup');
  const page1 = await page1Promise;

  // Get the iframe context for the payment fields
  const iframe = page1.frameLocator("//iframe[@title='Secure payment input frame']");

  // Wait and fill the card number field
  const cardNumberLocator = iframe.locator("//input[@id='Field-numberInput']");
  await cardNumberLocator.waitFor({ state: 'attached', timeout: 60000 });
  await cardNumberLocator.fill(cardnumb);  // Fill card number

  // Wait and fill the expiration date field
  const cardExpiryLocator = iframe.locator("//input[@id='Field-expiryInput']");
  await cardExpiryLocator.waitFor({ state: 'attached', timeout: 60000 });
  await cardExpiryLocator.fill(cardexp);  // Fill card expiration

  // Wait and fill the CVC field
  const cardCvcLocator = iframe.locator("//input[@id='Field-cvcInput']");
  await cardCvcLocator.waitFor({ state: 'attached', timeout: 60000 });
  await cardCvcLocator.fill(cvc);  // Fill card CVC
  await page1.getByRole('button', { name: 'Pay Bill' }).click()
}

  async updateAddress(){
     await this.page.getByLabel('Address *').click();
  await this.page.getByLabel('Address *').fill('11 commerce blvd');
  await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
  }


    

}
