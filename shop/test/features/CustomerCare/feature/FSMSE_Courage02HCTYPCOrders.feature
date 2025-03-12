@smoke 
Feature: Courage Special Cases - FSMSE Courage 02HCTYPC Orders
        Validate Courage Special Cases - FSMSE Courage 02HCTYPC Orders

  Scenario: Courage Special Cases - FSMSE 1 Courage 02HCTYPC Order
    Given User opens Courage Special Cases - FSMSE Courage 02HCTYPC Orders
    Then Validate Offer Has All Delivery Types text at FSMSE_Courage02HCTYPCOrders Page
    When Select offers from the drop downs at FSMSE_Courage02HCTYPCOrders Page
    And Enter values in Mailing and Billing Address form at FSMSE_Courage02HCTYPCOrders Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Tax Value
    Then Validate Amount Before Order
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Amount After Order
    Then Validate Total Amount before & after Order

  Scenario: Courage Special Cases - FSMSE  2 Courage 02HCTYPC Gift Order
    Given User opens Courage Special Cases - FSMSE Courage 02HCTYPC Orders
    Then Validate Offer Has All Delivery Types text at FSMSE_Courage02HCTYPCOrders Page
    When Select offers from the drop downs at FSMSE_Courage02HCTYPCOrders Page
    And Enter values in Mailing and Billing Address form at FSMSE_Courage02HCTYPCOrders Page
    And Check This Is A Gift checkbox at FSMSE_Courage02HCTYPCOrders Page
    And Enter values in Gift Recipient Mailing Address form at FSMSE_Courage02HCTYPCOrders Page
    Then Validate Per Gift text in Summary section at FSMSE_Courage02HCTYPCOrders Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Gift Order Amount Before Order at FSMSE_Courage02HCTYPCOrders Page
    And Click on Place Order button
    Then Validate Gift Order Amount After Order at FSMSE_Courage02HCTYPCOrders Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order

  Scenario: Courage Special Cases - FSMSE 3 Courage 02HCTYPC Mail Add Diff Order
    Given User opens Courage Special Cases - FSMSE Courage 02HCTYPC Orders
    Then Validate Offer Has All Delivery Types text at FSMSE_Courage02HCTYPCOrders Page
    When Select offers from the drop downs at FSMSE_Courage02HCTYPCOrders Page
    And Enter values in Mailing and Billing Address form at FSMSE_Courage02HCTYPCOrders Page
    When Check I have a different mailing address checkbox at FSMSE_Courage02HCTYPCOrders Page
    Then Validate Mailing Address text at FSMSE_Courage02HCTYPCOrders Page
    When Enter values in Mailing Address form at FSMSE_Courage02HCTYPCOrders Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate Different Mailing Address Order Amount Before Order at FSMSE_Courage02HCTYPCOrders Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Different Mailing Address Order Amount After Order at FSMSE_Courage02HCTYPCOrders Page
    Then Validate Total Amount before & after Order
