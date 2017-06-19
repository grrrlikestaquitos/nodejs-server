const cars = require('express').Router();
const allCars = require('./allCars');

cars.get('/', allCars);

module.exports = cars;