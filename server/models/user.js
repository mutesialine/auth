const mongoose = require('mongoose')
const {isEmail} = require('validator')
const Schema= mongoose.Schema

const userSchema= new Schema({
   
    email:{
        type:String,
        required:[true, "please enter your email"],
        unique:true,
        lowercase:true,
        validate:[(isEmail),"please enter the valid email"]
    },
    password:{
        type:String,
        required:[true,"please enter the password"],
        minLength:[6," The minimun password length is 6 characters"]
    }
}, {timeStamps:true})

module.exports = mongoose.model("user",userSchema)
