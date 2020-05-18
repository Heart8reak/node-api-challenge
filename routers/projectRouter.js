const express = require('express')
const db = require('../data/helpers/projectModel')

const router = express.Router()

//Get all projects

router.get('/', (req, res) => {
    db.get()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: "Error getting actions" })
        })
})

//Get projects for specifi id

router.get('/:id', (req, res) => {
    const { id } = req.params
    db.get(id)
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: "Error getting actions" })
        })
})

//Post a new project

router.post('/', (req, res) => {
    db.insert(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({ message: "Error posting" })
        })
})

//Update

router.put('/:id', (req, res) => {
    const { name, description } = req.body
    if (!name || description) {
        res.status(400).json({ error: "Name and Description required!" })
    }
    db.update(req.params.id, req.body)
        .then(project => {
            project ? res.status(200).json(project) : res.status(404).json({ error: "cannot find that post" })
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "Failed to edit" })
        })
})

//Delete

router.delete('/:id', (req, res) => {
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