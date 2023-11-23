const express = require("express")
const router = express.Router();
const {loginGetController} = require('../controller/loginController')

router.post('/',loginGetController)

module.exports = router;
