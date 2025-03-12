
@smoke
Feature: New params in url - US no Address1
         Validate US URL with no adddress1

  Scenario: Validate US URL with no adddress1
    Given User opens CSC_NewparamsinurlUSnoAddress1 Page
    When  Verify the First Name Value at CSC_NewparamsinurlUSnoAddress1 Page
    Then  Verify the Last Name Value at CSC_NewparamsinurlUSnoAddress1 Page
    Then  Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoAddress1 Page
    Then  Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoAddress1 Page
    And   Verify the Blank Address1 Value at CSC_NewparamsinurlUSnoAddress1 Page
    And   Verify the Address2 Value at CSC_NewparamsinurlUSnoAddress1 Page
    And   Verify the City Value at CSC_NewparamsinurlUSnoAddress1 Page
    Then  Verify the Postal Code Value at CSC_NewparamsinurlUSnoAddress1 Page
    Then  Verify the Email Address Value at CSC_NewparamsinurlUSnoAddress1 Page
    Then  Verify the Country Value at CSC_NewparamsinurlUSnoAddress1 Page
    Then  Verify the User Province at CSC_NewparamsinurlUSnoAddress1 Page
    Then  Click on Pay Order link Button at CSC_NewparamsinurlUSnoAddress1 Page
    And   Verify the require alert message for Address1 field at CSC_NewparamsinurlUSnoAddress1 Page
          