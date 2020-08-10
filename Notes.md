## Select SQL queries

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

## Insert SQL queries

- INSERT INTO Shippers (the, column, Names, use) VALUES (values, for, each, column);
- INSERT INTO Shippers (Phone, ShipperName) VALUES ('(503) 555-9831', 'Lambda Shipping');
  - inserts a shipper with Name Lambda Shipping into Shippers table
  - get the number of rows affected from the database

## Update SQL queries

- UPDATE Shippers SET ShipperName = 'Lambda Shipping', Phone = '(212)-233-2332' WHERE ShipperID = 4;
  - changes the name and phone of the data with the ShipperID of 4
  - remember to test the WHERE condition with a SELECT before updating

## Delete SQL queries

- DELETE FROM Shippers WHERE ShipperID = 4;
  - deletes the shipper with an id of 4

## SQL Style Rules

- For dates and strings use single quotes to wrap them
