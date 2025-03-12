@smoke
Feature: New Param in URL US No Country order
         Validate Missing Country Field - US

  Scenario: Validate Missing Country Field - US
    Given User opens New Param URL US No Country order
    When  Verify the First Name Value at New Param in URL US No Country order Page
    Then  Verify the Last Name Value at New Param in URL US No Country order Page
    And   Verify the Address1 Value at New Param in URL US No Country order Page
    And   Verify the Address2 Value at New Param in URL US No Country order Page
    And   Verify the City Value at New Param in URL US No Country order Page
    Then  Verify the Postal Code Value at  New Param in URL US No Country order Page
    Then  Verify the Email Address Value at New Param in URL US No Country order Page
    Then  Verify the Country Value at New Param in URL US No Country order Page
    Then  Verify the User Province at New Param in URL US No Country order Page
    Then  Unselect the Country Value from Country Drop down
    Then  Click on Pay Order link Button
    Then  Verify the alert message for select the country
    