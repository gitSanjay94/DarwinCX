@smoke
Feature: New params in url - US no ZIP Code
        Validate New params in url - US no ZIP Code

  Scenario: New params in url - US no ZIP Code
    Given User opens New params in url - US no ZIP Code
    Then Verify the first name in New params in url - US no ZIP Code fields
    Then Verify the last name in New params in url - US no ZIP Code fields
    Then Verify the company text field has no value
    Then Verify the job title text field has no value
    Then Verify the address1 in New params in url - US no ZIP Code fields
    Then Verify the address2 in New params in url - US no ZIP Code fields
    Then Verify the city in New params in url - US no ZIP Code fields
    Then Verify the postal code text field has no value
    Then Validate Postal Code Missing text under postal code text field section
    Then Verify the country in New params in url - US no ZIP Code fields
    Then Verify the province in New params in url - US no ZIP Code fields
    Then Verify the phone number text field has no value
    Then Verify the email in New params in url - US no ZIP Code fields
