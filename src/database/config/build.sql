BEGIN;

DROP TABLE IF EXISTS users , todos cascade;

CREATE TABLE users (
  id           SERIAL       PRIMARY KEY ,
  name         VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  password     VARCHAR(255) NOT NULL           
);

CREATE TABLE todos  (
  id           SERIAL       PRIMARY KEY ,
  id_user    INTEGER      REFERENCES users(id),
  description  VARCHAR(255) NOT NULL,
  done         boolean DEFAULT false 
);
INSERT INTO users (name, email, password) VALUES
('abeer', 'abeer@gmail.com', '1234' ),
('mariam', 'mariam@gmail.com', '12345' );

INSERT INTO todos (description, done) VALUES
('hello world', false),
('hi gyus' , true);

COMMIT;