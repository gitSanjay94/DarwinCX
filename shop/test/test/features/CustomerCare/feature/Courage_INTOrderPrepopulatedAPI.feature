@smoke123456
Feature: Test Courage INT Order Prepopulated API
         Validate Courage INT Order Prepopulated API

  Scenario: Validate Bill me order rejected due to existing bill
    Given User opens URL Courage_INTOrderPrepopulatedAPI
    Then Validate "Courage Magazine Subscription Options" text in Courage_INTOrderPrepopulatedAPI
    And Select the international Country Available Subscription Option
    And Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Select Bill Me Later Payment Option
    And Click on Place Order button
    Then Validate Bill me order rejected due to existing bill

  Scenario: Validate Courage INT Order Prepopulated API
    Given User opens URL Courage_INTOrderPrepopulatedAPI
    Then Validate "Courage Magazine Subscription Options" text in Courage_INTOrderPrepopulatedAPI
    And Select the international Country Available Subscription Option
    And Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    Then Enter values in Mailing and Billing Address form for Courage_INTOrderPrepopulatedAPI
    When Select Bill Me Later Payment Option
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
