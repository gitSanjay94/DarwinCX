
@smoke
Feature: Test Hoffman CAN Print Digital Without Upsell Order
         Validate the Print Digital product order without upsell options

  Scenario: Validate Hoffman_CANPrintDigitalNoUpsell Page Blank fields Values
    Given User opens URL FSMSE_HoffmanCANDigital
    When Verify the Blank First Name Value at Hoffman_CANPrintDigitalNoUpsell Page
    Then Verify the Blank Last Name Value at Hoffman_CANPrintDigitalNoUpsell Page
    And Verify the Blank Address1 Value at Hoffman_CANPrintDigitalNoUpsell Page
    And Verify the Blank Address2 Value at Hoffman_CANPrintDigitalNoUpsell Page
    And Verify the Blank City Value at Hoffman_CANPrintDigitalNoUpsell Page
    Then Verify the Blank Postal Code Value at Hoffman_CANPrintDigitalNoUpsell Page
    Then Verify the Blank Email Address Value at Hoffman_CANPrintDigitalNoUpsell Page
    Then Verify the Country Value at Hoffman_CANPrintDigitalNoUpsell Page
    Then Verify the Select  User Province at Hoffman_CANPrintDigitalNoUpsell Page

  Scenario: Validate Hoffman_CANPrintDigitalNoUpsell Page Missing fields Alerts
    Given User opens URL FSMSE_HoffmanCANDigital
    And Click on Place Order button
    Then Validate First Name Missing text under first name text field section at Hoffman_CANPrintDigitalNoUpsell Page
    Then Validate Last Name Missing text under first name text field section at Hoffman_CANPrintDigitalNoUpsell Page
    Then Validate Address1 Missing text under first name text field section at Hoffman_CANPrintDigitalNoUpsell Page
    Then Validate City Missing text under first name text field section at Hoffman_CANPrintDigitalNoUpsell Page
    Then Validate Province Missing text under first name text field section at Hoffman_CANPrintDigitalNoUpsell Page
    Then Validate Postal code Missing text under first name text field section at Hoffman_CANPrintDigitalNoUpsell Page
    Then Validate Email Missing text under first name text field section at Hoffman_CANPrintDigitalNoUpsell Page

  Scenario: Validate the Canada 6 print and digital issues product order without upsell option For Candian Customer
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at Hoffman_CANPrintDigitalNoUpsell Page
    Then Select the Canada & Internation Offers Option at Hoffman_CANPrintDigitalNoUpsell Page
    Then Select the Canada Country Available Subscription Option at Hoffman_CANPrintDigitalNoUpsell Page
    # Then The 1 Year Digital Archive Access checkbox should be visible at Hoffman_CANPrintDigitalNoUpsell Page
    # Then Select 1 Year Digital Archive Access checkbox at Hoffman_CANPrintDigitalNoUpsell Page
    # And Validate Mailing and Billing Address text
    When Enter Candian values in Mailing and Billing Address form for Hoffman_CANPrintDigitalNoUpsell
    # Then Validate Order Summary text at Hoffman_CANPrintDigitalNoUpsell Page
    # Then Validate Amount Before Order at Hoffman_CANPrintDigitalNoUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at Hoffman_CANPrintDigitalNoUpsell Page


    Scenario: Validate the Canada 6 print and digital issues product order without upsell option with different mailing address
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at Hoffman_CANPrintDigitalNoUpsell Page
    Then Select the Canada & Internation Offers Option at Hoffman_CANPrintDigitalNoUpsell Page
    Then Select the Canada Country Available Subscription Option at Hoffman_CANPrintDigitalNoUpsell Page
    # Then The 1 Year Digital Archive Access checkbox should be visible at Hoffman_CANPrintDigitalNoUpsell Page
    # Then Select 1 Year Digital Archive Access checkbox at Hoffman_CANPrintDigitalNoUpsell Page
    # And Validate Mailing and Billing Address text
    When Enter Candian values in Mailing and Billing Address form for Hoffman_CANPrintDigitalNoUpsell
    When Check I have a different mailing address checkbox at Hoffman_CANPrintDigitalNoUpsell Page
    Then Select the Country Value from Billing County Drop Down at Hoffman_CANPrintDigitalNoUpsell Page
    Then Enter values in Mailing Address form at Hoffman_CANPrintDigitalNoUpsell Page
    # Then Validate Order Summary text at Hoffman_CANPrintDigitalNoUpsell Page
    # Then Validate Amount Before Order at Hoffman_CANPrintDigitalNoUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at Hoffman_CANPrintDigitalNoUpsell Page
