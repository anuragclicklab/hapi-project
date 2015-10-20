var Hapi = require('hapi');
var Routes = require('./Routes');
var Path = require('path');
var server = new Hapi.Server();
server.connection({ port: 3000 });
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

Routes.forEach(function (api) {
    server.route(api);
});

server.route({
    method: 'GET',
    path: '/login',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});
/*server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
       //console.log('request.params.name'); 
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});*/

server.start(function () {
    console.log('Server running at:', server.info.uri);
});