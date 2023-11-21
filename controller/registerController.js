const user = require("../model/user");

const registerGetController = (req,res)=>{
    res.send("register get")
}

const registerPostController = async (req,res)=>{
    const user1 = req.body;
    const newUser = new user(user1);
    try{
        await newUser.save();
        res.json(newUser).status(200)
    }catch(e){
        console.log(e);
    }
}

module.exports = {registerGetController,registerPostController}