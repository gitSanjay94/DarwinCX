@regression 
Feature: Contact Prefernces
    Validate Contact Prefernces         

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English

  Scenario: User should be able to update the Contact Preferences
    # Given User selects the client 
    # When User enter the search criteria "Seema Rathod"
    # And Click on search button
    # Then Use the existing customer or create a new customer "Seema Rathod" based on the returned search result
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    Then Click expand button to expand the Contact Preferences
    And Click Update button to update the Contact Preferences
    And Set the "zoomer_3rd_party_mail" to "first" option
    And Select the "CARP_3rd_party_mail"
    And Click  UpdateInfo Button
    Then Validate  the message "2 Active" under the Contact prefernces
    When Select Actions tab in landing page
    Then Validate the Contact Prefernces information under Action tab

  Scenario: User should be able to update the eNewsletters Preferences
    # Given User selects the client 
    # When User enter the search criteria "zeema"
    # And Click on search button
    # Then Use the existing customer or create a new customer "zeema" based on the returned search result
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form with country  "Canada"
    Then Validate customer details should get added successfully
    Then Click expand button to expand the eNewsletters Preferences
    And Click Update button to update the eNewsletters Preferences
    And Select the "Ideacity"
    And Select the "zoomer_book_club"
    And Click  UpdateInfo Button
    Then Validate  the message "2 Active" under the eNewsletters prefernces
    When Select Actions tab in landing page
    Then Validate the eNewsletters information under Action tab

  Scenario: Membership Tier Preferences should be set Lifetime for an existing customer where user has enrolled for LifeTime Subscription
    Given User selects the client "B.A.S.S., LLC"
    When User enter the search criteria "qfn"
    And Click on search button
    # Then Use the existing customer or create a new customer "qfn" based on the returned search result
    Then Click expand button to expand the Membership Tier Preferences
    Then Validate "LifeTime" radiobutton should be selected under the Membership Tier prefernces
    Then Validate  the message "1 Active" under the Membership Tier prefernces
    Then Validate Purchase History section for Lifetime Membership

    # Commenting the following scenario since it depends on create customer which is currenlty the application bug and unable to create the customer
    # however the below scenario is also covered in the above mentioned  scenario, where instead of creating we are searching the customer
    # Scenario: Membership Tier Preferences should be set to Lifetime for a newly created user when enrolled for the LifeTime Subscription
    # Given User selects the early access option 
    # When Click Add Customer button to create the customer for client "B.A.S.S., LLC"    
    # When Enter all the fields on the Add Customer form with country  "United States"
    # Then Validate customer details should get added successfully
    # And Click Purchase Subscription
    # And Search Marketing Code "I20AT32M"
    # When Selected PaidToPublisher as payment option
    # And Select the LifeTime MemberShip Offer
    # And Validate Payment Details in Summary section  
    # And Click Submit button  
    # Then Validate user should be able to purchase the subscription with valid payment details
    # And Refresh the Landing page
    # Then Click expand button to expand the Membership Tier Preferences
    # Then Validate "LifeTime" radiobutton should be selected under the Membership Tier prefernces
    # Then Validate Purchase History section for Lifetime Membership

    # Scenario: User should be able to update the Membership Tier Preferences to LifeTime
    # Given User selects the client "B.A.S.S., LLC"
    # When User enter the search criteria "fname"
    # And Click on search button
    # Then Use the existing customer or create a new customer "fname" based on the returned search result
    # Then Click expand button to expand the Membership Tier Preferences
    # And Click Update button to update the Membership Tier Preferences
    # And Select the "Lifetime"  Radio Button
    # And Click  UpdateInfo Button
    # Then Validate  the message "1 Active" under the Membership Tier prefernces
    # When Select Actions tab in landing page
    # Then Validate the Membership Tier information under Action tab
    # Scenario: User should be able to update the Membership Tier Preferences to NA
    # Given User selects the client "B.A.S.S., LLC"
    # When User enter the search criteria "fname"
    # And Click on search button
    # Then Use the existing customer or create a new customer "fname" based on the returned search result
    # Then Click expand button to expand the Membership Tier Preferences
    # And Click Update button to update the Membership Tier Preferences
    # And Select the "N/A"  Radio Button
    # And Click  UpdateInfo Button
    # Then Validate  the message "1 Active" under the Membership Tier prefernces
    # When Select Actions tab in landing page
    # Then Validate the Membership Tier information under Action tab
