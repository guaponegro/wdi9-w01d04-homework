// console.log("JS is up");

// 1. Verbal questions

/* A parameter is a variable in a method definition.
An argument is the actual value of this variable that gets
passed to the function. */

/* Console.log prints the output in the console. Return
will return a value when the function is called */

/* The scope of a variable is based on the location
of the variable declaration. Meaning that if you define
a variable inside of a function, you will be able to 
call it back only in the confines of that function. 
However, if you define a variable outside of a function, 
you can always call it back because it is not confined to the 
function. */

// 2. Palindrome again

// const checkPalindrome = (str) => {
//     let lowerWord = str.toLowerCase();
//     let reverseWord = lowerWord.split("").reverse("").join("");
//     if(reverseWord === lowerWord){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkPalindrome("Racecar"));
// console.log(checkPalindrome("Burger"));

// 3. Digit Sum

const sumDigits = (digit) => {
    let changeToString = 0;
    let newSum = digit.toString().split("");
    for(let i = 0; i < newSum.length; i++){
        const brandNewSum = parseInt(newSum[i]);
        changeToString = changeToString + brandNewSum;
    }
    return changeToString
}

console.log(sumDigits(34));









































