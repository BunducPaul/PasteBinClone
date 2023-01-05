CREATE DATABASE commBinDatabase;

CREATE TABLE commbin(
    commbin_id SERIAL PRIMARY KEY,
    author VARCHAR(255),
    title VARCHAR(255),
    text VARCHAR
);