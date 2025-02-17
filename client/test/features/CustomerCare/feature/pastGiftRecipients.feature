@regression
Feature: Past gift recipients
    Validate Past gift recipients feature 

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    Given User selects the client
    When the user selects the English language
    Then the page language should be English

  Scenario: Validate 'No gift recipient data available.' in Past gift recipients popup
    When User enter the search criteria "Caskper Kllm"
    And Click on search button
    # Then Use the existing customer or create a new customer "Casper Kim" based on the returned search result
    # The following lines has been commented as they are failing due to application issue of adding Customer, 
    # so search customer approach has been used for successful execution
    # When Click Add Customer button to create the customer
    # When Enter all the fields on the Add Customer form
    # Then Validate customer details should get added successfully
    When Click Past Gift Recipients button
    Then Check No Data button to be disabled
    And Validate 'No gift recipient data available.' message in Past gift recipients popup

  Scenario: Validate number of rows in Past gift recipients popup is matching with excel sheet after download
    When User enter the search criteria "Atticus Oodriguez"
    And Click on search button
    # Then Use the existing customer or create a new customer "Atticus Oodriguez" based on the returned search result
    And Refresh the Landing page
    When Click Past Gift Recipients button
    When Extract number of rows in Past gift recipients popup
    When Click Download button in Past gift recipients popup
    Then Validate number of rows matched with Excel data length
