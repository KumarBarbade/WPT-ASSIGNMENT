const express = require('express')
const app = express();

app.use(express.static("staticResources"));
app.get("/abc",(req,res)=>{
    res.send("abc is called and responded")
})

app.get("/def",(req,res)=>{
    res.send("def is called and responded")
})


app.get("/login",(req,res)=>{
    console.log("login is requested...")
    
    let empid = req.query.empid; 
    let pass = req.query.password; 
    let userDetails = {empid:empid,password : pass}
    res.send(userDetails) })


app.get("/rec",(req,res)=>{
    res.send("rec is called and responded")
})


app.listen(1800,()=>{
    console.log("Server is listening at the port no 1800...")
})

