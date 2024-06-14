const mongoose = require('mongoose')

const DB = process.env.DB;

mongoose.connect(DB).then(() => console.log("DB connection started!")).catch((err) => console.log(err.message));