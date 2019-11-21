mysql -u root -p
password: root


CREATE DATABASE node_db;
USE node_db;

CREATE USER 'percy'@'%' IDENTIFIED BY 'percy';
GRANT ALL PRIVILEGES ON *.* TO 'percy'@'%' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON node_db.* TO 'percy'@'%';