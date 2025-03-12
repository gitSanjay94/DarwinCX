@smoke
Feature: Test Courage US 2 Gifts Order - SubDonor with two gifts
         Validate System processes two gifts order for SubDonor

    Scenario: Validate System processes two gifts order for SubDonor
    Given User opens URL CSC2_CourageUS2GiftsOrderSubDonor
    Then  Check the Donation Subscription Radio Button
    Then  Enter values in Mailing and Billing Address form at CSC2_CourageCA1Gift32charsforT1216 Page
    And   Check This Is A Gift checkbox
    And   Enter values in Gift Recipient Mailing Address form
    And   Click on Place Order button
    Then  Validate TRANSACTION SUCCESSFUL text
    # Then  Validate Total Price Value

 

