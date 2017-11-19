# bamazon

This is node store that is linked to mysql database server. 

In this store you will find a list of items, categories, price, and quantity carried.
User is able to select items from the list, which is updated live from database. All selectable items have at least 1 item in stock.

When user selects a list, he needs to enter quantity of how many items he wants to get. Most of the items have low quantities, so if user requests too many items a message will notify user that there are not enough items in stock for purchase.

Once user selects a product and quantity requested is lower than items in stock, system will execute request and will update database with correct items in stock.

Once transaction is completed, user will be asked if he wants to purchase additional items. If user selects yes, the whole process will restart, however, if user selects no, then user will receive thank you message and system will exit.
