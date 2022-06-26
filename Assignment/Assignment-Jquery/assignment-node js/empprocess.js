const express = require("express")
const app = express();

app.use(express.static("sf")) 

app.get("/login",(req,res)=>{

    console.log("Testing.... login URI is requested... ON form submit since action is login and method is get")

    let empid = req.query.empid; 
    let pass = req.query.password;  

    
    let loginStatus = {status : false, message : "Login failed!" }

    if(empid === pass){
        loginStatus.status =true;
        loginStatus.message = "Login successfull"
    }
    res.send(loginStatus.message) 

   
    })

app.get("/getEmpDetails",(req,resp)=>{
    let input = req.query.empid; 
    let output;
    console.log(input, typeof input)
    input = parseInt(input);
    console.log(input, typeof input)
    switch (input) {
        case 1:
            console.log("its here on 1")
        output = {status:true, empDetails :{empid:1,ename:"Kiran",mobNo:9829398379}};
        break;
        case 2:
            console.log("its here on 2")
            output = {status:true, empDetails :{empid:2,ename:"Akshay",mobNo:9829398379}};
        break;
        case 3:
            output = {status:true, empDetails :{empid:3,ename:"Pranit",mobNo:9829398379}};
        break;
        case 4:
            output = {status:true, empDetails :{empid:4,ename:"Shubham",mobNo:9829398379}};
        break;
        default:
                output = {status:false, empDetails :{empid:0,ename:"",mobNo:0}}
            break;
    }
    resp.send(output.empDetails.empid + "  " + output.empDetails.ename + "  " + output.empDetails.mobNo)

    
        app.listen(1200,()=>{
            console.log("server is listening at port 1200...")
        })