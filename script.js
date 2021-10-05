// задание 24
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
// задание 82
// Setup
var testObj = {
    hat: "ballcap",
    shirt: "jersey",
    "shoes": "cleats"
};

// Only change code below this line
//Change the code so that all variables are declared using let or const.
// Use let when you want the variable to change, and const when you want the variable to remain constant.
// Also, rename variables declared with const to conform to common practices,
// meaning constants should be in all caps.

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

function printManyTimes(str) {

    // Only change code below this line

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }

    // Only change code above this line

}
printManyTimes("freeCodeCamp");