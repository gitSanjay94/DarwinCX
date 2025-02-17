@smoke123456789

Feature: Test Hoffman US Digital No Upsell Order
         Validate the Digital product order without upsell options

  Scenario: Validate Hoffman_USDigitalWithNoUpsell Page Blank fields Values
    Given User opens URL FSMSE_HoffmanCANDigital
    When Verify the Blank First Name Value at Hoffman_USDigitalWithNoUpsell Page
    Then Verify the Blank Last Name Value at Hoffman_USDigitalWithNoUpsell Page
    And Verify the Blank Address1 Value at Hoffman_USDigitalWithNoUpsell Page
    And Verify the Blank Address2 Value at Hoffman_USDigitalWithNoUpsell Page
    And Verify the Blank City Value at Hoffman_USDigitalWithNoUpsell Page
    Then Verify the Blank Postal Code Value at Hoffman_USDigitalWithNoUpsell Page
    Then Verify the Blank Email Address Value at Hoffman_USDigitalWithNoUpsell Page
    Then Verify the Country Value at Hoffman_USDigitalWithNoUpsell Page
    Then Verify the Select  User Province at Hoffman_USDigitalWithNoUpsell Page

  Scenario: Validate Hoffman_USDigitalWithNoUpsell Page Missing fields Alerts
    Given User opens URL FSMSE_HoffmanCANDigital
    And Click on Place Order button
    Then Validate First Name Missing text under first name text field section at Hoffman_USDigitalWithNoUpsell Page
    Then Validate Last Name Missing text under first name text field section at Hoffman_USDigitalWithNoUpsell Page
    Then Validate Address1 Missing text under first name text field section at Hoffman_USDigitalWithNoUpsell Page
    Then Validate City Missing text under first name text field section at Hoffman_USDigitalWithNoUpsell Page
    Then Validate Province Missing text under first name text field section at Hoffman_USDigitalWithNoUpsell Page
    Then Validate Postal code Missing text under first name text field section at Hoffman_USDigitalWithNoUpsell Page
    Then Validate Email Missing text under first name text field section at Hoffman_USDigitalWithNoUpsell Page

  Scenario: Validate the US Digital issues product order without upsell option
    Given User opens URL FSMSE_HoffmanCANDigital
    Then Select the US Country Available Subscription Option at Hoffman_USDigitalWithNoUpsell Page
    And Validate Mailing and Billing Address text
    When Enter US country values in Mailing and Billing Address form for Hoffman_USDigitalWithNoUpsell
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Amount Before Order at Hoffman_USDigitalWithNoUpsell Page
    And Click on Place Order button
    Then Validate Amount After Order at Hoffman_USDigitalWithNoUpsell Page
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate the US Digital issues product order without upsell option with Different Mailing Address
    Given User opens URL FSMSE_HoffmanCANDigital
    Then Select the US Country Available Subscription Option at Hoffman_USDigitalWithNoUpsell Page
    And Validate Mailing and Billing Address text
    When Enter US country values in Mailing and Billing Address form for Hoffman_USDigitalWithNoUpsell
    When Check I have a different mailing address checkbox at Hoffman_USDigitalWithNoUpsell Page
    Then Select the Country Value from Billing County Drop Down at Hoffman_USDigitalWithNoUpsell Page
    Then Enter values in Mailing Address form at Hoffman_USDigitalWithNoUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Amount Before Order at Hoffman_USDigitalWithNoUpsell Page
    And Click on Place Order button
    Then Validate Amount After Order at Hoffman_USDigitalWithNoUpsell Page
    Then Validate TRANSACTION SUCCESSFUL text
