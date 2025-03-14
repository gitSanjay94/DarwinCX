@smoke
Feature: Test Hoffman INT Digital With Upsell Order
         Validate the digital product order with upsell options

  Scenario: Validate Hoffman_INTDigitalWithUpsell Page Blank fields Values
    Given User opens URL FSMSE_HoffmanCANDigital
    When Verify the Blank First Name Value at Hoffman_INTDigitalWithUpsell Page
    Then Verify the Blank Last Name Value at Hoffman_INTDigitalWithUpsell Page
    And Verify the Blank Address1 Value at Hoffman_INTDigitalWithUpsell Page
    And Verify the Blank Address2 Value at Hoffman_INTDigitalWithUpsell Page
    And Verify the Blank City Value at Hoffman_INTDigitalWithUpsell Page
    Then Verify the Blank Postal Code Value at Hoffman_INTDigitalWithUpsell Page
    Then Verify the Blank Email Address Value at Hoffman_INTDigitalWithUpsell Page
    Then Verify the Country Value at Hoffman_INTDigitalWithUpsell Page
    Then Verify the Select  User Province at Hoffman_INTDigitalWithUpsell Page

  Scenario: Validate Hoffman_INTDigitalWithUpsell Page Missing fields Alerts
    Given User opens URL FSMSE_HoffmanCANDigital
    And Click on Place Order button
    Then Validate First Name Missing text under first name text field section at Hoffman_INTDigitalWithUpsell Page
    Then Validate Last Name Missing text under first name text field section at Hoffman_INTDigitalWithUpsell Page
    Then Validate Address1 Missing text under first name text field section at Hoffman_INTDigitalWithUpsell Page
    Then Validate City Missing text under first name text field section at Hoffman_INTDigitalWithUpsell Page
    Then Validate Province Missing text under first name text field section at Hoffman_INTDigitalWithUpsell Page
    Then Validate Postal code Missing text under first name text field section at Hoffman_INTDigitalWithUpsell Page
    Then Validate Email Missing text under first name text field section at Hoffman_INTDigitalWithUpsell Page

  Scenario: Validate the International digital issues product order without digital upsell option For Candian Customer
    Given User opens URL FSMSE_HoffmanCANDigital
    Then Select the Canada & Internation Offers Option at Hoffman_INTDigitalWithUpsell Page
    Then Select the International Country Available Subscription Option at Hoffman_INTDigitalWithUpsell Page
    # Then The 1 Year Digital Archive Access checkbox should be visible at Hoffman_INTDigitalWithUpsell Page
    Then Select 1 Year Digital Archive Access checkbox at Hoffman_INTDigitalWithUpsell Page
    And Validate Mailing and Billing Address text
    When Enter Internation country values in Mailing and Billing Address form for Hoffman_INTDigitalWithUpsell
   #  Then Validate Order Summary text at Hoffman_INTDigitalWithUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Amount Before Order at Hoffman_INTDigitalWithUpsell Page
    And Click on Place Order button
    Then Validate Amount After Order at Hoffman_INTDigitalWithUpsell Page
    Then Validate TRANSACTION SUCCESSFUL text
