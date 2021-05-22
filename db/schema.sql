DROP DATABASE IF EXISTS movie_theatreDB;

CREATE DATABASE movie_theatreDB;

USE movie_theatreDB;

CREATE TABLE movies (
  movie_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  movie_name VARCHAR(30) NOT NULL,
  show_day DATE NOT NULL,
  movie_type VARCHAR(30)
  
);
CREATE TABLE customers (
customer_id  INT PRIMARY KEY AUTO_INCREMENT,
first_name  VARCHAR(30) NOT NULL,
last_name  VARCHAR(30) NOT NULL,
email  VARCHAR(100),
cust_password VARCHAR(112)
);

CREATE TABLE seats (
seat_id  INT PRIMARY KEY AUTO_INCREMENT,
seat_row  INT(5),
seat_reserved  BOOLEAN DEFAULT false,

);