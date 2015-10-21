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

module.exports = {
    test1: test1
}