var express = require('express');
var router = express.Router();


/* POST login Page */
router.post('/', function(req, res){
 res.send(req.body.username);
});

/* GET login Page */
router.get('/:cmd', function(req, res){
  switch(req.params['cmd']){
   case 'submit' : res.render('login', {title:"Erreur connexion"}); break;
   default : res.send(404);
  }
});

module.exports = router;
