@smoke 
Feature: Test FSMSE_HoffmanUSGiftOrderBOGODonorRecip Order
         Validate the FSMSE_HoffmanUSGiftOrderBOGODonorRecip Order Process

  Scenario: Validate the digital product order without visibility of upsell options checkbox
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then Select 1 Year Digital Archive Access checkbox at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    And Validate Mailing and Billing Address text
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip
    Then Select No Subscription Preferences at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then Validate Summary text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then Validate Tax Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then Validate Amount Before Order at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Amount After Order at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page

  Scenario: Validate the digital product order For Candian Customer
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then Select the Canada & Internation Offers Option at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then Select the Canada Country Available Subscription Option at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then Select 1 Year Digital Archive Access checkbox at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    And Validate Mailing and Billing Address text
    When Enter Candian values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip
    Then Validate Summary text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate the digital product order without visibility of upsell options checkbox
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then Select 1 Year Digital Archive Access checkbox at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    When Check I have a different mailing address checkbox at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip
    Then Validate Mailing Address text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    When Enter values in Mailing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip
    Then Select No Subscription Preferences at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then Validate Summary text at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page
    Then Validate Tax Value at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page for Different Mailing Address
    Then Validate Amount Before Order at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page for Different Mailing Address
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Amount After Order at FSMSE_HoffmanUSGiftOrderBOGODonorRecip Page with Different Mailing Address
 
  # Scenario: Validate Hoffman US Gift Order BOGO - Two Recipients
  #   Given User opens URL FSMSE_HoffmanCANDigital
  #   Then Validate The Perfect Gift for the Deer Hunter text
  #   And Validate US Offer text
  #   And Validate Mailing and Billing Address text
  #   When Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip
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
  #   When Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip
  #   Then Validate Mailing Address text
  #   When Enter values in Mailing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip
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
