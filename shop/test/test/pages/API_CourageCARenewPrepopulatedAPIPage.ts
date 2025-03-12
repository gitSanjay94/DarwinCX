import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';

interface purchaserCAInformationData {
    purchaserCA_firstname: string | null;
    purchaserCA_lastname: string | null;
    
}

interface purchaserCAAvailableRenewalsData {
    purchaserCA_renewalproduct: string | null;
    purchaserCA_renewalexpiraydate: string | null;
    
}

export class CourageCARenewPrepopulatedAPIPage {
  page: Page;
  readonly userCAAccountNumber: Locator;
  readonly userCAAccountLastName: Locator;
  readonly purchaserCAInformationRow:Locator;
  readonly purchaserCARenewalRow:Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.userCAAccountNumber = page.locator("//input[@placeholder='Do you have an account number?' and @value='950352396']");
    this.userCAAccountLastName = page.locator("//input[@placeholder='Please type your Last Name' and @value='ca']");
    this.purchaserCAInformationRow = page.locator("(//tr)[2]");
    this.purchaserCARenewalRow = page.locator("//tr");
  }

async validateUserAccountNumber() {
    await expect(this.userCAAccountNumber).toBeVisible({ timeout: 60000 });
    await this.userCAAccountNumber.scrollIntoViewIfNeeded();
    let text = await this.userCAAccountNumber.getAttribute('value');
    return text;
  }

  async validateUserAccountLastName() {
    await expect(this.userCAAccountLastName).toBeVisible({ timeout: 60000 });
    await this.userCAAccountLastName.scrollIntoViewIfNeeded();
    let text = await this.userCAAccountLastName.getAttribute('value');
    return text;
  }
    
  async getpurchaserCAInformationRowCount(): Promise<purchaserCAInformationData[]> {
        let numberOfRows = await this.
        purchaserCAInformationRow.count();
        if (numberOfRows > 0) {
            let arr = await this.getpurchaserCAInformationData(numberOfRows);
            return arr;
        } else {
            // Handle case when there are no rows
            return [];
        }
    }

async getpurchaserCAInformationData(numberOfRows: number): Promise<purchaserCAInformationData[]> {
        const arr = [];
        logger.info("NumberOfRows " + numberOfRows);
        for (let i = 1; i <= numberOfRows; i++) {
            const obj: purchaserCAInformationData = {
                purchaserCA_firstname: null,
                purchaserCA_lastname: null,
            };
            obj.purchaserCA_firstname = await this.page.getByRole('cell', { name: 'Order' }).nth(1).textContent();
            obj.purchaserCA_lastname = await this.page.getByRole('cell', { name: 'ca' }).nth(1).textContent();
            arr.push(obj)
        }
        return arr
    }

     async getpurchaserCAAvailableRenewalsDataRowCount(): Promise<purchaserCAAvailableRenewalsData[]> {
        let numberOfRows = await this.
        purchaserCARenewalRow.count();
        if (numberOfRows > 0) {
            let arr = await this.getpurchaserCAAvailableRenewalsData(numberOfRows);
            return arr;
        } else {
            // Handle case when there are no rows
            return [];
        }
    }

    async getpurchaserCAAvailableRenewalsData(numberOfRows: number): Promise<purchaserCAAvailableRenewalsData[]> {
        const arr = [];
        logger.info("NumberOfRows " + numberOfRows);
        for (let i = 1; i <= numberOfRows; i++) {
            const obj: purchaserCAAvailableRenewalsData = {
            purchaserCA_renewalproduct: null,
            purchaserCA_renewalexpiraydate: null,
    
            };
            obj.purchaserCA_renewalproduct = await this.page.locator("//td[normalize-space()='Courage CX Magazine']").textContent();
            // expect(await this.page.getByRole('cell', { name: 'Jan' }).toBeVisible({ timeout: 20000 });
            obj.purchaserCA_renewalexpiraydate = await this.page.getByRole('cell', { name: 'Jan' }).first().textContent();
            arr.push(obj)
        }
        return arr
    }
    
   }     
