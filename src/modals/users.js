const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,

},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    requied:true,
    unigue:true
},

phone:{
    type:Number,
    required:true,
    unigue:true    
},
address:{
    type:String,
    required:true
}
})
const User = new mongoose.model("User",userSchema)
module.exports = User

 


