const express = require('express');
const app = express();

app.get('/movies', (req, res) => {
    return res.json({message: 'ok'})
})

app.listen('3000')