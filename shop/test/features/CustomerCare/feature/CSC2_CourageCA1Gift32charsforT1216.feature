@smoke
Feature: Test Courage CA 1 Gift functionality for T1216
         Validate Courage CA 1 Gift functionality for T1216

  # Scenario: Validate Courage CA 1 Gift functionality for T1216

  #   Given User opens URL CSC2_CourageCA1Gift32charsforT1216
  #   When  Verify the Blank First Name Value at CSC2_CourageCA1Gift32charsforT1216 Page
  #   Then  Verify the Blank Last Name Value at CSC2_CourageCA1Gift32charsforT1216 Page
  #   Then  Verify the Blank Comapnay Name Value at CSC2_CourageCA1Gift32charsforT1216 Page
  #   Then  Verify the Blank Job Title Value at CSC2_CourageCA1Gift32charsforT1216 Page
  #   And   Verify the Blank Address1 Value at CSC2_CourageCA1Gift32charsforT1216 Page
  #   And   Verify the Blank Address2 Value at CSC2_CourageCA1Gift32charsforT1216 Page
  #   And   Verify the Blank City Value at CSC2_CourageCA1Gift32charsforT1216 Page
  #   Then  Verify the Blank Postal Code Value at CSC2_CourageCA1Gift32charsforT1216 Page
  #   Then  Verify the Blank Email Address Value at CSC2_CourageCA1Gift32charsforT1216 Page
  #   Then  Verify the Country Value at CSC2_CourageCA1Gift32charsforT1216 Page
  #   Then  Verify the Select  User Province at CSC2_CourageCA1Gift32charsforT1216 Page
   
    Scenario: Courage Special Cases - 2 CSC2_CourageCA1Gift32charsforT1216 Order
    Given User opens URL CSC2_CourageCA1Gift32charsforT1216
    And Select the Canada Country Available Subscription Option
    Then  Enter Canadian values in Mailing and Billing Address form at CSC2_CourageCA1Gift32charsforT1216 Page
    Then  Validate number of char in Billing Address 2 text field to be 32 at CSC2_CourageCA1Gift32charsforT1216
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And   Click on Place Order button 
    Then  Validate TRANSACTION SUCCESSFUL text

 


    Scenario: Courage Special Cases - 2 CSC2_CourageCA1Gift32charsforT1216 Gift Recipient Order
    Given User opens URL CSC2_CourageCA1Gift32charsforT1216
    And Select the Canada Country Available Subscription Option
    Then  Enter Canadian values in Mailing and Billing Address form at CSC2_CourageCA1Gift32charsforT1216 Page
    And   Check This Is A Gift checkbox
    And   Enter Canadian values in Gift Recipient Mailing Address form
    When  Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And   Click on Place Order button
    Then  Validate TRANSACTION SUCCESSFUL text
  

    
   


