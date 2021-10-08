//Write a program that reads an acrostic to identify the "hidden" word. Specifically,
// your program will receive a list of words (reprensenting an acrostic)
// and will need to return a string corresponding to the word that is spelled out
// by taking the first letter of each word in the acrostic.
function readOut(words) {
    if (!words) { return ''; }

    var first_letter = function(x){ if (x) { return x[0]; } else { return ''; }};



    return words.map(first_letter).join('');

}
//The following was a question that I received during a technical interview for an entry level
// software developer position. I thought I'd post it here so that everyone could give it a go:

//You are given an unsorted array containing all the integers from 0 to 100 inclusively.
// However, one number is missing. Write a function to find and return this number.
// What are the time and space complexities of your solution?

   // ALGORITHMS
function missingNo(arr) {
    const sum = ((99 + 1) * (99 + 2)) / 2;
    const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
    return sum - arrSum(arr);
}

