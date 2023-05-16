# hth-shipping-calculator
Harry The Hirer Shipping Calculator

This is a project created to automate a process at work.

The company does a purchase of stock every year. We have to enter this information into the system with an overall cost price for each item. 

The cost price is made of two costs: 
    - Purchase price in USD.
    - Shipping price per item in USD.

*Problem*
What is the overall cost price of Item X?

*Solution*
This calculator does the following:
    - Provides a live exchange rate feed.
        - This allows for user to convert prices from USD to AUD.
    - Converts purchase price to AUD.
    - Calculates shipping price per item in AUD based on information gained from our freight-forwarding.
    - Adds the two together to give a overall cost price, which can be entered into the system. 

