const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname+'/dist/tasklist'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/tasklist/index.html'))
})