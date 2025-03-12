@smoke  @jkob
Feature: Courage Special Cases - Courage 02HMTYPC Orders
        Validate Courage Special Cases - Courage 02HMTYPC Orders

  Scenario: Courage Special Cases - 1 Courage 02HMTYPC Order
    Given User opens Courage Special Cases - Courage 02HMTYPC Orders
    Then Validate Offer Has All Delivery Types text
    When Check 1 Year Print checkbox
    And Check 1 Year Digital checkbox
    And Check 1 Year Print and Digital checkbox
    And Check Courage Calendar checkbox
    And Enter values in Mailing and Billing Address form
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Courage Special Cases - 2 Courage 02HMTYPC Gift Order
    Given User opens Courage Special Cases - Courage 02HMTYPC Orders
    Then Validate Offer Has All Delivery Types text
    When Check 1 Year Print checkbox
    And Check 1 Year Digital checkbox
    And Check 1 Year Print and Digital checkbox
    And Check Courage Calendar checkbox
    And Enter values in Mailing and Billing Address form
    And Check This Is A Gift checkbox
    And Enter values in Gift Recipient Mailing Address form
    Then Validate Per Gift text in Summary section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Courage Special Cases - 3 Courage 02HMTYPC Mail Add Diff Order
    Given User opens Courage Special Cases - Courage 02HMTYPC Orders
    Then Validate Offer Has All Delivery Types text
    When Check 1 Year Print checkbox
    And Check 1 Year Digital checkbox
    And Check 1 Year Print and Digital checkbox
    And Check Courage Calendar checkbox
    And Enter values in Mailing and Billing Address form
    When Check I have a different mailing address checkbox
    Then Validate Mailing Address text
    When Enter values in Mailing Address form
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
