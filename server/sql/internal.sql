-- Database for internal system

DROP TABLE IF EXISTS `User`;
DROP TABLE IF EXISTS `Order_Product`;
DROP TABLE IF EXISTS `Orders`;
DROP TABLE IF EXISTS `Inventory`;
DROP TABLE IF EXISTS `Weight`;

CREATE TABLE `Weight` (
    `id`        INT AUTO_INCREMENT,
    `weight`    DECIMAL(9,2) DEFAULT '0.00',
    `cost`      DECIMAL(9,2) DEFAULT '0.00',
    PRIMARY KEY (`id`)
);

CREATE TABLE `Inventory` (
    `id`        INT,
    `quantity`  INT,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Orders` (
    `id`                INT AUTO_INCREMENT,
    `customer_name`     VARCHAR(255) NOT NULL,
    `customer_email`    VARCHAR(255) NOT NULL,
    `customer_address`  VARCHAR(255) NOT NULL,
    `total_amount`      DECIMAL(9,2) DEFAULT 0.0,
    `total_weight`      DECIMAL(9,2) DEFAULT 0.0,
    `status`            VARCHAR(6) DEFAULT 'open',
    `date`              DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Order_Product` (
    `order_id`      INT NOT NULL,
    `product_id`    INT NOT NULL,
    `quantity`      INT NOT NULL,
    PRIMARY KEY (`order_id`, `product_id`),
    FOREIGN KEY (`order_id`) REFERENCES `Orders`(`id`),
    FOREIGN KEY (`product_id`) REFERENCES `Inventory`(`id`)
);

CREATE TABLE `User` (
    `email`     VARCHAR(32) NOT NULL,
    `password`  VARCHAR(10) NOT NULL,
    `status`    VARCHAR(8) DEFAULT 'customer',
    PRIMARY KEY (`email`)
);