var express = require('express');
var router = express.Router();
countries = require("../db/countries");
states = require("../db/states");
cities = require("../db/cities");

var success = (res, data, message = success) => {
  if (data == undefined) {
    data = [];
  }
  return res.json({
    status: "success",
    count: data.length,
    message,
    data
  });
}

var fail = (res, message) => {
  return res.json({
    status: "fail",
    message: message
  });
}

router.get('/', function(req, res, next) {
  return res.json({
    version: 0.1
  });
});

router.get('/countries', function(req, res, next) {
  return success(res, countries);
});

router.get('/states', function(req, res, next) {
  if (req.query.country == undefined || req.query.country.length == 0) {
    return fail(res, "Invalid country.");
  }
  var country = req.query.country.split(' ').join('_').toLocaleLowerCase();
  return success(res, states[country]);
});

router.get('/cities', function(req, res, next) {
  if (req.query.country == undefined || req.query.state == undefined) {
    return fail(res, "Invalid country or state.");
  }
  var country = req.query.country.split(' ').join('_').toLocaleLowerCase();
  var state = req.query.state.split(' ').join('_').toLocaleLowerCase();
  return success(res, cities[country+"_"+state]);
});

module.exports = router;