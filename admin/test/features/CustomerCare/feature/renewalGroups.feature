@smoke 
Feature: Renewal Groups
    Validate Renewal Groups feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to add Renewal Groups
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click on Renewal Groups
    And Click on Add button to Create Renewal Group
    Then Click on Brand Drop Down box
    Then Select Brand
    Then Fill the Renewal Group Name
    Then Click on Add button to Create Renewal Group
    And Verify the Success Message

  Scenario: User should be able to Edit Renewal Groups
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click on Renewal Groups
    Then Click on Edit Icon & Update Existing Record

  # Scenario: User should be able to update Renewal Groups existing records with .csv file
  #   Given User selects the clients
  #   When Click Marketing Studio
  #   And Click Campaign Configurator
  #   And Click on Renewal Groups
  #   And Click on Data upload button of Renewal Groups
  #   And Select Upload Existing Renewal Groups link from drop down
  #   And Upload Renewal Groups file with exisitng records
  #   And Validated the updated Renewal Group list

  Scenario: User should be able to Clone Renewal Groups
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click on Renewal Groups
    And Click on Renewal Group Clone Buttons
    Then Validate the RG Cloned Creation Message
