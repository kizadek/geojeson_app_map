const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const { Console } = require('console');
const connectDB = require('./config/db');

//@ load dotenv
dotenv.config({path:'./config/config.env'});

// initialize express
const app = express();

//@ SET PORT
const PORT = process.env.PORT || 5000;





app.listen(PORT,console.log(`server is running in ${process.env.NODE_ENV} on port:${process.env.PORT}`.yellow));

