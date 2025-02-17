@smoke
Feature: Test opt-in of auto-renewal functionality
         Validate Auto-renewal is selected

  Scenario: Validate Validate Auto-renewal is selected

    Given User opens URL CSC2_CourageYestoAutoRenewPage
    When  Verify the Blank First Name Value at CSC2_CourageYestoAutoRenewPage Page
    Then  Verify the Blank Last Name Value at CSC2_CourageYestoAutoRenewPage Page
    Then  Verify the Blank Comapnay Name Value at CSC2_CourageYestoAutoRenewPage Page
    Then  Verify the Blank Job Title Value at CSC2_CourageYestoAutoRenewPage Page
    And   Verify the Blank Address1 Value at CSC2_CourageYestoAutoRenewPage Page
    And   Verify the Blank Address2 Value at CSC2_CourageYestoAutoRenewPage Page
    And   Verify the Blank City Value at CSC2_CourageYestoAutoRenewPage Page
    Then  Verify the Blank Postal Code Value at CSC2_CourageYestoAutoRenewPage Page
    Then  Verify the Blank Email Address Value at CSC2_CourageYestoAutoRenewPage Page
    Then  Verify the Country Value at CSC2_CourageYestoAutoRenewPage Page
    Then  Verify the Select  User Province at CSC2_CourageYestoAutoRenewPage Page
   
    Scenario: Courage Special Cases - 2 CSC2_CourageYestoAutoRenewPage Order
    Given User opens URL CSC2_CourageYestoAutoRenewPage
    Then  Enter values in Mailing and Billing Address form at CSC2_CourageYestoAutoRenewPage Page
    Then  Verify the Autorenew option is enabled
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text
 



