const express = require('express');
const app = express();
const data = require('./db.json');

app.get('/movies', (req, res) => {
    return res.json(data);
})

app.listen('3000', () => {
    console.log('epa');
})