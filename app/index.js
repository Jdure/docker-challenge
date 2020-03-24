const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries.js');
const app = express();
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => res.json({ info: 'Docker Challenge Accepted'}))

app.get('/users', db.getUsers)


app.listen(port, () => console.log(`My api running on port ${port}!`))