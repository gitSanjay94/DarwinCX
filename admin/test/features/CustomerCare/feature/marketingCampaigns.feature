@smoke 
Feature: Marketing Campaigns
    Validate Marketing Campaigns feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to filter Marketing Campaigns by ID
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Marketing Campaigns
    And Filter Marketing Campaigns by MC ID
    Then Validate Marketing Campaigns details

  Scenario: User should be able to filter Marketing Campaigns by Name
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Marketing Campaigns
    And Filter Marketing Campaigns by Name
    Then Validate Marketing Campaigns details

  Scenario: User should be able to filter Marketing Campaigns by Marketing Code
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Marketing Campaigns
    And Filter Marketing Campaigns by Marketing Code
    Then Validate Marketing Campaigns details

  Scenario: User should be able to filter Marketing Campaigns by Brand
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Marketing Campaigns
    And Filter Marketing Campaigns by Brand
    Then Validate Marketing Campaigns details

  Scenario: User should be able to filter Marketing Campaigns by Purchase Type
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Marketing Campaigns
    And Filter Marketing Campaigns by Purchase Type
    Then Validate Marketing Campaigns details

  Scenario: User should be able to filter Marketing Campaigns by Product Offer1
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Marketing Campaigns
    And Filter Marketing Campaigns by Product Offer1
    Then Validate Marketing Campaigns details

  Scenario: User should be able to filter Marketing Campaigns by International Offer
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Marketing Campaigns
    And Filter Marketing Campaigns by International Offer
    Then Validate Marketing Campaigns details

  Scenario: User should be able to filter Marketing Campaigns by Alt Campaign
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Marketing Campaigns
    And Filter Marketing Campaigns by Alt Campaign
    Then Validate Marketing Campaigns details

  Scenario: User should not be able to add Marketing Campaigns
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Marketing Campaigns
    And Click on Add button
    And Add New Marketing Campaign
    Then Validate Campaign Successfully Created Text

  Scenario: User should not be able to add Marketing Campaigns with empty Marketing Campaign Name
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Marketing Campaigns
    And Click on Add button
    And Click on Add Button in popup
    Then Validate Required Text in Add New Marketing Campaign popup

  # Scenario: User should be able to upload data in Marketing Campaigns
  #   Given User selects the clients
  #   When Click Marketing Studio
  #   And Click Campaign Configurator
  #   And Click Marketing Campaigns
  #   And Click on Data Upload Button
  #   And Choose File To Upload data in Marketing Campaigns
  #   Then Validate File Uploaded
