import { expect, type Locator, type Page } from '@playwright/test';


export class cancelSubscriptionPage {
    page: Page;
   
    readonly originalRefundMode: Locator;
    readonly chequeRefundMode: Locator;
    readonly firstItemCancellation: Locator;
    readonly reasonDetail: Locator;
    readonly reasonDropDown: Locator;
    readonly actualReason: Locator;
    readonly resetbutton: Locator;
    readonly exitButton: Locator;
    readonly cancelSubscriptionButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.originalRefundMode = page.locator('#original')
        this.chequeRefundMode = page.locator('#cheque')
        this.firstItemCancellation = page.locator('input[name="cancellation0"]')
        this.reasonDetail = page.locator('input[name="reasonDetail"]')
        this.reasonDropDown = page.locator("//button[normalize-space()='Select Reason']")
        this.actualReason = page.getByRole('button', { name: 'TOO EXPENSIVE' })
        this.resetbutton = page.locator("//button[normalize-space()='Exit']")
        this.exitButton = page.locator("//button[normalize-space()='Reset Fields']")
        this.cancelSubscriptionButton=page.getByRole('button', { name: 'Cancel Subscription', exact: true })
        
    }

    async clickCancelSub() {
        await expect(this.cancelSubscriptionButton).toBeVisible({ timeout: 10000 });
        await this.cancelSubscriptionButton.click();
      
    }
    async selectCancellationReason() {
        await expect(this.reasonDropDown).toBeVisible({ timeout: 30000 });
        await this.reasonDropDown.click();
        await expect(this.actualReason).toBeVisible({ timeout: 30000 });
        await this.actualReason.click();
    }
    
    async fillCancellationDetailReason() {
        await expect(this.reasonDetail).toBeVisible({ timeout: 30000 });
        await this.reasonDetail.fill("Reason Detail filled by automation")
    }
    async selectChequeRefundMode() {
        await expect(this.chequeRefundMode).toBeVisible({ timeout: 60000 });
        await this.chequeRefundMode.check()
    }
    async selectOriginalRefundMode() {
        await expect(this.originalRefundMode).toBeVisible({ timeout: 30000 });
         await this.originalRefundMode.check()
    }
    async selectItemToCancel() {
        await expect(this.firstItemCancellation).toBeVisible({ timeout: 30000 });
        await this.firstItemCancellation.check()
    }
}