

const jsonServer = require('json-server');
const path = require('path');
const compression = require('compression');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
server.use(compression())
// Serve only the static files form the dist directory
server.use(express.static(__dirname + '/dist/Dinesh-app1'));

server.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/Dinesh-app1/index.html'));
});
server.use(middlewares);
server.use(router);

server.listen(port);