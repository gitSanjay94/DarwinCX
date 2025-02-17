import { Page } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { landingPage } from './landingPage';
import { productOffersPage } from './productOffersPage';
import { productItemsPage } from './productItemsPage';
import { marketingCampaignsPage } from './marketingCampaignsPage';
import { productbundlePage } from './productbundlePage';
import { renewalGroupsPage } from './renewalGroupsPage';
import { renewalCategoriesPage } from './renewalCategoriesPage';
import { billJourneysPage } from './billJourneysPage';
import { lettershopItemsPage } from './lettershopItemsPage';
import { lettershopBundlesPage } from './lettershopBundlesPage';
import { renewalJourneysPage } from './renewalJourneysPage';
import { holidayCampaignDOPage } from './holidayCampaignDOPage';
import { holidayUniversesDOPage } from './holidayUniversesDOPage';
import { holidayJourneysDOPage } from './holidayJourneysDOPage';
import { emailManagerPage } from './emailManagerPage';
import { emCustomMarkupsPage } from './emCustomMarkupsPage';
import { emSenderInfoPage } from './emSenderInfoPage';
import { settingsPage } from './settingsPage';
import { couponsPage } from './couponsPage';




export class PomManager {
    loginP: loginPage;
    page: Page;
    landPage: landingPage;
    productOffersPage: productOffersPage;
    productItemsPage: productItemsPage;
    marketingCampaignsPage: marketingCampaignsPage;
    productbundlePage: productbundlePage;
    renewalGroupsPage: renewalGroupsPage;
    renewalCategoriesPage: renewalCategoriesPage;
    billJourneysPage: billJourneysPage;
    renewalJourneysPage: renewalJourneysPage;
    lettershopItemsPage: lettershopItemsPage;
    lettershopBundlesPage: lettershopBundlesPage;
    holidayCampaignDOPage: holidayCampaignDOPage;
    holidayUniversesDOPage: holidayUniversesDOPage;
    holidayJourneysDOPage: holidayJourneysDOPage;
    emailManagerPage: emailManagerPage;
    emCustomMarkupsPage: emCustomMarkupsPage;
    emSenderInfoPage: emSenderInfoPage;
    settingsPage: settingsPage;
    couponsPage: couponsPage;




    constructor(page: Page) {
        this.page = page;
        this.loginP = new loginPage(page);
        this.landPage = new landingPage(page)
        this.productOffersPage = new productOffersPage(page)
        this.productItemsPage = new productItemsPage(page)
        this.marketingCampaignsPage = new marketingCampaignsPage(page)
        this.productbundlePage = new productbundlePage(page)
        this.renewalGroupsPage = new renewalGroupsPage(page)
        this.billJourneysPage = new billJourneysPage(page)
        this.renewalGroupsPage = new renewalGroupsPage(page)
        this.renewalCategoriesPage = new renewalCategoriesPage(page)
        this.lettershopItemsPage = new lettershopItemsPage(page)
        this.lettershopBundlesPage = new lettershopBundlesPage(page)
        this.renewalJourneysPage = new renewalJourneysPage(page)
        this.holidayCampaignDOPage = new holidayCampaignDOPage(page)
        this.holidayUniversesDOPage = new holidayUniversesDOPage(page)
        this.holidayJourneysDOPage = new holidayJourneysDOPage(page)
        this.emailManagerPage = new emailManagerPage(page)
        this.emCustomMarkupsPage = new emCustomMarkupsPage(page)
        this.emSenderInfoPage = new emSenderInfoPage(page)
        this.settingsPage = new settingsPage(page)
        this.couponsPage = new couponsPage(page)

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
     * @returns instance of productOffersPage
     */
    getProductOffersPage() {
        return this.productOffersPage;
    }

    getProductItemPage() {
        return this.productItemsPage;
    }

    getMarketingCampaignsPage() {
        return this.marketingCampaignsPage;
    }

    getproductbundlePage() {
        return this.productbundlePage;
    }


    getrenewalGroupsPage() {
        return this.renewalGroupsPage;
    }




    getBillJourneysPage() {
        return this.billJourneysPage;
    }
    getRenewalCategoryPage() {

        return this.renewalCategoriesPage;
    }


    getLettershopItemsPage() {
        return this.lettershopItemsPage;
    }

    getLettershopBundlesPage() {
        return this.lettershopBundlesPage;
    }


    getRenewalJourneysPage() {
        return this.renewalJourneysPage;
    }

    getHolidayCampaignDOPage() {
        return this.holidayCampaignDOPage;
    }

    getHolidayUniversesDOPage() {
        return this.holidayUniversesDOPage;
    }

    getHolidayJourneysDOPage() {
        return this.holidayJourneysDOPage;
    }

    getEmailManagerPage() {
        return this.emailManagerPage;
    }

    getEMCustomMarkupsPage() {
        return this.emCustomMarkupsPage;
    }

    getemSenderInfoPage() {
        return this.emSenderInfoPage;
    }

    getSettingsPage() {
        return this.settingsPage;
    }

    getCouponsPage() {
        return this.couponsPage;
    }




}