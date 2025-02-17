@smoke 
Feature: Upsell Hidden (1) functionality
         Validate that no upsell option is visible when hidden

  Scenario: Validate Blank Values when upsell option is hidden

    Given User opens URL Upsells_HiddenPage
    When  Verify the Blank First Name Value at Upsells_Hidden Page
    Then  Verify the Blank Last Name Value at Upsells_Hidden Page
    Then  Verify the Blank Comapnay Name Value at Upsells_Hidden Page
    Then  Verify the Blank Job Title Value at Upsells_Hidden Page
    And   Verify the Blank Address1 Value at Upsells_Hidden Page
    And   Verify the Blank Address2 Value at Upsells_Hidden Page
    And   Verify the Blank City Value at Upsells_Hidden Page
    Then  Verify the Blank Postal Code Value at Upsells_Hidden Page
    Then  Verify the Blank Email Address Value at Upsells_Hidden Page
    Then  Verify the Country Value at Upsells_Hidden Page
    Then  Verify the Select  User Province at Upsells_Hidden Page
  
    Scenario: Validate Upgrade Your Subscription element is not be visible
    Given User opens URL Upsells_HiddenPage
    Then  The Upgrade Your Subscription element should not be visible
    

    Scenario: Upsells_Hidden Order
    Given User opens URL Upsells_HiddenPage
    Then  The Upgrade Your Subscription element should not be visible
    Then  Enter values in Mailing and Billing Address form at Upsells_Hidden Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click on No Thanks Button in Upsell Popup
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text
    
    Scenario: Upsells_Hidden Order with Autorenew Option Enabled
    Given User opens URL Upsells_HiddenPage
    Then  The Upgrade Your Subscription element should not be visible
    Then  Enter values in Mailing and Billing Address form at Upsells_Hidden Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click on No Thanks Button in Upsell Popup
    Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderBillMe Page
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text
 



