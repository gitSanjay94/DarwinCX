
@smoke
Feature: New params in url - US no Last Name
         Validate US URL with no last name

  Scenario: Validate US URL with no last name
    Given User opens CSC_NewparamsinurlUSnoLastName Page
    When  Verify the First Name Value at CSC_NewparamsinurlUSnoLastName Page
    Then  Verify the Blank Last Name Value at CSC_NewparamsinurlUSnoLastName Page
    Then  Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoLastName Page
    Then  Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoLastName Page
    And   Verify the Address1 Value at CSC_NewparamsinurlUSnoLastName Page
    And   Verify the Address2 Value at CSC_NewparamsinurlUSnoLastName Page
    And   Verify the City Value at CSC_NewparamsinurlUSnoLastName Page
    Then  Verify the Postal Code Value at CSC_NewparamsinurlUSnoLastName Page
    Then  Verify the Email Address Value at CSC_NewparamsinurlUSnoLastName Page
    Then  Verify the Country Value at CSC_NewparamsinurlUSnoLastName Page
    Then  Verify the User Province at CSC_NewparamsinurlUSnoLastName Page
    Then  Click on Pay Order link Button at CSC_NewparamsinurlUSnoLastName Page
    And   Verify the require alert message for Address1 field at CSC_NewparamsinurlUSnoLastName Page
          