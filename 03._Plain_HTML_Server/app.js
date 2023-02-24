const express = require("express");
const app = express();

app.use(express.static("public"));  //For security - makes all the files in the public-folder public for everybody

const tanks = [{name: "Tiger", id: 1},{name: "Leopard", id: 2},{name: "T17", id: 3}];
let visitorCount = 0;

// PAGES

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
});

app.put("/visitors", (req, res) => {
    res.send({ data: ++visitorCount} );
});

// API

app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks});
});

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount} );
});

const PORT = 8080;
app.listen(PORT, (error => {
    if(error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port: " + PORT);
}));
