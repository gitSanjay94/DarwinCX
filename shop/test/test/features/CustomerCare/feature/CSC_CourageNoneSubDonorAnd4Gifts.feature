@smoke
Feature: Courage Special Cases - Courage Donor and 4 gifts
        Validate Courage Special Cases - Courage Donor and 4 gifts

  Scenario: Courage Special Cases - Courage NoneSubDonor and 4 gifts
    Given User opens Courage Special Cases - Courage NoneSubDonor and 4 gifts
    When Enter all the fields on the Mailing and Billing Address form
    And Enter all the fields on the Gift Recipient Mailing Address form
    And Check Credit card radio button
    And Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text


  Scenario: Courage Special Cases - Courage SubDonor and 4 gifts
    Given User opens Courage Special Cases - Courage NoneSubDonor and 4 gifts
    When Enter all the fields on the Mailing and Billing Address form
    And Check This Is A Gift checkbox
    When Enter all the fields on the Gift Recipient Mailing Address form
    And Check Auto renew this gift subscription checkbox
    And Enter all the fields on the Gift Recipient 2 Mailing Address form
    And Check Credit card radio button
    And Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
