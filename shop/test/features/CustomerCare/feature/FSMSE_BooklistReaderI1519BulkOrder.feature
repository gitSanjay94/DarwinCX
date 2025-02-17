@smoke
Feature: Test FSMSE_Booklist Reader I1519 Bulk Order
         Validate FSMSE_Booklist Reader I1519 Bulk Order

  Scenario: Validate FSMSE_Booklist Page Blank fields Values
    Given User opens URL FSMSE_BooklistReaderI1519BulkOrder
    When Verify the Blank First Name Value at FSMSE_BooklistReaderI1519BulkOrder Page
    Then Verify the Blank Last Name Value at FSMSE_BooklistReaderI1519BulkOrder Page
    # Then Verify the Blank Comapnay Name Value at FSMSE_BooklistReaderI1519BulkOrder Page
    # Then Verify the Blank Job Title Value at FSMSE_BooklistReaderI1519BulkOrder Page
    And Verify the Blank Address1 Value at FSMSE_BooklistReaderI1519BulkOrder Page
    # And Verify the Blank Address2 Value at FSMSE_BooklistReaderI1519BulkOrder Page
    # And Verify the Blank City Value at FSMSE_BooklistReaderI1519BulkOrder Page
    Then Verify the Blank Postal Code Value at FSMSE_BooklistReaderI1519BulkOrder Page
    Then Verify the Blank Email Address Value at FSMSE_BooklistReaderI1519BulkOrder Page
    Then Verify the Country Value at FSMSE_BooklistReaderI1519BulkOrder Page

  Scenario: Validate FSMSE_Ireland CA Order process
    Given User opens URL FSMSE_BooklistReaderI1519BulkOrder
    Then Select Offers Quantity at FSMSE_BooklistReaderI1519BulkOrder Page
    Then Enter values in Mailing and Billing Address form at FSMSE_BooklistReaderI1519BulkOrder Page
    Then Validate number of char in Billing Address 2 text field to be 32 at FSMSE_BooklistReaderI1519BulkOrder
    When Enter valid payment details "4111 1111 1111 1111" and "1025"  and "123"
    Then Validate Amount Before Order at FSMSE_BooklistReaderI1519BulkOrder Page
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Amount After Order at FSMSE_BooklistReaderI1519BulkOrder Page
    Then Validate Total Amount before & after Order

  Scenario: Validate FSMSE_Ireland with Differnt mailing address
    Given User opens URL FSMSE_BooklistReaderI1519BulkOrder
    # Then Select the Canada & Internation Offers Option at FSMSE_BooklistReaderI1519BulkOrder Page
    # And Select the Canada Country Available Subscription Option at FSMSE_BooklistReaderI1519BulkOrder Page
    Then Select Offers Quantity at FSMSE_BooklistReaderI1519BulkOrder Page
    Then Enter values in Mailing and Billing Address form at FSMSE_BooklistReaderI1519BulkOrder Page
    And Check I have a different mailing address checkbox at FSMSE_BooklistReaderI1519BulkOrder page
    And Enter values in Mailing Address form at FSMSE_BooklistReaderI1519BulkOrder page
    Then Validate Mailing Address text at FSMSE_BooklistReaderI1519BulkOrderPage
    Then Validate number of char in Different Billing Address text field to be 32 at FSMSE_BooklistReaderI1519BulkOrder
    When Enter valid payment details "4111 1111 1111 1111" and "1025"  and "123"
    Then Validate Amount for Different Mailing Address Before Order at FSMSE_BooklistReaderI1519BulkOrder Page
    And Click on Place Order button
    Then Validate Amount for Different Mailing Address After Order at FSMSE_BooklistReaderI1519BulkOrder Page
    Then Validate TRANSACTION SUCCESSFUL text
    Then Validate Total Amount before & after Order
