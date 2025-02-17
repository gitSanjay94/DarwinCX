@smoke
Feature: Test Courage CA Order Prepopulated API
         Validate Courage CA Order Prepopulated API

Scenario: Validate Courage CA Order Prepopulated API text fields
    Given User opens URL Courage_CAOrderPrepopulatedAPI
    Then Validate "Courage Magazine Subscription Options" text in Courage_CAOrderPrepopulatedAPIPage
    And Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    And Verify the company text field has no value
    And Verify the job title text field has no value
    And Verify the First Name Value at URL Courage_CAOrderPrepopulatedAPIPage 
    And Verify the Last Name Value at URL Courage_CAOrderPrepopulatedAPIPage 
    And Verify the Address 1 Value at URL Courage_CAOrderPrepopulatedAPIPage 
    And Verify the City Value at URL Courage_CAOrderPrepopulatedAPIPage 
    And Verify the Postal Code Value at URL Courage_CAOrderPrepopulatedAPIPage 
    And Verify the Email Value at URL Courage_CAOrderPrepopulatedAPIPage
    And Verify the Country Value at URL Courage_CAOrderPrepopulatedAPIPage
    And Verify the Province Value at URL Courage_CAOrderPrepopulatedAPIPage


  Scenario: Validate Courage CA Order Prepopulated API
    Given User opens URL Courage_CAOrderPrepopulatedAPI
    Then Validate "Courage Magazine Subscription Options" text in Courage_CAOrderPrepopulatedAPIPage
    And Select the Canada Country Available Subscription Option
    And Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Mailing and Billing Address form for Courage_CAOrderPrepopulatedAPIPage
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
