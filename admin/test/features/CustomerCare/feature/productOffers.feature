@smoke 
Feature: Product Offers
    Validate Product Offers feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to filter product offers by offer ID
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Product Offers
    And Filter product offers by offer ID
    Then Validate Offer ID and Offer Name

  Scenario: User should be able to filter product offers by offer Name
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Product Offers
    And Filter product offers by offer Name
    Then Validate Offer ID and Offer Name

  Scenario: User should not be able to add product offers with empty Product Offer Name
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Product Offers
    And Click on Add button
    And Click on Add Button in popup
    Then Validate Required Text in Add New Offer popup

  # Scenario: User should be able to upload data
  #   Given User selects the clients
  #   When Click Marketing Studio
  #   And Click Campaign Configurator
  #   And Click Product Offers
  #   And Click on Data Upload Button
  #   And Choose File To Upload
  #   Then Validate File Uploaded

  Scenario: User should be able to edit product offers
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Product Offers
    And Edit Product Offer
    Then Validate Offer Successfully Updated Text
