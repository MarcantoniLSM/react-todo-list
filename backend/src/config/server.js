const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const aloowCors = require('./cors')
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(aloowCors)

server.listen(port, function(){
    console.log('rodando na porta 3003')
})

module.exports = server