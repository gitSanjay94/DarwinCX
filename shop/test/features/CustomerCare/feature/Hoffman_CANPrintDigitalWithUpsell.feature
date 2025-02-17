@smoke
Feature: Test Hoffman CAN Print Digital With Upsell Order
         Validate the Print Digital product order with upsell options

  Scenario: Validate Hoffman_CANPrintDigitalWithUpsell Page Blank fields Values
    Given User opens URL FSMSE_HoffmanCANDigital
    When Verify the Blank First Name Value at Hoffman_CANPrintDigitalWithUpsell Page
    Then Verify the Blank Last Name Value at Hoffman_CANPrintDigitalWithUpsell Page
    And Verify the Blank Address1 Value at Hoffman_CANPrintDigitalWithUpsell Page
    And Verify the Blank Address2 Value at Hoffman_CANPrintDigitalWithUpsell Page
    And Verify the Blank City Value at Hoffman_CANPrintDigitalWithUpsell Page
    Then Verify the Blank Postal Code Value at Hoffman_CANPrintDigitalWithUpsell Page
    Then Verify the Blank Email Address Value at Hoffman_CANPrintDigitalWithUpsell Page
    Then Verify the Country Value at Hoffman_CANPrintDigitalWithUpsell Page
    Then Verify the Select  User Province at Hoffman_CANPrintDigitalWithUpsell Page

  Scenario: Validate Hoffman_CANPrintDigitalWithUpsell Page Missing fields Alerts
    Given User opens URL FSMSE_HoffmanCANDigital
    And Click on Place Order button
    Then Validate First Name Missing text under first name text field section at Hoffman_CANPrintDigitalWithUpsell Page
    Then Validate Last Name Missing text under first name text field section at Hoffman_CANPrintDigitalWithUpsell Page
    Then Validate Address1 Missing text under first name text field section at Hoffman_CANPrintDigitalWithUpsell Page
    Then Validate City Missing text under first name text field section at Hoffman_CANPrintDigitalWithUpsell Page
    Then Validate Province Missing text under first name text field section at Hoffman_CANPrintDigitalWithUpsell Page
    Then Validate Postal code Missing text under first name text field section at Hoffman_CANPrintDigitalWithUpsell Page
    Then Validate Email Missing text under first name text field section at Hoffman_CANPrintDigitalWithUpsell Page


  Scenario: Validate the Canada 6 print and digital issues product order with upsell option For Candian Customer
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at Hoffman_CANPrintDigitalWithUpsell Page
    Then Select the Canada & Internation Offers Option at Hoffman_CANPrintDigitalWithUpsell Page
    Then Select the Canada Country Available Subscription Option at Hoffman_CANPrintDigitalWithUpsell Page
    # Then The 1 Year Digital Archive Access checkbox should be visible at Hoffman_CANPrintDigitalWithUpsell Page
    Then Select 1 Year Digital Archive Access checkbox at Hoffman_CANPrintDigitalWithUpsell Page
    # And Validate Mailing and Billing Address text
    When Enter Candian values in Mailing and Billing Address form for Hoffman_CANPrintDigitalWithUpsell
    # Then Validate Order Summary text at Hoffman_CANPrintDigitalWithUpsell Page
    # Then Validate Amount Before Order at Hoffman_CANPrintDigitalWithUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at Hoffman_CANPrintDigitalWithUpsell Page

    Scenario: Validate the Canada 6 print and digital issues product order with upsell option with different mailing address
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at Hoffman_CANPrintDigitalWithUpsell Page
    Then Select the Canada & Internation Offers Option at Hoffman_CANPrintDigitalWithUpsell Page
    Then Select the Canada Country Available Subscription Option at Hoffman_CANPrintDigitalWithUpsell Page
    # Then The 1 Year Digital Archive Access checkbox should be visible at Hoffman_CANPrintDigitalWithUpsell Page
    Then Select 1 Year Digital Archive Access checkbox at Hoffman_CANPrintDigitalWithUpsell Page
    # And Validate Mailing and Billing Address text
    When Enter Candian values in Mailing and Billing Address form for Hoffman_CANPrintDigitalWithUpsell
    When Check I have a different mailing address checkbox at Hoffman_CANPrintDigitalWithUpsell Page
    Then Select the Country Value from Billing County Drop Down at Hoffman_CANPrintDigitalWithUpsell Page
    Then Enter values in Mailing Address form at Hoffman_CANPrintDigitalWithUpsell Page
    # Then Validate Order Summary text at Hoffman_CANPrintDigitalWithUpsell Page
    # Then Validate Amount Before Order at Hoffman_CANPrintDigitalWithUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Amount After Order at Hoffman_CANPrintDigitalWithUpsell Page
