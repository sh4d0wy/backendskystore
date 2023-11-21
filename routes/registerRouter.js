const express = require("express")
const router = express.Router();
const {registerPostController} = require("../controller/registerController")

router
    .post('/',registerPostController)

module.exports = router;
