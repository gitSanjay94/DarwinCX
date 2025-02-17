@smoke
Feature: Test Courage CA Order Bill Me Later Payment Option
         Validate Courage CA Order Bill Me Later Payment Option

  Scenario: Validate Courage CA Order Bill Me Later Page Blank fields Values
    Given User opens URL Courage_CAOrderBillMeLater
    When  Verify the Blank First Name Value at Courage_CAOrderBillMeLater Page
    Then  Verify the Blank Last Name Value at Courage_CAOrderBillMeLater Page
    Then  Verify the Blank Comapnay Name Value at Courage_CAOrderBillMeLater Page
    Then  Verify the Blank Job Title Value at Courage_CAOrderBillMeLater Page
    And   Verify the Blank Address1 Value at Courage_CAOrderBillMeLater Page
    And   Verify the Blank Address2 Value at Courage_CAOrderBillMeLater Page
    And   Verify the Blank City Value at Courage_CAOrderBillMeLater Page
    Then  Verify the Blank Postal Code Value at Courage_CAOrderBillMeLater Page
    Then  Verify the Blank Email Address Value at Courage_CAOrderBillMeLater Page
    Then  Verify the Country Value at Courage_CAOrderBillMeLater Page
    Then  Verify the Select  User Province at Courage_CAOrderBillMeLater Page
   
    Scenario: Validate Courage CA Mail Add Diff Page order process
     Given User opens URL Courage_CAOrderBillMeLater
     And   Select the Canada Country Available Subscription Option at Courage_CAOrderBillMeLater Page
     Then  Enter values in Mailing and Billing Address form at Courage_CAOrderBillMeLater Page
     Then  Validate number of char in Billing Address 2 text field to be 32 at Courage_CAOrderBillMeLater     
     When  Select Bill Me Later Payment Option at Courage_CAOrderBillMeLater Page
     And  Click on Place Order button 
     Then Validate TRANSACTION SUCCESSFUL text


    Scenario: Validate Courage CA Mail Add Diff Page Gift Recipient order proces
    Given User opens URL Courage_CAOrderBillMeLater
    And   Select the Canada Country Available Subscription Option at Courage_CAOrderBillMeLater Page
    Then  Enter values in Mailing and Billing Address form at Courage_CAOrderBillMeLater Page
    And   Check This Is A Gift checkbox at Courage_CAOrderBillMeLater Page
    And   Enter values in Gift Recipient Mailing Address form at at Courage_CAOrderBillMeLater Page
    Then  Validate number of char in Gift Recipient Address text field to be 32 at Courage_CAOrderBillMeLater
    When  Select Bill Me Later Payment Option at Courage_CAOrderBillMeLater Page
    And   Click on Place Order button
    Then  Validate TRANSACTION SUCCESSFUL text

   Scenario: Validate Courage CA Mail Add Diff Page with Differnt mailing address
    Given User opens URL Courage_CAOrderBillMeLater
    And Select the Canada Country Available Subscription Option at Courage_CAOrderBillMeLater Page
    Then  Enter values in Mailing and Billing Address form at Courage_CAOrderBillMeLater Page
    And   Check I have a different mailing address checkbox at Courage_CAOrderBillMeLater page
    And   Enter values in Mailing Address form at Courage_CAOrderBillMeLater page
    Then  Validate Mailing Address text at Courage_CAOrderBillMeLaterPage
    Then  Validate number of char in Different Billing Address text field to be 32 at Courage_CAOrderBillMeLater
    When  Select Bill Me Later Payment Option at Courage_CAOrderBillMeLater Page
    And   Click on Place Order button
    Then  Validate TRANSACTION SUCCESSFUL text
