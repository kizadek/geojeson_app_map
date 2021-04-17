const mongoose = require("mongoose");

const StoreShema = mongoose.Schema({
    storeId:{
       type: String,
       required: [true,'please add a storeid'],
       unique: true,
       trim: true,
       maxlength:[10,'store ID must be less than 10 charectors']
    },
    address:{
        type:String,
       require: [true,'please add an address']
    },
        location: {
          type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
        
          },
          coordinates: {
            type: [Number],
            index :'2dsphere'
          },
          formattedAddress: String,
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
});




module.exports = mongoose.model('stores',StoreShema);