const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  res.send("dashboard")
})

router.post('/create',(req,res)=>{
  
})

module.exports = router