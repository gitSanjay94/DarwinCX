 @smoke
Feature: Test FSMSE_Ireland CA Order With Visa CC Payment Option
         Validate FSMSE_Ireland CA Order With Visa CC Payment Option


  Scenario: Validate FSMSE_Ireland CA Order With Visa CC Page Blank fields Values
    Given User opens URL FSMSE_IrelandCAOrderVisaCC
    When Verify the Blank First Name Value at FSMSE_IrelandCAOrderVisaCC Page
    Then Verify the Blank Last Name Value at FSMSE_IrelandCAOrderVisaCC Page
    And Verify the Blank Address1 Value at FSMSE_IrelandCAOrderVisaCC Page
    And Verify the Blank Address2 Value at FSMSE_IrelandCAOrderVisaCC Page
    And Verify the Blank City Value at FSMSE_IrelandCAOrderVisaCC Page
    Then Verify the Blank Postal Code Value at FSMSE_IrelandCAOrderVisaCC Page
    Then Verify the Blank Email Address Value at FSMSE_IrelandCAOrderVisaCC Page
    Then Verify the Country Value at FSMSE_IrelandCAOrderVisaCC Page
    Then Verify the Select  User Province at FSMSE_IrelandCAOrderVisaCC Page
    Then Validate Ireland text

  Scenario: Validate FSMSE_Ireland CA Order process
    Given User opens URL FSMSE_IrelandCAOrderVisaCC
    Then Select the Canada & Internation Offers Option at FSMSE_IrelandCAOrderVisaCC Page
    And Select the Canada Country Available Subscription Option at FSMSE_IrelandCAOrderVisaCC Page
    Then Enter values in Mailing and Billing Address form at FSMSE_IrelandCAOrderVisaCC Page
    Then Validate number of char in Billing Address 2 text field to be 32 at FSMSE_IrelandCAOrderVisaCC
    When Enter valid payment details "4111 1111 1111 1111" and "1025"  and "123"
    Then Validate Amount Before Order at FSMSE_IrelandCAOrderVisaCC Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Amount After Order at FSMSE_IrelandCAOrderVisaCC Page
    Then Validate Total Amount before & after Order

  Scenario: Validate FSMSE_Ireland Gift Recipient order proces
    Given User opens URL FSMSE_IrelandCAOrderVisaCC
    Then Select the Canada & Internation Offers Option at FSMSE_IrelandCAOrderVisaCC Page
    And Select the Canada Country Available Subscription Option at FSMSE_IrelandCAOrderVisaCC Page
    Then Enter values in Mailing and Billing Address form at FSMSE_IrelandCAOrderVisaCC Page
    And Check This Is A Gift checkbox at FSMSE_IrelandCAOrderVisaCC Page
    And Enter values in Gift Recipient Mailing Address form at at FSMSE_IrelandCAOrderVisaCC Page
    Then Validate number of char in Gift Recipient Address text field to be 32 at FSMSE_IrelandCAOrderVisaCC
    When Enter valid payment details "4111 1111 1111 1111" and "1025"  and "123"
    Then Validate Gift Order Amount Before Order at FSMSE_IrelandCAOrderVisaCC Page
    And Click on Place Order button
    Then Validate Gift Order Amount After Order at FSMSE_IrelandCAOrderVisaCC Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order

  Scenario: Validate FSMSE_Ireland with Differnt mailing address
    Given User opens URL FSMSE_IrelandCAOrderVisaCC
    Then Select the Canada & Internation Offers Option at FSMSE_IrelandCAOrderVisaCC Page
    And Select the Canada Country Available Subscription Option at FSMSE_IrelandCAOrderVisaCC Page
    Then Enter values in Mailing and Billing Address form at FSMSE_IrelandCAOrderVisaCC Page
    And Check I have a different mailing address checkbox at FSMSE_IrelandCAOrderVisaCC page
    And Enter values in Mailing Address form at FSMSE_IrelandCAOrderVisaCC page
    Then Validate Mailing Address text at FSMSE_IrelandCAOrderVisaCCPage
    Then Validate number of char in Different Billing Address text field to be 32 at FSMSE_IrelandCAOrderVisaCC
    When Enter valid payment details "4111 1111 1111 1111" and "1025"  and "123"
    Then Validate Amount for Different Mailing Address Before Order at FSMSE_IrelandCAOrderVisaCC Page
    And Click on Place Order button
    Then Validate Amount for Different Mailing Address After Order at FSMSE_IrelandCAOrderVisaCC Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order
 
 Scenario: Validate FSMSE_Ireland CA Order process for Ireland Country
    Given User opens URL FSMSE_IrelandCAOrderVisaCC
    Then Select the Canada & Internation Offers Option at FSMSE_IrelandCAOrderVisaCC Page
    And  Select the International Available Subscription Option at FSMSE_IrelandCAOrderVisaCC Page
    Then Enter values in Mailing and Billing Address form for Ireland Country at FSMSE_IrelandCAOrderVisaCC Page
    Then Validate number of char in Billing Address 2 text field to be 32 at FSMSE_IrelandCAOrderVisaCC
    When Enter valid payment details "4111 1111 1111 1111" and "1025"  and "123"
    Then Validate Ireland Country Specific Amount Before Order at FSMSE_IrelandCAOrderVisaCC Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Ireland Country Specific Amount After Order at FSMSE_IrelandCAOrderVisaCC Page
    Then Validate Total Amount before & after Order

   

    
