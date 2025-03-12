@smoke
Feature: CC block Courage CC Declined
         Validate Test CC block Courage CC Declined

  Scenario: Validate Test CC block Courage CC Declined due to invalid Card Number
    Given User opens URL CCB_CourageCCDeclined
    Then Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Billing Address form for CCB_CourageCCDeclined
    When Enter valid payment details "4000 0012 0000 0000" and "1025"  and "123"
    When Click on Place Order button
    Then Validate Your card number is invalid text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    When Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate Test CC block Courage CC Declined due to invalid Expiry Date
    Given User opens URL CCB_CourageCCDeclined
    Then Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Billing Address form for CCB_CourageCCDeclined
    When Enter valid payment details "4242 4242 4242 4242" and "0312"  and "123"
    When Click on Place Order button
    Then Validate Your card's expiry year is in the past text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    When Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
