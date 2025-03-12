@smoke456
Feature: Test Hoffman CAN Digital No Upsell Order
         Validate the digital product order without upsell options

  Scenario: Validate Hoffman_CANDigitalNoUpsell Page Blank fields Values
    Given User opens URL FSMSE_HoffmanCANDigital
    When Verify the Blank First Name Value at Hoffman_CANDigitalNoUpsell Page
    Then Verify the Blank Last Name Value at Hoffman_CANDigitalNoUpsell Page
    And Verify the Blank Address1 Value at Hoffman_CANDigitalNoUpsell Page
    And Verify the Blank Address2 Value at Hoffman_CANDigitalNoUpsell Page
    And Verify the Blank City Value at Hoffman_CANDigitalNoUpsell Page
    Then Verify the Blank Postal Code Value at Hoffman_CANDigitalNoUpsell Page
    Then Verify the Blank Email Address Value at Hoffman_CANDigitalNoUpsell Page
    Then Verify the Country Value at Hoffman_CANDigitalNoUpsell Page
    Then Verify the Select  User Province at Hoffman_CANDigitalNoUpsell Page

  Scenario: Validate Hoffman_CANDigitalNoUpsell Page Missing fields Alerts
    Given User opens URL FSMSE_HoffmanCANDigital
    And Click on Place Order button
    Then Validate First Name Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page
    Then Validate Last Name Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page
    Then Validate Address1 Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page
    Then Validate City Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page
    Then Validate Province Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page
    Then Validate Postal code Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page
    Then Validate Email Missing text under first name text field section at Hoffman_CANDigitalNoUpsell Page

  
  Scenario: Validate the Canada 6 print and digital issues product order without digital upsell option For Candian Customer
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at Hoffman_CANDigitalNoUpsell Page
    Then Select the Canada & Internation Offers Option at Hoffman_CANDigitalNoUpsell Page
    Then Select the Canada Country Available Subscription Option at Hoffman_CANDigitalNoUpsell Page
    # And Validate Mailing and Billing Address text
    When Enter Candian values in Mailing and Billing Address form for Hoffman_CANDigitalNoUpsell
    # Then Validate Order Summary text at Hoffman_CANDigitalNoUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate the Canada 6 print and digital issues product order without digital upsell option For Candian Customer
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at Hoffman_CANDigitalNoUpsell Page
    Then Select the Canada & Internation Offers Option at Hoffman_CANDigitalNoUpsell Page
    Then Select the Canada Country Available Subscription 6 issues print only at Hoffman_CANDigitalNoUpsell Page
    #  Then Select the Canada Country Available Subscription Option at Hoffman_CANDigitalNoUpsell Page
    # And Validate Mailing and Billing Address text
    When Enter Candian values in Mailing and Billing Address form for Hoffman_CANDigitalNoUpsell
    # Then Validate Order Summary text at Hoffman_CANDigitalNoUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate the Canada 6 issues digital only product order without digital upsell option For Candian Customer
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at Hoffman_CANDigitalWithUpsell Page
    Then Select the Canada & Internation Offers Option at Hoffman_CANDigitalWithUpsell Page
    Then Select the Canada Country Available Subscription 6 issues digital only at Hoffman_CANDigitalWithUpsell Page
     #  Then Select the Canada Country Available Subscription Option at Hoffman_CANDigitalWithUpsell Page
    # And Validate Mailing and Billing Address text
    When Enter Candian values in Mailing and Billing Address form for Hoffman_CANDigitalWithUpsell
    # Then Validate Order Summary text at Hoffman_CANDigitalWithUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
