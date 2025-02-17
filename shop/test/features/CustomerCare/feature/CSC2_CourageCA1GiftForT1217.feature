@smoke 
Feature: Test Courage CA 1 Gift for T1217
         Validate Courage CA 1 Gift for T1217

  Scenario: Validate Courage CA 1 Gift for T1217
    Given User opens URL CSC2_CourageCA1Gift32charsforT1216
    Then Verify the first name text field has no value
    And Verify the last name text field has no value
    And Verify the company text field has no value
    And Verify the job title text field has no value
    And Verify the address 1 text field has no value
    And Verify the city text field has no value
    And Verify the postal code text field has no value
    And Verify the phone number text field has no value
    And Verify the email address text field has no value
    And Verify the Country Value at CSC2_CourageCA1GiftforT1217 Page
    And Verify the province drop down has no state
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate First Name Missing text under first name text field section
    And Validate Last Name Missing text under last name text field section
    And Validate Required text under address1 text field section
    And Validate City Missing text under city text field section
    And Validate Select a Province text under choose province drop down
    And Validate Postal Code Missing text under postal code text field section
    And Validate Email Address Missing text under email text field section
    And Validate First Name alert text after placing order

  Scenario: Courage Special Cases 2 - Courage CA 1 Gift for T1217 Order
    Given User opens URL CSC2_CourageCA1Gift32charsforT1216
    Then Validate Mailing and Billing Address text
    And Validate Order Number 1 text
    When Enter values in Mailing and Billing Address form at CSC2_CourageCA1GiftsforT1217 Page
    And Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate Product is not available in selected country text
    Then Validate Product Unavailable alert text after placing order
    And Select the Canada Country Available Subscription Option
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Courage Special Cases 2 - Courage CA 1 Gift for T1217 Gift Recipient Order
    Given User opens URL CSC2_CourageCA1Gift32charsforT1216
    When Check This Is A Gift checkbox
    Then Validate Billing Address text
    When Enter values in Mailing and Billing Address form at CSC2_CourageCA1GiftsforT1217 Page
    Then Validate Gift Recipient Mailing Address text
    And Validate Order Number 1 text
    When Enter Canadian values in Gift Recipient Mailing Address form
    And Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate messages Product is not available in selected country text
    When Select the Canada Country Available Subscription Option
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text
