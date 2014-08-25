var express = require('express');
var router  = express.Router();
var validator = require('validator');
var md5 = require('MD5');
var userModel = require('../models/user'); 


/*GET signup Page*/

router.get('/', function(req, res){
 res.render('signup', {title: "S'inscrire sur Geek"});
});


router.post('/', function(req, res){
 var firstname = (req.body.firstname.length > 2) ? req.body.firstname : false;
 var lastname = (req.body.lastname.length > 2) ? req.body.lastname : false;
 var sexe = req.body.sexe;
 var email = (validator.isEmail(req.body.email)) ? req.body.email : false; 
 var password = (req.body.password.length >= 6) ? md5(req.body.password) : false;
 if(!firstname){
  res.send('Le nom doit etre composé de 6 caracteres et plus');
 }
 if(!lastname){
  res.send('Le prenom est invalide doit etre composé de 6 caractere et plus');
 }
 if(!email){
  res.send('Email Invalide');
 }
 if(!password){
  res.send('Mot de passe doit etre composé de 6 caractere et plus');
 } 
});

module.exports = router;
