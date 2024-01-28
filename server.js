const express = require("express")
const app = express();
const loginRouter = require("./routes/loginRouter")
const registerRouter = require("./routes/registerRouter")
const forgotpasswordRouter = require("./routes/passwordRouter")
const dotenv = require("dotenv")
const cors = require("cors");

dotenv.config();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/login',loginRouter)
app.use("/register",registerRouter)
app.use("/forgotpassword",forgotpasswordRouter)
app.listen(3000,()=>{
    console.log("Server started at port 3000")
})