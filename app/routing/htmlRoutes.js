var express = require('express');


var router = express.Router();
var rootDir = { root: __dirname + '/..' };


// default route for home.html
router.get('/', function(req, res) {
    res.sendFile('/public/home.html', rootDir);
});

// GET route to display the survey page
router.get('/survey', function(req, res) {
    res.sendFile('/public/survey.html', rootDir);
});



module.exports = router;