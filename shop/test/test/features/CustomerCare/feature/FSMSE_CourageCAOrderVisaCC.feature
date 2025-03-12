@smoke 
Feature: Test FSMSE_Courage CA Order With Visa CC Payment Option
         Validate FSMSE_Courage CA Order With Visa CC Payment Option

  Scenario: Validate FSMSE_Courage CA Order With Visa CC Page Blank fields Values
    Given User opens URL FSMSE_CourageCAOrderVisaCC
    When Verify the Blank First Name Value at FSMSE_CourageCAOrderVisaCC Page
    Then Verify the Blank Last Name Value at FSMSE_CourageCAOrderVisaCC Page
    Then Verify the Blank Comapnay Name Value at FSMSE_CourageCAOrderVisaCC Page
    Then Verify the Blank Job Title Value at FSMSE_CourageCAOrderVisaCC Page
    And Verify the Blank Address1 Value at FSMSE_CourageCAOrderVisaCC Page
    And Verify the Blank Address2 Value at FSMSE_CourageCAOrderVisaCC Page
    And Verify the Blank City Value at FSMSE_CourageCAOrderVisaCC Page
    Then Verify the Blank Postal Code Value at FSMSE_CourageCAOrderVisaCC Page
    Then Verify the Blank Email Address Value at FSMSE_CourageCAOrderVisaCC Page
    Then Verify the Country Value at FSMSE_CourageCAOrderVisaCC Page
    Then Verify the Select  User Province at FSMSE_CourageCAOrderVisaCC Page

  Scenario: Validate FSMSE_Courage CA Mail Add Diff Page order process
    Given User opens URL FSMSE_CourageCAOrderVisaCC
    And Select the Canada Country Available Subscription Option at FSMSE_CourageCAOrderVisaCC Page
    Then Enter values in Mailing and Billing Address form at FSMSE_CourageCAOrderVisaCC Page
    Then Validate number of char in Billing Address 2 text field to be 32 at FSMSE_CourageCAOrderVisaCC
    When Enter valid payment details "4111 1111 1111 1111" and "1025"  and "123"
    Then Validate Amount Before Order at FSMSE_CourageCAOrderVisaCC Page
    # Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderVisaCC Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Amount After Order at FSMSE_CourageCAOrderVisaCC Page
    Then Validate Total Amount before & after Order

  Scenario: Validate FSMSE Courage CA Mail Add Diff Page Gift Recipient order proces
    Given User opens URL FSMSE_CourageCAOrderVisaCC
    And Select the Canada Country Available Subscription Option at FSMSE_CourageCAOrderVisaCC Page
    Then Enter values in Mailing and Billing Address form at FSMSE_CourageCAOrderVisaCC Page
    And Check This Is A Gift checkbox at FSMSE_CourageCAOrderVisaCC Page
    And Enter values in Gift Recipient Mailing Address form at at FSMSE_CourageCAOrderVisaCC Page
    Then Validate number of char in Gift Recipient Address text field to be 32 at FSMSE_CourageCAOrderVisaCC
    When Enter valid payment details "4111 1111 1111 1111" and "1025"  and "123"
    Then Validate Gift Order Amount Before Order at FSMSE_CourageCAOrderVisaCC Page
    # Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderVisaCC Page
    And Click on Place Order button
    Then Validate Gift Order Amount After Order at FSMSE_CourageCAOrderVisaCC Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order

  Scenario: Validate FSMSE Courage CA Mail Add Diff Page with Differnt mailing address
    Given User opens URL FSMSE_CourageCAOrderVisaCC
    And Select the Canada Country Available Subscription Option at FSMSE_CourageCAOrderVisaCC Page
    Then Enter values in Mailing and Billing Address form at FSMSE_CourageCAOrderVisaCC Page
    And Check I have a different mailing address checkbox at FSMSE_CourageCAOrderVisaCC page
    And Enter values in Mailing Address form at FSMSE_CourageCAOrderVisaCC page
    Then Validate Mailing Address text at FSMSE_CourageCAOrderVisaCCPage
    Then Validate number of char in Different Billing Address text field to be 32 at FSMSE_CourageCAOrderVisaCC
    When Enter valid payment details "4111 1111 1111 1111" and "1025"  and "123"
    Then Validate Amount for Different Mailing Address Before Order at FSMSE_CourageCAOrderVisaCC Page
    # Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderVisaCC Page
    And Click on Place Order button
    Then Validate Amount for Different Mailing Address After Order at FSMSE_CourageCAOrderVisaCC Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order
