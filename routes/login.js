var express = require('express');
var router = express.Router();


/* POST login Page */
router.post('/', function(req, res){
 res.send(req.body.username);
});

module.exports = router;
