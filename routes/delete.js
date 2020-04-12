const express = require('express'); //Import Express
const router = express.Router(); // Link the express router
const Pokemon = require('../db.json'); // we require the DB
const request = require('request'); // Request to handlerequest

//Register the router with the app
router.get('/:pokeId', function (req, res, next) {
    //Find id in the db
    var id_deleted;
    var pokes = Pokemon.pokemon

    for (let i = 0; i < pokes.length; i++) {
        if (pokes[i].id == id_deleted) {
            id_deleted = i;
        }        
    } 
    res.render('delete', {
        title: "Deleted",
        pokemon: Pokemon,
        id_deleted = pokemon[id_deleted]
    })


    request({
        url:"http://localhost:3000/pokemon" + req.params.pokeId,
        method: 'DELETE',
    }, function (err, response, body) {
        let data = {
            title: 'All Pokemon',
            pokemon: Pokemon,
            message: "Deleted" 
          }
    });
    res.redirect('/index', data)

})

module.exports = router; // To make this router  available to our app