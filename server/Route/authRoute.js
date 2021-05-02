const router = require("express").Router();
const User = require("../model/User");
const Agent = require("../model/settingSchema");
router.post("/user/add", async (req, res) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    deviceType: req.body.deviceType,
    groupTagName: req.body.groupTagName,
    ipAddress: req.body.ipAddress,
  });
  try {
    const savedUser = await user.save();
    res.send({ savedUser });
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get("/getuser", async (req, res) => {
  const user = await User.find({});
  res.json({ user });
});


router.post('/addAgent',async (req,res)=>{
  const agent = new Agent({
      sno:req.body.sno,
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      role:req.body.role,
      tagg:req.body.tagg,
      group:req.body.group,
      status:req.body.status,
      action:req.body.action,
      
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

module.exports = router;
