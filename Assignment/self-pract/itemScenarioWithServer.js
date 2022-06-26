let dbparams =
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleasework',
    port: 3306
};
const mysql = require('mysql2'); 
const con = mysql.createConnection(dbparams);  

const express = require('express');
const app = express();

app.use(express.static("sf"));

app.get("/getItem", (req, resp) => {
    let input = req.query.itemno;
    console.log(input);
    let output = { itemnofoundstatus: false, itemdetails: {itemno:-1,itemname:"default",price:0 } };

   
    con.query('select * from item where itemno =?', [input], 
    (error, row) => {
        if(error){
            console.log(error)
        }
        else{
            if (row.length > 0) {
                output.itemnofoundstatus = true;
                output.itemdetails = row[0];
            }
            console.log(output,typeof output);
            resp.send(output);
        }
    }
    );
});

app.get("/addItem", (req, res) => {

   
    let input = { itemno: req.query.x, itemname: req.query.y, price: req.query.z };
    console.log(input);
    let output = false;

    con.query('insert into item(itemno,itemname,price) values (?,?,?)',
        [input.itemno, input.itemname, input.price],
        (error, resolve) => {
            if (error) {
            }
            else if (resolve.affectedRows > 0) {
                output = true;
            }
            resp.send(output);
        }
    );

});

app.get("/updateitem", (req, resp) => {

    let output = false;
    let input = {
        itemno: req.query.itemno,
        itemname: req.query.itemname, 
        price: req.query.price
    };
    console.log(input)
    con.query('update item set itemname = ?,price =? where itemno=?',
        [input.itemname, input.price, input.itemno],
        (error, whathappenedtoinsert) => {
            if (error) {
                console.log(error)
                
            }
            else if(whathappenedtoinsert.affectedRows == 0){
                console.log("ERROR ")
            }
            else if (whathappenedtoinsert.affectedRows > 0)
                output = true;
                console.log(output)
            resp.send(output);
        }
    );
});

app.get("/getAllItems", (req, resp) => {

    con.query('select * from item', [], (error, rows) => {
        resp.send(rows);
    );

});

app.listen(900, function () {
    console.log("server listening at port 900...");
});