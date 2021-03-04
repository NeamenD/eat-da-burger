CREATE DATABASE burgers_db;
USE burgers_DB;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
    burger_name varchar
    (30) NOT NULL,
    devoured boolean DEFAULT false,
    PRIMARY KEY
    (id)
)