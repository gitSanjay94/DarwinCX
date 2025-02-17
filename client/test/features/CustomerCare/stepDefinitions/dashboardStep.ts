import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { logger } from "../support/hook";

When('User selects the early access option', async function () {
  this.landPage = this.pomManager.getLandingPage()
  await this.landPage.selectEarlyAccessOption()
  logger.info('Selected the early access option');
})

Then('User selects the Survey and Demographic tab', async function () {
  await this.landPage.selectSurveyDemographicTab()
  logger.info('Selected the Survey and Demographic tab');
})

Then('Selects the gender as {string}', async function (s: string) {
  await this.landPage.selectGenderFromDropdown()
  await this.page.waitForTimeout(20000)
  logger.info(`Selected the gender as ${s}`);
})

Then('Validate the information under the Action tab', async function () {
  await this.page.waitForTimeout(70000)
  await this.landPage.selectActionTab()
  await this.page.waitForTimeout(20000)
  expect(await this.landPage.getActionsType()).toContain("update subscription preference")
  expect(await this.landPage.getActionsSubType()).toContain("Survey & Demographic")
  expect(await this.landPage.getActionsDetails()).toContain("gender updated from")
  logger.info('Validated the information under the Action tab');
})

Then('Validate edited information should reflect under the Survey and Demographic tab', async function () {
  const selecteGender = await this.landPage.validateSurveyGender()
  expect(selecteGender).toEqual("2")
  logger.info('Validated that the edited information reflects under the Survey and Demographic tab');
})

Then('click on Edit button to Edit the demographic information', async function () {
  await this.landPage.clickEditToUpdateDemographic()
  logger.info('Clicked on the Edit button to edit demographic information');
})

Then('Click Demographic Update Info button', async function () {
  await this.landPage.clickDemographicUpdateInfo()
  //await this.page.waitForTimeout(50000)
  await this.page.waitForTimeout(20000)
  logger.info('Clicked the Demographic Update Info button');
})
