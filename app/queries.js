require('dotenv').config();

const Pool = require('pg').Pool;

const pool = new Pool({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
    }



module.exports = { getUsers};