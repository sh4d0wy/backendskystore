const express = require("express")
const router = express.Router;
const {passwordPutController} = require("../controller/passwordController")

router
   .put("/:email", passwordPutController)

module.exports = router