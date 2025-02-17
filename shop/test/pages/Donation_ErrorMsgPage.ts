
import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';
import exp from 'constants';




export class Donation_ErrorMsgPage {

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
        // this.cardExpirationText = page.getByText('Your card\'s expiry year is in')
        // this.cardExpirationText = page.locator('//div[contains(text(), "Your card\'s") and contains(text(), "year is in the past")]');
        this.cardExpirationText = page.locator('//div[contains(@class, "alert-danger") and contains(@role, "alert") and contains(., "Your card")]');

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

    async clickNextButton() {
        // Get an element handle from the locator
        const nextButtonHandle = await this.nextButton.elementHandle();
        if (nextButtonHandle) {
            // Wait for the element to be attached to the DOM
            await nextButtonHandle.waitForElementState('stable', { timeout: 60000 });
            await this.nextButton.waitFor({ state: 'attached' });
            await expect(this.nextButton).toBeVisible({ timeout: 60000 });
            // Scroll into view and click
            await this.nextButton.scrollIntoViewIfNeeded();
            await this.nextButton.click();
            await this.page.waitForTimeout(8000);
        } else {
            throw new Error("Next button is not found or attached to the DOM.");
        }
    }

    async clickGoBackButton() {
        // Get an element handle from the locator
        const goBackButtonHandle = await this.goBackButton.elementHandle();
        if (goBackButtonHandle) {
            // Wait for the element to be attached to the DOM
            await goBackButtonHandle.waitForElementState('stable', { timeout: 60000 });
            await this.goBackButton.waitFor({ state: 'attached' });
            await expect(this.goBackButton).toBeVisible({ timeout: 60000 });
            // Scroll into view and click
            await this.goBackButton.scrollIntoViewIfNeeded();
            await this.goBackButton.click();
            await this.page.waitForTimeout(8000);
        } else {
            throw new Error("Next button is not found or attached to the DOM.");
        }
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
        // Get an element handle from the locator
        const inHonourOfRdBtnHandle = await this.inHonourOfRdBtn.elementHandle();
        if (inHonourOfRdBtnHandle) {
            // Wait for the element to be attached to the DOM
            await inHonourOfRdBtnHandle.waitForElementState('stable', { timeout: 60000 });
            // Scroll into view and click
            await this.inHonourOfRdBtn.scrollIntoViewIfNeeded();
            await this.inHonourOfRdBtn.check();
        } else {
            throw new Error("Next button is not found or attached to the DOM.");
        }
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
        await expect(this.paymentMethodText).toBeVisible({ timeout: 120000 });
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
        await expect(this.cardExpirationText).toBeVisible({ timeout: 80000 });
        await this.cardExpirationText.scrollIntoViewIfNeeded();
        let text = await this.cardExpirationText.textContent();
        return text;
    }

    async firstNameValue() {
        // Get an element handle from the locator
        const firstNameHandle = await this.firstName.elementHandle();
        if (firstNameHandle) {
            // Wait for the element to be stable
            await firstNameHandle.waitForElementState('stable', { timeout: 60000 });
            await this.firstName.waitFor({ state: 'attached' });
            // Scroll into view
            await this.firstName.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.firstName.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
    }

    async lastNameValue() {
        // Get an element handle from the locator
        const lastNameHandle = await this.lastName.elementHandle();
        if (lastNameHandle) {
            // Wait for the element to be stable
            await lastNameHandle.waitForElementState('stable', { timeout: 60000 });
            await this.lastName.waitFor({ state: 'attached' });
            // Scroll into view
            await this.lastName.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.lastName.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
    }

    async companyNameValue() {
        // Get an element handle from the locator
        const companyNameHandle = await this.companyName.elementHandle();
        if (companyNameHandle) {
            // Wait for the element to be stable
            await companyNameHandle.waitForElementState('stable', { timeout: 60000 });
            await this.companyName.waitFor({ state: 'attached' });
            // Scroll into view
            await this.companyName.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.companyName.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
    }

    async jobTitleValue() {
        // Get an element handle from the locator
        const jobTitleHandle = await this.jobTitle.elementHandle();
        if (jobTitleHandle) {
            // Wait for the element to be stable
            await jobTitleHandle.waitForElementState('stable', { timeout: 60000 });
            await this.jobTitle.waitFor({ state: 'attached' });
            // Scroll into view
            await this.jobTitle.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.jobTitle.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
    }


    async addressValue() {
        // Get an element handle from the locator
        const addressHandle = await this.address.elementHandle();
        if (addressHandle) {
            // Wait for the element to be stable
            await addressHandle.waitForElementState('stable', { timeout: 60000 });
            await this.address.waitFor({ state: 'attached' });
            // Scroll into view
            await this.address.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.address.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
    }

    async cityValue() {
        // Get an element handle from the locator
        const cityHandle = await this.city.elementHandle();
        if (cityHandle) {
            // Wait for the element to be stable
            await cityHandle.waitForElementState('stable', { timeout: 60000 });
            await this.city.waitFor({ state: 'attached' });
            await expect(this.city).toBeVisible({ timeout: 60000 });
            // Scroll into view
            await this.city.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.city.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
    }

    async postalCodeValue() {
        // Get an element handle from the locator
        const postalCodeHandle = await this.postalCode.elementHandle();
        if (postalCodeHandle) {
            // Wait for the element to be stable
            await postalCodeHandle.waitForElementState('stable', { timeout: 60000 });
            await this.postalCode.waitFor({ state: 'attached' });
            // Scroll into view
            await this.postalCode.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.postalCode.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
    }

    async phoneNumberValue() {
        // Get an element handle from the locator
        const phoneNumberHandle = await this.phoneNumber.elementHandle();
        if (phoneNumberHandle) {
            // Wait for the element to be stable
            await phoneNumberHandle.waitForElementState('stable', { timeout: 60000 });
            await this.phoneNumber.waitFor({ state: 'attached' });
            // Scroll into view
            await this.phoneNumber.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.phoneNumber.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
    }

    async emailValue() {
        // Get an element handle from the locator
        const emailHandle = await this.email.elementHandle();
        if (emailHandle) {
            // Wait for the element to be stable
            await emailHandle.waitForElementState('stable', { timeout: 60000 });
            await this.email.waitFor({ state: 'attached' });
            // Scroll into view
            await this.email.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.email.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
    }

    async organizationNameValue() {
        // Get an element handle from the locator
        const organizationNameHandle = await this.organizationName.elementHandle();
        if (organizationNameHandle) {
            // Wait for the element to be stable
            await organizationNameHandle.waitForElementState('stable', { timeout: 60000 });
            await this.organizationName.waitFor({ state: 'attached' });
            // Scroll into view
            await this.organizationName.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.organizationName.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
    }

    async donationTributeRecipientValue() {
        // Get an element handle from the locator
        const donationTributeRecipientHandle = await this.donationTributeRecipient.elementHandle();
        if (donationTributeRecipientHandle) {
            // Wait for the element to be stable
            await donationTributeRecipientHandle.waitForElementState('stable', { timeout: 60000 });
            // Scroll into view
            await this.donationTributeRecipient.scrollIntoViewIfNeeded();
            // Get the 'value' attribute
            const text = await this.donationTributeRecipient.getAttribute('value');
            return text;
        } else {
            throw new Error("Job title element is not found or attached to the DOM.");
        }
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