@regression 
Feature: Add and Update Customer Feature
    Valdidate Add and Update Customer functionality

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English

  Scenario: Add Customer with all the required and optional field values present
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    Then Refresh the Landing page
    Then Validate Comments section

  Scenario: Add Customer when missed entering all the required field values
    Given Click Add Customer button to create the customer
    Then Validate  showing warn as *Required against all the  missing required fields

  Scenario: Update Company Name of the customer information
    Given Click Add Customer button to create the customer
    And Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click Customer Info Update  button to update the customer info
    Then Validate customer details should get updated successfully

  Scenario: Add Customer and Partner with all the required and optional field values present
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    # Then Validate Partner details should get added successfully    

  Scenario: Update Partner email with invalid input and verify error msg
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click Partner Info Update  button to update the partner mailId with 'invalidMail'
    Then Validate  showing warn as *Invalid email address

  Scenario: Update Partner First Name and Validate the same
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Update First Name in Partner Info with 'partnerTest'
    Then Refresh the Landing page
    Then Validate Partner First Name with 'partnerTest'

  Scenario: Add Customer and Partner with all the fields and Remove Partner Info
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    Then Validate Removed Partner Info text under comments after clicking on Remove Partner Info Button

  Scenario: Create Customer and Delete Customer
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click on Delete button under Customer Info section
    Then Refresh the Landing page
    When Click on Comments section in landing page
    Then Validate Comments section after Deletion
    When Select Actions tab in landing page
    And Validate Action Details after Deletion
    When Click on Activate button under Customer Info section
    # Then Refresh the Landing page
    When Click on Comments section in landing page
    Then Validate comments section after Activation
    When Select Actions tab in landing page
    Then Validate Action Details after Activation

    # execution successful on individual level but 
    # failing in jenkins due to slow performance of the application    
    # Scenario: Search Customer and Delete Customer
    # Given User selects the client 
    # When User enter the search criteria "demo delete"
    # And Click on search button
    # Then Use the existing customer or create a new customer "demo delete" based on the returned search result
    # When Click on Delete button under Customer Info section
    # When Click on Comments section in landing page
    # Then Validate Comments section after search and delete
    # When Select Actions tab in landing page
    # And Validate Action Details after Deletion
    # Then Validate status as Deleted in search results
    # When Click on Activate button under Customer Info section
    # When Click on Comments section in landing page
    # Then Validate Comments section after search and activate
    # When Select Actions tab in landing page
    # Then Validate Action Details after Activation

  Scenario: Mark customer as Deceased and Remove from Deceased with invalid inputs
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click on Mark Deceased button under Customer Info section
    When Select Actions tab in landing page
    Then Validate Action Details after Deceased
    When Click on Remove Deceased Flag button
    And Fill 'test firstName', 'test lastName' and 'test reason' in Deceased popup
    Then Validate Wrong First Name Warning message
    And Validate Wrong Last Name Warning message

  Scenario: Mark customer as Deceased and Remove from Deceased with valid inputs
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click on Mark Deceased button under Customer Info section
    When Select Actions tab in landing page
    Then Validate Action Details after Deceased
    When Click on Remove Deceased Flag button
    And Fill Customer details in Deceased popup
    When Select Actions tab in landing page
    Then Validate Action Details after Remove Deceased

  Scenario: Create customer and suspend delivery
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Click on suspend delivery in landing page
    Then Validate account On delivery suspension text in landing page
    When Select Actions tab in landing page
    And Validate action details after Suspend in landing page
    When Click on unsuspend delivery in landing page
    When Select Actions tab in landing page
    Then Validate action details after unsuspend

# BUG DEV-7423 : STG-Care App-Blue Ant Media/ZoomerMedia- 
# Go to partner account button is not displayed in Partner Info section
  Scenario: Click 'Go To Partner Account' button and validate the swapping of name and email between Customer and Partner
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    When Extract Customer email from Customer Info section
    When Update First Name in Partner Info with 'partnerTest'
    Then Refresh the Landing page
    Then Validate Partner First Name with 'partnerTest'
    When Extract Partner first name, last name and email from Partner Info section
    Then Refresh the Landing page
    And Click Go To Partner Account button in landing page
    Then Validate Customer info should contain Partner first name, last name and email
    And Validate Partner info should contain Customer first name and email
