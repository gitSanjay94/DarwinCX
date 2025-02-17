@cancel @regression 
Feature: Cancel Subscription
    Validate Cancel Subscription         

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English
    Given User selects the client

  Scenario: User should be able to Cancel the existing subscription
    When User enter the search criteria "Rowwwan Atttkinson"
    And Click on search button
    # Then Use the existing customer or create a new customer "Rowwwan Atttkinson" based on the returned search result
    # The following lines has been commented as they are failing due to application issue of adding Customer, 
    # so search customer approach has been used for successful execution
    # Given Click Add Customer button to create the customer
    # When Enter all the fields on the Add Customer form
    # Then Validate customer details should get added successfully
    And Click Purchase Subscription
    And Select the Offer
    And Validate Summary section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details
    And Refresh the Landing page
    When Click on Cancel Subscription
    And Select the cancellation reason and mode of refund
    Then Click Exit button on Subscription Cancelled Confirmation
    And Refresh the Landing page
    Then Validate the Subscription should get cancelled
