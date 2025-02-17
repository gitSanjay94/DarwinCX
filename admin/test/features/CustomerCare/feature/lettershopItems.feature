@smoke 
Feature: Lettershop Items
    Validate Lettershop Items feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

#    BUG# ID1-I3205 : Marketing Studio-Lettershop Items : Confirmation message is not being populated 
#    after Adding new Lettershop Item
#    BUG# DEV-7252, DEV-2880 ID1-I3238 : Marketing Studio-Lettershop Items :  Dropdown values are not listed 
#    under Component Type dropdown       FAILING DUE TO THIS BUG
  Scenario: User should be able to add new Lettershop Items
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Lettershop Items
    And Click on Add button
    And Add New Lettershop Items
    Then Validate Lettershop Item Successfully Created Text

  Scenario: User should be able to edit Lettershop Items
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Lettershop Items
    And Edit Lettershop Item
    Then Validate Lettershop Item Successfully Updated Text

  Scenario: User should not be able to add Lettershop Items with empty Name
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Lettershop Items
    And Click on Add button
    And Click on Add Button in popup
    Then Validate Required Text in popup

# BUG# ID1-I3205 : Marketing Studio-Lettershop Items : Confirmation message is not being populated 
# after Adding/Cloning Lettershop Item updated the issue with cloning scenario
  Scenario: User should not be able to clone Lettershop Items
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Lettershop Items
    And Click on clone button for first ID
    # Then Validate item Successfully Created Text
