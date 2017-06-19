const data = require('../data.json');

module.exports = (request, response) => {
    const models = data.models;

    response.status(200).json({ models });
};