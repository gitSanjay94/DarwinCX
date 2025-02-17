@smoke
Feature: Test FSMSE_HoffmanCreditonCreditBillMeLaterPage Order
         Verify print and digital order with upsell and taxes Order Process
         #Failing due to Bill Me Later is disabled
         

  Scenario: Verify 1 year for $10 Classic Sewing Offer Order with Credit Card Payment Option
    Given User opens URL FSMSE_HoffmanCreditonCreditBillMeLater
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCreditonCreditBillMeLater
    Then Validate Summary text at FSMSE_HoffmanCreditonCreditBillMeLater Page
    # Then Validate Amount Before Order at FSMSE_HoffmanCreditonCreditBillMeLater Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at FSMSE_HoffmanCreditonCreditBillMeLater Page

  Scenario: Verify 1 year for $10 Classic Sewing Offer Order with Bill Me Later Payment OPtion
    Given User opens URL FSMSE_HoffmanCreditonCreditBillMeLater
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCreditonCreditBillMeLater
    Then Validate Summary text at FSMSE_HoffmanCreditonCreditBillMeLater Page
    # Then Validate Amount Before Order at FSMSE_HoffmanCreditonCreditBillMeLater Page
    # Then Select Bill Me Later Payment Option at FSMSE_HoffmanCreditonCreditBillMeLater Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at FSMSE_HoffmanCreditonCreditBillMeLater Page with Different Mailing Address
  # Country drop down value is resetting while clicking on  different mailing address checkbox

  Scenario: Verify 1 year for $10 Classic Sewing Offer Order with Credit Card Payment Option & Different Billing Address
    Given User opens URL FSMSE_HoffmanCreditonCreditBillMeLater
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCreditonCreditBillMeLater
    When Check I have a different mailing address checkbox at FSMSE_HoffmanCreditonCreditBillMeLater Page
    Then Select the Country Value from Billing County Drop Down
    When Enter values in Mailing Address form for FSMSE_HoffmanCreditonCreditBillMeLater
    Then Validate Summary text at FSMSE_HoffmanCreditonCreditBillMeLater Page
    # Then Validate Amount Before Order at FSMSE_HoffmanCreditonCreditBillMeLater Page for Different Mailing Address
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at FSMSE_HoffmanCreditonCreditBillMeLater Page with Different Mailing Address
 
  # Country drop down value is resetting while clicking on  different mailing address checkbox

  Scenario: Verify 1 year for $10 Classic Sewing Offer Order with Bill Me Later Payment Option & Different Billing Address
    Given User opens URL FSMSE_HoffmanCreditonCreditBillMeLater
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCreditonCreditBillMeLater
    When Check I have a different mailing address checkbox at FSMSE_HoffmanCreditonCreditBillMeLater Page
    Then Select the Country Value from Billing County Drop Down
    When Enter values in Mailing Address form for FSMSE_HoffmanCreditonCreditBillMeLater
    Then Validate Summary text at FSMSE_HoffmanCreditonCreditBillMeLater Page
    # Then Validate Amount Before Order at FSMSE_HoffmanCreditonCreditBillMeLater Page for Different Mailing Address
    Then Select Bill Me Later Payment Option at FSMSE_HoffmanCreditonCreditBillMeLater Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at FSMSE_HoffmanCreditonCreditBillMeLater Page with Different Mailing Address

  Scenario: Verify 1 year for $10 Classic Sewing Offer Order with Credit Card Payment Option
    Given User opens URL FSMSE_HoffmanCreditonCreditBillMeLater
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCreditonCreditBillMeLater
    When Click Add Gift Recipient Chceck Box
    When Enter values in Gift Recipient Mailing Address form for Order 1 at FSMSE_HoffmanCreditonCreditBillMeLater Page
    Then Validate Summary text
    # And Validate Free Gift To Donor text under order summary section
    # Then Validate Order Summary text at FSMSE_HoffmanCreditonCreditBillMeLater Page
    # Then Validate Amount Before Order at FSMSE_HoffmanCreditonCreditBillMeLater Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at FSMSE_HoffmanCreditonCreditBillMeLater Page


  Scenario: Verify 1 year for $10 Classic Sewing Offer Order with Credit Card Payment Option
    Given User opens URL FSMSE_HoffmanCreditonCreditBillMeLater
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCreditonCreditBillMeLater
    When Click Add Gift Recipient Chceck Box
    When Enter values in Gift Recipient Mailing Address form for Order 1 at FSMSE_HoffmanCreditonCreditBillMeLater Page
    Then Validate Summary text
    # And Validate Free Gift To Donor text under order summary section
    # Then Validate Order Summary text at FSMSE_HoffmanCreditonCreditBillMeLater Page
    # Then Validate Amount Before Order at FSMSE_HoffmanCreditonCreditBillMeLater Page
    Then Select Bill Me Later Payment Option at FSMSE_HoffmanCreditonCreditBillMeLater Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at FSMSE_HoffmanCreditonCreditBillMeLater Page
