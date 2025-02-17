@smoke
Feature: Coupons
 Validate Coupons feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to verify Coupon Settings
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    When Click Coupons
    Then Validate "Coupon Settings" text
    And Validate "Manage your Coupon Settings" text
 
  Scenario: User should be able to Create New Coupons Selector Type as Dollar
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    When Click Coupons
    When Click on "Create Coupon" button
    Then Validate "Details" text
    Then Validate "General Information" text
    Then Validate "Required" text in Create Coupon Details section
    When Fill Details with Selector Type as Dollar
    When Click on Save button in Create Coupon Details section
    Then Validate "Restrictions" text
    When Fill Restrictions with 'MC-1000' after filling details
    When Click on Save button in Create Coupon Details section
    When Check and click Create Coupon button if enabled
    Then Validate "Coupon created successfully!" text
 
  Scenario: Verify the Coupon filters functionality
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    When Click Coupons
    Then Click on "Add Filter" LInk
    Then Verify Filter options for Coupon

  Scenario: User should be able to Create New Coupons Selector Type as Percentage
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    When Click Coupons
    When Click on "Create Coupon" button
    Then Validate "Details" text
    Then Validate "General Information" text
    Then Validate "Required" text in Create Coupon Details section
    When Fill Details with Selector Type as Percentage
    When Click on Save button in Create Coupon Details section
    Then Validate "Restrictions" text
    When Fill Restrictions with 'MC-1000' after filling details
    When Click on Save button in Create Coupon Details section
    When Check and click Create Coupon button if enabled
    Then Validate "Coupon created successfully!" text

  Scenario: User should be able to Validate incorrect Resctriction format message
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    When Click Coupons
    When Click on "Create Coupon" button
    Then Validate "Details" text
    Then Validate "General Information" text
    Then Validate "Required" text in Create Coupon Details section
    When Fill Details with Selector Type as Percentage
    When Click on Save button in Create Coupon Details section
    Then Validate "Restrictions" text
    When Fill Restrictions with '#$$%$' after filling details
    Then Validate incorrect Resctriction format message

  Scenario: User should be able to validate  headers of Coupon table
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    When Click Coupons
    Then Validate the table headers of coupon section

  Scenario: User should be able to Verify Pagination in Coupon table
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    When Click Coupons
    Then Validate the Previous button is disabled in Coupon table
    Then Validate the Next button state and click if enabled
    Then Validate and click Previous button if enabled in Coupon table

  Scenario: User should be able to Edit Coupon
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    When Click Coupons
    When Click on Edit first record in coupon table
    Then Validate "Edit Coupon" text
    Then Validate "Details" text
    When Edit description under Details section
    When Click on Save button in Create Coupon Details section
    When Click on Update Coupon button
    Then Validate "Coupon updated successfully!" text

  Scenario: User should be able to Verify back to coupons functionality in Edit Coupon
    Given User selects the clients
    When Click Marketing Studio
    And Click Campaign Configurator
    When Click Coupons
    When Click on Edit first record in coupon table
    Then Validate "Edit Coupon" text
    When Click on "back to coupons" link
    Then Validate "Exit Create Coupon" text
    Then Validate "Are you sure you want to exit" text
    When Click on Close button in Exit Create Coupon pop up
    When Click on "back to coupons" link
    Then Validate "Exit Create Coupon" text
    Then Validate "Are you sure you want to exit" text
    When Click on No button in Exit Create Coupon pop up
    When Click on "back to coupons" link
    Then Validate "Exit Create Coupon" text
    Then Validate "Are you sure you want to exit" text
    When Click on Yes button in Exit Create Coupon pop up
    Then Validate "Coupon Settings" text
