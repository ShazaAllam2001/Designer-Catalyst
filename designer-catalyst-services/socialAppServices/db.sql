ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<NiceGuy>192';
flush privileges;

CREATE DATABASE designer_catalyst_accounts;
USE designer_catalyst_accounts;
CREATE TABLE User (id CHAR(10), firstName VARCHAR(30), secondName VARCHAR(30), userName VARCHAR(30),
email VARCHAR(50), password VARCHAR(50), jobDescription VARCHAR(50));
CREATE TABLE User (id CHAR(10), firstName VARCHAR(30), secondName VARCHAR(30), userName VARCHAR(30),
email VARCHAR(50), password VARCHAR(50), jobDescription VARCHAR(50));