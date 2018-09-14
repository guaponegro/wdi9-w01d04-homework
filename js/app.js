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

// const sumDigits = (digit) => {
//     let changeToString = 0;
//     let newSum = digit.toString().split("");
//     for(let i = 0; i < newSum.length; i++){
//         const brandNewSum = parseInt(newSum[i]);
//         changeToString = changeToString + brandNewSum;
//     }
//     return changeToString
// }

// console.log(sumDigits(34));

// 4. Pythagoras

// const calculateSide = (sideA, sideB) => {
//     let sum = Math.pow(sideA, 2);
//     let sum2 = Math.pow(sideB, 2);
//     return Math.sqrt(sum + sum2)
//     }
// console.log(calculateSide(8, 6));

// 5. Sum Array

// const sumArray = (arr) => {
//     let sum = 0;
//     for(i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// }

// sumArray([1,2, 3, 4, 5, 6]);

// 6. Prime Numbers

// const  checkPrime = (num) => {
//     if(num < 2){ 
//         return false;
//     }
//     for (var i = 2; i < num; i++) {
//         if(num % i === 0){
//             return false;
//     } else{
//         return true;
// }
// }
// }
// console.log(checkPrime(22));

// Step 2

const printPrimes = (prime) => {
    for(let prime = 1; prime <= 100; prime++) {
        let notPrime = false;
        for(let i = 2; i <= prime; i++) {
            if (prime % i === 0 && i !== prime) {
                notPrime = true;
            }
        }
        if(notPrime === false) {
            console.log(prime);
        }
    }
    }
    console.log(printPrimes(99));






































