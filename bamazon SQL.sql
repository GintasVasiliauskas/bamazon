DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name varchar(200),
  department_name varchar(200),
  price double(10,2),
  stock_quantity integer,
  PRIMARY KEY (id)
);


INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('hat', 'clothing', 12.99, 4);
INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('shoes', 'clothing', 100, 3);
INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('jacket', 'clothing', 130, 1);
INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('pants', 'clothing', 60, 3);
INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('Vitamin C', 'health', 10, 100);
INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('tea', 'health', 5, 120);
INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('limes', 'health', 2, 7);
INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('ginger', 'health', 1, 5);
INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('napkins', 'household', 3, 150);
INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('cups', 'household', 2.50, 100);
INSERT INTO products
(product_name, department_name,price,stock_quantity)
values ('plates', 'household', 3.50, 200);
