import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';


export class contactPreferencePage {
    page: Page;
    readonly zoomerThirdPartyOffersByMail: Locator;
    readonly carpThirdPartyOffersByMail: Locator
    readonly updatePref: Locator;
    readonly contactPrefLabel: Locator;
    readonly expandContactPref: Locator;
    readonly updateInfoButton: Locator;
    readonly activePreferencesCount: Locator
    readonly activeeNewslettersCount: Locator
    readonly expandeNewLetterPref: Locator
    readonly updateeNewsLetterPref: Locator
    readonly eNewslettersLabel: Locator;
    readonly expandMembershipTier: Locator;
    readonly memebershipLabel: Locator
    readonly updateMemberShipPref: Locator
    readonly notApplicableMembershipTierRadioButton: Locator
    readonly lifetimeMembershipTierRadioButton: Locator
    readonly activeMemberShipPreferencesCount: Locator

    constructor(page: Page) {
        this.page = page;
        this.zoomerThirdPartyOffersByMail = page.locator('input[name="zoomer_3rd_party_mail"]').first();
        this.carpThirdPartyOffersByMail = page.locator('input[name="CARP_3rd_party_mail"]')
        this.updatePref = page.locator('div').filter({ hasText: /^Mark as Never ContactUpdate$/ }).getByRole('button')
        this.contactPrefLabel = page.getByText('Contact Preferences')
        this.expandContactPref = page.locator("(//*[name()='svg'][@stroke='currentColor'])[1]")
        this.updateInfoButton = page.getByRole('button', { name: 'Update Info' })
        this.activePreferencesCount = page.locator("//div[@class='col-12 col-sm-12 col-md-6 col-lg-4']//div[2]//div[1]//div[2]//b[1]")
        this.activeeNewslettersCount = page.locator("//div[3]//div[1]//div[2]//b[1]")
        this.expandeNewLetterPref = page.locator("(//*[name()='svg'][@stroke='currentColor'])[2]")
        this.updateeNewsLetterPref = page.getByRole('button', { name: 'Update' }).nth(2)
        this.eNewslettersLabel = page.getByText('eNewsletters')
        this.expandMembershipTier = page.locator("(//*[name()='svg'][@stroke='currentColor'])")
        this.memebershipLabel = page.locator('strong').filter({ hasText: 'Membership Tier' })
        this.updateMemberShipPref = page.locator("div[class='card'] div[class='card-body'] div button[type='button']")
        this.lifetimeMembershipTierRadioButton = page.getByRole('radio').nth(3)
        this.notApplicableMembershipTierRadioButton = page.locator("input[value='1'][name='bass_membership']")
        this.activeMemberShipPreferencesCount = page.locator("div[class='card-header'] div b")
    }

    async clickExpandMembershipTier() {
        await this.memebershipLabel.scrollIntoViewIfNeeded({ timeout: 20000 })
        await expect(this.memebershipLabel).toBeVisible({ timeout: 10000 });
        await expect(this.expandMembershipTier).toBeVisible({ timeout: 10000 });
        await this.expandMembershipTier.click({ timeout: 50000 });
        await this.page.waitForTimeout(10000)

    }
    async clickMembershipOffersSelection(prefeName: string) {
        if (prefeName === "Lifetime") {
            await expect(this.lifetimeMembershipTierRadioButton).toBeVisible({ timeout: 20000 })
            await this.lifetimeMembershipTierRadioButton.check({ timeout: 20000 })

        }
        else if (prefeName === "N/A") {
            await expect(this.notApplicableMembershipTierRadioButton).toBeVisible({ timeout: 20000 })
            await this.notApplicableMembershipTierRadioButton.check({ timeout: 20000 })
        }
        await this.page.waitForTimeout(10000)

    }
    async clickUpdateMembershipTierPref() {
        await this.memebershipLabel.scrollIntoViewIfNeeded({ timeout: 30000 })
        await expect(this.updateMemberShipPref).toBeVisible({ timeout: 40000 });
        await this.updateMemberShipPref.click({ timeout: 30000 });

    }
    async clickUpdateeNewLetterPref() {
        await this.eNewslettersLabel.scrollIntoViewIfNeeded({ timeout: 30000 })
        await expect(this.updateeNewsLetterPref).toBeVisible({ timeout: 30000 });
        await this.updateeNewsLetterPref.click({ timeout: 30000 });

    }
    async clickExpandeNewLetterPref() {
        await this.eNewslettersLabel.scrollIntoViewIfNeeded({ timeout: 20000 })
        await expect(this.expandeNewLetterPref).toBeVisible({ timeout: 20000 });
        await this.expandeNewLetterPref.click({ timeout: 40000 });

    }

    async getActiveEnewslettersCount() {
        await expect(this.activeeNewslettersCount).toBeVisible({ timeout: 10000 });
        const prefCount = await this.activeeNewslettersCount.textContent()
        logger.info("getActivePreferencesCount ********** : ", prefCount)
        if (prefCount != null && prefCount != undefined)
            return prefCount.trim()

    }
    async getActiveMemberShipTiersCount() {
        await expect(this.activeMemberShipPreferencesCount).toBeVisible({ timeout: 10000 });
        const prefCount = await this.activeMemberShipPreferencesCount.textContent()
        logger.info("activeMemberShipPreferencesCount ********** : ", prefCount)
        if (prefCount != null && prefCount != undefined)
            return prefCount.trim()

    }
    async getActivePreferencesCount() {
        await expect(this.activePreferencesCount).toBeVisible({ timeout: 10000 });
        const prefCount = await this.activePreferencesCount.textContent()
        logger.info("getActivePreferencesCount ********** : ", prefCount)
        if (prefCount != null && prefCount != undefined)
            return prefCount

    }
    async clickUpdateInfoButton() {
        await expect(this.updateInfoButton).toBeVisible({ timeout: 30000 });
        await this.updateInfoButton.click({ timeout: 40000 });

    }

    async clickThirdPartyOffersByMail(prefePosition: string) {
        await expect(this.zoomerThirdPartyOffersByMail).toBeVisible({ timeout: 30000 });
        if (prefePosition === "first")
            await this.zoomerThirdPartyOffersByMail.first().check();
        else if (prefePosition === "second")
            await this.zoomerThirdPartyOffersByMail.nth(1).check();
        else
            logger.info("incorrect option ")

    }

    async clickCarpMembershipOffers(prefeName: string) {
        await this.page.waitForTimeout(10000);
        await expect(this.page.locator(`input[name="${prefeName}"]`)).toBeVisible({ timeout: 30000 })
        await this.page.locator(`input[name="${prefeName}"]`).check({ timeout: 60000 });
    }

    async clickUpdateContactPreference() {
        await this.contactPrefLabel.scrollIntoViewIfNeeded({ timeout: 30000 })
        await expect(this.updatePref).toBeVisible({ timeout: 30000 });
        await this.updatePref.click({ timeout: 30000 });

    }
    async clickExpandContactPref() {
        await this.contactPrefLabel.scrollIntoViewIfNeeded({ timeout: 20000 })
        await expect(this.expandContactPref).toBeVisible({ timeout: 20000 });
        await this.expandContactPref.click({ timeout: 20000 });
    }
    async clickOfferDynamically(prefeName: string, prefePosition: string) {
        if (prefePosition === "first") {
            await expect(this.page.locator(`input[name="${prefeName}"]`).first()).toBeVisible({ timeout: 30000 })
            await this.page.locator(`input[name="${prefeName}"]`).first().check({ timeout: 30000 });

        }
        else {
            await this.page.locator(`input[name="${prefeName}"]`).nth(1).check({ timeout: 30000 });
        }

    }

    async validateMembershipOffersSelection(prefeName: string) {
        if (prefeName === "Lifetime") {
            await expect(this.lifetimeMembershipTierRadioButton).toBeVisible({ timeout: 20000 })
            await this.lifetimeMembershipTierRadioButton.isChecked({ timeout: 20000 })

        }
        else if (prefeName === "N/A") {
            await expect(this.notApplicableMembershipTierRadioButton).toBeVisible({ timeout: 20000 })
            await this.notApplicableMembershipTierRadioButton.isChecked({ timeout: 20000 })
        }
        await this.page.waitForTimeout(10000)

    }
}