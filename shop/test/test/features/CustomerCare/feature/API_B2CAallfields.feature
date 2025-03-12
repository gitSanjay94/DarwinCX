@smoke
Feature: B2 New params in url - CA all fields
         Validate B2 New params in url - CA all fields feature    

  Scenario: Validate B2 New params in url - CA all fields
    Given User opens B2 New params url
    When Verify the B2 New params First Name
    Then Verify the B2 New params Last Name
    Then Verify the B2 New Page Blank Company Name
    And Verify the B2 New Page Address1 Value
    And Verify the B2 New Page Address2 Value
    And Verify the B2 New Page City Value
    Then Verify the B2 New Page Postal Code Value
    Then Verify the B2 New Page Email Address Value
    Then Verify the B2 New Page Country Value
    Then Verify the B2 New Page User Province
