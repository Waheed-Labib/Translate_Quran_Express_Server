require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Translate-Quran App Server running')
})

app.listen(port, () => {
    console.log('Translate-Quran App Server runung on Port:', port)
})

module.exports = app;