var express = require('express');
var allFriends = require('../data/friends');

var router = express.Router();

// GET route for the url /api/friends
// To display a JSON object of all possible friends
router.get('/friends', function(req, res) {
    res.send({ allFriends });
});

// POST route for /api/friends, handle incoming survey results
// Also handle compatability logic
router.post('/friends', function(req, res) {
    var newFriend = req.body;
    for (var i in allFriends) {
        var newMatch = allFriends[i];
        var score = 0;
        for (var j = 0; j < newMatch.scores.length; j++) {
            score += Math.abs(newMatch.scores[j] - newFriend.scores[j]);
        }
        console.log(score);
    }
    allFriends.push(newFriend);
    res.json(allFriends);
});


module.exports = router;