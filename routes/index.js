var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld')
});
module.exports = router;
