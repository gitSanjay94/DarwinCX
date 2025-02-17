@smoke
Feature: Test FSMSE_Hoffman CAN Digital No Upsell Order
         Validate the digital product order without upsell options

  Scenario: Validate FSMSE_HoffmanCANDigitalNoUpsell Page Blank fields Values
    Given User opens URL FSMSE_HoffmanCANDigital
    When Verify the Blank First Name Value at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Verify the Blank Last Name Value at FSMSE_HoffmanCANDigitalNoUpsell Page
    And Verify the Blank Address1 Value at FSMSE_HoffmanCANDigitalNoUpsell Page
    And Verify the Blank Address2 Value at FSMSE_HoffmanCANDigitalNoUpsell Page
    And Verify the Blank City Value at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Verify the Blank Postal Code Value at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Verify the Blank Email Address Value at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Verify the Country Value at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Verify the Select  User Province at FSMSE_HoffmanCANDigitalNoUpsell Page

  Scenario: Validate FSMSE_HoffmanCANDigitalNoUpsell Page Missing fields Alerts
    Given User opens URL FSMSE_HoffmanCANDigital
    And Click on Place Order button
    Then Validate First Name Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Validate Last Name Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Validate Address1 Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Validate City Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Validate Province Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Validate Postal code Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Validate Email Missing text under first name text field section at FSMSE_HoffmanCANDigitalNoUpsell Page

  Scenario: Validate the digital product order without upsell options
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at FSMSE_HoffmanCANDigitalNoUpsell Page
    And Validate Mailing and Billing Address text
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalNoUpsell
    Then Validate Summary text at FSMSE_HoffmanCANDigitalNoUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate the digital product order without checking upsell options checkbox
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at FSMSE_HoffmanCANDigitalNoUpsell Page
    And Validate Mailing and Billing Address text
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalNoUpsell
    Then Select No Subscription Preferences at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Validate Summary text at FSMSE_HoffmanCANDigitalNoUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate the digital product order without visibility of upsell options checkbox
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Select 6 Issues Print Only USoffer
    And Validate Mailing and Billing Address text
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalNoUpsell
    Then The 1 Year Digital Archive Access checkbox should not be visible
    Then Select No Subscription Preferences at FSMSE_HoffmanCANDigitalNoUpsell Page
    Then Validate Summary text at FSMSE_HoffmanCANDigitalNoUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate the digital product order without digital upsell option For Candian Customer
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at FSMSE_HoffmanCANDigitalUpsell Page
    Then Select the Canada & Internation Offers Option at FSMSE_HoffmanCANDigitalUpsell Page
    Then Select the Canada Country Available Subscription Option at FSMSE_HoffmanCANDigitalUpsell Page
    And Validate Mailing and Billing Address text
    When Enter Candian values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalUpsell
    Then Validate Summary text at FSMSE_HoffmanCANDigitalUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  # Scenario: Validate Hoffman US Gift Order BOGO - Two Recipients
  #   Given User opens URL FSMSE_HoffmanCANDigital
  #   Then Validate The Perfect Gift for the Deer Hunter text
  #   And Validate US Offer text
  #   And Validate Mailing and Billing Address text
  #   When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalNoUpsell
  #   Then Validate Gift Recipient Mailing Address text
  #   When Enter values in Gift Recipient Mailing Address form for Order 1
  #   When Click Add Gift Recipient button
  #   When Enter values in Gift Recipient Mailing Address form for Order 2
  #   Then Validate Order Summary text
  #   And Validate Free Gift To Donor text under order summary section
  #   And Validate Gift Order 1 text under order summary section
  #   And Validate Gift Order 2 text under order summary section
  #   When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
  #   And Click on Place Order button
  #   Then Validate TRANSACTION SUCCESSFUL text

  # Scenario: Validate Hoffman US Gift Order BOGO - Two Recipients with different mailing address
  #   Given User opens URL FSMSE_HoffmanCANDigital
  #   Then Validate The Perfect Gift for the Deer Hunter text
  #   And Validate US Offer text
  #   When Check I have a different mailing address checkbox
  #   When Validate Billing Address text
  #   When Enter values in Mailing and Billing Address form for FSMSE_HoffmanCANDigitalNoUpsell
  #   Then Validate Mailing Address text
  #   When Enter values in Mailing Address form for FSMSE_HoffmanCANDigitalNoUpsell
  #   Then Validate Gift Recipient Mailing Address text
  #   When Enter values in Gift Recipient Mailing Address form for Order 1
  #   When Click Add Gift Recipient button
  #   When Enter values in Gift Recipient Mailing Address form for Order 2
  #   Then Validate Order Summary text
  #   And Validate Free Gift To Donor text under order summary section
  #   And Validate Gift Order 1 text under order summary section
  #   And Validate Gift Order 2 text under order summary section
  #   When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
  #   And Click on Place Order button
  #   Then Validate TRANSACTION SUCCESSFUL text
