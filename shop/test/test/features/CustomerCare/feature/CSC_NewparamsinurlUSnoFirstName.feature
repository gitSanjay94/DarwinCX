@smoke
Feature: New params in url - US no First Name
         Validate US URL with no first name

  Scenario: Validate US URL with no first name
    Given User opens CSC_NewparamsinurlUSnoFirstName Page
    When  Verify the Blank First Name Value at CSC_NewparamsinurlUSnoFirstName Page
    Then  Verify the Last Name Value at CSC_NewparamsinurlUSnoFirstName Page
    Then  Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoFirstName Page
    Then  Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoFirstName Page
    And   Verify the Address1 Value at CSC_NewparamsinurlUSnoFirstName Page
    And   Verify the Address2 Value at CSC_NewparamsinurlUSnoFirstName Page
    And   Verify the City Value at CSC_NewparamsinurlUSnoFirstName Page
    Then  Verify the Postal Code Value at CSC_NewparamsinurlUSnoFirstName Page
    Then  Verify the Email Address Value at CSC_NewparamsinurlUSnoFirstName Page
    Then  Verify the Country Value at CSC_NewparamsinurlUSnoFirstName Page
    Then  Verify the User Province at CSC_NewparamsinurlUSnoFirstName Page
          