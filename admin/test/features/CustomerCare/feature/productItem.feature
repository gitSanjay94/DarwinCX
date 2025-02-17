@smoke 
Feature: Product Items
    Validate Product Items feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to filter product item by item ID
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click Product Items
    And Filter product items by item ID
    Then Validate item ID and item Name

  Scenario: User should be able to filter product item by item name
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click Product Items
    And Filter product items by name
    # Then Validate item ID and item Name

  Scenario: User should be able to filter product item by brand name
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click Product Items
    And Filter product items by brand

  Scenario: User should be able to filter product item by price
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click Product Items
    And Filter product items by price

  Scenario: User should be able to filter product item by Quantity
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click Product Items
    And Filter product items by Quantities

  Scenario: User should be able to filter product item by Delivery type
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click Product Items
    And Filter product items by delivery type

  Scenario: User should be able to add product items
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Product Items
    And Click on Add button of product item
    And Click on Add Button In Add New item
    And Validated Required Text in Add New item
    And Add product items with required data
    And Validated text for successfully added product item

  # Scenario: User should be able to update existing records with .csv file
  #   Given User selects the clients
  #   When Click Marketing Studio
  #   And Click Campaign Configurator
  #   And Click Product Items
  #   And Click on Data upload button of product item
  #   And Select Upload Existing Product Items Records from drop down
  #   And Upload Product Items file with exisitng records
  #   And Validated the updated product item list

  Scenario: Verify the pagination
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Product Items
    Then Click on Next button of page
    Then Click on Previos button of page

  Scenario: User should be able to clone product Items
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Product Items
    And Filter product items by item ID
    And Click on Product Item Clone Buttons
    Then Validate the Product Item Cloned Creation Message
