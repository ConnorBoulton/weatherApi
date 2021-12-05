const express = require("express")
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../files/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../files/main.css'))    
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../app.js'))
})

const port = process.env.port || 3000

app.listen(port, () => {console.log(`Port listening on ${port}`)})