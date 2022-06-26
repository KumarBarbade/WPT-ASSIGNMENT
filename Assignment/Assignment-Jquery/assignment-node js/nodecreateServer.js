

const xhttp = require('http');
let xurl = require("url")

xhttp.createServer((req,res)=>{

    console.log("Server i listening at port 120...")    
    let params = xurl.parse(req.url,true).query 
    console.log(params , typeof params) 

    let msg = params.empno + " " + params.ename + " "+params.deptid
    

    res.write("Kiran")
    res.end()
}).listen(120);

