var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET status page. */
router.get('/status', function(req, res) {
  res.send('200 OK');
});

module.exports = router;
