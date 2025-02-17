@regression 
Feature: Give Free Extension Feature
    Valdidate Give Free Extension Feature

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English

  Scenario: User should be able to give free Custom Extension selecting all mandatory fields on the custom selection popup
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click  on give free extension option
    When User selects all mandatory fields in Complimentary Extension popup
    Then Validate the transacation details under the Action Tab

  Scenario: User should able to extend Active Subscriptions after clicking on give free extension
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click Purchase Subscription
    When Select the Offer
    Then Validate Summary section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details
    And Refresh the Landing page
    # And Refresh the Landing page
    When Click  on give free extension option
    And User extend Active Subscriptions in Complimentary Extension popup
    Then Validate the transacation details under the Action Tab
    And Refresh the Landing page
    And Validate the transacation details under the Purchase History Section

  Scenario: User should able to extend Previous Subscriptions after clicking on give free extension
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    And Click Purchase Subscription
    And Select the Offer
    And Validate Summary section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details
    And Refresh the Landing page
    # And Refresh the Landing page
    When Click on Cancel Subscription
    And Select the cancellation reason and mode of refund
    Then Confirm Cancellation by clicking on Exit button in Subscription Cancelled popup
    And Refresh the Landing page
    # And Refresh the Landing page
    When Click  on give free extension option
    And User extend Previous Subscriptions in Complimentary Extension popup
    Then Validate the transacation details under the Action Tab
    And Refresh the Landing page
    And Validate the transacation details under the Purchase History Section

  Scenario: User should not be able to give free Custom Extension without selecting any mandatory field on the custom selection poppup
    Given User selects the client
    When User enter the search criteria "Seraphina Guppta"
    And Click on search button
    # Then Use the existing customer or create a new customer "Seraphina Guppta" based on the returned search result
    # The following lines has been commented as they are failing due to application issue of adding Customer, 
    # so search customer approach has been used for successful execution
    # When Click Add Customer button to create the customer
    # When Enter all the fields on the Add Customer form
    # Then Validate customer details should get added successfully
    When Click  on give free extension option
    When User give free extension without selecting any mandatory field
    Then Validate Warning message should display "Virtual item not found."
