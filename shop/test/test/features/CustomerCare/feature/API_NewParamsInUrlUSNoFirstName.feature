@smoke
Feature: New params in url - US no First Name
        Validate New params in url - US no First Name

  Scenario: New params in url - US no First Name
    Given User opens New params in url - US no First Name
    Then Verify the first name text field has no value
    Then Validate First Name Missing text under first name text field section
    Then Verify last name in New params in url - US no First Name fields
    Then Verify the company text field has no value
    Then Verify the job title text field has no value
    Then Verify address1 in New params in url - US no First Name fields
    Then Verify address2 in New params in url - US no First Name fields
    Then Verify city in New params in url - US no First Name fields
    Then Verify postal code in New params in url - US no First Name fields
    Then Verify country in New params in url - US no First Name fields
    Then Verify privince in New params in url - US no First Name fields
    Then Verify the phone number text field has no value
    Then Verify email in New params in url - US no First Name fields
