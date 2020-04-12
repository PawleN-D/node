var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request');

/* GET home page. */
  router.get('/', function(req, res, next) {

    let data = {
      title: 'It\'s Pokemon Time! ',
      pokemon: Pokemon,
      message: false,
    
    }
    res.render('index', data)
  });

module.exports = router;
