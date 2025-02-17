@smoke 
Feature: Renewal Categories
Validate Renewal Categories feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to add Renewal Categories
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click on Renewal Categories
    And Click on Add button to Create Renewal Category
    Then Fill the Renewal Category Name
    Then Fill the Renewal Category Code
    And Click on the Brand DropDown
    Then Select Brands
    Then Select Country Renewal Journey DropDown
    And Select Purchase Type
    Then Click on Add button to Create Renewal Categories
    And Verify the Success Message for Renewal Category

  Scenario: User should be able to Edit Renewal Categories
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click on Renewal Categories
    Then Click on Edit Icon & Update Existing Records

  # Scenario: User should be able to update Renewal Categories existing records with .csv file
  #   Given User selects the clients
  #   When Click Marketing Studio
  #   And Click Campaign Configurator
  #   And Click on Renewal Categories
  #   And Click on Data upload button of Renewal Category
  #   And Select Upload Existing Renewal Category link from drop down
  #   And Upload Renewal Category file with exisitng records
  #   And Validated the updated Renewal Category list

  Scenario: User should be able to Clone Renewal Category
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click on Renewal Categories
    And Click on Renewal Catgegory Clone Buttons
    Then Validate the Renewal Category Cloned Creation Message
