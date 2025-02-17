@smoke 
Feature: Holiday Campaign DO
    Validate Holiday Campaign DO feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to select NO in Freeze Holiday Campaign popup
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Holiday Campaign DO
    Then Click on Next button of page
    Then Validate Page Number Text
    Then Click on Previos button of page
    When Select NO in Freeze Holiday Campaign popup

#  BUG# ID1-I3248 : Marketing Studio - Holiday Campaign(DO): Invalid Alert message is being populated
#  when Adding Holiday Campaign without selecting any options
  Scenario: User should be able to add Holiday Campaign without selecting any option
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Holiday Campaign DO
    And Click on Add button
    And Click Add button in Add Holiday Campaign popup
    Then Validate Required Text in Add Holiday Campaign popup
