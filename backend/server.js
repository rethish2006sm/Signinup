import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/user.model.js";


const app = express();
app.use(cors());
app.use(express.json());

let  connectdb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://webdevelopment2006rs_db_user:rethish123@cluster0.a4uzuyx.mongodb.net/user-details");
        console.log("moongo DB connected");
    } catch (error) {
        console.log("connectdb error",error);
    }
}

app.post("/signup", async (req, res) => {
  const { fullname, email, password, username } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.json({ message: "User already exists" });
  }

  await User.create({ fullname, email, password, username });

  res.json({ message: "Signup successful" });
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      homepage:true,
      user
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}); 


app.listen(8000,()=>{
    connectdb();
    console.log("server started")
})