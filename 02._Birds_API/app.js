const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());    //Makes express parse data as JSON 

const allTheBirds = [{name: "Pigeon", id: 1}, {name: "Duck", id: 2}, {name: "Albatross", id: 3}];

app.get("/birds", (req, res) => {
    res.send({ data: allTheBirds });
});

app.get("/birds/:id", (req, res) =>  {
    const id = Number(req.params.id);
    const bird = allTheBirds.find((bird) => bird.id === id);
    if(!bird){
        res.send( {message: "Bird with the id of " + id + " wasn't found."} )
    } else {
        res.send( {data: bird} );
    }
});


app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});