Feature: Placing Order in an Ecommerce Platform

  Scenario: User places the order successfully
    Given the user logs in with username "Tester123" and password "Tester@1234"
    When the user searches for the product "speakers" and sets the price range from "50" to "150"
    And the user selects the product "HP S9500 Bluetooth Wireless Speaker" adds it to the cart and proceeds to the cart page
    Then user verifies that the cart page has total text "TOTAL:"
    Then the users checkouts and order payment, order summary details should be displayed
    When the user enters shipping details:
      | UserName  | LastName | PhoneNumber | City        | Address       | State   | Postal |
      | Tester123 | Tez      | 28765432456 | Fayetteville| 31 Spooner St | New York| 02108  |
    And the user proceeds with payment option and adds the safepay username "Tester123" and password "Qwerty@1234"
    Then after user completes the payment order placed success message should be displayed
