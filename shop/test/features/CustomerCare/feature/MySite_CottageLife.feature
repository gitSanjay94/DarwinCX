@smoke 
Feature: Test MySite_CottageLife
         Validate MySite_CottageLife


  Scenario: MySite_CottageLife Acc+PO Box
    Given User opens URL MySite_CottageLife
    Then Validate "Account Number Or Email Address" text
    When Fill Account Number Or Email Address with '271596808'
    Then Validate "Last Name Or Postal Code" text
    When Fill Last Name Or Postal Code with '32164'
    When Click on "Sign In" button
    Then Validate My Account Details text
    And Validate "Cottage Life" text
    Then Validate Status as 'Status:Expired'
    # Then Validate Status as 'Status:Not Yet Subscribed'
    And Validate Expiry Issue to be 'Expiry:0000-00-00'
    # And Validate Expiry Issue to be 'Expiry:N/A'
    And Validate Membership Or Account Number to be '271596808'
    Then Validate "My Details" text
    And Validate Full Name as 'Don DeRose' in My Details section
    And Validate Email as 'don.derose@darwin.cx' in My Details section

  Scenario: MySite_CottageLife Sign In with valid credentials
    Given User opens URL MySite_CottageLife
    Then Validate "Account Number Or Email Address" text
    When Fill Account Number Or Email Address with '271596808'
    Then Validate "Last Name Or Postal Code" text
    When Fill Last Name Or Postal Code with '32164'
    When Click on "Sign In" button
    Then Validate My Account Details text
    And Validate "Cottage Life" text

  Scenario: MySite_CottageLife Sign In with incorrect Account Number Or Email Address
    Given User opens URL MySite_CottageLife
    Then Validate "Account Number Or Email Address" text
    When Fill Account Number Or Email Address with '271596807'
    Then Validate "Last Name Or Postal Code" text
    When Fill Last Name Or Postal Code with '32164'
    When Click on "Sign In" button
    Then Validate "Customer Not Found" text

  Scenario: MySite_CottageLife Sign In with invalid Account Number Or Email Address
    Given User opens URL MySite_CottageLife
    Then Validate "Account Number Or Email Address" text
    When Fill Account Number Or Email Address with 'aabc@123dc'
    Then Validate "Last Name Or Postal Code" text
    When Fill Last Name Or Postal Code with '32164'
    When Click on "Sign In" button
    Then Validate "Please provide a valid Account Number" text

  Scenario: MySite_CottageLife Sign In with invalid Last Name Or Postal Code
    Given User opens URL MySite_CottageLife
    Then Validate "Account Number Or Email Address" text
    When Fill Account Number Or Email Address with '271596808'
    Then Validate "Last Name Or Postal Code" text
    When Fill Last Name Or Postal Code with 'abc@123'
    # When Fill Last Name Or Postal Code with 'Abcd@#$234s'
    # ID1-I3468 : My Site - Cottagelife Sign In 02-12-24 : 500 - Internal Server Error is occured
    When Click on "Sign In" button
    Then Validate "Customer Not Found" text

  Scenario: MySite_CottageLife Sign In with incorrect Last Name Or Postal Code
    Given User opens URL MySite_CottageLife
    Then Validate "Account Number Or Email Address" text
    When Fill Account Number Or Email Address with '271596808'
    Then Validate "Last Name Or Postal Code" text
    When Fill Last Name Or Postal Code with '32160'
    When Click on "Sign In" button
    Then Validate "Customer Not Found" text

  Scenario: MySite_CottageLife Email+Last Name
    Given User opens URL MySite_CottageLife
    Then Validate "Account Number Or Email Address" text
    When Fill Account Number Or Email Address with 'don.derose@darwin.cx'
    Then Validate "Last Name Or Postal Code" text
    When Fill Last Name Or Postal Code with 'DeRose'
    When Click on "Sign In" button
    Then Validate My Account Details text
    Then Validate "Cottage Life" text
    When Fetch the status and labels of checkboxes
    Then Validate the Save button is disabled

  Scenario: MySite_CottageLife Acc+Last Name
    Given User opens URL MySite_CottageLife
    Then Validate "Account Number Or Email Address" text
    When Fill Account Number Or Email Address with '271596808'
    Then Validate "Last Name Or Postal Code" text
    When Fill Last Name Or Postal Code with 'DeRose'
    When Click on "Sign In" button
    Then Validate My Account Details text
    Then Validate "Cottage Life" text
    When Click on "Gift Centre" item
    Then Validate "Gift Centre" text
    When Click on "Home" item
    Then Validate "Cottage Life" text
    When Click on "Log Out" item
    Then Validate "Account Number Or Email Address" text
    Then Validate "Last Name Or Postal Code" text

  Scenario: MySite_CottageLife Email+PO Box
    Given User opens URL MySite_CottageLife
    Then Validate "Account Number Or Email Address" text
    When Fill Account Number Or Email Address with 'don.derose@darwin.cx'
    Then Validate "Last Name Or Postal Code" text
    When Fill Last Name Or Postal Code with '32164'
    When Click on "Sign In" button
    Then Validate My Account Details text
    Then Validate "Cottage Life" text
    When Click on "Log Out" item
    Then Validate "Account Number Or Email Address" text
    Then Validate "Last Name Or Postal Code" text

  Scenario: MySite_CottageLife Acc+Last Name Purchase Now
    Given User opens URL MySite_CottageLife
    Then Validate "Account Number Or Email Address" text
    When Fill Account Number Or Email Address with '271596808'
    Then Validate "Last Name Or Postal Code" text
    When Fill Last Name Or Postal Code with 'DeRose'
    When Click on "Sign In" button
    Then Validate My Account Details text
    Then Validate "Cottage Life" text
    When Click on "Purchase Now" button
    When Click on "Cancel" button in the pop up
    Then Click on "Purchase Now" button in the pop up and validate Current Url with CottageLife_PurchasePageUrl
