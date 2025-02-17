@smoke 
Feature: Test Donation Error Msg
         Validate Donation Error Msg 

  Scenario: Validate Donation Error Msg In honour of
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select In Honour Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous"

  Scenario: Validate Donation Error Msg In memory of
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select One Time radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select In Memory Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous"

  Scenario: Validate Name Is Missing text when Donation Tribute Recipient name is empty
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select One Time radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select In Memory Of radio button
    And Click Next button
    Then Validate "Name is missing" text

  Scenario: Validate Donation Error Msg on behalf of a company with empty Organization Name
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select Donation Foundation checkbox
    And Click Next button
    Then Validate "required" text

  Scenario: Validate Donation Msg on behalf of a company with valid Organization Name
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select Donation Foundation checkbox
    And Fill Organization Name
    And Select In Memory Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous"

  Scenario: Validate Donation Error Msg Amount cannot be blank in page 1
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Click Next button
    Then Validate "Amount cannot be blank" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select Donation Foundation checkbox
    And Fill Organization Name
    And Select In Honour Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    And Validate Donor Name as "anonymous"

  Scenario: Validate Donation Error Msg Invalid amount in page 1
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Fill Other Amount with invalid values
    And Click Next button
    Then Validate "Invalid amount" text
    And Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select Donation Foundation checkbox
    And Fill Organization Name
    And Select In Honour Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    And Validate Donor Name as "anonymous"

  Scenario: Validate Donation Error Msgs in page 2
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Click Next button
    Then Validate "First Name is missing" text
    And Validate "Last Name is missing" text
    And Validate "required" text
    And Validate "City is missing" text
    And Validate "Select a Province" text
    And Validate "Postal code is missing" text
    And Validate "Country is missing" text
    And Validate "Email address is missing" text
    When Fill Donor Information form
    When Select Donation Foundation checkbox
    And Click Next button
    Then Validate "required" text
    When Fill Organization Name
    And Select In Honour Of radio button
    And Click Next button
    Then Validate "Name is missing" text
    When Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous"

  Scenario: Validate Your card number is incomplete Donation Error Msg in page 3
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select In Honour Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Click Donate button
    Then Validate "Your card number is incomplete" alert message
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous"

  Scenario: Validate Your card number is invalid Donation Error Msg in page 3
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select In Honour Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4240" and "1025"  and "123"
    When Click Donate button
    Then Validate "Your card number is invalid" alert message
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous"

  Scenario: Validate Your cards expiry year is in the past Donation Error Msg in page 3
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select In Honour Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1023"  and "123"
    When Click Donate button
    Then Validate "Your cards expiry year is in the past" alert message
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous"
@smoke0055
  Scenario: Validate Donation GO BACK button page 2
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    When Click "Go Back" button
    Then Validate "Donation Amount" text
    And Click Next button
    # Then Validate "Donor Information" text
    When Fill Donor Information form
    When Select Donation Foundation checkbox
    And Fill Organization Name
    When Select In Honour Of radio button
    When Fill Donation Tribute Recipient
    When Click "Go Back" button
    And Click Next button
    Then Validate First Name has a value
    # And Validate Last Name has a value
    And Validate Company Name has a value
    And Validate Job title has a value
    And Validate address has a value
    And Validate city has a value
    And Validate postal code has a value
    And Validate phone number has a value
    # And Validate email has a value
    And Validate "I am donating on behalf of a company" checkbox is checked
    And Validate organization name has a value
    And Validate "In honour of" radio button is checked
    And Validate donation tribute recipient has a value

  Scenario: Validate Donation GO BACK button page 3
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    When Select Donation Foundation checkbox
    And Fill Organization Name
    When Select In Honour Of radio button
    When Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click "Go Back" button
    Then Validate "Donor Information" text
    And Click Next button
    Then Validate "Payment Method" text
    Then Validate "Anonymous" checkbox is checked
    And Select Anonymous checkbox
    When Fill donation recognition
    And Click "Go Back" button
    Then Validate "Donor Information" text
    And Click Next button
    Then Validate "Payment Method" text
    Then Validate donation recognition has a value

  Scenario: Validate Donation One Time after entering donation amount
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Enter donation amount as "560000" in Other Amount text field
    And Select One Time radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select Donation Foundation checkbox
    And Fill Organization Name
    And Select In Memory Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    And Validate Donor Name as "anonymous"

  Scenario: Validate Donation One Time after selecting donation amount
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select One Time radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select Donation Foundation checkbox
    And Fill Organization Name
    And Select In Honour Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    And Validate Donor Name as "anonymous"

  Scenario: Validate Donation Recurring Monthly after selecting donation amount
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Select Donation Amount
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select Donation Foundation checkbox
    And Fill Organization Name
    And Select In Memory Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    And Validate Donor Name as "anonymous"

  Scenario: Validate Donation Recurring Monthly entering donation amount
    Given User opens URL Donation_ErrorMsgPage
    Then Validate "Donation Amount" text
    When Enter donation amount as "78" in Other Amount text field
    And Select Recurring Monthly radio button
    And Click Next button
    Then Validate "Donor Information" text
    When Fill Donor Information form
    And Select Donation Foundation checkbox
    And Fill Organization Name
    And Select In Memory Of radio button
    And Fill Donation Tribute Recipient
    And Click Next button
    Then Validate "Payment Method" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox
    And Click Donate button
    Then Validate TRANSACTION SUCCESSFUL text
    And Validate Donor Name as "anonymous"
