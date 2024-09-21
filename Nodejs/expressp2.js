const express=require('express')
const app=express()
//app.use(express.text())
app.use(express.json())

app.post("/",function(req,res){
    console.log(req.body.name)
    // console.log(req.body)
    // res.end()
}).listen(3001)
console.log("Server is Running...")