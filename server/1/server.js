const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();
const auth = require('./router/auth')
app.use(express.json());
app.use(cors());
dotenv.config({path:'./config.env'});
const connectDb= require('./db/conn');
connectDb();
// const User = require('./model/userSchema');
// app.use(require('./router/auth'));
app.use("/api",auth);
const PORT = process.env.PORT;
// const DB = 'mongodb+srv://muskan:<muskangoyal>@cluster0.2jc2d.mongodb.net/settings?retryWrites=true&w=majority'
// middelware


app.listen(PORT,()=>{
    console.log('server is running');
}) 