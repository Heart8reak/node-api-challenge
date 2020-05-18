const express = require('express')
const db = require('../data/helpers/actionModel')

const router = express.Router()

///Get all actions

router.get('/', (req, res) => {
    db.get()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            res.status(500).json({ message: " Error getting actions" })
        })
})

//Get actons for specific id

router.get("/:id", (req, res) => {
    const { id } = req.params
    db.get(id)
        .then(action => {
            res.json(action)
        })
        .catch(err => {
            res.json(500).json({ message: "Error getting actions" })
        })
})

//Post

router.post('/', (req, res) => {
    db.insert(req.body)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(500).json({ message: "Error posting" })
        })
})

//Update

router.put('/:id', (req, res) => {
    const { name, description } = req.body
    if (!name || !description) {
        res.status(404).json({ error: "Name and description required" })
    }
    db.update(req.params.id, req.body)
        .then(action => {
            action ? res.status(200).json(action) : res.status(404).json({ error: "Cannot find that post" })
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "Failed to edit" })
        })
})

//Delete

router.delete("/:id", (req, res) => {
    const { id } = req.params
    db.remove(id)
        .then(project => {
            res.json(project)
        })
        .catch(() => {
            res.status(500).json()
        })
})

module.exports = router