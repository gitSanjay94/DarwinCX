@smoke
Feature: Test Courage US Order
         Validate Courage US Order

  Scenario: Validate Courage US Order
    Given User opens URL Courage_USOrder
    Then Validate "Courage Magazine Subscription Options" text
    And Validate US Subscription Option "Batch QA US 810" is checked
    And Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Mailing and Billing Address form for Courage_USOrder 
    And Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
