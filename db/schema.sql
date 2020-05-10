CREATE DATABASE burger_db;
USE burger_db;

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
 
