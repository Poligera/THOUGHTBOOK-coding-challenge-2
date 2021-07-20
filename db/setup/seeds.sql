DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    user_id int,
    body varchar(140) NOT NULL
);

INSERT INTO posts (user_id, body)
VALUES
    (1, 'Thoughtbook is awesome!'),
    (2, 'I agree, but have you heard of Facebook?'),
    (3, 'I love my morning coffee'),
    (1, 'I love white wine')