//DATA VARIABLES 
let friends = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      }
]

//Create new friend
app.get("/api/friends", function(req, res) {
    let newFriend = req.body;
   
    
    addFriend(newFriend);
    console.log(friend);
    res.json(200)
})

app.post("/api/friends", function(req, res) {
    let newFriend = req.body;
   
    
    addFriend(newFriend);
    console.log(friend);
    res.json(200)
})

//Functions to generate the new friend
function addFriend({name, photo, scores}){
    //console.log(name);
    if(friend[name]) {
        return false;
    }
    console.log("hit", friend);
    friend[name.toLowerCase().replace(/\s+/g, '')] = new Friend({name, phoneNumber, email, id});
    
}

function Friend({name, photo, scores}){
    this.name = name || "noname";
    this.photo = photo || "8287364361";
    this.email = email || [];
}