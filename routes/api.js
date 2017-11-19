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
      message: "Invalid country",
    });
  }
  var country = req.query.country.split(' ').join('_').toLocaleLowerCase();
  console.log(country)
  res.json(states[country]);
});

router.get('/cities', function(req, res, next) {
  res.json(cities);
});


module.exports = router;
