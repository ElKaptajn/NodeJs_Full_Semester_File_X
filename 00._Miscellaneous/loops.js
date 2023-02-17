const rocks = [
    { name: "Led Zeppelin", age: 50},
    { name: "Dwayne Johnson", age: 47},
    { name: "Egon Olsen", age: 100_000_000},
    { name: "Egon Larsen", age: 2}
];

console.log(rocks);

const rocksAgedOneYear = rocks.filter(rock => {
    return rock.age % 2 === 0;
});

console.log(rocksAgedOneYear);

/*
const rocksAgedOneYear = rocks.map( rock=>{
    rock.age++
    return rock;
});

*/ 

/*
const rocksAgedOneYear = [];

rocks.forEach(rocker => {
    rocksAgedOneYear.push( {name: rocker.name, age: (rocker.age + 1)} )
});

console.log(rocksAgedOneYear);

*/
