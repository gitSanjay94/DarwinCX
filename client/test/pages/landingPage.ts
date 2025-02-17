import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { CLIENT_ID } from '../../src/constants';



interface TransactionData {
  transactionDate: string | null;
  status: string | null;
  deliveryType: string | null;
  itemTotalPrice: string | null;
  itemName: string | null;
  itemQuantity: string | null;
  marketing_code: string | null;
  remaining: string | null;
}

interface ActionsData {
  actionSubtype: string | null;
  actionDetails: string | null;
}


let nameTXT: string;
export class landingPage {
  page: Page;
  readonly searchText: Locator;
  readonly searchButton: Locator;
  readonly clientDropDown: Locator;
  readonly addCustomerButton: Locator;
  readonly purchaseSubscriptionLink: Locator;
  readonly successMessage: Locator;
  readonly successMessageClose: Locator;
  readonly custInfo: Locator;
  readonly magazineExpiry: Locator;
  readonly cardExpiry: Locator;
  readonly agentName: Locator;
  readonly agenEmail: Locator;
  readonly description: Locator;
  readonly dateAdded: Locator;
  readonly purchaseHistoryRows: Locator;
  readonly actionsRows: Locator;
  readonly purchaseHistoryLabel: Locator;
  readonly CommentLabel: Locator;
  readonly okLocator: Locator;
  readonly transactionConfirmationPopUp: Locator;
  readonly transactionConfirmationPoUpElements: Locator;
  readonly purchaseGift: Locator;
  readonly giftSentRows: Locator
  readonly giftReceivedRows: Locator
  readonly giftRecievedLabel: Locator
  readonly giftSentLabel: Locator
  readonly addCustomerButton2: Locator
  readonly cancelSusbsciptionButton: Locator;
  readonly subscriptionCancelledConfirmation: Locator;
  readonly exitButtonOnSubscriptionCancelledConfirmation: Locator;
  readonly sendWhileAwayButton: Locator;
  readonly freeExtensionButton: Locator
  readonly actionTab: Locator
  readonly suspendActionType: Locator
  readonly suspendActionDetails: Locator
  readonly partnerInfo: Locator
  readonly partnerFirstName: Locator;
  readonly updatedPartnerFirstName: Locator;
  readonly partnerLastName: Locator;
  readonly partnerEmail: Locator;
  readonly virtualItemNotFound: Locator;
  readonly actionType: Locator;
  readonly refreshPurchaseHistoryButton: Locator;
  readonly removedPartnerInfoTXT: Locator;
  readonly enrollAutorenewButton: Locator;
  readonly activeTXT: Locator;
  readonly didNotReceiveProductButton: Locator;
  readonly donationButton: Locator;
  readonly donationTabInPurchaseHistory: Locator;
  readonly donationInfo: Locator;
  readonly donationAmtInPurchaseHistory: Locator;
  readonly itemTotalPriceInAllPurchaseHistory: Locator;
  readonly deleteButton: Locator;
  readonly confirmButton: Locator;
  readonly activateButton: Locator;
  readonly markDeceasedButton: Locator;
  readonly markedAsDeceasedTXT: Locator;
  readonly removeDeceasedFlagButton: Locator;
  readonly markedAsDeletedTXT: Locator;
  readonly suspendDelivery: Locator;
  readonly accountOnDeliverySuspensionTXT: Locator;
  readonly unsuspendDelivery: Locator;
  readonly earlyAccess: Locator;
  readonly surveyDemographicTab: Locator;
  readonly surveyDemographicEditButton: Locator;
  readonly surveyDemographicUpdateInfoButton: Locator;
  readonly surveyDemographicDropDown: Locator
  readonly transactionConfirmationTXT: Locator;
  readonly successTXT: Locator;
  readonly OKButton: Locator;
  readonly messageTXT: Locator
  readonly demographicGender: Locator
  readonly paymentAccountManagementButton: Locator;
  readonly pastGiftRecipientsButton: Locator;
  readonly viewDetails: Locator;
  readonly goToPartnerAccountButton: Locator;
  readonly custEmail: Locator;
  readonly custInfoSection: Locator;
  readonly descriptionAfterSearchAndDelete: Locator;
  readonly purchaseHistoryCancelledSection: Locator;
  readonly labelMessages: Locator;
  readonly messageTextFromLabelMessages: Locator;
  readonly applyToAllMessageInput: Locator;
  readonly applyToAllButton: Locator;
  readonly suppressButton: Locator;
  readonly labelMessage1: Locator;
  readonly labelMessage2: Locator;
  readonly transactionID: Locator;
  readonly showChangePaymentMethodOptions: Locator;
  readonly selectPaymentMethod: Locator;
  readonly changePaymentMethod: Locator;
  readonly showCancellationOptions: Locator;
  readonly selectRefundMethodButton: Locator;
  readonly selectReasonButton: Locator;
  readonly selectReasonFromDD: Locator;
  readonly reasonDetail: Locator;
  readonly cancelTransaction: Locator;
  readonly updateAutorenewBillingButton: Locator;



  constructor(page: Page) {
    this.page = page;
    this.searchText = page.locator("//input[@name='dcx_query']");
    this.searchButton = page.getByRole('button', { name: 'Search', exact: true })
    this.clientDropDown = this.page.getByText('Darwin CX');
    this.addCustomerButton = page.locator("div[class='col'] button[type='button']")
    this.purchaseSubscriptionLink = page.getByRole('button', { name: 'purchase subscription' })// page.locator("//button[normalize-space()='purchase subscription']");
    this.successMessage = page.getByRole('heading', { name: 'Login Success!' });
    this.successMessageClose = page.getByLabel('Close');
    // this.custInfo = page.locator("//body/div[@id='root']/div[@id='app']/div[@class='container']/div[@class='row']/div[1]/div[1]/div[2]/div[1]/div[1]");
    this.custInfo = page.locator(".container .row > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)");
    this.magazineExpiry = page.locator('.pl-2').first();
    this.cardExpiry = page.locator("//div[@class='card-body']//div[2]//div[1]//div[1]");
    // this.partnerInfo = page.locator("//div[normalize-space(text())='Partner First Name:']/ancestor::div[@class='card-body']")
    this.partnerInfo = page.locator("//span[text()='Partner First Name:']/ancestor::div[@class='card-body']")
    this.agentName = page.locator("(//table[1]/tbody[1]/tr[1]/td[1])[1]");
    this.agenEmail = page.locator("(//table[1]/tbody[1]/tr[1]/td[2])[1]");
    this.description = page.locator("(//table[1]/tbody[1]/tr[1]/td[3])[1]");
    this.dateAdded = page.locator("(//table[1]/tbody[1]/tr[1]/td[4])[1]");
    this.purchaseHistoryRows = page.locator("(//div[@class='card-body']/div[@class='container']/div[@class='table-responsive']/table)[1]/tbody[1]/tr");
    this.giftSentRows = page.locator("(//div[@class='card-body']/div[@class='container']/div[@class='table-responsive']/table)[2]/tbody[1]/tr");
    this.giftReceivedRows = page.locator("(//div[@class='card-body']/div[@class='container']/div[@class='table-responsive']/table)[3]/tbody[1]/tr");
    this.actionsRows = page.locator("//div[@class='card-body']/div[@class='container']//table[@class='table table-sm']/tbody/tr")
    this.purchaseHistoryLabel = page.getByText('Purchase History');
    this.giftSentLabel = page.getByText('Gifts Sent');
    this.giftRecievedLabel = page.getByText('Gifts Received');
    this.CommentLabel = page.getByText('Comments');
    this.okLocator = page.getByRole('button', { name: 'OK', exact: true })
    this.transactionConfirmationPopUp = page.locator(".modal-header>.modal-title");
    this.transactionConfirmationPoUpElements = page.locator(".modal-body > .container > .container > .d-flex > .col+div");
    this.purchaseGift = page.getByRole('button', { name: 'purchase/renew gift' })
    this.addCustomerButton2 = page.locator("button[class='btn btn-secondary']")
    this.cancelSusbsciptionButton = page.getByRole('button', { name: 'cancel subscription' })
    this.subscriptionCancelledConfirmation = page.getByText('Subscription Cancelled')
    this.exitButtonOnSubscriptionCancelledConfirmation = page.getByRole('button', { name: 'Exit' })
    this.sendWhileAwayButton = page.getByRole('button', { name: 'suspend while away' })
    this.freeExtensionButton = page.getByRole('button', { name: 'give free extension' })
    this.actionTab = page.locator('span').filter({ hasText: 'Actions' });
    this.suspendActionType = page.getByRole('cell', { name: 'Suspend while away' })
    this.suspendActionDetails = page.locator("(//tr/td[contains(text(),'Issues under suspension')])[1]")
    this.partnerFirstName = page.locator("//div[contains(text(),'Partner First Name:')]")
    this.updatedPartnerFirstName = page.locator("//span[text()='Partner First Name:']/parent::div")
    this.partnerLastName = page.locator("//div[contains(text(),'Partner Last Name:')]")
    this.partnerEmail = page.locator("//div[contains(text(),'Partner Email Address:')]")
    this.virtualItemNotFound = page.getByText('Virtual item not found.')
    this.actionType = page.getByRole('cell', { name: 'give free extension' }).first()
    this.refreshPurchaseHistoryButton = page.locator('div').filter({ hasText: 'Purchase HistoryAllDonation$' }).locator('div i')
    this.removedPartnerInfoTXT = page.getByText('Removed Partner Info ')
    this.enrollAutorenewButton = page.getByRole('button', { name: 'enroll autorenew' })
    this.activeTXT = page.locator("//span[text()='active']")
    this.didNotReceiveProductButton = page.getByRole('button', { name: 'did not receive product' })
    this.donationButton = page.getByRole('button', { name: 'donation' })
    this.donationTabInPurchaseHistory = page.locator("//span[normalize-space()='Donation']")
    this.donationInfo = page.locator("(//tr[contains(normalize-space(.), 'Donation')])[1]/parent::thead/following-sibling::tbody")
    this.donationAmtInPurchaseHistory = page.locator("//th[text()='Donation Amount']/ancestor::thead/following-sibling::tbody/tr/td[2]")
    this.itemTotalPriceInAllPurchaseHistory = page.locator("//th[text()='Item Total Price']/ancestor::thead/following-sibling::tbody/tr/td[6]")
    this.deleteButton = page.locator("//span[text()='Delete']")
    this.activateButton = page.locator("//span[text()='Activate']")
    this.confirmButton = page.locator("//button[text()='Confirm']")
    this.markDeceasedButton = page.locator("//span[text()='Mark Deceased']")
    this.markedAsDeceasedTXT = page.locator("//strong[text()='Marked as Deceased: 1']")
    this.removeDeceasedFlagButton = page.locator("//span[text()='Remove Deceased Flag']")
    this.markedAsDeletedTXT = page.locator("//strong[@class='text-danger' and text()='Marked as Deleted']")
    this.suspendDelivery = page.locator("//span[text()='Click to Suspend Delivery']")
    this.unsuspendDelivery = page.locator("//span[text()='Unsuspend']")
    this.accountOnDeliverySuspensionTXT = page.locator("//strong[text()='Account on Delivery Suspension']")
    this.earlyAccess = page.locator('label span').nth(1)
    this.surveyDemographicTab = page.getByText('Survey & Demographic')
    this.surveyDemographicEditButton = page.getByRole('button', { name: 'Edit' }).first()
    this.surveyDemographicUpdateInfoButton = page.locator("//button[normalize-space()='Update Info']")
    this.surveyDemographicDropDown = page.getByRole('combobox')
    this.transactionConfirmationTXT = page.getByText('Transaction Confirmation')
    this.successTXT = page.getByText('Success', { exact: true })
    this.OKButton = page.getByRole('button', { name: 'OK' })
    this.messageTXT = page.getByText('error happend when entering transaction queue')
    this.demographicGender = page.locator("//select[@name='gender']")
    this.viewDetails = page.getByText('View Detail')
    this.paymentAccountManagementButton = page.getByRole('button', { name: 'payment account management' })
    this.pastGiftRecipientsButton = page.getByRole('button', { name: 'past gift recipients' })
    this.goToPartnerAccountButton = page.getByRole('button', { name: 'Go to partner account' })
    this.custEmail = page.locator("//body/div[@id='root']/div[@id='app']/div[@class='container']/div[@class='row']/div[1]/div[1]/div[2]/descendant::div[contains(text(),'Email')]")
    this.custInfoSection = page.locator("//body/div[@id='root']/div[@id='app']/div[@class='container']/div[@class='row']/div[1]/div[1]/div[2]")
    this.descriptionAfterSearchAndDelete = page.locator("//table[1]/tbody[1]/tr[1]/td[3]/div[1]")
    this.purchaseHistoryCancelledSection = page.getByText('Cancelled')
    this.labelMessages = page.getByText('Label Messages')
    this.messageTextFromLabelMessages = page.locator("//td[text()='Zoomer Magazine']/following-sibling::td/input")
    this.applyToAllMessageInput = page.locator("//input[@name='applyToAllMessage']")
    this.applyToAllButton = page.getByText("Apply to all")
    this.suppressButton = page.locator("//td[text()='CARP Canada Membership']/following-sibling::td[4]")
    this.labelMessage1 = page.locator("//td[text()='CARP Canada Membership']/following-sibling::td[3]")
    this.labelMessage2 = page.locator("//td[text()='Zoomer Magazine']/following-sibling::td[3]")
    this.transactionID = page.locator(".container > .table-responsive > .table > tbody > tr > td > a").first();
    this.showChangePaymentMethodOptions = page.getByText('Show Change Payment Method Options')
    this.selectPaymentMethod = page.getByText('Select Payment Method')
    this.changePaymentMethod = page.locator("//button/div[text()='Change Payment Method']")
    this.showCancellationOptions = page.getByText('Show Cancellation Options')
    this.selectRefundMethodButton = page.locator("//button[text()='Select Refund Method']")
    this.selectReasonButton = page.locator("//button[contains(text(),'Select Reason')]")
    this.selectReasonFromDD = page.locator("//button[contains(text(),'NO TIME TO READ')]")
    this.reasonDetail = page.locator("//input[@name='reasonDetail']")
    this.cancelTransaction = page.locator("//button/div[text()='Cancel Transaction']")
    this.updateAutorenewBillingButton = page.locator("//button[text()='update autorenew billing']")
  }

  async clickViewDetailsInSubscriptions() {
    try {
      await expect(this.viewDetails).toBeVisible({ timeout: 30000 });
      await this.viewDetails.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }
  async clickDonationTabInPurchaseHistory() {
    try {
      await this.donationTabInPurchaseHistory.scrollIntoViewIfNeeded();
      await expect(this.donationTabInPurchaseHistory).toBeVisible({ timeout: 50000 });
      await this.donationTabInPurchaseHistory.click({ timeout: 50000, force: true })
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickRefreshPurchaseHistoryButton() {
    try {
      await this.purchaseHistoryLabel.scrollIntoViewIfNeeded();
      await expect(this.refreshPurchaseHistoryButton).toBeVisible({ timeout: 50000 });
      await this.refreshPurchaseHistoryButton.click({ timeout: 50000, force: true })
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }


  async getSelfAutorenewStatusAsActive() {
    try {
      await expect(this.activeTXT).toBeVisible({ timeout: 60000 })
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async getActionType() {
    try {
      await expect(this.suspendActionType.first()).toBeVisible({ timeout: 60000 });
      //  console.log("GetActionType  *********", await this.suspendActionType.first().textContent({ timeout: 20000 }))
      return await this.suspendActionType.first().textContent();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }
  async getActionDetail() {
    try {
      //  console.log("**********enter in getActionDetail()")
      await expect(this.suspendActionDetails).toBeVisible({ timeout: 40000 });
      //  console.log("getActionDetail  *************",await this.suspendActionDetails.textContent({ timeout: 20000 }))
      return await this.suspendActionDetails.textContent({ timeout: 30000 });
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }
  async selectActionTab() {
    try {
      await expect(this.actionTab).toBeVisible({ timeout: 10000 });
      await this.actionTab.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }
  async clickSendWhileAwayButton() {
    try {
      await expect(this.sendWhileAwayButton).toBeVisible({ timeout: 10000 });
      await this.sendWhileAwayButton.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickFreeExtensionButton() {
    try {
      await expect(this.freeExtensionButton).toBeVisible({ timeout: 10000 });
      await this.freeExtensionButton.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickOkOnTransactionConfirmation() {
    try {
      await expect(this.okLocator).toBeVisible({ timeout: 10000 });
      await this.okLocator.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickExitButtonOnSubscriptionCancelledConfirmation() {
    try {
      await expect(this.exitButtonOnSubscriptionCancelledConfirmation).toBeVisible({ timeout: 10000 });
      await this.exitButtonOnSubscriptionCancelledConfirmation.click();
    }
    catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async getSubscriptionCancelledConfirmation() {
    try {
      await expect(this.subscriptionCancelledConfirmation).toBeVisible({ timeout: 10000 });
      logger.info("Cancellation content ", await this.subscriptionCancelledConfirmation.textContent())
      return await this.subscriptionCancelledConfirmation.textContent()
    }
    catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  calcualtedExpiryDate(): string {
    let dateVar = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    //  console.log("calcualted value ", dateVar.toISOString().split('T')[0]);
    return dateVar.toISOString().split('T')[0];
  }


  async getPurchaseHistoryRowCount(): Promise<TransactionData[]> {
    try {
      await this.purchaseHistoryLabel.scrollIntoViewIfNeeded();
      await this.purchaseHistoryRows.first();
      let numberOfRows = await this.purchaseHistoryRows.count();
      logger.info(`Purchases History numberOfRows : ${numberOfRows}`);
      let arr: TransactionData[] = [];
      if (numberOfRows > 0) {
        arr = await this.getTransactionData(numberOfRows);
      }
      return arr;
    } catch (error) {
      console.error("Error in getPurchaseHistoryRowCount:", error);
      throw error;
    }
  }


  async getActionsRowCount(): Promise<ActionsData[]> {
    let numberOfRows = await this.actionsRows.count();
    if (numberOfRows > 0) {
      let arr = await this.getActionsData(numberOfRows);
      return arr;
    } else {
      // Handle case when there are no rows
      return [];
    }
  }



  async getGiftSentData(): Promise<TransactionData[]> {
    await this.giftSentLabel.scrollIntoViewIfNeeded();
    await this.giftSentRows.first();
    let numberOfRows = await this.giftSentRows.count();
    logger.info("Gift Sent NumberOfRows ", numberOfRows);

    if (numberOfRows > 0) {
      let arr = await this.getTransactionData(numberOfRows);
      logger.info("Actual array values for Gift sent ", arr)
      return arr;
    } else {
      logger.info("No rows found for Gift Sent");
      return [];
    }
  }

  async getGiftReceivedData(): Promise<TransactionData[]> {
    await this.giftRecievedLabel.scrollIntoViewIfNeeded();
    await this.giftReceivedRows.first();
    let numberOfRows = await this.giftReceivedRows.count();
    logger.info("Gift Sent NumberOfRows ", numberOfRows);

    // Check if numberOfRows is greater than 0
    if (numberOfRows > 0) {
      let arr = await this.getTransactionData(numberOfRows);
      logger.info("Actual array values for Gift received ", arr)
      return arr;
    } else {
      logger.info("No gift received data available.");
      return []; // or any other appropriate action
    }
  }


  async getActionsData(numberOfRows: number): Promise<ActionsData[]> {
    const arr = [];
    logger.info("NumberOfRows " + numberOfRows);
    for (let i = 1; i <= numberOfRows; i++) {
      const obj: ActionsData = {
        actionSubtype: null,
        actionDetails: null,
      };
      expect(await this.page.locator(`.col > .table > tbody > tr:nth-child(${i}) > td:nth-child(4)`)).toBeVisible({ timeout: 20000 });
      obj.actionSubtype = await this.page.locator(`.col > .table > tbody > tr:nth-child(${i}) > td:nth-child(4)`).textContent();
      expect(await this.page.locator(`.col > .table > tbody > tr:nth-child(${i}) > td:nth-child(6)`)).toBeVisible({ timeout: 20000 });
      obj.actionDetails = await this.page.locator(`.col > .table > tbody > tr:nth-child(${i}) > td:nth-child(6)`).textContent();
      arr.push(obj)
    }
    return arr
  }

  async getTransactionData(numberOfRows: number): Promise<TransactionData[]> {
    const arr = [];
    logger.info("NumberOfRows " + numberOfRows);
    for (let i = 1; i <= numberOfRows; i++) {
      const obj: TransactionData = {
        marketing_code: null,
        transactionDate: null,
        status: null,
        deliveryType: null,
        itemTotalPrice: null,
        itemName: null,
        itemQuantity: null,
        remaining: null
      };
      obj.itemQuantity = await this.page.locator(`.container > .table-responsive > .table > tbody > tr:nth-child(${i})> td:nth-child(3)`).textContent();
      obj.itemName = await this.page.locator(`.container > .table-responsive > .table > tbody > tr:nth-child(${i})> td:nth-child(4)`).textContent();
      obj.marketing_code = await this.page.locator(`.container > .table-responsive > .table > tbody > tr:nth-child(${i})> td:nth-child(5)`).textContent();
      obj.itemTotalPrice = await this.page.locator(`.container > .table-responsive > .table > tbody > tr:nth-child(${i})> td:nth-child(6)`).textContent();
      obj.deliveryType = await this.page.locator(`.container > .table-responsive > .table > tbody > tr:nth-child(${i})> td:nth-child(7)`).textContent();
      obj.status = await this.page.locator(`.container > .table-responsive > .table > tbody > tr:nth-child(${i})> td:nth-child(8)`).textContent();
      obj.remaining = await this.page.locator(`.container > .table-responsive > .table > tbody > tr:nth-child(${i})> td:nth-child(9)`).textContent();
      obj.transactionDate = await this.page.locator(`.container > .table-responsive > .table > tbody > tr:nth-child(${i})> td:nth-child(10)`).textContent();
      arr.push(obj)
    }
    return arr
  }

  async getAgentEmail(): Promise<string | null> {
    try {
      await expect(this.agenEmail).toBeVisible({ timeout: 60000 });
      return await this.agenEmail.textContent();
    } catch (error) {
      logger.error(`Element ${this.agenEmail} not found or not visible:`, error);
      console.error(`Element ${this.agenEmail} not found or not visible:`, error);
      return null;
    }
  }
  async getAgentName() {
     try {
      await this.CommentLabel.scrollIntoViewIfNeeded();
      await expect(this.agentName).toBeVisible({ timeout: 60000 });
      return await this.agentName.textContent();
    } catch (error) {
      console.error("Error occurred while getting agent name:", error);
      logger.error(`Element ${this.agentName} not found or not visible:`, error);
      return null;
    }
  }


  async getDescription(): Promise<string | null> {
    try {
      await expect(this.description).toBeVisible({ timeout: 60000 });
      return await this.description.textContent();
    } catch (error) {
      logger.error(`Element ${this.description} not found or not visible:`, error);
      console.error(`Element ${this.description} not found or not visible:`, error);
      return null;
    }
  }

  async getMagazineExpiry() {
    await expect(this.magazineExpiry).toBeVisible({ timeout: 60000 });
    const magExpiryElement = await this.magazineExpiry;
    if (!magExpiryElement) {
      throw new Error("Magazine Expiry element is not found");
    }

    const magExpiryText = await magExpiryElement.textContent();
    if (!magExpiryText) {
      throw new Error("Magazine Expiry text content is null");
    }

    const magExpiryDate = magExpiryText.split(": ")[1];
    logger.info("Magazine  Expiry ", magExpiryDate);
    if (!magExpiryDate) {
      throw new Error("Expiry Date is not getting populated correctly");
    }
    return magExpiryDate;
  }




  async getCardExpiry() {
    await expect(this.cardExpiry).toBeVisible({ timeout: 60000 });
    const magExpiryElement = await this.cardExpiry;

    if (!magExpiryElement) {
      throw new Error("CARP Card Expiry element is not found");
    }

    const magExpiryText = await magExpiryElement.textContent();

    if (!magExpiryText) {
      throw new Error("Magazine Expiry text content is null");

    }
    const magExpiryDate = magExpiryText.split(": ")[1];
    logger.info("CARP Card  Expiry ", magExpiryDate);
    if (!magExpiryDate) {
      throw new Error("Expiry Date is not getting populated correctly");
    }

    if (magExpiryDate.trim() === '') {
      throw new Error("Expiry Date is blank");
    }

    return magExpiryDate;
  }


  /**
   * Select the value from the client dropdown
   */
  async selectClient(clientName: string = CLIENT_ID) {
    try {
      await expect(this.clientDropDown).toBeVisible({ timeout: 60000 });
      await this.clientDropDown.click({ timeout: 60000 });
      await expect(this.page.getByText(clientName, { exact: true })).toBeVisible({ timeout: 60000 });
      await this.page.getByText(clientName, { exact: true }).click({ timeout: 60000 });
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }

  }

  /**
   * 
   * @param ValueToSearch is used to enter the search condition
   */
  async enterSearchCondition(ValueToSearch: string) {
    try {
      await expect(this.searchText).toBeVisible({ timeout: 60000 });
      await (this.searchText).fill(ValueToSearch);
    } catch (error) {
      logger.error(`Element ${this.searchText} not found or not visible:`, error);
      console.error(`Element ${this.searchText} not found or not visible:`, error);
    }
  }

  /**
   * Click the search Button to perform the search
   */
  async clickSearchButton() {
    try {
      await this.searchButton.waitFor({ state: 'attached', timeout: 20000 })
      await expect(this.searchButton).toBeEnabled({ timeout: 20000 });
      await (this.searchButton).dblclick({ timeout: 20000 });
    }
    catch (error) {
      logger.error(`Element ${this.searchButton} not found or not visible:`, error);
      console.error(`Element ${this.searchButton} not found or not visible:`, error);
    }
  }

  /**
   * 
   * @param toSearch is used to make the search based on the given search condition 
   * within selected client/product
   */
  async performSearch(toSearch: string, clientName: string) {
    try {
      await this.selectClient(clientName);
      await this.enterSearchCondition(toSearch);
      await this.clickSearchButton();

    }
    catch (error) {
      console.log("Unable to perform customer search")
      logger.error("Unable to perform customer search")
    }
  }

  /**
   * 
   * @param customerFirstName , is used to make the search based on the given customerFirstName
   * if customerFirstName does not exist then click ADD Customer Button to open the Add Customer form 
   */
  async openAddCustomerForm(customerFirstName: string, clientName: string = CLIENT_ID) {
    await this.performSearch(customerFirstName, clientName);
    await this.page.waitForTimeout(8000);
    await this.clickAddCustomerButton();
  }

  /**
   * To Click AddCustomer Button
   */
  async clickAddCustomerButton() {
    await this.addCustomerButton.waitFor({ state: 'attached', timeout: 10000 });
    await this.addCustomerButton.waitFor({ state: 'visible', timeout: 10000 });
   
    await expect(this.addCustomerButton).toBeAttached({ timeout: 10000 });
    await expect(this.addCustomerButton).toBeEnabled({ timeout: 50000 });
    await this.addCustomerButton.focus();
    await this.addCustomerButton.click({ timeout: 20000, force: true });
  }

  /**
   * Click PurchaseSubscription button
   */
  async clickPurchaseSubscription() {
    try {
      await this.purchaseSubscriptionLink.waitFor({ state: 'attached', timeout: 30000 })
      await expect(this.purchaseSubscriptionLink).toBeEnabled({ timeout: 30000 });
      await this.purchaseSubscriptionLink.click({ timeout: 30000 });
    } catch (error) {
      logger.error(`Element ${this.purchaseSubscriptionLink} not found or not visible:`, error);
      console.error(`Element ${this.purchaseSubscriptionLink} not found or not visible:`, error);
    }
  }

  /**
   * Return the Login Success message on successful login
   */
  async getSuccessMessage() {
    await Promise.all([
      expect(this.successMessage).toBeVisible({ timeout: 80000 }),
      logger.info("Login Success message is " + await this.successMessage.textContent()),
      // Add other async operations as needed
    ]);
    return await this.successMessage.textContent()
  }

  /**
  * Close the Login Success message popup/alert
  */
  async closeSuccessMessage() {
    try {
      await expect(this.successMessageClose).toBeEnabled({ timeout: 60000 });
      await this.successMessageClose.click();
    } catch (error) {
      logger.error(`Element ${this.successMessageClose} not found or not visible:`, error);
      console.error(`Element ${this.successMessageClose} not found or not visible:`, error);
    }
  }

  /**
   * 
   * @returns cutomer information/data after successful customer creation
   */
  async validateCustomerInfo(): Promise<string | null> {
    try {
      await this.custInfo.waitFor({ state: 'attached', timeout: 80000 })
      await expect(this.custInfo).toBeVisible({ timeout: 30000 });
      logger.info("Customer Info " + await this.custInfo.textContent());
      return await this.custInfo.textContent();
    }
    catch (error) {
      console.log(`Customer info does not exist`)
      throw error
    }
  }


  async paymentConfirmationMessage(): Promise<string | null> {
    return await this.fetchPaymentConfirmationSuccessresult();
  }

  async fetchPaymentConfirmationSuccessresult(): Promise<string | null> {
    await this.transactionConfirmationPopUp.waitFor({ state: 'attached' })
    await expect(this.transactionConfirmationPopUp).toBeVisible({ timeout: 60000 });
    return await this.transactionConfirmationPoUpElements.nth(1).textContent();

  }

  async clickPurchaseRenewButton() {
    try {
      await expect(this.purchaseGift).toBeVisible({ timeout: 60000 });
      await this.purchaseGift.click();
    } catch (error) {
      logger.error(`Element ${this.purchaseGift} not found or not visible:`, error);
      console.error(`Element ${this.purchaseGift} not found or not visible:`, error);
    }
  }

  async clickCancelSubscription() {
    try {
      await this.cancelSusbsciptionButton.waitFor({ state: 'visible', timeout: 60000 });
      await expect(this.cancelSusbsciptionButton).toBeVisible({ timeout: 20000 });
      await this.cancelSusbsciptionButton.click();
    } catch (error) {
      const errorMessage = `Error clicking cancel subscription button: ${error}`;
      logger.error(errorMessage);
      console.error(errorMessage);
    }
  }

  /**
   * 
   * @returns partner information/data after successful customer creation
   */
  async validatePartnerInfo(): Promise<string | null> {
    try {
      await expect(this.partnerInfo).toBeVisible({ timeout: 60000 });
      logger.info("Partner Info " + await this.partnerInfo.textContent());
      return await this.partnerInfo.textContent();
    }
    catch (error) {
      console.log(`Partner info does not exist`)
      logger.error('Partner info does not exist')
      throw error
    }

  }

  async getPartnerLastName() {
    try {
      await expect(this.partnerLastName).toBeVisible({ timeout: 60000 });
      let text = await this.partnerLastName.textContent();
      let result = await this.getSubstring(text, 20);
      return result;
    } catch (error) {
      console.error("Error getting partner last name:", error);
      logger.error('Error getting partner last name')
    }
  }


  async getPartnerFirstName() {
    try {
      await expect(this.partnerFirstName).toBeVisible({ timeout: 60000 });
      let text = await this.partnerFirstName.textContent();
      let result = await this.getSubstring(text, 20)
      return result;
    } catch (error) {
      logger.error(`Element ${this.partnerFirstName} not found or not visible:`, error);
      console.error(`Element ${this.partnerFirstName} not found or not visible:`, error);
    }
  }

  async getUpdatedPartnerFirstName() {
    await expect(this.updatedPartnerFirstName).toBeVisible({ timeout: 60000 });
    let text = await this.updatedPartnerFirstName.textContent();
    let result = await this.getSubstring(text, 20)
    return result;
  }

  async getSubstring(text: string | null, startIndex: number | null) {
    if (text != null && startIndex != null) {
      nameTXT = text.substring(startIndex);
    }
    return nameTXT;
  }

  async getPartnerEmail() {
    try {
      await expect(this.partnerEmail).toBeVisible({ timeout: 60000 });
      let text = await this.partnerEmail.textContent();
      let result = await this.getSubstring(text, 23)
      return result;
    } catch (error) {
      logger.error(`Element ${this.partnerFirstName} not found or not visible:`, error);
      console.error(`Element ${this.partnerFirstName} not found or not visible:`, error);
    }
  }

  async validateVirtualItemNotFoundMessage(): Promise<string | null> {
    try {
      await expect(this.virtualItemNotFound).toBeVisible({ timeout: 60000 });
      let messageTXT = await this.virtualItemNotFound.textContent()
      return messageTXT;
    } catch (error) {
      logger.error(`Element ${this.partnerFirstName} not found or not visible:`, error);
      console.error(`Element ${this.partnerFirstName} not found or not visible:`, error);
      throw error;
    }

  }

  async confirmCancelSubscription() {
    await this.clickExitButtonOnSubscriptionCancelledConfirmation();
  }


  async validateRemovedPartnerInfoTXT(): Promise<string | null> {
    await expect(this.removedPartnerInfoTXT).toBeVisible({ timeout: 60000 });
    await this.removedPartnerInfoTXT.scrollIntoViewIfNeeded()
    let messageTXT = await this.removedPartnerInfoTXT.textContent()
    return messageTXT;

  }
  /**
   * Click Enroll Autorenew button
   */
  async clickEnrollAutorenewButton() {
    try {
      await expect(this.enrollAutorenewButton).toBeVisible({ timeout: 60000 });
      await this.enrollAutorenewButton.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  /**
   * Click Did Not Receive Product button
   */
  async clickDidNotReceiveProductButton() {
    try {
      await expect(this.didNotReceiveProductButton).toBeVisible({ timeout: 60000 });
      await this.didNotReceiveProductButton.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  /**
   * Click Donation button
   */
  async clickDonationButton() {
    try {
      await this.donationButton.scrollIntoViewIfNeeded()
      await expect(this.donationButton).toBeVisible({ timeout: 60000 });
      await this.donationButton.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async validatePurchaseHistoryDonationSectionAfterDonation(): Promise<string | null> {
    await this.donationTabInPurchaseHistory.click();
    await this.donationInfo.waitFor({ state: 'attached', timeout: 60000 })
    let donationInfoTXT = await this.donationInfo.textContent();
    return donationInfoTXT;
  }

  async getDonationAmtInPurchaseHistory(): Promise<string | null> {
    await expect(this.donationAmtInPurchaseHistory).toBeVisible({ timeout: 60000 });
    let text = await this.donationAmtInPurchaseHistory.textContent();
    return text;
  }

  async getItemTotalPriceInAllPurchaseHistory(): Promise<string | null> {
    await expect(this.itemTotalPriceInAllPurchaseHistory).toBeVisible({ timeout: 60000 });
    let text = await this.itemTotalPriceInAllPurchaseHistory.textContent();
    return text;
  }

  async clickSuspendDelivery() {
    await this.suspendDelivery.click();
    await expect(this.confirmButton).toBeVisible({ timeout: 3000 });
    await this.confirmButton.click({ timeout: 50000, force: true })
  }


  async clickUnsuspendDelivery() {
    await expect(this.unsuspendDelivery).toBeVisible({ timeout: 3000 });
    await this.unsuspendDelivery.scrollIntoViewIfNeeded();
    await this.unsuspendDelivery.click();
  }

  /**
* Click Edit button under SurveyDemographic
*/
  async clickEditToUpdateDemographic() {
    await expect(this.surveyDemographicEditButton).toBeVisible({ timeout: 60000 });
    await this.surveyDemographicEditButton.scrollIntoViewIfNeeded();
    await this.surveyDemographicEditButton.click();
    await this.page.waitForTimeout(5000)
  }


  async clickActivateButton() {
    await this.page.waitForTimeout(10000)
    await expect(this.activateButton).toBeVisible({ timeout: 30000 });
    await this.activateButton.scrollIntoViewIfNeeded();
    await this.activateButton.click()
    await this.page.waitForTimeout(30000)
  }

  async clickDeleteButton() {
    await this.page.waitForTimeout(30000)
    await expect(this.deleteButton).toBeVisible({ timeout: 30000 });
    await this.deleteButton.scrollIntoViewIfNeeded();
    await this.deleteButton.click();
    await expect(this.confirmButton).toBeVisible({ timeout: 5000 });
    await this.confirmButton.click();
    await expect(this.markedAsDeletedTXT).toBeVisible({ timeout: 60000 });
  }

  async clickMarkDeceasedButton() {
    try {
      await expect(this.markDeceasedButton).toBeVisible({ timeout: 60000 });
      await this.markDeceasedButton.scrollIntoViewIfNeeded();
      await this.markDeceasedButton.click();
      await expect(this.confirmButton).toBeVisible({ timeout: 10000 });
      await this.confirmButton.click();
      await this.page.waitForTimeout(2000)
      await expect(this.removeDeceasedFlagButton).toBeVisible({ timeout: 60000 });
    }
    catch (error) {
      logger.error(`Element  not found or not visible:`, error);
      console.error(`Element not found or not visible:`, error);
    }
  }

  async clickRemoveDeceasedFlagButton() {
    try {
      await this.markedAsDeceasedTXT.scrollIntoViewIfNeeded();
      await expect(this.markedAsDeceasedTXT).toBeVisible({ timeout: 30000 });
      await expect(this.removeDeceasedFlagButton).toBeVisible({ timeout: 30000 });
      await this.removeDeceasedFlagButton.click();
      await this.page.waitForTimeout(2000)
      await expect(this.markDeceasedButton).toBeVisible({ timeout: 60000 });
    }
    catch (error) {
      logger.error(`Element not found or not visible:`, error);
      console.error(`Element not found or not visible:`, error);
    }
  }

  async extractAccountNumber() {
    const Text = await this.custInfo.innerText();
    const accountNumberMatch = Text.match(/Account Number: (\d+)/);
    if (accountNumberMatch) {
      const extractedAccountNumber = accountNumberMatch[1];
      logger.info('Extracted Account Number: ', extractedAccountNumber);
      return extractedAccountNumber;
    } else {
      logger.info('Account Number not found in the element text.');
    }
  }

  /* Update Gender Information
 */
  async selectGenderFromDropdown() {
    try {
      await expect(this.surveyDemographicDropDown).toBeVisible({ timeout: 60000 });
      await this.surveyDemographicDropDown.selectOption('2');
      await this.page.waitForTimeout(5000)
    }
    catch (error) {
      logger.error(`Element ${this.surveyDemographicDropDown} not found or not visible:`, error);
      console.error(`Element ${this.surveyDemographicDropDown} not found or not visible:`, error);
      return null
    }
  }

  async validateAccountOnDeliverySuspensionTXT(): Promise<string | null> {
    try {
      await this.page.waitForTimeout(40000);
      await this.accountOnDeliverySuspensionTXT.waitFor({ state: 'attached', timeout: 30000 })
      await expect(this.accountOnDeliverySuspensionTXT).toBeVisible({ timeout: 30000 });
      let text = await this.accountOnDeliverySuspensionTXT.textContent()
      return text;
    }
    catch (error) {
      logger.error(`Element ${this.accountOnDeliverySuspensionTXT} not found or not visible:`, error);
      console.error(`Element ${this.accountOnDeliverySuspensionTXT} not found or not visible:`, error);
      return null
    }
  }



  /**
 * Select SurveyDemographic Tab
 */
  async selectSurveyDemographicTab() {
    try {
      await this.surveyDemographicTab.scrollIntoViewIfNeeded()
      await expect(this.surveyDemographicTab).toBeVisible({ timeout: 60000 });
      await this.surveyDemographicTab.click();
    } catch (error) {
      logger.error(`Element ${this.surveyDemographicTab} not found or not visible:`, error);
      console.error(`Element ${this.surveyDemographicTab} not found or not visible:`, error);
    }
  }


  /**
* Select EarlyAccess Option
*/
  async selectEarlyAccessOption() {
    try {
      await expect(this.earlyAccess).toBeVisible({ timeout: 60000 });
      await this.earlyAccess.click();
    } catch (error) {
      logger.error(`Element ${this.earlyAccess} not found or not visible:`, error);
      console.error(`Element ${this.earlyAccess} not found or not visible:`, error);
    }

  }



  async transactionConfirmationPopup() {
    try {
      await expect(this.transactionConfirmationTXT).toBeVisible({ timeout: 60000 });
      await expect(this.successTXT).toBeVisible({ timeout: 60000 });
      return this.successTXT.textContent();
    }
    catch (error) {
      logger.error(`Element ${this.transactionConfirmationTXT} not found or not visible:`, error);
      console.error(`Element ${this.transactionConfirmationTXT} not found or not visible:`, error);
    }

  }


  /* Click Edit button under SurveyDemographic
  */
  async clickDemographicUpdateInfo() {
    try {
      await this.page.keyboard.press('Tab')
      await this.page.waitForTimeout(5000)
      await this.surveyDemographicUpdateInfoButton.focus()
      await expect(this.surveyDemographicUpdateInfoButton).toBeVisible({ timeout: 60000 });
      await this.surveyDemographicUpdateInfoButton.click({ timeout: 60000 })
    }
    catch (error) {
      logger.error(`Element ${this.surveyDemographicUpdateInfoButton} not found or not visible:`, error);
      console.error(`Element ${this.surveyDemographicUpdateInfoButton} not found or not visible:`, error);
    }
  }

  async validateSurveyGender() {
    await expect(this.demographicGender).toHaveValue("2")   // 1 way of validating the selected option :toHaveValue can be only used with Locator object
    const selectedtext = await this.page.$eval<string, HTMLSelectElement>("//select[@name='gender']", ele => ele.value) //2way
    logger.info("Selected SurveyGender is ******** ", selectedtext)
    return selectedtext
  }


  async getActionsType() {
    expect(await this.page.locator('.col > .table > tbody > tr > td:nth-child(3)').first()).toBeVisible({ timeout: 20000 })
    let result = await this.page.locator('.col > .table > tbody > tr > td:nth-child(3)').first().textContent()
    logger.info(result)
    if (result !== null && result !== undefined)
      return result
  }
  async getActionsSubType() {
    expect(await this.page.locator('.col > .table > tbody > tr > td:nth-child(4)').first()).toBeVisible({ timeout: 20000 })
    let result = await this.page.locator('.col > .table > tbody > tr > td:nth-child(4)').first().textContent()
    logger.info(result)
    if (result !== null && result !== undefined)
      return result
  }
  async getActionsDetails() {
    expect(await this.page.locator('.col > .table > tbody > tr > td:nth-child(6)').first()).toBeVisible({ timeout: 20000 })
    let result = await this.page.locator('.col > .table > tbody > tr > td:nth-child(6)').first().textContent()
    logger.info(result)
    if (result !== null && result !== undefined)
      return result
  }

  async clickPaymentAccountManagementButton() {
    await expect(this.paymentAccountManagementButton).toBeVisible({ timeout: 10000 });
    await this.paymentAccountManagementButton.click();
  }


  async clickPastGiftRecipientsButton() {
    await expect(this.pastGiftRecipientsButton).toBeVisible({ timeout: 30000 });
    await this.pastGiftRecipientsButton.click();
  }

  async clickGoToPartnerAccountButton() {
    await this.goToPartnerAccountButton.scrollIntoViewIfNeeded();
    await expect(this.goToPartnerAccountButton).toBeVisible({ timeout: 60000 });
    await this.goToPartnerAccountButton.click();
  }

  async extractCustEmail() {
    const emailText = await this.custEmail.innerText();
    const emailAddress = emailText.split(":")[1].trim();
    return emailAddress;
  }

  async getCustInfoSection() {
    const custInfoText = await this.custInfoSection.innerText();
    return custInfoText;
  }
  async clickCommentsSection() {
    await this.CommentLabel.scrollIntoViewIfNeeded();
    await expect(this.CommentLabel).toBeVisible({ timeout: 80000 });
    await this.CommentLabel.click();
  }

  async getDescriptionAfterSearchAndDelete() {
    await this.descriptionAfterSearchAndDelete.scrollIntoViewIfNeeded();
    await expect(this.descriptionAfterSearchAndDelete).toBeVisible({ timeout: 60000 });
    return await this.descriptionAfterSearchAndDelete.textContent();
  }

  async clickPurchaseHistoryCancelledSection() {
    await this.purchaseHistoryCancelledSection.scrollIntoViewIfNeeded();
    await expect(this.purchaseHistoryCancelledSection).toBeVisible({ timeout: 60000 });
    await this.purchaseHistoryCancelledSection.click();
  }

  async getPurchaseHistoryRows() {
    await this.purchaseHistoryLabel.scrollIntoViewIfNeeded();
    return this.purchaseHistoryRows.textContent();
  }
  async clickLabelMessagesSection() {
    await this.CommentLabel.scrollIntoViewIfNeeded();
    await expect(this.labelMessages).toBeVisible({ timeout: 80000 });
    await this.labelMessages.click();
  }

  async getMessageTextFromLabelMessages() {
    let messageText = await this.messageTextFromLabelMessages.innerText();
    return messageText;
  }

  async fillApplyToAllMessage(text: string) {
    await this.applyToAllMessageInput.fill(text);
    await this.applyToAllButton.click();
    await this.confirmButton.click();
  }

  async clickSuppressButton() {
    try {
      await expect(this.suppressButton).toBeVisible({ timeout: 8000 })
      await this.suppressButton.click();
      await this.confirmButton.click();
    }
    catch (error) {
      logger.error(`Element ${this.suppressButton} not found or not visible:`, error);
      console.error(`Element ${this.suppressButton} not found or not visible:`, error);
    }
  }

  async getLabelMessage1() {
    let messageText = await this.labelMessage1.innerText();
    return messageText;
  }

  async getLabelMessage2() {
    let messageText = await this.labelMessage2.innerText();
    return messageText;
  }

  async clickTransactionID() {
    await expect(this.transactionID).toBeVisible({ timeout: 10000 })
    await this.transactionID.click();
  }

  async clickShowChangePaymentMethodOptions() {
    await this.showChangePaymentMethodOptions.scrollIntoViewIfNeeded();
    await this.showChangePaymentMethodOptions.click();
  }

  async clickSelectPaymentMethod() {
    await expect(this.selectPaymentMethod).toBeVisible({ timeout: 10000 })
    await this.selectPaymentMethod.click();
  }

  async clickChangePaymentMethod() {
    try {
      if (await this.changePaymentMethod.isEnabled()) {
        await this.changePaymentMethod.click();
      } else if (await this.changePaymentMethod.isDisabled()) {
        console.error("Element is disabled.");
      } else {
        console.error("Element is neither enabled nor disabled.");
      }
    } catch (error) {
      console.error("Error occurred while attempting to click the element:", error);
    }
  }

  async selectPaymentMethodFromDD(selectPaymentMethod: string) {
    await this.page.getByRole('button', { name: `${selectPaymentMethod}` }).click();
  }

  async validatePaymentMethod(paymentMethod: string) {
    await expect(this.page.locator(`//td[text()='${paymentMethod}']`)).toBeVisible({ timeout: 10000 })
  }

  async changePaymentMethodToBeDisabled() {
    try {
      let element = this.page.locator("//button/div[text()='Change Payment Method']");
      await expect(element).toBeVisible({ timeout: 30000 });
      await expect(element).toBeDisabled({ timeout: 10000 });
      return element;
    } catch (error) {
      logger.error(`Element not found or not disabled: `, error);
      console.error(`Element not found or not disabled: `, error);
      throw error;
    }
  }

  async clickShowCancellationOptions() {
    await this.showCancellationOptions.scrollIntoViewIfNeeded();
    await this.showCancellationOptions.click();
  }

  async clickSelectRefundMethodButton() {
    await expect(this.selectRefundMethodButton).toBeVisible({ timeout: 10000 })
    await this.selectRefundMethodButton.click();
  }

  async selectRefundMethodFromDD(selectRefundMethod: string) {
    await this.page.locator(`//button[contains(text(),'${selectRefundMethod}')]`).click();
  }

  async selectReasonAndCancelTransaction() {
    await this.selectReasonButton.click();
    await this.selectReasonFromDD.click();
    await this.reasonDetail.fill('demo reason')
    await this.cancelTransaction.click();
  }

  async clickUpdateAutorenewBillingButton() {
    await expect(this.updateAutorenewBillingButton).toBeVisible({ timeout: 60000 })
    await this.updateAutorenewBillingButton.scrollIntoViewIfNeeded();
    await this.updateAutorenewBillingButton.click();
  }

  async isUpdateAutorenewBillingButtonEnabled() {
    const button = await this.updateAutorenewBillingButton.isEnabled();
    return button;
  }



}