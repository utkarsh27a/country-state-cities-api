var express = require('express');
var router = express.Router();
countries = require("../db/countries");
states = require("../db/states");
cities = require("../db/cities");


router.get('/', function(req, res, next) {
  res.json({
    version: 0.1
  });
});

router.get('/countries', function(req, res, next) {
  res.json(countries);
});

router.get('/states', function(req, res, next) {
  if (req.query.country == undefined) {
    return res.json({
      status: "fail",
      message: "Invalid country.",
    });
  }
  var country = req.query.country.split(' ').join('_').toLocaleLowerCase();
  res.json(states[country]);
});

router.get('/cities', function(req, res, next) {
  if (req.query.country == undefined || req.query.state == undefined) {
    return res.json({
      status: "fail",
      message: "Invalid country or state.",
    });
  }
  console.log(country);
  var country = req.query.country.split(' ').join('_').toLocaleLowerCase();
  var state = req.query.state.split(' ').join('_').toLocaleLowerCase();
  res.json(cities[country+"_"+state]);
});


module.exports = router;
