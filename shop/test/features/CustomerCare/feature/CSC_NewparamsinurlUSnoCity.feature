@smoke



Feature: New params in url - US no City
         Validate US URL with no City

  Scenario: Validate US URL with no City
    Given User opens CSC_NewparamsinurlUSnoCity Page
    When  Verify the First Name Value at CSC_NewparamsinurlUSnoCity Page
    Then  Verify the Last Name Value at CSC_NewparamsinurlUSnoCity Page
    Then  Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoCity Page
    Then  Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoCity Page
    And   Verify the Address1 Value at CSC_NewparamsinurlUSnoCity Page
    And   Verify the Address2 Value at CSC_NewparamsinurlUSnoCity Page
    And   Verify the Blank City Value at CSC_NewparamsinurlUSnoCity Page
    Then  Verify the Postal Code Value at CSC_NewparamsinurlUSnoCity Page
    Then  Verify the Email Address Value at CSC_NewparamsinurlUSnoCity Page
    Then  Verify the Country Value at CSC_NewparamsinurlUSnoCity Page
    Then  Verify the User Province at CSC_NewparamsinurlUSnoCity Page
    Then  Click on Pay Order link Button at CSC_NewparamsinurlUSnoCity Page
    And   Verify the require alert message for City field at CSC_NewparamsinurlUSnoCity Page
          