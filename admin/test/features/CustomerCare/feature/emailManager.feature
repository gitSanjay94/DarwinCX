@smoke 
Feature: Email Manager
    Validate Email Manager feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to open Relevant Editor
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    When Click on "Renewals" and select "Template one"
    Then Validate "Email Name" to contain "Template enabled"
    Then Validate "Back to email configuration" link
    Then Validate "Email Editor" to contain "Classic" and "Email Template"
    Then Validate buttons are visible

  Scenario: User should be able to verify the Test mail
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    When Click on "Renewals" and select "Template one"
    When Click on "Send Test" button
    Then Validate "Send Test Email" text
    Then Validate "Send Test To" text
    When Fill "Test Email" input
    Then Click on the Send Test Button to Send the Mail
    # Then Validate "Sample email successfully sent" text

  Scenario: User should be able to verify the Send Test popup
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    When Click on "Renewals" and select "Template one"
    When Click on "Send Test" button
    Then Validate "Send Test Email" text
    Then Validate "Send Test To" text
    When Click on "Close" button

  # BUG DEV-2581 : Email Manager: unable to import JSON file content
  # Not automatable as after Switch Editor and import JSON,
  # Email Editor:Classic modifys to Email Editor:Designer 
  # Scenario: User should be able to verify the Import Json popup
  #   Given User selects the clients
  #   When Click Marketing Studio
  #   And Click on Email Manager
  #   Then Validate Email Manager text
  #   When Click on "Batch Emails"
  #   When Click on "Renewals" and select "Template one"
  #   When Click on "Switch Editor" button
  #   When Click on "Browse Files" button
  #   When Choose file to upload in JSON format
  #   When Click on "Import JSON" button
  #   When Click on "Browse Files" button
  #   When Choose file to upload in JSON format

  Scenario: User should be able to verify the Export HTML functionality
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    When Click on "Renewals" and select "Template one"
    When Click on "Export HTML" button

  Scenario: User should be able to Update the email editor
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    When Click on "Renewals" and select "Template one"
    When Update Email Editor
    When Click on "Save" button
    Then Validate "Batch Email Template Renewals update request succeeded" text

  Scenario: User should be able to Verify the Preview popup
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    When Click on "Renewals"
    When Select "Template1"
    When Click on "Preview" button
    Then Validate "Email Preview" text

  Scenario: User should be able to Verify the Enable Email toggle link
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    When Click on "Renewals"
    When Select "Template1"
    When Click on "Enable Email" toggle link
    Then Validate "Email Manager Disable Warning" text
    When Click on "Yes" button in "Email Manager Disable Warning" pop up
    Then Validate "Batch Email Template Renewals update request succeeded" text
    When Click on "Enable Email" toggle link
    Then Validate "Batch Email Template Renewals update request succeeded" text

  Scenario: User should be able to Verify the Renewals link
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    Then Validate "Renewals" link

  Scenario: User should be able to Verify the Bills link
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    Then Validate "Bills" link

  Scenario: User should be able to Verify the relevant items under Renewals link
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    When Click on "Renewals"
    Then Verify the items under Renewals link

  Scenario: User should be able to Verify the relevant items under Bills link
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    When Click on "Batch Emails"
    When Click on "Bills"
    Then Verify the items under Bills link

  Scenario: User should be able to Verify the Triggered Emails link
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    Then Validate "Triggered Emails" link

  Scenario: User should be able to Verify the Batch Emails link
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    Then Validate "Batch Emails" link

  Scenario: User should be able to Click Renewals plus icon and Verify the 'choose email template' pop up
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    Then Validate "Batch Emails" link
    When Click on "Batch Emails"
    When Click Renewals plus icon
    Then Validate "Choose Email Template" pop up
    And Validate "Choose your canvas" text
    And Validate "Design Builder" text
    And Validate "Classic Builder" text
    When Click on cross icon
    Then Validate Email Manager text

  Scenario: User should be able to Click Bills plus icon and Verify the 'choose email template' pop up
    Given User selects the clients
    When Click Marketing Studio
    And Click on Email Manager
    Then Validate Email Manager text
    Then Validate "Batch Emails" link
    When Click on "Batch Emails"
    When Click Bills plus icon
    Then Validate "Choose Email Template" pop up
    And Validate "Choose your canvas" text
    And Validate "Design Builder" text
    And Validate "Classic Builder" text
    When Click on cross icon
    Then Validate Email Manager text
