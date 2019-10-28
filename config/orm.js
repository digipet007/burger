var connection = require('./connection');

var orm = {
    //connection query selects everything from tableInput argument, then uses a callback to pass the resilt into the next file, within the models folder
    all: function(tableInput, cb){
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, res){
            if(err) throw err;
            cb(result);
        })
    },
    update: function(tableInput, condition, cb){
        connection.query('UPDATE' + tableInput + 'SET devoured=true WHERE id=' +condition+';', function(err, result){
            if(err) throw err;
            cb(result);
        })
    }
}