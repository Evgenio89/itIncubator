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

//Given a string of digits confirm whether the sum of all
// the individual even digits are greater than the sum of all the indiviudal odd digits.
// Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return:
// "Even is greater than Odd"

//If the sum of odd numbers is greater than the sum of even numbers return:
// "Odd is greater than Even"

//If the total of both even and odd numbers are identical return:
// "Even and Odd are the same"

function evenOrOdd(str) {
    var odd = str.split('').filter(o => o % 2 != 0).reduce((a,b) => (+a) + (+b));
    var even = str.split('').filter(e => e % 2 == 0).reduce((a,b) => (+a) + (+b));
    if(even > odd) {
        return 'Even is greater than Odd';
    } else if(even < odd) {
        return 'Odd is greater than Even';
    } else {
        return 'Even and Odd are the same';
    }
}