@smoke
Feature: Test Courage CA Mail Add Difffor T1217
         Validate Courage CA Mail Add Diff for T1217

  Scenario: Validate Courage CA Mail Add Diff for T1217
    Given User opens URL CSC2_CourageCA1Gift32charsforT1216
    When Check I have a different mailing address checkbox
    Then Validate Billing Address text
    And Validate Order Number 1 text
    When Enter values in Billing Address form at CSC2_CourageCAMailAddDiffforT1217 Page
    Then Validate Mailing Address text
    When Enter values in Mailing Address form at CSC2_CourageCAMailAddDiffforT1217 Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate messages Product is not available in selected country text
    And Select the Canada Country Available Subscription Option
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
