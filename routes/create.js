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

// add a single user
router.post('/add', (req,res)=>{
    console.log(req.body)
    const params = req.body
    const sql = `INSERT INTO users (name, genre, album, song) VALUES (?,?,?,?)`;
    connection.query(sql, [params.name, params.genre, params.album, params.song], (err,result) =>{
        if(err) throw err;
        res.json({
            statusCode: 201,
            statusText: 'Success',
            result: `${params.name} has been added.`
        })
    })
    console.log(req.body)
})

module.exports = router