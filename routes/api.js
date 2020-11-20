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
    const data = req.body;
    const newBlogPost = new BlogPost(data);

    //save
    newBlogPost.save((error)=>{

        if(error){
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        //BlogPost
        //status(200) sent by default
        return res.json({
            msg: 'Your data has been saved!!!!'
        });
        
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