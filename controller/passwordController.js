const user = require("../model/user")

const passwordPutController = async(req,res)=>{
    const email = req.params.email;
    const foundUser = user.find({email:email});
    const givenPassword = req.body.oldpassword;
    if(foundUser[0].password == givenPassword){
        const newPassword = req.body.newpassword;
        try{
            await user.findOneAndUpdate({email:email},{password:newPassword})
            res.status(200).json({
                "Success":"Password updated succesfully"
            })
        }catch(e){
            res.status(500).json({
                "Error":"Error occured while updating"
            })
        }
    }
    res.status(401).json({
        "Status":"Unauthorised"
    })
}

module.exports = passwordPutController