var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request'); 



router.get('/:pokeId', function(req, res, next) {
    //make GET request to database
    console.log("VIEWS!")

    request(
        'http://localhost:3000/pokemon/' + req.params.pokeId,
        "GET",
        function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            res.render('views', {poke: JSON.parse(body)} );
    });
    
});

module.exports = router;



















































// var express = require('express');
// var router = express.Router();
// var Pokemon = require('../db.json');
// var request = require('request');


// router.get('/:pokeId', function(req, res, next) {
//     // request(
//     //     'http://localhost:3000/pokemon' + req.params.pokeId,
//     //     "GET",
//     //     function (error, response, body) {
//     //         res.render('views', {poke: JSON.parse(body)});
//     // });
//     // request({
//     //     url: "http://localhost:3000/pokemon"+ req.params.pokeId,
//     //     method: "GET",


//     // }, function(error, response, body) {
//     //     console.log("The body:");
//     //     console.log(JSON.parse(body));
//     //     res.render('views', {poke: JSON.parse(pokeId)});
//     // }
//     // );


// });

// module.exports = router;