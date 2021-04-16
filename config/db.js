const mongoose = require('mongoose');
require('dotenv').config({path:'./config/config.env'})
require('colors');

 const connectDB = async () =>{
      const conn = await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log(`MongoDB Connected host:${conn.connection.host}`.cyan);
 }
 module.exports = connectDB;