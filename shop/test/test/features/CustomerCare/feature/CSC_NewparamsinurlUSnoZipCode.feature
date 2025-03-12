@smoke
Feature: New params in url - US no ZipCode
         Validate US URL with no ZipCode

  Scenario: Validate US URL with no ZipCode
    Given User opens CSC_NewparamsinurlUSnoZipCode Page
    When  Verify the First Name Value at CSC_NewparamsinurlUSnoZipCode Page
    Then  Verify the Last Name Value at CSC_NewparamsinurlUSnoZipCode Page
    Then  Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoZipCode Page
    Then  Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoZipCode Page
    And   Verify the Address1 Value at CSC_NewparamsinurlUSnoZipCode Page
    And   Verify the Address2 Value at CSC_NewparamsinurlUSnoZipCode Page
    And   Verify the City Value at CSC_NewparamsinurlUSnoZipCode Page
    Then  Verify the Blank Postal Code Value at CSC_NewparamsinurlUSnoZipCode Page
    Then  Verify the Email Address Value at CSC_NewparamsinurlUSnoZipCode Page
    Then  Verify the Country Value at CSC_NewparamsinurlUSnoZipCode Page
    Then  Verify the User Province at CSC_NewparamsinurlUSnoZipCode Page
    Then  Click on Pay Order link Button at CSC_NewparamsinurlUSnoZipCode Page
    And   Verify the require alert message for ZipCode field at CSC_NewparamsinurlUSnoZipCode Page
          