const Stores = require('../models/Store');

// @desc Get All Stores
// @route api/v1/stores
// @access public
exports.getAllStores= async(req,res,next)=>{
    try {
        const stores = await Stores.find();
        res.status(200).json({
            sucsses: true,
            count: stores.length,
            Data: stores
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({sucsses: false})
    }
}


// @desc POST All Stores
// @route api/v1/stores
// @access public
exports.addStore= async (req,res,next)=>{
    try {

    const store = await Stores.create(req.body);
    res.status(201).json({sucsses: true, Data: store});
        
    } catch (error) {

        if(error.code == 11000){
           return res.status(400).json({
               sucsses: false,
                msg: 'storeId alredy in use '
            })
        }
        res.status(500).json({sucsses:false});
    }
}

