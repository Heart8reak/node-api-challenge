const express = require('express')
const helmet = require('helmet')

const projectRouter = require('./routers/projectRouter')
const actionRouter = require('./routers/actionRouter')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(logger)

server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

server.get('/', (req, res) => {
    res.send(`<h3>OMG I have it uP and ruNninG!</h3>`)
})

function logger(req, res, next) {
    const method = req.method
    const endpoint = req.url
    const timestamp = Date.now()
    console.log(`${method} to ${endpoint} at ${timestamp}`)
    next()
}

module.exports = server