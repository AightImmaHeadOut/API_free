const express = require('express')
const router = express.Router()
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'node_sample'
});

// get a single data using id
router.get('/:id', (req,res)=>{
    const sql = "SELECT * FROM users WHERE id = ?";
    connection.query(sql,[req.params.id], (err,result) =>{
        if(err) throw err;
        res.send(result);
    })
})

module.exports = router