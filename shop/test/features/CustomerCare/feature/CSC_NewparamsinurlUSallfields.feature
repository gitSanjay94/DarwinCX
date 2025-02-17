@smoke


Feature: New params in url - US all fields
         Validate US URL with all fields populated

  Scenario: Validate US URL with all fields populated
    Given User opens New params in url - US all fields Page
    When  Verify the First Name Value at URL CSC_NewparamsinurlUSallfields Page
    Then  Verify the Last Name Value at URL CSC_NewparamsinurlUSallfields Page
    Then  Verify the Blank Comapnay Name Value at URL CSC_NewparamsinurlUSallfields Page
    Then  Verify the Blank Job Title Value at URL CSC_NewparamsinurlUSallfields Page
    And   Verify the Address1 Value at URL CSC_NewparamsinurlUSallfields Page
    And   Verify the Address2 Value at URL CSC_NewparamsinurlUSallfields Page
    And   Verify the City Value at URL CSC_NewparamsinurlUSallfields Page
    Then  Verify the Postal Code Value at URL CSC_NewparamsinurlUSallfields Page
    Then  Verify the Email Address Value at URL CSC_NewparamsinurlUSallfields Page
    Then  Verify the Country Value at URL CSC_NewparamsinurlUSallfields Page
    Then  Verify the User Province at URL CSC_NewparamsinurlUSallfields Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then  Click on Pay Order link Button at URL CSC_NewparamsinurlUSallfields Page
    Then  Verify the Successful Transaction Message for CSC_NewparamsinurlUSallfields Page
       