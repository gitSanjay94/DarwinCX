@smoke

Feature: New params in url - US no State
         Validate US URL with no State

  Scenario: Validate US URL with no State
    Given User opens CSC_NewparamsinurlUSnoState Page
    When  Verify the First Name Value at CSC_NewparamsinurlUSnoState Page
    Then  Verify the Last Name Value at CSC_NewparamsinurlUSnoState Page
    Then  Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoState Page
    Then  Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoState Page
    And   Verify the Address1 Value at CSC_NewparamsinurlUSnoState Page
    And   Verify the Address2 Value at CSC_NewparamsinurlUSnoState Page
    And   Verify the City Value at CSC_NewparamsinurlUSnoState Page
    Then  Verify the Postal Code Value at CSC_NewparamsinurlUSnoState Page
    Then  Verify the Email Address Value at CSC_NewparamsinurlUSnoState Page
    Then  Verify the Country Value at CSC_NewparamsinurlUSnoState Page
    Then  Verify the User Province at CSC_NewparamsinurlUSnoState Page
    Then  Click on Pay Order link Button at CSC_NewparamsinurlUSnoState Page
    And   Verify the require alert message for State field at CSC_NewparamsinurlUSnoState Page
          