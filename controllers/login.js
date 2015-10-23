var async = require('async');
//Console.log("login controller");
var test1 = function (data, callbackRoute) {
    async.waterfall([
        function (callback) {
            connection.query('SELECT * FROM users', callback);
        },
        function (result, callback) {
            //console.log(result);
            return callbackRoute(null,result);
        }
    ], function (error) {
        if (error)
            return callbackRoute(error);
            return callbackRoute(null, {success: true});
    });


};

var register_form = function (data,callbackRoute){
asyn.waterfall([

],function(error){
   if(error)
    return callbackRoute(error);
    repl
});

}
/*
var createuser = function(data,callbackRoute) {
    var data1 = {fname : data.fname,lanme:data.lname,email: data.email,password:data.password};
    async.waterfall([

        function(callback)
        {
            //connection.query("INSERT INTO users set ? ",data1, callback);
            //connection.query('SELECT * FROM users', callback);


        },function (result, callback) {
            //console.log(result);
            return callbackRoute(null,result);
        }

    ], function (error) {
        if (error)
            return callbackRoute(error);
        return callbackRoute(null, {success: true},{data:data});
    });
}*/

var createuser = function(data,callbackRoute) {
    var data1 = {fname : data.fname,lanme:data.lname,email: data.email,password:data.password};
    async.waterfall([
       /* function (callback)
        {
            var data1 = {fname : data.fname,lanme:data.lname,email: data.email,password:data.password};
            callback(null,data1);
        },*/
        function(callback)
        {   connection.query("INSERT INTO users set ? ",data1, callback);
            /*connection.query("INSERT INTO users set ? ",data1, function(err, rows)
            {

                if (err)
                    console.log("Error inserting : %s ",err );
                console.log(rows);
                //res.redirect('/customers');

            });*/
            //connection.query('SELECT * FROM users', callback);
        },function (result, callback) {
            //console.log(result);  reply.redirect('/registration');
            return callbackRoute(null,result);
        }],function (error) {
                if (error)
                  return callbackRoute(error);
        reply.redirect('/registration');
                //return callbackRoute(null, {success: true},{data:data});
    });
}

module.exports = {
    test1: test1,register_form:register_form,createuser: createuser,
}
