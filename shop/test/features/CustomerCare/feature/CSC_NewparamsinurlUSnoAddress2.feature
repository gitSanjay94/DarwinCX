@smoke


Feature: New params in url - US no Address2
         Validate US URL with no adddress2

  Scenario: Validate US URL with no adddress2
    Given User opens CSC_NewparamsinurlUSnoAddress2 Page
    When  Verify the First Name Value at CSC_NewparamsinurlUSnoAddress2 Page
    Then  Verify the Last Name Value at CSC_NewparamsinurlUSnoAddress2 Page
    Then  Verify the Blank Comapnay Name Value at CSC_NewparamsinurlUSnoAddress2 Page
    Then  Verify the Blank Job Title Value at CSC_NewparamsinurlUSnoAddress2 Page
    And   Verify the Address1 Value at CSC_NewparamsinurlUSnoAddress2 Page
    And   Verify the Blank Address2 Value at CSC_NewparamsinurlUSnoAddress2 Page
    And   Verify the City Value at CSC_NewparamsinurlUSnoAddress2 Page
    Then  Verify the Postal Code Value at CSC_NewparamsinurlUSnoAddress2 Page
    Then  Verify the Email Address Value at CSC_NewparamsinurlUSnoAddress2 Page
    Then  Verify the Country Value at CSC_NewparamsinurlUSnoAddress2 Page
    Then  Verify the User Province at CSC_NewparamsinurlUSnoAddress2 Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    
          