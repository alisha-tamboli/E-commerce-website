const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const order = require('./routes/orderRoute')
const app = express();

app.use(express.json())
app.use( (req, res, next) => {
    console.log(req.path, req.method)
    next()
}); 

// Define your routes here
app.use( '/api/orderRoute', (order) )

//connect to db
mongoose.connect(process.env.Mongo_uri)
    .then(() => {
        app.listen(process.env.PORT, () =>  {
            console.log(`Connected to db and Server running on port`, process.env.PORT)
        });
    })
    .catch((error) => {
        console.log(error)
    })


