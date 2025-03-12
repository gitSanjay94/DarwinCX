@smoke 
Feature: Test MasterCard payment option for Canadian orders
         Validate Order is processed successfully with MasterCard.

  Scenario: Validate Blank Fields at CCB_CourageCAOrderMasterCC Page

    Given User opens URL CCB_CourageCAOrderMasterCC
    When  Verify the Blank First Name Value at CCB_CourageCAOrderMasterCC Page
    Then  Verify the Blank Last Name Value at CCB_CourageCAOrderMasterCC Page
    Then  Verify the Blank Comapnay Name Value at CCB_CourageCAOrderMasterCC Page
    Then  Verify the Blank Job Title Value at CCB_CourageCAOrderMasterCC Page
    And   Verify the Blank Address1 Value at CCB_CourageCAOrderMasterCC Page
    And   Verify the Blank Address2 Value at CCB_CourageCAOrderMasterCC Page
    And   Verify the Blank City Value at CCB_CourageCAOrderMasterCC Page
    Then  Verify the Blank Postal Code Value at CCB_CourageCAOrderMasterCC Page
    Then  Verify the Blank Email Address Value at CCB_CourageCAOrderMasterCC Page
    Then  Verify the Country Value at CCB_CourageCAOrderMasterCC Page
    Then  Verify the Select  User Province at CCB_CourageCAOrderMasterCC Page
 
    Scenario: Test MasterCard payment option for Canadian orders
    Given User opens URL CCB_CourageCAOrderMasterCC
    Then  Enter values in Mailing and Billing Address form at CCB_CourageCAOrderMasterCC Page
    When  Enter valid payment details "5555 5555 5555 4444" and "1025"  and "123"
    And   Click on Place Order button 
    Then  Validate Product is not available in selected country text
    Then  Validate Product Unavailable alert text after placing order
    And   Select the Canada Country Available Subscription Option
    And   Click on Place Order button 
    Then  Validate TRANSACTION SUCCESSFUL text
    Then Verify Email Send to Recipient
    Then Verify Email Content



    Scenario: Test MasterCard payment option for CCB_CourageCAOrderMasterCC Gift Recipient Order
    Given User opens URL CCB_CourageCAOrderMasterCC
    And   Select the Canada Country Available Subscription Option
    Then  Enter values in Mailing and Billing Address form at CCB_CourageCAOrderMasterCC Page
    And   Check This Is A Gift checkbox
    And   Enter Canadian values in Gift Recipient Mailing Address form
    When  Enter valid payment details "5555 5555 5555 4444" and "1025"  and "123"
    And   Click on Place Order button
    Then  Validate TRANSACTION SUCCESSFUL text
   
 
   


