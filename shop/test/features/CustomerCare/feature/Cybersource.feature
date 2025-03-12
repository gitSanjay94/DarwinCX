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
    Then Verify Email Send to Recipient from Cyber Source Page
    Then Verify Email Content at Maiinator Email
   #issue raised DEV-8931

  Scenario: CyberSource Mail Add Diff Order
    Given User opens CyberSource page
    And Enter values in Mailing and Billing Address form at Cyber Source Page
    When Check I have a different mailing address checkbox at Cyber Source Page
    When Enter values in Mailing Address form at Cyber Source Page
    When Enter valid payment detail
    Then Validate Different Mailing Address Order Amount Before Order at Cyber Source Page
    And Click on Place Order button
    # And Enter values in Mailing and Billing Address form at Cyber Source Page
    # When Enter valid payment detail
    # And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    # Then Validate Different Mailing Address Order Amount After Order at Cyber Source Page
    # Then Validate Total Amount before & after Order
