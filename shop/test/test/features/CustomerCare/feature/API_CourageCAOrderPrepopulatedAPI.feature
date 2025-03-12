@smoke
Feature: Courage CA Order Prepopulated API
        Validate Courage CA Order Prepopulated API

  Scenario: Courage CA Order Prepopulated API
    Given User opens Courage CA Order Prepopulated API
    Then Verify the first name in Courage CA Order Prepopulated API fields
    Then Verify the last name in Courage CA Order Prepopulated API fields
    Then Verify the company text field has no value
    Then Verify the job title text field has no value
    Then Verify the address1 in Courage CA Order Prepopulated API fields
    Then Verify the city in Courage CA Order Prepopulated API fields
    Then Verify the postal code in Courage CA Order Prepopulated API fields
    Then Verify the country in Courage CA Order Prepopulated API fields
    Then Validate Product is not available in selected country text
    Then Verify the province in Courage CA Order Prepopulated API fields
    Then Verify the email in Courage CA Order Prepopulated API fields
