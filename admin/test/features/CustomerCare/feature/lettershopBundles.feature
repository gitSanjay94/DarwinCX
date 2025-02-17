@smoke 
Feature: Lettershop Bundles
    Validate Lettershop Bundles feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to add new Lettershop Bundles
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Lettershop Bundles
    And Click on Add button
    And Add New Lettershop Bundles
    Then Validate Lettershop Bundle Successfully Created Text

  Scenario: User should be able to edit Lettershop Bundles
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Lettershop Bundles
    And Edit Lettershop Bundles
    Then Validate Lettershop Bundle Successfully Updated Text

  Scenario: User should be able to clone Lettershop Bundles
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Lettershop Bundles
    And Click on clone button for first ID
    Then Validate Lettershop Bundle Successfully Created Text
