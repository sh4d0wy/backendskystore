const express = require("express")
const router = express.Router();
const {loginGetController} = require('../controller/loginController')

router.get('/',loginGetController)

module.exports = router;
