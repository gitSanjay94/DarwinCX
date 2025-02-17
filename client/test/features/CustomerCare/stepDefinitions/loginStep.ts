import { Given, When, Then } from '@cucumber/cucumber';
const { errors } = require('playwright');

import { expect } from '@playwright/test'
import { logger } from '../support/hook'
import { INVALID_USERNAME_PASSWORD, LANDING_URL_ENDPOINT } from '../../../../src/constants';

Given('User opens customare care app', async function () {
    try {
        await this.page.goto(process.env.BASEURL, { timeout: 60000 })
        await this.page.waitForLoadState();
        logger.info(`Opened customer care app and navigated to the Login URL: ${await this.page.url()}`);
    } catch (error: any) {
        if (error instanceof errors.TimeoutError) {
            console.error('Timeout occurred:', error.message);
        } else {
            console.error('Page navigation failed:', error.message);
        }
    }
});

When('Login to customare care app with {string} and {string} and click Login button', async function (username, password) {
    this.loginP = await this.pomManager.getLoginPage();
    await this.loginP.login(username, password);
    logger.info(`Logging into customer care app with username: ${username} and password: ${password}`);
});
When('Login to customare care app with valid credentials', async function () {
    this.loginP = await this.pomManager.getLoginPage();
    expect(await this.loginP.getAppTitle()).toEqual("Auth - Darwin CX")
    await this.loginP.login(process.env.username, process.env.userpassword);
})

Then('Verify user should logged in successfully', async function () {
    try {
        await this.page.waitForURL(LANDING_URL_ENDPOINT, { timeout: 80000 });
        await expect(this.page).toHaveURL(process.env.BASEURL + "/#/care");
        expect(await this.loginP.getAppTitle()).toEqual("Customer Care >< Darwin CX")
        logger.info(`User is logged in successfully and navigated to Landing Page: ${await this.page.url()}`);
        console.log(`User is logged in successfully and navigated to Landing Page: ${await this.page.url()}`);
        this.landPage = await this.pomManager.getLandingPage()
        logger.info('User is logged in successfully to Landing Page')
        await this.page.waitForTimeout(10000)
    } catch (error) {
        logger.info(`Still on the Login Screen , unable to reach the Landing page: ${await this.page.url()}`);
        console.error(`Timeout waiting for URL change!`);
        throw error;
    }
});

Then('Verify warn message "Incorrect username or password." should display to the user', async function () {
    expect(await this.loginP.passwordNotExistWarning()).toEqual(INVALID_USERNAME_PASSWORD)
    logger.info('Successfully verified the warning message "Incorrect username or password."');
});


Then('Verify user should not be able to proceed providing the invalid format', async function () {
    expect(await this.loginP.getEmail()).toHaveAttribute("required")
})



