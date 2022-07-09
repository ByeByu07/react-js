const { urlencoded } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const bcrypt = require("bcrypt")

//bcrypt configuration


//init express and port
const app = express();
const port = 3001;

//init mongoose
const connection = mongoose.createConnection("mongodb://localhost:27017/user")
const { Schema } = mongoose;

//make schema mongoose
const schema = new Schema({
  email:String,
  password:String,
  created_at:{type:Date, default: Date()}
})

//make model User from schema
const User = connection.model("User",schema)

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
  let {email,password,password_c} = {
    email:req.body.email,
    password:req.body.password,
    password_c:req.body.password_c
  }

  //compare pass & pass_c
  if(password === password_c){
    return res.send("not same")
  }

  //check in database for email
  //true : email must unique
  //false : add user to colletion
  if(User.find({email:email})){
    return console.log("sudah ada")
  }else{
  //encription password w bcrypt
    password = async () => {
      return await bcrypt.genSalt().then((salt,err)=>salt)
    }
    User.create({email:email,password:password}).then((p)=>console.log(`save user with email :${p.email}`))
  }



  // bcrypt.genSalt().then((salt)=>bcrypt.hash(salt,(err,salt)=>{
  //   console.log(salt)
  // }))

  console.log(req.body)
})

//AUTHENTICATION LOGIN - SIGNIN
app.post("/signin", (req, res) => {
  // res.send("p")
  console.log(req.body);
});
