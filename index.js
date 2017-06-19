const http = require('http');
const express = require('express');

const app = express();
//Setting a port
app.set('port', process.env.PORT || 8080);

//Initial page
app.get('/', (request, response) => {
    response.send('Hello World');
});

//Endpoint for retrieving a 'note'
app.get('/note', (request, response) => {
    response.json({
        notes: "This is a random note"
    });
});

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});

// function send404(response) {
//     response.writeHead(404, {"Content-type": "text/plain"});
//     response.write("Error 404: resource not found");
//     response.end();
// }