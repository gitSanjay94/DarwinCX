@smoke
Feature: Test Courage Error Msgs
         Validate Validate error messages

  Scenario: Validate Validate error messages
    Given User opens URL Courage_CAErrMsg
    And  Click on Place Order button 
    When  Verify the First Name is a mandatory field
    Then  Verify the Last Name is a mandatory field
    Then  Verify the Address is a mandatory field
    Then  Verify the City is a mandatory field
    And   Verify the Postal Code is a mandatory field
    And   Verify the Province is a mandatory field
    And   Verify the Email is a mandatory field
    Then  Verify the First Name Can Not Be Empty
    Then  Verify the Last Name Can Not Be Empty
    And   Verify the Address Can Not Be Empty
    Then  Verify the City Can Not Be Empty
    Then  Verify the Postal Code Can Not Be Empty
    Then  Verify the Email Can Not Be Empty
     
