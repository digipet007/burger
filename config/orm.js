var connection = require('./connection');

var orm = {
    //for rendering all burgers
    all: function(tableInput, cb){
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    //when a burger is devoured
    update: function(tableInput, condition, cb){
        //update tableInput, which will be burgers, set devoured to true where the id is equal to the value it's sending to routes.js (in index.handlebars form, we have values={{id}})
        // console.log("orm.update fired. connection query to follow");
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id='+condition+';', function(err, result){
            // console.log("orm.update's connection query fired");
            if (err) throw err;
            cb(result);
        })
    },
    //add new burgers by inserting values into tableInput
    //we will be inserting the burger_name and the value(provided in routes.js)
    //the inner quotes around val let MySQL know that we are entering it as a string
    create: function(tableInput, val, cb){
        // console.log("orm.create fired in orm.js. connection query to follow");
        connection.query('INSERT INTO ' + tableInput + ' (burger_name) VALUES ("'+val+'");', function(err, result){
            console.log("orm.update's connection query fired");
            if (err) throw err;
            cb(result);
        })
    }
}

//pass result into models folder- burger.js
module.exports = orm;