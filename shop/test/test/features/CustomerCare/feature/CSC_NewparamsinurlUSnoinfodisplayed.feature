@smoke
Feature: New params in url - US no info displayed
         Validate US URL with no information displayed

  Scenario: Validate US URL with no information displayed
    Given User opens URL CSC_NewparamsinurlUSnoinfodisplayed
    When  Verify the Blank First Name Value at CSC_NewparamsinurlUSnoinfodisplayed Page
    Then  Verify the Blank Last Name Value at CSC_NewparamsinurlUSnoinfodisplayed Page
    Then  Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoinfodisplayed Page
    Then  Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoinfodisplayed Page
    And   Verify the Blank Address1 Value at CSC_NewparamsinurlUSnoinfodisplayed Page
    And   Verify the Blank Address2 Value at CSC_NewparamsinurlUSnoinfodisplayed Page
    And   Verify the Blank City Value at CSC_NewparamsinurlUSnoinfodisplayed Page
    Then  Verify the Blank Postal Code Value at CSC_NewparamsinurlUSnoinfodisplayed Page
    Then  Verify the Blank Email Address Value at URL CSC_NewparamsinurlUSnoinfodisplayed Page
    Then  Verify the Country Value at CSC_NewparamsinurlUSnoinfodisplayed Page
    Then  Verify the Select  User Province at URL CSC_NewparamsinurlUSnoinfodisplayed Page
   