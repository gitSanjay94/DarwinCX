@smoke
Feature: New params in url - US no  Address 1
         Validate Missing Address Line 1 - US   

  Scenario: Validate Missing Address Line 1 - US
    Given User opens New params in url - US no  Address 1
    When  Verify the New params First Name
    Then  Verify the New params Last Name
    Then  Verify the New Page Blank Company Name
    # And   Verify the New Page Blank Address1 Value
    And   Verify the New Page Address2 Value
    And   Verify the New Page City Value
    Then  Verify the New Page Postal Code Value
    Then  Verify the New Page Email Address Value
    Then  Verify the New Page Country Value
    Then  Verify the New Page User Province
    