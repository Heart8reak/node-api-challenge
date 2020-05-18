const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send(`<h3>OMG I have it uP and ruNninG!</h3>`)
})

module.exports = server