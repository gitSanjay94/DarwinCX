@smoke 
Feature: Holiday Journeys DO
    Validate Holiday Journeys DO feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to Click Cancel button in Detail Holiday Journeys popup
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Holiday Journeys DO
    When Click Cancel button in Detail Holiday Journeys popup

  Scenario: User should be able to edit Description of Holiday Journey
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Holiday Journeys DO
    When Edit Description of Holiday Journey
    Then Validate Update Successful Text
