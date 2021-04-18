const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');
const morgan = require('morgan')
//@ load mongoDB
connectDB();
//@ load dotenv
dotenv.config({path:'./config/config.env'});
// initialize express
const app = express();
//@ SET PORT
const PORT = process.env.PORT || 5000;
//@ body parser
app.use(express.json());
//@ static files
app.use(express.static(path.join(__dirname,'public')));
//@ Enable cors
app.use(cors());
// @ set logger 
app.use(morgan('dev'));
//@ routes
app.use('/api/v1/stores',require('./routes/stores'));


app.listen(PORT,console.log(`server is running in ${process.env.NODE_ENV} on port:${process.env.PORT}`.yellow));

