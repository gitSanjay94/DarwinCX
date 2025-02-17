@ea @regression 
Feature: Early Access
    Validate Early Access          

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English

  Scenario: User should be able to validate the Survey and Demographic section
    Given User selects the early access option
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    Then User selects the Survey and Demographic tab
    And click on Edit button to Edit the demographic information
    And Selects the gender as "Female"
    And Click Demographic Update Info button
    Then Validate edited information should reflect under the Survey and Demographic tab
    Then Validate the information under the Action tab
