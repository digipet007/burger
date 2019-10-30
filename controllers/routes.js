var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

//display all burgers to the page
router.get('/', function(req, res){
    //burger.all is a reference to the function in burger.js
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render('index', {burger_data: burger_data});
    })
})

//update devoured burgers
router.post('/burgers/eat/:id', function(req, res){
    // console.log("router.post fired");
    burger.update(req.params.id, function(result){
        console.log(result);
        res.redirect('/');
    })  
})

//add new burgers
router.post('/burger/create', function(req, res){
    console.log("router.post fired");
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    })
})


module.exports = router;