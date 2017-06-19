const models = require('express').Router();
const allModels = require('./allModels');

models.get('/', allModels);

module.exports = models;