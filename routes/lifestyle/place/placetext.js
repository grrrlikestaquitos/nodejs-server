const placeData = require('./placetextdata.json');

module.exports = (request, response) => {
    const placeText = placeData.bedroom;
    response.status(200).json(placeText);
}