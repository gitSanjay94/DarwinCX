@smoke
Feature: Testing of EB_Golf Page

  Scenario: Validate if the payment element is displaying on the page
    Given User opens EB_Golf_Url
    Then Validate "Payment Method" text on EB_Golf page
    And Verify the "Credit Card" radio button is checked
    And Verify the "Bill Me Later" radio button is unchecked
    And Validate "CREDIT CARD" text on EB_Golf page
    And Validate "CARD NUMBER" text on EB_Golf page
    And Verify the blank Card Number input value on EB_Golf page
    And Validate "EXPIRY DATE" text on EB_Golf page
    And Verify the "Month" drop down value on EB_Golf page
    And Verify the "Year" drop down value on EB_Golf page
    And Validate "CVV" text on EB_Golf page
    And Verify the blank Cvv input value on EB_Golf page

  Scenario: Validate blank values in Billing Address and Gift Recipient Mailing Address form
    Given User opens EB_Golf_Url
    Then Validate "Send a 1-Year Gift of GOLF below" text on EB_Golf page
    And Validate "United States Offer" text on EB_Golf page
    And Validate "Billing Address" text on EB_Golf page
    And Verify the blank User First Name input value on EB_Golf page
    And Verify the blank User Last Name input value on EB_Golf page
    And Verify the blank User Address1 input value on EB_Golf page
    And Verify the blank User Address2 input value on EB_Golf page
    And Verify the blank User City input value on EB_Golf page
    And Verify the blank User Postal Code input value on EB_Golf page
    And Verify the blank User Email input value on EB_Golf page
    And Verify the blank User Phone Number input value on EB_Golf page
    And Verify the User Country value on EB_Golf page
    And Verify the User Province value on EB_Golf page
    And Validate "Gift Recipient Mailing Address" text on EB_Golf page
    And Validate "Order Number 1" text on EB_Golf page
    And Verify the blank Recipient First Name input value on EB_Golf page
    And Verify the blank Recipient Last Name input value on EB_Golf page
    And Verify the blank Recipient Address1 input value on EB_Golf page
    And Verify the blank Recipient Address2 input value on EB_Golf page
    And Verify the blank Recipient City input value on EB_Golf page
    And Verify the blank Recipient Postal Code input value on EB_Golf page
    And Verify the blank Recipient Email input value on EB_Golf page
    And Verify the blank Recipient Phone Number input value on EB_Golf page
    And Verify the Recipient Country value on EB_Golf page
    And Verify the Recipient Province value on EB_Golf page


  Scenario: Place Order with valid payment information
    Given User opens EB_Golf_Url
    Then Validate "Send a 1-Year Gift of GOLF below" text on EB_Golf page
    And Validate "United States Offer" text on EB_Golf page
    And Validate "Billing Address" text on EB_Golf page
    When Fill "Billing Address" form on EB_Golf page
    Then Validate "Gift Recipient Mailing Address" text on EB_Golf page
    And Validate "Order Number 1" text on EB_Golf page
    Then Validate "Payment Method" text on EB_Golf page
    When Enter valid payment details "4242 4242 4242 4242" and "7" and "26" and "123"
    And Click "Place Order" button on EB_Golf page
      When Fill "Gift Recipient Mailing Address" form on EB_Golf page
      And Click "Place Order" button on EB_Golf page
    Then Validate "TRANSACTION SUCCESSFUL" text on EB_Golf page
    Then Validate "Your order has been accepted successfully" text on EB_Golf page
    Then Validate "TRANSACTION SUCCESSFUL" text on EB_Golf page
    Then Validate "Your order has been accepted successfully" text on EB_Golf page

  Scenario: Place Order with Bill Me Later option
    Given User opens EB_Golf_Url
    Then Validate "Send a 1-Year Gift of GOLF below" text on EB_Golf page
    And Validate "United States Offer" text on EB_Golf page
    And Validate "Billing Address" text on EB_Golf page
    When Fill "Billing Address" form on EB_Golf page
    Then Validate "Gift Recipient Mailing Address" text on EB_Golf page
    And Validate "Order Number 1" text on EB_Golf page
    When Fill "Gift Recipient Mailing Address" form on EB_Golf page
    Then Validate "Payment Method" text on EB_Golf page
    And Verify the "Bill Me Later" radio button is unchecked
    When Check "Bill Me Later" option on EB_Golf page
    And Click "Place Order" button on EB_Golf page
    Then Validate "TRANSACTION SUCCESSFUL" text on EB_Golf page
    Then Validate "Your order has been accepted successfully" text on EB_Golf page

  Scenario: Validate the error messages while payment
    Given User opens EB_Golf_Url
    Then Validate "Send a 1-Year Gift of GOLF below" text on EB_Golf page
    And Validate "United States Offer" text on EB_Golf page
    And Validate "Billing Address" text on EB_Golf page
    When Fill "Billing Address" form on EB_Golf page
    Then Validate "Gift Recipient Mailing Address" text on EB_Golf page
    And Validate "Order Number 1" text on EB_Golf page
    When Fill "Gift Recipient Mailing Address" form on EB_Golf page
    Then Validate "Payment Method" text on EB_Golf page
    When Click "Place Order" button on EB_Golf page
    Then Validate "Please enter a valid credit card number." text on EB_Golf page
    When Enter valid payment details "4242 4242 4242 4242" and "8" and "25" and ""
    When Click "Place Order" button on EB_Golf page
    Then Validate "Please enter expiry date." text on EB_Golf page
    When Enter valid payment details "4242 4242 4242 4242" and "Month" and "Year" and "123"
    When Click "Place Order" button on EB_Golf page
    Then Validate "Please enter expiry date." text on EB_Golf page
