 @smoke
Feature: Test Hoffman_CreditonBadCreditCard Order
         Verify CC Declined due to invalid Card Number

  Scenario: Verify CC Declined due to invalid Card Number
    Given User opens URL Hoffman_CreditonBadCreditCard
    When Enter values in Mailing and Billing Address form for Hoffman_CreditonBadCreditCard
    # Then Validate Order Summary text at Hoffman_CreditonBadCreditCard Page
    # Then Validate Amount Before Order at Hoffman_CreditonBadCreditCard Page
    When Enter valid payment details "4000 0012 0000 0000" and "1025"  and "123"
    When Click on Place Order button
    Then Validate Your card number is invalid text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at Hoffman_CreditonBadCreditCard Page

 
  Scenario: Validate  Hoffman_CreditonBadCreditCard due to invalid Expiry Date
    Given User opens URL Hoffman_CreditonBadCreditCard
    When Enter values in Mailing and Billing Address form for Hoffman_CreditonBadCreditCard
    # When Check I have a different mailing address checkbox at Hoffman_CreditonBadCreditCard Page
    # Then Select the Country Value from Billing County Drop Down
    # When Enter values in Mailing Address form for Hoffman_CreditonBadCreditCard
    # Then Validate Order Summary text at Hoffman_CreditonBadCreditCard Page
    # Then Validate Amount Before Order at Hoffman_CreditonBadCreditCard Page for Different Mailing Address
    When Enter valid payment details "4242 4242 4242 4242" and "0312"  and "123"
    When Click on Place Order button
    Then Validate Your card's expiry year is in the past text at FSMSE_CourageCCDeclined Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at Hoffman_CreditonBadCreditCard Page with Different Mailing Address
