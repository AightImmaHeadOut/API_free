const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())



const readRouter = require('./routes/read')
app.use('/read', readRouter)

const readOneRouter = require('./routes/readOne')
app.use('/read', readOneRouter)

const deleteRouter = require('./routes/delete')
app.use('/delete', deleteRouter)

const createRouter = require('./routes/create')
app.use('/create', createRouter)

const updateRouter = require('./routes/update')
app.use('/update', updateRouter)

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Listening to port ${port}`))