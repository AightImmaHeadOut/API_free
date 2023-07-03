const express = require('express')
const router = express.Router()
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'node_sample'
});

// get all data
router.get('/', (req,res)=>{
    const sql = "SELECT * FROM users";
    connection.query(sql,(err,result) =>{
        if(err) throw err;
        res.send(result);
    })
})

module.exports = router