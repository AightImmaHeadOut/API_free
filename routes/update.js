const express = require('express')
const router = express.Router()
const mysql = require("mysql");
var bodyParser = require('body-parser')

router.use(bodyParser.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'node_sample'
});

// update a data
router.patch('/:id', (req,res)=>{
    const { name, genre, album, song} = req.body
    const sql = `UPDATE users SET name=?, genre=?, album=?, song=? WHERE id=?`;
    connection.query(sql, [name, genre, album, song, req.params.id], (err,result) =>{
        if(err) throw err;
        res.json({
            statusCode: 200,
            statusText: 'Success',
            result: 1
        })
    })
    console.log(req.params) 
    console.log(req.body)
})

module.exports = router