@smoke
Feature: Courage CA Order Visa CC
         Validate Test Courage CA Order Visa CC

  Scenario: Validate Test Courage CA Order Visa CC with invalid card number
    Given User opens URL CCB_CourageCAOrderVisaCC
    Then Select the Canada Country Available Subscription Option
    Then Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Billing Address form for CCB_CourageCAOrderVisaCC
    When Enter valid payment details "4242 4242 4242 4240" and "1025"  and "123"
    When Click on Place Order button
    Then Validate Your Card Number Is Invalid text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    When Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate Test Courage CA Order Visa CC with valid card number
    Given User opens URL CCB_CourageCAOrderVisaCC
    Then Select the Canada Country Available Subscription Option
    Then Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Billing Address form for CCB_CourageCAOrderVisaCC
    When Enter valid payment details "4111 1111 1111 1111" and "1025"  and "123"
    When Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
