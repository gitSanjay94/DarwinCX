@smoke 
Feature: Test Zoomer Magazine MY Sign In
         Validate Zoomer Magazine MY Sign In

  
  Scenario: Validate Zoomer Magazine MY Sign In with correct email and password
    Given User opens URL CSC2_ZoomerMagazineMYSignInPage
    Then Validate Welcome text
    And Validate Sign in with your email and password text
    When Sign In with email "don.derose@darwin.cx" and password "Test1234!"
    And Click on Sign In button
    # Then Validate "Link My Subscription Text" in Link My Subscription pop-up
    # When Click Cancel button in Link My Subscription pop-up
    Then Validate My Account Details text
    And Validate Account Number in My Account Details section
    And Validate Full Name in My Account Details section
    And Validate Email in My Account Details section
 
  Scenario: Validate Zoomer Magazine MY Sign In with incorrect email
    Given User opens URL CSC2_ZoomerMagazineMYSignInPage
    Then Validate Welcome text
    And Validate Sign in with your email and password text
    When Sign In with email "don.derose@darwin.cxz" and password "Test1234!"
    And Click on Sign In button
    Then Verify warn message "This email is not associated with an account" should display to the user
 
  Scenario: Validate Zoomer Magazine MY Sign In with incorrect password
    Given User opens URL CSC2_ZoomerMagazineMYSignInPage
    Then Validate Welcome text
    And Validate Sign in with your email and password text
    When Sign In with email "don.derose@darwin.cx" and password "Test1234!z"
    And Click on Sign In button
    Then Verify warn message "Thats not the right password." should display to the user
