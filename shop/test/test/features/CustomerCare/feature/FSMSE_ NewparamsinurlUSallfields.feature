@smoke
Feature: FSMSE New Params US All Fields
         Validate FSMSE New Params US All Fields feature    

  Scenario: Validate FSMSE New Params US All Fields
    Given User opens FSMSE New Params US All Fields url
    Then Verify the First Name in FSMSE New Params US All Fields
    Then Verify the Last Name in FSMSE New Params US All Fields
    # Then Verify the FSMSE company text field has no value
    # Then Verify the FSMSE job title text field has no value
    Then Verify the Address1 in FSMSE New Params US All Fields
    # Then Verify the Address2 in FSMSE New Params US All Fields
    # Then Verify the City in FSMSE New Params US All Fields
    Then Verify the postal code in FSMSE New Params US All Fields
    # Then Verify the FSMSE phone number text field has no value
    Then Verify the email in FSMSE New Params US All Fields
    Then Verify the country in FSMSE New Params US All Fields
    Then Verify the province in FSMSE New Params US All Fields
    Then I should see the count of radio buttons
    Then I should see the values of all radio buttons
    # And Values of all radio buttons should be "PB-1133","PB-1134","PB-1135","PB-1136","PB-1137","PB-1138","PB-1139","PB-1343","PB-1042","PB-1529","PB-1530","PB-1638"
    # And Values of all radio buttons should be "PB-1133", "PB-1134", "PB-1135","PB-1136","PB-1137", "PB-1138","PB-1139","PB-1343","PB-1042","PB-1529","PB-1530","PB-1638"