# README
Before running docker-compose up you'll need to initialize the database.

Here are simple steps to build a database:

1. Initialize Database

    1. Enter into the container

        `docker exec -it postgres psql -U [username]`

    2. Create your database

        `CREATE DATABASE <database_name>`

    3. Connect to your database

        `\c <database_name>`

    4. Create a table

        `CREATE TABLE users( id SERIAL PRIMARY KEY, email VARCHAR(40) NOT NULL UNIQUE );`

    5. Insert email address for each user

        ```
        INSERT INTO users(email) SELECT 'user_' || seq | '@' || 
        ( CASE (RANDOM() * 2)::INT WHEN 0 THEN 'gmail' WHEN 1 THEN 'hotmail' 
        WHEN 2 THEN 'yahoo' END ) || '.com' AS email FROM GENERATE_SERIES(1, 10) seq;
        ```

2. Once completed exit
        
     `\q`

3. Now you should be able to run your docker commands with a populated database

    `docker-compose up`

------ 
Credits

[Access the PostgreSQL command line terminal through Docker](https://github.com/Radu-Raicea/Dockerized-Flask/wiki/%5BDocker%5D-Access-the-PostgreSQL-command-line-terminal-through-Docker)

[Generating fake data using SQL](https://vnegrisolo.github.io/postgresql/generate-fake-data-using-sql)