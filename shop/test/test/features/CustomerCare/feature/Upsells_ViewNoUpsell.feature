@smoke
Feature: Upsell View With No Upsell functionality
         

  Scenario: Validate Elements at  Upsell View With No Upsell Page 

    Given User opens URL Upsells_ViewNoUpsellPage
    When  Verify the Blank First Name Value at Upsells_ViewNoUpsell Page
    Then  Verify the Blank Last Name Value at Upsells_ViewNoUpsell Page
    Then  Verify the Blank Comapnay Name Value at Upsells_ViewNoUpsell Page
    Then  Verify the Blank Job Title Value at Upsells_ViewNoUpsell Page
    And   Verify the Blank Address1 Value at Upsells_ViewNoUpsell Page
    And   Verify the Blank Address2 Value at Upsells_ViewNoUpsell Page
    And   Verify the Blank City Value at Upsells_ViewNoUpsell Page
    Then  Verify the Blank Postal Code Value at Upsells_ViewNoUpsell Page
    Then  Verify the Blank Email Address Value at Upsells_ViewNoUpsell Page
    Then  Verify the Country Value at Upsells_ViewNoUpsell Page
    Then  Verify the Select  User Province at Upsells_ViewNoUpsell Page
  
    Scenario: Validate that upsell option is visible
    Given User opens URL Upsells_ViewNoUpsellPage
    Then  Select Bundle Option
    Then  The Upgrade Your Subscription element should be visible
    

    Scenario: Validate order with upsell option is visible but not selected
    Given User opens URL Upsells_ViewNoUpsellPage
    Then  Select Bundle Option
    # Then  Validate the USD Total Amount in Summary
    Then  The Upgrade Your Subscription element should be visible
    Then  Enter values in Mailing and Billing Address form at Upsells_ViewNoUpsell Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate the Total Amount in Successful Transaction Page

    Scenario: Validate order with upsell option is visible but not selected with Different Mailing Address
    Given User opens URL Upsells_ViewNoUpsellPage
    Then  Select Bundle Option
    # Then  Validate the USD Total Amount in Summary
    Then  The Upgrade Your Subscription element should be visible
    Then  Enter values in Mailing and Billing Address form at Upsells_ViewNoUpsell Page
    And   Check I have a different mailing address checkbox at Courage_CA3Gift page
    And  Enter values in Different Mailing and Billing Address form at Upsells_ViewNoUpsell Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate the Total Amount for Different Mailing Address in Successful Transaction Page

Scenario: Validate order with upsell option is visible but not selected with Different Mailing Address with Autorenew Checkbox
    Given User opens URL Upsells_ViewNoUpsellPage
    Then  Select Bundle Option
    # Then  Validate the USD Total Amount in Summary
    Then  The Upgrade Your Subscription element should be visible
    Then  Enter values in Mailing and Billing Address form at Upsells_ViewNoUpsell Page
    And   Check I have a different mailing address checkbox at Courage_CA3Gift page
    And  Enter values in Different Mailing and Billing Address form at Upsells_ViewNoUpsell Page
    Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderBillMe Page
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And  Click on Place Order button 
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate the Total Amount for Different Mailing Address in Successful Transaction Page
 



