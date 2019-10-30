var orm = require('../config/orm');

//these functions take in the burgers table
var burger = {
    //for rendering all burgers
    all: function(cb){
        //burgers is our tableInput from orm.js function
        //callback sent into routes.js file
        orm.all('burgers', function(res){
            cb(res);
        })
    },
    //for devouring burgers
    update: function(id, cb){
        // console.log("burger.update fired and will call orm.update");
        orm.update('burgers', id, cb);
    },
    //for creating new burgers
    create: function(name, cb){
        console.log("burger.create fired and will call orm.create");
        orm.create('burgers', name, cb);
    }
}

//passed into
module.exports = burger;