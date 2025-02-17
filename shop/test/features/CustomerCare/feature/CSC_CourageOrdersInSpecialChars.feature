@smoke
Feature: Courage Special Cases - Courage Order in Special Chars
        Validate Courage Special Cases - Courage Order in Special Chars

  Scenario: Courage Special Cases - Courage CA Gift Order Special Chars in Gift Email  DB
    Given User opens Courage Special Cases - Courage Order in Special Chars
    When Check This Is A Gift checkbox
    Then Validate Billing Address text
    When Enter values in Billing Address form for CA
    Then Validate Gift Recipient Mailing Address text
    And Validate Order Number 1 text
    When Enter values in Gift Recipient Mailing Address form for CA
    And Click on Place Order button
    Then Validate messages Product is not available in selected country text
    And Validate Invalid email address text
    And Validate Per Gift text in Summary section
    And Validate Gifts text in summary section
    And Validate Gift Order 1 text in summary section

  Scenario: Courage Special Cases - Courage US Order Special Chars in Email
    Given User opens Courage Special Cases - Courage Order in Special Chars
    Then Validate Mailing and Billing Address text
    Then Validate Order Number 1 text
    When Enter values in Mailing and Billing Address form for US with Special Chars in Email
    Then Validate Invalid email address text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate Email alert text
    When Enter valid Email address in Email text field
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Courage Special Cases - Courage US Order Special Chars in Phone
    Given User opens Courage Special Cases - Courage Order in Special Chars
    Then Validate Mailing and Billing Address text
    Then Validate Order Number 1 text
    When Enter values in Mailing and Billing Address form for US with Special Chars in Phone
    # Then Validate Numeric characters only text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    # Then Validate PhoneNumber alert text
    # When Enter valid Phone Number in Phone Number text field
    # And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
