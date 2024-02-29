const mongoose =require('mongoose');
const categoriesNameSchema = new mongoose.Schema({

    categoriesName:{
        type:String,
        required:true,    
    },    
    description:{
        type:String,
        required:true,    
    },is_active:{
        type:Number,
        required:true,  
        default: '1',  
    }

})

const categoriesObject = new mongoose.model("categoriesNameSchema", categoriesNameSchema)
module.exports = categoriesObject;

