const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create express app
const app = express();
app.use(bodyParser.json());

// use .env if not in production mode
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// db connect
mongoose.connect(process.env.CONNECTION_STRING, {})
.then((res) => { console.log('Connected to MongoDB') })
.catch((err) => { console.log(`Connection Failure: ${err}`)});

// cors for angular client access
const cors = require('cors');
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE,HEAD,OPTIONS"
}));

// controller + route
const mediaController = require('./controllers/media');
app.use('/v1/api/media', mediaController);

app.listen(3000);
module.exports = app;
