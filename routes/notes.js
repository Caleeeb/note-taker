// This is the Router for the notes 
const notes = require('express').Router();
const fs = require('fs');
const path = require('path');
let noteData = require('../db/db.json');

// GET route to display data from db.
notes.get('/notes', (req, res) => {
    console.log(`${req.method} request for notes recieved.`);
})

// POST route to create more in the db.
notes.post('/notes', (req, res) => {
    console.log(`${req.method} reuqest to add note recieved.`);
})

// DELETE route if I have time.

module.exports = notes;