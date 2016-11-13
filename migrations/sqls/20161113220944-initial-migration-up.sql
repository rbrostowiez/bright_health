CREATE TABLE `events`
(
  `id`           INT NOT NULL,
  `eventTitle`   VARCHAR(255),
  `startDate`    DATETIME,
  `endDate`      DATETIME,
  `description`  TEXT,
  `featuredFlag` BOOLEAN,
  `createdAt`    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  `updatedAt`    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `categories`
(
  `id`           INT NOT NULL AUTO_INCREMENT,
  `categoryName` VARCHAR(255) UNIQUE,
  PRIMARY KEY (`id`),
  INDEX (`categoryName`)
);


CREATE TABLE `event_categories`
(
  `eventId`    INT,
  `categoryId` INT,
  PRIMARY KEY (`eventId`, `categoryId`)
);