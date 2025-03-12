@smoke
Feature: Test opt-out of auto-renewal functionality
         Validate Auto-renewal is not selected

  Scenario: Validate Validate Auto-renewal is not selected

    Given User opens URL CSC2_CourageNOtoAutoRenewPage
    When  Verify the Blank First Name Value at CSC2_CourageNOtoAutoRenewPage Page
    Then  Verify the Blank Last Name Value at CSC2_CourageNOtoAutoRenewPage Page
    Then  Verify the Blank Comapnay Name Value at CSC2_CourageNOtoAutoRenewPage Page
    Then  Verify the Blank Job Title Value at CSC2_CourageNOtoAutoRenewPage Page
    And   Verify the Blank Address1 Value at CSC2_CourageNOtoAutoRenewPage Page
    And   Verify the Blank Address2 Value at CSC2_CourageNOtoAutoRenewPage Page
    And   Verify the Blank City Value at CSC2_CourageNOtoAutoRenewPage Page
    Then  Verify the Blank Postal Code Value at CSC2_CourageNOtoAutoRenewPage Page
    Then  Verify the Blank Email Address Value at CSC2_CourageNOtoAutoRenewPage Page
    # Then  Verify the Autorenew option is enabled or disabled
    Then  Verify the Country Value at CSC2_CourageNOtoAutoRenewPage Page
    Then  Verify the Select  User Province at CSC2_CourageNOtoAutoRenewPage Page
   


    Scenario: Courage Special Cases - 2 CSC2_CourageNOtoAutoRenewPage Order
    Given User opens URL CSC2_CourageNOtoAutoRenewPage
    Then  Enter values in Mailing and Billing Address form at CSC2_CourageNOtoAutoRenewPage Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text
 



