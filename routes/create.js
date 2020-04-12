var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request');

// GET create  page

router.get('/:pokeId', function(req, res, next) {
    
    res.render('create', {message: false});
});

// POST TO DB

router.post('/', function(req, res, next) {
    // test if data is coming through 


    // set a dynamic id
    var id = Pokemon.pokemon.length;

    // make a post request to datababse
    request({
        url: "http://localhost:3000/pokemon",
        method: "POST",
        form: {
            id: id,
            name: req.body.name,
            image: req.body.image_url
        }
    }, function (error, response, body) {
        res.render.apply('create',{message: "Successfully Added"});
        
    }
    )
})

module.exports = router;