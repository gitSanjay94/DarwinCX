import { expect, type Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class emCustomMarkupsPage {
    page: Page;
    readonly saveButton: Locator;
    readonly cancelButton: Locator;
    readonly editButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.saveButton = page.getByRole('button', { name: 'Save' })
        this.cancelButton = page.getByRole('button', { name: 'Cancel' })
        this.editButton = page.getByRole('button', { name: 'Edit' })
    }

    async clickSaveButton() {
        try {
            await this.page.waitForTimeout(6000)
            await expect(this.saveButton).toBeVisible({ timeout: 6000 });
            await this.saveButton.click();
            await this.page.waitForTimeout(6000)
        } catch (error) {
            logger.info(`Element ${this.saveButton} not found or not visible: `, error);
            console.error(`Element ${this.saveButton} not found or not visible: `, error);
        }
    }

    async clickCancelButton() {
        try {
            await expect(this.cancelButton).toBeVisible({ timeout: 6000 });
            await this.cancelButton.click();
        } catch (error) {
            logger.info(`Element ${this.cancelButton} not found or not visible: `, error);
            console.error(`Element ${this.cancelButton} not found or not visible: `, error);
        }
    }

    async clickEditButton() {
        try {
            await expect(this.editButton).toBeVisible({ timeout: 6000 });
            await this.editButton.click();
        } catch (error) {
            logger.info(`Element ${this.editButton} not found or not visible: `, error);
            console.info(`Element ${this.editButton} not found or not visible: `, error);
        }
    }

    async validateEditButton() {
        try {
            expect(this.editButton).toBeVisible({ timeout: 6000 });
            let text = await this.editButton.textContent();
            return text;
        } catch (error) {
            logger.info('Element not found or not visible', error);
            console.info('Element not found or not visible', error);
        }
    }

    async editCustomMarkups() {
        try {
            await this.page.getByPlaceholder('Select').click();
            await this.page.getByText('American Samoa').click();
            await this.page.getByLabel('*|Carl_cancel|* Markup Content').click();
            await this.page.getByLabel('*|Carl_cancel|* Markup Content').clear();
            await this.page.getByLabel('*|Carl_cancel|* Markup Content').fill('Custom content' + faker.number.int({ min: 1, max: 1000 }).toString());
            await this.page.getByLabel('Autorenew Markup Content').click();
            await this.page.getByLabel('Autorenew Markup Content').clear();
            await this.page.getByLabel('Autorenew Markup Content').fill('testing autorenew' + faker.number.int({ min: 1, max: 1000 }).toString());
            await this.page.locator("//textarea[@id='giftsMarkupContent']").click();
            await this.page.locator("//textarea[@id='giftsMarkupContent']").clear();
            await this.page.locator("//textarea[@id='giftsMarkupContent']").fill('testing gifts' + faker.number.int({ min: 1, max: 1000 }).toString());
            await this.page.getByLabel('Product type of issues Markup Content').click();
            await this.page.getByLabel('Product type of issues Markup Content').clear();
            await this.page.getByLabel('Product type of issues Markup Content').fill('testing product type issue' + faker.number.int({ min: 1, max: 1000 }).toString());

        } catch (error) {
            logger.info('Element not found or not visible: ', error);
            console.info('Element not found or not visible: ', error);
        }
    }
}