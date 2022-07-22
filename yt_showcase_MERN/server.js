// .env config
require('dotenv').config()

const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const bcrypt = require("bcrypt")
const plainText = process.env.PLAIN_TEXT_HASH

//router express
const dashboard = require('./dashboard')

//init express and port
const app = express();
const port = 3001;

//init mongoose
const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/user")
const { Schema } = mongoose;

//make schema mongoose
const schema = new Schema({
  email:{
    type:String,
    min:3
  },
  password:{
    type:String,
    min:3
  },
  created_at:{
    type:Date, 
    default: Date()
  }
})

//make model User from schema
const User = connection.model("User",schema)

//router dashboard
app.use('/dashboard',dashboard)

//middleware
app.use(express.json());
// app.use(urlencoded())//
app.use(cors());

//listen express
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});

//routing
app.get("/", (req, res) => {
  res.send("halo");
});

//REGISTER USER - SIGNUP
app.post("/signup",async(req,res)=>{

  //collect data from req
  const email=req.body.email
  const password=req.body.password
  const password_c=req.body.password_c
  
  try{
    await bcrypt.hash(plainText,10,(err,hash)=>{
      console.log(hash)
      return User.create({email,password:hash})
    })
  }catch(err){
    console.log(err)
  }

})

//AUTHENTICATION LOGIN - SIGNIN
app.post("/signin", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({email},async(err,user)=>{

    const compare = await bcrypt.compare(password,user.password)

    console.log(compare,password,user.password)

    return res.redirect(301,'/')
  })

});
