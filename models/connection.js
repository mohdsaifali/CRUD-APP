const mysql = require('mysql')


const db = mysql.createConnection({
host:"localhost",
user:'root',
password:"",
database:"student"
})

db.connect((err)=>{
    if(err)throw err;
    console.log("mysql connected!!")
})
