 @smoke005566
Feature: Testing Pre-Authorized Debit Transactions through the new Stripe Payment Element

 
  Scenario: Test Pre-Authorized Debit Transactions with sort code 108800 and account number 00012345
    Given User opens URL DirectDebit
    Then Enter values in Mailing and Billing Address form at DirectDebit Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click at Bacs Direct Debit
    Then Fill the Email Address
    When Fill the Sort Code with "108800"
    Then Fill the Account Number with "00012345"
    Then Fill the Full Name
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Click on Confirm Button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Test Pre-Authorized Debit Transactions with sort code 108800 and account number 90012345
    Given User opens URL DirectDebit
    Then Enter values in Mailing and Billing Address form at DirectDebit Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click at Bacs Direct Debit
    Then Fill the Email Address
    When Fill the Sort Code with "108800"
    Then Fill the Account Number with "90012345"
    Then Fill the Full Name
    Then Select the term condition check box
    Then Click on Place Order Button
   Then Select the term condition check box
    Then Click on Place Order Button
    Then Click on Confirm Button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Test Pre-Authorized Debit Transactions with sort code 108800 and account number 33333335
    Given User opens URL DirectDebit
    Then Enter values in Mailing and Billing Address form at DirectDebit Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click at Bacs Direct Debit
    Then Fill the Email Address
    When Fill the Sort Code with "108800"
    Then Fill the Account Number with "90012345"
    Then Fill the Full Name
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Click on Confirm Button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Test Pre-Authorized Debit Transactions with sort code 108800 and account number 93333335
    Given User opens URL DirectDebit
    Then Enter values in Mailing and Billing Address form at DirectDebit Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click at Bacs Direct Debit
    Then Fill the Email Address
    When Fill the Sort Code with "108800"
    Then Fill the Account Number with "93333335"
    Then Fill the Full Name
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Click on Confirm Button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Test Pre-Authorized Debit Transactions with sort code 108800 and account number 92222227
    Given User opens URL DirectDebit
    Then Enter values in Mailing and Billing Address form at DirectDebit Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click at Bacs Direct Debit
    Then Fill the Email Address
    When Fill the Sort Code with "108800"
    Then Fill the Account Number with "92222227"
    Then Fill the Full Name
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Click on Confirm Button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Test Pre-Authorized Debit Transactions with sort code 108800 and account number 55555559
    Given User opens URL DirectDebit
    Then Enter values in Mailing and Billing Address form at DirectDebit Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click at Bacs Direct Debit
    Then Fill the Email Address
    When Fill the Sort Code with "108800"
    Then Fill the Account Number with "55555559"
    Then Fill the Full Name
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Click on Confirm Button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Test Pre-Authorized Debit Transactions with sort code 108800 and account number 00033333
    Given User opens URL DirectDebit
    Then Enter values in Mailing and Billing Address form at DirectDebit Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click at Bacs Direct Debit
    Then Fill the Email Address
    When Fill the Sort Code with "108800"
    Then Fill the Account Number with "00033333"
    Then Fill the Full Name
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Click on Confirm Button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Test Pre-Autorized Debit Transaction Error with Sort code 108800 and Account number 00044444
    Given User opens URL DirectDebit
    Then Enter values in Mailing and Billing Address form at DirectDebit Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click at Bacs Direct Debit
    Then Fill the Email Address
    When Fill the Sort Code with "108800"
    Then Fill the Account Number with "00044444"
    Then Fill the Full Name
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Select the term condition check box
    Then Click on Place Order Button
    Then Click on Confirm Button
    Then See the error message "The bank account details you have provided are invalid. "
    # Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Test Pre-Autorized Debit Transaction Error with Sort code 108800 and Account number 34343434
    Given User opens URL DirectDebit
    Then Enter values in Mailing and Billing Address form at DirectDebit Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click at Bacs Direct Debit
    Then Fill the Email Address
    When Fill the Sort Code with "108800"
    Then Fill the Account Number with "34343434"
    Then Fill the Full Name
    Then Select the term condition check box
    Then Click on Place Order Button
   Then Select the term condition check box
    Then Click on Place Order Button
    Then Click on Confirm Button
    Then See the error message "could not make payment"
    # Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Test Pre-Autorized Debit Transaction Error with Sort code 108800 and Account number 12121212
    Given User opens URL DirectDebit
    Then Enter values in Mailing and Billing Address form at DirectDebit Page
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    Then Click at Bacs Direct Debit
    Then Fill the Email Address
    When Fill the Sort Code with "108800"
    Then Fill the Account Number with "12121212"
    Then Fill the Full Name
    Then Select the term condition check box
    Then Click on Place Order Button
   Then Select the term condition check box
    Then Click on Place Order Button
    Then Click on Confirm Button
    Then See the error message "could not make payment"
    # Then Validate TRANSACTION SUCCESSFUL text
