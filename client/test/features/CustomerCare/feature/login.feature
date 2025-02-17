@smoke @login @regression
Feature: Login Validation
    Validate Login feature    

  Scenario: Login with correct credentials
    Given User opens customare care app
    When Login to customare care app with valid credentials
    Then Verify user should logged in successfully

  Scenario: Login with incorrect username
    Given User opens customare care app
    When Login to customare care app with "Jaiprakash1.kaul.ext_care@darwin.cx" and "Acmeminds@123" and click Login button
    Then Verify warn message "Incorrect username or password." should display to the user

  Scenario: Login with incorrect password
    Given User opens customare care app
    When Login to customare care app with "Jaiprakash.kaul.ext_care@darwin.cx" and "Acmeminds@1234" and click Login button
    Then Verify warn message "Incorrect username or password." should display to the user

  Scenario: Login with Invalid email address
    Given User opens customare care app
    When Login to customare care app with "Jaiprakash.kaul.ext_care" and "Acmeminds@123" and click Login button
    Then Verify user should not be able to proceed providing the invalid format

  Scenario: Login with Invalid password format
    Given User opens customare care app
    When Login to customare care app with "Jaiprakash.kaul.ext_care@darwin.cx" and "Acmeminds" and click Login button
    Then Verify warn message "Incorrect username or password." should display to the user
