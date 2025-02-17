const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Translate-Quran App Server running')
})

app.listen(port, () => {
    console.log('Translate-Quran App Server runung on Port:', port)
})