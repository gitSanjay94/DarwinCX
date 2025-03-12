import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';



export class A4PopulatedGiftOrderwithPaymentPage {
  page: Page;
  readonly ordernumber1userFirstNameValue: Locator;
  readonly ordernumber2userFirstNameValue: Locator;
  readonly ordernumber3userFirstNameValue: Locator;
  readonly ordernumber1userLastNameValue: Locator;
  readonly ordernumber1companyValue: Locator;
  readonly ordernumber1jobTitileValue: Locator;
  readonly ordernumber1userAddress1Value: Locator;
  readonly ordernumber1userAddress2Value: Locator;
  readonly userCityValue: Locator;
  readonly userCityValueSection3: Locator;
  readonly userPostalCodeValue: Locator;
  readonly userPostalCodeValueSection3: Locator;
  readonly userEmailValue: Locator;
  readonly userEmailValueSection2: Locator;
  readonly userEmailValueSection3: Locator;
  readonly userCountry: Locator;
  readonly userProvince: Locator;
  readonly addGiftRecipientButton: Locator;
  readonly placeOrderButton: Locator;
  readonly removeButton: Locator;
  readonly creditCardRB: Locator;
  readonly payPalRB: Locator;
  readonly billMeLaterRB: Locator;
  readonly cardNumberTF: Locator;
  readonly monthTF: Locator;
  readonly CVVTF: Locator;
  readonly placeorder: Locator;
  readonly productUnavailableText: Locator;





  constructor(page: Page) {
    this.page = page;
    this.ordernumber1userFirstNameValue = page.locator('//input[@id="userFirstName" and @name="userFirstName" and @value="Two Courage"]')
    this.ordernumber2userFirstNameValue = page.locator('//input[@id="recipientFirstName1" and @name="recipientFirstName1" and @value="recipient number one"]')
    this.ordernumber3userFirstNameValue = page.locator('//input[@id="recipientFirstName2" and @name="recipientFirstName2" and @value="recipient number two"]')
    this.ordernumber1userLastNameValue = page.locator('//input[@id="userLastName" and @name="userLastName" and @value="Order CA"]')
    this.ordernumber1companyValue = page.locator('//input[@id="userCompanyName" and @name="userCompanyName" and @value=""]')
    this.ordernumber1jobTitileValue = page.locator('//input[@id="userJobTitle" and @name="userJobTitle" and @value=""]')
    this.ordernumber1userAddress1Value = page.locator('//input[@id="userAddress" and @name="userAddress" and @value="For General Shop API"]')
    this.ordernumber1userAddress2Value = page.locator('//input[@id="userAddress2" and @name="userAddress2" and @value="                                "]')
    this.userCityValue = page.locator('//input[@id="userCity" and @name="userCity" and @value="Windsor"]')
    this.userCityValueSection3 = page.locator('//input[@id="recipientCity2" and @name="recipientCity2" and @value="St.Florenceville"]')
    this.userPostalCodeValue = page.locator('//input[@id="userPostalCode" and @name="userPostalCode" and @value="N9A 9Z9"]')
   this.userPostalCodeValueSection3 = page.locator('//input[@id="recipientPostalCode2" and @name="recipientPostalCode2" and @value="E7L 6S5"]')
    this.userEmailValue = page.locator('//input[@id="userEmail" and @name="userEmail" and @value="webtest24@palmcoastd.com"]')
    this.userEmailValueSection2 = page.locator('//input[@id="recipientEmail1" and @name="recipientEmail1" and @value="webtest23@palmcoastd.com"]')
     this.userEmailValueSection3 = page.locator('//input[@id="recipientEmail2" and @name="recipientEmail2" and @value="webtest22@palmcoastd.com"]')
    this.userCountry = page.locator('#userCountry')
    this.userProvince = page.locator('select#userProvince')
    this.addGiftRecipientButton = page.getByRole('button', { name: 'Add Gift Recipient' })
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
    this.removeButton = page.getByRole('button', { name: 'Remove' })
    this.creditCardRB = page.getByLabel('Credit Card')
    this.payPalRB = page.getByLabel('PayPal')
    this.billMeLaterRB = page.getByLabel('Bill Me Later')
    this.cardNumberTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('Card number')
    this.monthTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('MM / YY')
    this.CVVTF = page.frameLocator('iframe[name="__privateStripeFrame016124"]').getByPlaceholder('CVC')
    this.placeorder = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[3]/div/div/div[2]/div/div/div/div/div/button')
    // this.countrymissingalert = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[1]/div[1]/div[2]/div[7]/div[2]/div/span')
    // this.productUnavailableText = page.getByText('Product is unavailable in');
    this.productUnavailableText = page.locator('//*[@id="root"]/div/div[2]/div/div/form/div[1]/div[1]/div[2]/div[7]/div[2]/div/span')
  }


  async validateUserFirstNameValue() {
    await expect(this.ordernumber1userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.ordernumber1userFirstNameValue.scrollIntoViewIfNeeded();
    let text = await this.ordernumber1userFirstNameValue.getAttribute('value');
    return text;
  }

  async validateUserFirstNameValueSection2() {
    await expect(this.ordernumber2userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.ordernumber2userFirstNameValue.scrollIntoViewIfNeeded();
    let text = await this.ordernumber2userFirstNameValue.getAttribute('value');
    return text;
  }

   async validateUserFirstNameValueSection3() {
    await expect(this.ordernumber3userFirstNameValue).toBeVisible({ timeout: 60000 });
    await this.ordernumber3userFirstNameValue.scrollIntoViewIfNeeded();
    let text = await this.ordernumber3userFirstNameValue.getAttribute('value');
    return text;
  }

  async validateUserLastNameValue() {
    await expect(this.ordernumber1userLastNameValue).toBeVisible({ timeout: 60000 });
    let text = await this.ordernumber1userLastNameValue.getAttribute('value');
    return text;
  }

  async validateBlankCompanyNameValue() {
    await expect(this.ordernumber1companyValue).toBeVisible({ timeout: 60000 });
    let text = await this.ordernumber1companyValue.getAttribute('value');
    return text;
  }

  async validateBlankJobTitleValue() {
    await expect(this.ordernumber1jobTitileValue).toBeVisible({ timeout: 60000 });
    let text = await this.ordernumber1jobTitileValue.getAttribute('value');
    return text;
  }

  async validateUserAddress1Value() {
    await expect(this.ordernumber1userAddress1Value).toBeVisible({ timeout: 60000 });
    let text = await this.ordernumber1userAddress1Value.getAttribute('value');
    return text;
  }

  async validateUserAddress2Value() {
    await expect(this.ordernumber1userAddress2Value).toBeVisible({ timeout: 60000 });
    let text = await this.ordernumber1userAddress2Value.getAttribute('value');
    return text;
  }

  async validateUserCityValue() {
    await expect(this.userCityValue).toBeVisible({ timeout: 60000 });
    let text = await this.userCityValue.getAttribute('value');
    return text;
  }
async validateUserCityValueSection3() {
    await expect(this.userCityValueSection3).toBeVisible({ timeout: 60000 });
    let text = await this.userCityValueSection3.getAttribute('value');
    return text;
  }

  async validateUserPostalCodeValue() {
    await expect(this.userPostalCodeValue).toBeVisible({ timeout: 60000 });
    let text = await this.userPostalCodeValue.getAttribute('value');
    return text;
  }

  async validateUserPostalCodeValueSection3() {
    await expect(this.userPostalCodeValueSection3).toBeVisible({ timeout: 60000 });
    let text = await this.userPostalCodeValueSection3.getAttribute('value');
    return text;
  }
  

  async validateUserEmailValue() {
    await this.userEmailValue.scrollIntoViewIfNeeded();
    await expect(this.userEmailValue).toBeVisible({ timeout: 60000 });
    let text = await this.userEmailValue.getAttribute('value');
    return text;

  }

    async validateUserEmailValueSection2() {
    await this.userEmailValueSection2.scrollIntoViewIfNeeded();
    await expect(this.userEmailValueSection2).toBeVisible({ timeout: 60000 });
    let text = await this.userEmailValueSection2.getAttribute('value');
    return text;

  }

   async validateUserEmailValueSection3() {
    await this.userEmailValueSection3.scrollIntoViewIfNeeded();
    await expect(this.userEmailValueSection3).toBeVisible({ timeout: 60000 });
    let text = await this.userEmailValueSection3.getAttribute('value');
    return text;

  }

   async validateUserProvinceValue() {
    await this.userProvince.waitFor({ state: 'visible' });
    await this.userProvince.scrollIntoViewIfNeeded();
    const selectedOption = await this.userProvince.locator('option:checked').first();
    let province = null;
    if (selectedOption) {
      province = await selectedOption.innerText();
    } else {
      throw new Error('No province selected or element not found.');
    }
    console.log('Retrieved province:', province);
    return province.trim();
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
// page.locator('#userCountry').selectOption('');


async unSelecttheCountryValue() {
    await this.userCountry.waitFor({ state: 'visible' });
    await this.userCountry.scrollIntoViewIfNeeded();
    await this.userCountry.selectOption('Choose Country*');
    
       } 
  async fillCorrectPaymentDetails() {
    //  await this.cardNumberTF.waitFor({ state: 'visible', timeout: 60000 });
    //  await this.cardNumberTF.scrollIntoViewIfNeeded();
    //  await this.cardNumberTF.click()
    //  await this.cardNumberTF.fill("4111111111111111")
    //  await this.monthTF.fill("1225")
    //  await this.CVVTF.fill("123")

}


     
async clickPlaceOrderButton() {
 
  await this.placeorder.click();
  
   
    }

async validateProductUnavailableText() {
        try {
            await expect(this.productUnavailableText).toBeVisible({ timeout: 6000 });
            let text = await this.productUnavailableText.textContent();
            return text;
        } catch (error) {
            logger.info(`Element ${this.productUnavailableText} not found or not visible: `, error);
            console.error(`Element ${this.productUnavailableText} not found or not visible: `, error);
        }
    }

    }

