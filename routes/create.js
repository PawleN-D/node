var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request');
var bodyParser = require('body-parser');

// GET create  page

router.get('/:pokeId', function(req, res, next) {
    let data = {
        title: 'Add Pokemon',
        message: false
    }   
    res.render('create', data);
});

// POST TO DB

router.post('/', function(req, res, next) {
    // test if data is coming through 


    // set a dynamic id
    var new_id = Number(++Pokemon.pokemon.length);
    
    // make a post request to datababse
    request({
        url: "http://localhost:3000/pokemon",
        method: "POST",
        form: {
            id: Number(new_id),
            name: req.body.name,
            image: req.body.image_url
        }
    }, function (error, response, body) {
        res.render.apply('create',{message: "Successfully Added"});
        
    }
    )
})

module.exports = router;

var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request');
var bodyParser = require('body-parser');

// GET create page:
router.get('/', function(req, res, next) {
    let data = {
        title: 'Add Pokemon',
        message: false
    }
    res.render('create', data);
});

// POST to DB:
router.post('/', function(req, res, next){
    // test if data is coming through:

    // set a new dynamic id
    var new_id = Number(++Pokemon.pokemon.length);
    
    console.log("Creating " + req.body.namePokemon + " on the new id of: " + new_id);

    // make a post request to our database and update the id:
    request({
        url: "http://localhost:8000/pokemon",
        method: "POST",
        form: {
            id: Number(new_id),
            name: req.body.namePokemon,
            image: req.body.imagePokemon
        }
    }, function(error, response, body) {
        console.log("The body:");
        console.log(body);
        res.render.apply('create', {message: 'Successfully Added new Pokemon'});
    }
    );

    res.redirect('/');
});

module.exports = router;