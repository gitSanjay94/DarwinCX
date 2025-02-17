
@smoke12345


Feature: FSMPE Pay Bill
        Validate FSMPE Pay Bill

  Scenario: Validate Pay Bill. Account_Last Name No Payment
    Given User opens FSMPE_PayBill
    Then Validate "Enter your account number to pay outstanding invoice" text
    Then Validate Purchaser value as blank in Pay Bill
    Then Validate Postal Code value as blank in Pay Bill
    When Click "Here" link in Pay Bill
    Then Validate Last Name value as blank in Pay Bill
    When Fill Purchaser field with '463218222' in Pay Bill
    When Fill Last Name field with 'demo lastname' in Pay Bill
    When Click "Submit" button in Pay Bill
    Then Validate "There are no outstanding invoices" text

  Scenario: Validate Pay Bill. Account_Last Name No Payment Error msg
    Given User opens FSMPE_PayBill
    Then Validate "Enter your account number to pay outstanding invoice" text
    Then Validate Purchaser value as blank in Pay Bill
    Then Validate Postal Code value as blank in Pay Bill
    When Click "Here" link in Pay Bill
    Then Validate Last Name value as blank in Pay Bill
    When Fill Purchaser field with '463218222' in Pay Bill
    When Fill Last Name field with 'demo lastname' in Pay Bill
    When Click "Submit" button in Pay Bill
    Then Validate "There are no outstanding invoices" text

  Scenario: Pay Bill. Account_Last Name with Payment Error msg
    Given User opens FSMPE PayBill
    Then Validate "Enter your account number to pay outstanding invoice" text
    Then Validate Purchaser value as blank in Pay Bill
    Then Validate Postal Code value as blank in Pay Bill
    When Click "Here" link in Pay Bill
    Then Validate Last Name value as blank in Pay Bill
    When Fill Purchaser field with '6960401' in Pay Bill
    When Fill Last Name field with 'DeRose' in Pay Bill
    When Click "Submit" button in Pay Bill
    Then Validate "There are no outstanding invoices" text

  Scenario: Pay Bill. Account_Postal Code No Payment
    Given User opens FSMPE PayBill
    Then Validate "Enter your account number to pay outstanding invoice" text
    Then Validate Purchaser value as blank in Pay Bill
    Then Validate Postal Code value as blank in Pay Bill
    When Click "Here" link in Pay Bill
    Then Validate Last Name value as blank in Pay Bill
    When Fill Purchaser field with '6960401' in Pay Bill
    When Fill Last Name field with 'DeRose' in Pay Bill
    When Click "Submit" button in Pay Bill
    Then Validate "There are no outstanding invoices" text

