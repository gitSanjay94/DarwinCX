@smoke
Feature: Test Hoffman US Print Negative test
         Validate the Hoffman US Print Negative test

  Scenario: Validate Hoffman US Print Negative test for Canada
    Given User opens URL Hoffman_USPrintNegativeTest_LANDING_URL_ENDPOINT
    Then Validate "United States Offers" text
    Then Validate "6 print and digital issues" to be checked
    Then Validate "Canadian & International Offers" text
    When Click on "Canadian & International Offers"
    When Check "Canada: 6 print and digital issues" radio button
    Then Validate "6 print and digital issues" to be unchecked
    When Check "1 Year Digital Archive Access" check box
    Then Validate Mailing and Billing Address text
    When Fill Mailing and Billing Address form for Canada Hoffman_USPrintNegativeTest
    Then Validate "Order Summary" text
    When Fetch "Canada: 6 print and digital issues" amount in "Order Summary" section for Hoffman_USPrintNegativeTestPage
    # When Fetch "Digital Archive Access" Amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    # When Fetch "Tax" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    # When Fetch "Total" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    # When Calculate total amount in "Order Summary" section for Canada Hoffman_USPrintNegativeTestPage
    Then Validate "Total" amount in "Order Summary" section and "Total" calculated amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    When Enter valid payment details "4242 4242 4242 4242" and "1225"  and "123"
    And Click "Place Order" button
    Then Validate TRANSACTION SUCCESSFUL text
    # When Fetch "Total price" for Hoffman_USPrint_DigitalWithNoUpsellPage
    # Then Validate "Total price" and "Total" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage

  Scenario: Validate Hoffman US Print Negative test for International
    Given User opens URL Hoffman_USPrintNegativeTest_LANDING_URL_ENDPOINT
    Then Validate "United States Offers" text
    Then Validate "6 print and digital issues" to be checked
    Then Validate "Canadian & International Offers" text
    When Click on "Canadian & International Offers"
    When Check "International: 6 print and digital issues" radio button
    Then Validate "6 print and digital issues" to be unchecked
    When Check "1 Year Digital Archive Access" check box
    Then Validate Mailing and Billing Address text
    When Fill Mailing and Billing Address form for International Hoffman_USPrintNegativeTest
    Then Validate "Order Summary" text
    When Fetch "International: 6 print and digital issues" amount in "Order Summary" section for Hoffman_USPrintNegativeTestPage
    When Fetch "Digital Archive Access" Amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    When Fetch "Tax" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    When Fetch "Total" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    When Calculate total amount in "Order Summary" section for International Hoffman_USPrintNegativeTestPage
    # Then Validate "Total" amount in "Order Summary" section and "Total" calculated amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
    When Enter valid payment details "4242 4242 4242 4242" and "1225"  and "123"
    And Click "Place Order" button
    Then Validate TRANSACTION SUCCESSFUL text
    # When Fetch "Total price" for Hoffman_USPrint_DigitalWithNoUpsellPage
    # Then Validate "Total price" and "Total" amount in "Order Summary" section for Hoffman_USPrint_DigitalWithNoUpsellPage
