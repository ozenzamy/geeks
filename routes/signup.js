var express = require('express');
var router  = express.Router();


/*GET signup Page*/

router.get('/', function(req, res){
 res.render('signup', {title: "S'inscrire sur Geek"});
});

router.post('/', function(req, res){
 if(req.body){
  res.send("Les inscription sont arreter pour l'instant");
 }
});

module.exports = router;
