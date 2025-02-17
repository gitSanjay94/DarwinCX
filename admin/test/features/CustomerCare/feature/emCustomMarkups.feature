@smoke 
Feature: Email Manager CUSTOM MARKUPS
    Validate Email Manager CUSTOM MARKUPS feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

# BUG# ID1-I3268 : Marketing Studio - Email Manager - CUSTOM MARKUPS : 
# Confirmation message is not being displayed  after editing and saving CUSTOM MARKUPS
  Scenario: User should be able to update CUSTOM MARKUPS
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on Edit button in Email Manager page
    And Click on CUSTOM MARKUPS
    And Click on Edit button in CUSTOM MARKUPS page
    And Edit CUSTOM MARKUPS
    And Click on Save button in CUSTOM MARKUPS page
    # Then Validate CUSTOMER MARKUPS Successfully Updated Text

  Scenario: Verify cancel functionality in CUSTOM MARKUPS page
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on Edit button in Email Manager page
    And Click on CUSTOM MARKUPS
    And Click on Edit button in CUSTOM MARKUPS page
    And Click on Cancel button in CUSTOM MARKUPS page
    Then Validate Edit button is visible in CUSTOM MARKUPS page
