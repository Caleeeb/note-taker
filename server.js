const express = require('express');
const path = require('path');

const api = reuire('./routes/')

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', api);



app.listen(PORT, () => {
    console.log('listening on port ${PORT}');
});