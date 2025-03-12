@smoke

Feature: Test Hoffman US Gift Order BOGO
         Validate Hoffman US Gift Order BOGO 

  Scenario: Validate Hoffman US Gift Order BOGO - Donor and Recip
    Given User opens URL CSC2_HoffmanUSGiftOrderBOGO
    Then Validate The Perfect Gift for the Deer Hunter text
    And Validate US Offer text
    And Validate Mailing and Billing Address text
    When Enter values in Mailing and Billing Address form for CSC2_HoffmanUSGiftOrderBOGODonorandRecip
    Then Validate Gift Recipient Mailing Address text
    When Enter values in Gift Recipient Mailing Address form for Order 1
    # Then Validate Order Summary text
    And Validate Free Gift To Donor text under order summary section
    And Validate Gift Order 1 text under order summary section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate Hoffman US Gift Order BOGO - Two Recipients
    Given User opens URL CSC2_HoffmanUSGiftOrderBOGO
    Then Validate The Perfect Gift for the Deer Hunter text
    And Validate US Offer text
    And Validate Mailing and Billing Address text
    When Enter values in Mailing and Billing Address form for CSC2_HoffmanUSGiftOrderBOGODonorandRecip
    Then Validate Gift Recipient Mailing Address text
    When Enter values in Gift Recipient Mailing Address form for Order 1
    When Click Add Gift Recipient button
    When Enter values in Gift Recipient Mailing Address form for Order 2
    # Then Validate Order Summary text
    And Validate Free Gift To Donor text under order summary section
    And Validate Gift Order 1 text under order summary section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate Hoffman US Gift Order BOGO - Two Recipients with different mailing address
    Given User opens URL CSC2_HoffmanUSGiftOrderBOGO
    Then Validate The Perfect Gift for the Deer Hunter text
    And Validate US Offer text
    When Check I have a different mailing address checkbox
    When Validate Billing Address text
    When Enter values in Mailing and Billing Address form for CSC2_HoffmanUSGiftOrderBOGODonorandRecip
    Then Validate Mailing Address text
    When Enter values in Mailing Address form for CSC2_HoffmanUSGiftOrderBOGODonorandRecip
    Then Validate Gift Recipient Mailing Address text
    When Enter values in Gift Recipient Mailing Address form for Order 1
    When Click Add Gift Recipient button
    When Enter values in Gift Recipient Mailing Address form for Order 2
    # Then Validate Order Summary text
    And Validate Free Gift To Donor text under order summary section
    And Validate Gift Order 1 text under order summary section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

 Scenario: Validate Hoffman US Gift Order BOGO - Two Recipients
    Given User opens URL CSC2_HoffmanUSGiftOrderBOGO
    Then Validate The Perfect Gift for the Deer Hunter text
    And Validate US Offer text
    And Validate Mailing and Billing Address text
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip
    Then Validate Gift Recipient Mailing Address text
    When Enter values in Gift Recipient Mailing Address form for Order 1
    When Click Add Gift Recipient button
    When Enter values in Gift Recipient Mailing Address form for Order 2
    # Then Validate Order Summary text
    And Validate Free Gift To Donor text under order summary section
    And Validate Gift Order 1 text under order summary section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text

  Scenario: Validate Hoffman US Gift Order BOGO - Two Recipients with different mailing address
    Given User opens URL CSC2_HoffmanUSGiftOrderBOGO
    Then Validate The Perfect Gift for the Deer Hunter text
    And Validate US Offer text
    When Check I have a different mailing address checkbox
    When Validate Billing Address text
    When Enter values in Mailing and Billing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip
    Then Validate Mailing Address text
    When Enter values in Mailing Address form for FSMSE_HoffmanUSGiftOrderBOGODonorRecip
    Then Validate Gift Recipient Mailing Address text
    When Enter values in Gift Recipient Mailing Address form for Order 1
    When Click Add Gift Recipient button
    When Enter values in Gift Recipient Mailing Address form for Order 2
    # Then Validate Order Summary text
    And Validate Free Gift To Donor text under order summary section
    And Validate Gift Order 1 text under order summary section
    # And Validate Gift Order 2 text under order summary section
    When Enter valid payment details "4242 4242 4242 4242" and "1025"  and "123"
    And Click on Place Order button
    Then Validate TRANSACTION SUCCESSFUL text