@regression 
Feature: Enroll AutoRenew Feature
    Valdidate Enroll AutoRenew Feature

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English

# ID1-I3052:Client App: After performing Enroll AutoRenew operation ,
# clicking the View Details against Self Autorenew  is not opening 
# the dialog box showing the detail information of autornew
  Scenario: Enroll autorenew by adding self as recipient
    Given User selects the early access option
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click on Enroll Autorenew
    And Fill Enroll Autorenew popup and add Self as Recipient
    Then Validate Summary section in Enroll Autorenew popup
    And Click Enter New Credit Card in Payment Info Section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Activate button
    Then Validate Transaction Confirmation popup
    When Click OK on Transaction Confirmation popup
    Then Validate self autorenew status as Active in subscriptions section
    Then Validate Auto Renewal Info under Actions Tab
    When Click on Enroll Autorenew
    And Check Expiry radio button in enroll autorenew popup
    Then Validate Self Autorenew already exists button in Enroll Autorenew popup
    When Click Close button in Autorenew Details popup
    When Click View Details in subscriptions section
    Then Validate Product Name, Process Status, Marketing Code, Bundle Price in Autorenew Details popup
    When Click on Cancel Autorenew in Autorenew Details popup
    Then Validate Process Status as Cancelled in Autorenew Details popup
    When Click Close button in Autorenew Details popup
    And Refresh the Landing page
    Then Validate Auto Renewal Info under Actions Tab after Cancellation
    When Click View Details in subscriptions section
    When Click on Activate Autorenew in Autorenew Details popup
    Then Validate Product Name, Process Status, Marketing Code, Bundle Price in Autorenew Details popup
    When Click Close button in Autorenew Details popup
    And Refresh the Landing page
    Then Validate Auto Renewal Info under Actions Tab after Activation

  Scenario: Enroll autorenew by adding another recipient with country as 'Canada'
    Given User selects the early access option
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click on Enroll Autorenew
    And Fill Enroll Autorenew popup and add Another Recipient
    And Click Create Recipient and create 1 Recipients for "Canada"
    Then Validate Summary section in Enroll Autorenew popup
    And Click Enter New Credit Card in Payment Info Section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and No CVV
    And Click on Activate button
    Then Validate Transaction Confirmation popup
    When Click OK on Transaction Confirmation popup
    Then Validate self autorenew status as Active in subscriptions section
    Then Validate Auto Renewal Info under Actions Tab

  @enroll
  Scenario: Enroll autorenew by adding another recipient with country as 'Canada' by removing self recipient
    Given User selects the early access option
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Australia"
    Then Validate customer details should get added successfully
    When Click on Enroll Autorenew
    And Fill Enroll Autorenew popup and add Self as Recipient
    Then Validate Recipient Country Not Available Warning Message
    And Click Create Recipient and create 1 Recipients for "Canada"
    And Click on Remove button to remove Self from Recipient
    Then Validate Summary section in Enroll Autorenew popup
    And Click Enter New Credit Card in Payment Info Section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Activate button
    Then Validate Transaction Confirmation popup
    When Click OK on Transaction Confirmation popup
    Then Validate self autorenew status as Active in subscriptions section
    Then Validate Auto Renewal Info under Actions Tab

# failing due to BUG for customer with special character
  @gift
  Scenario: Enroll autorenew by adding Gift Recipient with country as 'Canada'
    Given User selects the early access option
    Given Click Add Customer button to create the customer
    # When Enter all the fields on the Add Customer form with country  "Australia"
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click on Enroll Autorenew
    And Fill Enroll Autorenew popup and add Self as Recipient
    When Click on add Another Recipient
    And Click search to search the Recipient
    Then Validate Recipient Already Added warning message
    And Fill Enroll Autorenew popup and add Gift Recipient
    And Click Create Recipient and create 1 Recipients for "Canada"
    Then Validate Summary section in Enroll Autorenew popup
    And Click Enter New Credit Card in Payment Info Section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Activate button
    Then Validate Transaction Confirmation popup
    When Click OK on Transaction Confirmation popup
    Then Validate Auto Renewal Info under Actions Tab

  Scenario: Enroll autorenew by adding another recipient with country other than 'Canada'
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click on Enroll Autorenew
    And Fill Enroll Autorenew popup and add Another Recipient
    And Click Create Recipient and create 1 Recipients for "United States"
    Then Validate Recipient Country Not Available Warning Message

  Scenario: Update Autorenew Billing after enroll autorenew
    Given User selects the early access option
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click on Update Autorenew Billing
    When Click on Enroll Autorenew
    And Fill Enroll Autorenew popup and add Self as Recipient
    Then Validate Summary section in Enroll Autorenew popup
    And Click Enter New Credit Card in Payment Info Section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Activate button
    Then Validate Transaction Confirmation popup
    When Click OK on Transaction Confirmation popup
    When Click on Update Autorenew Billing
    When Click on Update Payment Info
    When Click on Payment Method
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and No CVV
    When Fill billing information
    Then Validate autorenew payment information updated
    Then Validate credit card holder
