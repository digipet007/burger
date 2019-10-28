var orm = require('../config/orm');

//call orm.all, insert burgers as table input, and then run function(res) as a callback, which will be sent into the routes.js file
var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    }
}

module.exports = burger;