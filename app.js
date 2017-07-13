const http = require('http');
const express = require('express');
const routes = require('./routes');

const app = express();
//Setting a port
app.set('port', process.env.PORT || 8080);

//Connect all the routes to the application
app.use('/', routes);

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});

// function send404(response) {
//     response.writeHead(404, {"Content-type": "text/plain"});
//     response.write("Error 404: resource not found");
//     response.end();
// }