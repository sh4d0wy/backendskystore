const express = require("express")
const app = express();
const loginRouter = require("./routes/loginRouter")
const registerRouter = require("./routes/registerRouter")
const dotenv = require("dotenv")
dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/login',loginRouter)
app.use("/register",registerRouter)

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})