const express = require('express');;
const router = express.Router();

const Agent = require("../model/settingSchema");
const User = require("../model/userSchema");


router.get('/', (req,res) => {
    res.send('helo its my home page...router');
}
);

router.post('/addAgent',async (req,res)=>{
    const agent = new Agent({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        role:req.body.role,
        tag:req.body.tag,
        grouping:req.body.grouping,
        
    });
    try{
        const saveAgent = await agent.save();
        res.send({saveAgent});
    }catch(e){
        res.status(400).send(e);
    }
});
router.get("/getAgent",async(req,res)=>{
    const agent = await Agent.find({});
    res.json({agent});
});

router.post('/addUser',async (req,res)=>{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        createdAt:req.body.createdAt,
        lastlogin:req.body.lastlogin,
        grouptagname:req.body.grouptagname,
        uniqueID:req.body.uniqueID,
        Ipaddress:req.body.Ipaddress,
        
    });
    try{
        const saveUser = await user.save();
        res.send({saveUser});
    }catch(e){
        res.status(400).send(e);
    }
});
router.get("/getUser",async(req,res)=>{
    const user = await User.find({});
    res.json({user});
});





module.exports = router;