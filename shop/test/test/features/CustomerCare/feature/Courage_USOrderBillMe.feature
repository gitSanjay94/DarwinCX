@smoke
Feature: Test Courage US Order Bill Me
         Validate Courage US Order Bill Me

  Scenario: Validate Courage US Order Bill Me
    Given User opens URL Courage_USOrderBillMe
    Then Validate "Courage Magazine Subscription Options" text in Courage_USOrderBillMePage
    And Validate US Subscription Option "Batch QA US 810" is checked in Courage_USOrderBillMePage
    And Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Mailing and Billing Address form for Courage_USOrderBillMe
    And Click Bill Me Later Info
    Then Validate Bill Me Later Info text
    When Select Bill Me Later Payment Option
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
