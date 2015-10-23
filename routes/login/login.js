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
                             //reply("sxsx");
                           fields: [
                                  {name:'email',type:'text',property:'required'},   //first field for the form
                                  {name:'password',type:'password',property:'required'}   //another field for the form
                              ]
                              //reply.view('registration.ejs', { field:fields });
                              reply.view('registration.ejs');
                          }
                      }

}

var createuser = { method:'POST',
    path:'/createuser',
    config:{
        description:'insert into db',
        handler: function(request,reply){
            //console.log(request.payload);
            //reply(request.payload);
            controller.login.createuser(request.payload, function (error, success) {
                if (error)
                    reply(error);
                else
                    reply(success);

            });
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
    index,createuser];
module.exports = abc;