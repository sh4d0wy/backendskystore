const express = require("express")
const router = express.Router();
const {loginPostController} = require('../controller/loginController')

router.post('/',loginPostController)

module.exports = router;
