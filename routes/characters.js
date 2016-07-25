var express = require('express');
var router = express.Router();
var request = require('request');
var db = require('../queries');
var as = require("async");

/* GET users listing. */
var reqOpts = {
  url: 'http://api.comicvine.com/characters/?api_key=&format=json&offset=13000',
  headers: {
    'User-Agent': 'letsGetMeta'
  }
};
// var os = 11100;
// var reqOpts = {
//   url: 'http://api.comicvine.com/characters/?api_key=&format=json&offset=' + os,
//   headers: {
//     'User-Agent': 'letsGetMeta'
//   }
// };

router.get('/', function(req, res, next) {
  request(reqOpts, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var characters = JSON.parse(body).results;
      if (characters.length == 0){
        cont = false;
      } else {
        characters.forEach(db.addCharacter);
      }
    } else {
      console.log(error);
      console.log(response.statusCode);
      cont = false;
    }
  });
  res.render('character', {tt: 'TODO: This is a temporary service route...'});
});

module.exports = router;
