const http = require('http');
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8080);
app.get('/', (request, response) => {
    response.send('Hello World');
});

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
