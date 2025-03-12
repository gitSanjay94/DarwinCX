@smoke
Feature: Test Courage INT Order INT Bill Me
         Validate Courage INT Order INT Bill Me

  Scenario: Validate Courage INT Order INT Bill Me
    Given User opens URL Courage_INTOrderINTBillMe
    Then Validate "Courage Magazine Subscription Options" text in Courage_INTOrderINTBillMePage
    And Select the international Country Available Subscription Option
    And Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Mailing and Billing Address form for Courage_INTOrderINTBillMePage
    When Select Bill Me Later Payment Option
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  
