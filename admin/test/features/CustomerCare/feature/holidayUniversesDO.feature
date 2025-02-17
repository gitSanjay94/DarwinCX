@smoke 
Feature: Holiday Universes DO
    Validate Holiday Universes DO feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English
    
# Not automatable as its showing duplicate message
#  Scenario: User should be able to add new Holiday Universes
#     Given User selects the clients
#     When Click Marketing Studio
#     And Click Campaign Configurator
#     And Click Holiday Universes DO
#     And Click on Add button
#     And Add New Holiday Universe
#      And Click on Add button
#     Then Validate Successfully Added Holiday Campaign Universe Text

  Scenario: User should be able to select Close in Change Panel Numbers Priority popup
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Holiday Universes DO
    Then Click on Next button of page
    Then Validate Page Number Text
    Then Click on Previos button of page
    When Select Close in Change Panel Numbers Priority popup
