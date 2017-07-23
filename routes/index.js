const routes = require('express').Router();

const models = require('./models');
const cars = require('./cars');
const lifestyle = require('./lifestyle');

routes.use('/models', models);
routes.use('/cars', cars);
routes.use('/lifestyle', lifestyle);

routes.get('/', (request, response) => {
    response.status(200).json({ message: 'Welcome to my currently on going project! ColourProject!' });
})

module.exports = routes;