## SQL queries

- SELECT \* FROM Products
  - selects all data from Products table
- SELECT \* from [products];
  - use [] to use invalid names for objects
  - name has space or is a keyword
  - if using brackets - rename the object
- SELECT ProductID, ProductName from Products;
  - returns the columns named ProductID and ProductName from the table named Products
- SELECT \* from Customers WHERE City = 'London';
  - filters the data to get all customers with the city of London
- SELECT \* FROM Customers WHERE Country = 'UK' or Country = 'USA';
  - selects customers from UK and USA
- SELECT \* FROM Customers WHERE Country IN ('UK', 'USA');
  - selects customers from UK and USA
  - uses IN clause
- SELECT \* from Customers WHERE Country NOT IN ('Uk', 'USA');
  - Selects customers that aren't from UK or USA
- SELECT \* FROM Products ORDER BY Price LIMIT 5;
  - gets the cheapest first 5 products from the table
- SELECT \* FROM Products ORDER BY Price DESC LIMIT 5;
  - gets the most expensive products - first 5

## SQL Style Rules

- For dates and strings use single quotes to wrap them
