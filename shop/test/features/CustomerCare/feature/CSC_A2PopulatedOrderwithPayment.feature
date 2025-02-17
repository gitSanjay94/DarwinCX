
@smokejp

Feature: A2 Populated Order with Payment
         Validate Test populated order with payment details

  Scenario: Validate Test populated order with payment details
    Given User opens A2PopulatedOrderwithPayment Page
    When  Verify the First Name Value at URL A2PopulatedOrderwithPayment Page
    Then  Verify the Last Name Value at URL A2PopulatedOrderwithPayment Page
    And   Verify the Address1 Value at URL A2PopulatedOrderwithPayment Page
    And   Verify the Blank Address2 Value at URL A2PopulatedOrderwithPayment Page
    And  Verify the City Value at URL A2PopulatedOrderwithPayment Page
    Then Verify the Postal Code Value at URL A2PopulatedOrderwithPayment Page
    Then  Verify the Email Address Value at URL A2PopulatedOrderwithPayment Page
    Then  Verify the Country Value at URL A2PopulatedOrderwithPayment Page
    Then  Verify the User Province at URL A2PopulatedOrderwithPayment Page
    Then Click on Pay Order link Button at URL A2PopulatedOrderwithPayment Page
    # Then  Verify the alert message for product unavailable in Canada country at URL A2PopulatedOrderwithPayment Page
    