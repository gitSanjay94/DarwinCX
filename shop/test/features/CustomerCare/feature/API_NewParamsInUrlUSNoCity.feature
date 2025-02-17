@smoke
Feature: New params in url - US no City
        Validate New params in url - US no City

  Scenario: New params in url - US no City
    Given User opens New params in url - US no City
    Then Verify the first name in New params in url - US no City fields
    Then Verify the last name in New params in url - US no City fields
    Then Verify the company text field has no value
    Then Verify the job title text field has no value
    Then Verify the address1 in New params in url - US no City fields
    Then Verify the address2 in New params in url - US no City fields
    Then Verify the city text field has no value
    Then Validate City Missing text under city text field section
    Then Verify country in New params in url - US no City fields
    Then Verify province in New params in url - US no City fields
    Then Verify postal code in New params in url - US no City fields
    Then Verify the phone number text field has no value
    Then Verify email in New params in url - US no City fields
