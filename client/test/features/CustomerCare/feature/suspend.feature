@regression
Feature: Suspend feature
    Validate Suspend While Away feature 

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English

  Scenario: User should be able to suspend the issues while away
    Given User selects the client
    When User enter the search criteria "Copilot Suspend"
    And Click on search button
    # Then Use the existing customer or create a new customer "Copilot Suspend" based on the returned search result
    And Refresh the Landing page
    When Click Suspend while away
    And Select the first item in the list to suspend
    Then Validate the corresponding entry under the action tab
