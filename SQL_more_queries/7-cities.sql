-- This script creates a database and tables with certain characteristics.
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS hbtn_0d_usa.cities
(id INT NOT FULL UNIQUE AUTO_INCREMENT,
state_id INT NOT FULL,
name VARCHAR(256) NOT FULL,
PRIMARY KEY(id),
FOREING KEY(state_id) REFERENCE hbtn_0d_usa.states(id));
