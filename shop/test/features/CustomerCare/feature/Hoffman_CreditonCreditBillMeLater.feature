@smoke
Feature: Test Hoffman_CreditonCreditBillMeLaterPage Order
         Verify print and digital order with upsell and taxes Order Process

  Scenario: Verify 1 year for $10 Classic Sewing Offer Order with Bill Me Later Payment OPtion
    Given User opens URL Hoffman_CreditonCreditBillMeLater
    When Enter values in Mailing and Billing Address form for Hoffman_CreditonCreditBillMeLater
    # Then Validate Order Summary text at Hoffman_CreditonCreditBillMeLater Page
    # Then Validate Amount Before Order at Hoffman_CreditonCreditBillMeLater Page
    Then Select Bill Me Later Payment Option at Hoffman_CreditonCreditBillMeLater Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at Hoffman_CreditonCreditBillMeLater Page with Different Mailing Address
  # Country drop down value is resetting while clicking on  different mailing address checkbox

   Scenario: Verify 1 year for $10 Classic Sewing Offer Order with Bill Me Later Payment Option & Different Billing Address
    Given User opens URL Hoffman_CreditonCreditBillMeLater
    When Enter values in Mailing and Billing Address form for Hoffman_CreditonCreditBillMeLater
    When Check I have a different mailing address checkbox at Hoffman_CreditonCreditBillMeLater Page
    Then Select the Country Value from Billing County Drop Down
    When Enter values in Mailing Address form for Hoffman_CreditonCreditBillMeLater
    # Then Validate Order Summary text at Hoffman_CreditonCreditBillMeLater Page
    # Then Validate Amount Before Order at Hoffman_CreditonCreditBillMeLater Page for Different Mailing Address
    Then Select Bill Me Later Payment Option at Hoffman_CreditonCreditBillMeLater Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at Hoffman_CreditonCreditBillMeLater Page with Different Mailing Address

  
  Scenario: Verify 1 year for $10 Classic Sewing Offer Order with Bill Me Later Option
    Given User opens URL Hoffman_CreditonCreditBillMeLater
    When Enter values in Mailing and Billing Address form for Hoffman_CreditonCreditBillMeLater
    When Click Add Gift Recipient Chceck Box
    When Enter values in Gift Recipient Mailing Address form for Order 1 at Hoffman_CreditonCreditBillMeLater Page
    # Then Validate Order Summary text
    # And Validate Free Gift To Donor text under order summary section
    # Then Validate Order Summary text at Hoffman_CreditonCreditBillMeLater Page
    # Then Validate Amount Before Order at Hoffman_CreditonCreditBillMeLater Page
    Then Select Bill Me Later Payment Option at Hoffman_CreditonCreditBillMeLater Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at Hoffman_CreditonCreditBillMeLater Page
