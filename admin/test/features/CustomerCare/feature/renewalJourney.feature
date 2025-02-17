@smoke 
Feature: Renewal Journeys
    Validate Renewal Journeys feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to add new Renewal Journey
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Renewal Journeys
    And Click on Add button
    And Add New Renewal Journey
    Then Validate Renewal Journey Successfully Created Text

  Scenario: User should be able to edit Renewal Journey
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Renewal Journeys
    And Edit Renewal Journey
    Then Validate Renewal Journey Successfully Updated Text

  # Scenario: User should be able to upload data in Renewal Journey
  #   Given User selects the clients
  #   When Click Marketing Studio
  #   And Click Campaign Configurator
  #   And Click Renewal Journeys
  #   And Click on Data Upload Button
  #   And Choose File To Upload data in Renewal Journey
  #   Then Validate File Uploaded Successfully

  Scenario: User should be able to Clone Renewal Journey
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Renewal Journeys
    And Click on Clone Buttons
    Then Validate the Cloned Creation Message
