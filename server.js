const express = require('express');
const path = require('path');

// const api = require('./routes/notes');
const routeToNote = require('./routes/routeToNote');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', routeToNote);
// app.use('/api', api);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/notes.html'))
// });

// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/notes.html'))
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// });

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});