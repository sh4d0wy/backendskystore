const express = require("express")
const router = express.Router();
const {forgotPasswordPostController,forgotPasswordVerifyController, resetPassword} = require("../controller/forgotPasswordController")

router
   .post("/", forgotPasswordPostController)
   .post("/verify", forgotPasswordVerifyController)
   .post("/resetpassword", resetPassword)

module.exports = router;