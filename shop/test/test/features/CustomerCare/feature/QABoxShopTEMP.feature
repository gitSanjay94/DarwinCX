
Feature: Test QA Box Shop TEMP
         Validate QA Box Shop TEMP

  Scenario: Validate PB-1000 TEMP Order
    Given User opens URL QA Box Shop TEMP
    Then Validate "Shipping Information" text
    And Validate "Recipient Information" text
    When Fill Recipient Information form
    Then Validate "Shipping Address" text
    And Fill Shipping Address form
    When Click "Continue" button
    And Fetch Total amount in Order Summary section
    Then Validate Total amount in Order Summary section to be "54.98"
    And Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click "Place Order" button
    Then Validate "Thanks for your purchase!" text
    And Validate "Shipping and Payment Information" text
    And Validate "Recipient and Purchaser" text
    And Validate "Summary" text
    When Fetch Total amount in Summary section
    Then Validate Total amount in Summary section to be "54.98"
    Then Validate Summary amount and Total amount

  Scenario: Validate PB-1000 TEMP Error msgs for Order
    Given User opens URL QA Box Shop TEMP
    Then Validate "Shipping Information" text
    And Validate "Recipient Information" text
    Then Validate "Shipping Address" text
    When Click "Place Order" button
    Then Validate "First Name is required" text
    And Validate "Last Name is required" text
    And Validate "Email is required" text
    And Validate "Address is required" text
    And Validate "City is required" text
    And Validate "Province or State is required" text
    And Validate "Postal code is required" text
    And Validate "Missing Required Fields" text

  Scenario: Validate PB-1000 TEMP Gift Order
    Given User opens URL QA Box Shop TEMP
    When Check "This is a Gift" checkbox
    Then Validate "Shipping Information" text
    And Validate "Recipient Information" text
    Then Validate "Shipping Address" text
    When Fill Recipient Information form for Gift Order
    And Fill Shipping Address form for Gift Order
    And Click "Continue" button
    Then Validate "Payment" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    When Fill Billing Information Form
    When Fill Billing Address Form
    And Click "Continue" 2 button
    And Fetch Total amount in Order Summary section
    Then Validate Total amount in Order Summary section to be "54.98"
    And Click "Place Order" button
    Then Validate "Thanks for your purchase!" text
    And Validate "Shipping and Payment Information" text
    And Validate "Summary" text
    When Fetch Total amount in Summary section
    Then Validate Total amount in Summary section to be "54.98"
    Then Validate Summary amount and Total amount

  Scenario: Validate PB-1000 TEMP Discount Gift Order
    Given User opens URL QA Box Shop TEMP
    When Check "This is a Gift" checkbox
    Then Validate "Shipping Information" text
    And Validate "Recipient Information" text
    Then Validate "Shipping Address" text
    When Fill Recipient Information form for Gift Order
    And Fill Shipping Address form for Gift Order
    And Click "Continue" button
    Then Validate "Payment" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    When Fill Billing Information Form
    When Fill Billing Address Form
    And Click "Continue" 2 button
    Then Validate "Have a coupon or discount code?" text
    When Click Coupon icon
    And fill Coupon Code "freeship"
    And Click "Apply" button
    Then Validate "freeship" coupon is applied
    Then Validate "free shipping" text
    When Fetch Order Summary discount amount
    And Fetch Total amount in Order Summary section
    Then Validate Total amount in Order Summary section to be "44.99"
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click "Place Order" button
    Then Validate "Thanks for your purchase!" text
    And Validate "Shipping and Payment Information" text
    And Validate "Summary" text
    And Fetch Summary coupon discount amount
    When Fetch Total amount in Summary section
    Then Validate Total amount in Summary section to be "44.99"
    Then Validate Summary amount and Total amount
    And Validate Order Summary discount amount and Summary coupon discount amount

  Scenario: Validate PB-1000 TEMP Discount Order
    Given User opens URL QA Box Shop TEMP
    Then Validate "Shipping Information" text
    And Validate "Recipient Information" text
    Then Validate "Shipping Address" text
    When Fill Recipient Information form
    And Fill Shipping Address form
    And Click "Continue" button
    Then Validate "Payment" text
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Validate "Have a coupon or discount code?" text
    When Click Coupon icon
    And fill Coupon Code "STAY15"
    And Click "Apply" button
    Then Validate "STAY15" coupon is applied
    When fill Coupon Code "freeship"
    And Click "Apply" button
    Then Validate "This coupon cannot be used with other coupons." text
    When Fetch Order Summary discount amount
    And Fetch Total amount in Order Summary section
    Then Validate Total amount in Order Summary section to be "48.23"
    When Click "Place Order" button
    Then Validate "Thanks for your purchase!" text
    And Validate "Shipping and Payment Information" text
    And Validate "Recipient and Purchaser" text
    And Validate "Summary" text
    And Fetch Summary coupon discount amount
    When Fetch Total amount in Summary section
    Then Validate Total amount in Summary section to be "48.23"
    Then Validate Summary amount and Total amount
    And Validate Order Summary discount amount and Summary coupon discount amount

  Scenario: Validate PB-1000 TEMP Error msgs for Gift Order
    Given User opens URL QA Box Shop TEMP
    When Check "This is a Gift" checkbox
    Then Validate "Shipping Information" text
    And Validate "Recipient Information" text
    Then Validate "Shipping Address" text
    And Verify the Recipient First Name text field has no value under Recipient Information section
    And Verify the Recipient Last Name text field has no value under Recipient Information section
    And Verify the Recipient Phone Number text field has no value under Recipient Information section
    And Verify the Recipient Email text field has no value under Recipient Information section
    And Verify the Recipient Address 1 text field has no value under Recipient Information section
    And Verify the Recipient Address 2 text field has no value under Recipient Information section
    And Verify the Recipient City text field has no value under Recipient Information section
    And Verify the Recipient Postal Code text field has no value under Recipient Information section
    And Verify the Recipient Country text field has value "Choose Country*" under Recipient Information section
    And Verify the Recipient Province text field has no value under Recipient Information section
    When Click "Place Order" button
    Then Validate "First Name is required" text for gift
    And Validate "Last Name is required" text for gift
    And Validate "Email address is missing" text for gift
    And Validate "Address is required" text for gift
    And Validate "City is required" text for gift
    And Validate "State is required" text for gift
    And Validate "Postal code is required" text for gift
    And Validate "Country is required" text
    And Validate "Missing Required Fields" text

  Scenario: Validate PB-1000 TEMP Error msg for Payment block
    Given User opens URL QA Box Shop TEMP
    Then Validate "Recipient Information" text
    When Fill Recipient Information form
    Then Validate "Shipping Address" text
    When Fill Shipping Address form
    When Click "Continue" button
    Then Validate "Payment" text
    When Enter valid payment details "4242 4242 4242 4243" and "1024"  and "123"
    When Click "Place Order" button
    Then Validate "Missing Required Fields" text
