ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<NiceGuy>192';
flush privileges;

CREATE DATABASE designer_catalyst_accounts;
USE designer_catalyst_accounts;

CREATE TABLE user_accounts (id INT PRIMARY KEY AUTO_INCREMENT, firstName VARCHAR(30), secondName VARCHAR(30),
email VARCHAR(100) UNIQUE, hashedPassword VARCHAR(100), jobDescription VARCHAR(100));

SELECT * FROM user_accounts;
UPDATE user_accounts SET email="Holland@gmail.com" WHERE email = "SteveHolland@gmail.com";

CREATE TABLE User (id CHAR(10), firstName VARCHAR(30), secondName VARCHAR(30), userName VARCHAR(30),
email VARCHAR(50), password VARCHAR(50), jobDescription VARCHAR(50));