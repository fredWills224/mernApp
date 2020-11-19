const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

//HTTP request logger
app.use(morgan('tiny'));

app.get('/api', (req, res) => {

    const data = {
        username: 'unity',
        age: 6        
    };
    res.json(data);

});

app.get('/api/harmony', (req, res) => {

    const data = {
        username: 'harmony',
        age: 14        
    };
    res.json(data);

});

app.listen(PORT, console.log(`server is starting at ${PORT}`));