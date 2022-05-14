// This is the Router to get the route from the index.html to the notes.html
const app = require('express').Router();
const path = require('path');

// GET route for the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// GET route for the note.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = app;