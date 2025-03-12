import { expect, FrameLocator, Locator, type Page } from '@playwright/test';
import { logger } from '../features/CustomerCare/support/hook';
import { faker } from '@faker-js/faker';


export class MySite_MotortrendPage {

  page: Page;
  readonly welcomeToYourMotortrendAccountText: Locator;
  readonly myMotortrendSubscriptionText: Locator;
  readonly motortrendText: Locator;

  constructor(page:Page){
    this.page = page;
    this.welcomeToYourMotortrendAccountText = page.getByText('Welcome to your Motortrend account.')
    this.myMotortrendSubscriptionText = page.getByText('My Motortrend Subscription')
    this.motortrendText = page.locator("//a[text()='Motortrend']")
  }

  async validateWelcomeToYourMotortrendAccountText(){
    await expect(this.welcomeToYourMotortrendAccountText).toBeVisible({timeout: 60000});
    await this.welcomeToYourMotortrendAccountText.scrollIntoViewIfNeeded();
    let text = await this.welcomeToYourMotortrendAccountText.textContent();
    return text;
  }

  async validateMyMotortrendSubscriptionText(){
    await expect(this.myMotortrendSubscriptionText).toBeVisible({timeout: 60000});
    await this.myMotortrendSubscriptionText.scrollIntoViewIfNeeded();
    let text = await this.myMotortrendSubscriptionText.textContent();
    return text;
  }

  async validateMotortrendText(){
    await expect(this.motortrendText).toBeVisible({timeout: 60000});
    await this.motortrendText.scrollIntoViewIfNeeded();
    let text = await this.motortrendText.textContent();
    return text;
  }
}