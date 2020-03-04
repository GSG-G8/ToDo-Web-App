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
('mariam', 'mariam@gmail.com', '12345' ),
('ahmed', 'abcd@gmail.com', '$2a$10$wHt8U6.tn5Ff6oiLLEo4kOSM13nKIyhOONqP.hSblNmld..UWODGe');

INSERT INTO todos (id_user ,description, done) VALUES
(3,'hello world', false),
(2,'hi gyus' , true);

COMMIT;