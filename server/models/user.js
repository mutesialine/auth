const mongoose =require('mongoose')
const Schema= mongoose.schema

const userSchema=new Schema({
    fullName:{
        type:String,
        required: true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}, {timeStamps:true})
module.exports = mongoose.model("User",userSchema)
