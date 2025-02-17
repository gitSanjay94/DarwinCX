@regression 
Feature: Purchase Subscription
    Validate Purchase Subscription feature 

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English

  @smoke
  Scenario: User should be able to Purchase Subscription with valid Payment information
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click Purchase Subscription
    When Select the Offer
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details
    Then Refresh the Landing page
    Then Validate Susbcription section
    Then Validate Comments section
    Then Validate Purchase Summary section
    When Click Purchase Subscription
    And Select the Offer
    # And Select the Auto Renewal Bundles option to enable bundling
    # And Select the bundle offer
    Then Validate Summary section
    # And Validate Renewal Bundles details in the Summary section
    And Use the Saved Credit Card option to make payment
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details

  @smoke
  Scenario Outline: User should not be able to Purchase Subscription with missing Payment information
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click Purchase Subscription
    Then Validate a warning message should be shown to the user on missing one of the given payment details "<creditcardnumber>" and "<creditcardexpirydate>" and "<creditcardcvc>"

    Examples:
      | creditcardnumber    | creditcardexpirydate | creditcardcvc |
      | 4242 4242 4242 4242 |                 1025 |           123 |

  Scenario: User should be able to Purchase Subscription on selecting PaidToPublisher payment option
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click Purchase Subscription
    When Select the Offer
    Then Validate Summary section
    When Selected PaidToPublisher as payment option
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details

  Scenario: User should be able to Purchase Subscription on selecting Cheque payment option
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    And Click Purchase Subscription
    And Select the Offer
    Then Validate Summary section
    When Selected Cheque as payment option and fill the cheque amount
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details

  Scenario: User should not be able to Purchase Subscription without selecting the Product Offer
    Given User selects the client
    When User enter the search criteria "Xxavier Ngguyen"
    And Click on search button
    # Then Use the existing customer or create a new customer "Xxavier Ngguyen" based on the returned search result
    # The following lines has been commented as they are failing due to application issue of adding Customer, 
    # so search customer approach has been used for successful execution
    # When Click Add Customer button to create the customer
    # When Enter all the fields on the Add Customer form
    # Then Validate customer details should get added successfully
    And Click Purchase Subscription
    Then Validate on not selecting Product Offer shows error message "Please select a product."

  Scenario: User should not be able to Purchase Subscription without selecting the Product Offer and Payment option
    Given User selects the client
    When User enter the search criteria "Xxavier Ngguyen"
    And Click on search button
    # Then Use the existing customer or create a new customer "Xxavier Ngguyen" based on the returned search result
    # The following lines has been commented as they are failing due to application issue of adding Customer, 
    # so search customer approach has been used for successful execution
    # When Click Add Customer button to create the customer
    # When Enter all the fields on the Add Customer form
    # Then Validate customer details should get added successfully
    And Click Purchase Subscription
    Then Validate on not selecting Product and Payment Option shows error message "Please select a product and enter payment information."

  Scenario: User should be able to Purchase Subscription with country other than 'Canada'
    Given User selects the client
    When User enter the search criteria "Serrrena QAquist"
    And Click on search button
    # Then Use the existing customer or create a new customer "Serrrena QAquist" based on the returned search result
    # The following lines has been commented as they are failing due to application issue of adding Customer, 
    # so search customer approach has been used for successful execution
    # Given Click Add Customer button to create the customer
    # And Enter all the fields on the Add Customer form with country  "Australia"
    # Then Validate customer details should get added successfully
    When Click Purchase Subscription
    Then Validate Product is unavailable in selected country message
    When Select the International Offer
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details
    Then Refresh the Landing page
    Then Validate Comments section Purchase Subscription with country other than "Canada"
    Then Validate Purchase History section for international product

  Scenario: User should be able to Select New Payment Method under Transaction Details when PaidToPublisher payment option is selected
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click Purchase Subscription
    When Select the Offer
    Then Validate Summary section
    When Selected PaidToPublisher as payment option
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details
    Then Refresh the Landing page
    When Click on TransactionID in purchase history section
    And Click on Show Change Payment Method Options
    Then Validate 'paid to publisher' as Payment Method
    And Click on Select Payment Method Button
    And Select ' Void Original Payment (DO)' as Payment Method From DD
    And Click on Change Payment Method
    And Click OK on Transaction Confirmation popup
    When Click on TransactionID in purchase history section
    And Click on Show Change Payment Method Options
    Then Validate 'void original payment' as Payment Method

  Scenario: User should not be able to Select New Payment Method under Transaction Details when Cheque payment option is selected
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    And Click Purchase Subscription
    And Select the Offer
    Then Validate Summary section
    When Selected Cheque as payment option and fill the cheque amount
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details
    Then Refresh the Landing page
    When Click on TransactionID in purchase history section
    And Click on Show Change Payment Method Options
    Then Validate 'cheque' as Payment Method
    And Click on Select Payment Method Button
    And Select ' Paid to Publisher' as Payment Method From DD
    And Click on Change Payment Method
    Then Check Change Payment Button to be disabled

  Scenario: User should be able to Select Refund Method for cancellation under Transaction Details when PaidToPublisher payment option is selected
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully
    When Click Purchase Subscription
    When Select the Offer
    Then Validate Summary section
    When Selected PaidToPublisher as payment option
    And Click Submit button
    Then Validate user should be able to purchase the subscription with valid payment details
    Then Refresh the Landing page
    Then Refresh the Landing page
    When Click on TransactionID in purchase history section
    And Click on Show Cancellation Options
    Then Validate 'paid to publisher' as Payment Method
    When Click Select Refund Method Button
    And Select 'Paid to Publisher' as Refund Method From DD
    And Select Reason and click on Cancel Transaction
    And Click OK on Transaction Confirmation popup
    Then Refresh the Landing page
    Then Validate status as Expired under the Purchase History Section
    Then Validate Comments section after Cancellation
    When Select Actions tab in landing page
    Then Validate Action Details after Cancellation
