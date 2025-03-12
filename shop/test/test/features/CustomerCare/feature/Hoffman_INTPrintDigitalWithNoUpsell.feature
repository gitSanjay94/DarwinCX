@smoke
Feature: Test Hoffman INT Print Digital With No Upsell Order
         Validate the Print Digital product order with no upsell options

  Scenario: Validate Hoffman_INTPrintDigitalWithNoUpsell Page Blank fields Values
    Given User opens URL FSMSE_HoffmanCANDigital
    When Verify the Blank First Name Value at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Verify the Blank Last Name Value at Hoffman_INTPrintDigitalWithNoUpsell Page
    And Verify the Blank Address1 Value at Hoffman_INTPrintDigitalWithNoUpsell Page
    And Verify the Blank Address2 Value at Hoffman_INTPrintDigitalWithNoUpsell Page
    And Verify the Blank City Value at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Verify the Blank Postal Code Value at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Verify the Blank Email Address Value at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Verify the Country Value at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Verify the Select  User Province at Hoffman_INTPrintDigitalWithNoUpsell Page

  Scenario: Validate Hoffman_INTPrintDigitalWithNoUpsell Page Missing fields Alerts
    Given User opens URL FSMSE_HoffmanCANDigital
    And Click on Place Order button
    Then Validate First Name Missing text under first name text field section at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Validate Last Name Missing text under first name text field section at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Validate Address1 Missing text under first name text field section at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Validate City Missing text under first name text field section at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Validate Province Missing text under first name text field section at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Validate Postal code Missing text under first name text field section at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Validate Email Missing text under first name text field section at Hoffman_INTPrintDigitalWithNoUpsell Page


  Scenario: Validate the International Print issues product order without Print upsell option For International Customer
    Given User opens URL FSMSE_HoffmanCANDigital
    Then Select the Canada & Internation Offers Option at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Select the International Country Available Subscription Option at Hoffman_INTPrintDigitalWithNoUpsell Page
    And Validate Mailing and Billing Address text
    When Enter International country values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell
   #  Then Validate Order Summary text at Hoffman_INTPrintDigitalWithNoUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    # Then Validate Amount Before Order at Hoffman_INTPrintDigitalWithNoUpsell Page
    And Click on Place Order button
    # Then Validate Amount After Order at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Validate TRANSACTION SUCCESSFUL text


    Scenario: Validate the International Print issues product order without Print upsell option For International Customer with Different Mailing Address
    Given User opens URL FSMSE_HoffmanCANDigital
    Then Select the Canada & Internation Offers Option at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Select the International Country Available Subscription Option at Hoffman_INTPrintDigitalWithNoUpsell Page
    # And Validate Mailing and Billing Address text
    When Enter International country values in Mailing and Billing Address form for Hoffman_INTPrintWithUpsell
   #  Then Validate Order Summary text at Hoffman_INTPrintDigitalWithNoUpsell Page
    When Check I have a different mailing address checkbox at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Select the Country Value from Billing County Drop Down at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Enter values in Mailing Address form at Hoffman_INTPrintDigitalWithNoUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    # Then Validate Amount Before Order at Hoffman_INTPrintDigitalWithNoUpsell Page
    And Click on Place Order button
    # Then Validate Amount After Order at Hoffman_INTPrintDigitalWithNoUpsell Page
    Then Validate TRANSACTION SUCCESSFUL text
