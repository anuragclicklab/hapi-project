controller = require('../../Controllers');
var test = {
    method: 'GET',
    path: '/login',
    config: {
        description: 'Logout service provider',
        handler: function (request, reply) {
            controller.login.test1(request, function (error, success) {
                if (error)
                    reply(error);
                else
                    reply(success);
                //);
            });
        }
    }
 }
/*var test = {
 method: 'GET',
 path: '/login',
 config: {
 handler: function (request, reply) {
 reply("hello wor;d");
 }

 }
 };*/

var abc = [test];
module.exports = abc;