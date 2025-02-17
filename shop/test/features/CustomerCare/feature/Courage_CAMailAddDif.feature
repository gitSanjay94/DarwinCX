@smoke
Feature: Test Courage CA Mail Addtion
         Validate Courage CA Mail Add Diff

  Scenario: Validate Courage CA Mail Add Diff Page Blank fields Values
    Given User opens URL Courage CAMailAddDif
    When Verify the Blank First Name Value at Courage_CAMailAddDif Page
    Then Verify the Blank Last Name Value at Courage_CAMailAddDif Page
    Then Verify the Blank Comapnay Name Value at Courage_CAMailAddDif Page
    Then Verify the Blank Job Title Value at Courage_CAMailAddDif Page
    And Verify the Blank Address1 Value at Courage_CAMailAddDif Page
    And Verify the Blank Address2 Value at Courage_CAMailAddDif Page
    And Verify the Blank City Value at Courage_CAMailAddDif Page
    Then Verify the Blank Postal Code Value at Courage_CAMailAddDif Page
    Then Verify the Blank Email Address Value at Courage_CAMailAddDif Page
    Then Verify the Country Value at Courage_CAMailAddDif Page
    Then Verify the Select  User Province at Courage_CAMailAddDif Page

  Scenario: Validate Courage CA Mail Add Diff Page order process
    Given User opens URL Courage CAMailAddDif
    And Select the Canada Country Available Subscription Option at Courage_CAMailAddDif Page
    Then Enter values in Mailing and Billing Address form at Courage_CAMailAddDif Page
    Then Validate number of char in Billing Address 2 text field to be 32 at Courage_CAMailAddDif
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate Courage CA Mail Add Diff Page Gift Recipient order proces
    Given User opens URL Courage CAMailAddDif
    And Select the Canada Country Available Subscription Option at Courage_CAMailAddDif Page
    Then Enter values in Mailing and Billing Address form at Courage_CAMailAddDif Page
    And Check This Is A Gift checkbox at Courage_CAMailAddDif Page
    And Enter values in Gift Recipient Mailing Address form at at Courage_CAMailAddDif Page
    Then Validate number of char in Gift Recipient Address text field to be 32 at Courage_CAMailAddDif
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate Courage CA Mail Add Diff Page with Differnt mailing address
    Given User opens URL Courage CAMailAddDif
    And Select the Canada Country Available Subscription Option at Courage_CAMailAddDif Page
    Then Enter values in Mailing and Billing Address form at Courage_CAMailAddDif Page
    And Check I have a different mailing address checkbox at Courage_CAMailAddDif page
    And Enter values in Mailing Address form at Courage_CAMailAddDif page
    Then Validate Mailing Address text at Courage_CAMailAddDifPage
    Then Validate number of char in Different Billing Address text field to be 32 at Courage_CAMailAddDif
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text


  Scenario: Validate Auto Renew my subscription
    Given User opens URL Courage CAMailAddDif
    Then Validate Mailing and Billing Address text
    Then Verify the visibility and text of the Auto Renew My Subscription element
    When Select Product PB1134 US Specific Subscription
    Then Verify the visibility and text of the Auto Renew My Subscription element
    When Select Product PB1135 US Specific Subscription
    Then Verify the visibility and text of the Auto Renew My Subscription element
    When Select Product PB1137 CA Specific Subscription
    Then Verify the visibility and text of the Auto Renew My Subscription element
    When Select Product PB1138 INT Specific Subscription
    Then Verify the visibility and text of the Auto Renew My Subscription element
    When Select Product PB1139 INT Specific Subscription
    Then Verify the visibility and text of the Auto Renew My Subscription element
    When Select Product PB1343 US Specific Subscription
    Then Verify the visibility and text of the Auto Renew My Subscription element
    When Select Product PB1042 Donation Specific Subscription
    Then Verify the visibility and text of the Auto Renew My Subscription element
    When Select Product PB1529 1 Year Digital Specific Subscription
    Then Verify the visibility and text of the Auto Renew My Subscription element
    When Select Product PB1530 2 Year Digital Specific Subscription
    Then Verify the visibility and text of the Auto Renew My Subscription element
    When Select the Canada Country Available Subscription Option
    Then Verify the visibility and text of the Auto Renew My Subscription element
    Then Enter values in Mailing and Billing Address form at Courage_CAMailAddDif Page
    # When Purchaser Auto Renew Option Check Box
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
