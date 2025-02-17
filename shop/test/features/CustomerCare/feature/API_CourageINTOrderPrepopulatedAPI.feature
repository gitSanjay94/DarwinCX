@smoke
Feature: Courage INT Order Prepopulated API
        Validate Courage INT Order Prepopulated API

  Scenario: Courage INT Order Prepopulated API
    Given User opens Courage INT Order Prepopulated API
    Then Verify the first name in Courage INT Order Prepopulated API fields
    Then Verify the last name in Courage INT Order Prepopulated API fields
    Then Verify the company text field has no value
    Then Verify the job title text field has no value
    Then Verify the address1 in Courage INT Order Prepopulated API fields
    Then Verify the city in Courage INT Order Prepopulated API fields
    Then Verify the postal code in Courage INT Order Prepopulated API fields
    Then Verify the country in Courage INT Order Prepopulated API fields
    Then Validate Product is not available in selected country text
    Then Verify the province in Courage INT Order Prepopulated API fields
    Then Verify the phone number text field has no value
    Then Verify the email in Courage INT Order Prepopulated API fields
