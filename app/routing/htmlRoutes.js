var express = require('express');


var router = express.Router();
var rootDir = { root: __dirname + '/..' };


// A default, catch-all route that leads to home.html which displays the home page.
router.get('/', function(req, res) {
    res.sendFile('/public/home.html', rootDir);
});

// A GET Route to /survey which should display the survey page.
router.get('/survey', function(req, res) {
    res.sendFile('/public/survey.html', rootDir);
    // res.sendFile('/public/results.js', rootDir);
});

// router.get('/results', function(req, res) {
//     res.sendFile('/public/results.js', rootDir);
// });


module.exports = router;