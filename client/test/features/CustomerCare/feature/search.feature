@smoke @regression
Feature: Search Feature
    Validate Search feature     

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English

  Scenario: User should be able to search the existing customer
    Given User selects the client
    When User enter the search criteria "uniquex1 euqinux1"
    And Click on search button
    # Then Use the existing customer or create a new customer "uniquex1 euqinux1" based on the returned search result
