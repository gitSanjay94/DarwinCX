import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';

interface purchaserInformationData {
    purchaser_firstname: string | null;
    purchaser_lastname: string | null;
    
}

interface purchaserAvailableRenewalsData {
    purchaser_renewalproduct: string | null;
    purchaser_renewalexpiraydate: string | null;
    
}

export class CourageUSRenewPrepopulatedAPIPage {
  page: Page;
  readonly userFirstNameTF: Locator;
  readonly userLastNameValue: Locator;
  readonly companyNameBlank: Locator;
  readonly userAddress1Value: Locator;
  readonly userAddress2Value: Locator;
  readonly userCityValue: Locator;
  readonly userPostalCodeValue: Locator;
  readonly userEmailValue: Locator;
  readonly userCountry: Locator;
  readonly userProvince: Locator;
  readonly cardNumberTF: Locator;
  readonly monthTF: Locator;
  readonly CVVTF: Locator;
  readonly emailAddressMissingText: Locator;
  readonly placeorder: Locator;
  readonly userAccountNumber: Locator;
  readonly userAccountLastName: Locator;
  readonly purchaserInformationRow:Locator;
  readonly purchaserRenewalRow:Locator;

  constructor(page: Page) {
    this.page = page;
    this.userFirstNameTF = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value="jonathan"]')
    this.userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value="kok"]')
    this.companyNameBlank = page.locator('//input[@id="userCompanyName" and @name="userCompanyName"]')
    this.userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value="11 Commerce Blvd"]')
    this.userAddress2Value = page.locator('//input[@id="userAddress2" and @name="userAddress2" and @value="45"]')
    this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value="Palm Coast"]')
    this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value="32164"]')
    this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value=""]')
    this.userCountry = page.locator('select#userCountry');
    this.userProvince = page.locator('select#userProvince');
    this.cardNumberTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('Card number')
    this.monthTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('MM / YY')
    this.CVVTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('CVC')
    this.emailAddressMissingText = page.locator("//span[text()='Email address is missing']")
    this.placeorder = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[3]/div/div/div[2]/div/div/div/div/div/button')
    this.userAccountNumber = page.locator("//input[@placeholder='Do you have an account number?' and @value='1841846']");
    this.userAccountLastName = page.locator("//input[@placeholder='Please type your Last Name' and @value='two']");
    this.purchaserInformationRow = page.locator("(//tr)[2]");
    this.purchaserRenewalRow = page.locator("//tr");
  }


  async validateuserFirstNameTFText() {
    await expect(this.userFirstNameTF).toBeVisible({ timeout: 60000 });
    await this.userFirstNameTF.scrollIntoViewIfNeeded();
    let text = await this.userFirstNameTF.getAttribute('value');
    return text;
  }
 async validateUserLastNameValue() {
    await expect(this.userLastNameValue).toBeVisible({ timeout: 60000 });
    await this.userLastNameValue.scrollIntoViewIfNeeded();
    let text = await this.userLastNameValue.getAttribute('value');
    return text;
  
  }

  async validateBlankCompanyName() {
    await expect(this.companyNameBlank).toBeVisible({ timeout: 60000 });
    await this.companyNameBlank.scrollIntoViewIfNeeded();
    let text = await this.companyNameBlank.getAttribute('value');
    return text;
  
  }
  async validateUserAddress1Value() {
   await expect(this.userAddress1Value).toBeVisible({ timeout: 60000 });
    await this.userAddress1Value.scrollIntoViewIfNeeded();
    let text = await this.userAddress1Value.getAttribute('value');
    return text;
  }
  async validateUserAddress2Value() {
    await expect(this.userAddress2Value).toBeVisible({ timeout: 60000 });
    await this.userAddress2Value.scrollIntoViewIfNeeded();
    let text = await this.userAddress2Value.getAttribute('value');
    return text;
  }
    
    async validateUserCityValue() {
    await expect(this.userCityValue).toBeVisible({ timeout: 60000 });
    await this.userCityValue.scrollIntoViewIfNeeded();
    let text = await this.userCityValue.getAttribute('value');
    return text;
  }

  async validateUserPostalCodeValue() {
    await expect(this.userPostalCodeValue).toBeVisible({ timeout: 60000 });
    await this.userPostalCodeValue.scrollIntoViewIfNeeded();
    let text = await this.userPostalCodeValue.getAttribute('value');
    return text;
  }
 async validateEmailAddressValue() {
    await expect(this.userEmailValue).toBeVisible({ timeout: 60000 });
    let text = await this.userEmailValue.textContent();
    return text;
  }
   async validateEmailAddressMissingText() {
    await expect(this.emailAddressMissingText).toBeVisible({ timeout: 60000 });
    let text = await this.emailAddressMissingText.textContent();
    return text;
  }

  async validateUserCountryValue() {
    await this.userCountry.waitFor({ state: 'visible' });
    await this.userCountry.scrollIntoViewIfNeeded();
    const selectedOption = await this.userCountry.locator('option:checked').first();
    let country = null;

  if (selectedOption) {
    country = await selectedOption.innerText();
  } else {
     throw new Error('No country selected or element not found.');
  }
    console.log('Retrieved country:', country);
    return country.trim();
  }
  
 async validateUserProvinceValue() {
    await this.userCountry.waitFor({ state: 'visible' });
    await this.userCountry.scrollIntoViewIfNeeded();
    const selectedOption = await this.userProvince.locator('option:checked').first();
    let city = null;

  if (selectedOption) {
    city = await selectedOption.innerText();
  } else {
     throw new Error('No country selected or element not found.');
  }
    console.log('Retrieved country:', city);
    return city.trim();
  }
 
async clickPlaceOrderButton() {
 
  await this.placeorder.click();
   
    }


    async getpurchaserInformationRowCount(): Promise<purchaserInformationData[]> {
        let numberOfRows = await this.
        purchaserInformationRow.count();
        if (numberOfRows > 0) {
            let arr = await this.getpurchaserInformationData(numberOfRows);
            return arr;
        } else {
            // Handle case when there are no rows
            return [];
        }
    }

async getpurchaserInformationData(numberOfRows: number): Promise<purchaserInformationData[]> {
        const arr = [];
        logger.info("NumberOfRows " + numberOfRows);
        for (let i = 1; i <= numberOfRows; i++) {
            const obj: purchaserInformationData = {
                purchaser_firstname: null,
                purchaser_lastname: null,
            };
            obj.purchaser_firstname = await this.page.locator("(//td[contains(text(),'test')])[1]").textContent();
            expect(await this.page.locator(`(//td[contains(text(),'two')])[1]`)).toBeVisible({ timeout: 20000 });
            obj.purchaser_lastname = await this.page.locator(`(//td[contains(text(),'two')])[1]`).textContent();
            arr.push(obj)
        }
        return arr
    }

     async getpurchaserAvailableRenewalsDataRowCount(): Promise<purchaserAvailableRenewalsData[]> {
        let numberOfRows = await this.
        purchaserRenewalRow.count();
        if (numberOfRows > 0) {
            let arr = await this.getpurchaserAvailableRenewalsData(numberOfRows);
            return arr;
        } else {
            // Handle case when there are no rows
            return [];
        }
    }

    async getpurchaserAvailableRenewalsData(numberOfRows: number): Promise<purchaserAvailableRenewalsData[]> {
        const arr = [];
        logger.info("NumberOfRows " + numberOfRows);
        for (let i = 1; i <= numberOfRows; i++) {
            const obj: purchaserAvailableRenewalsData = {
            purchaser_renewalproduct: null,
            purchaser_renewalexpiraydate: null,
    
            };
            obj.purchaser_renewalproduct = await this.page.locator("//td[normalize-space()='Courage CX Magazine']").textContent();
            // expect(await this.page.getByRole('cell', { name: 'Sep' }).toBeVisible({ timeout: 20000 });
            obj.purchaser_renewalexpiraydate = await this.page.getByRole('cell', { name: 'May' }).textContent();
            arr.push(obj)
        }
        return arr
    }



async validateUserAccountNumber() {
    await expect(this.userAccountNumber).toBeVisible({ timeout: 60000 });
    await this.userAccountNumber.scrollIntoViewIfNeeded();
    let text = await this.userAccountNumber.getAttribute('value');
    return text;
  }

  async validateUserAccountLastName() {
    await expect(this.userAccountLastName).toBeVisible({ timeout: 60000 });
    await this.userAccountLastName.scrollIntoViewIfNeeded();
    let text = await this.userAccountLastName.getAttribute('value');
    return text;
  }
 
     
   }     
