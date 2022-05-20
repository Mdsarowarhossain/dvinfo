
const port = process.env.PORT || 4001;

const express  = require("express");

const app =  express();
const os = require("os");

var imei = require('node-imei');
 
var IMEI= new imei();
 // returns string with imei by device TAC
 
console.log(IMEI.isValid(""));
let info = os.networkInterfaces();
app.get("/",(req,res)=>{
    res.send(os.networkInterfaces().lo[0].address)
})
app.listen(port,async(req,res)=>{
      console.log(os.networkInterfaces().lo[0].address);
      

}
);
     
     
