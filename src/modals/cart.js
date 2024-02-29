const mongoose =require('mongoose');
const cartMaster = new mongoose.Schema({

    userId:{
        type:Number,
        required:true,    
    },    
    productId:{
        type:String,
        required:true,    
    },
    quantity:{
        type:Number,
        required:true,
    },
    is_active:{
        type:Number,
        required:true,  
        default: '1',  
    }

})

const cartMasterSchemaObject = new mongoose.model("cartMaster", cartMaster)
module.exports = cartMasterSchemaObject;

