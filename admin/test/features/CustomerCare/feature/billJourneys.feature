@smoke 
Feature: Bill Journeys
 Validate Bill Journeys feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to add new Bill Journey
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Bill Journeys
    And Click on Add button
    And Add New Bill Journey
    Then Validate Bill Journey Successfully Created Text

  Scenario: User should be able to edit Bill Journey
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Bill Journeys
    And Edit Bill Journey
    Then Validate Bill Journey Successfully Updated Text

  # Scenario: User should be able to upload data in Bill Journey
  #   Given User selects the clients
  #   When Click Marketing Studio
  #   And Click Campaign Configurator
  #   And Click Bill Journeys
  #   And Click on Data Upload Button
  #   And Choose File To Upload data in Bill Journey
  #   Then Validate File Uploaded

  Scenario: User should not be able to add Bill Journey with empty Data
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Bill Journeys
    And Click on Add button
    And Click on Add Button in popup
    Then Validate Required Text in popup

  Scenario: User should be able to clone Bill Journey
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Bill Journeys
    And Click on clone button for first ID
    Then Validate Bill Journey Successfully Created Text
