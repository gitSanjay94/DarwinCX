@regression
Feature: Did Receive Product Feature
    Valdidate Did Receive Product Feature

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English

  Scenario: User should be able to select product offer with payment charge greater than Zero
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click Purchase Subscription
    When Select the Offer
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details
    Then Refresh the Landing page
    When Click on Did Not Receive Product
    And Select product offer with payment charge greater than Zero
    And Select Product Quantity '10' under summary section
    Then Validate Amount under summary section
    When Select Reason for not receiving product
    And Click Enter New Credit Card in Payment Info Section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on send button after payment
    Then Validate Transaction Confirmation popup
    When Click OK on Transaction Confirmation popup
    And Validate Comments Section After Product Not Received
    And Refresh the Landing page
    And Validate Purchase History Section After Product Not Received

  Scenario: User should be able to select product offer with payment equal to '0'
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click on Did Not Receive Product
    And Select product offer with payment charge equal to Zero
    And Select Product Quantity '10' under summary section
    And Select Reason for not receiving product
    And Click on send button after payment
    Then Validate Transaction Confirmation popup
    When Click OK on Transaction Confirmation popup
    And Validate Comments Section After Product Not Received
    And Refresh the Landing page
    And Refresh the Landing page
    And Validate Purchase History Section After Product Not Received

  Scenario: User should be able to validate Select an Offer button and Select Product button when no product offer is selected
    Given User selects the client
    When User enter the search criteria "Isssabella Ceetel"
    And Click on search button
    # Then Use the existing customer or create a new customer "Isssabella Ceetel" based on the returned search result
    # The following lines has been commented as they are failing due to application issue of adding Customer, 
    # so search customer approach has been used for successful execution 
    # When Enter all the fields on the Add Customer form
    # Then Validate customer details should get added successfully
    When Click on Did Not Receive Product
    Then Validate Please Select an Offer button when product offer is not selected in Product Not Fulfilled popup
    And Validate Please Select Product button when product offer is not selected in Product Not Fulfilled popup

  Scenario: Validate warning message for customer other than CANADA after selecting product offer
    Given User selects the client
    When User enter the search criteria "Bowwwan Btttkinson"
    And Click on search button
    # Then Use the existing customer or create a new customer "Bowwwan Btttkinson" based on the returned search result
    # The following lines has been commented as they are failing due to application issue of adding Customer, 
    # so search customer approach has been used for successful execution
    # And Enter all the fields on the Add Customer form with country  "Australia"
    # Then Validate customer details should get added successfully
    When Click on Did Not Receive Product
    And Select product offer with payment charge greater than Zero
    Then Validate warning message for customer other than CANADA
