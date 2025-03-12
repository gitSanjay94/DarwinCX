@smoke
Feature: FSMSE CC block Courage CC Declined
         Validate Test FSMSE CC block Courage CC Declined

  Scenario: Validate Test FSMSE Courage CC Declined due to invalid Card Number
    Given User opens URL FSMSE_CourageCCDeclined
    Then Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Billing Address form for FSMSE_CourageCCDeclined
    When Enter valid payment details "4000 0012 0000 0000" and "1025"  and "123"
    When Click on Place Order button
    Then Validate Your card number is invalid text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    When Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate Test CC block Courage CC Declined due to invalid Expiry Date
    Given User opens URL FSMSE_CourageCCDeclined
    Then Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Billing Address form for FSMSE_CourageCCDeclined
    When Enter valid payment details "4242 4242 4242 4242" and "0312"  and "123"
    When Click on Place Order button
    Then Validate Your card's expiry year is in the past text at FSMSE_CourageCCDeclined Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    When Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
