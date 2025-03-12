@smoke
Feature: Test Hoffman US Print_Digital with Upsell. TAXES.
         Validate the Hoffman US Print_Digital with Upsell. TAXES. options

  Scenario: Validate Hoffman US Print_Digital with No Upsell
    Given User opens URL FSMSE_HoffmanCANDigital
    Then Validate "United States Offers" text
    Then Validate "6 print and digital issues" to be checked
    When Check "1 Year Digital Archive Access" check box
    Then Validate Mailing and Billing Address text
    When Fill Mailing and Billing Address form for Hoffman_USPrint_DigitalWithNoUpsellPage
    # Then Validate "Order Summary" text
    # When Fetch "print and digital issues" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    # When Fetch "Digital Archive Access" Amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    # When Fetch "Tax" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    # When Fetch "Total" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    # When Calculate total amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    # Then Validate "Total" amount in "Order Summary" section and "Total" calculated amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    When Enter valid payment details "4242 4242 4242 4242" and "1225"  and "123"
    And Click "Place Order" button
    Then Validate TRANSACTION SUCCESSFUL text
    # When Fetch "Total price" for Hoffman_USPrint_DigitalWithNoUpsellPage
    # Then Validate "Total price" and "Total" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
