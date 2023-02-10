
//In JavaScript you can call a message that is belov the call because of hoisting
console.log(random(0, 100));

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) - min);
}

const randomAnonymousFunction = function(min, max){
    return Math.floor(Math.random() * (max - min + 1) - min);
}; 

console.log(randomAnonymousFunction(0, 10));

const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
}; 

console.log(randomAnonymousFunction(0,2));


const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);

console.log(randomAnonymousFunction(0,10));



//Callback function - it's a functions passed as arguments, that you call/callback
function genericFunctionPerformer(genericAction, genericName){
    

    return genericAction(genericName);
}

const subtract = (name) => `${name} is subtracting.`;
console.log(genericFunctionPerformer(subtract, "Tobias"));

const walk = (name) => `${name} is walking`;
console.log(genericFunctionPerformer(walk, "Nicolas"));

console.log(genericFunctionPerformer(((name) =>  `${name} is reading`), "Andrea"));




