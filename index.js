var Hapi = require('hapi');
var Routes = require('./routes');
var Path = require('path');
//var Inert = require('inert');
var Ejs = require('ejs');
var mysql = require('mysql');
var server = new Hapi.Server();
var Plugins = require('./plugins');
//server.register(Inert);
server.connection({ port: 6500 });

server.register(Plugins, function (err) {
    if (err) {
        server.error('Error while loading plugins : ' + err)
    } else {
        server.log('info', 'Plugins Loaded')
    }
    /**
     * Start Server
     **/

});

/*
 server.register(require('vision'), function (err) {
     server.views({
     engines: {
     ejs: require('ejs')
     },
     relativeTo: Path.join(__dirname, '/view'),
     path: Path.join(__dirname, '/view')
     });
 });
 server.register(require('inert'), function (err) {
     if (err) {
     throw err;
     }
 });
*/

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

/*server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
       //console.log('request.params.name'); 
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});*/




server.route({
    method:'GET',
    path:'/helloo',
    handler: function(request,reply)
    {
        console.log("hello world");
        reply("hello world");
    }
})/*
var options = {
  views: {
    path: 'templates',
    engines: {
      module: Ejs
    },
      relativeTo: __dirname,
      path: 'templates'
  }
}*/

var db_config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "hapi",
    multipleStatements: true
};   //sss
connection = mysql.createConnection(db_config);
connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    }
);



server.start(function () {
    console.log('Server running at:', server.info.uri);
});

server.views({
    engines: {
        ejs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './Views'
});
