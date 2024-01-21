const express = require("express")
const router = express.Router();
const {registerPostController,registerDeleteController} = require("../controller/registerController")

router
    .post('/',registerPostController)
    .delete('/',registerDeleteController)

module.exports = router;
