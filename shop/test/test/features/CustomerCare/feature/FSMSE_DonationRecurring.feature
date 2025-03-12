@smoke 
Feature: Test FSMSE_DonationRecurring Page
         Validate FSMSE_DonationRecurringPage


Scenario: Validate Donation Recurring In honour of
    Given User opens URL FSMSE_DonationRecurringPage
    Then Validate "Donation Amount" text at FSMSE_DonationRecurring Page
    When Select Donation Amount at FSMSE_DonationRecurring Page
    And Select Recurring Monthly radio button at FSMSE_DonationRecurring Page
    And Click Next button at FSMSE_DonationRecurring Page
    Then Validate "Donor Information" text at FSMSE_DonationRecurring Page
    When Fill Canadian Donor Information form at FSMSE_DonationRecurring Page
    And Select In Honour Of radio button at FSMSE_DonationRecurring Page
    And Fill Donation Tribute Recipient at FSMSE_DonationRecurring Page
    And Click Next button at FSMSE_DonationRecurring Page
    Then Validate "Payment Method" text at FSMSE_DonationRecurring Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox at FSMSE_DonationRecurring Page
    And Click Donate button at FSMSE_DonationRecurring Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous" at FSMSE_DonationRecurring Page

  Scenario: Validate Donation Recurring In memory of
    Given User opens URL FSMSE_DonationRecurringPage
    Then Validate "Donation Amount" text at FSMSE_DonationRecurring Page
    When Select Donation Amount at FSMSE_DonationRecurring Page
    And Select Recurring Monthly radio button at FSMSE_DonationRecurring Page
    And Click Next button at FSMSE_DonationRecurring Page
    Then Validate "Donor Information" text at FSMSE_DonationRecurring Page
    When Fill Canadian Donor Information form at FSMSE_DonationRecurring Page
    And Select In Memory Of radio button at FSMSE_DonationRecurring Page
    And Fill Donation Tribute Recipient at FSMSE_DonationRecurring Page
    And Click Next button at FSMSE_DonationRecurring Page
    Then Validate "Payment Method" text at FSMSE_DonationRecurring Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox at FSMSE_DonationRecurring Page
    And Click Donate button at FSMSE_DonationRecurring Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous" at FSMSE_DonationRecurring Page


  Scenario: Validate Donation Recurring on behalf of a company with valid Organization Name
    Given User opens URL FSMSE_DonationRecurringPage
    Then Validate "Donation Amount" text at FSMSE_DonationRecurring Page
    When Select Donation Amount at FSMSE_DonationRecurring Page
    And Select Recurring Monthly radio button at FSMSE_DonationRecurring Page
    And Click Next button at FSMSE_DonationRecurring Page
    Then Validate "Donor Information" text at FSMSE_DonationRecurring Page
    When Fill Canadian Donor Information form at FSMSE_DonationRecurring Page
    And Select Donation Foundation checkbox at FSMSE_DonationRecurring Page
    And Fill Organization Name at FSMSE_DonationRecurring Page
    And Select In Memory Of radio button at FSMSE_DonationRecurring Page
    And Fill Donation Tribute Recipient at FSMSE_DonationRecurring Page
    And Click Next button at FSMSE_DonationRecurring Page
    Then Validate "Payment Method" text at FSMSE_DonationRecurring Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox at FSMSE_DonationRecurring Page
    And Click Donate button at FSMSE_DonationRecurring Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous" at FSMSE_DonationRecurring Page


  Scenario: Validate Donation Recurring Monthly entering donation amount
    Given User opens URL FSMSE_DonationRecurringPage
    Then Validate "Donation Amount" text at FSMSE_DonationRecurring Page
    When Enter donation amount as "78" in Other Amount text field at FSMSE_DonationRecurring Page
    And Select Recurring Monthly radio button at FSMSE_DonationRecurring Page
    And Click Next button at FSMSE_DonationRecurring Page
    Then Validate "Donor Information" text at FSMSE_DonationRecurring Page
    When Fill Donor Information form at FSMSE_DonationRecurring Page
    And Select Donation Foundation checkbox at FSMSE_DonationRecurring Page
    And Fill Organization Name at FSMSE_DonationRecurring Page
    And Select In Memory Of radio button at FSMSE_DonationRecurring Page
    And Fill Donation Tribute Recipient at FSMSE_DonationRecurring Page
    And Click Next button at FSMSE_DonationRecurring Page
    Then Validate "Payment Method" text at FSMSE_DonationRecurring Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox at FSMSE_DonationRecurring Page
    And Click Donate button at FSMSE_DonationRecurring Page
    Then Validate TRANSACTION SUCCESSFUL text
    And Validate Donor Name as "anonymous" at FSMSE_DonationRecurring Page
