
@smoke 
Feature: Product Bundles
    Validate Product Bundles feature 


  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to filter product bundle by bundle ID
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click Product Bundle
    And Filter Product Bundle by bundle ID
    Then Validate bundle ID and bundle Name

  Scenario: User should be able to filter product bundle by bundle Name
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click Product Bundle
    And Filter product bundle by bundle Name

  Scenario: User should be able to filter product bundle by Delivery Restriction
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click Product Bundle
    And Filter product bundle by Delivery Restriction

  Scenario: User should be able to filter product bundle by Autorenew Bundle Attached
    Given User selects for clients
    When Click Marketing Studios
    And Click Campaign Configurators
    And Click Product Bundle
    And Filter product bundle by Autorenew Bundle Attached

  # Scenario: User should be able to update existing bundle through csv file
  #   Given User selects for clients
  #   When Click Marketing Studios
  #   And Click Campaign Configurators
  #   And Click Product Bundle
  #   And Click on Data Upload link Button
  #   And Choose File To be Upload
  #   Then Validate File Uploaded or not

  Scenario: User should be able to add product bundle
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Product Bundle
    And Click on Add button of product bundle
    And Click on Add button without filling any data
    And Validated Required Text in Add New Bundle
    And Add product bundle with required data
    Then Validated text for successfully added product bundle

  Scenario: User should be able to Edit product bundle
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Product Bundle
    And Filter Product Bundle by bundle ID
    And Click on Product Bundle Edit link
    Then Update the Product bundle
    And Verify the Updated Message

  Scenario: User should be able to clone product bundles
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    And Click Product Bundle
    And Filter Product Bundle by bundle ID
    And Click on Product Bundle Clone Buttons
    Then Validate the Product Bundle Cloned Creation Message
    And Click Product Bundle
