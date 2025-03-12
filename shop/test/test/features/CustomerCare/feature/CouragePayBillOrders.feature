@smoke 
Feature: Test CouragePayBillOrders functionality
         Validate CouragePayBillOrders

  Scenario: 1 Order creation 'Bill Me' for Account and ZipCode
    Given User opens CouragePayBillOrders Page
    Then Validate "Courage Magazine Subscription Options" text in CouragePayBillOrders
    And Validate "Courage US International" text in CouragePayBillOrders
    When Select radio button under "Courage US International"
    Then Validate "Testing Cross Bundle" text in CouragePayBillOrders
    When Select "Test Offer Courage Print & Digital" check box
    Then Validate "ProductPB1133" to be Unchecked
    Then Validate Mailing and Billing Address text
    Then Validate "Order Number 1" text in CouragePayBillOrders
    When Enter values in Mailing and Billing Address form
    When Select Bill Me Later Payment Option
    When Fetch Total amount in Summary section in CouragePayBillOrders
    When Click "Place Order" button
    Then Validate TRANSACTION SUCCESSFUL text
    When Fetch Total price amount in TRANSACTION SUCCESSFUL section
    Then Validate Summary Total Amount and Total Price Amount

  Scenario: 3 Order creation 'Bill Me'
    Given User opens CouragePayBillOrders Page
    Then Validate "Courage Magazine Subscription Options" text in CouragePayBillOrders
    And Validate "Courage US International" text in CouragePayBillOrders
    When Select radio button under "Courage US International"
    Then Validate "Testing Cross Bundle" text in CouragePayBillOrders
    When Select "Test Offer Courage Print & Digital" check box
    Then Validate "ProductPB1133" to be Unchecked
    Then Validate Mailing and Billing Address text
    Then Validate "Order Number 1" text in CouragePayBillOrders
    When Enter values in Mailing and Billing Address form
    And Click "Add Gift Recipient" button in CouragePayBillOrders
    Then Validate "Order Number 2" text in CouragePayBillOrders
    When Fill "Gift Recipient Order Number 2" form
    And Click "Add Gift Recipient" button in CouragePayBillOrders
    Then Validate "Order Number 3" text in CouragePayBillOrders
    When Fill "Gift Recipient Order Number 3" form
    When Select Bill Me Later Payment Option
    When Fetch Total amount in Summary section in CouragePayBillOrders
    When Click "Place Order" button
    Then Validate TRANSACTION SUCCESSFUL text
    When Fetch Total Price Amount for 3 Order in TRANSACTION SUCCESSFUL section
    Then Validate Summary Total Amount and Total Price Amount for 3 Order

  Scenario: 5 Order creation 'Bill Me' for Account and Last Name
    Given User opens CouragePayBillOrders Page
    Then Validate "Courage Magazine Subscription Options" text in CouragePayBillOrders
    And Validate "Courage US International" text in CouragePayBillOrders
    When Select radio button under "Courage US International"
    Then Validate "Testing Cross Bundle" text in CouragePayBillOrders
    When Select "Test Offer Courage Print & Digital" check box
    Then Validate "ProductPB1133" to be Unchecked
    Then Validate Mailing and Billing Address text
    Then Validate "Order Number 1" text in CouragePayBillOrders
    When Enter values in Mailing and Billing Address form
    And Click "Add Gift Recipient" button in CouragePayBillOrders
    Then Validate "Order Number 2" text in CouragePayBillOrders
    When Fill "Gift Recipient Order Number 2" form
    And Click "Add Gift Recipient" button in CouragePayBillOrders
    Then Validate "Order Number 3" text in CouragePayBillOrders
    When Fill "Gift Recipient Order Number 3" form
     And Click "Add Gift Recipient" button in CouragePayBillOrders
    Then Validate "Order Number 4" text in CouragePayBillOrders
    When Fill "Gift Recipient Order Number 4" form
     And Click "Add Gift Recipient" button in CouragePayBillOrders
    Then Validate "Order Number 5" text in CouragePayBillOrders
    When Fill "Gift Recipient Order Number 5" form
    When Select Bill Me Later Payment Option
    When Fetch Total amount in Summary section in CouragePayBillOrders
    When Click "Place Order" button
    Then Validate TRANSACTION SUCCESSFUL text
    When Fetch Total Price Amount for 3 Order in TRANSACTION SUCCESSFUL section
    Then Validate Summary Total Amount and Total Price Amount for 3 Order
