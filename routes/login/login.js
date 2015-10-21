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

var register_form = { method:'GET',
                      path:'/registration',
                      config:{
                          description:' New user Registration',
                          handler: function(request,reply){
                              reply("asdsadas");
                              //reply.view('registration.ejs');
                          }
                      }

}

var index = {
    method:'GET',
    path:'/hello',
    handler: function(request,reply)
    {
        console.log("in hello route");
        reply("hello world");
    }


}

var abc = [test,
    register_form,
    index];
module.exports = abc;