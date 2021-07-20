DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(140) NOT NULL,
    pseudonym varchar(140) NOT NULL,
    body text NOT NULL
);