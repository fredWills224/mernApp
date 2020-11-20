const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');

// routes
router.get('/', (req, res) => {

    const data = {
        username: 'unity',
        age: 6        
    };

    BlogPost.find({})
        .then((data)=>{
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error)=>{
            console.log('Error: ', error);
        })
    ;


});

router.post('/save', (req, res) => {

    console.log('Body: ', req.body);
    res.json({
        msg: 'We recieved your data!!!!'
    });

});

router.get('/harmony', (req, res) => {

    const data = {
        username: 'harmony',
        age: 14       
    };
    res.json(data);

});

module.exports = router;