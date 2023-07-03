const express = require('express')
const router = express.Router()
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'node_sample'
});

// delete a single user
router.delete('/:id', (req,res)=>{
    const sql = "DELETE FROM users WHERE id = ?";
    connection.query(sql,[req.params.id], (err,result) =>{
        if(err) throw err;
        res.send(`${[req.params.id]} has been removed.`);
    })
})

module.exports = router