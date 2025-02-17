import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class searchPage {

    rowSelector: string = "div.table-responsive >table >tbody >tr";
    customerNotExist: string = "//div[contains(text(),'No results found')]";
    showDeletedButton: string = "//button[normalize-space()='Show Deleted']";
    custInfo: string = ""//div/strong[contains(text(),'Customer Info')]";

    page: Page;
    readonly customerRowList: Locator
    readonly statusAsDeleted: Locator;
    accountNumber: any

    constructor(page: Page) {
        this.page = page;
        this.customerRowList = page.locator("x")
        this.statusAsDeleted = page.locator("//tr[@name='0']/td/span")
    }

    async clickShowDeletedButton() {
        const element = await this.page.$(this.showDeletedButton);
        if (element !== null)
            element.click();

    }
    async showDeleteExist() {
        const element = await this.page.$(this.showDeletedButton);
        if (element === null) {
            logger.info(`Element ${this.showDeletedButton} does not exist on the page`);
            return "Element not found";
        } else {
            logger.info(`Element ${this.showDeletedButton} exists on the page`);
            return "Element found";
        }
    }
    async custInfoExist() {
        const element = await this.page.$(this.custInfo);
        return element;
      
    }

    async canNotFindCustomerWarnMessage(): Promise<string> {
        const element = await this.page.$(this.customerNotExist);
          if (element === null) {
            logger.info(`Element ${this.customerNotExist} does not exist on the page`);
            return "Element not found";
        } else {
            logger.info(`Element ${this.customerNotExist} exists on the page`);
            const textContent = await element.textContent(); // Use 'element' instead of 'this.customerNotExist'
            logger.info('Text Content:', textContent);
            if (textContent !== null) {
                //    console.log("Warning: ", textContent);
                return textContent;
            } else {
                //  console.log("Warning: Text content is null");
                return "no text"; // or return a default value or throw an error as needed
            }

        }
    }


    async getCustomerResultListCount(searchValue: string): Promise<boolean> {
        let hasError = false;
        try {
            await expect(this.customerRowList.first()).toBeVisible({ timeout: 80000 })
            console.log("Customer List Count is", await this.customerRowList.count())
            const listCount = await this.customerRowList.count()
            if (await this.showDeleteExist() === "Element not found") {
                hasError = true;
                logger.info("in showDeleteExist method", await this.showDeleteExist())
            }
            else {
                const rows = await this.page.$$(this.rowSelector);
                if (listCount >= 1) {
                    for (const row of rows) {
                        const cell = await row.$('td:nth-child(1)');
                        let accNo = await row.$('td:nth-child(6)') //to fetch acc number to validate delete scenario
                        if (accNo !== null && accNo !== undefined) {
                            this.accountNumber = accNo.textContent();
                        }
                        if (cell) {
                            const cellContent = await cell.textContent();

                            console.log("Value to be Searched ", searchValue.trim().toLowerCase())
                            // Check for null before using trim()
                            if (cellContent !== null && cellContent.trim().toLowerCase().includes(searchValue.trim().toLowerCase())) {
                                console.log("Value from Available Serach List  ", cellContent.trim().toLowerCase())
                                await row.click();  // Found the matching element, perform click action on it
                                break; // Stop iterating once the matching element is found
                            }
                            else {
                                hasError = true;
                                logger.info("hasError in getCustomerResultListCount() ", hasError)
                                logger.info(`Unable to select the Customer with exact matching value:  ${searchValue}`)
                            }
                        }

                    }
                }

            }

        }
        catch (error) {
            // hasError = true;
            console.log('Error Block')
            throw error;
        }
        return hasError
    }

    async getAccountNumberInSearchResults() {
        logger.info("ACCOUNT NUMBER IS ", await this.accountNumber);
        return await this.accountNumber;

    }

    async getStatusAsDeletedInSearchResults() {
        try {
            await expect(this.statusAsDeleted).toBeVisible({ timeout: 60000 });
            let status = await this.statusAsDeleted.textContent();
            return status;
        } catch (error) {
            logger.error(`Element ${this.statusAsDeleted} not found or not visible: `, error);
            console.error(`Element ${this.statusAsDeleted} not found or not visible: `, error);
        }
    }
}

