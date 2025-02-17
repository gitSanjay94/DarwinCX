@smoke 
Feature: Settings
    Validate Settings feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

  Scenario: User should be able to Verify Active clients are displayed with correct details
    Given User selects the clients
    When Click on Settings
    When Click on Clients DO
    Then Validate "Active Clients" text
    Then Verify the active clients table columns
    Then Verify active clients

  Scenario: User should be able to Verify In-Active clients
    Given User selects the clients
    When Click on Settings
    When Click on Clients DO
    When Verify inactive clients
    Then Verify no inactive clients listed
    Then Verify the inactive clients table columns

  Scenario: User should be able to Verify Client-ID details
    Given User selects the clients
    When Click on Settings
    When Click on Clients Info
    Then Verify the Clients Info Title text
    Then Verify the Client ID

  Scenario: User should be able to Verify display of Client Name
    Given User selects the clients
    When Click on Settings
    When Click on Clients Info
    Then Verify the Clients Info Title text
    Then Validate "details" text
    Then Validate Client Name as "Courage CX"

  Scenario: User should be able to Verify display of Country ID
    Given User selects the clients
    When Click on Settings
    When Click on Clients Info
    Then Verify the Clients Info Title text
    Then Validate "details" text
    Then Validate Country ID as "US"

  Scenario: User should be able to verify Client website URL
    Given User selects the clients
    When Click on Settings
    When Click on Clients Info
    Then Verify the Client Website URL

  Scenario: User should be able to verify display of Tax-Nexus
    Given User selects the clients
    When Click on Settings
    When Click on Tax-Nexus tab
    Then Validate "Sales Tax Nexus" text
    Then Count the Sales Tax Nexus table headings and checkboxes
    Then Verify the Sales Tax Nexus table Products
    Then I should verify the checked checkboxes
      | Header                | Checked |
      | Default - Courage CX  | false   |
      | Darwin Box            | false   |
      | Graphics Pro Expo     | false   |
      | Courage CX Magazine   | false   |
      | Courage CX Membership | false   |
      | Courage Box           | false   |
      | B2B Connect           | false   |
    # When Checks the "B2B Connect Product" checkbox
    # When Unchecks the "B2B Connect Product" checkbox
    # Then Clicks the "Apply" button
    # Then Clicks the "Apply" button

  Scenario: User should be able to verify display of PREFERENCE SETTING
    Given User selects the clients
    When Click on Settings
    When Click on PREFERENCE SETTING tab
    # Then I should see the following preference link texts:
      # | Preference Status - 9999 Courage CX        |
      # | Preference Status - 90 Courage CX Magazine |
      # | Configurable Preference                    |
    When Expand the 90 Courage CX Magazine link
    Then Verify 90 CourageCXMagazineLink table headers
    Then Collapse the 90 Courage CX Magazine link
    When Expand the 9999 Courage CX Magazine link
    Then Verify 9999 CourageCXMagazineLink table headers
    Then Collapse the 9999 Courage CX Magazine link
    When Expand the Configurable Preference link
    Then Collapse the Configurable Preference link


  # DEV-8813 : Settings :  "Successfully updated" message is not displayed 
  # after Creating New Partner API Key
  Scenario: User should be able to verify display of Partner API
    Given User selects the clients
    When Click on Settings
    When Click on Parnter API Keys tab
    Then Click on New Partner Key Option Button
    Then Create New Partner Key
    Then Validate New Partner Key Creation Success Message

  Scenario: User should be able to verify functionlity under Issues Tab
    Given User selects the clients
    When Click on Settings
    When Click on Issues Tab
    Then Verify the Download button
    Then Click on Download button
    Then Verify the table headers under Issues Tab
    Then Search the issue by issue number
    Then Update the Issue Closed status and Supplementary Copies for the issue
    Then Click on Batch Upload button
    Then Click on "Browse File" button
    When Choose file to upload

  Scenario: Verify Payment Provider Tab
    Given User selects the clients
    When Click on Settings
    When Click on Payment Provider Tab
    Then Verify the Logs
    Then Verify the Stripe and CheckIssuing Payment Logo
    Then Verify the Stripe Payment Provider table columns
    Then Verify the Stripe Payment Provider table data
    Then Verify the CheckIssuing Payment Provider table columns
    Then Verify the View details Link for the Stripe Payment Provieder
    Then Verify the CheckIssuing Payment Provider table columns
    When Verify the CheckIssuing table
    Then the CheckIssuing table should contain "1154", "courage", "Testing v7", "checking", "123938711", "Completed"

  @smoke123
  Scenario: Verify the Marketing Coupon upload functionlity
    Given User selects the clients
    When Click on Settings
    When Click on Marketing Coupon Tab

  Scenario: User should be able to Verify display of Inactive Subscription Preferences
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    Then Validate "Subscription Preferences" text
    Then Validate "Manage subscription preferences in difference campaigns" text
    When Click on "Show Inactive List" button
    Then Validate "Show Active List" button
    Then Verify the following table columns under "Inactive List"
      | SUBSCRIPTION PREFERENCE CODE |
      | CUSTOMER CARE                |
      | TARGET                       |
      | ACTIVATED ON                 |
      | FULFILLMENT ACTION           |
      | LAST MODIFIED                |
      | STATUS                       |
    When I fetch all inactive subscription rows
    # Then I should see the following inactive subscription data

  Scenario: User should be able to Verify adding a new Subscription Preference
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    When Click on "Add Subscription Preference" button
    Then Validate "Add Subscription Preference" text
    Then Validate "General Setup" text
    When Click on "Next" button
    Then Validate "Required" texts in "Add Subscription Preference" pop up
    When Fill "General Setup" form
    When Click on "Next" button
    Then Validate "Shop Page and MY Page Setup" text
    When Click on "Next" button
    Then Validate "Required" texts in "Add Subscription Preference" pop up
    When Fill "Shop Page and MY Page Setup" form
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Add Preferences" button
    Then Validate "Preference Update Successful" text

  Scenario: User should be able to Verify error message for missing fields when adding
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    When Click on "Add Subscription Preference" button
    Then Validate "Add Subscription Preference" text
    Then Validate "General Setup" text
    When Click on "Next" button
    Then Validate "Required" texts in "Add Subscription Preference" pop up

  Scenario: User should be able to Verify that the newly added Subscription Preference is displayed
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    When Click on "Add Subscription Preference" button
    Then Validate "Add Subscription Preference" text
    Then Validate "General Setup" text
    When Click on "Next" button
    Then Validate "Required" texts in "Add Subscription Preference" pop up
    When Fill "General Setup" form
    When Click on "Next" button
    Then Validate "Shop Page and MY Page Setup" text
    When Click on "Next" button
    Then Validate "Required" texts in "Add Subscription Preference" pop up
    When Fill "Shop Page and MY Page Setup" form
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Add Preferences" button
    Then Validate "Preference Update Successful" text

  Scenario: User should be able to Verify activating an inactive Subscription Preference
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    Then Validate "Subscription Preferences" text
    When Click on "Show Inactive List" button
    When Click on "Subscription Preference Four Highlight Clone"
    When Click on "Edit Preference" button
    Then Validate "Edit Subscription Preference" text
    When Click on "Edit Subscription Preference Toggle" button
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Update Preference" button
    Then Validate "Preference Update Successful" text
    When Click on "Show Active List" button
    When Click on "Subscription Preference Four Highlight Clone"
    When Click on "Edit Preference" button
    Then Validate "Edit Subscription Preference" text
    When Click on "Edit Subscription Preference Toggle" button
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Update Preference" button
    Then Validate "Preference Update Successful" text

  Scenario: User should be able to Verify the expand and collapse functionality of Subscription Preference record under 'GENERAL' link
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    Then Validate "Subscription Preferences" text
    When Click on First Subscription Preference Code data from the table
    When Expand the GENERAL link in Subscription Preference
    Then Verify headers under "GENERAL" Link
    Then Collapse the GENERAL link in Subscription Preference
    When Click "Back To Subscription" in Subscription Preference
    Then Validate "Subscription Preferences" text

  Scenario: User should be able to Verify the expand and collapse functionality of Subscription Preference record under 'SHOP PAGE AND MY. PAGE SETUP' link
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    Then Validate "Subscription Preferences" text
    When Click on First Subscription Preference Code data from the table
    When Expand the SHOP PAGE AND MY PAGE SETUP link in Subscription Preference
    Then Verify headers under "SHOP PAGE AND MY PAGE SETUP" Link
    Then Collapse the SHOP PAGE AND MY PAGE SETUP link in Subscription Preference
    When Click "Back To Subscription" in Subscription Preference
    Then Validate "Subscription Preferences" text

  Scenario: User should be able to Verify the expand and collapse functionality of Subscription Preference record under 'CUSTOMER CARE SETUP' link
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    Then Validate "Subscription Preferences" text
    When Click on First Subscription Preference Code data from the table
    When Expand the CUSTOMER CARE SETUP link in Subscription Preference
    Then Verify headers under "CUSTOMER CARE SETUP" Link
    Then Collapse the CUSTOMER CARE SETUP link in Subscription Preference
    When Click "Back To Subscription" in Subscription Preference
    Then Validate "Subscription Preferences" text

  Scenario: User should be able to Verify the expand and collapse functionality of Subscription Preference record under 'OPT IN CODE HISTORY' link
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    Then Validate "Subscription Preferences" text
    When Click on First Subscription Preference Code data from the table
    When Expand the OPT IN CODE HISTORY link in Subscription Preference
    Then Verify headers under "OPT-IN CODE HISTORY" Link
    Then Collapse the OPT IN CODE HISTORY link in Subscription Preference
    When Click "Back To Subscription" in Subscription Preference
    Then Validate "Subscription Preferences" text

  Scenario: User should be able to Verify editing a Subscription Preference
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    Then Validate "Subscription Preferences" text
    When Click on First Subscription Preference Code data from the table
    When Click on "Edit Preference" button
    Then Validate "Edit Subscription Preference" text
    When Enter value in CRM Field text field
    When Enter value in CRM Instance text field
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Update Preference" button
    Then Validate "Preference Update Successful" text

  Scenario: User should be able to Verify cloning a Subscription Preference
    Given User selects the clients
    When Click on Settings
    When Click on "Subscription Preferences"
    Then Validate "Subscription Preferences" text
    When Click on First Subscription Preference Code data from the table
    When Click on "Clone Preference" button
    # Then Validate "Clone Preference" text
    When Enter value in CRM Field text field
    When Enter value in CRM Instance text field
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Next" button
    When Click on "Clone" button
    Then Validate "Preference Update Successful" text
