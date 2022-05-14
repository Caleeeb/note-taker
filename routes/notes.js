// This is the Router for the notes 
const notes = require('express').Router();
const fs = require('fs');
const path = require('path');
let noteData = require('../db/db.json');

// GET route to display data from db.
notes.get('/notes', (req, res) => {
    console.log(`${req.method} request for notes recieved.`);

    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, dbNote) => {
        if (err) {
            console.error(err);
        }
        else {
            noteData = JSON.parse(dbNote);
            res.send(dbNote);
        }
    });
})

// POST route to create more in the db.
notes.post('/notes', (req, res) => {
    console.log(`${req.method} request to add note recieved.`);
    console.log(req.body);

    const { title, text } = req.body;

    // TODO: unique id for each note????
    if (title && text) {
        const newNote = { title, text };

        noteData.push(newNote);

        const allNotes = JSON.stringify(noteData, null, 2);

        // absolute path 
        // string to file
        fs.writeFile(path.join(__dirname, '../db/db.json'), allNotes, (err) => {
            err ? console.error(err) : console.log(
                `Note titled: '${newNote.title}' has been created in JSON file.`
            )
        })
        // success response
        res.json(`note added`);
    }
    else {
        // fail response
        res.json(`An error has occured while creating the note`);
    }
});

// DELETE route if I have time.

module.exports = notes;