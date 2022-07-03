const express = require("express");
const mongoose = require("mongoose");

//init express and port
const app = express();
const port = 5000;
//init mongoose
const { Schema } = mongoose;
//nake schema mongoose


app.use(express.json());
//listen express
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});

//routing
app.get("/", (req, res) => {
  res.send("halo");
});

app.get("/signin",(req,res)=>{
  // res.send("p")
console.log("signinpage");
})
