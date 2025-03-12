@smoke
Feature: Courage CA Renew Prepopulated API
         Validate the API behavior with prepopulated data for a CA renewal

  Scenario: Validate the API behavior with prepopulated data for a CA renewal
    Given User opens Courage CA Renew Prepopulated API
    When  Verify the Courage CA Renew Prepopulated API User Account Number
    Then  Verify the Courage CA Renew Prepopulated API User Account Last Name
    And   Validate Purchaser CA Firstname and Lastname
    Then  Validate Purchaser Renewals CA Product Name and Expiray Date
    # And   Verify the New params in url - US no Email Address2 Value
    # And   Verify the New params in url - US no Email City Value
    # Then  Verify the New params in url - US no Email Postal Code Value
    # Then Verify the New params in url - US no Email Blank Email Address Value
    # Then  Verify the New params in url - US no Email Country Value
    # Then  Verify the New params in url - US no Email User Province
    # Then  Click on Pay Order link Button at New params in url - US no Email page
    # Then  Verify the alert message for fill the Email Address
    