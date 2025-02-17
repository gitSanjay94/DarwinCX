@smoke 
Feature: Test FSMSE Zoomer Magazine MY Sign In
         Validate FSMSE Zoomer Magazine MY Sign In


  Scenario: Validate FSMSE Zoomer Magazine MY Sign In with correct email and password
    Given User opens URL FSMSE_ZoomerMagazineMYSignInPage
    Then Validate Welcome text at FSMSE_ZoomerMagazineMYSignIn Page
    And Validate Sign in with your email and password text at FSMSE_ZoomerMagazineMYSignIn Page
    When Sign In with email "don.derose@darwin.cx" and password "Test1234!" at FSMSE_ZoomerMagazineMYSignIn Page
    And Click on Sign In button at FSMSE_ZoomerMagazineMYSignIn Page
    # Then Validate "Link My Subscription Text" in Link My Subscription pop-up at FSMSE_ZoomerMagazineMYSignIn Page
    # When Click Cancel button in Link My Subscription pop-up at FSMSE_ZoomerMagazineMYSignIn Page
    Then Validate My Account Details text at FSMSE_ZoomerMagazineMYSignIn Page
    And Validate Account Number in My Account Details section at FSMSE_ZoomerMagazineMYSignIn Page
    And Validate Full Name in My Account Details section at FSMSE_ZoomerMagazineMYSignIn Page
    And Validate Email in My Account Details section at FSMSE_ZoomerMagazineMYSignIn Page
 
  Scenario: Validate Zoomer Magazine MY Sign In with incorrect email
    Given User opens URL FSMSE_ZoomerMagazineMYSignInPage
    Then Validate Welcome text at FSMSE_ZoomerMagazineMYSignIn Page
    And Validate Sign in with your email and password text at FSMSE_ZoomerMagazineMYSignIn Page
    When Sign In with email "don.derose@darwin.cxz" and password "Test1234!" at FSMSE_ZoomerMagazineMYSignIn Page
    And Click on Sign In button at FSMSE_ZoomerMagazineMYSignIn Page
    Then Verify warn message "This email is not associated with an account" should display to the user at FSMSE_ZoomerMagazineMYSignIn Page
 
  Scenario: Validate Zoomer Magazine MY Sign In with incorrect password
    Given User opens URL FSMSE_ZoomerMagazineMYSignInPage
    Then Validate Welcome text at FSMSE_ZoomerMagazineMYSignIn Page
    And Validate Sign in with your email and password text at FSMSE_ZoomerMagazineMYSignIn Page
    When Sign In with email "don.derose@darwin.cx" and password "Test1234!z" at FSMSE_ZoomerMagazineMYSignIn Page
    And Click on Sign In button at FSMSE_ZoomerMagazineMYSignIn Page
    Then Verify warn message "Thats not the right password at FSMSE_ZoomerMagazineMYSignIn Page." should display to the user
   