@smoke
Feature: Test FSMSE_HoffmanUSPrint_DigitalUpsellTAXESPage Order
         Verify print and digital order with upsell and taxes Order Process

  Scenario: Verify print and digital order with upsell and taxes
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then Select 1 Year Digital Archive Access checkbox at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Check I have a different mailing address checkbox at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES
    Then Validate Mailing Address text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Enter values in Mailing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES
    Then Select No Subscription Preferences at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then Validate Summary text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then Validate Tax Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page for Different Mailing Address
    Then Validate Amount Before Order at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page for Different Mailing Address
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Amount After Order at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page with Different Mailing Address

  Scenario: Verify print and digital order with upsell and without Taxes
    Given User opens URL FSMSE_HoffmanCANDigital
    And Validate US Offer text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Check I have a different mailing address checkbox at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES
    Then Validate Mailing Address text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Enter values in Mailing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES
    Then Select No Subscription Preferences at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then Validate Summary text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Verify digital order with upsell and without Taxes
    Given User opens URL FSMSE_HoffmanCANDigital
    Then Select 6 Issues Digital Only USoffer
    And Validate US Offer text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Check I have a different mailing address checkbox at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES
    Then Validate Mailing Address text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Enter values in Mailing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES
    Then Select No Subscription Preferences at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then Validate Summary text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Verify digital order with upsell and with Taxes
    Given User opens URL FSMSE_HoffmanCANDigital
    Then Select 6 Issues Digital Only USoffer
    And Validate US Offer text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then The 1 Year Digital Archive Access checkbox should be visible at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then Select 1 Year Digital Archive Access checkbox at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Check I have a different mailing address checkbox at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES
    Then Validate Mailing Address text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    When Enter values in Mailing Address form for FSMSE_HoffmanUSPrint_DigitalUpsellTAXES
    Then Select No Subscription Preferences at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then Validate Summary text at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page
    Then Validate Tax Value at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page for Digital Only Offer & Different Mailing Address
    Then Validate Amount Before Order at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Page for Digital Only Offer & Different Mailing Address
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Amount After Order at FSMSE_HoffmanUSPrint_DigitalUpsellTAXES Pagefor Digital Only Offer & Different Mailing Address
