const mongoose = require('mongoose');

const todoschema  = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true,
        default:false
    }
})
const todos = mongoose.model('todos',todoschema);
modules.exports = todos;