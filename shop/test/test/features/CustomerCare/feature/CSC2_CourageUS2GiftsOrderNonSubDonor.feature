@smoke
Feature: Test Courage US 2 Gifts Order - NonSubDonor with two gifts
         Validate System processes two gifts order for Non-SubDonor

  Scenario: Validate System processes two gifts order for Non-SubDonor
    Given User opens URL CSC2_CourageUS2GiftsOrderNonSubDonor
    When Select the Canada Country Available Subscription Option at CourageUS2GiftsOrderNonSubDonor Page
    Then Enter values in Mailing and Billing Address form at CSC2_CourageCA1Gift32charsforT1216
    And Check This Is A Gift checkbox
    And Enter values in Gift Recipient Mailing Address form
    Then Click on Add Gift Recipient Button
    Then Enter values in Gift Recipient Mailing Address form for 2nd Gift Recipient
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate TRANSACTION SUCCESSFUL for Gift Recipient2
