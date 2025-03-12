@smoke 
Feature: Test billMeLaterRB Payment Request
         Validate billMeLaterRB Payment Request

  Scenario: Validate billMeLaterRB Payment Request
    Given User opens URL CCB_CourageCAOrderBillMePage
    When Verify the Blank First Name Value at CCB_CourageCAOrderBillMePage Page
    Then Verify the Blank Last Name Value at CCB_CourageCAOrderBillMePage Page
    Then Verify the Blank Comapnay Name Value at CCB_CourageCAOrderBillMePage Page
    Then Verify the Blank Job Title Value at CCB_CourageCAOrderBillMePage Page
    And Verify the Blank Address1 Value at CCB_CourageCAOrderBillMePage Page
    And Verify the Blank Address2 Value at CCB_CourageCAOrderBillMePage Page
    And Verify the Blank City Value at CCB_CourageCAOrderBillMePage Page
    Then Verify the Blank Postal Code Value at CCB_CourageCAOrderBillMePage Page
    Then Verify the Blank Email Address Value at CCB_CourageCAOrderBillMePage Page
    Then Verify the Country Value at CCB_CourageCAOrderBillMePage Page
    Then Verify the Select  User Province at CCB_CourageCAOrderBillMePage Page

  Scenario: Courage Special Cases - 2 CCB_CourageCAOrderBillMePage Order
    Given User opens URL CCB_CourageCAOrderBillMePage
    Then Enter values in Mailing and Billing Address form at CCB_CourageCAOrderBillMePage Page
    Then Select Bill Me Later Payment Option
    # When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Verify that Email Send to Recipient
