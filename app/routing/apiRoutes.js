var friendsData = require("../data/friends");
let newScore = [];

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    })

    //Create new friend
    app.post("/api/friends", function(req, res) {


        for (key in req.body.scores) {
            newScore.push(parseInt(req.body.scores[key]));
        }

        let newFriend = {
            name: req.body.name, 
            photo: req.body.photo,
            scores: newScore
        }

        friendsData.push(newFriend);

        console.log(newScore);
        

        res.json("Success");
    })

}