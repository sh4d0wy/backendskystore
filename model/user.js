const mongoose = require("mongoose")
const dotenv=require("dotenv")
dotenv.config();
// Connect to MongoDB database using Mongoose
async function connect(){
    await mongoose.connect(process.env.MONGO_URI)
}

try{    
    connect()
    console.log("Db Connected")
}catch(e){
    console.log(e)
}

let Schema = mongoose.Schema;

let userSchema = new Schema({
    username:{type : String, required : true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    otp:{type:Number}
})

const user = mongoose.model("user",userSchema)

module.exports = user;

