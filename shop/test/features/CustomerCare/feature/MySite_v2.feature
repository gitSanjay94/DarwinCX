@smoke
Feature: Test MySite_v2
         Validate MySite_v2

  Scenario: Validate MySite_v2
    Given User opens URL MySite_v2
    Then Validate "Account Number Or Email Address" text
    #  And Validate Sign in with your email and password text
    When Fill Accounts Number Or Email Address with '8691782915'
    When Fill Last Name Or Postal Codes with '378655'
    And Clicks on "Sign In" button
    Then Validate alert message
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    Then Clicks on "LogOut" button

  Scenario: My Site v2 Verify Subscriber Info
    Given User opens URL MySite_v2
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    Then Validate Account Details text
    And Validate AccountID to be 'Account Number869178295'
           # Then Validate "My Bake from Scratch Subscription" text
    # Then Validate "Bake from Scratch" text
    And Validate Subscription Status as 'Active'
    # And Validate Expiration Issue to be 'JUL/AUG24'
    # When Click on item "Victoria"
    # Then Validate "My Victoria Subscription" text
    # # Then Validate Status as 'Active'
    # And Validate Status as 'Status:Expired'

  Scenario: My Site v2 Verify Edit Info
    Given User opens URL MySite_v2
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    Then Click on "Edit Info" button
    Then Update Customer Info
    Then Click on "Edit Info" button
    Then Click on "Cancel" button

  Scenario: MySite_v2 Validate Contact Customer Service
    Given User opens URL MySite_v2
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    Then Click on "Contact Customer Service" link
    Then Fill the Customer Service Data
    # When Click on "Sign Up"
    # Then Validate "Sign up and create a new account" text
    # When Sign In with email 'don.derose@darwin.cx' and password 'Test1234!'
    # And Fill Retype Email text field with 'don.derose@darwin.cx'
    # And Click on "Sign Up" button
    # Then Validate "An account with the given email already exists." text

  Scenario: MySite_v2 Validate Verify Renew Now/Pay Bill Logic
    Given User opens URL MySite_v2
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    # Then Click on Renew Now button
    # Then Click on Bill Me Later Option
      # Then Fill the Customer Service Data

  Scenario: MySite_v2 Validate Verify Pay Now Logic
    Given User opens URL MySite_v2
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    # Then Click on Pay Bill button
  # Then Fill the Payment Details "4242 4242 4242 4242" and "1025" and "123"

  Scenario: My Site V2 Verify Subscription Preferences without selecting any options
    Given User opens URL MySite_v2
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    Then Validate Account Status text
    Then Validate Subscription Preferences text
    When Click on Submit button under Subscription Preferences section
    # Then Validate Subscription Record Updated text

  Scenario: My Site V2 Verify Subscription Preferences with selecting the options
    Given User opens URL MySite_v2
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    Then Validate Account Status text
    Then Validate Subscription Preferences text
    When Fill Subscription Preferences section
    When Click on Submit button under Subscription Preferences section

  Scenario: My Site V2 count and click tiles within the Subscription Tile section
    Given User opens URL MySite_v2
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    Then Validate Account Status text
    When Count tiles on the page
    Then The tile count should be 6
    Then Click all the tiles simultaneously

  Scenario: My Site V2 Verify Auto-Renew Info Your card number is incomplete message
    Given User opens URL MySite_v2
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    Then Validate Account Status text
    Then Validate Auto Renew Info text
    When Click Edit Billing Info button
    Then Validate Edit My Billing Info text
    When Click Update button under Edit My Billing Info pop up
    Then Validate Your card number is incomplete text

  Scenario: My Site V2 Verify Auto-Renew Info Update the billing info with a new credit card number
    Given User opens URL MySite_v2
    When Fill Accounts Number Or Email Address with 'vijay.kumar.ext@darwin.cx'
    When Fill Last Name Or Postal Codes with 'kumar'
    And Clicks on "Sign In" button
    Then Click on Courage CX Magazine Tab
    Then Validate Account Status text
    Then Validate Auto Renew Info text
    When Click Edit Billing Info button
    Then Validate Edit My Billing Info text
    When Update Address in Edit My Billing Info pop up
    Then Fill the Credit Card Details "4242 4242 4242 4242" and "1025" and "123"
    When Click Update button under Edit My Billing Info pop up
