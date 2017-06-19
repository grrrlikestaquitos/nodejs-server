const data = require('../data.json');

module.exports = (request, response) => {
    const cars = data.cars;

    response.status(200).json({ cars });
};