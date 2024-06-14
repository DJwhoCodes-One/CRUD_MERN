require('dotenv').config();
const express = require('express');
const app = express();
require('./db/conn');
const users = require('./models/userSchema');
const cors = require('cors');

const port = 8081;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello Server!!");
})

app.listen(port);