BEGIN;

INSERT INTO users (name, email, password) VALUES
('abeer', 'abeer@gmail.com', '1234' ),
('mariam', 'mariam@gmail.com', '12345' );

INSERT INTO todos (description, done) VALUES
('hello world', false),
('hi gyus' , true);

COMMIT;