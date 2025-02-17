@smoke
Feature: Test Courage CA Order with DB Tax 1 functionality
         Validate Courage CA Order with DB Tax 1

  
  Scenario: Courage CA Order with DB Tax 1
    Given User opens CourageCAOrderWithDBTax Page
    Then Validate "Courage Magazine Subscription Options" text for CourageCAOrderWithDBTax
    Then Validate "Batch QA US 8" to be checked
    Then Validate "Courage US and International" text
    When Click "Courage US and International" text
    When Check "21 Aug Test" radio button
    Then Validate "Batch QA US 8" to be unchecked
    Then Validate "Testing Cross Bundle" text
    When Check "Test Offer Courage Print and Digital" check box
    Then Validate Mailing and Billing Address text
    Then Validate Order Number 1 text
    When Fill Mailing and Billing Address form for CourageCAOrderWithDBTax
    Then Validate "Summary" text for CourageCAOrderWithDBTax
    When Fetch "1 year Test Offer 8 Issues" amount in "Summary" section for CourageCAOrderWithDBTax
    When Fetch "3 years BridgeTower Test Product US Print and Digital 10 Issues" amount in "Summary" section for CourageCAOrderWithDBTax
    When Calculate total amount in "Summary" section for CourageCAOrderWithDBTax
    When Fetch "Total" amount in "Summary" section for CourageCAOrderWithDBTax
    Then Validate "Total" amount in "Summary" section and "Total" calculated amount in "Summary" section for CourageCAOrderWithDBTax
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "365"
    When Click "Place Order" button
    Then Validate TRANSACTION SUCCESSFUL text
    When Fetch "Total price" for CourageCAOrderWithDBTax
    Then Validate "Total price" and "Total" amount in "Summary" section for CourageCAOrderWithDBTax
