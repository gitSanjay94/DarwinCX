
@smoke 
Feature: Upsell View With Upsell functionality
         Validate that upsell option is visible when hidden

  Scenario: Validate that upsell option is visible

    Given User opens URL Upsells_ViewWithUpsellPage
    When  Verify the Blank First Name Value at Upsells_ViewWithUpsell Page
    Then  Verify the Blank Last Name Value at Upsells_ViewWithUpsell Page
    Then  Verify the Blank Comapnay Name Value at Upsells_ViewWithUpsell Page
    Then  Verify the Blank Job Title Value at Upsells_ViewWithUpsell Page
    And   Verify the Blank Address1 Value at Upsells_ViewWithUpsell Page
    And   Verify the Blank Address2 Value at Upsells_ViewWithUpsell Page
    And   Verify the Blank City Value at Upsells_ViewWithUpsell Page
    Then  Verify the Blank Postal Code Value at Upsells_ViewWithUpsell Page
    Then  Verify the Blank Email Address Value at Upsells_ViewWithUpsell Page
    Then  Verify the Country Value at Upsells_ViewWithUpsell Page
    Then  Verify the Select  User Province at Upsells_ViewWithUpsell Page
  
    Scenario: Validate that upsell option is visible
    Given User opens URL Upsells_ViewWithUpsellPage
    Then  The Upgrade Your Subscription element should be visible
    

    Scenario: Validate order with upsell option is visible
    Given User opens URL Upsells_ViewWithUpsellPage
    Then  The Upgrade Your Subscription element should be visible
    Then  Enter values in Mailing and Billing Address form at Upsells_ViewWithUpsell Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text

    Scenario: Validate order with upsell option is visible & selected
    Given User opens URL Upsells_ViewWithUpsellPage
    Then  The Upgrade Your Subscription element should be visible
    Then Click on Select Button in Upsell Popup at Upsells_ViewWithUpsell Page
    Then  Enter values in Mailing and Billing Address form at Upsells_ViewWithUpsell Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text


    Scenario: Validate order with upsell option is visible & selected with Autorenew Checkbox
    Given User opens URL Upsells_ViewWithUpsellPage
    Then  The Upgrade Your Subscription element should be visible
    Then Click on Select Button in Upsell Popup at Upsells_ViewWithUpsell Page
    Then  Enter values in Mailing and Billing Address form at Upsells_ViewWithUpsell Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderBillMe Page
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text
 



