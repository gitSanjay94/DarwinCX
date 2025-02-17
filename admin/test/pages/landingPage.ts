import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { COURAGE_CX_MAGAZINE } from '../../src/constants';
import { COURAGE_CX } from '../../src/constants';




export class landingPage {
  page: Page;
  readonly marketingStudio: Locator;
  readonly campaignConfigurator: Locator;
  readonly productItems: Locator;
  readonly productBundles: Locator;
  readonly productOffers: Locator;
  readonly marketingCampaigns: Locator;
  readonly billJourneys: Locator;
  readonly renewalGroups: Locator;
  readonly renewalCategories: Locator;
  readonly lettershopItems: Locator;
  readonly lettershopBundles: Locator;
  readonly renewalJourneys: Locator;
  readonly holidayCampaignDO: Locator;
  readonly holidayUniversesDO: Locator;
  readonly holidayJourneysDO: Locator;
  readonly emailManager: Locator;
  readonly settings: Locator;
  readonly coupons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.marketingStudio = page.locator("//a[text()='Marketing Studio']");
    this.campaignConfigurator = page.locator("//strong[text()='Campaign Configurator']");
    this.productItems = page.locator("//a[text()='Product Items']")
    this.productBundles = page.locator("//a[text()='Product Bundles']")
    this.productOffers = page.locator("//a[text()='Product Offers']")
    this.marketingCampaigns = page.locator("//a[text()='Marketing Campaigns']")
    this.billJourneys = page.locator("//a[text()='Bill Journeys']")
    this.renewalGroups = page.locator("//a[text()='Renewal Groups']")
    this.renewalCategories = page.locator("//a[text()='Renewal Categories']")
    this.lettershopItems = page.locator("//a[text()='Lettershop Items']")
    this.lettershopBundles = page.locator("//a[text()='Lettershop Bundles']")
    this.holidayCampaignDO = page.locator("//a[text()='Holiday Campaign (DO)']")
    this.renewalJourneys = page.locator("//a[text()='Renewal Journeys']")
    this.holidayUniversesDO = page.locator("//a[text()='Holiday Universes (DO)']")
    this.holidayJourneysDO = page.locator("//a[text()='Holiday Journeys (DO)']")
    this.emailManager = page.getByText('Email Manager')
    this.settings = page.locator("//a[text()='Settings']")
    this.coupons = page.locator("//a[text()='Coupons']")




  }
  async clickMarketingStudio() {
    try {
      await expect(this.marketingStudio).toBeVisible({ timeout: 60000 });
      await this.page.waitForTimeout(30000);
      await this.marketingStudio.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickCampaignConfigurator() {
    try {
      await expect(this.campaignConfigurator).toBeVisible({ timeout: 30000 });
      await this.campaignConfigurator.click();
      await this.page.waitForTimeout(30000)
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickEmailManager() {
    try {
      await expect(this.emailManager).toBeVisible({ timeout: 60000 });
      await this.emailManager.click();
      await this.page.waitForTimeout(10000);
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickProductItems() {
    try {
      await expect(this.productItems).toBeVisible({ timeout: 30000 });
      await this.productItems.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickProductBundles() {
    try {
      await expect(this.productBundles).toBeVisible({ timeout: 30000 });
      await this.productBundles.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickProductOffers() {
    try {
      await expect(this.productOffers).toBeVisible({ timeout: 30000 });
      await this.productOffers.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickMarketingCampaigns() {
    try {
      await expect(this.marketingCampaigns).toBeVisible({ timeout: 30000 });
      await this.marketingCampaigns.click();
    } catch (error) {
      logger.info("Element not found or not visible:", error);
      console.error("Element not found or not visible:", error);
    }
  }

  async clickBillJourneys() {
    try {
      await expect(this.billJourneys).toBeVisible({ timeout: 30000 });
      await this.billJourneys.click();
    } catch (error) {
      logger.info("Element not found or not visible:", error);
      console.error("Element not found or not visible:", error);
    }
  }

  async clickRenewalJourneys() {
    try {
      await expect(this.renewalJourneys).toBeVisible({ timeout: 30000 });
      await this.renewalJourneys.click();
    } catch (error) {
      logger.info("Element not found or not visible:", error);
      console.error("Element not found or not visible:", error);
    }
  }

  async clickRenewalGroups() {
    try {
      await expect(this.renewalGroups).toBeVisible({ timeout: 30000 });
      await this.renewalGroups.click();
    } catch (error) {
      logger.info("Element not found or not visible:", error);
      console.error("Element not found or not visible:", error);
    }
  }

  async clickRenewalCategories() {
    try {
      await expect(this.renewalCategories).toBeVisible({ timeout: 30000 });
      await this.renewalCategories.click();
    } catch (error) {
      logger.info("Element not found or not visible:", error);
      console.error("Element not found or not visible:", error);
    }

  }


  async clickLettershopItems() {
    try {
      await expect(this.lettershopItems).toBeVisible({ timeout: 30000 });
      await this.lettershopItems.click();
    } catch (error) {
      logger.info("Element not found or not visible:", error);
      console.error("Element not found or not visible:", error);
    }
  }

  async clickLettershopBundles() {
    try {
      await expect(this.lettershopBundles).toBeVisible({ timeout: 30000 });
      await this.lettershopBundles.click();
    } catch (error) {
      logger.info("Element not found or not visible:", error);
      console.error("Element not found or not visible:", error);
    }
  }


  async clickHolidayCampaignDO() {
    try {
      await expect(this.holidayCampaignDO).toBeVisible({ timeout: 30000 });
      await this.holidayCampaignDO.click();
    } catch (error) {
      logger.info("Element not found or not visible:", error);
      console.error("Element not found or not visible:", error);
    }
  }

  async clickHolidayUniversesDO() {
    try {
      await expect(this.holidayUniversesDO).toBeVisible({ timeout: 30000 });
      await this.holidayUniversesDO.click();
    } catch (error) {
      logger.info("Element not found or not visible:", error);
      console.error("Element not found or not visible:", error);
    }
  }

  async clickHolidayJourneysDO() {
    try {
      await expect(this.holidayJourneysDO).toBeVisible({ timeout: 30000 });
      await this.holidayJourneysDO.click();
    } catch (error) {
      logger.info("Element not found or not visible:", error);
      console.error("Element not found or not visible:", error);
    }
  }
  /**
   * Select the value from the client dropdown
   */
  async selectClient() {
  try {
    // Select the client "Darwin CX"
    const darwinCxLocator = this.page.locator('div').filter({ hasText: /^St.Joseph Media$/ }).nth(2);
    await darwinCxLocator.click();
    console.log("Clicked on St.Joseph Media");

    // Input 'courage' into the client selector
    const clientInput = this.page.locator('#react-select-2-input');
    await clientInput.fill('courage');
    await this.page.getByText('Courage CX', { exact: true }).click();
    console.log("Selected 'Courage CX'");

    // Wait for the next section to load
    await this.page.waitForTimeout(5000); // Adjust timeout based on actual loading times

    // Toggle the "Darwin Box Restack Off" switch
    const darwinBoxSwitch = this.page.getByText('Darwin Box Restack Off');
    await darwinBoxSwitch.click();
    console.log("Toggled 'Darwin Box Restack Off'");

    // Input 'ccx' into the product selector
    const productInput = this.page.locator('#react-select-5-input');
    await productInput.fill('ccx');
    await this.page.getByText('Courage CX Magazine (CCX)', { exact: true }).click();
    console.log("Selected 'Courage CX Magazine (CCX)'");

    // Optional: Wait for the product selection to take effect
    await this.page.waitForTimeout(5000); // Adjust timeout based on actual loading times
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickSettings() {
    try {
      await expect(this.settings).toBeVisible({ timeout: 60000 });
      await this.page.waitForTimeout(30000);
      await this.settings.click();
    } catch (error) {
      console.error("Element not found or not visible:", error);
    }
  }

  async clickCoupons(){
    await expect(this.coupons).toBeVisible({timeout: 60000});
    await this.coupons.scrollIntoViewIfNeeded();
    await this.coupons.click();
  }



}