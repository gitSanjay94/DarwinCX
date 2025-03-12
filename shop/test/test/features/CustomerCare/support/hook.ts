import { After, AfterAll, Before, BeforeAll, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext } from '@playwright/test';
import winston, { Logger } from 'winston';
import { PomManager } from '../../../pages/PomManager';
import { getEnv } from '../../../../src/util/env/env';
import { invokeBrowser } from '../../../../src/util/intializeBrowser';
import { logOptions } from '../../../../src/util/log/logger';
const fs = require("fs-extra");
import {setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(150000)
let browser: Browser;
let context: BrowserContext;
export let logger: Logger;

/**
 * BeforeAll() is used to create the Browser before all test scenarios
 */
BeforeAll({ timeout: 150000 }, async function () {
    getEnv();
    browser = await invokeBrowser();
})
/**
 * Before() is used to create the Browser Context before each test scenarios
 * To create page instance from the browser context and pass the same to the PomManager constructor.
 */
Before({ timeout: 120000 }, async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id
    console.log("Started executing Test Case:- ", pickle.name)
    logger = winston.createLogger(logOptions(pickle.name))
    context = await browser.newContext({
        recordVideo: {
            dir: "test_results/videos",
        },        
    });
    await context.tracing.start({
        name: pickle.name,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
    this.page = await context.newPage();
    this.pomManager = new PomManager(this.page);
});

/**
 * After() is used to close the Browser Context and page after each test scenarios
 * To attach the snpahot and video with the test report.
 */
After({ timeout: 200000 }, async function ({ pickle, result }) {
    let videoPath!: string;
    let img!: Buffer;
    const path = `./test_results/trace/${pickle.id}.zip`;
    if (result?.status == Status.FAILED) {
        img = await this.page.screenshot({ path: `./test_results/screenshots/${pickle.name}.png`, type: "png", fullPage: false })
        videoPath = await this.page.video().path();
    }
    await context.tracing.stop({ path: path });
    await this.page.close();
    await context.close();
    if (result?.status == Status.FAILED) {
        await this.attach(img, "image/png");
        await this.attach(fs.readFileSync(videoPath), 'video/webm');
        const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${path}</a>`
        await this.attach(`Trace file: ${traceFileLink}`, 'text/html');    
    }
});