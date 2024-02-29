
const mongoose =require('mongoose');
const ProductMaster = new mongoose.Schema({

    catId:{
        type:Number,
        required:true,    
    },    
    name:{
        type:String,
        required:true,    
    },
    picture:{
        type:String,
        required:true,    
    },
    quantity:{
        type:Number,
        required:true,    
    },
    price:{
        type:Number,
        required:true,    
    },

    is_active:{
        type:Number,
        required:true,  
        default: '1',  
    }

})

const ProductSchemaObject = new mongoose.model("ProductMaster", ProductMaster)
module.exports = ProductSchemaObject;

