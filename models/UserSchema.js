const mongoose  = require("mongoose");

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3,
       maxlength:15,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:6,
        maxlength:15
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const user = mongoose.model("User",userschema);
module.exports = user;