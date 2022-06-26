const xmysql = require("mysql2")

let dbparams = { 
    host : 'localhost',
    user :'root',
    database:'pleasework',
    port:'3306',
    password:'cdac',
}

const conn = xmysql.createConnection(dbparams); 

let userid = 'Kundan';
let password = 'myPass';


conn.query('insert into cusers(userid,password) values (?,?);',[userid,password],
(err,res1)=>{
    if(err){
        console.log("Error has occured, Let's C")
        console.log(err)
    }
    else{
        console.log(res1.affectedRows)    
    }
})

userid = "a";
password ="Welcome@123" 


conn.query("update cusers set password=? where userid=?",[password,userid],
(err,res1)=>{
    if(err){
        console.log("Error has occured")
    }else{
        console.log(res1)
        if(res1.affectedRows === 0){
            console.log("Update failed")
        }else{
            console.log("Update successfull!")
        }
    }
})



userid = 'a'
conn.query("select * from cusers where userid =?",[userid],
    (err,row)=>{
        if(err){
            console.log(err)
        }
        else{
            if(row.length>0){
                console.log(row[0].userid + " " + row[0].password) // a d
            }
            else{
                console.log("No such user with userid : " + userid) 
            }
        }
    }
)

password = "d";
conn.query("select * from cusers where password = ?",[password],
    (err,rows)=>{
        if(err){
            console.log("Failed to reach database")
        }
        else{
            console.log(rows) // [ { userid: 'c', password: 'd' } ]
        }
})

// MULTI SELECT

//lets make two USER-ids having same password to demonstrate the multi select
userid = "a"
password = "d"

conn.query("update cusers set password=? where userid=?",[password,userid],
(err,res1)=>{
    if(err){
        console.log("Error has occured")
    }else{
        console.log(res1)
        if(res1.affectedRows === 0){
            console.log("Update failed")
        }else{
            console.log("Update successfull!")
        }
    }
})


password= "d";

conn.query("select * from cusers where password=?",[password],
(err,rows)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(rows)
        console.log(rows[0]) 
        console.log(rows[1]) 
        console.log(rows[2]) 
    }
})

conn.query("select * from cusers where password=?",[password],
(err,rows)=>{
    if(err){
        console.log(err)
    }
    else{
        if(rows.length>0){
            console.log("userid  password")                
            for (let index = 0; index < rows.length; index++) {
                console.log(rows[index].userid+"        " +rows[index].password)                
            }
        }
        else{
            console.log("no rows fetched from Database")
        }
    }
})
