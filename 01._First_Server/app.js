//const app = require("express")();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({message: "Our first route"}    );
});

let bicycleSpins = 0;
let kicks = 0;

app.get("/spinthebicycle", (rep, res) => {
    bicycleSpins += 1;
    res.send({ message: `Number of spins: ${bicycleSpins}}`});
});

/*
    Assignment
        Create a new route that kicks the dinosaur
*/

app.get("/kickthedinosaur", (rep, res) => {
    kicks += 1;
    res.send({ message: `You kicked the dinosaur for the ${kicks} time! - Dinosaur says: ow, ow, ow`});
});

app.get("/about", (req, res) => {
    res.send(`
        <h1>About</h1>
        <p>Welcome to my page!</p>
        <p>Another line of code</p>
    `)
});

//bat?adjective=spooky
app.get("/bat", (req, res) => {
    res.send({ message: `The bat is ${req.query.adjective}.` });
});

//bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    console.log();
    res.send({ bottleSize: req.params.bottleSize });
});

app.listen(8080);

