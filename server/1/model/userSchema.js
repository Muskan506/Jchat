const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    phone:{
        type:Number,
        // required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        // required:true
    },
    lastlogin:{
        type:Date,
        default:Date.now,
        

    },
    uniqueID:{
        type:String
    },
    grouptagname:{
        type:String
    },
    Ipaddress:{
        type:String
    },

    
})
module.exports= mongoose.model('User',userSchema);