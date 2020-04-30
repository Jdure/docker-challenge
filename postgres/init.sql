  
CREATE TABLE users (
ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
  );

INSERT INTO users (name, email)
  VALUES ('Michael', 'Michael@example.com'), ('Scottie', 'Scottie@example.com'), ('Denis', 'Denis@example.com');