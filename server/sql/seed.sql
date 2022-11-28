-- sql to seed demo data into internal database

LOAD DATA LOCAL INFILE 'C:/Users/dotbo/OneDrive/Desktop/Class Files/CSCI 467 - Intro Software Engineering/git-repo/GroupProject/server/sql/weight.csv'
INTO TABLE weight
FIELDS TERMINATED BY ','
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE 'C:/Users/dotbo/OneDrive/Desktop/Class Files/CSCI 467 - Intro Software Engineering/git-repo/GroupProject/server/sql/inventory.csv' 
INTO TABLE inventory
FIELDS TERMINATED BY ',' 
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE 'C:/Users/dotbo/OneDrive/Desktop/Class Files/CSCI 467 - Intro Software Engineering/git-repo/GroupProject/server/sql/user.csv' 
INTO TABLE user
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE 'C:/Users/dotbo/OneDrive/Desktop/Class Files/CSCI 467 - Intro Software Engineering/git-repo/GroupProject/server/sql/orders.csv' 
INTO TABLE orders
FIELDS TERMINATED BY ',' 
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE 'C:/Users/dotbo/OneDrive/Desktop/Class Files/CSCI 467 - Intro Software Engineering/git-repo/GroupProject/server/sql/order_product.csv' 
INTO TABLE order_product
FIELDS TERMINATED BY ',' 
ENCLOSED BY ''
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
