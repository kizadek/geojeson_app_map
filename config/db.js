const mongoose = require('mongoose');
require('dotenv').config();
require('colors');

const connectDB = async () =>{
      const conn = await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });

      console.log(`MongoDB Connected host:${conn.connection.host}`.green);
}

module.exports = connectDB;