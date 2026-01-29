import mongoose from "mongoose";

let userschema = new mongoose.Schema({
    fullname:{
        type:String
    },
    username:{
        type:String,
        required:true,
        unique: true
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

let User = mongoose.model("User",userschema)

export default User