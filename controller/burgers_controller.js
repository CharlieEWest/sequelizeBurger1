var express = require('express');
var router = express.Router();
var Burger = require('../models');

router.get('/index', function(req,res) {
	models.Burgers.findAll({}).then(function(data){

    var hbsObject = { burgers: data };
   // console.log(data);
    res.render('index', hbsObject);

  })
});
router.get('/burger', function(req,res) {


	Burger.all(function(data){
		var hbsObject = {burgers : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});


router.post('/burger/create', function(req,res) {
	burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], function(data){
		res.redirect('/burger')
	});
});

router.put('/burger/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burger');
	});
});

module.exports = router;
