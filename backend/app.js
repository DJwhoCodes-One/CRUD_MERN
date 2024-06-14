require('dotenv').config();
const express = require('express');
const app = express();
require('./db/conn');
const users = require('./models/userSchema');

const port = 8081;


app.get('/', (req, res) => {
    res.send("Hello Server!!");
})

app.listen(port);