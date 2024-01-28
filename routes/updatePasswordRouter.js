const express = require("express")
const router = express.Router();
const {passwordPutController} = require("../controller/updatePasswordController")

router
   .put("/", passwordPutController)

module.exports = router;