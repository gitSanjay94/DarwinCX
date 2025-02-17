import { Then, When, Given } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { logger } from "../support/hook";



Given('User selects the client', async function () {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.selectClient()
    logger.info('Selected the client');
})

When('User enter the search criteria {string}', async function (toSearch: string) {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.enterSearchCondition(toSearch);
    logger.info(`Entered the search criteria: ${toSearch}`);
})

When('Click on search button', async function () {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.clickSearchButton();
    await this.page.waitForTimeout(40000)
    logger.info('Clicked on the search button');
})

Then('Use the existing customer or create a new customer {string} based on the returned search result', async function (toSearch: string) {
    let flag = false
    this.searchPage = this.pomManager.getSearchPage();
    const warnMessage = await this.searchPage.canNotFindCustomerWarnMessage()
    if (warnMessage === "No results found. Add Customer") {
        logger.info('No results found. Adding a new customer.');
        await this.landPage.clickAddCustomerButton();
        logger.info(`Clicked the "Add Customer" button`);
        this.addCustomerPage = this.pomManager.getAddCustomerPage();
        flag = await this.addCustomerPage.fillCustomerDetails(toSearch);
        logger.info(`Filled in customer details for ${toSearch}`)
    }
    else {
        logger.info('Customer found in search results. Using existing customer.');
        flag = await this.searchPage.getCustomerResultListCount(toSearch)
    }
    if (!flag) {
        let customerInfo = await this.landPage.validateCustomerInfo();
        //console.log("customerInfo is ", customerInfo)
        if (!customerInfo || customerInfo.length === 0) {
            const message = customerInfo === null
                ? "The customerInfo is null as unable to create customer."
                : "The customerInfo is empty as unable to create customer.";

            logger.info(message);
        } else {
            logger.info(`The customer gets created successfully. Customer info is: ${customerInfo}`);
            expect(customerInfo.toLowerCase()).toContain(toSearch.toLowerCase());
        }
    }
    else {
        logger.info("Unable to create or find the right customer match")
    }

})

Given('User selects the client {string}', async function (clientName: string) {
    this.landPage = this.pomManager.getLandingPage()
    await this.landPage.selectClient(clientName)
    logger.info(`Selected the client: ${clientName}`);
})
