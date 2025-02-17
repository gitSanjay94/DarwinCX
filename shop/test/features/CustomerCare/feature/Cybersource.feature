@smoke
Feature: CyberSource Order Orders
        Validate CyberSource Order

  Scenario: CyberSource Order
    Given User opens CyberSource page
     And Enter values in Mailing and Billing Address form at Cyber Source Page
      When Enter valid payment detail
      And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
   

  Scenario: CyberSource Order Gift Order
    Given User opens CyberSource page
    And Enter values in Mailing and Billing Address form at Cyber Source Page
    And Check This Is A Gift checkbox at Cyber Source Page
    And Enter values in Gift Recipient Mailing Address form at Cyber Source Page
    When Enter valid payment detail
    Then Validate Gift Order Amount Before Order at Cyber Source Page
    And Click on Place Order button
    Then Validate Gift Order Amount After Order at Cyber Source Page
    Then Validate TRANSACTION SUCCESSFUL text
   
  Scenario: Courage Special Cases - FSMSE 3 Courage 02HCTYPC Mail Add Diff Order
    Given User opens CyberSource page
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
