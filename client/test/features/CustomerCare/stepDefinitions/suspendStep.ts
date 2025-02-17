import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { logger } from '../support/hook'



When('Click Suspend while away', async function(){   
    this.landPage = this.pomManager.getLandingPage()
    // await this.page.waitForTimeout(60000);
    await this.landPage.clickSendWhileAwayButton()
    logger.info('Clicked the "Suspend while away" button');
})

When('Select the first item in the list to suspend', async function() {
    this.suspendPage = this.pomManager.getSuspendPage()
    //await this.page.waitForTimeout(80000)
    await this.suspendPage.suspendFirstOption()
    //  await this.suspendPage.suspendBasedonTheme()
    //  await this.suspendPage.suspendBasedonItemNumber()
     await this.suspendPage.confirmSuspension();
     logger.info('Selected the first item in the list to suspend and confirmed the suspension');
})

Then('Validate the corresponding entry under the action tab', async function() {
   await this.landPage.selectActionTab();
//    await this.page.waitForTimeout(60000)
   expect(await this.landPage.getActionType()).toContain("Suspend while away")
   expect(await this.landPage.getActionDetail()).toContain("Issues under suspension:")
   logger.info('Successfully validated the corresponding entry under the action tab');
})



