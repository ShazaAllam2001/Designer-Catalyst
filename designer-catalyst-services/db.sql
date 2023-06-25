ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<NiceGuy>192';
flush privileges;

CREATE DATABASE designer_catalyst_accounts;
USE designer_catalyst_accounts;

CREATE TABLE user_accounts (id INT PRIMARY KEY AUTO_INCREMENT, firstName VARCHAR(30), secondName VARCHAR(30),
email VARCHAR(100) UNIQUE, hashedPassword VARCHAR(100), jobDescription VARCHAR(100));

CREATE TABLE user_posts (id INT PRIMARY KEY AUTO_INCREMENT, user_id INT, image_link VARCHAR(300), 
caption VARCHAR(300), FOREIGN KEY (user_id) REFERENCES user_posts(id));

CREATE TABLE post_comments (id INT PRIMARY KEY AUTO_INCREMENT, owner_id INT, post_id INT, content VARCHAR(500),
FOREIGN KEY (owner_id) REFERENCES user_accounts(id), FOREIGN KEY (post_id) REFERENCES user_posts(id));

CREATE TABLE post_rating (id INT PRIMARY KEY AUTO_INCREMENT, post_id INT, rating FLOAT, num_raters INT,
FOREIGN KEY (post_id) REFERENCES user_posts(id));

SELECT * FROM user_accounts;
UPDATE user_accounts SET email="Holland@gmail.com" WHERE email = "SteveHolland@gmail.com";