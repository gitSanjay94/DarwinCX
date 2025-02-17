
@smoke                                                                                                             

Feature: SENDER INFO
    Validate SENDER INFO feature 

  Background:
    Given User opens Darwin User role
    When Login to Darwin User role with valid credentials
    And Verify user should logged in successfully
    When The user selects the English language
    Then The page language should be English

#automated
  Scenario: User should be able to update SENDER INFO
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Verify Email Manager text
    When Click on Edit button at Email Manager page
    And Click on Edit button in Sender Info page
    And Edit Email Sender Name
    And Edit Email Sender Address
    And Click on Save button in SENDER INFO page

  Scenario: Verify cancel functionality in Sender Info page
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Verify Email Manager text
    When Click on Edit button at Email Manager page
    And Click on Edit button in Sender Info page
    And Click on Cancel button in Sender Info page
    Then Validate Edit button is visible in Sender Info page
    Then Click on Back to email manager link
    And Validate Back to email manager link is working correctly

  Scenario: User should be able to Update Email Template Subject Line in SENDER INFO page
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    Then Click at Order Confirmation link
    Then Click at Payment Confirmation link
    Then Click on Edit button at Subject text
    Then Click on Save button without filling Subject Line
    Then Verify the alert message
    Then Click on Add Button at Subject text
    And Fill the Subject Line
    And Click on Save Button
    # Then Verify the successfully added Subject Line Message

  Scenario: User should be able to Update Email Template in SENDER INFO page
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    Then Click at Order Confirmation link
    Then Click at Payment Confirmation link
    Then Click on Edit button at Email Template Frame
    Then Update the Email Editor
    And Click on Save Button at Email Editor
    # Then Verify the Email Template Success Message

  Scenario: User should be able to update Switch Editor in Email Template in SENDER INFO page
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    Then Click at Order Confirmation link
    Then Click at Payment Confirmation link
    Then Click on Edit button at Email Template Frame
    Then Click on the Swich Editor
    And Click on Back Button at Swich Editor popup
    # Then Click on the Swich Editor
    # And Click on Continue Button
    Then Update the Swich Editor
    And Click on Save Button at Email Editor
    Then Verify the Email Template Success Message

  Scenario: User should be able to update Brand Name in SENDER INFO page
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Verify Email Manager text
    When Click on Edit button at Email Manager page
    And Edit Brand Name
    And Click on Save button in SENDER INFO page

  Scenario: User should be able to validate Add Logo text in popup
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Verify Email Manager text
    When Click on Edit button at Email Manager page
    And Open Brand Logo
    Then Validate Add Logo text in popup

  Scenario: User should be able to validate Add Brand Logo in popup
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Verify Email Manager text
    When Click on Edit button at Email Manager page
    And Add Brand Logo in popup
    And Click on Save button in SENDER INFO page

  Scenario: User should be able to Edit Additional Sender Settings in SENDER INFO page
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Verify Email Manager text
    When Click on Edit button at Email Manager page
    And Edit Additional Sender Settings in SENDER INFO page
    And Click on Save button in SENDER INFO page
  # Scenario: User should be able to Edit Batch Email Template
  #   Given User selects the clients
  #   When Click Marketing Studio
  #   And Click at Email Manager
  #   Then Verify Email Manager text
  #   When Edit Batch email Template
  #   Then Validate Renewals Update Request Succeeded text

  Scenario: User should be able to Edit Subject Line
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Verify Email Manager text
    When Edit Subject Line
    Then Validate Renewals Update Request Succeeded text

  Scenario: User should be able to edit Switch Editor in Email Template in SENDER INFO page
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    Then Click at Order Confirmation link
    Then Click at Payment Confirmation link
    Then Click on Edit button at Email Template Frame
    Then Click on the Swich Editor
    And Click on Back Button at Swich Editor popup
    # Then Click on the Swich Editor
    # And  Click on Continue Button
    # Then Update the Swich Editor
    Then Fill the Payment Confirmation Email text in Editor
    And Click on Save Button at Email Editor
    # Then Verify the Email Template Success Message

 
  Scenario: User should be able to send the Test Mail at SENDER INFO page
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    Then Click at Order Confirmation link
    Then Click at Payment Confirmation link
    Then Click on Edit button at Email Template Frame
    Then Click on the Send Test Button
    Then Click on Test Email Sender Cross Icon
    Then Click on the Send Test Button
    Then Click on Test Email Sender Close Button
    Then Click on the Send Test Button
    Then Fill the Test Email Sender
    Then Click on the Send Test Button to Send the Mail
    # Then Verify the Test Email Sent Success Message

   
  Scenario: User should be able to Verify wheher the Mail is being sent or not to recipient
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    Then Click at Order Confirmation link
    Then Click at Payment Confirmation link
    Then Click on Edit button at Email Template Frame
    Then Click on the Send Test Button
    Then Click on Test Email Sender Cross Icon
    Then Click on the Send Test Button
    Then Click on Test Email Sender Close Button
    Then Click on the Send Test Button
    Then Click the Test Email Sender
    Then Verify the Email Send to Recipient
    # Then Click on the Send Test Button to Send the Mail
    # Then Verify the Test Email Sent Success Message


  Scenario: Verify the preview popup
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    Then Click at Order Confirmation link
    Then Click at Payment Confirmation link
    Then Click at Preview Button
    Then Verify the Preview Popup Text
    Then Click at Cross Icon at Preview State

  Scenario: Verify the Email option is Enabled or Not
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    Then Click at Order Confirmation link
    Then Click at Payment Confirmation link
    Then Verify that Enable Email Option is Available
    Then No to Change the Enable Email Option to Disable
    Then Change the Enable Email Option to Disable
    Then Verify that Enable Email option is Disabled
    Then Change the Disable Email Option to Enable
    Then Verify that Enable Email option is Enabled

  Scenario: Verify the collapse & expand feature in subsections of Triggered EMails
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    Then Click at Triggered Emails link to Collapse the Subsections
    Then Click at Triggered Emails link to Expand the Subsections
    Then I should see "Order Confirmation" email template
    And I should see "Auto Renew" email template
    And I should see "Notifications" email template
    And I should see "Donations" email template
    And I should see "Other (to be deprecated)" email template
    And Clicked on "Order Confirmation" email template
    Then Verify the order confirmation items

  Scenario: Verify the Mails Link under Auto renew Email Link
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    And Clicked on "Auto Renew" email template
    Then Verify following links under Auto Renew
      | Notification for Credit Card/Direct Debit |
      | Notification for Expired Credit Card      |
      | Notification for Credit/Bill Me           |
      | Auto Renew Receipt                        |
      | Auto Renew CC Failed to Credit Order      |

  Scenario: Verify the Mails Links under Notification Email Link
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    And Clicked on "Notifications" email template
    Then Verify following links under Notifications
      | Fallback to Credit Order |
      | Shipping Confirmation    |

  Scenario: Verify the Mails Links under Donations Email Link
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    And Clicked on "Donations" email template
    Then Verify following links under Donations
      | One Time Donation Acknowledgement                   |
      | Monthly Donation Acknowledgement                    |
      | Do you require domestic tax receipts for donations? |
      | Optional tax receipt price range:                   |
      | Email Address to notify donors with no email:       |
      | Charitable Receipt Setup:                           |
      | Charitable Tax Receipt                              |
      | One Time Donation with Charitable Tax Receipt       |
      | Monthly Donation with Charitable Tax Receipt        |
      | Foundation Receipt Setup                            |
      | Foundation Business Receipts                        |
      | One Time Donation with Foundation Business Receipt  |
      | Monthly Donation with Foundation Business Receipt   |
    Then Update the Donor Max Price
    # Then Click at Do you require domestic tax receipts for donations? toggler
    # Then Again Click at "Do you require domestic tax receipts for donations?" toggler
    # Then Update the Donor Email Address

  Scenario: Verify the Mail Links under other(to be deprecated) Email Link
    Given User selects the clients
    When Click Marketing Studio
    And Click at Email Manager
    Then Click at Triggered Emails link
    And Clicked on "Other (to be deprecated)" email template
    Then Verify the following links under other to be deprecated Email Link
      | Digital Activation Email |
      | Send Receipt Email       |
      | Send Invoice Email       |
