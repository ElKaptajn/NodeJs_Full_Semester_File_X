//const app = require("express")();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({message: "Our first route"}    );
});

let bicycleSpins = 0;
let kicks = 0;

app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send({ message: `Number of spins: ${bicycleSpins}}`});
});

/*
    Assignment
        Create a new route that kicks the dinosaur
*/

app.get("/kickthedinosaur", (req, res) => {
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

// Time 
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthWritten = ["January","February","March","April","May","June","July","August","September","October","November","December"];

app.get("/time", (req, res) => {
    res.send({ time: new Date().toLocaleTimeString() });
});

app.get("/time/day", (req, res) => {
    res.send({ data: weekday[new Date().getDay()] });
});

app.get("/time/month", (req, res) => {
    res.send({ data: monthWritten[new Date().getMonth()] });
});

//bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    console.log();
    res.send({ bottleSize: req.params.bottleSize });
});

app.post("/package", (req, res) => {
    console.log(req.body);
    res.send({ message: req.body });
});

app.listen(8080);

