Feature: Login Page

Scenario: Login Page logged in with correct username and password
  Given Enter the correct username
  When Enter the correct password
  And Click the login button
  Then Verify user is in Login page