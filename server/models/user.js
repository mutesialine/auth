const mongoose = require('mongoose')
const Schema= mongoose.Schema

const userSchema= new Schema({
    fullName:{
        type:String,
        required: [true, "please enter the name"]
    },
    username:{
        type:String,
        required:[true, "please enter the username"]
    },
    password:{
        type:String,
        required:[true,"please enter the password"],
        length:6 
    }
}, {timeStamps:true})

module.exports = mongoose.model("user",userSchema)
