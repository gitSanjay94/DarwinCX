@smoke 
Feature: Test FSMSE_Courage CA Order Bill Me Later Payment Option
         Validate FSMSE_Courage CA Order Bill Me Later Payment Option

  Scenario: Validate Courage CA Order Bill Me Later Page Blank fields Values
    Given User opens URL FSMSE_CourageCAOrderBillMe
    When Verify the Blank First Name Value at FSMSE_CourageCAOrderBillMe Page
    Then Verify the Blank Last Name Value at FSMSE_CourageCAOrderBillMe Page
    Then Verify the Blank Comapnay Name Value at FSMSE_CourageCAOrderBillMe Page
    Then Verify the Blank Job Title Value at FSMSE_CourageCAOrderBillMe Page
    And Verify the Blank Address1 Value at FSMSE_CourageCAOrderBillMe Page
    And Verify the Blank Address2 Value at FSMSE_CourageCAOrderBillMe Page
    And Verify the Blank City Value at FSMSE_CourageCAOrderBillMe Page
    Then Verify the Blank Postal Code Value at FSMSE_CourageCAOrderBillMe Page
    Then Verify the Blank Email Address Value at FSMSE_CourageCAOrderBillMe Page
    Then Verify the Country Value at FSMSE_CourageCAOrderBillMe Page
    Then Verify the Select  User Province at FSMSE_CourageCAOrderBillMe Page

  Scenario: Validate Courage CA Mail Add Diff Page order process
    Given User opens URL FSMSE_CourageCAOrderBillMe
    And Select the Canada Country Available Subscription Option at FSMSE_CourageCAOrderBillMe Page
    Then Enter values in Mailing and Billing Address form at FSMSE_CourageCAOrderBillMe Page
    Then Validate number of char in Billing Address 2 text field to be 32 at FSMSE_CourageCAOrderBillMe
    When Select Bill Me Later Payment Option at FSMSE_CourageCAOrderBillMe Page
    Then Validate Amount Before Order at FSMSE_CourageCAOrderBillMe Page
    # Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderBillMe Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Amount After Order at FSMSE_CourageCAOrderBillMe Page
    Then Validate Total Amount before & after Order

  Scenario: Validate FSMSE Courage CA Mail Add Diff Page Gift Recipient order proces
    Given User opens URL FSMSE_CourageCAOrderBillMe
    And Select the Canada Country Available Subscription Option at FSMSE_CourageCAOrderBillMe Page
    Then Enter values in Mailing and Billing Address form at FSMSE_CourageCAOrderBillMe Page
    And Check This Is A Gift checkbox at FSMSE_CourageCAOrderBillMe Page
    And Enter values in Gift Recipient Mailing Address form at at FSMSE_CourageCAOrderBillMe Page
    Then Validate number of char in Gift Recipient Address text field to be 32 at FSMSE_CourageCAOrderBillMe
    When Select Bill Me Later Payment Option at FSMSE_CourageCAOrderBillMe Page
    Then Validate Gift Order Amount Before Order at FSMSE_CourageCAOrderBillMe Page
    # Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderBillMe Page
    And Click on Place Order button
    Then Validate Gift Order Amount After Order at FSMSE_CourageCAOrderBillMe Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order

  Scenario: Validate FSMSE Courage CA Mail Add Diff Page with Differnt mailing address
    Given User opens URL FSMSE_CourageCAOrderBillMe
    And Select the Canada Country Available Subscription Option at FSMSE_CourageCAOrderBillMe Page
    Then Enter values in Mailing and Billing Address form at FSMSE_CourageCAOrderBillMe Page
    And Check I have a different mailing address checkbox at FSMSE_CourageCAOrderBillMe page
    And Enter values in Mailing Address form at FSMSE_CourageCAOrderBillMe page
    Then Validate Mailing Address text at FSMSE_CourageCAOrderBillMePage
    Then Validate number of char in Different Billing Address text field to be 32 at FSMSE_CourageCAOrderBillMe
    When Select Bill Me Later Payment Option at FSMSE_CourageCAOrderBillMe Page
    Then Validate Amount for Different Mailing Address Before Order at FSMSE_CourageCAOrderBillMe Page
    # Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderBillMe Page
    And Click on Place Order button
    Then Validate Amount for Different Mailing Address After Order at FSMSE_CourageCAOrderBillMe Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order
