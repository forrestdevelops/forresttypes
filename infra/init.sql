USE forresttypes;

CREATE TABLE entries (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(300) NOT NULL, 
    data MEDIUMTEXT NOT NULL,
    created DATETIME NOT NULL,
    modified DATETIME,
    wordcount INT NOT NULL
     );