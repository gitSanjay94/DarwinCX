@regression 
Feature: Purchase Renew Gift
    Validate Purchase Renew Gift feature      

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English

  Scenario: User should be able to Purchase and Renew Gift with valid Credit Card
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click PurchaseRenew Gift
    Then Validate  "Please select an offer before adding recipient(s)" warn message
    And Select the Offer
    Then Validate warn message "Please add a recipient."
    And Click Add Recipient button to search the existing customer or add new customer
    And Click Create Recipient to create the customer
    Then Validate Recipient Info
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click Renew button
    Then Validate user should be able to purchase the subscription with valid payment details
    Then Refresh the Landing page
    Then Validate Gifts Sent section
    Then Refresh the Landing page
    Then Validate Gifts Received section

  Scenario: User should be able to Purchase and Renew Gift with PaidToPublisher option
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click PurchaseRenew Gift
    And Select the Offer
    And Click Add Recipient button to search the existing customer or add new customer
    And Click Create Recipient to create the customer
    Then Validate Recipient Info
    When Selected PaidToPublisher as payment option
    And Click Renew button
    Then Validate user should be able to purchase the subscription with valid payment details

  Scenario: User should be able to Purchase and Renew Gift with Cheque option
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click PurchaseRenew Gift
    And Select the Offer
    And Click Add Recipient button to search the existing customer or add new customer
    And Click Create Recipient to create the customer
    Then Validate Recipient Info
    When Selected Cheque as payment option and fill the cheque amount
    And Click Renew button
    Then Validate user should be able to purchase the subscription with valid payment details

  Scenario: User should be able to search 1 existing customer and add 1 new customer and Validate the Tax summary on PurchaseRenew Gift Page
    Given User selects the client
    When User enter the search criteria "CanadaSub"
    And Click on search button
    # Then Use the existing customer or create a new customer "CanadaSub" based on the returned search result
    When Click PurchaseRenew Gift
    And Selected PaidToPublisher as payment option
    And Select the Offer
    And Click Add Recipient button to search the existing customer or add new customer
    And Click search to search the Recipient 'Cc Ss'
    And Click Create Recipient and create 1 Recipients for "Canada"
    Then Validate Tax Calculation under the Summary section
    And Validate Total Amount Calculation under the Summary section
    # This scenario expected to fail as the fix of tax not being calculated(found in Production) is still Pending

  @ussub 
  Scenario: Membership Tier Preferences should be set to Lifetime for a newly created user when enrolled for the LifeTime Subscription
    Given User selects the early access option
    When User selects the client "B.A.S.S., LLC"
    And User enter the search criteria "fname"
    And Click on search button
    # Then Use the existing customer or create a new customer "fname" based on the returned search result
    When Click PurchaseRenew Gift
    And Search Marketing Code "I20AT32M"
    When Selected PaidToPublisher as payment option
    And Select the LifeTime MemberShip Offer
    And Validate Payment Details in Summary section
    And Click Add Recipient button to search the existing customer or add new customer
    And Click search to search the Recipient 'qfn'  and select having address "64 Jefferson6"
    And Click Create Recipient and create 1 Recipients for "United States"
    Then Validate Tax Calculation under the Summary section for BASS LLC
    And Validate Total Amount Calculation under the Summary section

# ID1-I2981 : Client App: Client App: Once user suppress the Label ,
# and then try to apply using Appy to All for the given Label, 
# the given label is not being shown is applied against the listed recipients under the Label Message Tab,
# although API response is reflected correctly
  Scenario: Validate Label message functionality present in Purchase Renew Gift popup
    Given User selects the client
    # When User enter the search criteria "CanadaSub"
    When User enter the search criteria "Stanlee"
    And Click on search button
    # Then Use the existing customer or create a new customer "CanadaSub" based on the returned search result
    # Then Use the existing customer or create a new customer "Stanlee" based on the returned search result
    When Click PurchaseRenew Gift
    And Selected PaidToPublisher as payment option
    And Select the Offer
    And Click Add Recipient button to search the existing customer or add new customer
    And Click search to search the Recipient 'Cc Ss'
    And Click Create Recipient and create 1 Recipients for "Canada"
    Then Validate 'maximum 60 characters' message in Purchase Renew Gift popup
    When Fill Label message with 'Purchase/Renew Gift' text
    And Click Renew button
    And Click OK on Transaction Confirmation popup
    And Click on Label Messages section in landing page
    Then Validate Label Message in landing page
    When Fill Apply To All message with 'Apply to all message' text
    Then Validate Apply To All message
    # When Click on Suppress button
    # Then Validate label message after Suppress
