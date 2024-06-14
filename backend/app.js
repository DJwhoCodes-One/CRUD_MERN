require('dotenv').config()
const express = require('express')
const app = express();

const port = 8081;

app.get('/', (req, res) => {
    res.send("Hello Server!!");
})

app.listen(port);