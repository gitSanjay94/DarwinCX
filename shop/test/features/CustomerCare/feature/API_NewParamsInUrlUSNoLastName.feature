@smoke
Feature: New params in url - US no Last Name
        Validate New params in url - US no Last Name

  Scenario: New params in url - US no Last Name
    Given User opens New params in url - US no Last Name
    Then Verify the first name in New params in url - US no Last Name fields
    Then Verify the last name text field has no value
    Then Validate Last Name Missing text under last name text field section
    Then Verify the company text field has no value
    Then Verify the job title text field has no value
    Then Verify the address1 in New params in url - US no Last Name fields
    Then Verify the address2 in New params in url - US no Last Name fields
    Then Verify the city in New params in url - US no Last Name fields
    Then Verify the postal code in New params in url - US no Last Name fields
    Then Verify the country in New params in url - US no Last Name fields
    Then Verify the province in New params in url - US no Last Name fields
    Then Verify the phone number text field has no value
    Then Verify the email in New params in url - US no Last Name fields
