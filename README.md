# hth-shipping-calculator
Harry The Hirer Pricing Calculator

This is a project created to automate a process at work.

The company does a purchase of stock every year. We have to enter this information into the system with an overall cost price for each item. 

The cost price is made of two costs: 
    - Purchase price in USD.
    - Shipping price per item in USD.

**Problem**
What is the total cost price of Item X? Total cost = purchase price of Item X + shipping price of Item X.

**Why do we need this?**
It allows for more accurate financial reporting on the stock performance of an item and allows for better informed decision-making. 

**Solution**
This calculator does the following:
    - Provides a live exchange rate feed.
        - This allows for user to convert prices from USD to AUD.
    - Converts purchase price of an item from USD to AUD.
    - Calculates shipping price per item in AUD based on:
        - The price of a 40ft container.
        - The number of containers being used for that particular range of items.
        - The number of individual items within those containers.
    - Generate a final price, that gets entered into our stock management system. 

**Learnings**
Even though it was a simple project, I have:
    - Sharpened my HTML and CSS skills.
    - For the first time, I used JS to pull information using an API.
    - Used JS to do simple DOM manipulation. A first time for me. 

