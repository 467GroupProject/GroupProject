-- sql to seed demo data into internal database

LOAD DATA LOCAL INFILE 'inventory.csv' 
INTO TABLE Inventory
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;