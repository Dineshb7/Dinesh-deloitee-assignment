
const express = require('express');
const path = require('path');

const compression = require('compression')
const app = express();
  app.use(compression())
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Dinesh-app1'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/Dinesh-app1/index.html'));
});


// SERVER RUN
app.listen(process.env.PORT || 8080);

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);