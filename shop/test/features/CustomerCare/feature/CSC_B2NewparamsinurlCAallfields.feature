
@smoke1234567



Feature: CA URL with all fields populated
         Validate CA URL with all fields populated

  Scenario: Validate CA URL with all fields populated
    Given User opens B2NewparamsinurlCAallfields Page
    When  Verify the First Name Value at URL B2NewparamsinurlCAallfields Page
    Then  Verify the Last Name Value at URL B2NewparamsinurlCAallfields Page
    Then  Verify the Blank Comapnay Name Value at URL B2NewparamsinurlCAallfields Page
    Then  Verify the Blank Job Title Value at URL B2NewparamsinurlCAallfields Page
    And   Verify the Address1 Value at URL B2NewparamsinurlCAallfields Page
    And   Verify the Address2 Value at URL B2NewparamsinurlCAallfields Page
    And   Verify the City Value at URL B2NewparamsinurlCAallfields Page
    Then  Verify the Postal Code Value at URL B2NewparamsinurlCAallfields Page
    Then  Verify the Email Address Value at URL B2NewparamsinurlCAallfields Page
    Then  Verify the Country Value at URL B2NewparamsinurlCAallfields Page
    Then  Verify the User Province at URL B2NewparamsinurlCAallfields Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then  Click on Pay Order link Button at URL B2NewparamsinurlCAallfields Page
    Then  Verify the alert message for product unavailable in Canada country at URL B2NewparamsinurlCAallfields Page
    Then  Select the Canada Country Available Subscription Option
    And  Click on Pay Order link Button at URL B2NewparamsinurlCAallfields Page
    Then  Verify the Successful Transaction Message
       