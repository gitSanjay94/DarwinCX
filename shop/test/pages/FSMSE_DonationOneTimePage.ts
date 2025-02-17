
import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';
import exp from 'constants';




export class FSMSE_DonationOneTimePage {

    page: Page;
    readonly donationAmountText: Locator;
    readonly nextButton: Locator;
    readonly donationAmount: Locator;
    readonly recurringMonthlyRdBtn: Locator;
    readonly oneTimeRdBtn: Locator;
    readonly goBackButton: Locator;
    readonly donorInformationText: Locator;
    readonly inHonourOfRdBtn: Locator;
    readonly inMemoryOfRdBtn: Locator;
    readonly donationTributeRecipient: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly companyName: Locator;
    readonly jobTitle: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly province: Locator;
    readonly postalCode: Locator;
    readonly phoneNumber: Locator;
    readonly email: Locator;
    readonly paymentMethodText: Locator;
    readonly anonymousCB: Locator;
    readonly donorName: Locator;
    readonly donateButton: Locator;
    readonly nameIsMissingText: Locator;
    readonly donationFoundationCB: Locator;
    readonly requiredText: Locator;
    readonly organizationName: Locator;
    readonly invalidAmountText: Locator;
    readonly amountCannotBeBlankText: Locator;
    readonly otherAmount: Locator;
    readonly firstNameIsMissingText: Locator;
    readonly lastNameIsMissingText: Locator;
    readonly cityIsMissingText: Locator;
    readonly selectProvinceText: Locator;
    readonly postalCodeIsMissingText: Locator;
    readonly countryIsMissingText: Locator;
    readonly emailAddressIsMissingText: Locator;
    readonly cardNumberIncompleteText: Locator;
    readonly cardNumberInvalidText: Locator;
    readonly cardExpirationText: Locator;
    readonly donationRecognition: Locator;
    readonly userDonationAmount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.donationAmountText = page.getByText('Donation Amount');
        this.donorInformationText = page.getByText('Donor Information');
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.goBackButton = page.getByRole('button', { name: 'Go Back' });
        this.donateButton = page.getByRole('button', { name: 'Donate' });
        this.donationAmount = page.locator("//button[@value='20']");
        this.recurringMonthlyRdBtn = page.locator("//input[@value='monthly']")
        this.oneTimeRdBtn = page.locator("//input[@value='oneTime']")
        this.inHonourOfRdBtn = page.locator("//input[@value='In honour of']")
        this.inMemoryOfRdBtn = page.locator("//input[@value='In memory of']")
        this.donationTributeRecipient = page.locator('#donationTributeRecipient')
        this.firstName = page.locator("#userFirstName")
        this.lastName = page.locator("#userLastName")
        this.companyName = page.locator("#userCompanyName")
        this.jobTitle = page.locator("#userJobTitle")
        this.address = page.locator("#userAddress")
        this.city = page.locator("#userCity")
        this.province = page.locator("#userProvince")
        this.postalCode = page.locator("#userPostalCode")
        this.phoneNumber = page.locator("#userPhoneNumber")
        this.email = page.locator("#userEmail")
        this.paymentMethodText = page.getByText('Payment Method')
        this.anonymousCB = page.locator("#donationRecognitionCheck")
        this.donorName = page.getByText('Donation will be under the name of')
        this.nameIsMissingText = page.getByText('Name is missing')
        this.donationFoundationCB = page.locator("#donationFoundation")
        this.requiredText = page.getByText('required')
        this.organizationName = page.getByPlaceholder('Organization / Foundation')
        this.invalidAmountText = page.getByText("Invalid amount (remove comma or letters)")
        this.amountCannotBeBlankText = page.getByText("Amount cannot be blank")
        this.otherAmount = page.locator('#userDonationAmount')
        this.firstNameIsMissingText = page.getByText('First Name is missing')
        this.lastNameIsMissingText = page.getByText('Last Name is missing')
        this.cityIsMissingText = page.getByText('City is missing')
        this.selectProvinceText = page.getByText('Select a Province/State')
        this.postalCodeIsMissingText = page.getByText('Postal code is missing')
        this.countryIsMissingText = page.getByText('Country is missing')
        this.emailAddressIsMissingText = page.getByText('Email address is missing')
        this.cardNumberIncompleteText = page.getByText('Your card number is incomplete.. Please go back and update your donator info')
        this.cardNumberInvalidText = page.getByText('Your card number is invalid.. Please go back and update your donator info')
        this.cardExpirationText = page.getByText('Your card\'s expiry year is in')
        this.donationRecognition = page.locator('#donationRecognition')
        this.userDonationAmount = page.locator('#userDonationAmount')
    }

    async fillDonorInformationForm() {
        await expect(this.firstName).toBeVisible({ timeout: 60000 });
        await this.firstName.scrollIntoViewIfNeeded();
        await this.firstName.fill(faker.person.firstName());
        await this.lastName.fill(faker.person.lastName());
        await this.companyName.fill(faker.company.name());
        await this.jobTitle.fill(faker.person.jobTitle());
        await this.address.fill('11 Commerce Blvd');
        await this.page.waitForTimeout(8000);
        await this.page.getByText('Commerce Blvd, Palm Coast, FL, USA').click();
        await this.page.waitForTimeout(6000);
        await this.phoneNumber.fill('3456127890');
        await this.email.fill('webtest6@palmcoastd.com')
    }

    async fillDonorInformationFormCA() {
        await expect(this.firstName).toBeVisible({ timeout: 60000 });
        await this.firstName.scrollIntoViewIfNeeded();
        await this.firstName.fill(faker.person.firstName());
        await this.lastName.fill(faker.person.lastName());
        await this.companyName.fill(faker.company.name());
        await this.jobTitle.fill(faker.person.jobTitle());
        await this.address.fill('999 Canada Pl');
        await this.page.waitForTimeout(8000);
        await this.page.getByText('999 Canada Place, Vancouver, BC, Canada').nth(0).click();
        await this.page.waitForTimeout(6000);
        await this.phoneNumber.fill('3456127890');
        await this.email.fill('webtest6@palmcoastd.com')
    }

    async clickNextButton() {
        await expect(this.nextButton).toBeVisible({ timeout: 60000 });
        await this.nextButton.scrollIntoViewIfNeeded();
        await this.nextButton.click();
    }

    async clickGoBackButton() {
        await expect(this.goBackButton).toBeVisible({ timeout: 60000 });
        await this.goBackButton.scrollIntoViewIfNeeded();
        await this.goBackButton.click();
    }

    async selectDonationAmount() {
        await expect(this.donationAmount).toBeVisible({ timeout: 60000 });
        await this.donationAmount.scrollIntoViewIfNeeded();
        await this.donationAmount.click();
    }

    async selectRecurringMonthlyRdBtn() {
        await expect(this.recurringMonthlyRdBtn).toBeVisible({ timeout: 60000 });
        await this.recurringMonthlyRdBtn.scrollIntoViewIfNeeded();
        await this.recurringMonthlyRdBtn.check();
    }

    async selectOneTimeRdBtn() {
        await expect(this.oneTimeRdBtn).toBeVisible({ timeout: 60000 });
        await this.oneTimeRdBtn.scrollIntoViewIfNeeded();
        await this.oneTimeRdBtn.check();
    }

    async selectInMemoryOfRdBtn() {
        await expect(this.inMemoryOfRdBtn).toBeVisible({ timeout: 60000 });
        await this.inMemoryOfRdBtn.scrollIntoViewIfNeeded();
        await this.inMemoryOfRdBtn.check();
    }
    async selectInHonourOfRdBtn() {
        await expect(this.inHonourOfRdBtn).toBeVisible({ timeout: 60000 });
        await this.inHonourOfRdBtn.scrollIntoViewIfNeeded();
        await this.inHonourOfRdBtn.check();
    }

    async validateDonorInformationText() {
        await expect(this.donorInformationText).toBeVisible({ timeout: 60000 });
        await this.donorInformationText.scrollIntoViewIfNeeded();
        let text = await this.donorInformationText.textContent();
        return text;
    }

    async validateDonationAmountText() {
        await expect(this.donationAmountText).toBeVisible({ timeout: 60000 });
        await this.donationAmountText.scrollIntoViewIfNeeded();
        let text = await this.donationAmountText.textContent();
        return text;
    }

    async fillDonationTributeRecipient() {
        await expect(this.donationTributeRecipient).toBeVisible({ timeout: 60000 });
        await this.donationTributeRecipient.scrollIntoViewIfNeeded();
        await this.donationTributeRecipient.fill(faker.person.fullName());
    }

    async validatePaymentMethodText() {
        await expect(this.paymentMethodText).toBeVisible({ timeout: 60000 });
        await this.paymentMethodText.scrollIntoViewIfNeeded();
        let text = await this.paymentMethodText.textContent();
        return text;
    }

    async selectAnonymousCB() {
        await expect(this.anonymousCB).toBeVisible({ timeout: 60000 });
        await this.anonymousCB.scrollIntoViewIfNeeded();
        const isChecked = await this.anonymousCB.isChecked();
        if (isChecked) {
            await this.anonymousCB.click(); // Uncheck if it's checked
            logger.info('Checkbox was checked and has now been unchecked.');
        } else {
            await this.anonymousCB.click(); // Check if it's unchecked
            logger.info('Checkbox was unchecked and has now been checked.');
        }
    }

    async validateDonorName() {
        await expect(this.donorName).toBeVisible({ timeout: 60000 });
        await this.donorName.scrollIntoViewIfNeeded();
        let text = await this.donorName.textContent();
        return text;
    }

    async clickDonateButton() {
        await expect(this.donateButton).toBeVisible({ timeout: 60000 });
        await this.donateButton.scrollIntoViewIfNeeded();
        await this.donateButton.click();
    }

    async validateNameIsMissingText() {
        await expect(this.nameIsMissingText).toBeVisible({ timeout: 60000 });
        await this.nameIsMissingText.scrollIntoViewIfNeeded();
        let text = await this.nameIsMissingText.textContent();
        return text;
    }

    async selectDonationFoundationCB() {
        await expect(this.donationFoundationCB).toBeVisible({ timeout: 60000 });
        await this.donationFoundationCB.scrollIntoViewIfNeeded();
        await this.donationFoundationCB.check();
    }

    async validateRequiredText() {
        await expect(this.requiredText).toBeVisible({ timeout: 60000 });
        await this.requiredText.scrollIntoViewIfNeeded();
        let text = await this.requiredText.textContent();
        return text;
    }

    async fillOrganizationName() {
        await expect(this.organizationName).toBeVisible({ timeout: 60000 });
        await this.organizationName.scrollIntoViewIfNeeded();
        await this.organizationName.fill(faker.company.name());
    }

    async validateInvalidAmountText() {
        await expect(this.invalidAmountText).toBeVisible({ timeout: 60000 });
        await this.invalidAmountText.scrollIntoViewIfNeeded();
        let text = await this.invalidAmountText.textContent();
        return text;
    }

    async validateAmountCannotBeBlankText() {
        await expect(this.amountCannotBeBlankText).toBeVisible({ timeout: 60000 });
        await this.amountCannotBeBlankText.scrollIntoViewIfNeeded();
        let text = await this.amountCannotBeBlankText.textContent();
        return text;
    }

    async fillOtherAmount() {
        await expect(this.otherAmount).toBeVisible({ timeout: 60000 });
        await this.otherAmount.scrollIntoViewIfNeeded();
        await this.otherAmount.fill('#$%^-+(*a{,')
    }

    async validateFirstNameIsMissingText() {
        await expect(this.firstNameIsMissingText).toBeVisible({ timeout: 60000 });
        await this.firstNameIsMissingText.scrollIntoViewIfNeeded();
        let text = await this.firstNameIsMissingText.textContent();
        return text;
    }

    async validateLastNameIsMissingText() {
        await expect(this.lastNameIsMissingText).toBeVisible({ timeout: 60000 });
        await this.lastNameIsMissingText.scrollIntoViewIfNeeded();
        let text = await this.lastNameIsMissingText.textContent();
        return text;
    }

    async validateCityIsMissingText() {
        await expect(this.cityIsMissingText).toBeVisible({ timeout: 60000 });
        await this.cityIsMissingText.scrollIntoViewIfNeeded();
        let text = await this.cityIsMissingText.textContent();
        return text;
    }

    async validateSelectProvinceText() {
        await expect(this.selectProvinceText).toBeVisible({ timeout: 60000 });
        await this.selectProvinceText.scrollIntoViewIfNeeded();
        let text = await this.selectProvinceText.textContent();
        return text;
    }

    async validatePostalCodeIsMissingText() {
        await expect(this.postalCodeIsMissingText).toBeVisible({ timeout: 60000 });
        await this.postalCodeIsMissingText.scrollIntoViewIfNeeded();
        let text = await this.postalCodeIsMissingText.textContent();
        return text;
    }

    async validateCountryIsMissingText() {
        await expect(this.countryIsMissingText).toBeVisible({ timeout: 60000 });
        await this.countryIsMissingText.scrollIntoViewIfNeeded();
        let text = await this.countryIsMissingText.textContent();
        return text;
    }

    async validateEmailAddressIsMissingText() {
        await expect(this.emailAddressIsMissingText).toBeVisible({ timeout: 60000 });
        await this.emailAddressIsMissingText.scrollIntoViewIfNeeded();
        let text = await this.emailAddressIsMissingText.textContent();
        return text;
    }

    async validateCardNumberIncompleteText() {
        await expect(this.cardNumberIncompleteText).toBeVisible({ timeout: 60000 });
        await this.cardNumberIncompleteText.scrollIntoViewIfNeeded();
        let text = await this.cardNumberIncompleteText.textContent();
        return text;
    }

    async validateCardNumberInvalidText() {
        await expect(this.cardNumberInvalidText).toBeVisible({ timeout: 60000 });
        await this.cardNumberInvalidText.scrollIntoViewIfNeeded();
        let text = await this.cardNumberInvalidText.textContent();
        return text;
    }

    async validateCardExpirationText() {
        await expect(this.cardExpirationText).toBeVisible({ timeout: 60000 });
        await this.cardExpirationText.scrollIntoViewIfNeeded();
        let text = await this.cardExpirationText.textContent();
        return text;
    }

    async firstNameValue() {
        await expect(this.firstName).toBeVisible({ timeout: 60000 });
        await this.firstName.scrollIntoViewIfNeeded();
        let text = await this.firstName.getAttribute('value');
        return text;
    }

    async lastNameValue() {
        await expect(this.lastName).toBeVisible({ timeout: 60000 });
        await this.lastName.scrollIntoViewIfNeeded();
        let text = await this.lastName.getAttribute('value');
        return text;
    }

    async companyNameValue() {
        await expect(this.companyName).toBeVisible({ timeout: 60000 });
        await this.companyName.scrollIntoViewIfNeeded();
        let text = await this.companyName.getAttribute('value');
        return text;
    }

    async jobTitleValue() {
        await expect(this.jobTitle).toBeVisible({ timeout: 60000 });
        await this.jobTitle.scrollIntoViewIfNeeded();
        let text = await this.jobTitle.getAttribute('value');
        return text;
    }

    async addressValue() {
        await expect(this.address).toBeVisible({ timeout: 60000 });
        await this.address.scrollIntoViewIfNeeded();
        let text = await this.address.getAttribute('value');
        return text;
    }

    async cityValue() {
        await expect(this.city).toBeVisible({ timeout: 60000 });
        await this.city.scrollIntoViewIfNeeded();
        let text = await this.city.getAttribute('value');
        return text;
    }

    async postalCodeValue() {
        await expect(this.postalCode).toBeVisible({ timeout: 60000 });
        await this.postalCode.scrollIntoViewIfNeeded();
        let text = await this.postalCode.getAttribute('value');
        return text;
    }

    async phoneNumberValue() {
        await expect(this.phoneNumber).toBeVisible({ timeout: 60000 });
        await this.phoneNumber.scrollIntoViewIfNeeded();
        let text = await this.phoneNumber.getAttribute('value');
        return text;
    }

    async emailValue() {
        await expect(this.email).toBeVisible({ timeout: 60000 });
        await this.email.scrollIntoViewIfNeeded();
        let text = await this.email.getAttribute('value');
        return text;
    }

    async organizationNameValue() {
        await expect(this.organizationName).toBeVisible({ timeout: 60000 });
        await this.organizationName.scrollIntoViewIfNeeded();
        let text = await this.organizationName.getAttribute('value');
        return text;
    }

    async donationTributeRecipientValue() {
        await expect(this.donationTributeRecipient).toBeVisible({ timeout: 60000 });
        await this.donationTributeRecipient.scrollIntoViewIfNeeded();
        let text = await this.donationTributeRecipient.getAttribute('value');
        return text;
    }

    async isDonationFoundationCBChecked() {
        await expect(this.donationFoundationCB).toBeVisible({ timeout: 60000 });
        await this.donationFoundationCB.scrollIntoViewIfNeeded();
        const isChecked = await this.donationFoundationCB.isChecked();
        return isChecked;
    }

    async inHonourOfRBChecked() {
        await expect(this.inHonourOfRdBtn).toBeVisible({ timeout: 60000 });
        await this.inHonourOfRdBtn.scrollIntoViewIfNeeded();
        const isChecked = await this.inHonourOfRdBtn.isChecked();
        return isChecked;
    }

    async validateAnonymousCBChecked() {
        await expect(this.anonymousCB).toBeVisible({ timeout: 60000 });
        await this.anonymousCB.scrollIntoViewIfNeeded();
        let isChecked = await this.anonymousCB.isChecked();
        if (isChecked) {
            logger.info('Checkbox is currently checked.');
        } else {
            logger.info('Checkbox is currently unchecked.');
        }
        return isChecked;
    }

    async fillDonationRecognition() {
        await expect(this.donationRecognition).toBeVisible({ timeout: 60000 });
        await this.donationRecognition.scrollIntoViewIfNeeded();
        await this.donationRecognition.fill(faker.person.fullName());
    }

    async donationRecognitionValue() {
        await expect(this.donationRecognition).toBeVisible({ timeout: 60000 });
        await this.donationRecognition.scrollIntoViewIfNeeded();
        let text = await this.donationRecognition.getAttribute('value');
        return text;
    }

    async fillUserDonationAmount(amount: string) {
        await expect(this.userDonationAmount).toBeVisible({ timeout: 60000 });
        await this.userDonationAmount.scrollIntoViewIfNeeded();
        await this.userDonationAmount.fill(amount)
    }

}