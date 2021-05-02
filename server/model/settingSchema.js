const mongoose = require('mongoose');
const settingSchema = new mongoose.Schema({
    sno:{
        type:String,
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    },
    role:{
        type:String,
    },
    tagg:{
        type:String,

    },
    group:{
        type:String,
    },
     status:{
        type:String,
    },
    action:{
        type:String,
    },
                      
})
module.exports= mongoose.model('Agent',settingSchema);