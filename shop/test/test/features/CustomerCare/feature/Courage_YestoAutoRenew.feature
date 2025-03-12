@smoke123
Feature: Test opt-in of auto-renewal functionality
         Validate Auto-renewal is selected

  Scenario: Validate Validate Auto-renewal is selected

    Given User opens URL CourageYestoAutoRenewPage
    When  Verify the Blank First Name Value at CourageYestoAutoRenew Page
    Then  Verify the Blank Last Name Value at CourageYestoAutoRenew Page
    Then  Verify the Blank Comapnay Name Value at CourageYestoAutoRenew Page
    Then  Verify the Blank Job Title Value at CourageYestoAutoRenew Page
    And   Verify the Blank Address1 Value at CourageYestoAutoRenew Page
    And   Verify the Blank Address2 Value at CourageYestoAutoRenew Page
    And   Verify the Blank City Value at CourageYestoAutoRenew Page
    Then  Verify the Blank Postal Code Value at CourageYestoAutoRenew Page
    Then  Verify the Blank Email Address Value at CourageYestoAutoRenew Page
    Then  Verify the Country Value at CourageYestoAutoRenew Page
    Then  Verify the Select  User Province at CourageYestoAutoRenew Page
   
    Scenario: Courage Special Cases - 2 CourageYestoAutoRenew Order
    Given User opens URL CourageYestoAutoRenewPage
    Then  Enter values in Mailing and Billing Address form at CourageYestoAutoRenew Page
    Then  Verify the Autorenew option is enabled at CourageYestoAutorenew page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text
 



