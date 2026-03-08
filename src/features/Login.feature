Feature: Login Page

@TA-1
Scenario: Login Page logged in with correct username and password
  Given Enter the correct username
  When Enter the correct password
  And Click the login button
  Then Verify user is in Login page

@TA-3
Scenario: Unsuccessful Login try with wrong password
  Given Enter the username 
  And Enter the wrong password
  When Click the Login button
  Then Verify the Error message displayed