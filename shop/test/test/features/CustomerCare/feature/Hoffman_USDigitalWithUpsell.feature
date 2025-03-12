@smoke
Feature: Test Hoffman US Digital with Upsell Order
         Validate the Digital product order with upsell options

  Scenario: Validate Hoffman_USDigitalWithUpsell Page Blank fields Values
    Given User opens URL FSMSE_HoffmanCANDigital
    When Verify the Blank First Name Value at Hoffman_USDigitalWithUpsell Page
    Then Verify the Blank Last Name Value at Hoffman_USDigitalWithUpsell Page
    And Verify the Blank Address1 Value at Hoffman_USDigitalWithUpsell Page
    And Verify the Blank Address2 Value at Hoffman_USDigitalWithUpsell Page
    And Verify the Blank City Value at Hoffman_USDigitalWithUpsell Page
    Then Verify the Blank Postal Code Value at Hoffman_USDigitalWithUpsell Page
    Then Verify the Blank Email Address Value at Hoffman_USDigitalWithUpsell Page
    Then Verify the Country Value at Hoffman_USDigitalWithUpsell Page
    Then Verify the Select  User Province at Hoffman_USDigitalWithUpsell Page

  Scenario: Validate Hoffman_USDigitalWithUpsell Page Missing fields Alerts
    Given User opens URL FSMSE_HoffmanCANDigital
    And Click on Place Order button
    Then Validate First Name Missing text under first name text field section at Hoffman_USDigitalWithUpsell Page
    Then Validate Last Name Missing text under first name text field section at Hoffman_USDigitalWithUpsell Page
    Then Validate Address1 Missing text under first name text field section at Hoffman_USDigitalWithUpsell Page
    Then Validate City Missing text under first name text field section at Hoffman_USDigitalWithUpsell Page
    Then Validate Province Missing text under first name text field section at Hoffman_USDigitalWithUpsell Page
    Then Validate Postal code Missing text under first name text field section at Hoffman_USDigitalWithUpsell Page
    Then Validate Email Missing text under first name text field section at Hoffman_USDigitalWithUpsell Page

  Scenario: Validate the US Digital issues product order without upsell option
    Given User opens URL FSMSE_HoffmanCANDigital
    Then Select the US Country Available Subscription Option at Hoffman_USDigitalWithUpsell Page
    # Then The 1 Year Digital Archive Access checkbox should be visible at Hoffman_USDigitalWithUpsell Page
    Then Select 1 Year Digital Archive Access checkbox at Hoffman_USDigitalWithUpsell Page
    And Validate Mailing and Billing Address text
    When Enter US country values in Mailing and Billing Address form for Hoffman_USDigitalWithUpsell
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Amount Before Order at Hoffman_USDigitalWithUpsell Page
    And Click on Place Order button
    Then Validate Amount After Order at Hoffman_USDigitalWithUpsell Page
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate the US Digital issues product order without upsell option with Different Mailing Address
    Given User opens URL FSMSE_HoffmanCANDigital
    Then Select the US Country Available Subscription Option at Hoffman_USDigitalWithUpsell Page
    # Then The 1 Year Digital Archive Access checkbox should be visible at Hoffman_USDigitalWithUpsell Page
    Then Select 1 Year Digital Archive Access checkbox at Hoffman_USDigitalWithUpsell Page
    And Validate Mailing and Billing Address text
    When Enter US country values in Mailing and Billing Address form for Hoffman_USDigitalWithUpsell
    When Check I have a different mailing address checkbox at Hoffman_USDigitalWithUpsell Page
    Then Select the Country Value from Billing County Drop Down at Hoffman_USDigitalWithUpsell Page
    Then Enter values in Mailing Address form at Hoffman_USDigitalWithUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Amount Before Order at Hoffman_USDigitalWithUpsell Page with Different Mailing Address
    And Click on Place Order button
    Then Validate Amount After Order at Hoffman_USDigitalWithUpsell Page with Different Mailing Address
    Then Validate TRANSACTION SUCCESSFUL text
