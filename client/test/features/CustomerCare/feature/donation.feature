@regression 
Feature: Donation Feature
    Valdidate Donation Feature

  Background:
    Given User opens customare care app
    When Login to customare care app with valid credentials
    And Verify user should logged in successfully
    When the user selects the English language
    Then the page language should be English
    Given Click Add Customer button to create the customer
    When Enter all the fields on the Add Customer form
    Then Validate customer details should get added successfully

# BUG DEV-7114 Staging - Client App - Unable to Select Donation Amount
# Options to select Donation Amount are not available.
    # Scenario: User should be able to Donate Amount after selecting into donation popup
    # When Click on Donation
    # And Search Marketing Code "ZTW17MDTQ"
    # And Select Donation Amount as '100'
    # And Extract donation amount and total amount from donation popup
    # Then Validate Donation Amount after selecting '100'
    # When Select Recognition As Donator
    # And Click Enter New Credit Card in Payment Info Section
    # When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    # And Click Submit button in donation popup
    # Then Validate Transaction Confirmation popup
    # When Click OK on Transaction Confirmation popup
    # And Refresh the Landing page
    # And Refresh the Landing page
    # And Validate Purchase History All Section After donation
    # And Validate Purchase History Donation Section After donation

# BUG DEV-7114 Staging - Client App - Unable to Select Donation Amount
# After entering Donation Amount, it is not displaying under Summary section.
  Scenario: User should be able to Donate Amount after entering number value into other amount field
    When Click on Donation
    And Search Marketing Code "ZTW17MDTQ"
    # This functionality is now not available
    # And Select Auto Renewal Bundles
    And Enter Donation Amount as '450' in the Other Amount field
    And Extract donation amount and total amount from donation popup
    # Then Validate Total amount should be the same as entered in the Other Amount field as '450'
    And Select Recognition As Anonymous
    And Click Enter New Credit Card in Payment Info Section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click Submit button in donation popup
    Then Validate Transaction Confirmation popup
    When Click OK on Transaction Confirmation popup
    # And Refresh the Landing page
    # And Refresh the Landing page
    # And Refresh the Landing page
    # And Validate Purchase History All Section After donation
    # And Validate Purchase History Donation Section After donation

# To do: Invalid senario, enter alpha numeric value into other amount field; dependency on Bug ID1-I2807
# Scenario: User Donate Amount after entering alpha numeric value into other amount field 
#     When Click on Donation
#     And Search Marketing Code in Donation popup
#     And Enter donation amount as 'amount123' in the Other Amount field 
#     When Select Recognition As Donator
#     And Click Enter New Credit Card in Payment Info Section
#     When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
#     And Click Submit button in donation popup
#     Then Validate Transaction Confirmation popup after entering invalid donation amount
