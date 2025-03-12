@smoke
Feature: New params in url - US no Email
         Validate Missing Email Address - US

  Scenario: Validate Missing Email Address - US
    Given User opens New params in url - US no Email
    When  Verify the New params in url - US no Email First Name
    Then  Verify the New params in url - US no Email Last Name
    And   Verify the New params in url - US no Email Address1 Value
    And   Verify the New params in url - US no Email Address2 Value
    And   Verify the New params in url - US no Email City Value
    Then  Verify the New params in url - US no Email Postal Code Value
    Then Verify the New params in url - US no Email Blank Email Address Value
    Then  Verify the New params in url - US no Email Country Value
    Then  Verify the New params in url - US no Email User Province
    Then  Click on Pay Order link Button at New params in url - US no Email page
    Then  Verify the alert message for fill the Email Address
    