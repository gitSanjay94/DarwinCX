@smoke
Feature: FSMPE Renewal Page
        Validate FSMPE Renewal Page

  Scenario: Validate Renew Account_Last Name
    Given User opens FSMPE_RenewalAccount Page
    Then Validate "Enter your account number to renew" text
    And Validate Purchaser value is blank
    And Validate Postal Code value is blank
    When Click on "Here" link
    Then Validate Last Name value is blank
    When Fill Purchaser field with '463218222'
    When Fill Last Name field with 'demo lastname'
    When Click on "Submit" button
    Then Validate "This account is not up for renewal" text

  Scenario: Validate Renew Account_Last Name Error msg
    Given User opens FSMPE_RenewalAccount Page
    Then Validate "Enter your account number to renew" text
    And Validate Purchaser value is blank
    And Validate Postal Code value is blank
    When Click on "Here" link
    Then Validate Last Name value is blank
    When Fill Purchaser field with '$#$%&*'
    When Fill Last Name field with '$#$%&*'
    When Click on "Submit" button
    Then Validate "Input out of range" Message to contain "last_name" and '$#$%&*'
    When Fill Purchaser field with ' '
    When Fill Last Name field with ' '
    When Click on "Submit" button
    Then Validate "Input out of range" Message to contain "last_name" and ' '

  Scenario: Validate Renew Account_Postal Code
    Given User opens FSMPE_RenewalAccount Page
    Then Validate "Enter your account number to renew" text
    And Validate Purchaser value is blank
    And Validate Postal Code value is blank
    When Fill Purchaser field with '463218222'
    When Fill Postal Code field with 'M2N4J5'
    When Click on "Submit" button
    Then Validate "This account is not up for renewal" text

  Scenario: Validate Renew Account_Postal Code Error msg
    Given User opens FSMPE_RenewalAccount Page
    Then Validate "Enter your account number to renew" text
    And Validate Purchaser value is blank
    And Validate Postal Code value is blank
    When Fill Purchaser field with '$#$%&*'
    When Fill Postal Code field with '$#$%&*'
    When Click on "Submit" button
    Then Validate "Input out of range" Message to contain "postal_code" and '$#$%&*'
    When Fill Purchaser field with ' '
    When Fill Postal Code field with ' '
    When Click on "Submit" button
    Then Validate "Input out of range" Message to contain "postal_code" and ' '
