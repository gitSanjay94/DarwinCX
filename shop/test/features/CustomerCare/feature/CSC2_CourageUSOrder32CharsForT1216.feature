@smoke
Feature: Test Courage US Order 32 chars for T1216
         Validate Courage US Order 32 chars for T1216

  Scenario: Validate Courage US Order 32 chars for T1216
    Given User opens URL CSC2_CourageCA1Gift32charsforT1216
    Then Check I have a different mailing address checkbox
    Then Validate Billing Address text
    And Validate Order Number 1 text
    When Enter values in Billing Address form for CSC2_CourageUSOrder32CharsForT1216 Page
    Then Validate number of char in Billing Address 2 text field to be 32
    Then Validate Mailing Address text
    When Enter values in Mailing Address form for CSC2_CourageUSOrder32CharsForT1216 Page
    Then Validate number of char in Mailling Address 2 text field to be 32
    When Click Add Gift Recipient button
    Then Validate Gift Recipient Mailing Address text
    Then Validate Order Number 2 text
    When Enter values in Gift Recipient Mailing Address form for CSC2_CourageUSOrder32CharsForT1216 Page
    Then Validate number of char in Gift Recepient Address 2 text field to be 32
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
