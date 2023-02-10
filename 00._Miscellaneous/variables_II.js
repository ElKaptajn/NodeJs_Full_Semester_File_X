//Chatches problems that are allowed, but arn't good code standard
"use strict"

//Never declare variables like this:
//totaltGlobalVariable = "Never do this";
//var gloabalVariable = "Also never do this";

/* {
    var someValue = true;
    {
        var someValue = true; 
    }
    console.log(someValue); //true
}

{
    let someValue = true;
    {
        let someValue = true;
    }
    console.log(someValue); //false
} */

/* 
for(var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}
//Output : 666666

for(let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}
//Output : 012345 */