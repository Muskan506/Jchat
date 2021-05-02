const mongoose= require('mongoose')
const DB = process.env.DATABASE;
const connectDb=async ()=>{
    const con=await mongoose.connect(DB,{
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("mongo connected");
};


module.exports=connectDb;

