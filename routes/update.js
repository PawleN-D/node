var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request');

// GET create  page

router.get('/:pokeId', function(req, res, next) {
    request.get(
        request({
            url:"http://localhost:3000/pokemon" + req.params.pokeId,
        }, function(error, response, body) {
            // console.log(JSON.parse(body));
            res.render('view', {poke: JSON.parse(body)});
        })
    )
    res.render('update', {message: false, poke: JSON.parse(body)});
});

// POST TO DB

router.post('/:pokeId', function(req, res, next) {
    request({
        url:"http://localhost:3000/pokemon" + req.params.pokeId,
        method: "PATCH",
        form: {

            name: req.body.updateName
        }
    }, function (error, response, body) {
        // res.render.apply('',{message: "Successfully Added"});
        
    }
    );

    res.redirect('/views/' + req.params.pokeId);
})

module.exports = router;