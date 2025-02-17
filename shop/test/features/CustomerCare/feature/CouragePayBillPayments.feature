@smoke 
Feature: Courage Pay Bill Payments
        Validate Courage Pay Bill Payments 

  Scenario: Payment via Account and ZipCode
    Given User opens CouragePayBillPaymentsPage PayBill
    Then Validate "Enter your account number to pay outstanding invoice" text in CouragePayBillPaymentsPage
    When Fill Purchaser field with '602133225' in CouragePayBillPaymentsPage Pay Bill
    When Fill Postal Code field with 'M2N 4J5' in CouragePayBillPaymentsPage Pay Bill
    When Click "Submit" button in CouragePayBillPaymentsPage Pay Bill
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    When Click on "Pay Bill" button in CouragePayBillPaymentsPage
    Then Validate "Thank you for paying your outstanding bill" text in CouragePayBillPaymentsPage
    Given User opens CouragePayBillPaymentsPage Renewal
    Then Validate "Enter your account number to renew" text in CouragePayBillPaymentsPage
    When Fill Purchaser field with '602133225' in CouragePayBillPaymentsPage Pay Bill
    When Fill Postal Code field with 'M2N 4J5' in CouragePayBillPaymentsPage Pay Bill
    When Click on "Submit" button in CouragePayBillPaymentsPage
    Then Validate "We found your account! Please scroll down and make your selection" text in CouragePayBillPaymentsPage
    When Check "Available Renewals" check box in CouragePayBillPaymentsPage
    When Click on "Renew" button in CouragePayBillPaymentsPage
    When Select Bill Me Later Payment Option
    When Click "Place Order" button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Prepopulated CC Payment
    Given User opens CPBP PrepopulatedCCPayment
    Then Validate "Enter your account number to pay outstanding invoice" text
    Then Validate Purchaser value as blank in Pay Bill
    Then Validate Postal Code value as blank in Pay Bill
    When Fill Purchaser field with '704456615' in Pay Bill
    When Fill Postal Code field with "N9A9Z9" in Pay Bill
    When Click "Submit" button in Pay Bill
    Then Validate "There are no outstanding invoices" text

  Scenario: Payment via Account and LastName
    Given User opens CouragePayBillPaymentsPage PayBill
    Then Validate "Enter your account number to pay outstanding invoice" text in CouragePayBillPaymentsPage
    When Fill Purchaser field with '602133225' in CouragePayBillPaymentsPage Pay Bill
    When Click "Here" link in CouragePayBillPaymentsPage Pay Bill
    When Fill Last Name field with 'conditional' in CouragePayBillPaymentsPage Pay Bill
    When Click "Submit" button in CouragePayBillPaymentsPage Pay Bill
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    When Click on "Pay Bill" button in CouragePayBillPaymentsPage
    Then Validate "Thank you for paying your outstanding bill" text in CouragePayBillPaymentsPage
    Given User opens CouragePayBillPaymentsPage Renewal
    Then Validate "Enter your account number to renew" text in CouragePayBillPaymentsPage
    When Fill Purchaser field with '602133225' in CouragePayBillPaymentsPage Pay Bill
    When Click on "Here" link in CouragePayBillPaymentsPage
    When Fill Last Name field with 'conditional' in CouragePayBillPaymentsPage Pay Bill
    When Click on "Submit" button in CouragePayBillPaymentsPage
    Then Validate "We found your account! Please scroll down and make your selection" text in CouragePayBillPaymentsPage
    When Check "Available Renewals" check box in CouragePayBillPaymentsPage
    When Click on "Renew" button in CouragePayBillPaymentsPage
    When Select Bill Me Later Payment Option
    When Click "Place Order" button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Prepopulated CC Payment
    Given User opens CPBP PrepopulatedCCPayment
    Then Validate "Enter your account number to pay outstanding invoice" text
    Then Validate Purchaser value as blank in Pay Bill
    Then Validate Postal Code value as blank in Pay Bill
    When Fill Purchaser field with '704456615' in Pay Bill
    When Fill Postal Code field with "N9A9Z9" in Pay Bill
    When Click "Submit" button in Pay Bill
    Then Validate "There are no outstanding invoices" text
