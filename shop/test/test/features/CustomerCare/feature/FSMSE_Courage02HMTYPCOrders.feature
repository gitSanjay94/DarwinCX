@smoke
Feature: Courage Special Cases - FSMSE Courage 02HMTYPC Orders
        Validate Courage Special Cases - FSMSE Courage 02HMTYPC Orders

  Scenario: Courage Special Cases - FSMSE 1 Courage 02HMTYPC Order
    Given User opens Courage Special Cases - FSMSE Courage 02HMTYPC Orders
    Then Validate Offer Has All Delivery Types text
    When Check 1 Year Print checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Check 1 Year Digital checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Check 1 Year Print and Digital checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Check Courage Calendar checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Enter values in Mailing and Billing Address form
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Tax Value at Courage02HMTYPCOrders Page
    Then Validate Amount Before Order at Courage02HMTYPCOrders Page
    And Click on Place Order button
    Then Validate Amount After Order at Courage02HMTYPCOrders Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order

  Scenario: Courage Special Cases - FSMSE 2 Courage 02HMTYPC Gift Order
    Given User opens Courage Special Cases - FSMSE Courage 02HMTYPC Orders
    Then Validate Offer Has All Delivery Types text
    When Check 1 Year Print checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Check 1 Year Digital checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Check 1 Year Print and Digital checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Check Courage Calendar checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Enter values in Mailing and Billing Address form
    And Check This Is A Gift checkbox
    And Enter values in Gift Recipient Mailing Address form
    Then Validate Per Gift text in Summary section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Gift Order Price Before Order at Courage02HMTYPCOrders Page
    And Click on Place Order button
    Then Validate Gift Order Price After Order at Courage02HMTYPCOrders Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order

  Scenario: Courage Special Cases - FSMSE 3 Courage 02HMTYPC Mail Add Diff Order
    Given User opens Courage Special Cases - FSMSE Courage 02HMTYPC Orders
    Then Validate Offer Has All Delivery Types text
    When Check 1 Year Print checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Check 1 Year Digital checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Check 1 Year Print and Digital checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Check Courage Calendar checkbox at FSMSE_Courage02HMTYPCOrders Page
    And Enter values in Mailing and Billing Address form
    When Check I have a different mailing address checkbox
    Then Validate Mailing Address text
    When Enter values in Mailing Address form
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Amount for Different Mailing Address Before Order at Courage02HMTYPCOrders Page
    And Click on Place Order button
    Then Validate Amount for Different Mailing Address After Order at Courage02HMTYPCOrders Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order
