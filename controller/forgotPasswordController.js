const user = require("../model/user");
const randomstring = require("randomstring");
const nodemailer = require("nodemailer");

const sendVerificationEmail = async (email,otp)=>{
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        service: 'gmail',
        port:'587',
        secure:'false',
        auth: {
          user: 'resetskystore@gmail.com',
          pass: 'hyiwihlgdxjbpuns'
        }
      });
      
      const mailOptions = {
        from: 'resetskystore@gmail.com',
        to: email,
        subject: 'Reset SkyStore Password',
        html: `<p>Please reset your password using the otp given below<br/> <div style="font-size:1rem;"><b>${otp}</b></div>`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
const forgotPasswordPostController = async (req,res)=>{
    const email = req.body.email;
    const foundUser = await user.find({email:email});
    if(foundUser.length>0){
        const otp = (Math.floor(Math.random()*9000))+1000;
        await user.findOneAndUpdate({email:email},{otp:otp});
        sendVerificationEmail(email,otp);
        return res.status(200).send({success:true,msg:"Please check you email"})
    }else{
        return res.status(401).send({success:false,msg:"User Not Found"});
    }
}

const forgotPasswordVerifyController = async (req,res)=>{
    const givenOtp = req.body.otp;
    const email = req.body.email;
    console.log(givenOtp)
    const foundUser = await user.find({email:email})
    if(foundUser){
      console.log(foundUser[0].otp)
        if(givenOtp == foundUser[0].otp){
            res.status(200).send({success:true,msg:"Otp Verified"})
        }else{
          res.status(403).json({success:false,msg:'Invalid Otp'}) 
        }
    }else{
      res.status(404).json({success:false,msg:'User not found'})
    }
}

const resetPassword = async (req,res)=>{
    const newpass = req.body.newpassword;
    const email = req.body.email;
    try{
      await user.findOneAndUpdate({email:email},{password:newpass,otp:''})
      res.status(200).send({success:true,msg:"Password updated sucessfully"})
    }catch(e){
      console.log(e);
      res.status(404).send({success:false,msg:"Some error occured"});
    }
}

module.exports = {forgotPasswordPostController,forgotPasswordVerifyController,resetPassword}