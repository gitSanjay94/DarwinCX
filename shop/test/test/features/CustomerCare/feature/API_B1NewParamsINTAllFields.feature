@smoke
Feature: B1 New Params INT All Fields
         Validate B1 New Params INT All Fields feature    

  Scenario: Validate B1 New Params INT All Fields
    Given User opens B1 New Params INT All Fields url
    Then Verify the First Name in B1 New Params INT All Fields
    Then Verify the Last Name in B1 New Params INT All Fields
    Then Verify the company text field has no value
    Then Verify the job title text field has no value
    Then Verify the Address1 in B1 New Params INT All Fields
    Then Verify the Address2 in B1 New Params INT All Fields
    Then Verify the City in B1 New Params INT All Fields
    Then Verify the postal code in B1 New Params INT All Fields
    Then Verify the country in B1 New Params INT All Fields
    Then Validate Product is not available in selected country text
    Then Verify the province in B1 New Params INT All Fields
    Then Verify the phone number text field has no value
    Then Verify the email in B1 New Params INT All Fields
