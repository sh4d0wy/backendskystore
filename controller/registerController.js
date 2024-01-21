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
const registerDeleteController = async (req,res)=>{
    await user.deleteMany({}).then(res.status(200).json({
        "Success":"Deleted all documents"
    }))
}

module.exports = {registerGetController,registerPostController,registerDeleteController};