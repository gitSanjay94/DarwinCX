import { Page } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { purchaseSubscriptionPage } from '../pages/purchaseSubscriptionPage';
import { landingPage } from './landingPage';
import { addCustomerPage } from './addUpdateCustomerPage';
import { purchaseRenewGiftPage } from './purchaseRenewGiftPage';
import { cancelSubscriptionPage } from './cancelSubscriptionPage';
import { searchPage } from './searchPage';
import { suspendPage } from './suspendPage';
import { giveFreeExtensionPage } from './giveFreeExtensionPage';
import { enrollAutoRenewPage } from './enrollAutoRenewPage';
import { didNotReceiveProductPage } from './didNotReceiveProductPage';
import { donationPage } from './donationPage';
import { contactPreferencePage } from './contactPreferencePage';
import { paymentAccountManagementPage } from './paymentAccountManagementPage';
import { pastGiftRecipientsPage } from './pastGiftRecipientsPage';
import { customerPulsePage } from './customerPulsePage';


export class PomManager {
    loginP: loginPage;
    psPage: purchaseSubscriptionPage;
    purchaseRenewPage: purchaseRenewGiftPage;
    addCustomerPage: addCustomerPage;
    page: Page;
    landPage: landingPage;
    cancelSubscriptionPage: cancelSubscriptionPage;
    searchPage: searchPage;
    suspendPage: suspendPage;
    giveFreeExtensionPage: giveFreeExtensionPage;
    enrollAutoRenewPage: enrollAutoRenewPage;
    didNotReceiveProductPage: didNotReceiveProductPage;
    donationPage: donationPage;
    contactPreferencePage: contactPreferencePage;
    pamPage: paymentAccountManagementPage;
    pastGiftPage: pastGiftRecipientsPage;
    customerPulsePage: customerPulsePage;


    constructor(page: Page) {
        this.page = page;
        this.loginP = new loginPage(page);
        this.landPage = new landingPage(page)
        this.psPage = new purchaseSubscriptionPage(page)
        this.addCustomerPage = new addCustomerPage(page);
        this.purchaseRenewPage = new purchaseRenewGiftPage(page);
        this.cancelSubscriptionPage = new cancelSubscriptionPage(page)
        this.searchPage = new searchPage(page)
        this.suspendPage = new suspendPage(page)
        this.giveFreeExtensionPage = new giveFreeExtensionPage(page)
        this.enrollAutoRenewPage = new enrollAutoRenewPage(page)
        this.didNotReceiveProductPage = new didNotReceiveProductPage(page)
        this.donationPage = new donationPage(page)
        this.contactPreferencePage = new contactPreferencePage(page)
        this.pamPage = new paymentAccountManagementPage(page)
        this.pastGiftPage = new pastGiftRecipientsPage(page)
        this.customerPulsePage = new customerPulsePage(page)

    }

    /**
     * 
     * @returns instance of loginPage
     */
    getLoginPage() {
        return this.loginP;
    }

    /**
     * 
     * @returns instance of DashBoard/LandingPage
     */
    getLandingPage() {
        return this.landPage;
    }

    /**
     * 
     * @returns instance of PurchaseSubscriptionPage
     */
    getPurchaseSubscriptionPage() {
        return this.psPage;
    }

    /**
     * 
     * @returns instance of AddCustomerPage
     */
    getAddCustomerPage() {
        return this.addCustomerPage;
    }

    /**
   * 
   * @returns instance of PurchaseSubscriptionPage
   */
    getPurchaseRenewGiftPage() {
        return this.purchaseRenewPage;
    }

    /**
     * 
     * @returns instance of CancelSusbscriptionPage
     */
    getCancelSusbscriptionPage() {
        return this.cancelSubscriptionPage;
    }

    /**
    * 
    * @returns instance of searchPage
    */
    getSearchPage() {
        return this.searchPage;
    }


    /**
        * 
        * @returns instance of suspendPage
        */
    getSuspendPage() {
        return this.suspendPage;
    }
    /**
        * 
        * @returns instance of giveFreeExtensionPage
        */
    getGiveFreeExtensionPage() {
        return this.giveFreeExtensionPage;
    }

    /**
            * 
            * @returns instance of enrollAutoRenewPage
            */
    getEnrollAutoRenewPage() {
        return this.enrollAutoRenewPage;
    }

    /**
        * 
        * @returns instance of didNotReceiveProductPage
        */
    getDidNotReceiveProductPage() {
        return this.didNotReceiveProductPage;

    }

    /**
       * 
       * @returns instance of donationPage
       */
    getDonationPage() {
        return this.donationPage;

    }

    /**
    * 
    * @returns instance of ContactPreferencePage
    */
    getContactPreferencePage() {
        return this.contactPreferencePage;
    }

    /**
     * 
     * @returns instance of paymentAccountManagementPage
     */
    getPaymentAccountManagementPage() {
        return this.pamPage;
    }

     /**
     * 
     * @returns instance of PastGiftRecipientsPage
     */
    getPastGiftRecipientsPage() {
        return this.pastGiftPage;
    }

    /**
     * 
     * @returns instance of customerPulsePage
     */
    getCustomerPulsePage() {
        return this.customerPulsePage;
    }
}