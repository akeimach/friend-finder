var express = require('express');
var friendData = require('../data/friends');

var router = express.Router();
var rootDir = { root: __dirname + '/..' };

// A GET route with the url /api/friends
// This will be used to display a JSON of all possible friends.
router.get('/friends', function(req, res) {
    // res.send(rootDir + '/data/friends');
    res.send({ type: 'GET' });
    // return res.json(data.friends);
});

// A POST routes /api/friends
// This will be used to handle incoming survey results
// This route will also be used to handle the compatibility logic.
router.post('/friends', function(req, res) {
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    friendData.push(newFriend);
    res.json(newFriend);
});


module.exports = router;