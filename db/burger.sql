
USE hqgwf8j4k7qy4kvu;

CREATE TABLE burgers
(
   id INT
   AUTO_INCREMENT NOT NULL,
 name VARCHAR
   (100) NOT NULL,
 devoured BOOLEAN NOT NULL,
 PRIMARY KEY
   (id)
 );
 
 
 
INSERT INTO burger
    (name, devoured)
VALUE
("Donut",
true
),
("Macaron", false),
("Muffin", true)