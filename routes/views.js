var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request');

router.get('/:pokeId', function(req, res, next) {
    // make a post request
    request({
        url:"http://localhost:3000/pokemon" + req.params.pokeId,
        method: "GET", 
    }, function(error, response, body) {
        console.log(JSON.parse(body));
        res.render('view', {hog: JSON.parse(body)});
    })
})

module.exports = router;


