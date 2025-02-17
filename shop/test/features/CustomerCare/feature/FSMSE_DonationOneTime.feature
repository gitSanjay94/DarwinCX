@smoke 
Feature: Test FSMSE_DonationOneTime Page
         Validate FSMSE_DonationOneTimePage


Scenario: Validate Donation One Time In honour of
    Given User opens URL FSMSE_DonationOneTimePage
    Then Validate "Donation Amount" text at FSMSE_DonationOneTime Page
    When Select Donation Amount at FSMSE_DonationOneTime Page
    And Select One Time radio button at FSMSE_DonationOneTime Page
    And Click Next button at FSMSE_DonationOneTime Page
    Then Validate "Donor Information" text at FSMSE_DonationOneTime Page
    When Fill Canadian Donor Information form at FSMSE_DonationOneTime Page
    And Select In Honour Of radio button at FSMSE_DonationOneTime Page
    And Fill Donation Tribute Recipient at FSMSE_DonationOneTime Page
    And Click Next button at FSMSE_DonationOneTime Page
    Then Validate "Payment Method" text at FSMSE_DonationOneTime Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox at FSMSE_DonationOneTime Page
    And Click Donate button at FSMSE_DonationOneTime Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous" at FSMSE_DonationOneTime Page

  Scenario: Validate Donation One Time In memory of
    Given User opens URL FSMSE_DonationOneTimePage
    Then Validate "Donation Amount" text at FSMSE_DonationOneTime Page
    When Select Donation Amount at FSMSE_DonationOneTime Page
    And Select One Time radio button at FSMSE_DonationOneTime Page
    And Click Next button at FSMSE_DonationOneTime Page
    Then Validate "Donor Information" text at FSMSE_DonationOneTime Page
    When Fill Canadian Donor Information form at FSMSE_DonationOneTime Page
    And Select In Memory Of radio button at FSMSE_DonationOneTime Page
    And Fill Donation Tribute Recipient at FSMSE_DonationOneTime Page
    And Click Next button at FSMSE_DonationOneTime Page
    # And Click Next button at FSMSE_DonationOneTime Page
    Then Validate "Payment Method" text at FSMSE_DonationOneTime Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox at FSMSE_DonationOneTime Page
    And Click Donate button at FSMSE_DonationOneTime Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous" at FSMSE_DonationOneTime Page


  Scenario: Validate Donation One Time on behalf of a company with valid Organization Name
    Given User opens URL FSMSE_DonationOneTimePage
    Then Validate "Donation Amount" text at FSMSE_DonationOneTime Page
    When Select Donation Amount at FSMSE_DonationOneTime Page
    And Select One Time radio button at FSMSE_DonationOneTime Page
    And Click Next button at FSMSE_DonationOneTime Page
    Then Validate "Donor Information" text at FSMSE_DonationOneTime Page
    When Fill Canadian Donor Information form at FSMSE_DonationOneTime Page
    And Select Donation Foundation checkbox at FSMSE_DonationOneTime Page
    And Fill Organization Name at FSMSE_DonationOneTime Page
    And Select In Memory Of radio button at FSMSE_DonationOneTime Page
    And Fill Donation Tribute Recipient at FSMSE_DonationOneTime Page
    And Click Next button at FSMSE_DonationOneTime Page
    Then Validate "Payment Method" text at FSMSE_DonationOneTime Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox at FSMSE_DonationOneTime Page
    And Click Donate button at FSMSE_DonationOneTime Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous" at FSMSE_DonationOneTime Page


 Scenario: Validate Donation One Time In honour of
    Given User opens URL FSMSE_DonationOneTimePage
    Then Validate "Donation Amount" text at FSMSE_DonationOneTime Page
    When Select Donation Amount at FSMSE_DonationOneTime Page
    And Select One Time radio button at FSMSE_DonationOneTime Page
    And Click Next button at FSMSE_DonationOneTime Page
    Then Validate "Donor Information" text at FSMSE_DonationOneTime Page
    When Fill Donor Information form at FSMSE_DonationOneTime Page
    And Select In Honour Of radio button at FSMSE_DonationOneTime Page
    And Fill Donation Tribute Recipient at FSMSE_DonationOneTime Page
    And Click Next button at FSMSE_DonationOneTime Page
    Then Validate "Payment Method" text at FSMSE_DonationOneTime Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Select Anonymous checkbox at FSMSE_DonationOneTime Page
    And Click Donate button at FSMSE_DonationOneTime Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Donor Name as "anonymous" at FSMSE_DonationOneTime Page



