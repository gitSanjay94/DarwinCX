
@smoke
Feature: Test ordering process with three gifts for Canadian users
         Validate ordering process with three gifts for Canadian users

  Scenario: Validate Courage CA with three gifts for Canadian users Page Blank fields Values
    Given User opens URL Courage_CA3Gift
    When  Verify the Blank First Name Value at Courage_CA3Gift Page
    Then  Verify the Blank Last Name Value at Courage_CA3Gift Page
    Then  Verify the Blank Comapnay Name Value at Courage_CA3Gift Page
    Then  Verify the Blank Job Title Value at Courage_CA3Gift Page
    And   Verify the Blank Address1 Value at Courage_CA3Gift Page
    And   Verify the Blank Address2 Value at Courage_CA3Gift Page
    And   Verify the Blank City Value at Courage_CA3Gift Page
    Then  Verify the Blank Postal Code Value at Courage_CA3Gift Page
    Then  Verify the Blank Email Address Value at Courage_CA3Gift Page
    Then  Verify the Country Value at Courage_CA3Gift Page
    Then  Verify the Select  User Province at Courage_CA3Gift Page
   

    Scenario: Validate Courage CA order process By Enter values in Mailing and Billing Address
     Given User opens URL Courage_CA3Gift
     And   Select the Canada Country Available Subscription Option at Courage_CA3Gift Page
     Then  Enter values in Mailing and Billing Address form at Courage_CA3Gift Page
     Then  Validate number of char in Billing Address 2 text field to be 32 at Courage_CA3Gift     
     When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
     And  Click on Place Order button 
     Then Validate TRANSACTION SUCCESSFUL text


    Scenario: Validate Courage CA ordering process with three gifts for Canadian users
    Given User opens URL Courage_CA3Gift
    And   Select the Canada Country Available Subscription Option at Courage_CA3Gift Page
    Then  Enter values in Mailing and Billing Address form at Courage_CA3Gift Page
    And   Check This Is A Gift checkbox at Courage_CA3Gift Page
    And   Enter values in Gift Recipient Mailing Address form at at Courage_CA3Gift Page
    Then  Validate number of char in Gift Recipient Address text field to be 32 at Courage_CA3Gift
    # Then  Validate the CartItems at Courage_CA3Gift Page
    Then  Click on Add Gift Recipient Button at Courage_CA3Gift Page
    Then  Fill the values in Gift Recipient Mailing Address form at at Courage_CA3Gift Page
    Then  Click on Add Gift Recipient Button at Courage_CA3Gift Page
    Then  Fill the values third time in Gift Recipient Mailing Address form at at Courage_CA3Gift Page
    Then  Validate the CartItems USD Value at Courage_CA3Gift Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And   Click on Place Order button
    Then  Validate TRANSACTION SUCCESSFUL text
 

   Scenario: Validate Courage CA order process with Differnt mailing address
    Given User opens URL Courage_CA3Gift
    And Select the Canada Country Available Subscription Option at Courage_CA3Gift Page
    Then  Enter values in Mailing and Billing Address form at Courage_CA3Gift Page
    And   Check I have a different mailing address checkbox at Courage_CA3Gift page
    And   Enter values in Mailing Address form at Courage_CA3Gift page
    Then  Validate Mailing Address text at Courage_CA3GiftPage
    Then  Validate number of char in Different Billing Address text field to be 32 at Courage_CA3Gift
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And   Click on Place Order button
    Then  Validate TRANSACTION SUCCESSFUL text
