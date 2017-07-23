const lifestyle = require('express').Router();
const placetext = require('./place/placetext');

lifestyle.get('/place', placetext);

module.exports = lifestyle;