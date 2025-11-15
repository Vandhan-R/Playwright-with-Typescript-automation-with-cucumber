[![Run Playwright & Cucumber Tests](https://github.com/Vandhan-R/Playwright-with-Typescript-automation-with-cucumber/actions/workflows/playwright.yml/badge.svg)](https://github.com/Vandhan-R/Playwright-with-Typescript-automation-with-cucumber/actions/workflows/playwright.yml)

# My Playwright + TypeScript + Cucumber Project

This project is an end-to-end UI automation framework built with:

Playwright
TypeScript
Page Object Model (POM)
Cucumber (BDD)

It automates the full order placement process on the Advantage Online Shopping website—from login to order confirmation.

# Project Summary

This automation suite covers the entire e-commerce flow:

User Login
Product Search
Price Range Filtering
Product Selection
Add to Cart
Cart Review
Checkout
Enter Shipping Details
Enter Payment Details
Validate Successful Order Placement

All logic is separated using Page Object Model, making the project clean, readable, and easy to expand.

# End-to-End Test Steps (Actual Flow Used in Code)
1. Launch the browser and navigate to the website
2. Log in using username and password
3. Search for a product ("speakers")
4. Apply price range filter using JavaScript slider (50 to 150)
5. Select product "HP S9500 Bluetooth Wireless Speaker"
6. Choose color, increase quantity, and add to cart
7. Verify the cart badge count and open the cart
8. Confirm the cart contains the TOTAL label
9. Proceed to CHECKOUT
10. Verify ORDER PAYMENT and ORDER SUMMARY sections
11. Enter shipping details from Cucumber DataTable:
      - First name, Last name, Phone number
      - City, Address, State, Postal code
      - Country selection
12. Proceed to payment
13. Select SafePay and enter credentials
14. Confirm the order
15. Verify the ORDER SUCCESS page is displayed with Order ID


# Cucumber Scenario (Used in This Project)

- Feature: Placing Order in an Ecommerce Platform

- Scenario: User places the order successfully
- Given the user logs in with username "Tester123" and password "Tester@1234"
- When the user searches for the product "speakers" and sets the price range from "50" to "150"
- And the user selects the product "HP S9500 Bluetooth Wireless Speaker" adds it to the cart and proceeds to the cart page
- Then user verifies that the cart page has total text "TOTAL:"
- Then the users checkouts and order payment, order summary details should be displayed
- When the user enters shipping details:
    - | UserName  | LastName | PhoneNumber | City        | Address       | State   | Postal |
    - | Tester123 | Tez      | 28765432456 | Fayetteville| 31 Spooner St | New York| 02108  |
- And the user proceeds with payment option and adds the safepay username "Tester123" and password "Qwerty@1234"
- Then after user completes the payment order placed success message should be displayed

# How to Run the Tests

1. Install dependencies : npm install
    
2. Install Playwright browsers : npx playwright install

3. Run Cucumber tests : npx cucumber-js

# Tech Used
1. Playwright – Web automation
2. TypeScript – Type-safe test development
3. Cucumber – BDD/Gherkin
4. POM – Clean separation of test logic

# Possible Improvements

1. Add HTML/JSON test reports
2. Add tags (@smoke, @regression)
3. Add reusable hooks for browser setup
