 @smoke
Feature: Test Courage CA Mail Addtion
         Validate Courage CA Mail Add Diff

  Scenario: Validate Courage CA Mail Add Diff Page Blank fields Values
    Given User opens URL Courage_CA1Gift
    When  Verify the Blank First Name Value at Courage_CA1Gift Page
    Then  Verify the Blank Last Name Value at Courage_CA1Gift Page
    # Then  Verify the Blank Comapnay Name Value at Courage_CA1Gift Page
    # Then  Verify the Blank Job Title Value at Courage_CA1Gift Page
    And   Verify the Blank Address1 Value at Courage_CA1Gift Page
    # And   Verify the Blank Address2 Value at Courage_CA1Gift Page
    # And   Verify the Blank City Value at Courage_CA1Gift Page
    Then  Verify the Blank Postal Code Value at Courage_CA1Gift Page
    Then  Verify the Blank Email Address Value at Courage_CA1Gift Page
    Then  Verify the Country Value at Courage_CA1Gift Page
    Then  Verify the Select  User Province at Courage_CA1Gift Page
   

    Scenario: Validate Courage CA Mail Add Diff Page order process
     Given User opens URL Courage_CA1Gift
     And   Select the Canada Country Available Subscription Option at Courage_CA1Gift Page
     Then  Enter values in Mailing and Billing Address form at Courage_CA1Gift Page
     Then  Validate number of char in Billing Address 2 text field to be 32 at Courage_CA1Gift     
     Then  Validate the CartItems at Courage_CA1Gift Page
     Then  Validate the CartItems USD Value at Courage_CA1Gift Page
     When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
     And  Click on Place Order button 
     Then Validate TRANSACTION SUCCESSFUL text


    Scenario: Validate Courage CA Mail Add Diff Page Gift Recipient order proces
    Given User opens URL Courage_CA1Gift
    And   Select the Canada Country Available Subscription Option at Courage_CA1Gift Page
    Then  Enter values in Mailing and Billing Address form at Courage_CA1Gift Page
    And   Check This Is A Gift checkbox at Courage_CA1Gift Page
    And   Enter values in Gift Recipient Mailing Address form at at Courage_CA1Gift Page
    Then  Validate number of char in Gift Recipient Address text field to be 32 at Courage_CA1Gift
    Then  Validate the CartItems at Courage_CA1Gift Page
    Then  Validate the CartItems USD Value at Courage_CA1Gift Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And   Click on Place Order button
    Then  Validate TRANSACTION SUCCESSFUL text
 

   Scenario: Validate Courage CA Mail Add Diff Page with Differnt mailing address
    Given User opens URL Courage_CA1Gift
    And Select the Canada Country Available Subscription Option at Courage_CA1Gift Page
    Then  Enter values in Mailing and Billing Address form at Courage_CA1Gift Page
    And   Check I have a different mailing address checkbox at Courage_CA1Gift page
    And   Enter values in Mailing Address form at Courage_CA1Gift page
    Then  Validate Mailing Address text at Courage_CA1GiftPage
    Then  Validate number of char in Different Billing Address text field to be 32 at Courage_CA1Gift
    Then  Validate the CartItems at Courage_CA1Gift Page
    Then Validate the CartItems USD Value at Courage_CA1Gift Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And   Click on Place Order button
    Then  Validate TRANSACTION SUCCESSFUL text
