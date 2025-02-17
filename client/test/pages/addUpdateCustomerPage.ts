import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { logger } from '../features/CustomerCare/support/hook';

let firstname: string;
let lastname: string;
let custlastname: string;
let randomProvince: string | undefined;;
let randomPostalCode: string | undefined;;
export let fname: string;
export let custFname: string;
export class addCustomerPage {

  page: Page;
  readonly title: Locator;
  readonly fName: Locator;
  readonly lName: Locator;
  readonly company: Locator;
  readonly phone: Locator;
  readonly email: Locator;
  readonly address1: Locator;
  readonly address2: Locator;
  readonly address3: Locator;
  readonly city: Locator;
  readonly postalCode: Locator;
  readonly countryDropDown: Locator;
  readonly countrySelection: Locator;
  readonly createCustomerButton: Locator;
  readonly provinceDropDown: Locator;
  readonly provinceSelection: Locator;
  readonly lNameMissing: Locator;
  readonly countryMissing: Locator;
  readonly addressMissing: Locator;
  readonly cityMissing: Locator;
  readonly stateMissing: Locator;
  readonly postalCodeMissing: Locator;
  readonly custInfoUpdate: Locator;
  readonly partnerInfoUpdate: Locator;
  readonly updateInfoButton: Locator;
  readonly provinceField: Locator;
  readonly partnerFName: Locator;
  readonly partnerLName: Locator;
  readonly partnerEmail: Locator;
  readonly custFname: Locator;
  readonly partnerInvalidEmailMessage: Locator;
  readonly partnerEmailTXT: Locator;
  readonly partnerFnameTXT: Locator;
  readonly clickPartnerUpdateButton: Locator;
  readonly removePartnerInfoButton: Locator;
  readonly partnerInformationSection: Locator;
  readonly removeMarkAsDeceasedTXT: Locator;
  readonly reasonInDeceased: Locator;
  readonly wrongFirstNameTXT: Locator;
  readonly wrongLastNameTXT: Locator;
  readonly removeDeceasedButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.title = page.getByPlaceholder('Title', { exact: true })
    this.fName = page.locator("[name='dcx_firstName']")
    this.lName = page.locator("[name='dcx_lastName']")
    this.company = page.getByPlaceholder('Company')
    this.phone = page.getByPlaceholder('Phone', { exact: true })
    this.email = page.locator("[name='dcx_email']")
    this.countryDropDown = page.locator("div.css-g1d714-ValueContainer")
    this.provinceDropDown = page.locator("(//div[contains(@class,'css-g1d714-ValueContainer')])[2]")
    this.address1 = page.locator("[name='dcx_street_1']")
    this.address2 = page.locator("[name='dcx_street_2']")
    this.address3 = page.locator("[name='dcx_street_3']")
    this.city = page.getByPlaceholder('City')
    this.postalCode = page.getByPlaceholder('Postal Code')
    this.createCustomerButton = page.getByRole('button', { name: 'Create Customer' })
    this.countrySelection = page.locator("div#react-select-4-option-1");
    this.provinceSelection = page.locator("//div[contains(text(),'Ontario')]");
    this.lNameMissing = page.locator("//div[3]//div[2]//small[1]")
    this.countryMissing = page.locator("//div[7]//div[2]//small[1]")
    this.addressMissing = page.locator("//div[8]//div[2]//small[1]")
    this.cityMissing = page.locator("//div[11]//div[2]//small[1]")
    this.stateMissing = page.locator("//div[12]//div[2]//small[1]")
    this.postalCodeMissing = page.locator("//div[13]//div[2]//small[1]")
    this.custInfoUpdate = page.locator('div').filter({ hasText: /^Customer InfoUpdate$/ }).getByRole('button');
    this.partnerInfoUpdate = page.locator('div').filter({ hasText: /^Partner InfoUpdate$/ }).getByRole('button');
    this.updateInfoButton = page.getByRole('button', { name: 'Update Info' })
    this.provinceField = page.locator("//input[@placeholder='Province/State']")

    this.partnerFName = page.locator("[name='dcx_spouse_firstName']")
    this.partnerLName = page.locator("[name='dcx_spouse_lastName']")
    this.partnerEmail = page.locator("[name='dcx_spouse_email']")
    this.custFname = page.locator("//strong[text()='Customer Info']/parent::div/following-sibling::div/descendant::b")
    this.clickPartnerUpdateButton = page.getByRole('button', { name: 'Update Info' })
    this.partnerFnameTXT = page.getByPlaceholder('First Name')
    this.partnerEmailTXT = page.getByPlaceholder('Email')
    this.partnerInvalidEmailMessage = page.locator("//small[@class='form-text text-danger']")
    this.removePartnerInfoButton = page.getByRole('button', { name: 'Remove Partner Info' })
    this.partnerInformationSection = page.getByText('Partner Email')
    this.removeMarkAsDeceasedTXT = page.locator("//h5[text()='Remove Mark as Deceased']")
    this.reasonInDeceased = page.locator("[name='dcx_comment']")
    this.wrongFirstNameTXT = page.locator("//small[text()='Wrong First Name']")
    this.wrongLastNameTXT = page.locator("//small[text()='Wrong Last Name']")
    this.removeDeceasedButton = page.locator("//button[text()='Remove Deceased']")
  }

  async clickRemovePartnerInfoButton() {
    try {
      await expect(this.removePartnerInfoButton).toBeVisible({ timeout: 80000 });
      await this.removePartnerInfoButton.click();
    } catch (error) {
      logger.error(`Element not found or not visible:`, error);
      console.error(`Element not found or not visible:`, error);
    }
  }

  async customerInfoUpdate() {
    try {
      await expect(this.custInfoUpdate).toBeVisible();
      await this.custInfoUpdate.click();
    } catch (error) {
      logger.error(`Element not found or not visible:`, error);
      console.error(`Element not found or not visible:`, error);
    }
  }
  async partnerInfoUpdateBtn() {
    try {
      await this.partnerInfoUpdate.waitFor({ state: 'attached', timeout: 30000 })
      await expect(this.partnerInfoUpdate).toBeVisible({ timeout: 20000 });
      await this.partnerInfoUpdate.click({ timeout: 20000 });
    } catch (error) {
      logger.error(`Element not found or not visible:`, error);
      console.error(`Element not found or not visible:`, error);
    }
  }

  async updateCompanyName(): Promise<string | null> {
    try {
      let compName = faker.company.name()
      await expect(this.company).toBeVisible();
      await this.company.clear();
      await this.company.fill(compName)
      await this.updateInfoButton.click();
      return compName;
    } catch (error) {
      logger.error(`Element not found or not visible:`, error);
      console.error(`Element not found or not visible:`, error);
      return null;
    }
  }

  async fillCustomerDetails(firstname: string, countryName: string = 'Canada'): Promise<boolean> {
    console.log("****Entering fillCustomerDetails *****")
    let hasError = false;
    try {
      await expect(this.title).toBeVisible();
      await this.title.fill(faker.person.prefix());
      await expect(this.fName).toBeVisible();
      await this.fName.fill(firstname);
      await expect(this.lName).toBeVisible();
      custlastname = faker.person.lastName()
      logger.info("Customer LastName " + custlastname);
      await this.lName.fill(custlastname)
      await expect(this.company).toBeVisible();
      await this.company.fill(faker.company.name())
      await expect(this.phone).toBeVisible();
      await this.phone.fill(faker.phone.number())
      await expect(this.email).toBeVisible();
      await this.email.fill(faker.internet.exampleEmail())
      await this.page.waitForTimeout(30000);
      // await this.countryDropDown.first().waitFor({ state: 'visible', timeout: 50000 });
      // await this.countryDropDown.click();
      await this.countryDropDown.first().click();
      await this.page.waitForTimeout(30000);
      await this.selectCountryData(countryName)
      await this.page.waitForTimeout(30000);
      await this.clickCreateCustomerButton();
      await this.page.waitForTimeout(30000);
    } catch (error) {
      hasError = true;
      logger.info(`System failed to create the customer`)

    }
    return hasError;
  }

  async fillPartnerDetails() {
    try {
      firstname = faker.person.firstName()
      await this.partnerFName.scrollIntoViewIfNeeded()
      await expect(this.partnerFName).toBeVisible();
      await this.partnerFName.fill(firstname);
      await expect(this.partnerLName).toBeVisible();
      lastname = faker.person.lastName()
      logger.info("Partner LastName " + lastname);
      await this.partnerLName.fill(lastname)
      await expect(this.partnerEmail).toBeVisible();
      await this.partnerEmail.fill(faker.internet.exampleEmail())
    } catch (error: any) {
      logger.error(`Unable to fill Partner Details`, error);
      console.error(`Unable to fill Partner Details `, error);
    }
  }

  async selectAddress() {
    try {
      await expect(this.address1).toBeVisible({ timeout: 20000 });
      await this.address1.fill(faker.location.buildingNumber())
      await expect(this.address2).toBeVisible();
      await this.address2.fill(faker.location.direction())
      await expect(this.address3).toBeVisible();
      await this.address3.fill(faker.location.cardinalDirection())
      await expect(this.city).toBeVisible();
      await this.city.fill(faker.location.city())
    } catch (error: any) {
      logger.error(`Unable to fill Adrress Details`, error);
      console.error(`Unable to fill Adrress Details `, error);
    }
  }

  async clickCreateCustomerButton() {
    try {
      await this.page.keyboard.press('Tab')
      await this.createCustomerButton.focus()
      await expect(this.createCustomerButton).toBeFocused({ timeout: 10000 })
      await this.createCustomerButton.scrollIntoViewIfNeeded({ timeout: 10000 });
      await expect(this.createCustomerButton).toBeInViewport({ timeout: 10000 })
      await expect(this.createCustomerButton).toBeEnabled({ timeout: 10000 })
      await this.page.waitForTimeout(5000)
      await this.createCustomerButton.click({ timeout: 10000 })
    }
    catch (error) {
      logger.info(`create CustomerButton is not enabled, hence cannot be clicked`)
      //throw error
    }
  }

  async missingRequiredCustomerDetails() {
    await this.lNameMissingWarnMessage()
    await this.countryMissingWarnMessage()
    await this.addressMissingWarnMessage()
    await this.cityMissingWarnMessage()
    await this.stateMissingWarnMessage()

  }



  async lNameMissingWarnMessage() {
    try {
      await expect(this.lNameMissing).toBeVisible();
      await expect(this.lNameMissing).toHaveText('*Required', { timeout: 20000 });
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }
  }

  async countryMissingWarnMessage() {
    try {
      await expect(this.countryMissing).toBeVisible();
      await expect(this.countryMissing).toHaveText('*Required', { timeout: 20000 });
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }
  }

  async addressMissingWarnMessage() {
    try {
      await expect(this.addressMissing).toBeVisible();
      await expect(this.addressMissing).toHaveText('*Required', { timeout: 20000 });
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }
  }

  async cityMissingWarnMessage() {
    try {
      await expect(this.cityMissing).toBeVisible();
      await expect(this.cityMissing).toHaveText('*Required', { timeout: 20000 });
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }
  }

  async stateMissingWarnMessage() {
    try {
      await expect(this.stateMissing).toBeVisible();
      await expect(this.stateMissing).toHaveText('*Required', { timeout: 20000 });
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }
  }

  async postalCodeMissingWarnMessage() {
    try {
      await expect(this.postalCodeMissing).toBeVisible();
      await expect(this.postalCodeMissing).toHaveText('*Required', { timeout: 20000 });
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }
  }

  async partnerInvalidEmailWarnMessage(): Promise<string | null> {
    try {
      await expect(this.partnerInvalidEmailMessage).toBeVisible({ timeout: 60000 });
      logger.info("Partner Invalid Email Message " + await this.partnerInvalidEmailMessage.textContent());
      return await this.partnerInvalidEmailMessage.textContent();
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
      return null
    }
  }

  async updatePartnerInfoWithInvalidEmailAddress(mail: string) {
    try {
      await this.partnerInfoUpdateBtn();
      await this.page.waitForTimeout(10000)
      await this.partnerEmailTXT.waitFor({ state: 'attached', timeout: 30000 })
      await this.partnerEmailTXT.clear();
      await this.partnerEmailTXT.fill(mail);
      await this.clickPartnerUpdateButton.waitFor({ state: 'attached' })
      await this.clickPartnerUpdateButton.click()
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }
  }
  async updateFirstNameInPartnerInfo(partnerFirstName: string) {
    try {
      await this.partnerInfoUpdateBtn();
      await this.partnerFnameTXT.scrollIntoViewIfNeeded();
      await expect(this.partnerFnameTXT).toBeVisible({ timeout: 60000 });
      await this.partnerFnameTXT.clear();
      await this.partnerFnameTXT.fill(partnerFirstName);
      await this.clickPartnerUpdateButton.click()
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }
  }

  async selectCountry(countryName: string) {
    await this.page.getByText(countryName, { exact: true }).click({ timeout: 70000 });
  }

  async selectProvince(province: string) {
    //await this.countryDropDown.nth(1).click();
    logger.info(`Selected Province : ${province}`)
    await this.provinceDropDown.click()
    await expect(this.page.getByText(province, { exact: true })).toBeVisible({ timeout: 10000 })
    await this.page.getByText(province, { exact: true }).click({ timeout: 60000 });
    await this.page.keyboard.press('Tab');
  }

  async enterPostalCode(postalCode: string) {
    try {
      logger.info(`Selected PostalCode: ${postalCode}`)
      await expect(this.postalCode).toBeVisible();
      await this.postalCode?.fill(postalCode);
    }
    catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }

  }

  async getRandomPostalcode() {
    let postalCodeArr = ["LB5493", "MB5473", "kB5483", "NB5461"];
    logger.info(postalCodeArr[(Math.floor(Math.random() * postalCodeArr.length))]);
    return postalCodeArr[(Math.floor(Math.random() * postalCodeArr.length))]
  }
  async getRandomProvince() {
    let postalCodeArr = ["British Columbia", "Ontario", "Alberta", "R2L 1C7"];
    logger.info(postalCodeArr[(Math.floor(Math.random() * postalCodeArr.length))]);
    return postalCodeArr[(Math.floor(Math.random() * postalCodeArr.length))]
  }

  async getRandomProvincePostalCode(countryName: string | null) {
    switch (countryName) {
      case 'Canada':
        const StatePostalCodeMap = new Map([
          ["British Columbia", "V2S 1A4"],
          ["Ontario", "K0A 0A2"],
          ["Alberta", "T7V 0A2"]
        ]);
        this.getRandomProvincePostal(StatePostalCodeMap)
        break;

      case 'Australia':
        const StateAusPostalCodeMap = new Map([
          ["Tasmania", "7255"],
          ["Victoria", "3166"],
          ["Queensland", "4009"]
        ]);
        this.getRandomProvincePostal(StateAusPostalCodeMap)
        break;

      case 'United States':
        const StateUSPostalCodeMap = new Map([
          ["Alabama", "35013-5013"],
          ["Alaska", "99501-9501"],
          ["Florida", "32013-2013"]
        ]);
        this.getRandomProvincePostal(StateUSPostalCodeMap)
        break;

    }
  }

  async getRandomProvincePostal(StatePostalCodeMap: Map<string, string>) {
    const arrList = Array.from(StatePostalCodeMap.keys());
    const randomIndex = Math.floor(Math.random() * arrList.length);
    randomProvince = arrList[randomIndex];
    if (randomProvince !== undefined) {
      randomPostalCode = StatePostalCodeMap.get(randomProvince);
      if (randomPostalCode !== undefined) {
        logger.info("Province:", randomProvince);
        logger.info("Postal value:", randomPostalCode);
        logger.info(randomProvince + " : " + randomPostalCode);
      } else {
        logger.info("Postal code not found for the random province.");
      }
    } else {
      logger.info("Random province not found.");
    }
  }

  async selectCountryData(countryName: string | null) {
    switch (countryName) {
      case 'Canada':
        await this.selectCountry('Canada')
        await this.selectAddress()
        await this.selectProvince('Ontario')
        await this.enterPostalCode('K1W1B9')
        // ### Use this code only if need to generate some randome province 
        // await this.getRandomProvincePostalCode(countryName)
        // if (randomProvince !== undefined)
        //   await this.selectProvince(randomProvince)
        // if (randomPostalCode !== undefined)
        //   await this.enterPostalCode(randomPostalCode)
        await this.fillPartnerDetails()
        logger.info('Customer Country is Canada');
        break;
      case 'Australia':
        await this.selectCountry('Australia')
        await this.selectAddress()
        await this.selectProvince('Tasmania')
        await this.enterPostalCode('7255')
        await this.fillPartnerDetails()
        logger.info('Customer Country is Australia');
        break;
      case 'United States':
        await this.selectCountry('United States')
        await this.selectAddress()
        await this.selectProvince('Alaska')
        await this.enterPostalCode('99513')
        await this.fillPartnerDetails()
        logger.info('Customer Country is United States');
        break;

      default:
        logger.info('Please select US, Canada or Australia')
    }
  }

  async fillInvalidCustomerDetailsInDeceasedPopup(firstname: string, lastname: string, reason: string) {
    try {
      await expect(this.removeMarkAsDeceasedTXT).toBeVisible({ timeout: 60000 });
      await expect(this.fName).toBeVisible();
      await this.fName.fill(firstname);
      await expect(this.lName).toBeVisible();
      await this.lName.fill(lastname)
      await expect(this.reasonInDeceased).toBeVisible();
      await this.reasonInDeceased.fill(reason)
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }

  }

  async wrongFirstNameWarnMessage(): Promise<string | null> {
    try {
      await expect(this.wrongFirstNameTXT).toBeVisible({ timeout: 60000 });
      let warningMsg = await this.wrongFirstNameTXT.textContent()
      return warningMsg;
    }
    catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
      return null;
    }
  }

  async wrongLastNameWarnMessage(): Promise<string | null> {
    try {
      await expect(this.wrongLastNameTXT).toBeVisible({ timeout: 60000 });
      let warningMsg = await this.wrongLastNameTXT.textContent()
      return warningMsg;
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
      return null;
    }
  }

  async fillCustomerDetailsInDeceasedPopup(firstname: string) {
    try {
      await expect(this.removeMarkAsDeceasedTXT).toBeVisible({ timeout: 60000 });
      await expect(this.fName).toBeVisible();
      await this.fName.fill(firstname);
      await expect(this.lName).toBeVisible();
      await this.lName.fill(custlastname)
      await expect(this.reasonInDeceased).toBeVisible();
      await this.reasonInDeceased.fill('Deceased');
      await this.clickRemoveDeceasedButton();
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);
    }
  }

  async clickRemoveDeceasedButton() {
    try {
      await this.removeDeceasedButton.click();
    } catch (error) {
      logger.error(`Unable to find the element `, error);
      console.error(`Unable to find the element `, error);

    }
  }
}
