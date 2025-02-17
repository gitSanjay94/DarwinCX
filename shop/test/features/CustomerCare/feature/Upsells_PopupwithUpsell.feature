@smoke 
Feature: Upsell Popup functionality

  Scenario: Validate Blank Values when Access Upsells_PopupwithUpsellPage
    Given User opens URL Upsells_PopupwithUpsellPage
    When Verify the Blank First Name Value at Upsells_PopupwithUpsell Page
    Then Verify the Blank Last Name Value at Upsells_PopupwithUpsell Page
    Then Verify the Blank Comapnay Name Value at Upsells_PopupwithUpsell Page
    Then Verify the Blank Job Title Value at Upsells_PopupwithUpsell Page
    And Verify the Blank Address1 Value at Upsells_PopupwithUpsell Page
    And Verify the Blank Address2 Value at Upsells_PopupwithUpsell Page
    And Verify the Blank City Value at Upsells_PopupwithUpsell Page
    Then Verify the Blank Postal Code Value at Upsells_PopupwithUpsell Page
    Then Verify the Blank Email Address Value at Upsells_PopupwithUpsell Page
    Then Verify the Country Value at Upsells_PopupwithUpsell Page
    Then Verify the Select  User Province at Upsells_PopupwithUpsell Page

  Scenario: Validate Upgrade Your Subscription element is not be visible
    Given User opens URL Upsells_PopupwithUpsellPage
    Then The Upgrade Your Subscription element should not be visible at Upsells_PopupwithUpsell Page

  Scenario: Validate upsell popup is displayed
    Given User opens URL Upsells_PopupwithUpsellPage
    Then The Upgrade Your Subscription element should not be visible at Upsells_PopupwithUpsell Page
    Then Enter values in Mailing and Billing Address form at Upsells_PopupwithUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Verify that the upsell popup is displayed correctly with upsell
    Then Click on Select Button in Upsell Popup at Upsells_PopupwithUpsell Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate upsell popup is displayed With Autorenew Checkbox
    Given User opens URL Upsells_PopupwithUpsellPage
    Then The Upgrade Your Subscription element should not be visible at Upsells_PopupwithUpsell Page
    Then Enter values in Mailing and Billing Address form at Upsells_PopupwithUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Verify that the upsell popup is displayed correctly with upsell
    Then Click on Select Button in Upsell Popup at Upsells_PopupwithUpsell Page
    Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderBillMe Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate upsell popup is displayed & order placed with Select Fist Bundle Option
    Given User opens URL Upsells_PopupwithUpsellPage
    Then Select Bundle Option
    # Then Validate the USD Total Amount in Summary for Bundle option
    Then The Upgrade Your Subscription element should not be visible at Upsells_PopupwithUpsell Page
    Then Enter values in Mailing and Billing Address form at Upsells_PopupwithUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Verify that the upsell popup is displayed correctly with upsell
    Then Click on Select Button First in Bundle Upsell Popup at Upsells_PopupwithUpsell Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate upsell popup is displayed & order placed with Select Second Bundle Option
    Given User opens URL Upsells_PopupwithUpsellPage
    Then Select Bundle Option
    # Then Validate the USD Total Amount in Summary for Bundle option
    Then The Upgrade Your Subscription element should not be visible at Upsells_PopupwithUpsell Page
    Then Enter values in Mailing and Billing Address form at Upsells_PopupwithUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Verify that the upsell popup is displayed correctly with upsell
    Then Click on Select Button second option in Bundle Upsell Popup at Upsells_PopupwithUpsell Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    #  Then Validate the Total Amount for Bundle Second option in Successful Transaction Page

  Scenario: Validate upsell popup is displayed & order placed with Select Second Bundle Option With Autorenew Checkbox
    Given User opens URL Upsells_PopupwithUpsellPage
    Then Select Bundle Option
    # Then Validate the USD Total Amount in Summary for Bundle option
    Then The Upgrade Your Subscription element should not be visible at Upsells_PopupwithUpsell Page
    Then Enter values in Mailing and Billing Address form at Upsells_PopupwithUpsell Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Verify that the upsell popup is displayed correctly with upsell
    Then Click on Select Button second option in Bundle Upsell Popup at Upsells_PopupwithUpsell Page
    Then Verify the Autorenew option is enabled at FSMSE_CourageCAOrderBillMe Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    #included script Upsell Popup NO Upsell in this script

  Scenario: Validate Upsell Popup NO Upsell
    Given User opens URL Upsells_PopupwithUpsellPage
    Then The Upgrade Your Subscription element should not be visible at Upsells_PopupwithUpsell Page
    Then Verify that the upsell popup is not displayed
