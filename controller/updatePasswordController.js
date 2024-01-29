const user = require("../model/user")

const passwordPutController = async(req,res)=>{
    const userName = req.body.userName;
    const foundUser = await user.find({username:userName});
    const givenPassword = req.body.oldpassword;
    if(foundUser[0].password == givenPassword){
        const newPassword = req.body.newpassword;
        try{
            await user.findOneAndUpdate({username:userName},{password:newPassword})
            res.status(200).json({
                "Success":"Password updated succesfully"
            })
        }catch(e){
            res.status(500).json({
                "Error":"Error occured while updating"
            })
        }
    }
    else{
        res.status(401).json({
        "Status":"Unauthorised"
    })
    }
}

module.exports = {passwordPutController}