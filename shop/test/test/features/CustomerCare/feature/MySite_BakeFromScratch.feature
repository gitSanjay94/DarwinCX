@smoke 
Feature: Test MySite_BakeFromScratch
         Validate MySite_BakeFromScratch

  Scenario: Validate MySite_BakeFromScratch
    Given User opens URL MySite_BakeFromScratch
    Then Validate "Welcome to your Bake from Scratch account." text
    And Validate Sign in with your email and password text
    When Sign In with email 'don.derose@darwin.cx' and password 'Test1234!'
    And Click "Sign In" button
    Then Validate My Account Details text
    Then Validate "My Bake from Scratch Subscription" text
    Then Validate "Bake from Scratch" text
    And Validate Status as 'Expired'
    And Validate Expiration Issue to be 'JUL/AUG24'
    And Validate Account ID to be '77772812'
    When Click on item "Victoria"
    Then Validate "My Victoria Subscription" text
    # Then Validate Status as 'Active'
    And Validate Status as 'Status:Expired'
    And Validate Expiration Issue to be 'NOV/DEC24'
    And Validate Account ID to be '77772812'
    Then Validate "My Details" text
    And Validate Full Name as 'Don DeRose' in My Details section
    And Validate Email as 'don.derose@darwin.cx' in My Details section

  Scenario: Validate MySite_BakeFromScratch Sign Up with existing Email and Password
    Given User opens URL MySite_BakeFromScratch
    Then Validate "Welcome to your Bake from Scratch account." text
    And Validate Sign in with your email and password text
    And Validate "Need an account? Sign Up" text
    When Click on "Sign Up"
    Then Validate "Sign up and create a new account" text
    When Sign In with email 'don.derose@darwin.cx' and password 'Test1234!'
    And Fill Retype Email text field with 'don.derose@darwin.cx'
    And Click on "Sign Up" button
    Then Validate "An account with the given email already exists." text

  Scenario: Validate MySite_BakeFromScratch Sign Up with new Email and Password
    Given User opens URL MySite_BakeFromScratch
    Then Validate "Welcome to your Bake from Scratch account." text
    And Validate Sign in with your email and password text
    And Validate "Need an account? Sign Up" text
    When Click on "Sign Up"
    Then Validate "Sign up and create a new account" text
    When Fill Email and Password to Sign Up
    And Click on "Sign Up" button
    Then Validate "Thank you for signing up to manage your subscriptions" text

  Scenario: Validate MySite_BakeFromScratch Purchase Now
    Given User opens URL MySite_BakeFromScratch
    Then Validate "Welcome to your Bake from Scratch account." text
    And Validate Sign in with your email and password text
    When Sign In with email 'don.derose@darwin.cx' and password 'Test1234!'
    And Click "Sign In" button
    Then Validate My Account Details text
    Then Validate "My Bake from Scratch Subscription" text
    Then Click on "Purchase Now" button and validate Current Url with BakeFromScratch_PurchasePageUrl
